export const USER_ROLES = ["admin", "manager"] as const;
export type UserRole = (typeof USER_ROLES)[number];

export const PROPERTY_TYPES = [
  "plot",
  "flat",
  "builder-floor",
  "office-spaces",
  "independent-houses",
  "commercial-projects",
  "shop",
  // Backward-compatible legacy value already present in older records.
  "commercial",
] as const;
export const LISTING_TYPES = ["sale", "rent"] as const;
export const PRICE_UNITS = ["total", "per_sqft"] as const;
export const AREA_UNITS = ["sqft", "sqyd"] as const;
export const PROJECT_STATUSES = [
  "upcoming",
  "new-launch",
  "under-construction",
  "ready-to-move",
  // Backward-compatible legacy values already present in older records.
  "new_launch",
  "ready_to_move",
  "under_construction",
] as const;
export const FACING_OPTIONS = [
  "north",
  "east",
  "west",
  "south",
  "north_east",
  "north_west",
  "south_east",
  "south_west",
] as const;
export const PROPERTY_RECORD_STATUSES = [
  "draft",
  "published",
  "pending",
  "rejected",
] as const;
export const AMENITY_OPTIONS = [
  "park",
  "security",
  "parking",
  "water_supply",
  "electricity",
  "gated_community",
] as const;
