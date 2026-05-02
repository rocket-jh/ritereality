import { NextRequest, NextResponse } from "next/server";
import { requirePermission } from "@/lib/auth-server";
import {
  BlogPostStatus,
  ensureUniqueSlug,
  getBlogCollections,
  htmlToExcerpt,
  normalizeSeo,
  objectIdFromString,
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

type UpdatePayload = {
  title?: string;
  slug?: string;
  content?: string;
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

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await ensureBlogPermission(request);
    const { id } = await params;
    const objectId = objectIdFromString(id);
    if (!objectId) {
      return NextResponse.json(
        { ok: false, message: "Invalid post id." },
        { status: 400 },
      );
    }

    const { posts } = await getBlogCollections();
    const post = await posts.findOne({ _id: objectId });
    if (!post) {
      return NextResponse.json(
        { ok: false, message: "Post not found." },
        { status: 404 },
      );
    }

    return NextResponse.json({ ok: true, post: toPublicPost(post) });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load blog post.";
    const status = mapStatus(message);
    return NextResponse.json({ ok: false, message }, { status });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await ensureBlogPermission(request);
    const { id } = await params;
    const objectId = objectIdFromString(id);
    if (!objectId) {
      return NextResponse.json(
        { ok: false, message: "Invalid post id." },
        { status: 400 },
      );
    }

    const payload = (await request.json()) as UpdatePayload;
    const { posts } = await getBlogCollections();
    const existing = await posts.findOne({ _id: objectId });
    if (!existing) {
      return NextResponse.json(
        { ok: false, message: "Post not found." },
        { status: 404 },
      );
    }

    const title = payload.title?.trim() || existing.title;
    const baseSlug = payload.slug?.trim() || slugify(title) || existing.slug;
    const slug = await ensureUniqueSlug(posts, baseSlug, id);
    const content = payload.content ?? existing.content;
    const excerpt = htmlToExcerpt(content);
    const status = payload.status ?? existing.status;
    const now = new Date();
    const scheduledAt =
      status === "scheduled" && payload.scheduledAt
        ? new Date(payload.scheduledAt)
        : status === "scheduled"
          ? existing.scheduledAt
          : null;

    const publishedAt =
      status === "published"
        ? existing.publishedAt || now
        : status === "scheduled"
          ? null
          : null;

    await posts.updateOne(
      { _id: objectId },
      {
        $set: {
          title,
          slug,
          excerpt,
          content,
          featuredImageUrl: payload.featuredImageUrl ?? existing.featuredImageUrl,
          categories: parseCategories(payload.categories ?? existing.categories),
          tags: parseTags(payload.tags ?? existing.tags),
          status,
          scheduledAt,
          publishedAt,
          authorName: payload.authorName?.trim() || existing.authorName,
          seo: normalizeSeo(
            { ...existing.seo, ...payload.seo },
            title,
            excerpt,
            payload.featuredImageUrl ?? existing.featuredImageUrl,
          ),
          updatedAt: now,
        },
      },
    );

    const updated = await posts.findOne({ _id: objectId });
    return NextResponse.json({
      ok: true,
      post: updated ? toPublicPost(updated) : null,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to update blog post.";
    const status = mapStatus(message);
    return NextResponse.json({ ok: false, message }, { status });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await ensureBlogPermission(request);
    const { id } = await params;
    const objectId = objectIdFromString(id);
    if (!objectId) {
      return NextResponse.json(
        { ok: false, message: "Invalid post id." },
        { status: 400 },
      );
    }

    const { posts } = await getBlogCollections();
    await posts.deleteOne({ _id: objectId });
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to delete blog post.";
    const status = mapStatus(message);
    return NextResponse.json({ ok: false, message }, { status });
  }
}
