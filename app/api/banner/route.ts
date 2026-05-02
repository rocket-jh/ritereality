import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { requireRole } from "@/lib/auth";
import { handleApiError } from "@/lib/api-response";
import { connectToDatabase } from "@/lib/mongodb";
import { BannerModel } from "@/lib/models/Banner";
import { bannerSchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function GET() {
  await connectToDatabase();
  const banners = await BannerModel.find({}, {}, { sort: { updatedAt: -1 }, limit: 6 }).lean();
  const slideEnabled = banners[0]?.slideEnabled ?? banners.length > 1;
  return NextResponse.json({ banners, slideEnabled });
}

export async function POST(request: Request) {
  try {
    const user = await requireRole(["admin", "manager"]);
    const body = bannerSchema.parse(await request.json());
    await connectToDatabase();

    const existingCount = await BannerModel.countDocuments();
    if (existingCount >= 6) {
      return NextResponse.json(
        { error: "Maximum of 6 banners reached. Delete an existing banner before adding another." },
        { status: 400 }
      );
    }

    const banner = await BannerModel.create({
      ...body,
      showCta: Boolean(body.showCta),
      ctaLabel: body.showCta ? body.ctaLabel : "",
      ctaHref: body.showCta ? body.ctaHref : "",
      updatedBy: user.id,
    });

    revalidatePath("/");
    return NextResponse.json({ banner }, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
