import { getPropertyTypeLabel } from "@/lib/navigation";
import { getPublishedPropertiesByType } from "@/lib/public-data";

export const dynamic = "force-dynamic";

export default async function PropertyTypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const typeSlug = decodeURIComponent(type).trim().toLowerCase();
  const typeLabel = getPropertyTypeLabel(typeSlug);
  const properties = await getPublishedPropertiesByType(typeSlug);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6">
      <h1 className="text-3xl font-semibold text-zinc-900">Properties: {typeLabel}</h1>
      <p className="mt-2 text-sm text-zinc-600">Filtered using your navbar property type dropdown.</p>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {properties.map((property) => (
          <article key={String(property._id)} className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{property.recordStatus}</p>
            <h2 className="mt-1 text-lg font-semibold text-zinc-900">{property.propertyTitle}</h2>
            <p className="mt-1 text-sm text-zinc-600">
              {property.areaSector}, {property.city}
            </p>
            <p className="mt-2 text-sm font-medium text-zinc-900">INR {property.price}</p>
          </article>
        ))}
        {properties.length === 0 ? (
          <p className="rounded-xl border border-zinc-200 p-4 text-sm text-zinc-700">
            No published properties available for this category yet.
          </p>
        ) : null}
      </div>
    </main>
  );
}
