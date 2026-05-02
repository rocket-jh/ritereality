export type NavMenuItem = {
  label: string;
  href: string;
};

export const PROPERTY_TYPE_NAV_ITEMS = [
  { label: "Plot", href: "/properties/plot", propertyType: "plot" },
  { label: "Flats", href: "/properties/flat", propertyType: "flat" },
  { label: "Builder Floors", href: "/properties/Builder-floor", propertyType: "builder-floor" },
  { label: "Office Spaces", href: "/properties/office-spaces", propertyType: "office-spaces" },
  { label: "Independent Houses", href: "/properties/independent-houses", propertyType: "independent-houses" },
  { label: "Commercial Projects", href: "/properties/commercial-projects", propertyType: "commercial-projects" },
  { label: "Shop", href: "/properties/shop", propertyType: "shop" },
] as const;

export const LOCATION_NAV_ITEMS = [
  { label: "Sector 3, 5", href: "/locations/sector-2", areaSector: "Sector 3, 5" },
  { label: "Sector 7, 8 and 13", href: "/locations/sector-7", areaSector: "Sector 7, 8 and 13" },
  { label: "NH-44 (GT Road)", href: "/locations/gt-road", areaSector: "NH-44 (GT Road)" },
  { label: "Pipli Road and Sector 30", href: "/locations/nh-44", areaSector: "Pipli Road and Sector 30" },
  { label: "Umri, Shahbad and Peripheral Zones", href: "/locations/umri", areaSector: "Umri, Shahbad and Peripheral Zones" },
] as const;

export const PROJECT_STATUS_NAV_ITEMS = [
  { label: "Upcoming Projects", href: "/projects/upcoming", projectStatus: "upcoming" },
  { label: "New Launch Projects", href: "/projects/new-launch", projectStatus: "new-launch" },
  { label: "Under Construction", href: "/projects/under-construction", projectStatus: "under-construction" },
  { label: "Ready To Move", href: "/projects/ready-to-move", projectStatus: "ready-to-move" },
] as const;

export const NAVBAR_CONFIG = {
  propertyType: PROPERTY_TYPE_NAV_ITEMS,
  locations: LOCATION_NAV_ITEMS,
  projectStatus: PROJECT_STATUS_NAV_ITEMS,
} as const;

const PROPERTY_TYPE_ALIASES: Record<string, string[]> = {
  plot: ["plot"],
  flat: ["flat"],
  "builder-floor": ["builder-floor"],
  "office-spaces": ["office-spaces"],
  "independent-houses": ["independent-houses"],
  "commercial-projects": ["commercial-projects", "commercial"],
  shop: ["shop"],
};

const PROJECT_STATUS_ALIASES: Record<string, string[]> = {
  upcoming: ["upcoming"],
  "new-launch": ["new-launch", "new_launch"],
  "under-construction": ["under-construction", "under_construction"],
  "ready-to-move": ["ready-to-move", "ready_to_move"],
};

export function getPropertyTypeValuesForSlug(slug: string) {
  const key = slug.trim().toLowerCase();
  return PROPERTY_TYPE_ALIASES[key] ?? [key];
}

export function getProjectStatusValuesForSlug(slug: string) {
  const key = slug.trim().toLowerCase();
  return PROJECT_STATUS_ALIASES[key] ?? [key];
}

export function getAreaSectorFromSlug(slug: string) {
  const trimmed = slug.trim().toLowerCase();
  const item = LOCATION_NAV_ITEMS.find((entry) => entry.href.split("/").pop()?.toLowerCase() === trimmed);
  return item?.areaSector ?? decodeURIComponent(trimmed).replace(/-/g, " ");
}

export function getPropertyTypeLabel(value: string) {
  const normalized = value.trim().toLowerCase();
  const item = PROPERTY_TYPE_NAV_ITEMS.find(
    (entry) => entry.propertyType === normalized || getPropertyTypeValuesForSlug(entry.propertyType).includes(normalized)
  );
  if (item) {
    return item.label;
  }
  return normalized.replace(/[-_]/g, " ");
}

export function getProjectStatusLabel(value: string) {
  const normalized = value.trim().toLowerCase();
  const item = PROJECT_STATUS_NAV_ITEMS.find(
    (entry) => entry.projectStatus === normalized || getProjectStatusValuesForSlug(entry.projectStatus).includes(normalized)
  );
  if (item) {
    return item.label;
  }
  return normalized.replace(/[-_]/g, " ");
}

export function normalizePropertyTypeForForm(value: string) {
  const normalized = value.trim().toLowerCase();
  if (normalized === "commercial") {
    return "commercial-projects";
  }
  return normalized;
}

export function normalizeProjectStatusForForm(value: string) {
  const normalized = value.trim().toLowerCase();
  if (normalized === "ready_to_move") {
    return "ready-to-move";
  }
  if (normalized === "under_construction") {
    return "under-construction";
  }
  if (normalized === "new_launch") {
    return "new-launch";
  }
  return normalized;
}
