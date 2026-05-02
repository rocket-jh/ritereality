(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/slug.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toSlug",
    ()=>toSlug
]);
function toSlug(value) {
    return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AMENITY_OPTIONS",
    ()=>AMENITY_OPTIONS,
    "AREA_UNITS",
    ()=>AREA_UNITS,
    "FACING_OPTIONS",
    ()=>FACING_OPTIONS,
    "LISTING_TYPES",
    ()=>LISTING_TYPES,
    "PRICE_UNITS",
    ()=>PRICE_UNITS,
    "PROJECT_STATUSES",
    ()=>PROJECT_STATUSES,
    "PROPERTY_RECORD_STATUSES",
    ()=>PROPERTY_RECORD_STATUSES,
    "PROPERTY_TYPES",
    ()=>PROPERTY_TYPES,
    "USER_ROLES",
    ()=>USER_ROLES
]);
const USER_ROLES = [
    "admin",
    "manager"
];
const PROPERTY_TYPES = [
    "plot",
    "flat",
    "builder-floor",
    "office-spaces",
    "independent-houses",
    "commercial-projects",
    "shop",
    // Backward-compatible legacy value already present in older records.
    "commercial"
];
const LISTING_TYPES = [
    "sale",
    "rent"
];
const PRICE_UNITS = [
    "total",
    "per_sqft"
];
const AREA_UNITS = [
    "sqft",
    "sqyd"
];
const PROJECT_STATUSES = [
    "upcoming",
    "new-launch",
    "under-construction",
    "ready-to-move",
    // Backward-compatible legacy values already present in older records.
    "new_launch",
    "ready_to_move",
    "under_construction"
];
const FACING_OPTIONS = [
    "north",
    "east",
    "west",
    "south",
    "north_east",
    "north_west",
    "south_east",
    "south_west"
];
const PROPERTY_RECORD_STATUSES = [
    "draft",
    "published",
    "pending",
    "rejected"
];
const AMENITY_OPTIONS = [
    "park",
    "security",
    "parking",
    "water_supply",
    "electricity",
    "gated_community"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/navigation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LOCATION_NAV_ITEMS",
    ()=>LOCATION_NAV_ITEMS,
    "NAVBAR_CONFIG",
    ()=>NAVBAR_CONFIG,
    "PROJECT_STATUS_NAV_ITEMS",
    ()=>PROJECT_STATUS_NAV_ITEMS,
    "PROPERTY_TYPE_NAV_ITEMS",
    ()=>PROPERTY_TYPE_NAV_ITEMS,
    "getAreaSectorFromSlug",
    ()=>getAreaSectorFromSlug,
    "getProjectStatusLabel",
    ()=>getProjectStatusLabel,
    "getProjectStatusValuesForSlug",
    ()=>getProjectStatusValuesForSlug,
    "getPropertyTypeLabel",
    ()=>getPropertyTypeLabel,
    "getPropertyTypeValuesForSlug",
    ()=>getPropertyTypeValuesForSlug,
    "normalizeProjectStatusForForm",
    ()=>normalizeProjectStatusForForm,
    "normalizePropertyTypeForForm",
    ()=>normalizePropertyTypeForForm
]);
const PROPERTY_TYPE_NAV_ITEMS = [
    {
        label: "Plot",
        href: "/properties/plot",
        propertyType: "plot"
    },
    {
        label: "Flats",
        href: "/properties/flat",
        propertyType: "flat"
    },
    {
        label: "Builder Floors",
        href: "/properties/Builder-floor",
        propertyType: "builder-floor"
    },
    {
        label: "Office Spaces",
        href: "/properties/office-spaces",
        propertyType: "office-spaces"
    },
    {
        label: "Independent Houses",
        href: "/properties/independent-houses",
        propertyType: "independent-houses"
    },
    {
        label: "Commercial Projects",
        href: "/properties/commercial-projects",
        propertyType: "commercial-projects"
    },
    {
        label: "Shop",
        href: "/properties/shop",
        propertyType: "shop"
    }
];
const LOCATION_NAV_ITEMS = [
    {
        label: "Sector 3, 5",
        href: "/locations/sector-2",
        areaSector: "Sector 3, 5"
    },
    {
        label: "Sector 7, 8 and 13",
        href: "/locations/sector-7",
        areaSector: "Sector 7, 8 and 13"
    },
    {
        label: "NH-44 (GT Road)",
        href: "/locations/gt-road",
        areaSector: "NH-44 (GT Road)"
    },
    {
        label: "Pipli Road and Sector 30",
        href: "/locations/nh-44",
        areaSector: "Pipli Road and Sector 30"
    },
    {
        label: "Umri, Shahbad and Peripheral Zones",
        href: "/locations/umri",
        areaSector: "Umri, Shahbad and Peripheral Zones"
    }
];
const PROJECT_STATUS_NAV_ITEMS = [
    {
        label: "Upcoming Projects",
        href: "/projects/upcoming",
        projectStatus: "upcoming"
    },
    {
        label: "New Launch Projects",
        href: "/projects/new-launch",
        projectStatus: "new-launch"
    },
    {
        label: "Under Construction",
        href: "/projects/under-construction",
        projectStatus: "under-construction"
    },
    {
        label: "Ready To Move",
        href: "/projects/ready-to-move",
        projectStatus: "ready-to-move"
    }
];
const NAVBAR_CONFIG = {
    propertyType: PROPERTY_TYPE_NAV_ITEMS,
    locations: LOCATION_NAV_ITEMS,
    projectStatus: PROJECT_STATUS_NAV_ITEMS
};
const PROPERTY_TYPE_ALIASES = {
    plot: [
        "plot"
    ],
    flat: [
        "flat"
    ],
    "builder-floor": [
        "builder-floor"
    ],
    "office-spaces": [
        "office-spaces"
    ],
    "independent-houses": [
        "independent-houses"
    ],
    "commercial-projects": [
        "commercial-projects",
        "commercial"
    ],
    shop: [
        "shop"
    ]
};
const PROJECT_STATUS_ALIASES = {
    upcoming: [
        "upcoming"
    ],
    "new-launch": [
        "new-launch",
        "new_launch"
    ],
    "under-construction": [
        "under-construction",
        "under_construction"
    ],
    "ready-to-move": [
        "ready-to-move",
        "ready_to_move"
    ]
};
function getPropertyTypeValuesForSlug(slug) {
    const key = slug.trim().toLowerCase();
    return PROPERTY_TYPE_ALIASES[key] ?? [
        key
    ];
}
function getProjectStatusValuesForSlug(slug) {
    const key = slug.trim().toLowerCase();
    return PROJECT_STATUS_ALIASES[key] ?? [
        key
    ];
}
function getAreaSectorFromSlug(slug) {
    const trimmed = slug.trim().toLowerCase();
    const item = LOCATION_NAV_ITEMS.find((entry)=>entry.href.split("/").pop()?.toLowerCase() === trimmed);
    return item?.areaSector ?? decodeURIComponent(trimmed).replace(/-/g, " ");
}
function getPropertyTypeLabel(value) {
    const normalized = value.trim().toLowerCase();
    const item = PROPERTY_TYPE_NAV_ITEMS.find((entry)=>entry.propertyType === normalized || getPropertyTypeValuesForSlug(entry.propertyType).includes(normalized));
    if (item) {
        return item.label;
    }
    return normalized.replace(/[-_]/g, " ");
}
function getProjectStatusLabel(value) {
    const normalized = value.trim().toLowerCase();
    const item = PROJECT_STATUS_NAV_ITEMS.find((entry)=>entry.projectStatus === normalized || getProjectStatusValuesForSlug(entry.projectStatus).includes(normalized));
    if (item) {
        return item.label;
    }
    return normalized.replace(/[-_]/g, " ");
}
function normalizePropertyTypeForForm(value) {
    const normalized = value.trim().toLowerCase();
    if (normalized === "commercial") {
        return "commercial-projects";
    }
    return normalized;
}
function normalizeProjectStatusForForm(value) {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/cms/CmsApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CmsApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$imagekit$2f$next$2f$dist$2f$client$2f$index$2d$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@imagekit/next/dist/client/index-esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$imagekit$2f$javascript$2f$dist$2f$imagekit$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@imagekit/javascript/dist/imagekit.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$slug$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/slug.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/navigation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const initialPropertyForm = {
    propertyTitle: "",
    propertyType: "plot",
    listingType: "sale",
    price: "",
    priceUnit: "total",
    areaSize: "",
    areaUnit: "sqyd",
    propertyCode: "",
    city: "Kurukshetra",
    areaSector: "",
    fullAddress: "",
    lat: "",
    lng: "",
    builderName: "",
    projectName: "",
    projectStatus: "ready-to-move",
    possessionDate: "",
    reraNumber: "",
    bhk: "",
    bathrooms: "",
    balconies: "",
    floorNumber: "",
    totalFloors: "",
    plotArea: "",
    facing: "",
    roadWidth: "",
    coverImageUrl: "",
    galleryImageUrls: [],
    videoUrl: "",
    view360Url: "",
    shortDescription: "",
    detailedDescription: "",
    keyHighlightsText: "",
    amenities: [],
    contactName: "",
    phoneNumber: "",
    featuredProperty: false,
    verifiedBadge: false,
    newLaunch: false,
    recordStatus: "draft",
    metaTitle: "",
    metaDescription: "",
    faqs: [
        {
            question: "",
            answer: ""
        }
    ],
    slug: ""
};
function parseLines(value) {
    return value.split("\n").map((entry)=>entry.trim()).filter((entry)=>entry.length > 0);
}
function cleanPhone(value) {
    return value.replace(/\D/g, "").slice(0, 10);
}
function toCoordinate(value, min, max) {
    const coordinate = Number(value);
    return Number.isFinite(coordinate) && coordinate >= min && coordinate <= max ? coordinate : 0;
}
function locationMapQuery(form) {
    if (form.lat && form.lng) return `${form.lat},${form.lng}`;
    return form.fullAddress;
}
function normalizeAmenity(value) {
    return value.replace(/\s+/g, " ").trim();
}
function uniqueAmenities(values) {
    const seen = new Set();
    return values.map(normalizeAmenity).filter((value)=>{
        const key = value.toLowerCase();
        if (!value || seen.has(key)) return false;
        seen.add(key);
        return true;
    });
}
function defaultAmenityLabel(value) {
    return value.replace(/[-_]/g, " ").replace(/\b\w/g, (letter)=>letter.toUpperCase());
}
function amenityIconFor(value) {
    const label = value.toLowerCase();
    if (label.includes("security") || label.includes("gated")) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiShield"];
    if (label.includes("parking") || label.includes("road")) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiTruck"];
    if (label.includes("water")) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiDroplet"];
    if (label.includes("electric") || label.includes("power")) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiZap"];
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiGrid"];
}
function parseCoordinatesFromGoogleUrl(value) {
    const trimmed = value.trim();
    if (!trimmed) return null;
    const atMatch = trimmed.match(/@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/);
    if (atMatch) {
        return {
            lat: Number(atMatch[1]),
            lng: Number(atMatch[2])
        };
    }
    const longMatch = trimmed.match(/!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/);
    if (longMatch) {
        return {
            lat: Number(longMatch[1]),
            lng: Number(longMatch[2])
        };
    }
    return null;
}
const MAX_IMAGE_UPLOAD_BYTES = 5 * 1024 * 1024;
const MAX_BANNER_IMAGE_UPLOAD_BYTES = 5 * 1024 * 1024;
const PROPERTY_WIZARD_DRAFT_KEY = "riterealty:property-wizard-draft:v1";
const propertyWizardSteps = [
    "Basics",
    "Location",
    "Configuration",
    "Media",
    "Details",
    "SEO & Publish"
];
const propertyStepCaptions = [
    "Basic details",
    "Where it is located",
    "Property configuration",
    "Images and videos",
    "Description, amenities",
    "Meta and publish settings"
];
const initialBannerForm = {
    projectName: "Rite Realty",
    title: "",
    subtitle: "",
    imageUrl: "",
    showCta: true,
    ctaLabel: "Explore Projects",
    ctaHref: "/projects/new-launch",
    slideEnabled: true
};
function CmsApp() {
    _s();
    const [setup, setSetup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [properties, setProperties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [submittingProperty, setSubmittingProperty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadingCover, setUploadingCover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadingGallery, setUploadingGallery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadingBannerImage, setUploadingBannerImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeView, setActiveView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("propertyWizard");
    const [propertyStep, setPropertyStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loginForm, setLoginForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        email: "",
        password: ""
    });
    const [bootstrapForm, setBootstrapForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        password: ""
    });
    const [managerForm, setManagerForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        password: ""
    });
    const [bannerForm, setBannerForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialBannerForm);
    const [editingBannerId, setEditingBannerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [bannerPreviewUrl, setBannerPreviewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [banners, setBanners] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [bannerSlideEnabled, setBannerSlideEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [propertyForm, setPropertyForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialPropertyForm);
    const [propertyErrors, setPropertyErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [slugEditedManually, setSlugEditedManually] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mapSearch, setMapSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [mapAutoFilling, setMapAutoFilling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPropertyPreview, setShowPropertyPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [galleryDropActive, setGalleryDropActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [coverDropActive, setCoverDropActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [amenityInput, setAmenityInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [coverPreviewUrl, setCoverPreviewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [galleryPreviewUrls, setGalleryPreviewUrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const isAdmin = user?.role === "admin";
    const canDeleteProperty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CmsApp.useMemo[canDeleteProperty]": ()=>isAdmin
    }["CmsApp.useMemo[canDeleteProperty]"], [
        isAdmin
    ]);
    const showPreviewPanel = activeView !== "propertyWizard" || showPropertyPreview;
    const initialize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CmsApp.useCallback[initialize]": async ()=>{
            setLoading(true);
            const [setupRes, meRes] = await Promise.all([
                fetch("/api/auth/setup-status", {
                    cache: "no-store"
                }),
                fetch("/api/auth/me", {
                    cache: "no-store"
                })
            ]);
            const setupData = await setupRes.json();
            const meData = await meRes.json();
            setSetup(setupData);
            setUser(meData.user);
            setLoading(false);
        }
    }["CmsApp.useCallback[initialize]"], []);
    const loadProperties = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CmsApp.useCallback[loadProperties]": async ()=>{
            const response = await fetch("/api/properties?all=1", {
                cache: "no-store"
            });
            const data = await response.json();
            if (!response.ok) {
                setMessage(data.error ?? "Unable to load properties.");
                return;
            }
            setProperties(data.properties ?? []);
        }
    }["CmsApp.useCallback[loadProperties]"], []);
    const loadUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CmsApp.useCallback[loadUsers]": async ()=>{
            if (!isAdmin) return;
            const response_0 = await fetch("/api/users", {
                cache: "no-store"
            });
            if (!response_0.ok) return;
            const data_0 = await response_0.json();
            setUsers(data_0.users);
        }
    }["CmsApp.useCallback[loadUsers]"], [
        isAdmin
    ]);
    const loadBanners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CmsApp.useCallback[loadBanners]": async ()=>{
            const response_1 = await fetch("/api/banner", {
                cache: "no-store"
            });
            const data_1 = await response_1.json();
            if (!response_1.ok) {
                setMessage(data_1.error ?? "Unable to load banners.");
                return;
            }
            const normalized = (data_1.banners ?? []).map({
                "CmsApp.useCallback[loadBanners].normalized": (banner)=>({
                        ...banner,
                        showCta: banner.showCta !== false
                    })
            }["CmsApp.useCallback[loadBanners].normalized"]);
            setBanners(normalized);
            setBannerSlideEnabled(data_1.slideEnabled ?? false);
        }
    }["CmsApp.useCallback[loadBanners]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CmsApp.useEffect": ()=>{
            void initialize();
        }
    }["CmsApp.useEffect"], [
        initialize
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CmsApp.useEffect": ()=>{
            if (!user) return;
            void loadProperties();
            void loadUsers();
            if (activeView === "banner") {
                void loadBanners();
            }
        }
    }["CmsApp.useEffect"], [
        activeView,
        loadBanners,
        loadProperties,
        loadUsers,
        user
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CmsApp.useEffect": ()=>{
            return ({
                "CmsApp.useEffect": ()=>{
                    if (bannerPreviewUrl?.startsWith("blob:")) {
                        URL.revokeObjectURL(bannerPreviewUrl);
                    }
                }
            })["CmsApp.useEffect"];
        }
    }["CmsApp.useEffect"], [
        bannerPreviewUrl
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CmsApp.useEffect": ()=>{
            return ({
                "CmsApp.useEffect": ()=>{
                    if (coverPreviewUrl?.startsWith("blob:")) {
                        URL.revokeObjectURL(coverPreviewUrl);
                    }
                }
            })["CmsApp.useEffect"];
        }
    }["CmsApp.useEffect"], [
        coverPreviewUrl
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CmsApp.useEffect": ()=>{
            return ({
                "CmsApp.useEffect": ()=>{
                    galleryPreviewUrls.forEach({
                        "CmsApp.useEffect": (url)=>{
                            if (url.startsWith("blob:")) URL.revokeObjectURL(url);
                        }
                    }["CmsApp.useEffect"]);
                }
            })["CmsApp.useEffect"];
        }
    }["CmsApp.useEffect"], [
        galleryPreviewUrls
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CmsApp.useEffect": ()=>{
            if (!user || editingId) return;
            const saved = window.localStorage.getItem(PROPERTY_WIZARD_DRAFT_KEY);
            if (!saved) return;
            try {
                const parsed = JSON.parse(saved);
                setPropertyForm({
                    "CmsApp.useEffect": (prev)=>({
                            ...prev,
                            ...parsed,
                            amenities: uniqueAmenities(parsed.amenities ?? prev.amenities),
                            phoneNumber: cleanPhone(parsed.phoneNumber || parsed.whatsappNumber || parsed.alternateNumber || prev.phoneNumber),
                            faqs: Array.isArray(parsed.faqs) && parsed.faqs.length > 0 ? parsed.faqs.map({
                                "CmsApp.useEffect": (faq)=>({
                                        question: String(faq.question ?? ""),
                                        answer: String(faq.answer ?? "")
                                    })
                            }["CmsApp.useEffect"]) : prev.faqs
                        })
                }["CmsApp.useEffect"]);
                if (typeof parsed.slug === "string" && parsed.slug.trim().length > 0) {
                    setSlugEditedManually(true);
                }
                setMessage("Recovered saved draft from previous session.");
            } catch  {
                window.localStorage.removeItem(PROPERTY_WIZARD_DRAFT_KEY);
            }
        }
    }["CmsApp.useEffect"], [
        editingId,
        user
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CmsApp.useEffect": ()=>{
            if (!user || editingId) return;
            window.localStorage.setItem(PROPERTY_WIZARD_DRAFT_KEY, JSON.stringify(propertyForm));
        }
    }["CmsApp.useEffect"], [
        editingId,
        propertyForm,
        user
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CmsApp.useEffect": ()=>{
            if (slugEditedManually) return;
            const generated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$slug$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toSlug"])(propertyForm.propertyTitle);
            setPropertyForm({
                "CmsApp.useEffect": (prev_0)=>prev_0.slug === generated ? prev_0 : {
                        ...prev_0,
                        slug: generated
                    }
            }["CmsApp.useEffect"]);
        }
    }["CmsApp.useEffect"], [
        propertyForm.propertyTitle,
        slugEditedManually
    ]);
    function formatByteLimit(bytes) {
        if (bytes >= 1024 * 1024) {
            return `${Math.round(bytes / (1024 * 1024) * 10) / 10}MB`;
        }
        return `${Math.round(bytes / 1024)}KB`;
    }
    function ensureValidImage(file, label, maxBytes = MAX_IMAGE_UPLOAD_BYTES) {
        if (!file.type.startsWith("image/")) {
            throw new Error(`${label} must be an image file.`);
        }
        if (file.size > maxBytes) {
            throw new Error(`${label} must be ${formatByteLimit(maxBytes)} or smaller.`);
        }
    }
    function propertyFieldClass(field) {
        return `rounded-xl border px-3 py-2 text-sm outline-none transition focus:border-[#1e4fb8] focus:ring-2 focus:ring-blue-100 ${propertyErrors[field] ? "border-red-500 bg-red-50 text-red-900 placeholder:text-red-300 focus:border-red-500 focus:ring-red-100" : "border-zinc-200 bg-white"}`;
    }
    function propertySelectClass(field_0) {
        return `rounded-lg border px-3 py-2 text-sm outline-none transition focus:border-[#1e4fb8] focus:ring-2 focus:ring-blue-100 ${propertyErrors[field_0] ? "border-red-500 bg-red-50 text-red-900 focus:border-red-500 focus:ring-red-100" : "border-zinc-300 bg-white"}`;
    }
    async function uploadSingleFile(file_0, folder) {
        const authRes = await fetch("/api/imagekit/auth", {
            cache: "no-store"
        });
        const authData = await authRes.json();
        if (!authRes.ok) {
            throw new Error(authData.error ?? "ImageKit auth failed.");
        }
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$imagekit$2f$javascript$2f$dist$2f$imagekit$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upload"])({
            file: file_0,
            fileName: file_0.name,
            token: authData.token,
            expire: authData.expire,
            signature: authData.signature,
            publicKey: authData.publicKey,
            folder,
            useUniqueFileName: true
        });
        if (!result.url) {
            throw new Error("Upload succeeded but URL was not returned by ImageKit.");
        }
        return result.url;
    }
    async function handleCoverUpload(event) {
        const input = event.currentTarget;
        const file_1 = input.files?.[0];
        if (!file_1) return;
        setCoverPreviewUrl(URL.createObjectURL(file_1));
        setUploadingCover(true);
        setMessage("");
        try {
            ensureValidImage(file_1, "Cover image");
            const url_0 = await uploadSingleFile(file_1, "/riterealty/properties/cover");
            setPropertyForm((prev_1)=>({
                    ...prev_1,
                    coverImageUrl: url_0
                }));
            setCoverPreviewUrl(url_0);
            setMessage("Cover image uploaded.");
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "Cover upload failed.");
        } finally{
            input.value = "";
            setUploadingCover(false);
        }
    }
    async function handleGalleryUpload(event_0) {
        const input_0 = event_0.currentTarget;
        const files = Array.from(input_0.files ?? []);
        if (files.length === 0) return;
        setGalleryPreviewUrls(files.map((file_2)=>URL.createObjectURL(file_2)));
        setUploadingGallery(true);
        setMessage("");
        try {
            files.forEach((file_3)=>ensureValidImage(file_3, "Gallery image"));
            const uploadResults = await Promise.allSettled(files.map((file_4)=>uploadSingleFile(file_4, "/riterealty/properties/gallery")));
            const uploaded = uploadResults.filter((result_0)=>result_0.status === "fulfilled").map((result_1)=>result_1.value);
            const failedCount = uploadResults.length - uploaded.length;
            if (uploaded.length === 0) {
                const firstError = uploadResults.find((result_2)=>result_2.status === "rejected");
                throw firstError?.reason instanceof Error ? firstError.reason : new Error("Gallery upload failed.");
            }
            setPropertyForm((prev_2)=>({
                    ...prev_2,
                    galleryImageUrls: [
                        ...prev_2.galleryImageUrls,
                        ...uploaded
                    ]
                }));
            setGalleryPreviewUrls([]);
            setMessage(failedCount > 0 ? `${uploaded.length} gallery image(s) uploaded. ${failedCount} failed.` : "Gallery images uploaded.");
        } catch (error_0) {
            setMessage(error_0 instanceof Error ? error_0.message : "Gallery upload failed.");
        } finally{
            input_0.value = "";
            setUploadingGallery(false);
        }
    }
    async function handleCoverDrop(event_1) {
        event_1.preventDefault();
        setCoverDropActive(false);
        const file_5 = event_1.dataTransfer.files?.[0];
        if (!file_5) return;
        setCoverPreviewUrl(URL.createObjectURL(file_5));
        setUploadingCover(true);
        setMessage("");
        try {
            ensureValidImage(file_5, "Cover image");
            const url_1 = await uploadSingleFile(file_5, "/riterealty/properties/cover");
            setPropertyForm((prev_3)=>({
                    ...prev_3,
                    coverImageUrl: url_1
                }));
            setCoverPreviewUrl(url_1);
            setMessage("Cover image uploaded.");
        } catch (error_1) {
            setMessage(error_1 instanceof Error ? error_1.message : "Cover upload failed.");
        } finally{
            setUploadingCover(false);
        }
    }
    async function handleGalleryDrop(event_2) {
        event_2.preventDefault();
        setGalleryDropActive(false);
        const files_0 = Array.from(event_2.dataTransfer.files ?? []);
        if (files_0.length === 0) return;
        setGalleryPreviewUrls(files_0.map((file_6)=>URL.createObjectURL(file_6)));
        setUploadingGallery(true);
        setMessage("");
        try {
            files_0.forEach((file_7)=>ensureValidImage(file_7, "Gallery image"));
            const uploadResults_0 = await Promise.allSettled(files_0.map((file_8)=>uploadSingleFile(file_8, "/riterealty/properties/gallery")));
            const uploaded_0 = uploadResults_0.filter((result_3)=>result_3.status === "fulfilled").map((result_4)=>result_4.value);
            const failedCount_0 = uploadResults_0.length - uploaded_0.length;
            if (uploaded_0.length === 0) {
                const firstError_0 = uploadResults_0.find((result_5)=>result_5.status === "rejected");
                throw firstError_0?.reason instanceof Error ? firstError_0.reason : new Error("Gallery upload failed.");
            }
            setPropertyForm((prev_4)=>({
                    ...prev_4,
                    galleryImageUrls: [
                        ...prev_4.galleryImageUrls,
                        ...uploaded_0
                    ]
                }));
            setGalleryPreviewUrls([]);
            setMessage(failedCount_0 > 0 ? `${uploaded_0.length} gallery image(s) uploaded. ${failedCount_0} failed.` : "Gallery images uploaded.");
        } catch (error_2) {
            setMessage(error_2 instanceof Error ? error_2.message : "Gallery upload failed.");
        } finally{
            setUploadingGallery(false);
        }
    }
    async function autoFillLocationFromMap() {
        const query = mapSearch.trim();
        if (!query) {
            setMessage("Paste Google Maps URL or address first.");
            return;
        }
        setMapAutoFilling(true);
        setMessage("");
        try {
            const parsedCoordinates = parseCoordinatesFromGoogleUrl(query);
            let lat = "";
            let lng = "";
            let fullAddress = "";
            let city = "";
            let areaSector = "";
            if (parsedCoordinates) {
                lat = String(parsedCoordinates.lat);
                lng = String(parsedCoordinates.lng);
                const reverseRes = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lng)}`);
                if (reverseRes.ok) {
                    const reverseData = await reverseRes.json();
                    fullAddress = reverseData.display_name ?? "";
                    city = reverseData.address?.city ?? reverseData.address?.town ?? reverseData.address?.village ?? reverseData.address?.county ?? "";
                    areaSector = reverseData.address?.suburb ?? reverseData.address?.neighbourhood ?? reverseData.address?.state_district ?? "";
                }
            } else {
                const searchRes = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&addressdetails=1&limit=1&q=${encodeURIComponent(query)}`);
                if (!searchRes.ok) throw new Error("Could not resolve that location.");
                const results = await searchRes.json();
                const first = results[0];
                if (!first) throw new Error("No location found. Try a more specific Google Maps address.");
                lat = first.lat;
                lng = first.lon;
                fullAddress = first.display_name ?? "";
                city = first.address?.city ?? first.address?.town ?? first.address?.village ?? first.address?.county ?? "";
                areaSector = first.address?.suburb ?? first.address?.neighbourhood ?? first.address?.quarter ?? first.address?.state_district ?? first.address?.road ?? "";
            }
            setPropertyForm((prev_5)=>({
                    ...prev_5,
                    lat: lat || prev_5.lat,
                    lng: lng || prev_5.lng,
                    fullAddress: fullAddress || prev_5.fullAddress,
                    city: city || prev_5.city,
                    areaSector: areaSector || prev_5.areaSector
                }));
            setMessage("Location details auto-filled. Verify and continue.");
        } catch (error_3) {
            setMessage(error_3 instanceof Error ? error_3.message : "Failed to auto-fill location.");
        } finally{
            setMapAutoFilling(false);
        }
    }
    async function handleCurrentLocation() {
        if (!navigator.geolocation) {
            setMessage("Current location is not supported in this browser.");
            return;
        }
        setMapAutoFilling(true);
        setMessage("");
        navigator.geolocation.getCurrentPosition(async (position)=>{
            const lat_0 = String(position.coords.latitude);
            const lng_0 = String(position.coords.longitude);
            try {
                const reverseRes_0 = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${encodeURIComponent(lat_0)}&lon=${encodeURIComponent(lng_0)}`);
                const reverseData_0 = reverseRes_0.ok ? await reverseRes_0.json() : {};
                const city_0 = reverseData_0.address?.city ?? reverseData_0.address?.town ?? reverseData_0.address?.village ?? reverseData_0.address?.county ?? "";
                const areaSector_0 = reverseData_0.address?.suburb ?? reverseData_0.address?.neighbourhood ?? reverseData_0.address?.quarter ?? reverseData_0.address?.state_district ?? reverseData_0.address?.road ?? "";
                setPropertyForm((prev_7)=>({
                        ...prev_7,
                        lat: lat_0,
                        lng: lng_0,
                        fullAddress: reverseData_0.display_name || prev_7.fullAddress,
                        city: city_0 || prev_7.city,
                        areaSector: areaSector_0 || prev_7.areaSector
                    }));
                setMapSearch(reverseData_0.display_name || `${lat_0}, ${lng_0}`);
                setMessage("Current location added. Verify address and continue.");
            } catch (error_4) {
                setPropertyForm((prev_6)=>({
                        ...prev_6,
                        lat: lat_0,
                        lng: lng_0
                    }));
                setMessage(error_4 instanceof Error ? error_4.message : "Location added, but address lookup failed.");
            } finally{
                setMapAutoFilling(false);
            }
        }, ()=>{
            setMapAutoFilling(false);
            setMessage("Location permission was denied.");
        }, {
            enableHighAccuracy: true,
            timeout: 10000
        });
    }
    async function handleBannerImageUpload(event_3) {
        const input_1 = event_3.currentTarget;
        const file_9 = input_1.files?.[0];
        if (!file_9) return;
        setBannerPreviewUrl(URL.createObjectURL(file_9));
        await uploadBannerImageFile(file_9);
        input_1.value = "";
    }
    async function uploadBannerImageFile(file_10) {
        setUploadingBannerImage(true);
        setMessage("");
        try {
            ensureValidImage(file_10, "Banner image", MAX_BANNER_IMAGE_UPLOAD_BYTES);
            const url_2 = await uploadSingleFile(file_10, "/riterealty/banner");
            setBannerPreviewUrl(url_2);
            setBannerForm((prev_8)=>({
                    ...prev_8,
                    imageUrl: url_2
                }));
            setMessage("Banner image uploaded.");
        } catch (error_5) {
            setMessage(error_5 instanceof Error ? error_5.message : "Banner upload failed.");
        } finally{
            setUploadingBannerImage(false);
        }
    }
    function handleBannerUploadDragOver(event_4) {
        event_4.preventDefault();
        event_4.dataTransfer.dropEffect = "copy";
    }
    async function handleBannerUploadDrop(event_5) {
        event_5.preventDefault();
        const file_11 = event_5.dataTransfer.files?.[0];
        if (!file_11) return;
        setBannerPreviewUrl(URL.createObjectURL(file_11));
        await uploadBannerImageFile(file_11);
    }
    async function handleLogin(event_6) {
        event_6.preventDefault();
        setMessage("");
        const response_2 = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginForm)
        });
        const data_2 = await response_2.json();
        if (!response_2.ok || !data_2.user) {
            setMessage(data_2.error ?? "Login failed.");
            return;
        }
        setUser(data_2.user);
        setLoginForm({
            email: "",
            password: ""
        });
        setMessage("Logged in.");
    }
    async function handleBootstrapAdmin(event_7) {
        event_7.preventDefault();
        setMessage("");
        const response_3 = await fetch("/api/auth/bootstrap-admin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bootstrapForm)
        });
        const data_3 = await response_3.json();
        if (!response_3.ok || !data_3.user) {
            setMessage(data_3.error ?? "Could not create admin.");
            return;
        }
        setUser(data_3.user);
        setBootstrapForm({
            name: "",
            email: "",
            password: ""
        });
        setMessage("Admin account created.");
        await initialize();
    }
    async function handleLogout() {
        await fetch("/api/auth/logout", {
            method: "POST"
        });
        setUser(null);
        setUsers([]);
        setProperties([]);
        setEditingId(null);
        setPropertyForm(initialPropertyForm);
        setCoverPreviewUrl(null);
        setGalleryPreviewUrls([]);
        setAmenityInput("");
        setMessage("Logged out.");
        await initialize();
    }
    async function handleBannerSubmit(event_8) {
        event_8.preventDefault();
        setMessage("");
        const payload = {
            ...bannerForm,
            projectName: bannerForm.projectName.trim(),
            title: bannerForm.title.trim(),
            subtitle: bannerForm.subtitle.trim(),
            imageUrl: bannerForm.imageUrl.trim(),
            showCta: Boolean(bannerForm.showCta),
            ctaLabel: bannerForm.showCta ? bannerForm.ctaLabel.trim() : "",
            ctaHref: bannerForm.showCta ? bannerForm.ctaHref.trim() : ""
        };
        if (!editingBannerId && banners.length >= 6) {
            setMessage("Maximum of 6 banners reached. Click Edit on an existing banner to update photos.");
            return;
        }
        if (payload.title.length < 5) {
            setMessage("Banner headline must be at least 5 characters.");
            return;
        }
        if (payload.subtitle.length < 8) {
            setMessage("Sub-headline must be at least 8 characters.");
            return;
        }
        if (!payload.imageUrl) {
            setMessage("Banner image is required. Upload an image or paste a valid URL.");
            return;
        }
        try {
            new URL(payload.imageUrl);
        } catch  {
            setMessage("Banner image URL is invalid. Upload again or provide a valid URL.");
            return;
        }
        const endpoint = editingBannerId ? `/api/banner/${editingBannerId}` : "/api/banner";
        const method = editingBannerId ? "PATCH" : "POST";
        const response_4 = await fetch(endpoint, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        const data_4 = await response_4.json();
        if (!response_4.ok) {
            const fieldErrors = data_4.issues?.fieldErrors ? Object.values(data_4.issues.fieldErrors).flat().filter(Boolean) : [];
            const formErrors = data_4.issues?.formErrors?.filter(Boolean) ?? [];
            const detailed = [
                ...fieldErrors,
                ...formErrors
            ][0];
            if (detailed) {
                setMessage(detailed);
                return;
            }
            setMessage(data_4.error ?? "Banner save failed.");
            return;
        }
        setMessage(editingBannerId ? "Banner updated." : "Banner added.");
        setEditingBannerId(null);
        setBannerPreviewUrl(null);
        setBannerForm(initialBannerForm);
        await loadBanners();
    }
    function handleBannerImageUrlChange(value) {
        setBannerPreviewUrl(null);
        setBannerForm((prev_9)=>({
                ...prev_9,
                imageUrl: value
            }));
    }
    function startBannerEdit(banner_0) {
        setEditingBannerId(banner_0._id);
        setBannerPreviewUrl(banner_0.imageUrl || null);
        setBannerForm({
            projectName: banner_0.projectName,
            title: banner_0.title,
            subtitle: banner_0.subtitle,
            imageUrl: banner_0.imageUrl,
            showCta: banner_0.showCta !== false,
            ctaLabel: banner_0.ctaLabel ?? "",
            ctaHref: banner_0.ctaHref ?? "",
            slideEnabled: banner_0.slideEnabled ?? true
        });
        setMessage("Editing banner.");
    }
    async function handleBannerDelete(id) {
        setMessage("");
        const response_5 = await fetch(`/api/banner/${id}`, {
            method: "DELETE"
        });
        const data_5 = await response_5.json();
        if (!response_5.ok) {
            setMessage(data_5.error ?? "Banner delete failed.");
            return;
        }
        if (editingBannerId === id) {
            setEditingBannerId(null);
            setBannerPreviewUrl(null);
            setBannerForm(initialBannerForm);
        }
        setMessage("Banner deleted.");
        await loadBanners();
    }
    async function handleManagerCreate(event_9) {
        event_9.preventDefault();
        setMessage("");
        const response_6 = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...managerForm,
                role: "manager"
            })
        });
        const data_6 = await response_6.json();
        if (!response_6.ok) {
            setMessage(data_6.error ?? "Could not create manager.");
            return;
        }
        setManagerForm({
            name: "",
            email: "",
            password: ""
        });
        setMessage("Manager account created.");
        await initialize();
        await loadUsers();
    }
    function getStepErrors(step) {
        const errors = {};
        if (step === 0) {
            if (!propertyForm.propertyTitle.trim()) errors.propertyTitle = "Property title is required.";
            if (!propertyForm.price.trim()) errors.price = "Price is required.";
            if (Number(propertyForm.price) <= 0) errors.price = "Price must be greater than 0.";
            if (!propertyForm.areaSize.trim()) errors.areaSize = "Area size is required.";
            if (!propertyForm.slug.trim()) errors.slug = "Slug is required.";
            if (!propertyForm.builderName.trim()) errors.builderName = "Builder name is required.";
            if (!propertyForm.projectName.trim()) errors.projectName = "Project name is required.";
            const needsPossessionDate = propertyForm.projectStatus === "under_construction" || propertyForm.projectStatus === "under-construction";
            if (needsPossessionDate && !propertyForm.possessionDate) errors.possessionDate = "Possession date is required.";
            return errors;
        }
        if (step === 1) {
            if (!propertyForm.city.trim()) errors.city = "City is required.";
            if (!propertyForm.areaSector.trim()) errors.areaSector = "Area/Sector is required.";
            if (!propertyForm.fullAddress.trim()) errors.fullAddress = "Address is required.";
            return errors;
        }
        if (step === 2) {
            if (propertyForm.propertyType === "plot") {
                if (!propertyForm.plotArea.trim()) errors.plotArea = "Plot area is required for plot.";
            }
            if (propertyForm.propertyType === "flat") {
                if (!propertyForm.bhk.trim()) errors.bhk = "BHK is required for flat.";
                if (!propertyForm.floorNumber.trim()) errors.floorNumber = "Floor is required for flat.";
                if (!propertyForm.bathrooms.trim()) errors.bathrooms = "Bathrooms are required for flat.";
            }
            return errors;
        }
        if (step === 3) {
            if (!propertyForm.coverImageUrl.trim()) errors.coverImageUrl = "Cover image is required.";
            return errors;
        }
        if (step === 4) {
            if (!propertyForm.shortDescription.trim()) errors.shortDescription = "Short description is required.";
            if (!propertyForm.detailedDescription.trim()) errors.detailedDescription = "Detailed description is required.";
            if (!propertyForm.contactName.trim()) errors.contactName = "Contact name is required.";
            const phone = cleanPhone(propertyForm.phoneNumber);
            if (!phone) errors.phoneNumber = "Contact number is required.";
            if (phone && phone.length !== 10) errors.phoneNumber = "Contact number must be 10 digits.";
            return errors;
        }
        if (step === 5) {
            if (!propertyForm.metaTitle.trim()) errors.metaTitle = "Meta title is required.";
            if (!propertyForm.metaDescription.trim()) errors.metaDescription = "Meta description is required.";
            const hasFaq = propertyForm.faqs.some((faq_0)=>faq_0.question.trim() && faq_0.answer.trim());
            if (!hasFaq) errors.faqs = "Add at least one FAQ item.";
            return errors;
        }
        return errors;
    }
    function validatePropertyStep(step_0) {
        const errors_0 = getStepErrors(step_0);
        setPropertyErrors(errors_0);
        return Object.values(errors_0)[0] ?? "";
    }
    function savePropertyDraft() {
        const contactNumber = cleanPhone(propertyForm.phoneNumber);
        const draft = {
            ...propertyForm,
            amenities: uniqueAmenities(propertyForm.amenities),
            phoneNumber: contactNumber,
            recordStatus: "draft"
        };
        window.localStorage.setItem(PROPERTY_WIZARD_DRAFT_KEY, JSON.stringify(draft));
        const saved_0 = window.localStorage.getItem(PROPERTY_WIZARD_DRAFT_KEY);
        if (!saved_0) {
            setMessage("Draft could not be saved in this browser.");
            return;
        }
        setPropertyForm(draft);
        setPropertyErrors({});
        setMessage("Saved in draft.");
    }
    function goToNextPropertyStep() {
        const error_6 = validatePropertyStep(propertyStep);
        if (error_6) {
            setMessage(error_6);
            return;
        }
        window.localStorage.setItem(PROPERTY_WIZARD_DRAFT_KEY, JSON.stringify(propertyForm));
        setMessage("");
        setPropertyStep((prev_10)=>Math.min(prev_10 + 1, propertyWizardSteps.length - 1));
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    function goToPreviousPropertyStep() {
        setMessage("");
        setPropertyErrors({});
        setPropertyStep((prev_11)=>Math.max(prev_11 - 1, 0));
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    async function handlePropertySubmit(event_10) {
        event_10.preventDefault();
        setMessage("");
        for(let step_1 = 0; step_1 < propertyWizardSteps.length; step_1 += 1){
            const error_7 = validatePropertyStep(step_1);
            if (error_7) {
                setPropertyStep(step_1);
                setMessage(error_7);
                return;
            }
        }
        setSubmittingProperty(true);
        const contactNumber_0 = cleanPhone(propertyForm.phoneNumber);
        const payload_0 = {
            propertyTitle: propertyForm.propertyTitle.trim(),
            propertyType: propertyForm.propertyType,
            listingType: propertyForm.listingType,
            price: Number(propertyForm.price),
            priceUnit: propertyForm.priceUnit,
            areaSize: Number(propertyForm.areaSize),
            areaUnit: propertyForm.areaUnit,
            propertyCode: propertyForm.propertyCode.trim(),
            city: propertyForm.city.trim(),
            areaSector: propertyForm.areaSector.trim(),
            fullAddress: propertyForm.fullAddress.trim(),
            mapLocation: {
                lat: toCoordinate(propertyForm.lat, -90, 90),
                lng: toCoordinate(propertyForm.lng, -180, 180)
            },
            builderName: propertyForm.builderName.trim(),
            projectName: propertyForm.projectName.trim(),
            projectStatus: propertyForm.projectStatus,
            possessionDate: propertyForm.possessionDate || null,
            reraNumber: propertyForm.reraNumber.trim(),
            flatConfig: {
                bhk: propertyForm.bhk ? Number(propertyForm.bhk) : null,
                bathrooms: propertyForm.bathrooms ? Number(propertyForm.bathrooms) : null,
                balconies: propertyForm.balconies ? Number(propertyForm.balconies) : null,
                floorNumber: propertyForm.floorNumber ? Number(propertyForm.floorNumber) : null,
                totalFloors: propertyForm.totalFloors ? Number(propertyForm.totalFloors) : null
            },
            plotConfig: {
                plotArea: propertyForm.plotArea ? Number(propertyForm.plotArea) : null,
                facing: propertyForm.facing || null,
                roadWidth: propertyForm.roadWidth ? Number(propertyForm.roadWidth) : null
            },
            coverImageUrl: propertyForm.coverImageUrl.trim(),
            galleryImageUrls: propertyForm.galleryImageUrls,
            videoUrl: propertyForm.videoUrl.trim(),
            view360Url: propertyForm.view360Url.trim(),
            shortDescription: propertyForm.shortDescription.trim(),
            detailedDescription: propertyForm.detailedDescription.trim(),
            keyHighlights: parseLines(propertyForm.keyHighlightsText),
            amenities: uniqueAmenities(propertyForm.amenities),
            contactName: propertyForm.contactName.trim(),
            phoneNumber: contactNumber_0,
            whatsappNumber: contactNumber_0,
            alternateNumber: contactNumber_0,
            featuredProperty: propertyForm.featuredProperty,
            verifiedBadge: propertyForm.verifiedBadge,
            newLaunch: propertyForm.newLaunch,
            recordStatus: propertyForm.recordStatus,
            metaTitle: propertyForm.metaTitle.trim(),
            metaDescription: propertyForm.metaDescription.trim(),
            faqs: propertyForm.faqs.map((faq_1)=>({
                    question: faq_1.question.trim(),
                    answer: faq_1.answer.trim()
                })).filter((faq_2)=>faq_2.question && faq_2.answer),
            slug: propertyForm.slug.trim() || undefined
        };
        const endpoint_0 = editingId ? `/api/properties/${editingId}` : "/api/properties";
        const method_0 = editingId ? "PUT" : "POST";
        try {
            const response_7 = await fetch(endpoint_0, {
                method: method_0,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload_0)
            });
            const data_7 = await response_7.json();
            if (!response_7.ok) {
                setMessage(data_7.error ?? "Property save failed.");
                setSubmittingProperty(false);
                return;
            }
            setMessage(editingId ? "Property updated." : "Property created.");
            setPropertyForm(initialPropertyForm);
            setPropertyStep(0);
            setSlugEditedManually(false);
            setMapSearch("");
            setShowPropertyPreview(true);
            setPropertyErrors({});
            setCoverPreviewUrl(null);
            setGalleryPreviewUrls([]);
            setAmenityInput("");
            window.localStorage.removeItem(PROPERTY_WIZARD_DRAFT_KEY);
            setEditingId(null);
            setSubmittingProperty(false);
            await loadProperties();
        } catch (error_8) {
            setMessage(error_8 instanceof Error ? error_8.message : "Property save failed.");
            setSubmittingProperty(false);
        }
    }
    function startEdit(property) {
        setActiveView("propertyWizard");
        setPropertyStep(0);
        setEditingId(property._id);
        setSlugEditedManually(true);
        setShowPropertyPreview(true);
        setPropertyErrors({});
        setMapSearch(property.fullAddress ?? "");
        setCoverPreviewUrl(property.coverImageUrl);
        setGalleryPreviewUrls([]);
        setAmenityInput("");
        setPropertyForm({
            propertyTitle: property.propertyTitle,
            propertyType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizePropertyTypeForForm"])(property.propertyType),
            listingType: property.listingType,
            price: String(property.price),
            priceUnit: property.priceUnit,
            areaSize: String(property.areaSize),
            areaUnit: property.areaUnit,
            propertyCode: property.propertyCode,
            city: property.city,
            areaSector: property.areaSector,
            fullAddress: property.fullAddress,
            lat: String(property.mapLocation.lat),
            lng: String(property.mapLocation.lng),
            builderName: property.builderName,
            projectName: property.projectName,
            projectStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeProjectStatusForForm"])(property.projectStatus),
            possessionDate: property.possessionDate ? new Date(property.possessionDate).toISOString().slice(0, 10) : "",
            reraNumber: property.reraNumber ?? "",
            bhk: property.flatConfig.bhk ? String(property.flatConfig.bhk) : "",
            bathrooms: property.flatConfig.bathrooms ? String(property.flatConfig.bathrooms) : "",
            balconies: property.flatConfig.balconies ? String(property.flatConfig.balconies) : "",
            floorNumber: property.flatConfig.floorNumber ? String(property.flatConfig.floorNumber) : "",
            totalFloors: property.flatConfig.totalFloors ? String(property.flatConfig.totalFloors) : "",
            plotArea: property.plotConfig.plotArea ? String(property.plotConfig.plotArea) : "",
            facing: property.plotConfig.facing ?? "",
            roadWidth: property.plotConfig.roadWidth ? String(property.plotConfig.roadWidth) : "",
            coverImageUrl: property.coverImageUrl,
            galleryImageUrls: property.galleryImageUrls ?? [],
            videoUrl: property.videoUrl ?? "",
            view360Url: property.view360Url ?? "",
            shortDescription: property.shortDescription,
            detailedDescription: property.detailedDescription,
            keyHighlightsText: property.keyHighlights.join("\n"),
            amenities: uniqueAmenities(property.amenities),
            contactName: property.contactName,
            phoneNumber: cleanPhone(property.phoneNumber || property.whatsappNumber || property.alternateNumber || ""),
            featuredProperty: property.featuredProperty,
            verifiedBadge: property.verifiedBadge,
            newLaunch: property.newLaunch,
            recordStatus: property.recordStatus,
            metaTitle: property.metaTitle,
            metaDescription: property.metaDescription,
            faqs: property.faqs && property.faqs.length > 0 ? property.faqs : [
                {
                    question: "",
                    answer: ""
                }
            ],
            slug: property.slug
        });
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    async function deleteProperty(id_0) {
        if (!canDeleteProperty) return;
        if (!window.confirm("Delete this property?")) return;
        const response_8 = await fetch(`/api/properties/${id_0}`, {
            method: "DELETE"
        });
        const data_8 = await response_8.json();
        if (!response_8.ok) {
            setMessage(data_8.error ?? "Delete failed.");
            return;
        }
        setMessage("Property deleted.");
        await loadProperties();
    }
    function updateFaq(index, field_1, value_0) {
        setPropertyForm((prev_12)=>({
                ...prev_12,
                faqs: prev_12.faqs.map((faq_3, faqIndex)=>faqIndex === index ? {
                        ...faq_3,
                        [field_1]: value_0
                    } : faq_3)
            }));
    }
    function addFaqRow() {
        setPropertyForm((prev_13)=>({
                ...prev_13,
                faqs: [
                    ...prev_13.faqs,
                    {
                        question: "",
                        answer: ""
                    }
                ]
            }));
    }
    function removeFaqRow(index_0) {
        setPropertyForm((prev_14)=>{
            if (prev_14.faqs.length === 1) {
                return {
                    ...prev_14,
                    faqs: [
                        {
                            question: "",
                            answer: ""
                        }
                    ]
                };
            }
            return {
                ...prev_14,
                faqs: prev_14.faqs.filter((_, faqIndex_0)=>faqIndex_0 !== index_0)
            };
        });
    }
    function addAmenity(value_1 = amenityInput) {
        const amenity = normalizeAmenity(value_1);
        if (!amenity) return;
        setPropertyForm((prev_15)=>({
                ...prev_15,
                amenities: uniqueAmenities([
                    ...prev_15.amenities,
                    amenity
                ])
            }));
        setAmenityInput("");
    }
    function removeAmenity(amenity_0) {
        setPropertyForm((prev_16)=>({
                ...prev_16,
                amenities: prev_16.amenities.filter((item)=>item.toLowerCase() !== amenity_0.toLowerCase())
            }));
    }
    function removeGalleryImage(index_1) {
        setPropertyForm((prev_17)=>({
                ...prev_17,
                galleryImageUrls: prev_17.galleryImageUrls.filter((__0, imageIndex)=>imageIndex !== index_1)
            }));
    }
    function setCoverFromGallery(url_3) {
        setPropertyForm((prev_18)=>({
                ...prev_18,
                coverImageUrl: url_3
            }));
        setCoverPreviewUrl(url_3);
        setMessage("Cover image set from gallery.");
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-zinc-600",
            children: "Loading CMS..."
        }, void 0, false, {
            fileName: "[project]/app/cms/CmsApp.tsx",
            lineNumber: 1301,
            columnNumber: 12
        }, this);
    }
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mx-auto max-w-4xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-semibold text-zinc-900",
                    children: "Rite Realty CMS"
                }, void 0, false, {
                    fileName: "[project]/app/cms/CmsApp.tsx",
                    lineNumber: 1305,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm text-zinc-600",
                    children: setup?.adminExists ? "Login as admin or manager." : "No admin found. Create the first admin account."
                }, void 0, false, {
                    fileName: "[project]/app/cms/CmsApp.tsx",
                    lineNumber: 1308,
                    columnNumber: 9
                }, this),
                !setup?.adminExists ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleBootstrapAdmin,
                    className: "mt-5 grid gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            value: bootstrapForm.name,
                            onChange: (event_11)=>setBootstrapForm((prev_19)=>({
                                        ...prev_19,
                                        name: event_11.target.value
                                    })),
                            placeholder: "Admin Name",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 1312,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            type: "email",
                            value: bootstrapForm.email,
                            onChange: (event_12)=>setBootstrapForm((prev_20)=>({
                                        ...prev_20,
                                        email: event_12.target.value
                                    })),
                            placeholder: "Admin Email",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 1316,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            type: "password",
                            value: bootstrapForm.password,
                            onChange: (event_13)=>setBootstrapForm((prev_21)=>({
                                        ...prev_21,
                                        password: event_13.target.value
                                    })),
                            placeholder: "Password (min 8)",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 1320,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white",
                            children: "Create Admin"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 1324,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/CmsApp.tsx",
                    lineNumber: 1311,
                    columnNumber: 32
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleLogin,
                    className: "mt-5 grid gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            type: "email",
                            value: loginForm.email,
                            onChange: (event_14)=>setLoginForm((prev_22)=>({
                                        ...prev_22,
                                        email: event_14.target.value
                                    })),
                            placeholder: "Email",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 1328,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            type: "password",
                            value: loginForm.password,
                            onChange: (event_15)=>setLoginForm((prev_23)=>({
                                        ...prev_23,
                                        password: event_15.target.value
                                    })),
                            placeholder: "Password",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 1332,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white",
                            children: "Login"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 1336,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/CmsApp.tsx",
                    lineNumber: 1327,
                    columnNumber: 21
                }, this),
                message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-sm text-zinc-700",
                    children: message
                }, void 0, false, {
                    fileName: "[project]/app/cms/CmsApp.tsx",
                    lineNumber: 1340,
                    columnNumber: 20
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/app/cms/CmsApp.tsx",
            lineNumber: 1304,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen bg-[#f4f7fc]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white px-4 py-4 md:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsSidebarOpen((prev_24)=>!prev_24),
                                    className: "mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 text-zinc-700 transition hover:bg-zinc-100",
                                    "aria-label": isSidebarOpen ? "Hide menu bar" : "Show menu bar",
                                    children: isSidebarOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1348,
                                        columnNumber: 32
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMenu"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1348,
                                        columnNumber: 52
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 1347,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-3xl font-bold tracking-tight text-[#0d2b6b]",
                                            children: activeView === "propertyWizard" ? "Add New Property" : "Rite Realty CMS"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 1351,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-zinc-600",
                                            children: activeView === "propertyWizard" ? "Create a new property listing in just a few simple steps" : `Logged in as ${user.name} (${user.role})`
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 1354,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 1350,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 1346,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-2",
                            children: [
                                activeView === "propertyWizard" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: savePropertyDraft,
                                            className: "inline-flex items-center gap-2 rounded-xl border border-[#1e4fb8] bg-white px-4 py-2 text-sm font-semibold text-[#1e4fb8]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSave"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 1362,
                                                    columnNumber: 19
                                                }, this),
                                                "Save Draft"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 1361,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowPropertyPreview((prev_25)=>!prev_25),
                                            className: "inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700",
                                            children: [
                                                showPropertyPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiEyeOff"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 1366,
                                                    columnNumber: 42
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiEye"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 1366,
                                                    columnNumber: 67
                                                }, this),
                                                showPropertyPreview ? "Hide Preview" : "Preview"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 1365,
                                            columnNumber: 17
                                        }, this),
                                        propertyStep < propertyWizardSteps.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: goToNextPropertyStep,
                                            className: "inline-flex items-center gap-2 rounded-xl bg-[#ef1d1d] px-5 py-2 text-sm font-semibold text-white shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Next Step"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 1370,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiArrowRight"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 1371,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 1369,
                                            columnNumber: 66
                                        }, this) : null
                                    ]
                                }, void 0, true) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/blog/cms",
                                    className: "rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50",
                                    children: "Blog Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 1374,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 1359,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/CmsApp.tsx",
                    lineNumber: 1345,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/CmsApp.tsx",
                lineNumber: 1344,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `grid gap-6 p-4 md:p-6 ${isSidebarOpen ? showPreviewPanel ? "lg:grid-cols-[260px_minmax(0,1fr)_360px]" : "lg:grid-cols-[260px_minmax(0,1fr)]" : showPreviewPanel ? "lg:grid-cols-[minmax(0,1fr)_360px]" : "lg:grid-cols-[minmax(0,1fr)]"}`,
                children: [
                    isSidebarOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "flex h-full min-h-[60vh] flex-col bg-gradient-to-b from-[#063a8b] to-[#04275e] p-4 text-white shadow-xl lg:sticky lg:top-0 lg:h-screen",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiHome"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1384,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-bold tracking-wide",
                                        children: "RITEREALITY"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1385,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1383,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "px-2 text-[11px] uppercase tracking-[0.16em] text-blue-100/80",
                                    children: "Content"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 1388,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1387,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 grid gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveView("banner"),
                                        className: `rounded-xl px-3 py-2 text-left text-sm font-medium transition ${activeView === "banner" ? "bg-[#ef1d1d] text-white shadow-md" : "text-blue-50 hover:bg-white/10"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiImage"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 1395,
                                                    columnNumber: 19
                                                }, this),
                                                "Banners"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 1394,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1393,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveView("propertyWizard"),
                                        className: `rounded-xl px-3 py-2 text-left text-sm font-medium transition ${activeView === "propertyWizard" ? "bg-[#ef1d1d] text-white shadow-md" : "text-blue-50 hover:bg-white/10"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiHome"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 1401,
                                                    columnNumber: 19
                                                }, this),
                                                "Properties"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 1400,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1399,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveView("records"),
                                        className: `rounded-xl px-3 py-2 text-left text-sm font-medium transition ${activeView === "records" ? "bg-[#ef1d1d] text-white shadow-md" : "text-blue-50 hover:bg-white/10"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiFileText"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 1407,
                                                    columnNumber: 19
                                                }, this),
                                                "All Properties"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 1406,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1405,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1392,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "px-2 text-[11px] uppercase tracking-[0.16em] text-blue-100/80",
                                    children: "Management"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 1413,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1412,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 grid gap-2",
                                children: isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setActiveView("managers"),
                                    className: `rounded-xl px-3 py-2 text-left text-sm font-medium transition ${activeView === "managers" ? "bg-[#ef1d1d] text-white shadow-md" : "text-blue-50 hover:bg-white/10"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUsers"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1420,
                                                columnNumber: 21
                                            }, this),
                                            "Managers"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1419,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 1418,
                                    columnNumber: 26
                                }, this) : null
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1417,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 rounded-xl bg-white p-3 text-sm text-zinc-900",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold",
                                        children: "Need help?"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1426,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-xs text-zinc-600",
                                        children: "You can save drafts and continue later."
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1427,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1425,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleLogout,
                                className: "mt-auto inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-3 py-2 text-left text-sm font-semibold text-white transition hover:bg-white/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiLogOut"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1432,
                                        columnNumber: 15
                                    }, this),
                                    "Logout"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1431,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/CmsApp.tsx",
                        lineNumber: 1382,
                        columnNumber: 26
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            activeView === "banner" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-semibold text-zinc-900",
                                                        children: "Add New Campaign Banner"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1441,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-sm text-zinc-600",
                                                        children: editingBannerId ? "Editing saved campaign banner." : "Create banner content with the same wizard feel."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1444,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1440,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-zinc-700",
                                                        children: "Status:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1449,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white",
                                                        children: editingBannerId ? "Live Editor" : "Draft"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1450,
                                                        columnNumber: 19
                                                    }, this),
                                                    editingBannerId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            setEditingBannerId(null);
                                                            setBannerPreviewUrl(null);
                                                            setBannerForm(initialBannerForm);
                                                            setMessage("Banner edit cancelled.");
                                                        },
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-50",
                                                        children: "Cancel Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1453,
                                                        columnNumber: 38
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1448,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1439,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-sm text-zinc-600",
                                        children: [
                                            banners.length,
                                            " / 6 banners stored.",
                                            " ",
                                            bannerSlideEnabled ? "Slider enabled." : "Slider disabled."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1464,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleBannerSubmit,
                                        className: "mt-6 space-y-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-5 xl:grid-cols-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-semibold text-blue-700",
                                                                children: "Campaign Details"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1472,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4 space-y-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-zinc-800",
                                                                        htmlFor: "banner-project-name",
                                                                        children: "Project Name"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1476,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: "banner-project-name",
                                                                        required: true,
                                                                        value: bannerForm.projectName,
                                                                        onChange: (event_16)=>setBannerForm((prev_26)=>({
                                                                                    ...prev_26,
                                                                                    projectName: event_16.target.value
                                                                                })),
                                                                        className: "w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm",
                                                                        placeholder: "Project name"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1479,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-zinc-800",
                                                                        htmlFor: "banner-title",
                                                                        children: "Banner Headline"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1484,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: "banner-title",
                                                                        required: true,
                                                                        value: bannerForm.title,
                                                                        onChange: (event_17)=>setBannerForm((prev_27)=>({
                                                                                    ...prev_27,
                                                                                    title: event_17.target.value
                                                                                })),
                                                                        className: "w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm",
                                                                        placeholder: "Banner headline"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1487,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-zinc-800",
                                                                        htmlFor: "banner-subtitle",
                                                                        children: "Sub-headline"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1492,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                        id: "banner-subtitle",
                                                                        required: true,
                                                                        value: bannerForm.subtitle,
                                                                        onChange: (event_18)=>setBannerForm((prev_28)=>({
                                                                                    ...prev_28,
                                                                                    subtitle: event_18.target.value
                                                                                })),
                                                                        className: "w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm",
                                                                        rows: 4,
                                                                        placeholder: "Support text for your campaign"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1495,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1475,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1471,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-semibold text-blue-700",
                                                                children: "High-Res Banner Asset"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1503,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                id: "banner-upload-input",
                                                                type: "file",
                                                                accept: "image/*",
                                                                onChange: handleBannerImageUpload,
                                                                className: "sr-only"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1506,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "banner-upload-input",
                                                                onDragOver: handleBannerUploadDragOver,
                                                                onDrop: (event_19)=>void handleBannerUploadDrop(event_19),
                                                                className: "mt-4 block rounded-2xl border-2 border-dashed border-sky-500 bg-gradient-to-br from-sky-50 via-blue-50 to-sky-100 px-4 py-12 text-center text-zinc-700",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "block text-lg font-semibold",
                                                                        children: "Upload or drag & drop high-res banner asset"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1508,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-2 inline-flex rounded-full border border-sky-300 bg-white px-3 py-1 text-xs font-semibold text-sky-700",
                                                                        children: "Click to choose file"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1511,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-2 block text-sm",
                                                                        children: "JPEG, PNG, WEBP (Max 5MB)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1514,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    uploadingBannerImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-2 block text-xs font-semibold",
                                                                        children: "Uploading..."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1517,
                                                                        columnNumber: 47
                                                                    }, this) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1507,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-3 text-xs text-zinc-500",
                                                                children: "OR paste image URL (optional if already uploaded)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1522,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "mt-2 block text-sm font-medium text-zinc-800",
                                                                htmlFor: "banner-image-url",
                                                                children: "Banner Image URL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1525,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                id: "banner-image-url",
                                                                value: bannerForm.imageUrl,
                                                                onChange: (event_20)=>handleBannerImageUrlChange(event_20.target.value),
                                                                className: "mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm",
                                                                placeholder: "https://..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1528,
                                                                columnNumber: 21
                                                            }, this),
                                                            bannerPreviewUrl || bannerForm.imageUrl.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4 overflow-hidden rounded-xl border border-zinc-200",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: bannerPreviewUrl || bannerForm.imageUrl,
                                                                    alt: "Banner preview",
                                                                    width: 1200,
                                                                    height: 320,
                                                                    unoptimized: true,
                                                                    className: "h-40 w-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                                    lineNumber: 1531,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1530,
                                                                columnNumber: 71
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1502,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-semibold text-blue-700",
                                                                children: "Call to Action (CTA)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1536,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4 space-y-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm font-medium text-zinc-800",
                                                                                children: "Enable CTA Button"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1541,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "inline-flex cursor-pointer items-center",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "checkbox",
                                                                                        checked: bannerForm.showCta,
                                                                                        onChange: (event_21)=>setBannerForm((prev_29)=>({
                                                                                                    ...prev_29,
                                                                                                    showCta: event_21.target.checked
                                                                                                })),
                                                                                        className: "peer sr-only"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                        lineNumber: 1545,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "relative h-6 w-11 rounded-full bg-zinc-300 transition peer-checked:bg-blue-600 peer-checked:after:translate-x-5 after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                        lineNumber: 1549,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1544,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1540,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-zinc-800",
                                                                        htmlFor: "banner-cta-label",
                                                                        children: "Button Label"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1553,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: "banner-cta-label",
                                                                        required: bannerForm.showCta,
                                                                        disabled: !bannerForm.showCta,
                                                                        value: bannerForm.ctaLabel,
                                                                        onChange: (event_22)=>setBannerForm((prev_30)=>({
                                                                                    ...prev_30,
                                                                                    ctaLabel: event_22.target.value
                                                                                })),
                                                                        className: "w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm disabled:bg-zinc-100 disabled:text-zinc-500",
                                                                        placeholder: "Download Price List"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1556,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-zinc-800",
                                                                        htmlFor: "banner-cta-href",
                                                                        children: "Button Link"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1561,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: "banner-cta-href",
                                                                        required: bannerForm.showCta,
                                                                        disabled: !bannerForm.showCta,
                                                                        value: bannerForm.ctaHref,
                                                                        onChange: (event_23)=>setBannerForm((prev_31)=>({
                                                                                    ...prev_31,
                                                                                    ctaHref: event_23.target.value
                                                                                })),
                                                                        className: "w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm disabled:bg-zinc-100 disabled:text-zinc-500",
                                                                        placeholder: "/project/slug"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1564,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "mt-3 flex items-center gap-2 text-sm text-zinc-700",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                checked: bannerForm.slideEnabled,
                                                                                onChange: (event_24)=>setBannerForm((prev_32)=>({
                                                                                            ...prev_32,
                                                                                            slideEnabled: event_24.target.checked
                                                                                        }))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1570,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            "Enable homepage auto slider"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1569,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1539,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1535,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1470,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center justify-end gap-3 border-t border-zinc-200 pt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            setMessage("Draft saved locally. Publish when ready.");
                                                        },
                                                        className: "rounded-xl border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100",
                                                        children: "Save as Draft"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1581,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        disabled: !editingBannerId && banners.length >= 6,
                                                        className: "rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:bg-zinc-400",
                                                        children: editingBannerId ? "Update Banner" : "Publish Banner"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1586,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1580,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1469,
                                        columnNumber: 15
                                    }, this),
                                    banners.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-zinc-900",
                                                children: "Saved Banners"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1593,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 space-y-3",
                                                children: banners.map((banner_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-3 md:flex-row md:items-center md:justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-semibold text-zinc-900",
                                                                        children: banner_1.projectName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1599,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-zinc-600",
                                                                        children: banner_1.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1602,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1598,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>startBannerEdit(banner_1),
                                                                        className: "rounded-lg border border-zinc-300 bg-white px-3 py-1 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-100",
                                                                        children: "Edit"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1607,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    banner_1.showCta !== false ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700",
                                                                        children: banner_1.ctaLabel
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1610,
                                                                        columnNumber: 57
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "rounded-full bg-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600",
                                                                        children: "CTA Hidden"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1612,
                                                                        columnNumber: 39
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>void handleBannerDelete(banner_1._id),
                                                                        className: "rounded-lg border border-red-300 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700 transition hover:bg-red-100",
                                                                        children: "Delete"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1615,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1606,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, banner_1._id, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1597,
                                                        columnNumber: 46
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1596,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1592,
                                        columnNumber: 37
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1438,
                                columnNumber: 38
                            }, this) : null,
                            activeView === "managers" ? isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-semibold text-[#0d2b6b]",
                                        children: "Manager Accounts"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1625,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm text-zinc-600",
                                        children: [
                                            "Limit: 2 managers. Current: ",
                                            setup?.managerCount ?? 0
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1628,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleManagerCreate,
                                        className: "mt-4 grid gap-3 md:grid-cols-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                value: managerForm.name,
                                                onChange: (event_25)=>setManagerForm((prev_33)=>({
                                                            ...prev_33,
                                                            name: event_25.target.value
                                                        })),
                                                className: "rounded-xl border border-zinc-200 px-3 py-2 text-sm outline-none transition focus:border-[#1e4fb8] focus:ring-2 focus:ring-blue-100",
                                                placeholder: "Manager name"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1632,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                type: "email",
                                                value: managerForm.email,
                                                onChange: (event_26)=>setManagerForm((prev_34)=>({
                                                            ...prev_34,
                                                            email: event_26.target.value
                                                        })),
                                                className: "rounded-xl border border-zinc-200 px-3 py-2 text-sm outline-none transition focus:border-[#1e4fb8] focus:ring-2 focus:ring-blue-100",
                                                placeholder: "Manager email"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1636,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                type: "password",
                                                value: managerForm.password,
                                                onChange: (event_27)=>setManagerForm((prev_35)=>({
                                                            ...prev_35,
                                                            password: event_27.target.value
                                                        })),
                                                className: "rounded-xl border border-zinc-200 px-3 py-2 text-sm outline-none transition focus:border-[#1e4fb8] focus:ring-2 focus:ring-blue-100",
                                                placeholder: "Password"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1640,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "inline-flex items-center justify-center gap-2 rounded-xl bg-[#ef1d1d] px-4 py-2 text-sm font-semibold text-white shadow-sm md:col-span-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUsers"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1645,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Create Manager"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1644,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1631,
                                        columnNumber: 17
                                    }, this),
                                    users.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 grid gap-2",
                                        children: users.map((profile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl border border-zinc-200 bg-blue-50/40 px-3 py-2 text-sm text-zinc-800",
                                                children: [
                                                    profile.name,
                                                    " - ",
                                                    profile.email,
                                                    " - ",
                                                    profile.role
                                                ]
                                            }, profile._id, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1650,
                                                columnNumber: 43
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1649,
                                        columnNumber: 37
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1624,
                                columnNumber: 50
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm",
                                children: "Only admins can manage manager accounts."
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1654,
                                columnNumber: 24
                            }, this) : null,
                            activeView === "propertyWizard" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-semibold text-[#0d2b6b]",
                                        children: editingId ? "Edit Property" : "Basic Information"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1659,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm text-zinc-600",
                                        children: [
                                            "Step ",
                                            propertyStep + 1,
                                            " of ",
                                            propertyWizardSteps.length,
                                            ":",
                                            " ",
                                            propertyWizardSteps[propertyStep]
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1662,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 h-2 overflow-hidden rounded-full bg-zinc-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full rounded-full bg-[#ef1d1d] transition-all",
                                            style: {
                                                width: `${(propertyStep + 1) / propertyWizardSteps.length * 100}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 1668,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1667,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 grid gap-3 md:grid-cols-6",
                                        children: propertyWizardSteps.map((step_2, index_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setPropertyStep(index_2),
                                                className: `rounded-2xl border px-3 py-3 text-left text-xs transition ${index_2 === propertyStep ? "border-[#ef1d1d] bg-red-50 text-[#ef1d1d]" : index_2 < propertyStep ? "border-[#1e4fb8] bg-blue-50 text-[#1e4fb8]" : "border-zinc-200 bg-white text-zinc-700"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${index_2 === propertyStep ? "bg-[#ef1d1d] text-white" : index_2 < propertyStep ? "bg-[#1e4fb8] text-white" : "border border-zinc-300 text-zinc-600"}`,
                                                            children: index_2 + 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 1676,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-semibold",
                                                                    children: step_2
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                                    lineNumber: 1680,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px] text-zinc-500",
                                                                    children: propertyStepCaptions[index_2]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                                    lineNumber: 1681,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 1679,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 1675,
                                                    columnNumber: 21
                                                }, this)
                                            }, step_2, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1674,
                                                columnNumber: 63
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1673,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handlePropertySubmit,
                                        className: "mt-5 grid gap-4 pb-24 md:grid-cols-2",
                                        children: [
                                            propertyStep === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-xl border border-zinc-200 p-4 md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-zinc-900",
                                                                children: "Identification"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1692,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 grid gap-3 md:grid-cols-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        required: true,
                                                                        value: propertyForm.propertyTitle,
                                                                        onChange: (event_28)=>setPropertyForm((prev_36)=>({
                                                                                    ...prev_36,
                                                                                    propertyTitle: event_28.target.value
                                                                                })),
                                                                        className: propertyFieldClass("propertyTitle"),
                                                                        placeholder: "Property Title"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1696,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                value: propertyForm.slug,
                                                                                onChange: (event_29)=>{
                                                                                    setSlugEditedManually(true);
                                                                                    setPropertyForm((prev_37)=>({
                                                                                            ...prev_37,
                                                                                            slug: event_29.target.value
                                                                                        }));
                                                                                },
                                                                                className: `${propertyFieldClass("slug")} w-full`,
                                                                                placeholder: "Slug"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1701,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mt-1 text-xs text-zinc-500",
                                                                                children: "Used in URL"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1708,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1700,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: propertyForm.propertyType,
                                                                        onChange: (event_30)=>setPropertyForm((prev_38)=>({
                                                                                    ...prev_38,
                                                                                    propertyType: event_30.target.value
                                                                                })),
                                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAVBAR_CONFIG"].propertyType.map((typeItem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: typeItem.propertyType,
                                                                                children: typeItem.label
                                                                            }, typeItem.propertyType, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1716,
                                                                                columnNumber: 71
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1712,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: propertyForm.listingType,
                                                                        onChange: (event_31)=>setPropertyForm((prev_39)=>({
                                                                                    ...prev_39,
                                                                                    listingType: event_31.target.value
                                                                                })),
                                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LISTING_TYPES"].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: type,
                                                                                children: type
                                                                            }, type, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1724,
                                                                                columnNumber: 54
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1720,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        value: propertyForm.propertyCode,
                                                                        onChange: (event_32)=>setPropertyForm((prev_40)=>({
                                                                                    ...prev_40,
                                                                                    propertyCode: event_32.target.value
                                                                                })),
                                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                                                        placeholder: "Property Code (optional)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1728,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1695,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1691,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-xl border border-zinc-200 p-4 md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-zinc-900",
                                                                children: "Pricing"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1736,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 grid gap-3 md:grid-cols-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        required: true,
                                                                        value: propertyForm.price,
                                                                        onChange: (event_33)=>setPropertyForm((prev_41)=>({
                                                                                    ...prev_41,
                                                                                    price: event_33.target.value
                                                                                })),
                                                                        className: propertyFieldClass("price"),
                                                                        placeholder: "Price"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1740,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: propertyForm.priceUnit,
                                                                        onChange: (event_34)=>setPropertyForm((prev_42)=>({
                                                                                    ...prev_42,
                                                                                    priceUnit: event_34.target.value
                                                                                })),
                                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRICE_UNITS"].map((unit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: unit,
                                                                                children: unit
                                                                            }, unit, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1748,
                                                                                columnNumber: 52
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1744,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        required: true,
                                                                        value: propertyForm.areaSize,
                                                                        onChange: (event_35)=>setPropertyForm((prev_43)=>({
                                                                                    ...prev_43,
                                                                                    areaSize: event_35.target.value
                                                                                })),
                                                                        className: propertyFieldClass("areaSize"),
                                                                        placeholder: "Area Size"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1752,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: propertyForm.areaUnit,
                                                                        onChange: (event_36)=>setPropertyForm((prev_44)=>({
                                                                                    ...prev_44,
                                                                                    areaUnit: event_36.target.value
                                                                                })),
                                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AREA_UNITS"].map((unit_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: unit_0,
                                                                                children: unit_0
                                                                            }, unit_0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1760,
                                                                                columnNumber: 53
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1756,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1739,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1735,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-xl border border-zinc-200 p-4 md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-zinc-900",
                                                                children: "Project Details"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1768,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 grid gap-3 md:grid-cols-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        required: true,
                                                                        value: propertyForm.builderName,
                                                                        onChange: (event_37)=>setPropertyForm((prev_45)=>({
                                                                                    ...prev_45,
                                                                                    builderName: event_37.target.value
                                                                                })),
                                                                        className: propertyFieldClass("builderName"),
                                                                        placeholder: "Builder / Owner Name"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1772,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        required: true,
                                                                        value: propertyForm.projectName,
                                                                        onChange: (event_38)=>setPropertyForm((prev_46)=>({
                                                                                    ...prev_46,
                                                                                    projectName: event_38.target.value
                                                                                })),
                                                                        className: propertyFieldClass("projectName"),
                                                                        placeholder: "Project Name"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1776,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: propertyForm.projectStatus,
                                                                        onChange: (event_39)=>setPropertyForm((prev_47)=>({
                                                                                    ...prev_47,
                                                                                    projectStatus: event_39.target.value
                                                                                })),
                                                                        className: propertySelectClass("projectStatus"),
                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAVBAR_CONFIG"].projectStatus.map((statusItem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: statusItem.projectStatus,
                                                                                children: statusItem.label
                                                                            }, statusItem.projectStatus, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1784,
                                                                                columnNumber: 74
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1780,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "date",
                                                                        value: propertyForm.possessionDate,
                                                                        onChange: (event_40)=>setPropertyForm((prev_48)=>({
                                                                                    ...prev_48,
                                                                                    possessionDate: event_40.target.value
                                                                                })),
                                                                        className: `${propertySelectClass("possessionDate")} w-full`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1788,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        value: propertyForm.reraNumber,
                                                                        onChange: (event_41)=>setPropertyForm((prev_49)=>({
                                                                                    ...prev_49,
                                                                                    reraNumber: event_41.target.value
                                                                                })),
                                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                                                        placeholder: "RERA Number (optional)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1792,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1771,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1767,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true) : null,
                                            propertyStep === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-xl border border-zinc-200 p-4 md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-zinc-900",
                                                                children: "Google Map Picker"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1802,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 flex flex-col gap-2 md:flex-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        value: mapSearch,
                                                                        onChange: (event_42)=>setMapSearch(event_42.target.value),
                                                                        onKeyDown: (event_43)=>{
                                                                            if (event_43.key === "Enter") {
                                                                                event_43.preventDefault();
                                                                                void autoFillLocationFromMap();
                                                                            }
                                                                        },
                                                                        className: "w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                        placeholder: "Search city, locality, sector, address, or paste Google Maps URL"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1806,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>void autoFillLocationFromMap(),
                                                                        className: "rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white",
                                                                        disabled: mapAutoFilling,
                                                                        children: mapAutoFilling ? "Searching..." : "Search & Fill"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1812,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>void handleCurrentLocation(),
                                                                        className: "rounded-lg border border-[#1e4fb8] px-4 py-2 text-sm font-semibold text-[#1e4fb8]",
                                                                        disabled: mapAutoFilling,
                                                                        children: "Use My Location"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1815,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1805,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1801,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.city,
                                                        onChange: (event_44)=>setPropertyForm((prev_50)=>({
                                                                    ...prev_50,
                                                                    city: event_44.target.value
                                                                })),
                                                        className: propertyFieldClass("city"),
                                                        placeholder: "City"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1821,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.areaSector,
                                                        onChange: (event_45)=>setPropertyForm((prev_51)=>({
                                                                    ...prev_51,
                                                                    areaSector: event_45.target.value
                                                                })),
                                                        className: propertyFieldClass("areaSector"),
                                                        placeholder: "Area/Sector",
                                                        list: "area-sector-options"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1825,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                                                        id: "area-sector-options",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAVBAR_CONFIG"].locations.map((locationItem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: locationItem.areaSector
                                                            }, locationItem.href, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1830,
                                                                columnNumber: 68
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1829,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.fullAddress,
                                                        onChange: (event_46)=>setPropertyForm((prev_52)=>({
                                                                    ...prev_52,
                                                                    fullAddress: event_46.target.value
                                                                })),
                                                        className: `${propertyFieldClass("fullAddress")} md:col-span-2`,
                                                        placeholder: "Full Address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1832,
                                                        columnNumber: 21
                                                    }, this),
                                                    propertyForm.fullAddress || propertyForm.lat ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                                title: "Property map preview",
                                                                src: `https://www.google.com/maps?q=${encodeURIComponent(locationMapQuery(propertyForm))}&output=embed`,
                                                                className: "h-64 w-full",
                                                                loading: "lazy",
                                                                referrerPolicy: "no-referrer-when-downgrade"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1837,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "px-3 py-2 text-xs text-zinc-500",
                                                                children: "This searched location will be saved for the property map."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1838,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1836,
                                                        columnNumber: 69
                                                    }, this) : null
                                                ]
                                            }, void 0, true) : null,
                                            propertyStep === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-xl border border-zinc-200 p-4 md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-zinc-900",
                                                                children: "Property Configuration"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1847,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-xs text-zinc-500",
                                                                children: "Choose the property type and add matching details."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1850,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4 grid overflow-hidden rounded-xl border border-zinc-200 md:grid-cols-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setPropertyForm((prev_53)=>({
                                                                                    ...prev_53,
                                                                                    propertyType: "flat"
                                                                                })),
                                                                        className: `px-4 py-3 text-sm font-semibold ${propertyForm.propertyType === "flat" ? "bg-[#1e4fb8] text-white" : "bg-white text-[#0d2b6b]"}`,
                                                                        children: "Flat / Apartment"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1854,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setPropertyForm((prev_54)=>({
                                                                                    ...prev_54,
                                                                                    propertyType: "plot"
                                                                                })),
                                                                        className: `border-t border-zinc-200 px-4 py-3 text-sm font-semibold md:border-l md:border-t-0 ${propertyForm.propertyType !== "flat" ? "bg-[#1e4fb8] text-white" : "bg-white text-[#0d2b6b]"}`,
                                                                        children: "Plot / Land"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1860,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1853,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1846,
                                                        columnNumber: 21
                                                    }, this),
                                                    propertyForm.propertyType === "plot" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-[#0d2b6b] md:col-span-2",
                                                                children: "Plot Configuration"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1870,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: propertyForm.plotArea,
                                                                onChange: (event_47)=>setPropertyForm((prev_55)=>({
                                                                            ...prev_55,
                                                                            plotArea: event_47.target.value
                                                                        })),
                                                                className: propertyFieldClass("plotArea"),
                                                                placeholder: "Plot Area"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1873,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: propertyForm.facing,
                                                                onChange: (event_48)=>setPropertyForm((prev_56)=>({
                                                                            ...prev_56,
                                                                            facing: event_48.target.value
                                                                        })),
                                                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "Facing"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1881,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FACING_OPTIONS"].map((facing)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: facing,
                                                                            children: facing
                                                                        }, facing, false, {
                                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                                            lineNumber: 1882,
                                                                            columnNumber: 57
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1877,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: propertyForm.roadWidth,
                                                                onChange: (event_49)=>setPropertyForm((prev_57)=>({
                                                                            ...prev_57,
                                                                            roadWidth: event_49.target.value
                                                                        })),
                                                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                                                placeholder: "Road Width"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1886,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : null,
                                                    propertyForm.propertyType === "flat" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-[#0d2b6b] md:col-span-2",
                                                                children: "Flat Configuration"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1893,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: propertyForm.bhk,
                                                                onChange: (event_50)=>setPropertyForm((prev_58)=>({
                                                                            ...prev_58,
                                                                            bhk: event_50.target.value
                                                                        })),
                                                                className: propertyFieldClass("bhk"),
                                                                placeholder: "BHK"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1896,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: propertyForm.floorNumber,
                                                                onChange: (event_51)=>setPropertyForm((prev_59)=>({
                                                                            ...prev_59,
                                                                            floorNumber: event_51.target.value
                                                                        })),
                                                                className: propertyFieldClass("floorNumber"),
                                                                placeholder: "Floor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1900,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: propertyForm.bathrooms,
                                                                onChange: (event_52)=>setPropertyForm((prev_60)=>({
                                                                            ...prev_60,
                                                                            bathrooms: event_52.target.value
                                                                        })),
                                                                className: propertyFieldClass("bathrooms"),
                                                                placeholder: "Bathrooms"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1904,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: propertyForm.balconies,
                                                                onChange: (event_53)=>setPropertyForm((prev_61)=>({
                                                                            ...prev_61,
                                                                            balconies: event_53.target.value
                                                                        })),
                                                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                placeholder: "Balconies"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1908,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: propertyForm.totalFloors,
                                                                onChange: (event_54)=>setPropertyForm((prev_62)=>({
                                                                            ...prev_62,
                                                                            totalFloors: event_54.target.value
                                                                        })),
                                                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                placeholder: "Total Floors"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1912,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : null
                                                ]
                                            }, void 0, true) : null,
                                            propertyStep === 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-xl border border-zinc-200 p-4 md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-zinc-900",
                                                                children: "Cover Image"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1921,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                onDragOver: (event_55)=>{
                                                                    event_55.preventDefault();
                                                                    setCoverDropActive(true);
                                                                },
                                                                onDragLeave: ()=>setCoverDropActive(false),
                                                                onDrop: (event_56)=>void handleCoverDrop(event_56),
                                                                className: `mt-2 block rounded-xl border-2 border-dashed p-4 text-sm ${coverDropActive ? "border-blue-500 bg-blue-50" : propertyErrors.coverImageUrl ? "border-red-500 bg-red-50" : "border-zinc-300 bg-zinc-50"}`,
                                                                children: [
                                                                    "Drag and drop cover image or click to upload",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "file",
                                                                        accept: "image/*",
                                                                        onChange: handleCoverUpload,
                                                                        className: "mt-2 block w-full text-sm"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1929,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    uploadingCover ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-1 block text-xs",
                                                                        children: "Uploading..."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1930,
                                                                        columnNumber: 43
                                                                    }, this) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1924,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-2 text-xs text-zinc-500",
                                                                children: propertyErrors.coverImageUrl || "Cover image is set from uploads. You can also pick one from gallery using \"Set Cover Image\"."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1934,
                                                                columnNumber: 23
                                                            }, this),
                                                            coverPreviewUrl || propertyForm.coverImageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 overflow-hidden rounded-lg border border-zinc-200 bg-white",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: coverPreviewUrl || propertyForm.coverImageUrl,
                                                                    alt: "Cover image preview",
                                                                    width: 640,
                                                                    height: 360,
                                                                    unoptimized: true,
                                                                    className: "h-44 w-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                                    lineNumber: 1938,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1937,
                                                                columnNumber: 72
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1920,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-xl border border-zinc-200 p-4 md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-zinc-900",
                                                                children: "Gallery Images"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1943,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                onDragOver: (event_57)=>{
                                                                    event_57.preventDefault();
                                                                    setGalleryDropActive(true);
                                                                },
                                                                onDragLeave: ()=>setGalleryDropActive(false),
                                                                onDrop: (event_58)=>void handleGalleryDrop(event_58),
                                                                className: `mt-2 block rounded-xl border-2 border-dashed p-4 text-sm ${galleryDropActive ? "border-blue-500 bg-blue-50" : "border-zinc-300 bg-zinc-50"}`,
                                                                children: [
                                                                    "Drag and drop gallery images or click to upload",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "file",
                                                                        accept: "image/*",
                                                                        multiple: true,
                                                                        onChange: handleGalleryUpload,
                                                                        className: "mt-2 block w-full text-sm"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1951,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    uploadingGallery ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-1 block text-xs",
                                                                        children: "Uploading..."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1952,
                                                                        columnNumber: 45
                                                                    }, this) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1946,
                                                                columnNumber: 23
                                                            }, this),
                                                            galleryPreviewUrls.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
                                                                children: galleryPreviewUrls.map((url_4, index_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "overflow-hidden rounded-lg border border-blue-200 bg-blue-50",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: url_4,
                                                                                alt: `Selected gallery preview ${index_3 + 1}`,
                                                                                width: 400,
                                                                                height: 260,
                                                                                unoptimized: true,
                                                                                className: "h-28 w-full object-cover"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1959,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "p-2 text-xs font-semibold text-[#1e4fb8]",
                                                                                children: "Previewing upload"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1960,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, url_4, true, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1958,
                                                                        columnNumber: 71
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1957,
                                                                columnNumber: 56
                                                            }, this) : null,
                                                            propertyForm.galleryImageUrls.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
                                                                children: propertyForm.galleryImageUrls.map((url_5, index_4)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "overflow-hidden rounded-lg border border-zinc-200 bg-white",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: url_5,
                                                                                alt: `Gallery ${index_4 + 1}`,
                                                                                width: 400,
                                                                                height: 260,
                                                                                unoptimized: true,
                                                                                className: "h-28 w-full object-cover"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1968,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "space-y-2 p-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        type: "button",
                                                                                        onClick: ()=>setCoverFromGallery(url_5),
                                                                                        className: "w-full rounded-md border border-zinc-300 px-2 py-1 text-xs font-semibold text-zinc-700",
                                                                                        children: "Set Cover Image"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                        lineNumber: 1970,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        type: "button",
                                                                                        onClick: ()=>removeGalleryImage(index_4),
                                                                                        className: "w-full rounded-md border border-red-300 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700",
                                                                                        children: "Remove"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                        lineNumber: 1973,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1969,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, `${url_5}-${index_4}`, true, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1967,
                                                                        columnNumber: 82
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1966,
                                                                columnNumber: 67
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-3 text-xs text-zinc-500",
                                                                children: "No gallery images uploaded yet."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1978,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1942,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: propertyForm.videoUrl,
                                                        onChange: (event_59)=>setPropertyForm((prev_63)=>({
                                                                    ...prev_63,
                                                                    videoUrl: event_59.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "Video URL (optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1983,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: propertyForm.view360Url,
                                                        onChange: (event_60)=>setPropertyForm((prev_64)=>({
                                                                    ...prev_64,
                                                                    view360Url: event_60.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "360 View URL (optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1987,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true) : null,
                                            propertyStep === 4 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        required: true,
                                                        value: propertyForm.shortDescription,
                                                        onChange: (event_61)=>setPropertyForm((prev_65)=>({
                                                                    ...prev_65,
                                                                    shortDescription: event_61.target.value
                                                                })),
                                                        className: `${propertyFieldClass("shortDescription")} md:col-span-2`,
                                                        rows: 2,
                                                        placeholder: "Short Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1994,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        required: true,
                                                        value: propertyForm.detailedDescription,
                                                        onChange: (event_62)=>setPropertyForm((prev_66)=>({
                                                                    ...prev_66,
                                                                    detailedDescription: event_62.target.value
                                                                })),
                                                        className: `${propertyFieldClass("detailedDescription")} md:col-span-2`,
                                                        rows: 4,
                                                        placeholder: "Detailed Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1998,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        value: propertyForm.keyHighlightsText,
                                                        onChange: (event_63)=>setPropertyForm((prev_67)=>({
                                                                    ...prev_67,
                                                                    keyHighlightsText: event_63.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                                        rows: 3,
                                                        placeholder: "Highlights (one per line)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2002,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-lg border border-zinc-300 p-3 md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mb-2 text-sm font-medium text-zinc-900",
                                                                children: "Amenities"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2007,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        value: amenityInput,
                                                                        onChange: (event_64)=>setAmenityInput(event_64.target.value),
                                                                        onKeyDown: (event_65)=>{
                                                                            if (event_65.key === "Enter") {
                                                                                event_65.preventDefault();
                                                                                addAmenity();
                                                                            }
                                                                        },
                                                                        className: "min-w-0 flex-1 rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                        placeholder: "Add amenity, e.g. Club House"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2011,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>addAmenity(),
                                                                        className: "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#1e4fb8] text-white",
                                                                        "aria-label": "Add amenity",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPlus"], {
                                                                            size: 18
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                                            lineNumber: 2018,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2017,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2010,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 flex flex-wrap gap-2",
                                                                children: [
                                                                    propertyForm.amenities.map((amenity_1)=>{
                                                                        const Icon = amenityIconFor(amenity_1);
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm font-medium text-[#0d2b6b]",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                                    size: 15
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                    lineNumber: 2025,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                defaultAmenityLabel(amenity_1),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>removeAmenity(amenity_1),
                                                                                    className: "inline-flex h-5 w-5 items-center justify-center rounded-full text-[#0d2b6b] hover:bg-white",
                                                                                    "aria-label": `Remove ${amenity_1}`,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                                                                        size: 14
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                        lineNumber: 2028,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                    lineNumber: 2027,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, amenity_1, true, {
                                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                                            lineNumber: 2024,
                                                                            columnNumber: 28
                                                                        }, this);
                                                                    }),
                                                                    propertyForm.amenities.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-zinc-500",
                                                                        children: "Add amenities one by one."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2032,
                                                                        columnNumber: 64
                                                                    }, this) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2021,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 flex flex-wrap gap-2",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AMENITY_OPTIONS"].filter((amenity_2)=>!propertyForm.amenities.some((item_0)=>item_0.toLowerCase() === amenity_2.toLowerCase())).map((amenity_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>addAmenity(amenity_3),
                                                                        className: "rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600 hover:border-[#1e4fb8] hover:text-[#1e4fb8]",
                                                                        children: defaultAmenityLabel(amenity_3)
                                                                    }, amenity_3, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2037,
                                                                        columnNumber: 169
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2036,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2006,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.contactName,
                                                        onChange: (event_66)=>setPropertyForm((prev_68)=>({
                                                                    ...prev_68,
                                                                    contactName: event_66.target.value
                                                                })),
                                                        className: propertyFieldClass("contactName"),
                                                        placeholder: "Contact Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2042,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.phoneNumber,
                                                        onChange: (event_67)=>{
                                                            const contactNumber_1 = cleanPhone(event_67.target.value);
                                                            setPropertyForm((prev_69)=>({
                                                                    ...prev_69,
                                                                    phoneNumber: contactNumber_1
                                                                }));
                                                        },
                                                        className: propertyFieldClass("phoneNumber"),
                                                        inputMode: "numeric",
                                                        maxLength: 10,
                                                        placeholder: "Contact / WhatsApp / Phone Number (10 digit)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2046,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true) : null,
                                            propertyStep === 5 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 text-sm text-zinc-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: propertyForm.featuredProperty,
                                                                onChange: (event_68)=>setPropertyForm((prev_70)=>({
                                                                            ...prev_70,
                                                                            featuredProperty: event_68.target.checked
                                                                        }))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2057,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Featured"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2056,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 text-sm text-zinc-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: propertyForm.verifiedBadge,
                                                                onChange: (event_69)=>setPropertyForm((prev_71)=>({
                                                                            ...prev_71,
                                                                            verifiedBadge: event_69.target.checked
                                                                        }))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2064,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Verified"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2063,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 text-sm text-zinc-700 md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: propertyForm.newLaunch,
                                                                onChange: (event_70)=>setPropertyForm((prev_72)=>({
                                                                            ...prev_72,
                                                                            newLaunch: event_70.target.checked
                                                                        }))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2071,
                                                                columnNumber: 23
                                                            }, this),
                                                            "New Launch"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2070,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: propertyForm.recordStatus,
                                                        onChange: (event_71)=>setPropertyForm((prev_73)=>({
                                                                    ...prev_73,
                                                                    recordStatus: event_71.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROPERTY_RECORD_STATUSES"].map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: status,
                                                                children: status
                                                            }, status, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2081,
                                                                columnNumber: 63
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2077,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.metaTitle,
                                                        onChange: (event_72)=>setPropertyForm((prev_74)=>({
                                                                    ...prev_74,
                                                                    metaTitle: event_72.target.value
                                                                })),
                                                        className: propertyFieldClass("metaTitle"),
                                                        placeholder: "Meta Title"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2085,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        required: true,
                                                        value: propertyForm.metaDescription,
                                                        onChange: (event_73)=>setPropertyForm((prev_75)=>({
                                                                    ...prev_75,
                                                                    metaDescription: event_73.target.value
                                                                })),
                                                        className: `${propertyFieldClass("metaDescription")} md:col-span-2`,
                                                        rows: 2,
                                                        placeholder: "Meta Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2089,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-xl border border-zinc-200 p-4 md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-semibold text-zinc-900",
                                                                        children: "FAQs"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2096,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: addFaqRow,
                                                                        className: "rounded-md border border-zinc-300 px-2 py-1 text-xs font-semibold text-zinc-700",
                                                                        children: "Add FAQ"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2099,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2095,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 space-y-3",
                                                                children: propertyForm.faqs.map((faq_4, index_5)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid gap-2 rounded-lg border border-zinc-200 p-3 md:grid-cols-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                value: faq_4.question,
                                                                                onChange: (event_74)=>updateFaq(index_5, "question", event_74.target.value),
                                                                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                                placeholder: "FAQ question"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 2105,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                value: faq_4.answer,
                                                                                onChange: (event_75)=>updateFaq(index_5, "answer", event_75.target.value),
                                                                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                                placeholder: "FAQ answer"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 2106,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>removeFaqRow(index_5),
                                                                                className: "rounded-md border border-red-300 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700 md:col-span-2",
                                                                                children: "Remove FAQ"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 2107,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, index_5, true, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2104,
                                                                        columnNumber: 68
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2103,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2094,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "md:col-span-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setShowPropertyPreview((prev_76)=>!prev_76),
                                                            className: "rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700",
                                                            children: showPropertyPreview ? "Hide Preview" : "Preview Property"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 2115,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2114,
                                                        columnNumber: 21
                                                    }, this),
                                                    showPropertyPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "overflow-hidden rounded-xl border border-zinc-200 md:col-span-2",
                                                        children: [
                                                            propertyForm.coverImageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: propertyForm.coverImageUrl,
                                                                alt: "Property cover preview",
                                                                width: 1200,
                                                                height: 420,
                                                                unoptimized: true,
                                                                className: "h-56 w-full object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2121,
                                                                columnNumber: 55
                                                            }, this) : null,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2 p-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-xl font-semibold text-zinc-900",
                                                                        children: propertyForm.propertyTitle || "Property title"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2123,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-zinc-600",
                                                                        children: propertyForm.fullAddress || "Address preview"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2126,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-zinc-700",
                                                                        children: propertyForm.shortDescription || "Short description preview"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2129,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-semibold text-zinc-900",
                                                                        children: [
                                                                            "INR ",
                                                                            propertyForm.price || "0",
                                                                            " (",
                                                                            propertyForm.priceUnit,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2132,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2122,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2120,
                                                        columnNumber: 44
                                                    }, this) : null
                                                ]
                                            }, void 0, true) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sticky bottom-0 left-0 right-0 z-20 -mx-5 mt-2 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200 bg-white px-5 py-4 shadow-[0_-6px_20px_rgba(15,23,42,0.06)] md:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: goToPreviousPropertyStep,
                                                                disabled: propertyStep === 0,
                                                                className: "rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 disabled:opacity-60",
                                                                children: "Previous Step"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2142,
                                                                columnNumber: 21
                                                            }, this),
                                                            propertyStep < propertyWizardSteps.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: goToNextPropertyStep,
                                                                className: "rounded-lg bg-[#ef1d1d] px-4 py-2 text-sm font-semibold text-white",
                                                                children: "Next Step"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2145,
                                                                columnNumber: 70
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                disabled: submittingProperty,
                                                                className: "rounded-lg bg-[#ef1d1d] px-4 py-2 text-sm font-semibold text-white disabled:opacity-70",
                                                                children: submittingProperty ? "Saving..." : editingId ? "Update Property" : "Create Property"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2147,
                                                                columnNumber: 35
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2141,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "hidden items-center gap-2 text-sm text-zinc-600 md:flex",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Step ",
                                                                    propertyStep + 1,
                                                                    " of ",
                                                                    propertyWizardSteps.length
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2152,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-2 w-40 overflow-hidden rounded-full bg-zinc-200",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-full rounded-full bg-[#ef1d1d]",
                                                                    style: {
                                                                        width: `${(propertyStep + 1) / propertyWizardSteps.length * 100}%`
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                                    lineNumber: 2156,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2155,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    Math.round((propertyStep + 1) / propertyWizardSteps.length * 100),
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2160,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2151,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: savePropertyDraft,
                                                                className: "rounded-lg border border-[#1e4fb8] px-4 py-2 text-sm font-semibold text-[#1e4fb8]",
                                                                children: "Save Draft"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2166,
                                                                columnNumber: 21
                                                            }, this),
                                                            editingId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    setEditingId(null);
                                                                    setPropertyForm(initialPropertyForm);
                                                                    setSlugEditedManually(false);
                                                                    setShowPropertyPreview(true);
                                                                    setPropertyErrors({});
                                                                    setMapSearch("");
                                                                    setPropertyStep(0);
                                                                    setCoverPreviewUrl(null);
                                                                    setGalleryPreviewUrls([]);
                                                                    setAmenityInput("");
                                                                },
                                                                className: "rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700",
                                                                children: "Cancel Edit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2169,
                                                                columnNumber: 34
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2165,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 2140,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1689,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1658,
                                columnNumber: 46
                            }, this) : null,
                            activeView === "records" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold text-zinc-900",
                                        children: "Property Records"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 2189,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 grid gap-3",
                                        children: [
                                            properties.map((property_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                    className: "rounded-xl border border-zinc-200 bg-zinc-50 p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                                            children: property_0.recordStatus
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 2194,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "mt-1 text-lg font-semibold text-zinc-900",
                                                            children: property_0.propertyTitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 2197,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-sm text-zinc-600",
                                                            children: [
                                                                property_0.propertyType,
                                                                " | ",
                                                                property_0.areaSector,
                                                                ",",
                                                                " ",
                                                                property_0.city,
                                                                " | INR ",
                                                                property_0.price
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 2200,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-3 flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>startEdit(property_0),
                                                                    className: "rounded-md border border-zinc-300 px-3 py-1 text-xs font-semibold text-zinc-700",
                                                                    children: "Edit"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                                    lineNumber: 2205,
                                                                    columnNumber: 23
                                                                }, this),
                                                                canDeleteProperty ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>deleteProperty(property_0._id),
                                                                    className: "rounded-md bg-red-600 px-3 py-1 text-xs font-semibold text-white",
                                                                    children: "Delete"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                                    lineNumber: 2208,
                                                                    columnNumber: 44
                                                                }, this) : null
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 2204,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, property_0._id, true, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 2193,
                                                    columnNumber: 47
                                                }, this)),
                                            properties.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "rounded-lg border border-zinc-200 p-4 text-sm text-zinc-700",
                                                children: "No properties found."
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 2213,
                                                columnNumber: 44
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 2192,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 2188,
                                columnNumber: 39
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/CmsApp.tsx",
                        lineNumber: 1437,
                        columnNumber: 9
                    }, this),
                    showPreviewPanel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm lg:sticky lg:top-6 lg:h-fit",
                        children: activeView === "propertyWizard" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl font-semibold text-[#0d2b6b]",
                                    children: "Live Preview"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 2222,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-zinc-600",
                                    children: "This is how your property will appear"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 2225,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 overflow-hidden rounded-xl border border-zinc-200 bg-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-52 w-full bg-zinc-100",
                                            children: [
                                                coverPreviewUrl || propertyForm.coverImageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: coverPreviewUrl || propertyForm.coverImageUrl,
                                                    alt: "Property preview cover",
                                                    width: 640,
                                                    height: 360,
                                                    unoptimized: true,
                                                    className: "h-full w-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 2230,
                                                    columnNumber: 70
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex h-full items-center justify-center text-sm text-zinc-500",
                                                    children: "Upload a cover image"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 2230,
                                                    columnNumber: 239
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute left-3 top-3 rounded-md bg-[#ef1d1d] px-2 py-1 text-xs font-semibold text-white",
                                                    children: propertyForm.listingType.toUpperCase()
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 2233,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 2229,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-semibold text-[#0d2b6b]",
                                                    children: propertyForm.propertyTitle || "Property title preview"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 2238,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-zinc-600",
                                                    children: [
                                                        propertyForm.areaSector || "Sector",
                                                        " ,",
                                                        " ",
                                                        propertyForm.city || "Kurukshetra"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 2241,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-md border border-blue-200 bg-blue-50 px-2 py-1 text-xs font-semibold text-[#1e4fb8]",
                                                            children: propertyForm.projectStatus.replace(/[-_]/g, " ")
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 2246,
                                                            columnNumber: 23
                                                        }, this),
                                                        propertyForm.verifiedBadge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-md border border-green-200 bg-green-50 px-2 py-1 text-xs font-semibold text-green-700",
                                                            children: "Verified"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 2249,
                                                            columnNumber: 53
                                                        }, this) : null,
                                                        propertyForm.featuredProperty ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-md border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-[#ef1d1d]",
                                                            children: "Featured"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 2252,
                                                            columnNumber: 56
                                                        }, this) : null
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 2245,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-bold text-[#ef1d1d]",
                                                    children: [
                                                        "INR ",
                                                        propertyForm.price || "0"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 2256,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-zinc-700",
                                                    children: propertyForm.shortDescription || "Short description preview"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 2259,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold text-[#0d2b6b]",
                                                            children: "Highlights"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 2263,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "mt-2 space-y-1 text-sm text-zinc-700",
                                                            children: [
                                                                propertyForm.keyHighlightsText.split("\n").map((item_1)=>item_1.trim()).filter((item_2)=>item_2.length > 0).slice(0, 4).map((item_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: [
                                                                            "- ",
                                                                            item_3
                                                                        ]
                                                                    }, item_3, true, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2267,
                                                                        columnNumber: 160
                                                                    }, this)),
                                                                propertyForm.keyHighlightsText.trim().length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "- Add highlights in Content step"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                                    lineNumber: 2268,
                                                                    columnNumber: 79
                                                                }, this) : null
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 2266,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 2262,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 2237,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 2228,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 rounded-lg border border-rose-200 bg-rose-50 p-3 text-xs text-rose-700",
                                    children: "Note: Preview is for reference only. Actual appearance may vary slightly."
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 2273,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                    children: "Details"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 2278,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 space-y-3 text-sm text-zinc-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Active: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: activeView
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 2283,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 2282,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Total properties:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: properties.length
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 2287,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 2285,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Managers:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: setup?.managerCount ?? 0
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 2291,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 2289,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-xs text-zinc-600",
                                            children: "Upload limits: Banner/property images must be 5MB or smaller."
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 2295,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 2281,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/app/cms/CmsApp.tsx",
                        lineNumber: 2220,
                        columnNumber: 29
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/CmsApp.tsx",
                lineNumber: 1381,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/CmsApp.tsx",
        lineNumber: 1343,
        columnNumber: 10
    }, this);
}
_s(CmsApp, "54MxEXwAb36vdmUyZ1FkEPv9F+I=");
_c = CmsApp;
var _c;
__turbopack_context__.k.register(_c, "CmsApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0ejtju~._.js.map