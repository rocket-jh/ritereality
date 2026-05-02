import { del, put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { requirePermission } from "@/lib/auth-server";
import { getBlogCollections, objectIdFromString } from "@/lib/blog-db";

function sanitizeFileName(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]/g, "-");
}

async function ensureBlogPermission(request: NextRequest) {
  await requirePermission(request, "manage_blogs");
}

export async function GET() {
  try {
    const { media } = await getBlogCollections();
    const docs = await media.find({}).sort({ createdAt: -1 }).limit(120).toArray();
    return NextResponse.json({
      ok: true,
      media: docs.map((item) => ({
        id: item._id.toString(),
        url: item.url,
        fileName: item.fileName,
        contentType: item.contentType,
        size: item.size,
        width: item.width,
        height: item.height,
        createdAt: item.createdAt,
      })),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load media library.";
    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await ensureBlogPermission(request);
    const formData = await request.formData();
    const file = formData.get("file");
    const widthRaw = formData.get("width");
    const heightRaw = formData.get("height");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { ok: false, message: "Please upload a file." },
        { status: 400 },
      );
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { ok: false, message: "Only image uploads are allowed." },
        { status: 400 },
      );
    }

    const token = process.env.BLOB_READ_WRITE_TOKEN;
    if (!token) {
      return NextResponse.json(
        { ok: false, message: "Missing BLOB_READ_WRITE_TOKEN." },
        { status: 500 },
      );
    }

    const safeName = sanitizeFileName(file.name || "image.jpg");
    const pathName = `blog-media/${Date.now()}-${safeName}`;

    const blob = await put(pathName, file, {
      access: "public",
      token,
      addRandomSuffix: true,
    });

    const width = widthRaw ? Number(widthRaw) : undefined;
    const height = heightRaw ? Number(heightRaw) : undefined;

    const { media } = await getBlogCollections();
    const result = await media.insertOne({
      _id: new ObjectId(),
      url: blob.url,
      fileName: safeName,
      contentType: file.type,
      size: file.size,
      width: Number.isFinite(width) ? width : undefined,
      height: Number.isFinite(height) ? height : undefined,
      createdAt: new Date(),
    });

    const created = await media.findOne({ _id: result.insertedId });
    return NextResponse.json({
      ok: true,
      media: created
        ? {
            id: created._id.toString(),
            url: created.url,
            fileName: created.fileName,
            contentType: created.contentType,
            size: created.size,
            width: created.width,
            height: created.height,
            createdAt: created.createdAt,
          }
        : null,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to upload media.";
    const status =
      message === "Unauthorized"
        ? 401
        : message === "Forbidden"
          ? 403
          : 500;
    return NextResponse.json({ ok: false, message }, { status });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    await ensureBlogPermission(request);
    const id = request.nextUrl.searchParams.get("id") || "";
    const objectId = objectIdFromString(id);
    if (!objectId) {
      return NextResponse.json({ ok: false, message: "Invalid media id." }, { status: 400 });
    }

    const { media } = await getBlogCollections();
    const existing = await media.findOne({ _id: objectId });
    if (!existing) {
      return NextResponse.json({ ok: false, message: "Media not found." }, { status: 404 });
    }

    const token = process.env.BLOB_READ_WRITE_TOKEN;
    if (!token) {
      return NextResponse.json(
        { ok: false, message: "Missing BLOB_READ_WRITE_TOKEN." },
        { status: 500 },
      );
    }

    await del(existing.url, { token });
    await media.deleteOne({ _id: objectId });

    return NextResponse.json({
      ok: true,
      deleted: {
        id: existing._id.toString(),
        url: existing.url,
      },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to delete media.";
    const status =
      message === "Unauthorized"
        ? 401
        : message === "Forbidden"
          ? 403
          : 500;
    return NextResponse.json({ ok: false, message }, { status });
  }
}
