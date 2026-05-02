"use client";

import { useEffect, useState } from "react";

type BannerItem = {
  _id: string;
  projectName: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  showCta?: boolean;
  ctaLabel: string;
  ctaHref: string;
};

interface BannerCarouselProps {
  banners: BannerItem[];
  autoSlide: boolean;
}

export default function BannerCarousel({ banners, autoSlide }: BannerCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const enabled = autoSlide && banners.length > 1;

  useEffect(() => {
    setActiveIndex(0);
  }, [banners]);

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % banners.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [enabled, banners.length]);

  if (banners.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto mt-10 w-full max-w-7xl px-4 md:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-900 text-white">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {banners.map((banner) => (
            <div
              key={banner._id}
              className="min-w-full bg-cover bg-center px-6 py-16 md:px-12"
              style={{
                backgroundImage: `linear-gradient(100deg, rgba(9, 9, 11, 0.87), rgba(24, 24, 27, 0.5)), url('${banner.imageUrl}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="max-w-3xl">
                <p className="text-sm font-semibold tracking-[0.16em] text-amber-200">
                  {banner.projectName}
                </p>
                <h1 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
                  {banner.title}
                </h1>
                <p className="mt-4 text-base text-zinc-100 md:text-lg">{banner.subtitle}</p>
                {banner.showCta !== false && banner.ctaLabel?.trim() && banner.ctaHref?.trim() ? (
                  <div className="mt-8">
                    <a
                      href={banner.ctaHref}
                      className="inline-flex rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-amber-300"
                    >
                      {banner.ctaLabel}
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {enabled ? (
          <>
            <button
              type="button"
              onClick={() => setActiveIndex((current) => (current - 1 + banners.length) % banners.length)}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white transition hover:bg-black/60"
              aria-label="Previous banner"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => setActiveIndex((current) => (current + 1) % banners.length)}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white transition hover:bg-black/60"
              aria-label="Next banner"
            >
              ›
            </button>
          </>
        ) : null}

        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                activeIndex === index ? "bg-amber-300" : "bg-zinc-500/70"
              }`}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
