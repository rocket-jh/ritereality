import Link from "next/link";
import { getBlogCollections, isPublicPost, toPublicPost } from "@/lib/blog-db";
import SafeImage from "@/app/blog/components/SafeImage";

export const dynamic = "force-dynamic";

type PublicPost = ReturnType<typeof toPublicPost>;

function toAbsoluteUrl(value: string) {
  if (/^https?:\/\//i.test(value)) return value;
  const site = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (!site) return value;
  return value.startsWith("/") ? `${site}${value}` : `${site}/${value}`;
}

function buildBlogPageSchema(posts: PublicPost[], siteTitle: string) {
  const blogUrl = toAbsoluteUrl("/blog");
  const itemListElement = posts.slice(0, 24).map((post, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: toAbsoluteUrl(`/blog/${post.slug}`),
    name: post.title,
  }));

  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: siteTitle,
      url: blogUrl,
      description:
        "Browse the latest insights, tutorials, and updates from Infobirth.",
      mainEntity: {
        "@type": "ItemList",
        itemListElement,
      },
    },
    {
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
          item: blogUrl,
        },
      ],
    },
  ];
}

export default async function BlogPage() {
  const { posts, settings } = await getBlogCollections();
  const [allPosts, siteSettings] = await Promise.all([
    posts.find({}).sort({ updatedAt: -1 }).toArray(),
    settings.findOne({ key: "site" }),
  ]);

  const publicPosts = allPosts
    .filter((post) => isPublicPost(post))
    .sort((a, b) => {
      const aDate = a.publishedAt ?? a.createdAt;
      const bDate = b.publishedAt ?? b.createdAt;
      return bDate.getTime() - aDate.getTime();
    })
    .map((post) => toPublicPost(post));

  const siteTitle = siteSettings?.siteTitle || "Infobirth Blog";
  const fallbackCover = "/blog/fallback-cover.svg";
  const schema = buildBlogPageSchema(publicPosts, siteTitle);

  return (
    <main className="min-h-screen bg-[#0b1220] px-4 py-16 text-white sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="mx-auto w-full max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
          Infobirth Blogs
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-5xl">{siteTitle}</h1>
        <p className="mt-4 max-w-3xl text-sm text-slate-300 sm:text-base">
          Browse the latest insights, tutorials, and updates from Infobirth.
        </p>

        {publicPosts.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">
            No published posts yet.
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {publicPosts.map((post) => (
              <article
                key={post.id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_16px_45px_rgba(2,6,23,0.4)] transition hover:-translate-y-1 hover:border-emerald-300/50"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-52 w-full bg-slate-900">
                    <SafeImage
                      src={post.featuredImageUrl}
                      fallbackSrc={fallbackCover}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {post.categories.slice(0, 2).map((category) => (
                        <span
                          key={category}
                          className="rounded-full border border-emerald-400/35 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-300"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl font-semibold leading-tight text-white">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {post.excerpt}
                    </p>
                    <p className="mt-4 text-xs text-slate-400">
                      {new Date(
                        post.publishedAt ?? post.createdAt,
                      ).toLocaleDateString()}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
