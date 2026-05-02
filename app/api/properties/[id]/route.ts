import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { handleApiError } from "@/lib/api-response";
import { requireRole } from "@/lib/auth";
import { connectToDatabase } from "@/lib/mongodb";
import { PropertyModel } from "@/lib/models/Property";
import { normalizePropertyPayload } from "@/lib/property-normalize";
import { toSlug } from "@/lib/slug";
import { propertySchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  await requireRole(["admin", "manager"]);
  await connectToDatabase();
  const { id } = await context.params;
  const property = await PropertyModel.findById(id).lean();
  if (!property) {
    return NextResponse.json({ error: "Property not found." }, { status: 404 });
  }
  return NextResponse.json({ property });
}

export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const user = await requireRole(["admin", "manager"]);
    const { id } = await context.params;
    const normalized = normalizePropertyPayload(await request.json());
    const parsed = propertySchema.parse(normalized);
    await connectToDatabase();

    const existing = await PropertyModel.findById(id);
    if (!existing) {
      return NextResponse.json({ error: "Property not found." }, { status: 404 });
    }

    const targetSlug = toSlug(parsed.slug && parsed.slug.length > 0 ? parsed.slug : parsed.propertyTitle);
    let slug = targetSlug;
    let counter = 1;

    while (await PropertyModel.exists({ slug, _id: { $ne: id } })) {
      slug = `${targetSlug}-${counter}`;
      counter += 1;
    }

    existing.set({
      ...parsed,
      possessionDate: parsed.possessionDate ? new Date(parsed.possessionDate) : null,
      slug,
      updatedBy: user.id,
    });

    await existing.save();

    revalidatePath("/");
    return NextResponse.json({ property: existing });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function DELETE(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await requireRole(["admin"]);
    const { id } = await context.params;
    await connectToDatabase();
    const property = await PropertyModel.findByIdAndDelete(id);

    if (!property) {
      return NextResponse.json({ error: "Property not found." }, { status: 404 });
    }

    revalidatePath("/");
    return NextResponse.json({ ok: true });
  } catch (error) {
    return handleApiError(error);
  }
}
