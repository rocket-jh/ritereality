import { getAreaSectorFromSlug, getPropertyTypeLabel } from "@/lib/navigation";
import { getPublishedPropertiesByArea } from "@/lib/public-data";

export const dynamic = "force-dynamic";

export default async function LocationsPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area } = await params;
  const areaLabel = getAreaSectorFromSlug(area);
  const properties = await getPublishedPropertiesByArea(areaLabel);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6">
      <h1 className="text-3xl font-semibold text-zinc-900">
        Properties in {areaLabel}, Kurukshetra
      </h1>
      <p className="mt-2 text-sm text-zinc-600">Browse listings mapped from your navbar location links.</p>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {properties.map((property) => (
          <article key={String(property._id)} className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{property.recordStatus}</p>
            <h2 className="mt-1 text-lg font-semibold text-zinc-900">{property.propertyTitle}</h2>
            <p className="mt-1 text-sm text-zinc-600">
              {getPropertyTypeLabel(property.propertyType)} - {property.areaSector}
            </p>
            <p className="mt-2 text-sm font-medium text-zinc-900">INR {property.price}</p>
          </article>
        ))}
        {properties.length === 0 ? (
          <p className="rounded-xl border border-zinc-200 p-4 text-sm text-zinc-700">
            No published properties available for this area yet.
          </p>
        ) : null}
      </div>
    </main>
  );
}
