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
  "sold",
  "rented",
  "pending",
  "rejected",
] as const;

export const PRIORITY_LEVELS = ["normal", "featured", "premium"] as const;

export const FURNISHING_OPTIONS = [
  "unfurnished",
  "semi-furnished",
  "fully-furnished",
] as const;

export const PARKING_OPTIONS = ["none", "covered", "open", "both"] as const;

export const PROPERTY_AGE_OPTIONS = [
  "0-1",
  "1-5",
  "5-10",
  "10+",
] as const;

export const OWNERSHIP_TYPES = ["freehold", "leasehold", "co-operative", "power-of-attorney"] as const;

export const AMENITY_OPTIONS = [
  "24x7 Security",
  "Power Backup",
  "Car Parking",
  "Lift",
  "Club House",
  "Gym",
  "Swimming Pool",
  "Kids Play Area",
  "CCTV Surveillance",
  "Fire Fighting System",
  "Rain Water Harvesting",
  "Gated Community",
  "Park",
  "Water Supply",
  "Electricity",
  "Intercom Facility",
  "Visitor Parking",
  "Maintenance Staff",
] as const;

export const TAG_OPTIONS = [
  "Corner Plot",
  "Main Road Facing",
  "Gated Society",
  "Near Park",
  "Near School",
  "Near Hospital",
  "Near Metro",
  "Prime Location",
  "Vastu Compliant",
  "East Facing",
  "Park Facing",
  "Ready to Move",
  "Under Construction",
  "New Launch",
  "Investment Opportunity",
  "Rental Income",
] as const;
