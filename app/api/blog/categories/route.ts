import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { requirePermission } from "@/lib/auth-server";
import { getBlogCollections, slugify } from "@/lib/blog-db";

async function ensureBlogPermission(request: NextRequest) {
  await requirePermission(request, "manage_blogs");
}

function mapStatus(message: string) {
  if (message === "Unauthorized") return 401;
  if (message === "Forbidden") return 403;
  return 500;
}

type CategoryPayload = {
  name?: string;
};

export async function GET() {
  try {
    const { categories } = await getBlogCollections();
    const docs = await categories.find({}).sort({ name: 1 }).toArray();
    return NextResponse.json({
      ok: true,
      categories: docs.map((item) => ({
        id: item._id.toString(),
        name: item.name,
        slug: item.slug,
      })),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load categories.";
    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await ensureBlogPermission(request);
    const payload = (await request.json()) as CategoryPayload;
    const name = payload.name?.trim();
    if (!name) {
      return NextResponse.json(
        { ok: false, message: "Category name is required." },
        { status: 400 },
      );
    }

    const { categories } = await getBlogCollections();
    const slug = slugify(name);
    const existing = await categories.findOne({ slug });
    if (!existing) {
      await categories.insertOne({ _id: new ObjectId(), name, slug });
    }

    const docs = await categories.find({}).sort({ name: 1 }).toArray();
    return NextResponse.json({
      ok: true,
      categories: docs.map((item) => ({
        id: item._id.toString(),
        name: item.name,
        slug: item.slug,
      })),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to create category.";
    const status = mapStatus(message);
    return NextResponse.json({ ok: false, message }, { status });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    await ensureBlogPermission(request);
    const slug = request.nextUrl.searchParams.get("slug");
    if (!slug) {
      return NextResponse.json(
        { ok: false, message: "Category slug is required." },
        { status: 400 },
      );
    }

    const { categories } = await getBlogCollections();
    await categories.deleteOne({ slug });

    const docs = await categories.find({}).sort({ name: 1 }).toArray();
    return NextResponse.json({
      ok: true,
      categories: docs.map((item) => ({
        id: item._id.toString(),
        name: item.name,
        slug: item.slug,
      })),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to delete category.";
    const status = mapStatus(message);
    return NextResponse.json({ ok: false, message }, { status });
  }
}
