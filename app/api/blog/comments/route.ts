import crypto from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { requirePermission } from "@/lib/auth-server";
import {
  BlogComment,
  BlogCommentStatus,
  getBlogCollections,
  isPublicPost,
  objectIdFromString,
  toPublicComment,
} from "@/lib/blog-db";

type CommentPayload = {
  slug?: string;
  parentId?: string | null;
  authorName?: string;
  authorEmail?: string;
  content?: string;
  website?: string;
};

const SPAM_PATTERNS = [
  /viagra|casino|xbet|loan|forex|crypto giveaway|telegram/i,
  /make money fast|work from home|click here now/i,
  /(https?:\/\/[^\s]+){3,}/i,
];

async function ensureBlogPermission(request: NextRequest) {
  await requirePermission(request, "manage_blogs");
}

function mapStatus(message: string) {
  if (message === "Unauthorized") return 401;
  if (message === "Forbidden") return 403;
  return 500;
}

function sanitizeCommentContent(value: string) {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function sanitizeName(value: string) {
  return value.replace(/[^\p{L}\p{N}\s.'-]/gu, "").trim();
}

function sanitizeEmail(value: string) {
  return value.trim().toLowerCase();
}

function isEmailValid(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value);
}

function hashIpAddress(ipAddress: string) {
  return crypto.createHash("sha256").update(ipAddress).digest("hex");
}

function inferSpamReason(content: string, website: string, authorName: string) {
  if (website.trim()) return "Honeypot field populated.";
  if (authorName.length < 2) return "Name is too short.";
  if (/(.)\1{8,}/.test(content)) return "Repeated characters detected.";
  if (content.length < 3) return "Content is too short.";
  if (content.length > 2000) return "Content exceeds 2000 characters.";
  if (SPAM_PATTERNS.some((pattern) => pattern.test(content))) {
    return "Spam pattern matched.";
  }
  return "";
}

async function resolveDepth(
  comments: Awaited<ReturnType<typeof getBlogCollections>>["comments"],
  slug: string,
  parentId: ObjectId | null,
) {
  if (!parentId) return 0;
  let depth = 1;
  let currentId: ObjectId | null = parentId;
  while (currentId) {
    const parent: BlogComment | null = await comments.findOne({
      _id: currentId,
      postSlug: slug,
    });
    if (!parent) throw new Error("Parent comment not found for this post.");
    if (!parent.parentId) break;
    depth += 1;
    if (depth >= 5) throw new Error("Maximum reply depth reached.");
    currentId = parent.parentId;
  }
  return depth;
}

export async function GET(request: NextRequest) {
  try {
    const slug = request.nextUrl.searchParams.get("slug")?.trim() || "";
    if (!slug) {
      return NextResponse.json(
        { ok: false, message: "Post slug is required." },
        { status: 400 },
      );
    }

    const includeAll = request.nextUrl.searchParams.get("scope") === "all";
    if (includeAll) {
      await ensureBlogPermission(request);
    }

    const { comments, posts } = await getBlogCollections();
    const post = await posts.findOne({ slug });
    if (!post) {
      return NextResponse.json(
        { ok: false, message: "Post not found." },
        { status: 404 },
      );
    }

    if (!includeAll && !isPublicPost(post)) {
      return NextResponse.json(
        { ok: false, message: "Post not found." },
        { status: 404 },
      );
    }

    const query: Partial<BlogComment> = { postSlug: slug };
    if (!includeAll) query.status = "approved";
    const items = await comments.find(query).sort({ createdAt: 1 }).toArray();

    return NextResponse.json({
      ok: true,
      comments: items.map((item) => toPublicComment(item)),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load comments.";
    const status = mapStatus(message);
    return NextResponse.json({ ok: false, message }, { status });
  }
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as CommentPayload;
    const slug = payload.slug?.trim() || "";
    if (!slug) {
      return NextResponse.json(
        { ok: false, message: "Post slug is required." },
        { status: 400 },
      );
    }

    const authorName = sanitizeName(payload.authorName || "");
    const authorEmail = sanitizeEmail(payload.authorEmail || "");
    const content = sanitizeCommentContent(payload.content || "");
    if (!authorName || !authorEmail || !content) {
      return NextResponse.json(
        { ok: false, message: "Name, email, and comment are required." },
        { status: 400 },
      );
    }
    if (!isEmailValid(authorEmail)) {
      return NextResponse.json(
        { ok: false, message: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const { comments, posts } = await getBlogCollections();
    const post = await posts.findOne({ slug });
    if (!post || !isPublicPost(post)) {
      return NextResponse.json(
        { ok: false, message: "Post not found." },
        { status: 404 },
      );
    }

    const parentIdRaw = payload.parentId?.trim() || "";
    const parentId = parentIdRaw ? objectIdFromString(parentIdRaw) : null;
    if (parentIdRaw && !parentId) {
      return NextResponse.json(
        { ok: false, message: "Invalid parent comment id." },
        { status: 400 },
      );
    }
    await resolveDepth(comments, slug, parentId);

    const ipAddress =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const ipHash = hashIpAddress(ipAddress);

    const since = new Date(Date.now() - 60 * 1000);
    const recentByIp = await comments.countDocuments({
      postSlug: slug,
      ipHash,
      createdAt: { $gte: since },
    });
    if (recentByIp >= 5) {
      return NextResponse.json(
        { ok: false, message: "Too many comments. Please wait a minute." },
        { status: 429 },
      );
    }

    let moderationReason = inferSpamReason(
      content,
      payload.website || "",
      authorName,
    );

    const duplicate = await comments.findOne({
      postSlug: slug,
      authorEmail,
      content,
      createdAt: { $gte: new Date(Date.now() - 2 * 60 * 1000) },
    });
    if (duplicate && !moderationReason) {
      moderationReason = "Duplicate comment detected.";
    }

    const status: BlogCommentStatus = moderationReason ? "spam" : "approved";
    const now = new Date();

    const result = await comments.insertOne({
      _id: new ObjectId(),
      postSlug: slug,
      parentId,
      authorName,
      authorEmail,
      content,
      status,
      moderationReason,
      ipHash,
      userAgent: request.headers.get("user-agent") || "",
      createdAt: now,
      updatedAt: now,
    });

    const created = await comments.findOne({ _id: result.insertedId });
    return NextResponse.json({
      ok: true,
      message:
        status === "approved"
          ? "Comment posted."
          : "Comment flagged for moderation.",
      comment: created ? toPublicComment(created) : null,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to add comment.";
    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}
