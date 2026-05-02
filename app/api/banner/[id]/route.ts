import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { requireRole } from "@/lib/auth";
import { handleApiError } from "@/lib/api-response";
import { connectToDatabase } from "@/lib/mongodb";
import { BannerModel } from "@/lib/models/Banner";
import { bannerSchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await requireRole(["admin", "manager"]);
    const body = bannerSchema.parse(await request.json());
    await connectToDatabase();
    const { id } = await params;

    const result = await BannerModel.findByIdAndUpdate(
      id,
      {
        ...body,
        showCta: Boolean(body.showCta),
        ctaLabel: body.showCta ? body.ctaLabel : "",
        ctaHref: body.showCta ? body.ctaHref : "",
        updatedBy: user.id,
      },
      { new: true }
    ).lean();

    if (!result) {
      return NextResponse.json({ error: "Banner not found." }, { status: 404 });
    }

    revalidatePath("/");
    return NextResponse.json({ banner: result });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireRole(["admin", "manager"]);
    await connectToDatabase();
    const { id } = await params;

    const result = await BannerModel.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Banner not found." }, { status: 404 });
    }

    revalidatePath("/");
    return NextResponse.json({ success: true });
  } catch (error) {
    return handleApiError(error);
  }
}
