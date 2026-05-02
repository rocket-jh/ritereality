import { connectToDatabase } from "@/lib/mongodb";
import { BannerModel } from "@/lib/models/Banner";
import { PropertyModel } from "@/lib/models/Property";
import { getProjectStatusValuesForSlug, getPropertyTypeValuesForSlug } from "@/lib/navigation";

export async function getLatestBannersFromDb() {
  await connectToDatabase();
  const banners = await BannerModel.find({}, {}, { sort: { updatedAt: -1 }, limit: 6 }).lean();

  if (banners.length > 0) {
    return {
      banners,
      slideEnabled: banners.length > 1,
    };
  }

  return {
    banners: [
      {
        _id: "default",
        projectName: "Rite Realty",
        title: "Find Premium Projects In Kurukshetra",
        subtitle: "Explore verified plots, villas, and commercial investments in top growth sectors.",
        imageUrl:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80",
        showCta: true,
        ctaLabel: "Explore Projects",
        ctaHref: "/projects/new-launch",
        updatedBy: "system",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    slideEnabled: false,
  };
}

export async function getLatestBannerFromDb() {
  const { banners } = await getLatestBannersFromDb();
  return banners[0];
}

export async function getPublishedProperties(limit = 6) {
  await connectToDatabase();
  return PropertyModel.find(
    { recordStatus: "published" },
    {},
    { sort: { createdAt: -1 }, limit }
  ).lean();
}

export async function getPublishedPropertiesByArea(area: string) {
  await connectToDatabase();
  return PropertyModel.find(
    {
      recordStatus: "published",
      areaSector: { $regex: `^${area}$`, $options: "i" },
    },
    {},
    { sort: { createdAt: -1 } }
  ).lean();
}

export async function getPublishedPropertiesByType(typeSlug: string) {
  const values = getPropertyTypeValuesForSlug(typeSlug);
  await connectToDatabase();
  const query: Record<string, unknown> = {
    recordStatus: "published",
    propertyType: { $in: values },
  };
  return PropertyModel.find(
    query,
    {},
    { sort: { createdAt: -1 } }
  ).lean();
}

export async function getPublishedPropertiesByProjectStatus(statusSlug: string) {
  const values = getProjectStatusValuesForSlug(statusSlug);
  await connectToDatabase();
  const query: Record<string, unknown> = {
    recordStatus: "published",
    projectStatus: { $in: values },
  };
  return PropertyModel.find(
    query,
    {},
    { sort: { createdAt: -1 } }
  ).lean();
}
