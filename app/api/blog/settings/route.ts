import { NextRequest, NextResponse } from "next/server";
import { requirePermission } from "@/lib/auth-server";
import { getBlogCollections } from "@/lib/blog-db";

type SettingsPayload = {
  siteTitle?: string;
  authorName?: string;
};

const fallbackSettings = {
  siteTitle: "Infobirth Blog",
  authorName: "Infobirth Team",
};

async function ensureBlogPermission(request: NextRequest) {
  await requirePermission(request, "manage_blogs");
}

export async function GET() {
  try {
    const { settings } = await getBlogCollections();
    const current = await settings.findOne({ key: "site" });

    if (!current) {
      return NextResponse.json({ ok: true, settings: fallbackSettings });
    }

    return NextResponse.json({
      ok: true,
      settings: {
        siteTitle: current.siteTitle,
        authorName: current.authorName,
      },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load blog settings.";
    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    await ensureBlogPermission(request);
    const payload = (await request.json()) as SettingsPayload;
    const now = new Date();
    const { settings } = await getBlogCollections();

    await settings.updateOne(
      { key: "site" },
      {
        $set: {
          key: "site",
          siteTitle: payload.siteTitle?.trim() || fallbackSettings.siteTitle,
          authorName: payload.authorName?.trim() || fallbackSettings.authorName,
          updatedAt: now,
        },
      },
      { upsert: true },
    );

    const updated = await settings.findOne({ key: "site" });
    return NextResponse.json({
      ok: true,
      settings: {
        siteTitle: updated?.siteTitle || fallbackSettings.siteTitle,
        authorName: updated?.authorName || fallbackSettings.authorName,
      },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to update settings.";
    const status =
      message === "Unauthorized"
        ? 401
        : message === "Forbidden"
          ? 403
          : 500;
    return NextResponse.json({ ok: false, message }, { status });
  }
}
