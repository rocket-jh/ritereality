import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getBlogCollections, isPublicPost, toPublicPost } from "@/lib/blog-db";
import CommentsSection from "./CommentsSection";
import SafeImage from "@/app/blog/components/SafeImage";

export const dynamic = "force-dynamic";

type Params = {
  slug: string;
};

type TocItem = {
  id: string;
  level: 2 | 3;
  text: string;
};

type JsonLdNode = Record<string, unknown>;

const FALLBACK_COVER = "/blog/fallback-cover.svg";
const DEFAULT_AUTHOR_AVATAR = "/blog/default-author.svg";

function toCanonicalUrl(slug: string, canonicalUrl: string) {
  const cleanCanonical = canonicalUrl.trim();
  if (cleanCanonical) return cleanCanonical;
  const site = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  return site ? `${site}/blog/${slug}` : `/blog/${slug}`;
}

function toAbsoluteUrl(value: string) {
  if (/^https?:\/\//i.test(value)) return value;
  const site = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (!site) return value;
  return value.startsWith("/") ? `${site}${value}` : `${site}/${value}`;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function stripHtml(value: string) {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&quot;/gi, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function addHeadingAnchors(html: string) {
  const usedIds = new Map<string, number>();
  const toc: TocItem[] = [];

  const content = html.replace(
    /<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi,
    (_match, rawLevel, rawAttributes, innerHtml) => {
      const level = Number(rawLevel) as 2 | 3;
      const attributes = String(rawAttributes || "");
      const text = stripHtml(String(innerHtml || ""));
      const existingIdMatch = attributes.match(/\sid=(["'])(.*?)\1/i);

      const createUniqueId = (baseId: string) => {
        const seen = usedIds.get(baseId) ?? 0;
        usedIds.set(baseId, seen + 1);
        return seen === 0 ? baseId : `${baseId}-${seen + 1}`;
      };

      const generatedBase = slugifyHeading(text) || `section-${toc.length + 1}`;
      const id = createUniqueId(
        existingIdMatch?.[2]?.trim() || generatedBase,
      );
      const attributesWithoutId = attributes.replace(/\sid=(["']).*?\1/i, "");

      toc.push({
        id,
        level,
        text: text || `Section ${toc.length + 1}`,
      });

      return `<h${level}${attributesWithoutId} id="${id}">${innerHtml}</h${level}>`;
    },
  );

  return { content, toc };
}

function readImageAttribute(rawAttributes: string, key: string) {
  const match = rawAttributes.match(
    new RegExp(`\\s${key}=(["'])([\\s\\S]*?)\\1`, "i"),
  );
  return match?.[2] || "";
}

function decodeHtmlAttribute(value: string) {
  return value
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&amp;/gi, "&");
}

function escapeHtmlText(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function addInlineImageFallbacks(html: string) {
  return html.replace(/<img\b([^>]*)>/gi, (_match, rawAttributes) => {
    let attributes = String(rawAttributes || "");
    const alignRaw = readImageAttribute(attributes, "data-align").toLowerCase();
    const align =
      alignRaw === "left" || alignRaw === "right" ? alignRaw : "center";
    const caption = decodeHtmlAttribute(
      readImageAttribute(attributes, "data-caption"),
    ).trim();

    if (!/\sloading\s*=/i.test(attributes)) {
      attributes += ' loading="lazy"';
    }
    if (!/\sdecoding\s*=/i.test(attributes)) {
      attributes += ' decoding="async"';
    }
    if (!/\sonerror\s*=/i.test(attributes)) {
      attributes += ` onerror="this.onerror=null;this.src='${FALLBACK_COVER}';"`;
    }

    if (!caption) {
      return `<img${attributes}>`;
    }

    const captionAlign =
      align === "left" ? "left" : align === "right" ? "right" : "center";
    return `<figure style="margin:1.25rem 0;"><img${attributes}><figcaption style="margin-top:0.6rem;font-size:0.9rem;line-height:1.5;color:#cbd5e1;text-align:${captionAlign};">${escapeHtmlText(caption)}</figcaption></figure>`;
  });
}

function normalizeHtmlContent(value: unknown) {
  return typeof value === "string" ? value : "";
}

function normalizeStringList(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean);
}

function toSafeDate(value: unknown) {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value;
  }
  if (typeof value === "string" || typeof value === "number") {
    const parsed = new Date(value);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed;
    }
  }
  return null;
}

function parseSchemaNodes(schemaJsonLd: string) {
  const raw = schemaJsonLd.trim();
  if (!raw) return [] as JsonLdNode[];

  try {
    const parsed = JSON.parse(raw) as unknown;
    if (Array.isArray(parsed)) {
      return parsed.filter((item): item is JsonLdNode => isRecord(item));
    }
    if (isRecord(parsed)) {
      const graph = parsed["@graph"];
      const contextValue = parsed["@context"];
      if (Array.isArray(graph)) {
        return graph
          .filter((item): item is JsonLdNode => isRecord(item))
          .map((node) =>
            node["@context"]
              ? node
              : contextValue
                ? { "@context": contextValue, ...node }
                : node,
          );
      }
      return [parsed];
    }
  } catch {
    // Ignore invalid schema payload and use generated defaults.
  }

  return [] as JsonLdNode[];
}

function nodeHasType(node: JsonLdNode, typeName: string) {
  const nodeType = node["@type"];
  const expected = typeName.toLowerCase();
  if (Array.isArray(nodeType)) {
    return nodeType.some((item) => String(item).toLowerCase() === expected);
  }
  return String(nodeType || "").toLowerCase() === expected;
}

function hasSchemaType(nodes: JsonLdNode[], typeName: string) {
  return nodes.some((node) => nodeHasType(node, typeName));
}

function ensureSchemaContext(node: JsonLdNode) {
  return node["@context"] ? node : { "@context": "https://schema.org", ...node };
}

function decodeHtml(value: string) {
  return value
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&quot;/gi, '"')
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

function extractFaqEntries(html: string) {
  const content = html.trim();
  if (!content) return [] as Array<{ question: string; answer: string }>;

  const entries: Array<{ question: string; answer: string }> = [];
  const seen = new Set<string>();
  const pushEntry = (questionRaw: string, answerRaw: string) => {
    const question = decodeHtml(stripHtml(questionRaw))
      .replace(/^(faq|q|question)\s*[:\-]\s*/i, "")
      .trim();
    const answer = decodeHtml(stripHtml(answerRaw))
      .replace(/^(a|answer)\s*[:\-]\s*/i, "")
      .trim();
    if (!question || !answer) return;
    const key = `${question.toLowerCase()}::${answer.toLowerCase()}`;
    if (seen.has(key)) return;
    seen.add(key);
    entries.push({ question, answer });
  };

  const faqBlockPattern =
    /<div\b[^>]*class=(["'])[^"']*\bfaq-block\b[^"']*\1[^>]*>([\s\S]*?)<\/div>/gi;
  for (const match of content.matchAll(faqBlockPattern)) {
    const blockHtml = match[2] || "";
    const questionMatch =
      blockHtml.match(/<(?:h2|h3|h4|summary)\b[^>]*>([\s\S]*?)<\/(?:h2|h3|h4|summary)>/i) ||
      null;
    const answerMatch = blockHtml.match(/<p\b[^>]*>([\s\S]*?)<\/p>/i) || null;
    pushEntry(questionMatch?.[1] || "", answerMatch?.[1] || "");
  }

  const detailsPattern = /<details\b[^>]*>([\s\S]*?)<\/details>/gi;
  for (const match of content.matchAll(detailsPattern)) {
    const detailsHtml = match[1] || "";
    const questionMatch = detailsHtml.match(/<summary\b[^>]*>([\s\S]*?)<\/summary>/i);
    const answerHtml = detailsHtml.replace(/<summary\b[^>]*>[\s\S]*?<\/summary>/i, "");
    pushEntry(questionMatch?.[1] || "", answerHtml);
  }

  const headingFaqPattern =
    /<(h2|h3|h4)\b[^>]*>([\s\S]*?)<\/\1>\s*<p\b[^>]*>([\s\S]*?)<\/p>/gi;
  for (const match of content.matchAll(headingFaqPattern)) {
    const rawQuestion = decodeHtml(stripHtml(match[2] || "")).trim();
    const normalizedQuestion = rawQuestion
      .replace(/^(faq|q|question)\s*[:\-]\s*/i, "")
      .trim();
    const looksLikeFaq =
      /\?\s*$/.test(normalizedQuestion) ||
      /^(faq|q|question)\s*[:\-]/i.test(rawQuestion);
    if (!looksLikeFaq) continue;
    pushEntry(match[2] || "", match[3] || "");
  }

  const qaParagraphPattern =
    /<p\b[^>]*>\s*(?:<strong\b[^>]*>\s*)?(?:q|question)\s*[:\-]\s*(?:<\/strong>\s*)?([\s\S]*?)<\/p>\s*<p\b[^>]*>\s*(?:<strong\b[^>]*>\s*)?(?:a|answer)\s*[:\-]\s*(?:<\/strong>\s*)?([\s\S]*?)<\/p>/gi;
  for (const match of content.matchAll(qaParagraphPattern)) {
    pushEntry(match[1] || "", match[2] || "");
  }

  return entries;
}

function buildBreadcrumbSchema(postTitle: string, canonicalUrl: string): JsonLdNode {
  const currentUrl = toAbsoluteUrl(canonicalUrl);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: toAbsoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: toAbsoluteUrl("/blog"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: postTitle,
        item: currentUrl,
      },
    ],
  };
}

function buildSchema(post: ReturnType<typeof toPublicPost>, canonicalUrl: string) {
  const schemaNodes = parseSchemaNodes(post.seo.schemaJsonLd);
  const siteBase = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  const publisherName = process.env.NEXT_PUBLIC_SITE_NAME?.trim() || "Infobirth";
  const publisherLogoUrl =
    process.env.NEXT_PUBLIC_SITE_LOGO_URL?.trim() ||
    (siteBase ? `${siteBase}/logo.png` : "");
  const canonicalAbsoluteUrl = toAbsoluteUrl(canonicalUrl);

  const defaultBlogPosting: JsonLdNode = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.seo.metaTitle || post.title,
    description: post.seo.metaDescription || post.excerpt,
    datePublished: (
      toSafeDate(post.publishedAt || post.createdAt) || new Date()
    ).toISOString(),
    dateModified: (toSafeDate(post.updatedAt) || new Date()).toISOString(),
    author: {
      "@type": "Person",
      name: post.authorName || "Infobirth Team",
    },
    publisher: {
      "@type": "Organization",
      name: publisherName,
      ...(publisherLogoUrl
        ? {
            logo: {
              "@type": "ImageObject",
              url: publisherLogoUrl,
            },
          }
        : {}),
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalAbsoluteUrl,
    },
    url: canonicalAbsoluteUrl,
    image: post.seo.ogImage
      ? toAbsoluteUrl(post.seo.ogImage)
      : post.featuredImageUrl
        ? toAbsoluteUrl(post.featuredImageUrl)
        : undefined,
    keywords:
      post.seo.keywords?.length > 0
        ? post.seo.keywords.join(", ")
        : post.tags.length > 0
          ? post.tags.join(", ")
          : undefined,
    articleSection: post.categories.length > 0 ? post.categories : undefined,
  };

  const enrichBlogPostingNode = (node: JsonLdNode): JsonLdNode => {
    const defaultAuthor = isRecord(defaultBlogPosting.author)
      ? defaultBlogPosting.author
      : {};
    const defaultPublisher = isRecord(defaultBlogPosting.publisher)
      ? defaultBlogPosting.publisher
      : {};
    const defaultPublisherLogo = isRecord(defaultPublisher.logo)
      ? defaultPublisher.logo
      : null;
    const defaultMainEntity = isRecord(defaultBlogPosting.mainEntityOfPage)
      ? defaultBlogPosting.mainEntityOfPage
      : {};
    const nodeAuthor = isRecord(node.author) ? node.author : null;
    const nodePublisher = isRecord(node.publisher) ? node.publisher : null;
    const nodePublisherLogo =
      nodePublisher && isRecord(nodePublisher.logo) ? nodePublisher.logo : null;
    const nodeMainEntity = isRecord(node.mainEntityOfPage)
      ? node.mainEntityOfPage
      : null;

    return ensureSchemaContext({
      ...defaultBlogPosting,
      ...node,
      "@type": node["@type"] || "BlogPosting",
      author: nodeAuthor ? { ...defaultAuthor, ...nodeAuthor } : defaultAuthor,
      publisher: nodePublisher
        ? {
            ...defaultPublisher,
            ...nodePublisher,
            ...(defaultPublisherLogo || nodePublisherLogo
              ? {
                  logo: {
                    ...(defaultPublisherLogo || {}),
                    ...(nodePublisherLogo || {}),
                  },
                }
              : {}),
          }
        : defaultPublisher,
      mainEntityOfPage: nodeMainEntity
        ? { ...defaultMainEntity, ...nodeMainEntity }
        : defaultMainEntity,
    });
  };

  const baseSchema =
    schemaNodes.length > 0
      ? schemaNodes.map((node) =>
          nodeHasType(node, "BlogPosting") ? enrichBlogPostingNode(node) : node,
        )
      : ([defaultBlogPosting] as JsonLdNode[]);

  if (!hasSchemaType(baseSchema, "BlogPosting")) {
    baseSchema.unshift(defaultBlogPosting);
  }

  if (!hasSchemaType(baseSchema, "BreadcrumbList")) {
    baseSchema.push(buildBreadcrumbSchema(post.title, canonicalUrl));
  }

  const faqEntries = extractFaqEntries(post.content);
  if (faqEntries.length > 0) {
    const faqNode: JsonLdNode = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqEntries.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };
    const faqIndex = baseSchema.findIndex((node) => nodeHasType(node, "FAQPage"));
    if (faqIndex >= 0) {
      baseSchema[faqIndex] = ensureSchemaContext({
        ...baseSchema[faqIndex],
        "@type": "FAQPage",
        mainEntity: faqNode.mainEntity,
      });
    } else {
      baseSchema.push(faqNode);
    }
  }

  const normalized = baseSchema.map((node) => ensureSchemaContext(node));
  return normalized.length === 1 ? normalized[0] : normalized;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { posts } = await getBlogCollections();
  const post = await posts.findOne({ slug });

  if (!post || !isPublicPost(post)) {
    return {
      title: "Post Not Found",
      description: "This blog post could not be found.",
    };
  }

  const parsed = toPublicPost(post);
  const canonicalUrl = toCanonicalUrl(parsed.slug, parsed.seo.canonicalUrl);
  const socialImage = toAbsoluteUrl(
    parsed.seo.ogImage || parsed.featuredImageUrl || FALLBACK_COVER,
  );
  const title = parsed.seo.metaTitle || parsed.title;
  const description = parsed.seo.metaDescription || parsed.excerpt;

  return {
    title,
    description,
    keywords:
      parsed.seo.keywords?.length > 0
        ? parsed.seo.keywords
        : parsed.tags.length > 0
          ? parsed.tags
          : undefined,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !parsed.seo.robotsNoIndex,
      follow: !parsed.seo.robotsNoFollow,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "article",
      siteName: "Infobirth Blog",
      publishedTime: (
        parsed.publishedAt ?? parsed.createdAt
      )?.toISOString?.(),
      modifiedTime: parsed.updatedAt?.toISOString?.(),
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const { posts } = await getBlogCollections();
  const post = await posts.findOne({ slug });

  if (!post || !isPublicPost(post)) {
    notFound();
  }

  const parsed = toPublicPost(post);
  const canonicalUrl = toCanonicalUrl(parsed.slug, parsed.seo.canonicalUrl);
  const schema = buildSchema(parsed, canonicalUrl);
  const shareUrl = toAbsoluteUrl(canonicalUrl);
  const parsedContent = normalizeHtmlContent(parsed.content);
  const parsedCategories = normalizeStringList(parsed.categories);
  const parsedTags = normalizeStringList(parsed.tags);
  const publishedDate =
    toSafeDate(parsed.publishedAt) ?? toSafeDate(parsed.createdAt);
  const { content: headingAnchoredContent, toc } = addHeadingAnchors(
    parsedContent,
  );
  const enhancedContent = addInlineImageFallbacks(headingAnchoredContent);

  const relatedCandidates = await posts
    .find({ _id: { $ne: post._id } })
    .sort({ publishedAt: -1, updatedAt: -1 })
    .limit(24)
    .toArray();

  const relatedPosts = relatedCandidates
    .filter((candidate) => isPublicPost(candidate))
    .map((candidate) => toPublicPost(candidate))
    .map((candidate) => {
      const candidateCategories = normalizeStringList(candidate.categories);
      const matchScore = candidateCategories.filter((category) =>
        parsedCategories.includes(category),
      ).length;
      const publishDate =
        toSafeDate(candidate.publishedAt) ??
        toSafeDate(candidate.createdAt) ??
        new Date(0);
      return { ...candidate, matchScore, publishDate };
    })
    .sort((a, b) => {
      if (b.matchScore !== a.matchScore) return b.matchScore - a.matchScore;
      return b.publishDate.getTime() - a.publishDate.getTime();
    })
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#0b1220] px-4 py-18 text-white sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_250px]">
        <div>
          <div className="relative mb-8 h-64 w-full overflow-hidden rounded-3xl sm:h-80">
            <SafeImage
              src={parsed.featuredImageUrl}
              fallbackSrc={FALLBACK_COVER}
              alt={parsed.title}
              fill
              className="object-center object-top"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
          </div>

        <p className="text-xs uppercase tracking-[0.24em] text-emerald-300">
          {parsedCategories.join(" | ") || "Blog"}
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">
          {parsed.title}
        </h1>
        <p className="mt-3 text-sm text-slate-300">
          By {parsed.authorName} | {" "}
          {publishedDate ? publishedDate.toLocaleDateString() : "Unpublished"}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {parsedTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-200"
            >
              #{tag}
            </span>
          ))}
        </div>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-300">
            <span className="font-semibold text-slate-200">Share:</span>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="rounded-full border border-white/20 px-3 py-1 transition hover:border-emerald-300 hover:text-emerald-200"
            >
              LinkedIn
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(parsed.title)}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="rounded-full border border-white/20 px-3 py-1 transition hover:border-emerald-300 hover:text-emerald-200"
            >
              X
            </a>
          </div>

        <div
            className="blog-content prose prose-invert mt-10 max-w-none prose-headings:text-white prose-blockquote:border-emerald-300 prose-blockquote:text-slate-200 prose-pre:bg-slate-950 prose-code:text-emerald-200"
            dangerouslySetInnerHTML={{ __html: enhancedContent }}
          />

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-7">
            <div className="flex items-start gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/20 bg-white/10">
                <SafeImage
                  src={null}
                  fallbackSrc={DEFAULT_AUTHOR_AVATAR}
                  alt={`${parsed.authorName} profile`}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">About the Author</h2>
                <p className="mt-1 text-sm font-medium text-emerald-200">
                  {parsed.authorName}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Infobirth editors and contributors share practical guides and
                  insights for modern digital teams.
                </p>
              </div>
            </div>
          </section>

          {relatedPosts.length > 0 ? (
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-white">Related Posts</h2>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((item) => (
                  <article
                    key={item.id}
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-emerald-300/45"
                  >
                    <Link href={`/blog/${item.slug}`} className="block">
                      <div className="relative h-36 w-full bg-slate-900">
                        <SafeImage
                          src={item.featuredImageUrl}
                          fallbackSrc={FALLBACK_COVER}
                          alt={item.title}
                          fill
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition duration-300 group-hover:scale-[1.04]"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-xs text-emerald-300">
                          {item.categories[0] || "Blog"}
                        </p>
                        <h3 className="mt-3 text-base font-semibold leading-6 text-white">
                          {item.title}
                        </h3>
                        <p className="mt-3 line-clamp-2 text-sm text-slate-300">
                          {item.excerpt}
                        </p>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          <CommentsSection slug={parsed.slug} />
        </div>

        {toc.length > 0 ? (
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <nav
              aria-label="Table of contents"
              className="rounded-2xl border border-white/10 bg-white/5 p-3"
            >
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-center text-emerald-400">
                On This Page
              </h2>
              <ul className="mt-3 space-y-1.5 text-sm">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`block rounded-md px-2 py-1 text-slate-200 transition hover:bg-white/10 hover:text-emerald-200 ${
                        item.level === 3 ? "ml-3 text-xs text-slate-300" : ""
                      }`}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        ) : null}
      </article>
    </main>
  );
}
