import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { handleApiError } from "@/lib/api-response";
import { requireRole } from "@/lib/auth";
import { PROPERTY_RECORD_STATUSES } from "@/lib/constants";
import { connectToDatabase } from "@/lib/mongodb";
import { PropertyModel } from "@/lib/models/Property";
import { normalizePropertyPayload } from "@/lib/property-normalize";
import { generatePropertyId } from "@/lib/property-id";
import { toSlug } from "@/lib/slug";
import { propertySchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const area = searchParams.get("area");
  const all = searchParams.get("all") === "1";

  if (all) {
    await requireRole(["admin", "manager"]);
  }

  await connectToDatabase();

  const query: Record<string, unknown> = {};
  if (!all) {
    query.recordStatus = "published";
  }
  if (area) {
    query.areaSector = area;
  }

  const properties = await PropertyModel.find(query, {}, { sort: { createdAt: -1 } }).lean();
  return NextResponse.json({ properties });
}

export async function POST(request: Request) {
  try {
    const user = await requireRole(["admin", "manager"]);
    const normalized = normalizePropertyPayload(await request.json());
    const parsed = propertySchema.parse(normalized);
    await connectToDatabase();

    const propertyCode = parsed.propertyCode && parsed.propertyCode.length > 0
      ? parsed.propertyCode
      : generatePropertyId();

    const baseSlug = toSlug(parsed.slug && parsed.slug.length > 0 ? parsed.slug : parsed.propertyTitle);
    let slug = baseSlug;
    let counter = 1;

    while (await PropertyModel.exists({ slug })) {
      slug = `${baseSlug}-${counter}`;
      counter += 1;
    }

    const property = await PropertyModel.create({
      ...parsed,
      possessionDate: parsed.possessionDate ? new Date(parsed.possessionDate) : null,
      propertyCode,
      slug,
      recordStatus: PROPERTY_RECORD_STATUSES.includes(parsed.recordStatus)
        ? parsed.recordStatus
        : "draft",
      createdBy: user.id,
      updatedBy: user.id,
    });

    revalidatePath("/");
    return NextResponse.json({ property }, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
