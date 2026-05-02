module.exports = [
"[project]/lib/slug.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toSlug",
    ()=>toSlug
]);
function toSlug(value) {
    return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
}),
"[project]/lib/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/lib/navigation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/app/cms/CmsApp.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CmsApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$imagekit$2f$next$2f$dist$2f$client$2f$index$2d$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@imagekit/next/dist/client/index-esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$imagekit$2f$javascript$2f$dist$2f$imagekit$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@imagekit/javascript/dist/imagekit.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$slug$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/slug.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/navigation.ts [app-ssr] (ecmascript)");
"use client";
;
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
    if (label.includes("security") || label.includes("gated")) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiShield"];
    if (label.includes("parking") || label.includes("road")) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiTruck"];
    if (label.includes("water")) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiDroplet"];
    if (label.includes("electric") || label.includes("power")) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiZap"];
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiGrid"];
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
    const [setup, setSetup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [properties, setProperties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [submittingProperty, setSubmittingProperty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadingCover, setUploadingCover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadingGallery, setUploadingGallery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadingBannerImage, setUploadingBannerImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeView, setActiveView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("propertyWizard");
    const [propertyStep, setPropertyStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loginForm, setLoginForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        email: "",
        password: ""
    });
    const [bootstrapForm, setBootstrapForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        password: ""
    });
    const [managerForm, setManagerForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        password: ""
    });
    const [bannerForm, setBannerForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialBannerForm);
    const [editingBannerId, setEditingBannerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [bannerPreviewUrl, setBannerPreviewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [banners, setBanners] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [bannerSlideEnabled, setBannerSlideEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [propertyForm, setPropertyForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialPropertyForm);
    const [propertyErrors, setPropertyErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [slugEditedManually, setSlugEditedManually] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mapSearch, setMapSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [mapAutoFilling, setMapAutoFilling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPropertyPreview, setShowPropertyPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [galleryDropActive, setGalleryDropActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [coverDropActive, setCoverDropActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [amenityInput, setAmenityInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [coverPreviewUrl, setCoverPreviewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [galleryPreviewUrls, setGalleryPreviewUrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const isAdmin = user?.role === "admin";
    const canDeleteProperty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>isAdmin, [
        isAdmin
    ]);
    const showPreviewPanel = activeView !== "propertyWizard" || showPropertyPreview;
    const initialize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
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
    }, []);
    const loadProperties = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        const response = await fetch("/api/properties?all=1", {
            cache: "no-store"
        });
        const data = await response.json();
        if (!response.ok) {
            setMessage(data.error ?? "Unable to load properties.");
            return;
        }
        setProperties(data.properties ?? []);
    }, []);
    const loadUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!isAdmin) return;
        const response = await fetch("/api/users", {
            cache: "no-store"
        });
        if (!response.ok) return;
        const data = await response.json();
        setUsers(data.users);
    }, [
        isAdmin
    ]);
    const loadBanners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        const response = await fetch("/api/banner", {
            cache: "no-store"
        });
        const data = await response.json();
        if (!response.ok) {
            setMessage(data.error ?? "Unable to load banners.");
            return;
        }
        const normalized = (data.banners ?? []).map((banner)=>({
                ...banner,
                showCta: banner.showCta !== false
            }));
        setBanners(normalized);
        setBannerSlideEnabled(data.slideEnabled ?? false);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        void initialize();
    }, [
        initialize
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!user) return;
        void loadProperties();
        void loadUsers();
        if (activeView === "banner") {
            void loadBanners();
        }
    }, [
        activeView,
        loadBanners,
        loadProperties,
        loadUsers,
        user
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (bannerPreviewUrl?.startsWith("blob:")) {
                URL.revokeObjectURL(bannerPreviewUrl);
            }
        };
    }, [
        bannerPreviewUrl
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (coverPreviewUrl?.startsWith("blob:")) {
                URL.revokeObjectURL(coverPreviewUrl);
            }
        };
    }, [
        coverPreviewUrl
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            galleryPreviewUrls.forEach((url)=>{
                if (url.startsWith("blob:")) URL.revokeObjectURL(url);
            });
        };
    }, [
        galleryPreviewUrls
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!user || editingId) return;
        const saved = window.localStorage.getItem(PROPERTY_WIZARD_DRAFT_KEY);
        if (!saved) return;
        try {
            const parsed = JSON.parse(saved);
            setPropertyForm((prev)=>({
                    ...prev,
                    ...parsed,
                    amenities: uniqueAmenities(parsed.amenities ?? prev.amenities),
                    phoneNumber: cleanPhone(parsed.phoneNumber || parsed.whatsappNumber || parsed.alternateNumber || prev.phoneNumber),
                    faqs: Array.isArray(parsed.faqs) && parsed.faqs.length > 0 ? parsed.faqs.map((faq)=>({
                            question: String(faq.question ?? ""),
                            answer: String(faq.answer ?? "")
                        })) : prev.faqs
                }));
            if (typeof parsed.slug === "string" && parsed.slug.trim().length > 0) {
                setSlugEditedManually(true);
            }
            setMessage("Recovered saved draft from previous session.");
        } catch  {
            window.localStorage.removeItem(PROPERTY_WIZARD_DRAFT_KEY);
        }
    }, [
        editingId,
        user
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!user || editingId) return;
        window.localStorage.setItem(PROPERTY_WIZARD_DRAFT_KEY, JSON.stringify(propertyForm));
    }, [
        editingId,
        propertyForm,
        user
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (slugEditedManually) return;
        const generated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$slug$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toSlug"])(propertyForm.propertyTitle);
        setPropertyForm((prev)=>prev.slug === generated ? prev : {
                ...prev,
                slug: generated
            });
    }, [
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
    function propertySelectClass(field) {
        return `rounded-lg border px-3 py-2 text-sm outline-none transition focus:border-[#1e4fb8] focus:ring-2 focus:ring-blue-100 ${propertyErrors[field] ? "border-red-500 bg-red-50 text-red-900 focus:border-red-500 focus:ring-red-100" : "border-zinc-300 bg-white"}`;
    }
    async function uploadSingleFile(file, folder) {
        const authRes = await fetch("/api/imagekit/auth", {
            cache: "no-store"
        });
        const authData = await authRes.json();
        if (!authRes.ok) {
            throw new Error(authData.error ?? "ImageKit auth failed.");
        }
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$imagekit$2f$javascript$2f$dist$2f$imagekit$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["upload"])({
            file,
            fileName: file.name,
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
        const file = input.files?.[0];
        if (!file) return;
        setCoverPreviewUrl(URL.createObjectURL(file));
        setUploadingCover(true);
        setMessage("");
        try {
            ensureValidImage(file, "Cover image");
            const url = await uploadSingleFile(file, "/riterealty/properties/cover");
            setPropertyForm((prev)=>({
                    ...prev,
                    coverImageUrl: url
                }));
            setCoverPreviewUrl(url);
            setMessage("Cover image uploaded.");
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "Cover upload failed.");
        } finally{
            input.value = "";
            setUploadingCover(false);
        }
    }
    async function handleGalleryUpload(event) {
        const input = event.currentTarget;
        const files = Array.from(input.files ?? []);
        if (files.length === 0) return;
        setGalleryPreviewUrls(files.map((file)=>URL.createObjectURL(file)));
        setUploadingGallery(true);
        setMessage("");
        try {
            files.forEach((file)=>ensureValidImage(file, "Gallery image"));
            const uploadResults = await Promise.allSettled(files.map((file)=>uploadSingleFile(file, "/riterealty/properties/gallery")));
            const uploaded = uploadResults.filter((result)=>result.status === "fulfilled").map((result)=>result.value);
            const failedCount = uploadResults.length - uploaded.length;
            if (uploaded.length === 0) {
                const firstError = uploadResults.find((result)=>result.status === "rejected");
                throw firstError?.reason instanceof Error ? firstError.reason : new Error("Gallery upload failed.");
            }
            setPropertyForm((prev)=>({
                    ...prev,
                    galleryImageUrls: [
                        ...prev.galleryImageUrls,
                        ...uploaded
                    ]
                }));
            setGalleryPreviewUrls([]);
            setMessage(failedCount > 0 ? `${uploaded.length} gallery image(s) uploaded. ${failedCount} failed.` : "Gallery images uploaded.");
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "Gallery upload failed.");
        } finally{
            input.value = "";
            setUploadingGallery(false);
        }
    }
    async function handleCoverDrop(event) {
        event.preventDefault();
        setCoverDropActive(false);
        const file = event.dataTransfer.files?.[0];
        if (!file) return;
        setCoverPreviewUrl(URL.createObjectURL(file));
        setUploadingCover(true);
        setMessage("");
        try {
            ensureValidImage(file, "Cover image");
            const url = await uploadSingleFile(file, "/riterealty/properties/cover");
            setPropertyForm((prev)=>({
                    ...prev,
                    coverImageUrl: url
                }));
            setCoverPreviewUrl(url);
            setMessage("Cover image uploaded.");
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "Cover upload failed.");
        } finally{
            setUploadingCover(false);
        }
    }
    async function handleGalleryDrop(event) {
        event.preventDefault();
        setGalleryDropActive(false);
        const files = Array.from(event.dataTransfer.files ?? []);
        if (files.length === 0) return;
        setGalleryPreviewUrls(files.map((file)=>URL.createObjectURL(file)));
        setUploadingGallery(true);
        setMessage("");
        try {
            files.forEach((file)=>ensureValidImage(file, "Gallery image"));
            const uploadResults = await Promise.allSettled(files.map((file)=>uploadSingleFile(file, "/riterealty/properties/gallery")));
            const uploaded = uploadResults.filter((result)=>result.status === "fulfilled").map((result)=>result.value);
            const failedCount = uploadResults.length - uploaded.length;
            if (uploaded.length === 0) {
                const firstError = uploadResults.find((result)=>result.status === "rejected");
                throw firstError?.reason instanceof Error ? firstError.reason : new Error("Gallery upload failed.");
            }
            setPropertyForm((prev)=>({
                    ...prev,
                    galleryImageUrls: [
                        ...prev.galleryImageUrls,
                        ...uploaded
                    ]
                }));
            setGalleryPreviewUrls([]);
            setMessage(failedCount > 0 ? `${uploaded.length} gallery image(s) uploaded. ${failedCount} failed.` : "Gallery images uploaded.");
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "Gallery upload failed.");
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
            setPropertyForm((prev)=>({
                    ...prev,
                    lat: lat || prev.lat,
                    lng: lng || prev.lng,
                    fullAddress: fullAddress || prev.fullAddress,
                    city: city || prev.city,
                    areaSector: areaSector || prev.areaSector
                }));
            setMessage("Location details auto-filled. Verify and continue.");
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "Failed to auto-fill location.");
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
            const lat = String(position.coords.latitude);
            const lng = String(position.coords.longitude);
            try {
                const reverseRes = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lng)}`);
                const reverseData = reverseRes.ok ? await reverseRes.json() : {};
                const city = reverseData.address?.city ?? reverseData.address?.town ?? reverseData.address?.village ?? reverseData.address?.county ?? "";
                const areaSector = reverseData.address?.suburb ?? reverseData.address?.neighbourhood ?? reverseData.address?.quarter ?? reverseData.address?.state_district ?? reverseData.address?.road ?? "";
                setPropertyForm((prev)=>({
                        ...prev,
                        lat,
                        lng,
                        fullAddress: reverseData.display_name || prev.fullAddress,
                        city: city || prev.city,
                        areaSector: areaSector || prev.areaSector
                    }));
                setMapSearch(reverseData.display_name || `${lat}, ${lng}`);
                setMessage("Current location added. Verify address and continue.");
            } catch (error) {
                setPropertyForm((prev)=>({
                        ...prev,
                        lat,
                        lng
                    }));
                setMessage(error instanceof Error ? error.message : "Location added, but address lookup failed.");
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
    async function handleBannerImageUpload(event) {
        const input = event.currentTarget;
        const file = input.files?.[0];
        if (!file) return;
        setBannerPreviewUrl(URL.createObjectURL(file));
        await uploadBannerImageFile(file);
        input.value = "";
    }
    async function uploadBannerImageFile(file) {
        setUploadingBannerImage(true);
        setMessage("");
        try {
            ensureValidImage(file, "Banner image", MAX_BANNER_IMAGE_UPLOAD_BYTES);
            const url = await uploadSingleFile(file, "/riterealty/banner");
            setBannerPreviewUrl(url);
            setBannerForm((prev)=>({
                    ...prev,
                    imageUrl: url
                }));
            setMessage("Banner image uploaded.");
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "Banner upload failed.");
        } finally{
            setUploadingBannerImage(false);
        }
    }
    function handleBannerUploadDragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
    }
    async function handleBannerUploadDrop(event) {
        event.preventDefault();
        const file = event.dataTransfer.files?.[0];
        if (!file) return;
        setBannerPreviewUrl(URL.createObjectURL(file));
        await uploadBannerImageFile(file);
    }
    async function handleLogin(event) {
        event.preventDefault();
        setMessage("");
        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginForm)
        });
        const data = await response.json();
        if (!response.ok || !data.user) {
            setMessage(data.error ?? "Login failed.");
            return;
        }
        setUser(data.user);
        setLoginForm({
            email: "",
            password: ""
        });
        setMessage("Logged in.");
    }
    async function handleBootstrapAdmin(event) {
        event.preventDefault();
        setMessage("");
        const response = await fetch("/api/auth/bootstrap-admin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bootstrapForm)
        });
        const data = await response.json();
        if (!response.ok || !data.user) {
            setMessage(data.error ?? "Could not create admin.");
            return;
        }
        setUser(data.user);
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
    async function handleBannerSubmit(event) {
        event.preventDefault();
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
        const response = await fetch(endpoint, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        if (!response.ok) {
            const fieldErrors = data.issues?.fieldErrors ? Object.values(data.issues.fieldErrors).flat().filter(Boolean) : [];
            const formErrors = data.issues?.formErrors?.filter(Boolean) ?? [];
            const detailed = [
                ...fieldErrors,
                ...formErrors
            ][0];
            if (detailed) {
                setMessage(detailed);
                return;
            }
            setMessage(data.error ?? "Banner save failed.");
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
        setBannerForm((prev)=>({
                ...prev,
                imageUrl: value
            }));
    }
    function startBannerEdit(banner) {
        setEditingBannerId(banner._id);
        setBannerPreviewUrl(banner.imageUrl || null);
        setBannerForm({
            projectName: banner.projectName,
            title: banner.title,
            subtitle: banner.subtitle,
            imageUrl: banner.imageUrl,
            showCta: banner.showCta !== false,
            ctaLabel: banner.ctaLabel ?? "",
            ctaHref: banner.ctaHref ?? "",
            slideEnabled: banner.slideEnabled ?? true
        });
        setMessage("Editing banner.");
    }
    async function handleBannerDelete(id) {
        setMessage("");
        const response = await fetch(`/api/banner/${id}`, {
            method: "DELETE"
        });
        const data = await response.json();
        if (!response.ok) {
            setMessage(data.error ?? "Banner delete failed.");
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
    async function handleManagerCreate(event) {
        event.preventDefault();
        setMessage("");
        const response = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...managerForm,
                role: "manager"
            })
        });
        const data = await response.json();
        if (!response.ok) {
            setMessage(data.error ?? "Could not create manager.");
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
            const hasFaq = propertyForm.faqs.some((faq)=>faq.question.trim() && faq.answer.trim());
            if (!hasFaq) errors.faqs = "Add at least one FAQ item.";
            return errors;
        }
        return errors;
    }
    function validatePropertyStep(step) {
        const errors = getStepErrors(step);
        setPropertyErrors(errors);
        return Object.values(errors)[0] ?? "";
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
        const saved = window.localStorage.getItem(PROPERTY_WIZARD_DRAFT_KEY);
        if (!saved) {
            setMessage("Draft could not be saved in this browser.");
            return;
        }
        setPropertyForm(draft);
        setPropertyErrors({});
        setMessage("Saved in draft.");
    }
    function goToNextPropertyStep() {
        const error = validatePropertyStep(propertyStep);
        if (error) {
            setMessage(error);
            return;
        }
        window.localStorage.setItem(PROPERTY_WIZARD_DRAFT_KEY, JSON.stringify(propertyForm));
        setMessage("");
        setPropertyStep((prev)=>Math.min(prev + 1, propertyWizardSteps.length - 1));
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    function goToPreviousPropertyStep() {
        setMessage("");
        setPropertyErrors({});
        setPropertyStep((prev)=>Math.max(prev - 1, 0));
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    async function handlePropertySubmit(event) {
        event.preventDefault();
        setMessage("");
        for(let step = 0; step < propertyWizardSteps.length; step += 1){
            const error = validatePropertyStep(step);
            if (error) {
                setPropertyStep(step);
                setMessage(error);
                return;
            }
        }
        setSubmittingProperty(true);
        const contactNumber = cleanPhone(propertyForm.phoneNumber);
        const payload = {
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
            phoneNumber: contactNumber,
            whatsappNumber: contactNumber,
            alternateNumber: contactNumber,
            featuredProperty: propertyForm.featuredProperty,
            verifiedBadge: propertyForm.verifiedBadge,
            newLaunch: propertyForm.newLaunch,
            recordStatus: propertyForm.recordStatus,
            metaTitle: propertyForm.metaTitle.trim(),
            metaDescription: propertyForm.metaDescription.trim(),
            faqs: propertyForm.faqs.map((faq)=>({
                    question: faq.question.trim(),
                    answer: faq.answer.trim()
                })).filter((faq)=>faq.question && faq.answer),
            slug: propertyForm.slug.trim() || undefined
        };
        const endpoint = editingId ? `/api/properties/${editingId}` : "/api/properties";
        const method = editingId ? "PUT" : "POST";
        try {
            const response = await fetch(endpoint, {
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            if (!response.ok) {
                setMessage(data.error ?? "Property save failed.");
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
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "Property save failed.");
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
            propertyType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizePropertyTypeForForm"])(property.propertyType),
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
            projectStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeProjectStatusForForm"])(property.projectStatus),
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
    async function deleteProperty(id) {
        if (!canDeleteProperty) return;
        if (!window.confirm("Delete this property?")) return;
        const response = await fetch(`/api/properties/${id}`, {
            method: "DELETE"
        });
        const data = await response.json();
        if (!response.ok) {
            setMessage(data.error ?? "Delete failed.");
            return;
        }
        setMessage("Property deleted.");
        await loadProperties();
    }
    function updateFaq(index, field, value) {
        setPropertyForm((prev)=>({
                ...prev,
                faqs: prev.faqs.map((faq, faqIndex)=>faqIndex === index ? {
                        ...faq,
                        [field]: value
                    } : faq)
            }));
    }
    function addFaqRow() {
        setPropertyForm((prev)=>({
                ...prev,
                faqs: [
                    ...prev.faqs,
                    {
                        question: "",
                        answer: ""
                    }
                ]
            }));
    }
    function removeFaqRow(index) {
        setPropertyForm((prev)=>{
            if (prev.faqs.length === 1) {
                return {
                    ...prev,
                    faqs: [
                        {
                            question: "",
                            answer: ""
                        }
                    ]
                };
            }
            return {
                ...prev,
                faqs: prev.faqs.filter((_, faqIndex)=>faqIndex !== index)
            };
        });
    }
    function addAmenity(value = amenityInput) {
        const amenity = normalizeAmenity(value);
        if (!amenity) return;
        setPropertyForm((prev)=>({
                ...prev,
                amenities: uniqueAmenities([
                    ...prev.amenities,
                    amenity
                ])
            }));
        setAmenityInput("");
    }
    function removeAmenity(amenity) {
        setPropertyForm((prev)=>({
                ...prev,
                amenities: prev.amenities.filter((item)=>item.toLowerCase() !== amenity.toLowerCase())
            }));
    }
    function removeGalleryImage(index) {
        setPropertyForm((prev)=>({
                ...prev,
                galleryImageUrls: prev.galleryImageUrls.filter((_, imageIndex)=>imageIndex !== index)
            }));
    }
    function setCoverFromGallery(url) {
        setPropertyForm((prev)=>({
                ...prev,
                coverImageUrl: url
            }));
        setCoverPreviewUrl(url);
        setMessage("Cover image set from gallery.");
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-zinc-600",
            children: "Loading CMS..."
        }, void 0, false, {
            fileName: "[project]/app/cms/CmsApp.tsx",
            lineNumber: 1557,
            columnNumber: 12
        }, this);
    }
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mx-auto max-w-4xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-semibold text-zinc-900",
                    children: "Rite Realty CMS"
                }, void 0, false, {
                    fileName: "[project]/app/cms/CmsApp.tsx",
                    lineNumber: 1563,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm text-zinc-600",
                    children: setup?.adminExists ? "Login as admin or manager." : "No admin found. Create the first admin account."
                }, void 0, false, {
                    fileName: "[project]/app/cms/CmsApp.tsx",
                    lineNumber: 1566,
                    columnNumber: 9
                }, this),
                !setup?.adminExists ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleBootstrapAdmin,
                    className: "mt-5 grid gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            value: bootstrapForm.name,
                            onChange: (event)=>setBootstrapForm((prev)=>({
                                        ...prev,
                                        name: event.target.value
                                    })),
                            placeholder: "Admin Name",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 1573,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            type: "email",
                            value: bootstrapForm.email,
                            onChange: (event)=>setBootstrapForm((prev)=>({
                                        ...prev,
                                        email: event.target.value
                                    })),
                            placeholder: "Admin Email",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 1585,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            type: "password",
                            value: bootstrapForm.password,
                            onChange: (event)=>setBootstrapForm((prev)=>({
                                        ...prev,
                                        password: event.target.value
                                    })),
                            placeholder: "Password (min 8)",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 1598,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white",
                            children: "Create Admin"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 1611,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/CmsApp.tsx",
                    lineNumber: 1572,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleLogin,
                    className: "mt-5 grid gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            type: "email",
                            value: loginForm.email,
                            onChange: (event)=>setLoginForm((prev)=>({
                                        ...prev,
                                        email: event.target.value
                                    })),
                            placeholder: "Email",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 1617,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            type: "password",
                            value: loginForm.password,
                            onChange: (event)=>setLoginForm((prev)=>({
                                        ...prev,
                                        password: event.target.value
                                    })),
                            placeholder: "Password",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 1627,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white",
                            children: "Login"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 1640,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/CmsApp.tsx",
                    lineNumber: 1616,
                    columnNumber: 11
                }, this),
                message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-sm text-zinc-700",
                    children: message
                }, void 0, false, {
                    fileName: "[project]/app/cms/CmsApp.tsx",
                    lineNumber: 1646,
                    columnNumber: 11
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/app/cms/CmsApp.tsx",
            lineNumber: 1562,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen bg-[#f4f7fc]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white px-4 py-4 md:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsSidebarOpen((prev)=>!prev),
                                    className: "mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 text-zinc-700 transition hover:bg-zinc-100",
                                    "aria-label": isSidebarOpen ? "Hide menu bar" : "Show menu bar",
                                    children: isSidebarOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiX"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1663,
                                        columnNumber: 32
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiMenu"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1663,
                                        columnNumber: 52
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 1657,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-3xl font-bold tracking-tight text-[#0d2b6b]",
                                            children: activeView === "propertyWizard" ? "Add New Property" : "Rite Realty CMS"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 1666,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-zinc-600",
                                            children: activeView === "propertyWizard" ? "Create a new property listing in just a few simple steps" : `Logged in as ${user.name} (${user.role})`
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 1671,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 1665,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 1656,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-2",
                            children: [
                                activeView === "propertyWizard" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: savePropertyDraft,
                                            className: "inline-flex items-center gap-2 rounded-xl border border-[#1e4fb8] bg-white px-4 py-2 text-sm font-semibold text-[#1e4fb8]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiSave"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 1686,
                                                    columnNumber: 19
                                                }, this),
                                                "Save Draft"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 1681,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowPropertyPreview((prev)=>!prev),
                                            className: "inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700",
                                            children: [
                                                showPropertyPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiEyeOff"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 1695,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiEye"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 1697,
                                                    columnNumber: 21
                                                }, this),
                                                showPropertyPreview ? "Hide Preview" : "Preview"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 1689,
                                            columnNumber: 17
                                        }, this),
                                        propertyStep < propertyWizardSteps.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: goToNextPropertyStep,
                                            className: "inline-flex items-center gap-2 rounded-xl bg-[#ef1d1d] px-5 py-2 text-sm font-semibold text-white shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Next Step"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 1707,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiArrowRight"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 1708,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 1702,
                                            columnNumber: 19
                                        }, this) : null
                                    ]
                                }, void 0, true) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/blog/cms",
                                    className: "rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50",
                                    children: "Blog Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 1713,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 1678,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/CmsApp.tsx",
                    lineNumber: 1655,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/CmsApp.tsx",
                lineNumber: 1654,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `grid gap-6 p-4 md:p-6 ${isSidebarOpen ? showPreviewPanel ? "lg:grid-cols-[260px_minmax(0,1fr)_360px]" : "lg:grid-cols-[260px_minmax(0,1fr)]" : showPreviewPanel ? "lg:grid-cols-[minmax(0,1fr)_360px]" : "lg:grid-cols-[minmax(0,1fr)]"}`,
                children: [
                    isSidebarOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "flex h-full min-h-[60vh] flex-col bg-gradient-to-b from-[#063a8b] to-[#04275e] p-4 text-white shadow-xl lg:sticky lg:top-0 lg:h-screen",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiHome"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1737,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-bold tracking-wide",
                                        children: "RITEREALITY"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1738,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1736,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "px-2 text-[11px] uppercase tracking-[0.16em] text-blue-100/80",
                                    children: "Content"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 1741,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1740,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 grid gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveView("banner"),
                                        className: `rounded-xl px-3 py-2 text-left text-sm font-medium transition ${activeView === "banner" ? "bg-[#ef1d1d] text-white shadow-md" : "text-blue-50 hover:bg-white/10"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiImage"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 1756,
                                                    columnNumber: 19
                                                }, this),
                                                "Banners"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 1755,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1746,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveView("propertyWizard"),
                                        className: `rounded-xl px-3 py-2 text-left text-sm font-medium transition ${activeView === "propertyWizard" ? "bg-[#ef1d1d] text-white shadow-md" : "text-blue-50 hover:bg-white/10"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiHome"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 1770,
                                                    columnNumber: 19
                                                }, this),
                                                "Properties"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 1769,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1760,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveView("records"),
                                        className: `rounded-xl px-3 py-2 text-left text-sm font-medium transition ${activeView === "records" ? "bg-[#ef1d1d] text-white shadow-md" : "text-blue-50 hover:bg-white/10"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiFileText"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 1784,
                                                    columnNumber: 19
                                                }, this),
                                                "All Properties"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 1783,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1774,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1745,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "px-2 text-[11px] uppercase tracking-[0.16em] text-blue-100/80",
                                    children: "Management"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 1790,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1789,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 grid gap-2",
                                children: isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setActiveView("managers"),
                                    className: `rounded-xl px-3 py-2 text-left text-sm font-medium transition ${activeView === "managers" ? "bg-[#ef1d1d] text-white shadow-md" : "text-blue-50 hover:bg-white/10"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiUsers"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1806,
                                                columnNumber: 21
                                            }, this),
                                            "Managers"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1805,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 1796,
                                    columnNumber: 17
                                }, this) : null
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1794,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 rounded-xl bg-white p-3 text-sm text-zinc-900",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold",
                                        children: "Need help?"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1813,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-xs text-zinc-600",
                                        children: "You can save drafts and continue later."
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1814,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1812,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleLogout,
                                className: "mt-auto inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-3 py-2 text-left text-sm font-semibold text-white transition hover:bg-white/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiLogOut"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1822,
                                        columnNumber: 15
                                    }, this),
                                    "Logout"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1818,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/CmsApp.tsx",
                        lineNumber: 1735,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            activeView === "banner" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-semibold text-zinc-900",
                                                        children: "Add New Campaign Banner"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1833,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-sm text-zinc-600",
                                                        children: editingBannerId ? "Editing saved campaign banner." : "Create banner content with the same wizard feel."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1836,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1832,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-zinc-700",
                                                        children: "Status:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1843,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white",
                                                        children: editingBannerId ? "Live Editor" : "Draft"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1844,
                                                        columnNumber: 19
                                                    }, this),
                                                    editingBannerId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                        lineNumber: 1848,
                                                        columnNumber: 21
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1842,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1831,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-sm text-zinc-600",
                                        children: [
                                            banners.length,
                                            " / 6 banners stored.",
                                            " ",
                                            bannerSlideEnabled ? "Slider enabled." : "Slider disabled."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1864,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleBannerSubmit,
                                        className: "mt-6 space-y-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-5 xl:grid-cols-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-semibold text-blue-700",
                                                                children: "Campaign Details"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1872,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4 space-y-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-zinc-800",
                                                                        htmlFor: "banner-project-name",
                                                                        children: "Project Name"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1876,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: "banner-project-name",
                                                                        required: true,
                                                                        value: bannerForm.projectName,
                                                                        onChange: (event)=>setBannerForm((prev)=>({
                                                                                    ...prev,
                                                                                    projectName: event.target.value
                                                                                })),
                                                                        className: "w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm",
                                                                        placeholder: "Project name"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1882,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-zinc-800",
                                                                        htmlFor: "banner-title",
                                                                        children: "Banner Headline"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1896,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: "banner-title",
                                                                        required: true,
                                                                        value: bannerForm.title,
                                                                        onChange: (event)=>setBannerForm((prev)=>({
                                                                                    ...prev,
                                                                                    title: event.target.value
                                                                                })),
                                                                        className: "w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm",
                                                                        placeholder: "Banner headline"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1902,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-zinc-800",
                                                                        htmlFor: "banner-subtitle",
                                                                        children: "Sub-headline"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1916,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                        id: "banner-subtitle",
                                                                        required: true,
                                                                        value: bannerForm.subtitle,
                                                                        onChange: (event)=>setBannerForm((prev)=>({
                                                                                    ...prev,
                                                                                    subtitle: event.target.value
                                                                                })),
                                                                        className: "w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm",
                                                                        rows: 4,
                                                                        placeholder: "Support text for your campaign"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1922,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1875,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1871,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-semibold text-blue-700",
                                                                children: "High-Res Banner Asset"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1940,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                id: "banner-upload-input",
                                                                type: "file",
                                                                accept: "image/*",
                                                                onChange: handleBannerImageUpload,
                                                                className: "sr-only"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1943,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "banner-upload-input",
                                                                onDragOver: handleBannerUploadDragOver,
                                                                onDrop: (event)=>void handleBannerUploadDrop(event),
                                                                className: "mt-4 block rounded-2xl border-2 border-dashed border-sky-500 bg-gradient-to-br from-sky-50 via-blue-50 to-sky-100 px-4 py-12 text-center text-zinc-700",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "block text-lg font-semibold",
                                                                        children: "Upload or drag & drop high-res banner asset"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1956,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-2 inline-flex rounded-full border border-sky-300 bg-white px-3 py-1 text-xs font-semibold text-sky-700",
                                                                        children: "Click to choose file"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1959,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-2 block text-sm",
                                                                        children: "JPEG, PNG, WEBP (Max 5MB)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1962,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    uploadingBannerImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-2 block text-xs font-semibold",
                                                                        children: "Uploading..."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1966,
                                                                        columnNumber: 25
                                                                    }, this) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1950,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-3 text-xs text-zinc-500",
                                                                children: "OR paste image URL (optional if already uploaded)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1972,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "mt-2 block text-sm font-medium text-zinc-800",
                                                                htmlFor: "banner-image-url",
                                                                children: "Banner Image URL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1975,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                id: "banner-image-url",
                                                                value: bannerForm.imageUrl,
                                                                onChange: (event)=>handleBannerImageUrlChange(event.target.value),
                                                                className: "mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm",
                                                                placeholder: "https://..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1981,
                                                                columnNumber: 21
                                                            }, this),
                                                            bannerPreviewUrl || bannerForm.imageUrl.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4 overflow-hidden rounded-xl border border-zinc-200",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: bannerPreviewUrl || bannerForm.imageUrl,
                                                                    alt: "Banner preview",
                                                                    width: 1200,
                                                                    height: 320,
                                                                    unoptimized: true,
                                                                    className: "h-40 w-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                                    lineNumber: 1993,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1992,
                                                                columnNumber: 23
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1939,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-semibold text-blue-700",
                                                                children: "Call to Action (CTA)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2006,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4 space-y-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm font-medium text-zinc-800",
                                                                                children: "Enable CTA Button"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 2011,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "inline-flex cursor-pointer items-center",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "checkbox",
                                                                                        checked: bannerForm.showCta,
                                                                                        onChange: (event)=>setBannerForm((prev)=>({
                                                                                                    ...prev,
                                                                                                    showCta: event.target.checked
                                                                                                })),
                                                                                        className: "peer sr-only"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                        lineNumber: 2015,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "relative h-6 w-11 rounded-full bg-zinc-300 transition peer-checked:bg-blue-600 peer-checked:after:translate-x-5 after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                        lineNumber: 2026,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 2014,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2010,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-zinc-800",
                                                                        htmlFor: "banner-cta-label",
                                                                        children: "Button Label"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2030,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: "banner-cta-label",
                                                                        required: bannerForm.showCta,
                                                                        disabled: !bannerForm.showCta,
                                                                        value: bannerForm.ctaLabel,
                                                                        onChange: (event)=>setBannerForm((prev)=>({
                                                                                    ...prev,
                                                                                    ctaLabel: event.target.value
                                                                                })),
                                                                        className: "w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm disabled:bg-zinc-100 disabled:text-zinc-500",
                                                                        placeholder: "Download Price List"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2036,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-zinc-800",
                                                                        htmlFor: "banner-cta-href",
                                                                        children: "Button Link"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2051,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: "banner-cta-href",
                                                                        required: bannerForm.showCta,
                                                                        disabled: !bannerForm.showCta,
                                                                        value: bannerForm.ctaHref,
                                                                        onChange: (event)=>setBannerForm((prev)=>({
                                                                                    ...prev,
                                                                                    ctaHref: event.target.value
                                                                                })),
                                                                        className: "w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm disabled:bg-zinc-100 disabled:text-zinc-500",
                                                                        placeholder: "/project/slug"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2057,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "mt-3 flex items-center gap-2 text-sm text-zinc-700",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                checked: bannerForm.slideEnabled,
                                                                                onChange: (event)=>setBannerForm((prev)=>({
                                                                                            ...prev,
                                                                                            slideEnabled: event.target.checked
                                                                                        }))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 2073,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            "Enable homepage auto slider"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2072,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2009,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2005,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1870,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center justify-end gap-3 border-t border-zinc-200 pt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            setMessage("Draft saved locally. Publish when ready.");
                                                        },
                                                        className: "rounded-xl border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100",
                                                        children: "Save as Draft"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2090,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        disabled: !editingBannerId && banners.length >= 6,
                                                        className: "rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:bg-zinc-400",
                                                        children: editingBannerId ? "Update Banner" : "Publish Banner"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2099,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 2089,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1869,
                                        columnNumber: 15
                                    }, this),
                                    banners.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-zinc-900",
                                                children: "Saved Banners"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 2110,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 space-y-3",
                                                children: banners.map((banner)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-3 md:flex-row md:items-center md:justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-semibold text-zinc-900",
                                                                        children: banner.projectName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2120,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-zinc-600",
                                                                        children: banner.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2123,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2119,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>startBannerEdit(banner),
                                                                        className: "rounded-lg border border-zinc-300 bg-white px-3 py-1 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-100",
                                                                        children: "Edit"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2128,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    banner.showCta !== false ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700",
                                                                        children: banner.ctaLabel
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2136,
                                                                        columnNumber: 29
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "rounded-full bg-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600",
                                                                        children: "CTA Hidden"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2140,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>void handleBannerDelete(banner._id),
                                                                        className: "rounded-lg border border-red-300 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700 transition hover:bg-red-100",
                                                                        children: "Delete"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2144,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2127,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, banner._id, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2115,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 2113,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 2109,
                                        columnNumber: 17
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1830,
                                columnNumber: 13
                            }, this) : null,
                            activeView === "managers" ? isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-semibold text-[#0d2b6b]",
                                        children: "Manager Accounts"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 2163,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm text-zinc-600",
                                        children: [
                                            "Limit: 2 managers. Current: ",
                                            setup?.managerCount ?? 0
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 2166,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleManagerCreate,
                                        className: "mt-4 grid gap-3 md:grid-cols-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                value: managerForm.name,
                                                onChange: (event)=>setManagerForm((prev)=>({
                                                            ...prev,
                                                            name: event.target.value
                                                        })),
                                                className: "rounded-xl border border-zinc-200 px-3 py-2 text-sm outline-none transition focus:border-[#1e4fb8] focus:ring-2 focus:ring-blue-100",
                                                placeholder: "Manager name"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 2173,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                type: "email",
                                                value: managerForm.email,
                                                onChange: (event)=>setManagerForm((prev)=>({
                                                            ...prev,
                                                            email: event.target.value
                                                        })),
                                                className: "rounded-xl border border-zinc-200 px-3 py-2 text-sm outline-none transition focus:border-[#1e4fb8] focus:ring-2 focus:ring-blue-100",
                                                placeholder: "Manager email"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 2185,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                type: "password",
                                                value: managerForm.password,
                                                onChange: (event)=>setManagerForm((prev)=>({
                                                            ...prev,
                                                            password: event.target.value
                                                        })),
                                                className: "rounded-xl border border-zinc-200 px-3 py-2 text-sm outline-none transition focus:border-[#1e4fb8] focus:ring-2 focus:ring-blue-100",
                                                placeholder: "Password"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 2198,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "inline-flex items-center justify-center gap-2 rounded-xl bg-[#ef1d1d] px-4 py-2 text-sm font-semibold text-white shadow-sm md:col-span-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiUsers"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2212,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Create Manager"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 2211,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 2169,
                                        columnNumber: 17
                                    }, this),
                                    users.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 grid gap-2",
                                        children: users.map((profile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                lineNumber: 2219,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 2217,
                                        columnNumber: 19
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 2162,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm",
                                children: "Only admins can manage manager accounts."
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 2230,
                                columnNumber: 15
                            }, this) : null,
                            activeView === "propertyWizard" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-semibold text-[#0d2b6b]",
                                        children: editingId ? "Edit Property" : "Basic Information"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 2238,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        lineNumber: 2241,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 h-2 overflow-hidden rounded-full bg-zinc-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full rounded-full bg-[#ef1d1d] transition-all",
                                            style: {
                                                width: `${(propertyStep + 1) / propertyWizardSteps.length * 100}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 2247,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 2246,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 grid gap-3 md:grid-cols-6",
                                        children: propertyWizardSteps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setPropertyStep(index),
                                                className: `rounded-2xl border px-3 py-3 text-left text-xs transition ${index === propertyStep ? "border-[#ef1d1d] bg-red-50 text-[#ef1d1d]" : index < propertyStep ? "border-[#1e4fb8] bg-blue-50 text-[#1e4fb8]" : "border-zinc-200 bg-white text-zinc-700"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${index === propertyStep ? "bg-[#ef1d1d] text-white" : index < propertyStep ? "bg-[#1e4fb8] text-white" : "border border-zinc-300 text-zinc-600"}`,
                                                            children: index + 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 2270,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-semibold",
                                                                    children: step
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                                    lineNumber: 2282,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px] text-zinc-500",
                                                                    children: propertyStepCaptions[index]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                                    lineNumber: 2283,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 2281,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 2269,
                                                    columnNumber: 21
                                                }, this)
                                            }, step, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 2257,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 2255,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handlePropertySubmit,
                                        className: "mt-5 grid gap-4 pb-24 md:grid-cols-2",
                                        children: [
                                            propertyStep === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-xl border border-zinc-200 p-4 md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-zinc-900",
                                                                children: "Identification"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2299,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 grid gap-3 md:grid-cols-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        required: true,
                                                                        value: propertyForm.propertyTitle,
                                                                        onChange: (event)=>setPropertyForm((prev)=>({
                                                                                    ...prev,
                                                                                    propertyTitle: event.target.value
                                                                                })),
                                                                        className: propertyFieldClass("propertyTitle"),
                                                                        placeholder: "Property Title"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2303,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                value: propertyForm.slug,
                                                                                onChange: (event)=>{
                                                                                    setSlugEditedManually(true);
                                                                                    setPropertyForm((prev)=>({
                                                                                            ...prev,
                                                                                            slug: event.target.value
                                                                                        }));
                                                                                },
                                                                                className: `${propertyFieldClass("slug")} w-full`,
                                                                                placeholder: "Slug"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 2316,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mt-1 text-xs text-zinc-500",
                                                                                children: "Used in URL"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 2328,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2315,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: propertyForm.propertyType,
                                                                        onChange: (event)=>setPropertyForm((prev)=>({
                                                                                    ...prev,
                                                                                    propertyType: event.target.value
                                                                                })),
                                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAVBAR_CONFIG"].propertyType.map((typeItem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: typeItem.propertyType,
                                                                                children: typeItem.label
                                                                            }, typeItem.propertyType, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 2343,
                                                                                columnNumber: 29
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2332,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: propertyForm.listingType,
                                                                        onChange: (event)=>setPropertyForm((prev)=>({
                                                                                    ...prev,
                                                                                    listingType: event.target.value
                                                                                })),
                                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LISTING_TYPES"].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: type,
                                                                                children: type
                                                                            }, type, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 2362,
                                                                                columnNumber: 29
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2351,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        value: propertyForm.propertyCode,
                                                                        onChange: (event)=>setPropertyForm((prev)=>({
                                                                                    ...prev,
                                                                                    propertyCode: event.target.value
                                                                                })),
                                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                                                        placeholder: "Property Code (optional)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2367,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2302,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2298,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-xl border border-zinc-200 p-4 md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-zinc-900",
                                                                children: "Pricing"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2382,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 grid gap-3 md:grid-cols-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        required: true,
                                                                        value: propertyForm.price,
                                                                        onChange: (event)=>setPropertyForm((prev)=>({
                                                                                    ...prev,
                                                                                    price: event.target.value
                                                                                })),
                                                                        className: propertyFieldClass("price"),
                                                                        placeholder: "Price"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2386,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: propertyForm.priceUnit,
                                                                        onChange: (event)=>setPropertyForm((prev)=>({
                                                                                    ...prev,
                                                                                    priceUnit: event.target.value
                                                                                })),
                                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRICE_UNITS"].map((unit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: unit,
                                                                                children: unit
                                                                            }, unit, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 2409,
                                                                                columnNumber: 29
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2398,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        required: true,
                                                                        value: propertyForm.areaSize,
                                                                        onChange: (event)=>setPropertyForm((prev)=>({
                                                                                    ...prev,
                                                                                    areaSize: event.target.value
                                                                                })),
                                                                        className: propertyFieldClass("areaSize"),
                                                                        placeholder: "Area Size"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2414,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: propertyForm.areaUnit,
                                                                        onChange: (event)=>setPropertyForm((prev)=>({
                                                                                    ...prev,
                                                                                    areaUnit: event.target.value
                                                                                })),
                                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AREA_UNITS"].map((unit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: unit,
                                                                                children: unit
                                                                            }, unit, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 2437,
                                                                                columnNumber: 29
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2426,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2385,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2381,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-xl border border-zinc-200 p-4 md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-zinc-900",
                                                                children: "Project Details"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2446,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 grid gap-3 md:grid-cols-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        required: true,
                                                                        value: propertyForm.builderName,
                                                                        onChange: (event)=>setPropertyForm((prev)=>({
                                                                                    ...prev,
                                                                                    builderName: event.target.value
                                                                                })),
                                                                        className: propertyFieldClass("builderName"),
                                                                        placeholder: "Builder / Owner Name"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2450,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        required: true,
                                                                        value: propertyForm.projectName,
                                                                        onChange: (event)=>setPropertyForm((prev)=>({
                                                                                    ...prev,
                                                                                    projectName: event.target.value
                                                                                })),
                                                                        className: propertyFieldClass("projectName"),
                                                                        placeholder: "Project Name"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2462,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: propertyForm.projectStatus,
                                                                        onChange: (event)=>setPropertyForm((prev)=>({
                                                                                    ...prev,
                                                                                    projectStatus: event.target.value
                                                                                })),
                                                                        className: propertySelectClass("projectStatus"),
                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAVBAR_CONFIG"].projectStatus.map((statusItem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: statusItem.projectStatus,
                                                                                children: statusItem.label
                                                                            }, statusItem.projectStatus, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 2485,
                                                                                columnNumber: 29
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2474,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "date",
                                                                        value: propertyForm.possessionDate,
                                                                        onChange: (event)=>setPropertyForm((prev)=>({
                                                                                    ...prev,
                                                                                    possessionDate: event.target.value
                                                                                })),
                                                                        className: `${propertySelectClass("possessionDate")} w-full`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2493,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        value: propertyForm.reraNumber,
                                                                        onChange: (event)=>setPropertyForm((prev)=>({
                                                                                    ...prev,
                                                                                    reraNumber: event.target.value
                                                                                })),
                                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                                                        placeholder: "RERA Number (optional)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2504,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2449,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2445,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true) : null,
                                            propertyStep === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-xl border border-zinc-200 p-4 md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-zinc-900",
                                                                children: "Google Map Picker"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2523,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 flex flex-col gap-2 md:flex-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        value: mapSearch,
                                                                        onChange: (event)=>setMapSearch(event.target.value),
                                                                        onKeyDown: (event)=>{
                                                                            if (event.key === "Enter") {
                                                                                event.preventDefault();
                                                                                void autoFillLocationFromMap();
                                                                            }
                                                                        },
                                                                        className: "w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                        placeholder: "Search city, locality, sector, address, or paste Google Maps URL"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2527,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>void autoFillLocationFromMap(),
                                                                        className: "rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white",
                                                                        disabled: mapAutoFilling,
                                                                        children: mapAutoFilling ? "Searching..." : "Search & Fill"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2539,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>void handleCurrentLocation(),
                                                                        className: "rounded-lg border border-[#1e4fb8] px-4 py-2 text-sm font-semibold text-[#1e4fb8]",
                                                                        disabled: mapAutoFilling,
                                                                        children: "Use My Location"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2547,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2526,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2522,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.city,
                                                        onChange: (event)=>setPropertyForm((prev)=>({
                                                                    ...prev,
                                                                    city: event.target.value
                                                                })),
                                                        className: propertyFieldClass("city"),
                                                        placeholder: "City"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2558,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.areaSector,
                                                        onChange: (event)=>setPropertyForm((prev)=>({
                                                                    ...prev,
                                                                    areaSector: event.target.value
                                                                })),
                                                        className: propertyFieldClass("areaSector"),
                                                        placeholder: "Area/Sector",
                                                        list: "area-sector-options"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2570,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                                                        id: "area-sector-options",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAVBAR_CONFIG"].locations.map((locationItem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: locationItem.areaSector
                                                            }, locationItem.href, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2585,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2583,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.fullAddress,
                                                        onChange: (event)=>setPropertyForm((prev)=>({
                                                                    ...prev,
                                                                    fullAddress: event.target.value
                                                                })),
                                                        className: `${propertyFieldClass("fullAddress")} md:col-span-2`,
                                                        placeholder: "Full Address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2591,
                                                        columnNumber: 21
                                                    }, this),
                                                    propertyForm.fullAddress || propertyForm.lat ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                                title: "Property map preview",
                                                                src: `https://www.google.com/maps?q=${encodeURIComponent(locationMapQuery(propertyForm))}&output=embed`,
                                                                className: "h-64 w-full",
                                                                loading: "lazy",
                                                                referrerPolicy: "no-referrer-when-downgrade"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2605,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "px-3 py-2 text-xs text-zinc-500",
                                                                children: "This searched location will be saved for the property map."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2614,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2604,
                                                        columnNumber: 23
                                                    }, this) : null
                                                ]
                                            }, void 0, true) : null,
                                            propertyStep === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-xl border border-zinc-200 p-4 md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-zinc-900",
                                                                children: "Property Configuration"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2626,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-xs text-zinc-500",
                                                                children: "Choose the property type and add matching details."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2629,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4 grid overflow-hidden rounded-xl border border-zinc-200 md:grid-cols-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setPropertyForm((prev)=>({
                                                                                    ...prev,
                                                                                    propertyType: "flat"
                                                                                })),
                                                                        className: `px-4 py-3 text-sm font-semibold ${propertyForm.propertyType === "flat" ? "bg-[#1e4fb8] text-white" : "bg-white text-[#0d2b6b]"}`,
                                                                        children: "Flat / Apartment"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2633,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setPropertyForm((prev)=>({
                                                                                    ...prev,
                                                                                    propertyType: "plot"
                                                                                })),
                                                                        className: `border-t border-zinc-200 px-4 py-3 text-sm font-semibold md:border-l md:border-t-0 ${propertyForm.propertyType !== "flat" ? "bg-[#1e4fb8] text-white" : "bg-white text-[#0d2b6b]"}`,
                                                                        children: "Plot / Land"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2649,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2632,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2625,
                                                        columnNumber: 21
                                                    }, this),
                                                    propertyForm.propertyType === "plot" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-[#0d2b6b] md:col-span-2",
                                                                children: "Plot Configuration"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2670,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: propertyForm.plotArea,
                                                                onChange: (event)=>setPropertyForm((prev)=>({
                                                                            ...prev,
                                                                            plotArea: event.target.value
                                                                        })),
                                                                className: propertyFieldClass("plotArea"),
                                                                placeholder: "Plot Area"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2673,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: propertyForm.facing,
                                                                onChange: (event)=>setPropertyForm((prev)=>({
                                                                            ...prev,
                                                                            facing: event.target.value
                                                                        })),
                                                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "Facing"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2694,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FACING_OPTIONS"].map((facing)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: facing,
                                                                            children: facing
                                                                        }, facing, false, {
                                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                                            lineNumber: 2696,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2684,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: propertyForm.roadWidth,
                                                                onChange: (event)=>setPropertyForm((prev)=>({
                                                                            ...prev,
                                                                            roadWidth: event.target.value
                                                                        })),
                                                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                                                placeholder: "Road Width"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2701,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : null,
                                                    propertyForm.propertyType === "flat" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-[#0d2b6b] md:col-span-2",
                                                                children: "Flat Configuration"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2717,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: propertyForm.bhk,
                                                                onChange: (event)=>setPropertyForm((prev)=>({
                                                                            ...prev,
                                                                            bhk: event.target.value
                                                                        })),
                                                                className: propertyFieldClass("bhk"),
                                                                placeholder: "BHK"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2720,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: propertyForm.floorNumber,
                                                                onChange: (event)=>setPropertyForm((prev)=>({
                                                                            ...prev,
                                                                            floorNumber: event.target.value
                                                                        })),
                                                                className: propertyFieldClass("floorNumber"),
                                                                placeholder: "Floor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2731,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: propertyForm.bathrooms,
                                                                onChange: (event)=>setPropertyForm((prev)=>({
                                                                            ...prev,
                                                                            bathrooms: event.target.value
                                                                        })),
                                                                className: propertyFieldClass("bathrooms"),
                                                                placeholder: "Bathrooms"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2742,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: propertyForm.balconies,
                                                                onChange: (event)=>setPropertyForm((prev)=>({
                                                                            ...prev,
                                                                            balconies: event.target.value
                                                                        })),
                                                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                placeholder: "Balconies"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2753,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: propertyForm.totalFloors,
                                                                onChange: (event)=>setPropertyForm((prev)=>({
                                                                            ...prev,
                                                                            totalFloors: event.target.value
                                                                        })),
                                                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                placeholder: "Total Floors"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2764,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : null
                                                ]
                                            }, void 0, true) : null,
                                            propertyStep === 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-xl border border-zinc-200 p-4 md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-zinc-900",
                                                                children: "Cover Image"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2783,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                onDragOver: (event)=>{
                                                                    event.preventDefault();
                                                                    setCoverDropActive(true);
                                                                },
                                                                onDragLeave: ()=>setCoverDropActive(false),
                                                                onDrop: (event)=>void handleCoverDrop(event),
                                                                className: `mt-2 block rounded-xl border-2 border-dashed p-4 text-sm ${coverDropActive ? "border-blue-500 bg-blue-50" : propertyErrors.coverImageUrl ? "border-red-500 bg-red-50" : "border-zinc-300 bg-zinc-50"}`,
                                                                children: [
                                                                    "Drag and drop cover image or click to upload",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "file",
                                                                        accept: "image/*",
                                                                        onChange: handleCoverUpload,
                                                                        className: "mt-2 block w-full text-sm"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2802,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    uploadingCover ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-1 block text-xs",
                                                                        children: "Uploading..."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2809,
                                                                        columnNumber: 27
                                                                    }, this) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2786,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-2 text-xs text-zinc-500",
                                                                children: propertyErrors.coverImageUrl || "Cover image is set from uploads. You can also pick one from gallery using \"Set Cover Image\"."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2814,
                                                                columnNumber: 23
                                                            }, this),
                                                            coverPreviewUrl || propertyForm.coverImageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 overflow-hidden rounded-lg border border-zinc-200 bg-white",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: coverPreviewUrl || propertyForm.coverImageUrl,
                                                                    alt: "Cover image preview",
                                                                    width: 640,
                                                                    height: 360,
                                                                    unoptimized: true,
                                                                    className: "h-44 w-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                                    lineNumber: 2820,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2819,
                                                                columnNumber: 25
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2782,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-xl border border-zinc-200 p-4 md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-zinc-900",
                                                                children: "Gallery Images"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2833,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                onDragOver: (event)=>{
                                                                    event.preventDefault();
                                                                    setGalleryDropActive(true);
                                                                },
                                                                onDragLeave: ()=>setGalleryDropActive(false),
                                                                onDrop: (event)=>void handleGalleryDrop(event),
                                                                className: `mt-2 block rounded-xl border-2 border-dashed p-4 text-sm ${galleryDropActive ? "border-blue-500 bg-blue-50" : "border-zinc-300 bg-zinc-50"}`,
                                                                children: [
                                                                    "Drag and drop gallery images or click to upload",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "file",
                                                                        accept: "image/*",
                                                                        multiple: true,
                                                                        onChange: handleGalleryUpload,
                                                                        className: "mt-2 block w-full text-sm"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2850,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    uploadingGallery ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-1 block text-xs",
                                                                        children: "Uploading..."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2858,
                                                                        columnNumber: 27
                                                                    }, this) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2836,
                                                                columnNumber: 23
                                                            }, this),
                                                            galleryPreviewUrls.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
                                                                children: galleryPreviewUrls.map((url, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "overflow-hidden rounded-lg border border-blue-200 bg-blue-50",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: url,
                                                                                alt: `Selected gallery preview ${index + 1}`,
                                                                                width: 400,
                                                                                height: 260,
                                                                                unoptimized: true,
                                                                                className: "h-28 w-full object-cover"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 2871,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "p-2 text-xs font-semibold text-[#1e4fb8]",
                                                                                children: "Previewing upload"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 2879,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, url, true, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2867,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2865,
                                                                columnNumber: 25
                                                            }, this) : null,
                                                            propertyForm.galleryImageUrls.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
                                                                children: propertyForm.galleryImageUrls.map((url, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "overflow-hidden rounded-lg border border-zinc-200 bg-white",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: url,
                                                                                alt: `Gallery ${index + 1}`,
                                                                                width: 400,
                                                                                height: 260,
                                                                                unoptimized: true,
                                                                                className: "h-28 w-full object-cover"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 2894,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "space-y-2 p-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        type: "button",
                                                                                        onClick: ()=>setCoverFromGallery(url),
                                                                                        className: "w-full rounded-md border border-zinc-300 px-2 py-1 text-xs font-semibold text-zinc-700",
                                                                                        children: "Set Cover Image"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                        lineNumber: 2903,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        type: "button",
                                                                                        onClick: ()=>removeGalleryImage(index),
                                                                                        className: "w-full rounded-md border border-red-300 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700",
                                                                                        children: "Remove"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                        lineNumber: 2910,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 2902,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, `${url}-${index}`, true, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2890,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2888,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-3 text-xs text-zinc-500",
                                                                children: "No gallery images uploaded yet."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2922,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2832,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: propertyForm.videoUrl,
                                                        onChange: (event)=>setPropertyForm((prev)=>({
                                                                    ...prev,
                                                                    videoUrl: event.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "Video URL (optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2928,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: propertyForm.view360Url,
                                                        onChange: (event)=>setPropertyForm((prev)=>({
                                                                    ...prev,
                                                                    view360Url: event.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "360 View URL (optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2939,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true) : null,
                                            propertyStep === 4 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        required: true,
                                                        value: propertyForm.shortDescription,
                                                        onChange: (event)=>setPropertyForm((prev)=>({
                                                                    ...prev,
                                                                    shortDescription: event.target.value
                                                                })),
                                                        className: `${propertyFieldClass("shortDescription")} md:col-span-2`,
                                                        rows: 2,
                                                        placeholder: "Short Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2955,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        required: true,
                                                        value: propertyForm.detailedDescription,
                                                        onChange: (event)=>setPropertyForm((prev)=>({
                                                                    ...prev,
                                                                    detailedDescription: event.target.value
                                                                })),
                                                        className: `${propertyFieldClass("detailedDescription")} md:col-span-2`,
                                                        rows: 4,
                                                        placeholder: "Detailed Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2968,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        value: propertyForm.keyHighlightsText,
                                                        onChange: (event)=>setPropertyForm((prev)=>({
                                                                    ...prev,
                                                                    keyHighlightsText: event.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                                        rows: 3,
                                                        placeholder: "Highlights (one per line)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2981,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-lg border border-zinc-300 p-3 md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mb-2 text-sm font-medium text-zinc-900",
                                                                children: "Amenities"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2994,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        value: amenityInput,
                                                                        onChange: (event)=>setAmenityInput(event.target.value),
                                                                        onKeyDown: (event)=>{
                                                                            if (event.key === "Enter") {
                                                                                event.preventDefault();
                                                                                addAmenity();
                                                                            }
                                                                        },
                                                                        className: "min-w-0 flex-1 rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                        placeholder: "Add amenity, e.g. Club House"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 2998,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>addAmenity(),
                                                                        className: "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#1e4fb8] text-white",
                                                                        "aria-label": "Add amenity",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiPlus"], {
                                                                            size: 18
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                                            lineNumber: 3018,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 3012,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 2997,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 flex flex-wrap gap-2",
                                                                children: [
                                                                    propertyForm.amenities.map((amenity)=>{
                                                                        const Icon = amenityIconFor(amenity);
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm font-medium text-[#0d2b6b]",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                                    size: 15
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                    lineNumber: 3029,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                defaultAmenityLabel(amenity),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>removeAmenity(amenity),
                                                                                    className: "inline-flex h-5 w-5 items-center justify-center rounded-full text-[#0d2b6b] hover:bg-white",
                                                                                    "aria-label": `Remove ${amenity}`,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiX"], {
                                                                                        size: 14
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                        lineNumber: 3037,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                    lineNumber: 3031,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, amenity, true, {
                                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                                            lineNumber: 3025,
                                                                            columnNumber: 29
                                                                        }, this);
                                                                    }),
                                                                    propertyForm.amenities.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-zinc-500",
                                                                        children: "Add amenities one by one."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 3043,
                                                                        columnNumber: 27
                                                                    }, this) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 3021,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 flex flex-wrap gap-2",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AMENITY_OPTIONS"].filter((amenity)=>!propertyForm.amenities.some((item)=>item.toLowerCase() === amenity.toLowerCase())).map((amenity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>addAmenity(amenity),
                                                                        className: "rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600 hover:border-[#1e4fb8] hover:text-[#1e4fb8]",
                                                                        children: defaultAmenityLabel(amenity)
                                                                    }, amenity, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 3056,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 3048,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 2993,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.contactName,
                                                        onChange: (event)=>setPropertyForm((prev)=>({
                                                                    ...prev,
                                                                    contactName: event.target.value
                                                                })),
                                                        className: propertyFieldClass("contactName"),
                                                        placeholder: "Contact Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 3067,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.phoneNumber,
                                                        onChange: (event)=>{
                                                            const contactNumber = cleanPhone(event.target.value);
                                                            setPropertyForm((prev)=>({
                                                                    ...prev,
                                                                    phoneNumber: contactNumber
                                                                }));
                                                        },
                                                        className: propertyFieldClass("phoneNumber"),
                                                        inputMode: "numeric",
                                                        maxLength: 10,
                                                        placeholder: "Contact / WhatsApp / Phone Number (10 digit)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 3079,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true) : null,
                                            propertyStep === 5 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 text-sm text-zinc-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: propertyForm.featuredProperty,
                                                                onChange: (event)=>setPropertyForm((prev)=>({
                                                                            ...prev,
                                                                            featuredProperty: event.target.checked
                                                                        }))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 3100,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Featured"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 3099,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 text-sm text-zinc-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: propertyForm.verifiedBadge,
                                                                onChange: (event)=>setPropertyForm((prev)=>({
                                                                            ...prev,
                                                                            verifiedBadge: event.target.checked
                                                                        }))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 3113,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Verified"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 3112,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 text-sm text-zinc-700 md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: propertyForm.newLaunch,
                                                                onChange: (event)=>setPropertyForm((prev)=>({
                                                                            ...prev,
                                                                            newLaunch: event.target.checked
                                                                        }))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 3126,
                                                                columnNumber: 23
                                                            }, this),
                                                            "New Launch"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 3125,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: propertyForm.recordStatus,
                                                        onChange: (event)=>setPropertyForm((prev)=>({
                                                                    ...prev,
                                                                    recordStatus: event.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROPERTY_RECORD_STATUSES"].map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: status,
                                                                children: status
                                                            }, status, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 3149,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 3138,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.metaTitle,
                                                        onChange: (event)=>setPropertyForm((prev)=>({
                                                                    ...prev,
                                                                    metaTitle: event.target.value
                                                                })),
                                                        className: propertyFieldClass("metaTitle"),
                                                        placeholder: "Meta Title"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 3154,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        required: true,
                                                        value: propertyForm.metaDescription,
                                                        onChange: (event)=>setPropertyForm((prev)=>({
                                                                    ...prev,
                                                                    metaDescription: event.target.value
                                                                })),
                                                        className: `${propertyFieldClass("metaDescription")} md:col-span-2`,
                                                        rows: 2,
                                                        placeholder: "Meta Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 3166,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-xl border border-zinc-200 p-4 md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-semibold text-zinc-900",
                                                                        children: "FAQs"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 3182,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: addFaqRow,
                                                                        className: "rounded-md border border-zinc-300 px-2 py-1 text-xs font-semibold text-zinc-700",
                                                                        children: "Add FAQ"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 3185,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 3181,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 space-y-3",
                                                                children: propertyForm.faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid gap-2 rounded-lg border border-zinc-200 p-3 md:grid-cols-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                value: faq.question,
                                                                                onChange: (event)=>updateFaq(index, "question", event.target.value),
                                                                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                                placeholder: "FAQ question"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 3199,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                value: faq.answer,
                                                                                onChange: (event)=>updateFaq(index, "answer", event.target.value),
                                                                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                                placeholder: "FAQ answer"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 3207,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>removeFaqRow(index),
                                                                                className: "rounded-md border border-red-300 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700 md:col-span-2",
                                                                                children: "Remove FAQ"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 3215,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, index, true, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 3195,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 3193,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 3180,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "md:col-span-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setShowPropertyPreview((prev)=>!prev),
                                                            className: "rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700",
                                                            children: showPropertyPreview ? "Hide Preview" : "Preview Property"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 3228,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 3227,
                                                        columnNumber: 21
                                                    }, this),
                                                    showPropertyPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "overflow-hidden rounded-xl border border-zinc-200 md:col-span-2",
                                                        children: [
                                                            propertyForm.coverImageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                src: propertyForm.coverImageUrl,
                                                                alt: "Property cover preview",
                                                                width: 1200,
                                                                height: 420,
                                                                unoptimized: true,
                                                                className: "h-56 w-full object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 3242,
                                                                columnNumber: 27
                                                            }, this) : null,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2 p-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-xl font-semibold text-zinc-900",
                                                                        children: propertyForm.propertyTitle || "Property title"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 3252,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-zinc-600",
                                                                        children: propertyForm.fullAddress || "Address preview"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 3255,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-zinc-700",
                                                                        children: propertyForm.shortDescription || "Short description preview"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 3258,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                                        lineNumber: 3262,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 3251,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 3240,
                                                        columnNumber: 23
                                                    }, this) : null
                                                ]
                                            }, void 0, true) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sticky bottom-0 left-0 right-0 z-20 -mx-5 mt-2 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200 bg-white px-5 py-4 shadow-[0_-6px_20px_rgba(15,23,42,0.06)] md:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: goToPreviousPropertyStep,
                                                                disabled: propertyStep === 0,
                                                                className: "rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 disabled:opacity-60",
                                                                children: "Previous Step"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 3274,
                                                                columnNumber: 21
                                                            }, this),
                                                            propertyStep < propertyWizardSteps.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: goToNextPropertyStep,
                                                                className: "rounded-lg bg-[#ef1d1d] px-4 py-2 text-sm font-semibold text-white",
                                                                children: "Next Step"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 3283,
                                                                columnNumber: 23
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                disabled: submittingProperty,
                                                                className: "rounded-lg bg-[#ef1d1d] px-4 py-2 text-sm font-semibold text-white disabled:opacity-70",
                                                                children: submittingProperty ? "Saving..." : editingId ? "Update Property" : "Create Property"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 3291,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 3273,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "hidden items-center gap-2 text-sm text-zinc-600 md:flex",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Step ",
                                                                    propertyStep + 1,
                                                                    " of ",
                                                                    propertyWizardSteps.length
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 3304,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-2 w-40 overflow-hidden rounded-full bg-zinc-200",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-full rounded-full bg-[#ef1d1d]",
                                                                    style: {
                                                                        width: `${(propertyStep + 1) / propertyWizardSteps.length * 100}%`
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                                    lineNumber: 3308,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 3307,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    Math.round((propertyStep + 1) / propertyWizardSteps.length * 100),
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 3315,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 3303,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: savePropertyDraft,
                                                                className: "rounded-lg border border-[#1e4fb8] px-4 py-2 text-sm font-semibold text-[#1e4fb8]",
                                                                children: "Save Draft"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 3323,
                                                                columnNumber: 21
                                                            }, this),
                                                            editingId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                                lineNumber: 3331,
                                                                columnNumber: 23
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 3322,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 3272,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 2292,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 2237,
                                columnNumber: 13
                            }, this) : null,
                            activeView === "records" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold text-zinc-900",
                                        children: "Property Records"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 3358,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 grid gap-3",
                                        children: [
                                            properties.map((property)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                    className: "rounded-xl border border-zinc-200 bg-zinc-50 p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                                            children: property.recordStatus
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 3367,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "mt-1 text-lg font-semibold text-zinc-900",
                                                            children: property.propertyTitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 3370,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-sm text-zinc-600",
                                                            children: [
                                                                property.propertyType,
                                                                " | ",
                                                                property.areaSector,
                                                                ",",
                                                                " ",
                                                                property.city,
                                                                " | INR ",
                                                                property.price
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 3373,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-3 flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>startEdit(property),
                                                                    className: "rounded-md border border-zinc-300 px-3 py-1 text-xs font-semibold text-zinc-700",
                                                                    children: "Edit"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                                    lineNumber: 3378,
                                                                    columnNumber: 23
                                                                }, this),
                                                                canDeleteProperty ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>deleteProperty(property._id),
                                                                    className: "rounded-md bg-red-600 px-3 py-1 text-xs font-semibold text-white",
                                                                    children: "Delete"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                                    lineNumber: 3385,
                                                                    columnNumber: 25
                                                                }, this) : null
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 3377,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, property._id, true, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 3363,
                                                    columnNumber: 19
                                                }, this)),
                                            properties.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "rounded-lg border border-zinc-200 p-4 text-sm text-zinc-700",
                                                children: "No properties found."
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 3396,
                                                columnNumber: 19
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 3361,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 3357,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/CmsApp.tsx",
                        lineNumber: 1828,
                        columnNumber: 9
                    }, this),
                    showPreviewPanel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm lg:sticky lg:top-6 lg:h-fit",
                        children: activeView === "propertyWizard" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl font-semibold text-[#0d2b6b]",
                                    children: "Live Preview"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 3409,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-zinc-600",
                                    children: "This is how your property will appear"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 3412,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 overflow-hidden rounded-xl border border-zinc-200 bg-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-52 w-full bg-zinc-100",
                                            children: [
                                                coverPreviewUrl || propertyForm.coverImageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: coverPreviewUrl || propertyForm.coverImageUrl,
                                                    alt: "Property preview cover",
                                                    width: 640,
                                                    height: 360,
                                                    unoptimized: true,
                                                    className: "h-full w-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 3418,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex h-full items-center justify-center text-sm text-zinc-500",
                                                    children: "Upload a cover image"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 3427,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute left-3 top-3 rounded-md bg-[#ef1d1d] px-2 py-1 text-xs font-semibold text-white",
                                                    children: propertyForm.listingType.toUpperCase()
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 3431,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 3416,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-semibold text-[#0d2b6b]",
                                                    children: propertyForm.propertyTitle || "Property title preview"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 3436,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-zinc-600",
                                                    children: [
                                                        propertyForm.areaSector || "Sector",
                                                        " ,",
                                                        " ",
                                                        propertyForm.city || "Kurukshetra"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 3439,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-md border border-blue-200 bg-blue-50 px-2 py-1 text-xs font-semibold text-[#1e4fb8]",
                                                            children: propertyForm.projectStatus.replace(/[-_]/g, " ")
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 3444,
                                                            columnNumber: 23
                                                        }, this),
                                                        propertyForm.verifiedBadge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-md border border-green-200 bg-green-50 px-2 py-1 text-xs font-semibold text-green-700",
                                                            children: "Verified"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 3448,
                                                            columnNumber: 25
                                                        }, this) : null,
                                                        propertyForm.featuredProperty ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-md border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-[#ef1d1d]",
                                                            children: "Featured"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 3453,
                                                            columnNumber: 25
                                                        }, this) : null
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 3443,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-bold text-[#ef1d1d]",
                                                    children: [
                                                        "INR ",
                                                        propertyForm.price || "0"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 3458,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-zinc-700",
                                                    children: propertyForm.shortDescription || "Short description preview"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 3461,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold text-[#0d2b6b]",
                                                            children: "Highlights"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 3466,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "mt-2 space-y-1 text-sm text-zinc-700",
                                                            children: [
                                                                propertyForm.keyHighlightsText.split("\n").map((item)=>item.trim()).filter((item)=>item.length > 0).slice(0, 4).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: [
                                                                            "- ",
                                                                            item
                                                                        ]
                                                                    }, item, true, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 3476,
                                                                        columnNumber: 29
                                                                    }, this)),
                                                                propertyForm.keyHighlightsText.trim().length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "- Add highlights in Content step"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                                    lineNumber: 3479,
                                                                    columnNumber: 27
                                                                }, this) : null
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 3469,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 3465,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 3435,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 3415,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 rounded-lg border border-rose-200 bg-rose-50 p-3 text-xs text-rose-700",
                                    children: "Note: Preview is for reference only. Actual appearance may vary slightly."
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 3485,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                    children: "Details"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 3492,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 space-y-3 text-sm text-zinc-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Active: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: activeView
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 3497,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 3496,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Total properties:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: properties.length
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 3501,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 3499,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Managers:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: setup?.managerCount ?? 0
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 3505,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 3503,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-xs text-zinc-600",
                                            children: "Upload limits: Banner/property images must be 5MB or smaller."
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 3509,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 3495,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/app/cms/CmsApp.tsx",
                        lineNumber: 3406,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/CmsApp.tsx",
                lineNumber: 1723,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/CmsApp.tsx",
        lineNumber: 1653,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_0~3024u._.js.map