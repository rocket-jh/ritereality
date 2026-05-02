import { ObjectId } from "mongodb";
import { getDb } from "@/lib/mongodb";

export type BlogPostStatus = "draft" | "published" | "scheduled";

export type BlogPost = {
  _id: ObjectId;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImageUrl: string;
  categories: string[];
  tags: string[];
  status: BlogPostStatus;
  scheduledAt: Date | null;
  publishedAt: Date | null;
  authorName: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    ogImage: string;
    canonicalUrl: string;
    schemaJsonLd: string;
    keywords: string[];
    robotsNoIndex: boolean;
    robotsNoFollow: boolean;
  };
  createdAt: Date;
  updatedAt: Date;
};

export type BlogCommentStatus = "approved" | "pending" | "spam";

export type BlogComment = {
  _id: ObjectId;
  postSlug: string;
  parentId: ObjectId | null;
  authorName: string;
  authorEmail: string;
  content: string;
  status: BlogCommentStatus;
  moderationReason: string;
  ipHash: string;
  userAgent: string;
  createdAt: Date;
  updatedAt: Date;
};

export type BlogMedia = {
  _id: ObjectId;
  url: string;
  fileName: string;
  contentType: string;
  size: number;
  width?: number;
  height?: number;
  createdAt: Date;
};

export type BlogSettings = {
  _id: ObjectId;
  key: "site";
  siteTitle: string;
  authorName: string;
  updatedAt: Date;
};

export function normalizeSeo(
  seo:
    | {
        metaTitle?: string;
        metaDescription?: string;
        ogImage?: string;
        canonicalUrl?: string;
        schemaJsonLd?: string;
        keywords?: string[] | string;
        robotsNoIndex?: boolean;
        robotsNoFollow?: boolean;
      }
    | null
    | undefined,
  fallbackTitle = "",
  fallbackDescription = "",
  fallbackOgImage = "",
) {
  return {
    metaTitle: seo?.metaTitle?.trim() || fallbackTitle,
    metaDescription: seo?.metaDescription?.trim() || fallbackDescription,
    ogImage: seo?.ogImage?.trim() || fallbackOgImage,
    canonicalUrl: seo?.canonicalUrl?.trim() || "",
    schemaJsonLd: seo?.schemaJsonLd?.trim() || "",
    keywords: parseTags(seo?.keywords),
    robotsNoIndex: Boolean(seo?.robotsNoIndex),
    robotsNoFollow: Boolean(seo?.robotsNoFollow),
  };
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function htmlToExcerpt(html: string) {
  const plain = html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<\/?[^>]+(>|$)/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return plain.slice(0, 180);
}

export function parseTags(raw: string[] | string | null | undefined) {
  if (!raw) return [];
  const list = Array.isArray(raw) ? raw : raw.split(",");
  return Array.from(
    new Set(
      list
        .map((item) => item.trim().toLowerCase())
        .filter(Boolean),
    ),
  );
}

export function parseCategories(raw: string[] | null | undefined) {
  if (!raw) return [];
  return Array.from(
    new Set(
      raw
        .map((item) => item.trim())
        .filter(Boolean),
    ),
  );
}

export function toPublicPost(post: BlogPost) {
  const seo = normalizeSeo(
    post.seo,
    post.title,
    post.excerpt,
    post.featuredImageUrl,
  );
  return {
    id: post._id.toString(),
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    featuredImageUrl: post.featuredImageUrl,
    categories: post.categories,
    tags: post.tags,
    status: post.status,
    scheduledAt: post.scheduledAt,
    publishedAt: post.publishedAt,
    authorName: post.authorName,
    seo,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
  };
}

export function toPublicComment(comment: BlogComment) {
  return {
    id: comment._id.toString(),
    postSlug: comment.postSlug,
    parentId: comment.parentId?.toString() || null,
    authorName: comment.authorName,
    content: comment.content,
    status: comment.status,
    moderationReason: comment.moderationReason,
    createdAt: comment.createdAt,
    updatedAt: comment.updatedAt,
  };
}

export function isPublicPost(post: BlogPost) {
  if (post.status === "published") return true;
  if (post.status === "scheduled" && post.scheduledAt) {
    return post.scheduledAt.getTime() <= Date.now();
  }
  return false;
}

export async function getBlogCollections() {
  const db = await getDb();
  const posts = db.collection<BlogPost>("blog_posts");
  const categories = db.collection<{ _id: ObjectId; name: string; slug: string }>(
    "blog_categories",
  );
  const media = db.collection<BlogMedia>("blog_media");
  const settings = db.collection<BlogSettings>("blog_settings");
  const comments = db.collection<BlogComment>("blog_comments");
  return { posts, categories, media, settings, comments };
}

export async function ensureUniqueSlug(
  postsCollection: Awaited<ReturnType<typeof getBlogCollections>>["posts"],
  baseSlug: string,
  excludeId?: string,
) {
  const cleanBase = slugify(baseSlug) || "untitled-post";
  let candidate = cleanBase;
  let index = 1;

  while (true) {
    const existing = await postsCollection.findOne({ slug: candidate });
    if (!existing) return candidate;
    if (excludeId && existing._id.toString() === excludeId) return candidate;
    index += 1;
    candidate = `${cleanBase}-${index}`;
  }
}

export function objectIdFromString(id: string) {
  try {
    return new ObjectId(id);
  } catch {
    return null;
  }
}
