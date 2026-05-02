import { getLatestBannersFromDb } from "@/lib/public-data";
import BannerCarousel from "./BannerCarousel";

export default async function BannerSection() {
  const { banners, slideEnabled } = await getLatestBannersFromDb();

  return <BannerCarousel banners={banners} autoSlide={slideEnabled} />;
}
