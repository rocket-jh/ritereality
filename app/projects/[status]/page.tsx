import { getProjectStatusLabel } from "@/lib/navigation";
import { getPublishedPropertiesByProjectStatus } from "@/lib/public-data";

export const dynamic = "force-dynamic";

export default async function ProjectStatusPage({
  params,
}: {
  params: Promise<{ status: string }>;
}) {
  const { status } = await params;
  const statusSlug = decodeURIComponent(status).trim().toLowerCase();
  const statusLabel = getProjectStatusLabel(statusSlug);
  const properties = await getPublishedPropertiesByProjectStatus(statusSlug);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6">
      <h1 className="text-3xl font-semibold text-zinc-900">Projects: {statusLabel}</h1>
      <p className="mt-2 text-sm text-zinc-600">Filtered using your navbar project status dropdown.</p>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {properties.map((property) => (
          <article key={String(property._id)} className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{property.recordStatus}</p>
            <h2 className="mt-1 text-lg font-semibold text-zinc-900">{property.propertyTitle}</h2>
            <p className="mt-1 text-sm text-zinc-600">
              {property.projectName} | {property.areaSector}, {property.city}
            </p>
            <p className="mt-2 text-sm font-medium text-zinc-900">INR {property.price}</p>
          </article>
        ))}
        {properties.length === 0 ? (
          <p className="rounded-xl border border-zinc-200 p-4 text-sm text-zinc-700">
            No published projects available for this status yet.
          </p>
        ) : null}
      </div>
    </main>
  );
}
