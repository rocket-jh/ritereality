import Link from "next/link";
import { getPublishedProperties } from "@/lib/public-data";

export default async function FeaturedProperties() {
  const properties = await getPublishedProperties(6);

  return (
    <section className="mx-auto mt-10 mb-16 w-full max-w-7xl px-4 md:px-6">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-2xl font-semibold text-zinc-900">Featured Properties</h2>
        <Link href="/cms" className="text-sm font-semibold text-zinc-700 hover:text-zinc-900">
          Open CMS
        </Link>
      </div>

      {properties.length === 0 ? (
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 text-sm text-zinc-700">
          No published properties yet.
        </div>
      ) : (
        <div className="grid gap-3 md:grid-cols-2">
          {properties.map((property) => (
            <article key={String(property._id)} className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                {property.recordStatus}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-zinc-900">{property.propertyTitle}</h3>
              <p className="mt-1 text-sm text-blue-600">
                {property.propertyType} - {property.areaSector}, {property.city}
              </p>
              <p className="mt-2 text-sm font-medium text-red-500">INR {property.price}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
