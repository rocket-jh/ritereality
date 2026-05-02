type AnyRecord = Record<string, unknown>;

function toNumber(value: unknown, fallback = 0) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  if (typeof value === "string" && value.trim().length > 0) {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }
  return fallback;
}

function toNullableNumber(value: unknown) {
  if (value === null || value === undefined || value === "") {
    return null;
  }
  const parsed = toNumber(value, Number.NaN);
  return Number.isFinite(parsed) ? parsed : null;
}

function toBoolean(value: unknown) {
  if (typeof value === "boolean") {
    return value;
  }
  if (typeof value === "string") {
    return value === "true";
  }
  return false;
}

function toStringArray(value: unknown) {
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === "string");
  }
  if (typeof value === "string") {
    return value
      .split(",")
      .map((entry) => entry.trim())
      .filter((entry) => entry.length > 0);
  }
  return [];
}

function toFaqArray(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      const faq = (item ?? {}) as AnyRecord;
      return {
        question: String(faq.question ?? "").trim(),
        answer: String(faq.answer ?? "").trim(),
      };
    })
    .filter((item) => item.question.length > 0 && item.answer.length > 0);
}

export function normalizePropertyPayload(payload: unknown) {
  const data = (payload ?? {}) as AnyRecord;
  const mapLocation = (data.mapLocation ?? {}) as AnyRecord;
  const flatConfig = (data.flatConfig ?? {}) as AnyRecord;
  const plotConfig = (data.plotConfig ?? {}) as AnyRecord;

  return {
    propertyTitle: String(data.propertyTitle ?? ""),
    propertyType: String(data.propertyType ?? ""),
    listingType: String(data.listingType ?? ""),
    price: toNumber(data.price),
    priceUnit: String(data.priceUnit ?? ""),
    areaSize: toNumber(data.areaSize),
    areaUnit: String(data.areaUnit ?? ""),
    propertyCode: data.propertyCode ? String(data.propertyCode) : undefined,
    city: String(data.city ?? "Kurukshetra"),
    areaSector: String(data.areaSector ?? ""),
    fullAddress: String(data.fullAddress ?? ""),
    mapLocation: {
      lat: toNumber(mapLocation.lat),
      lng: toNumber(mapLocation.lng),
    },
    builderName: String(data.builderName ?? ""),
    projectName: String(data.projectName ?? ""),
    projectStatus: String(data.projectStatus ?? ""),
    possessionDate:
      typeof data.possessionDate === "string" && data.possessionDate.length > 0
        ? data.possessionDate
        : null,
    reraNumber: String(data.reraNumber ?? ""),
    flatConfig: {
      bhk: toNullableNumber(flatConfig.bhk),
      bathrooms: toNullableNumber(flatConfig.bathrooms),
      balconies: toNullableNumber(flatConfig.balconies),
      floorNumber: toNullableNumber(flatConfig.floorNumber),
      totalFloors: toNullableNumber(flatConfig.totalFloors),
    },
    plotConfig: {
      plotArea: toNullableNumber(plotConfig.plotArea),
      facing:
        typeof plotConfig.facing === "string" && plotConfig.facing.length > 0
          ? plotConfig.facing
          : null,
      roadWidth: toNullableNumber(plotConfig.roadWidth),
    },
    coverImageUrl: String(data.coverImageUrl ?? ""),
    galleryImageUrls: toStringArray(data.galleryImageUrls),
    videoUrl: String(data.videoUrl ?? ""),
    view360Url: String(data.view360Url ?? ""),
    shortDescription: String(data.shortDescription ?? ""),
    detailedDescription: String(data.detailedDescription ?? ""),
    keyHighlights: toStringArray(data.keyHighlights),
    amenities: toStringArray(data.amenities),
    contactName: String(data.contactName ?? ""),
    phoneNumber: String(data.phoneNumber ?? ""),
    whatsappNumber: String(data.whatsappNumber ?? ""),
    alternateNumber: String(data.alternateNumber ?? ""),
    featuredProperty: toBoolean(data.featuredProperty),
    verifiedBadge: toBoolean(data.verifiedBadge),
    newLaunch: toBoolean(data.newLaunch),
    recordStatus: String(data.recordStatus ?? "draft"),
    metaTitle: String(data.metaTitle ?? ""),
    metaDescription: String(data.metaDescription ?? ""),
    faqs: toFaqArray(data.faqs),
    slug: data.slug ? String(data.slug) : undefined,
  };
}
