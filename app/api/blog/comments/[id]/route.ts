import { NextRequest, NextResponse } from "next/server";
import { requirePermission } from "@/lib/auth-server";
import { BlogCommentStatus, getBlogCollections, objectIdFromString, toPublicComment } from "@/lib/blog-db";

type CommentUpdatePayload = {
  status?: BlogCommentStatus;
  moderationReason?: string;
};

async function ensureBlogPermission(request: NextRequest) {
  await requirePermission(request, "manage_blogs");
}

function mapStatus(message: string) {
  if (message === "Unauthorized") return 401;
  if (message === "Forbidden") return 403;
  return 500;
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await ensureBlogPermission(request);
    const { id } = await params;
    const objectId = objectIdFromString(id);
    if (!objectId) {
      return NextResponse.json(
        { ok: false, message: "Invalid comment id." },
        { status: 400 },
      );
    }

    const payload = (await request.json()) as CommentUpdatePayload;
    const status = payload.status;
    if (!status || !["approved", "pending", "spam"].includes(status)) {
      return NextResponse.json(
        { ok: false, message: "A valid comment status is required." },
        { status: 400 },
      );
    }

    const { comments } = await getBlogCollections();
    const existing = await comments.findOne({ _id: objectId });
    if (!existing) {
      return NextResponse.json(
        { ok: false, message: "Comment not found." },
        { status: 404 },
      );
    }

    await comments.updateOne(
      { _id: objectId },
      {
        $set: {
          status,
          moderationReason: payload.moderationReason?.trim() || "",
          updatedAt: new Date(),
        },
      },
    );

    const updated = await comments.findOne({ _id: objectId });
    return NextResponse.json({
      ok: true,
      comment: updated ? toPublicComment(updated) : null,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to update comment.";
    const status = mapStatus(message);
    return NextResponse.json({ ok: false, message }, { status });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await ensureBlogPermission(request);
    const { id } = await params;
    const objectId = objectIdFromString(id);
    if (!objectId) {
      return NextResponse.json(
        { ok: false, message: "Invalid comment id." },
        { status: 400 },
      );
    }

    const { comments } = await getBlogCollections();
    const existing = await comments.findOne({ _id: objectId });
    if (!existing) {
      return NextResponse.json(
        { ok: false, message: "Comment not found." },
        { status: 404 },
      );
    }

    await comments.deleteMany({
      $or: [{ _id: objectId }, { parentId: objectId }],
      postSlug: existing.postSlug,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to delete comment.";
    const status = mapStatus(message);
    return NextResponse.json({ ok: false, message }, { status });
  }
}
