import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { requirePermission } from "@/lib/auth-server";
import {
  BlogPostStatus,
  ensureUniqueSlug,
  getBlogCollections,
  htmlToExcerpt,
  isPublicPost,
  normalizeSeo,
  parseCategories,
  parseTags,
  slugify,
  toPublicPost,
} from "@/lib/blog-db";

async function ensureBlogPermission(request: NextRequest) {
  await requirePermission(request, "manage_blogs");
}

function mapStatus(message: string) {
  if (message === "Unauthorized") return 401;
  if (message === "Forbidden") return 403;
  return 500;
}

type PostPayload = {
  title: string;
  slug?: string;
  content: string;
  featuredImageUrl?: string;
  categories?: string[];
  tags?: string[];
  status?: BlogPostStatus;
  scheduledAt?: string | null;
  authorName?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: string;
    canonicalUrl?: string;
    schemaJsonLd?: string;
    keywords?: string[] | string;
    robotsNoIndex?: boolean;
    robotsNoFollow?: boolean;
  };
};

export async function GET(request: NextRequest) {
  try {
    const scope = request.nextUrl.searchParams.get("scope");
    const includeAll = scope === "all";
    if (includeAll) {
      await ensureBlogPermission(request);
    }

    const { posts } = await getBlogCollections();
    const allPosts = await posts.find({}).sort({ updatedAt: -1 }).toArray();
    const filteredPosts = includeAll
      ? allPosts
      : allPosts.filter((post) => isPublicPost(post));

    return NextResponse.json({
      ok: true,
      posts: filteredPosts.map((post) => toPublicPost(post)),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load blog posts.";
    const status = mapStatus(message);
    return NextResponse.json({ ok: false, message }, { status });
  }
}

export async function POST(request: NextRequest) {
  try {
    await ensureBlogPermission(request);
    const payload = (await request.json()) as PostPayload;
    const { posts } = await getBlogCollections();
    const now = new Date();

    const title = payload.title?.trim() || "Untitled Post";
    const baseSlug = payload.slug?.trim() || slugify(title);
    const slug = await ensureUniqueSlug(posts, baseSlug);
    const content = payload.content || "";
    const status: BlogPostStatus = payload.status || "draft";
    const scheduledAt =
      status === "scheduled" && payload.scheduledAt
        ? new Date(payload.scheduledAt)
        : null;
    const publishedAt = status === "published" ? now : null;

    const excerpt = htmlToExcerpt(content);
    const doc = {
      _id: new ObjectId(),
      title,
      slug,
      excerpt,
      content,
      featuredImageUrl: payload.featuredImageUrl || "",
      categories: parseCategories(payload.categories),
      tags: parseTags(payload.tags),
      status,
      scheduledAt,
      publishedAt,
      authorName: payload.authorName?.trim() || "Infobirth Team",
      seo: normalizeSeo(payload.seo, title, excerpt, payload.featuredImageUrl || ""),
      createdAt: now,
      updatedAt: now,
    };

    const result = await posts.insertOne(doc);
    const created = await posts.findOne({ _id: result.insertedId });

    return NextResponse.json({
      ok: true,
      post: created ? toPublicPost(created) : null,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to create blog post.";
    const status = mapStatus(message);
    return NextResponse.json({ ok: false, message }, { status });
  }
}
