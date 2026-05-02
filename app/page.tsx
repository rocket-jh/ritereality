
import BannerSection from "./components/BannerSection";
import FeaturedProperties from "./components/FeaturedProperties";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="min-h-screen">
      <BannerSection />
      <FeaturedProperties />
    </main>
  );
}
