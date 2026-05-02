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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$slug$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/slug.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    projectStatus: "ready_to_move",
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
    whatsappNumber: "",
    alternateNumber: "",
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
    return value.replace(/\D/g, "");
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
const MAX_IMAGE_UPLOAD_BYTES = 500 * 1024;
const MAX_BANNER_IMAGE_UPLOAD_BYTES = 5 * 1024 * 1024;
const PROPERTY_WIZARD_DRAFT_KEY = "riterealty:property-wizard-draft:v1";
const propertyWizardSteps = [
    "Basics",
    "Location",
    "Media",
    "Content",
    "SEO & Publish"
];
const propertyStepIcons = [
    "BI",
    "LO",
    "ME",
    "CO",
    "SEO"
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
    const [bannerImageMode, setBannerImageMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [bannerPreviewUrl, setBannerPreviewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [banners, setBanners] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [bannerSlideEnabled, setBannerSlideEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [propertyForm, setPropertyForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialPropertyForm);
    const [propertyErrors, setPropertyErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [slugEditedManually, setSlugEditedManually] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mapSearch, setMapSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [mapAutoFilling, setMapAutoFilling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPropertyPreview, setShowPropertyPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [galleryDropActive, setGalleryDropActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [coverDropActive, setCoverDropActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isAdmin = user?.role === "admin";
    const canDeleteProperty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CmsApp.useMemo[canDeleteProperty]": ()=>isAdmin
    }["CmsApp.useMemo[canDeleteProperty]"], [
        isAdmin
    ]);
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
            if (!user || editingId) return;
            const saved = window.localStorage.getItem(PROPERTY_WIZARD_DRAFT_KEY);
            if (!saved) return;
            try {
                const parsed = JSON.parse(saved);
                setPropertyForm({
                    "CmsApp.useEffect": (prev)=>({
                            ...prev,
                            ...parsed,
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
        return `rounded-lg border px-3 py-2 text-sm ${propertyErrors[field] ? "border-red-500 bg-red-50" : "border-zinc-300"}`;
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
        setUploadingCover(true);
        setMessage("");
        try {
            ensureValidImage(file_1, "Cover image");
            const url = await uploadSingleFile(file_1, "/riterealty/properties/cover");
            setPropertyForm((prev_1)=>({
                    ...prev_1,
                    coverImageUrl: url
                }));
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
        setUploadingGallery(true);
        setMessage("");
        try {
            files.forEach((file_2)=>ensureValidImage(file_2, "Gallery image"));
            const uploaded = await Promise.all(files.map((file_3)=>uploadSingleFile(file_3, "/riterealty/properties/gallery")));
            setPropertyForm((prev_2)=>({
                    ...prev_2,
                    galleryImageUrls: [
                        ...prev_2.galleryImageUrls,
                        ...uploaded
                    ]
                }));
            setMessage("Gallery images uploaded.");
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
        const file_4 = event_1.dataTransfer.files?.[0];
        if (!file_4) return;
        setUploadingCover(true);
        setMessage("");
        try {
            ensureValidImage(file_4, "Cover image");
            const url_0 = await uploadSingleFile(file_4, "/riterealty/properties/cover");
            setPropertyForm((prev_3)=>({
                    ...prev_3,
                    coverImageUrl: url_0
                }));
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
        setUploadingGallery(true);
        setMessage("");
        try {
            files_0.forEach((file_5)=>ensureValidImage(file_5, "Gallery image"));
            const uploaded_0 = await Promise.all(files_0.map((file_6)=>uploadSingleFile(file_6, "/riterealty/properties/gallery")));
            setPropertyForm((prev_4)=>({
                    ...prev_4,
                    galleryImageUrls: [
                        ...prev_4.galleryImageUrls,
                        ...uploaded_0
                    ]
                }));
            setMessage("Gallery images uploaded.");
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
                const searchRes = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q=${encodeURIComponent(query)}`);
                if (!searchRes.ok) throw new Error("Could not resolve that location.");
                const results = await searchRes.json();
                const first = results[0];
                if (!first) throw new Error("No location found. Try a more specific Google Maps address.");
                lat = first.lat;
                lng = first.lon;
                fullAddress = first.display_name ?? "";
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
    async function handleBannerImageUpload(event_3) {
        const input_1 = event_3.currentTarget;
        const file_7 = input_1.files?.[0];
        if (!file_7) return;
        setBannerPreviewUrl(URL.createObjectURL(file_7));
        await uploadBannerImageFile(file_7);
        input_1.value = "";
    }
    async function uploadBannerImageFile(file_8) {
        setUploadingBannerImage(true);
        setMessage("");
        try {
            ensureValidImage(file_8, "Banner image", MAX_BANNER_IMAGE_UPLOAD_BYTES);
            const url_1 = await uploadSingleFile(file_8, "/riterealty/banner");
            setBannerImageMode("upload");
            setBannerPreviewUrl(url_1);
            setBannerForm((prev_6)=>({
                    ...prev_6,
                    imageUrl: url_1
                }));
            setMessage("Banner image uploaded.");
        } catch (error_4) {
            setMessage(error_4 instanceof Error ? error_4.message : "Banner upload failed.");
        } finally{
            setUploadingBannerImage(false);
        }
    }
    function handleBannerUploadDragOver(event_4) {
        const uploadBlockedByUrlMode = bannerImageMode === "url" && bannerForm.imageUrl.trim().length > 0;
        if (uploadBlockedByUrlMode) {
            return;
        }
        event_4.preventDefault();
        event_4.dataTransfer.dropEffect = "copy";
    }
    async function handleBannerUploadDrop(event_5) {
        event_5.preventDefault();
        const uploadBlockedByUrlMode_0 = bannerImageMode === "url" && bannerForm.imageUrl.trim().length > 0;
        if (uploadBlockedByUrlMode_0) {
            setMessage("Switch to Upload mode first to replace the image file.");
            return;
        }
        const file_9 = event_5.dataTransfer.files?.[0];
        if (!file_9) return;
        setBannerPreviewUrl(URL.createObjectURL(file_9));
        await uploadBannerImageFile(file_9);
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
            setMessage("Banner image is required.");
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
        setBannerImageMode(null);
        setBannerPreviewUrl(null);
        setBannerForm(initialBannerForm);
        await loadBanners();
    }
    function handleBannerImageUrlChange(value) {
        const nextValue = value;
        setBannerForm((prev_7)=>({
                ...prev_7,
                imageUrl: nextValue
            }));
        setBannerImageMode(nextValue.trim().length > 0 ? "url" : null);
    }
    function switchBannerImageMode(nextMode) {
        setBannerImageMode(nextMode);
        setBannerPreviewUrl(null);
        setBannerForm((prev_8)=>({
                ...prev_8,
                imageUrl: ""
            }));
    }
    function startBannerEdit(banner_0) {
        setEditingBannerId(banner_0._id);
        setBannerImageMode(null);
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
            setBannerImageMode(null);
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
            return errors;
        }
        if (step === 1) {
            if (!propertyForm.city.trim()) errors.city = "City is required.";
            if (!propertyForm.areaSector.trim()) errors.areaSector = "Area/Sector is required.";
            if (!propertyForm.fullAddress.trim()) errors.fullAddress = "Address is required.";
            if (!propertyForm.lat.trim()) errors.lat = "Latitude is required.";
            if (!propertyForm.lng.trim()) errors.lng = "Longitude is required.";
            if (!propertyForm.builderName.trim()) errors.builderName = "Builder name is required.";
            if (!propertyForm.projectName.trim()) errors.projectName = "Project name is required.";
            return errors;
        }
        if (step === 2) {
            if (!propertyForm.coverImageUrl.trim()) errors.coverImageUrl = "Cover image is required.";
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
            if (!propertyForm.shortDescription.trim()) errors.shortDescription = "Short description is required.";
            if (!propertyForm.detailedDescription.trim()) errors.detailedDescription = "Detailed description is required.";
            if (!propertyForm.contactName.trim()) errors.contactName = "Contact name is required.";
            const phone = cleanPhone(propertyForm.phoneNumber);
            const whatsapp = cleanPhone(propertyForm.whatsappNumber);
            if (!phone) errors.phoneNumber = "Phone number is required.";
            if (phone && phone.length !== 10) errors.phoneNumber = "Phone number must be 10 digits.";
            if (!whatsapp) errors.whatsappNumber = "WhatsApp number is required.";
            if (whatsapp && whatsapp.length !== 10) errors.whatsappNumber = "WhatsApp number must be 10 digits.";
            return errors;
        }
        if (step === 4) {
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
    function goToNextPropertyStep() {
        const error_5 = validatePropertyStep(propertyStep);
        if (error_5) {
            setMessage(error_5);
            return;
        }
        window.localStorage.setItem(PROPERTY_WIZARD_DRAFT_KEY, JSON.stringify(propertyForm));
        setMessage("");
        setPropertyStep((prev_9)=>Math.min(prev_9 + 1, propertyWizardSteps.length - 1));
    }
    function goToPreviousPropertyStep() {
        setMessage("");
        setPropertyErrors({});
        setPropertyStep((prev_10)=>Math.max(prev_10 - 1, 0));
    }
    async function handlePropertySubmit(event_10) {
        event_10.preventDefault();
        setMessage("");
        for(let step_1 = 0; step_1 < propertyWizardSteps.length; step_1 += 1){
            const error_6 = validatePropertyStep(step_1);
            if (error_6) {
                setPropertyStep(step_1);
                setMessage(error_6);
                return;
            }
        }
        setSubmittingProperty(true);
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
                lat: Number(propertyForm.lat),
                lng: Number(propertyForm.lng)
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
            amenities: propertyForm.amenities,
            contactName: propertyForm.contactName.trim(),
            phoneNumber: cleanPhone(propertyForm.phoneNumber),
            whatsappNumber: cleanPhone(propertyForm.whatsappNumber),
            alternateNumber: cleanPhone(propertyForm.alternateNumber),
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
            setShowPropertyPreview(false);
            setPropertyErrors({});
            window.localStorage.removeItem(PROPERTY_WIZARD_DRAFT_KEY);
            setEditingId(null);
            setSubmittingProperty(false);
            await loadProperties();
        } catch (error_7) {
            setMessage(error_7 instanceof Error ? error_7.message : "Property save failed.");
            setSubmittingProperty(false);
        }
    }
    function startEdit(property) {
        setActiveView("propertyWizard");
        setPropertyStep(0);
        setEditingId(property._id);
        setSlugEditedManually(true);
        setShowPropertyPreview(false);
        setPropertyErrors({});
        setMapSearch(property.fullAddress ?? "");
        setPropertyForm({
            propertyTitle: property.propertyTitle,
            propertyType: property.propertyType,
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
            projectStatus: property.projectStatus,
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
            amenities: property.amenities,
            contactName: property.contactName,
            phoneNumber: property.phoneNumber,
            whatsappNumber: property.whatsappNumber,
            alternateNumber: property.alternateNumber ?? "",
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
    function updateFaq(index, field_0, value_0) {
        setPropertyForm((prev_11)=>({
                ...prev_11,
                faqs: prev_11.faqs.map((faq_3, faqIndex)=>faqIndex === index ? {
                        ...faq_3,
                        [field_0]: value_0
                    } : faq_3)
            }));
    }
    function addFaqRow() {
        setPropertyForm((prev_12)=>({
                ...prev_12,
                faqs: [
                    ...prev_12.faqs,
                    {
                        question: "",
                        answer: ""
                    }
                ]
            }));
    }
    function removeFaqRow(index_0) {
        setPropertyForm((prev_13)=>{
            if (prev_13.faqs.length === 1) {
                return {
                    ...prev_13,
                    faqs: [
                        {
                            question: "",
                            answer: ""
                        }
                    ]
                };
            }
            return {
                ...prev_13,
                faqs: prev_13.faqs.filter((_, faqIndex_0)=>faqIndex_0 !== index_0)
            };
        });
    }
    function removeGalleryImage(index_1) {
        setPropertyForm((prev_14)=>({
                ...prev_14,
                galleryImageUrls: prev_14.galleryImageUrls.filter((__0, imageIndex)=>imageIndex !== index_1)
            }));
    }
    function setCoverFromGallery(url_2) {
        setPropertyForm((prev_15)=>({
                ...prev_15,
                coverImageUrl: url_2
            }));
        setMessage("Cover image set from gallery.");
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-zinc-600",
            children: "Loading CMS..."
        }, void 0, false, {
            fileName: "[project]/app/cms/CmsApp.tsx",
            lineNumber: 1149,
            columnNumber: 12
        }, this);
    }
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mx-auto max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-semibold text-zinc-900",
                    children: "Rite Realty CMS"
                }, void 0, false, {
                    fileName: "[project]/app/cms/CmsApp.tsx",
                    lineNumber: 1153,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm text-zinc-600",
                    children: setup?.adminExists ? "Login as admin or manager." : "No admin found. Create the first admin account."
                }, void 0, false, {
                    fileName: "[project]/app/cms/CmsApp.tsx",
                    lineNumber: 1154,
                    columnNumber: 9
                }, this),
                !setup?.adminExists ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleBootstrapAdmin,
                    className: "mt-5 grid gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            value: bootstrapForm.name,
                            onChange: (event_11)=>setBootstrapForm((prev_16)=>({
                                        ...prev_16,
                                        name: event_11.target.value
                                    })),
                            placeholder: "Admin Name",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 1158,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            type: "email",
                            value: bootstrapForm.email,
                            onChange: (event_12)=>setBootstrapForm((prev_17)=>({
                                        ...prev_17,
                                        email: event_12.target.value
                                    })),
                            placeholder: "Admin Email",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 1162,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            type: "password",
                            value: bootstrapForm.password,
                            onChange: (event_13)=>setBootstrapForm((prev_18)=>({
                                        ...prev_18,
                                        password: event_13.target.value
                                    })),
                            placeholder: "Password (min 8)",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 1166,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white",
                            children: "Create Admin"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 1170,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/CmsApp.tsx",
                    lineNumber: 1157,
                    columnNumber: 32
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleLogin,
                    className: "mt-5 grid gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            type: "email",
                            value: loginForm.email,
                            onChange: (event_14)=>setLoginForm((prev_19)=>({
                                        ...prev_19,
                                        email: event_14.target.value
                                    })),
                            placeholder: "Email",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 1172,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            type: "password",
                            value: loginForm.password,
                            onChange: (event_15)=>setLoginForm((prev_20)=>({
                                        ...prev_20,
                                        password: event_15.target.value
                                    })),
                            placeholder: "Password",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 1176,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white",
                            children: "Login"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 1180,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/CmsApp.tsx",
                    lineNumber: 1171,
                    columnNumber: 21
                }, this),
                message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-sm text-zinc-700",
                    children: message
                }, void 0, false, {
                    fileName: "[project]/app/cms/CmsApp.tsx",
                    lineNumber: 1182,
                    columnNumber: 20
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/app/cms/CmsApp.tsx",
            lineNumber: 1152,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-semibold text-zinc-900",
                                    children: "Rite Realty CMS"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 1189,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-zinc-600",
                                    children: [
                                        "Logged in as ",
                                        user.name,
                                        " (",
                                        user.role,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 1190,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 1188,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/blog/cms",
                                    className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50",
                                    children: "Blog Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 1193,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleLogout,
                                    className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm font-semibold text-zinc-700",
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 1196,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 1192,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/CmsApp.tsx",
                    lineNumber: 1187,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/CmsApp.tsx",
                lineNumber: 1186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)_260px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm lg:sticky lg:top-4 lg:h-fit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                children: "Workspace"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 grid gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveView("banner"),
                                        className: `rounded-lg px-3 py-2 text-left text-sm font-medium ${activeView === "banner" ? "bg-zinc-900 text-white" : "border border-zinc-300 text-zinc-700"}`,
                                        children: "Banner"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1207,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveView("propertyWizard"),
                                        className: `rounded-lg px-3 py-2 text-left text-sm font-medium ${activeView === "propertyWizard" ? "bg-zinc-900 text-white" : "border border-zinc-300 text-zinc-700"}`,
                                        children: "Property Listing"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1210,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveView("records"),
                                        className: `rounded-lg px-3 py-2 text-left text-sm font-medium ${activeView === "records" ? "bg-zinc-900 text-white" : "border border-zinc-300 text-zinc-700"}`,
                                        children: "Records"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1213,
                                        columnNumber: 13
                                    }, this),
                                    isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveView("managers"),
                                        className: `rounded-lg px-3 py-2 text-left text-sm font-medium ${activeView === "managers" ? "bg-zinc-900 text-white" : "border border-zinc-300 text-zinc-700"}`,
                                        children: "Managers"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1216,
                                        columnNumber: 24
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1206,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/CmsApp.tsx",
                        lineNumber: 1204,
                        columnNumber: 9
                    }, this),
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
                                                        lineNumber: 1226,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-sm text-zinc-600",
                                                        children: editingBannerId ? "Editing saved campaign banner." : "Create banner content with the same wizard feel."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1227,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1225,
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
                                                        lineNumber: 1232,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white",
                                                        children: editingBannerId ? "Live Editor" : "Draft"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1233,
                                                        columnNumber: 19
                                                    }, this),
                                                    editingBannerId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            setEditingBannerId(null);
                                                            setBannerImageMode(null);
                                                            setBannerPreviewUrl(null);
                                                            setBannerForm(initialBannerForm);
                                                            setMessage("Banner edit cancelled.");
                                                        },
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-50",
                                                        children: "Cancel Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1236,
                                                        columnNumber: 38
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1231,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1224,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-sm text-zinc-600",
                                        children: [
                                            banners.length,
                                            " / 6 banners stored. ",
                                            bannerSlideEnabled ? "Slider enabled." : "Slider disabled."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1248,
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
                                                                lineNumber: 1255,
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
                                                                        lineNumber: 1257,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: "banner-project-name",
                                                                        required: true,
                                                                        value: bannerForm.projectName,
                                                                        onChange: (event_16)=>setBannerForm((prev_21)=>({
                                                                                    ...prev_21,
                                                                                    projectName: event_16.target.value
                                                                                })),
                                                                        className: "w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm",
                                                                        placeholder: "Project name"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1260,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-zinc-800",
                                                                        htmlFor: "banner-title",
                                                                        children: "Banner Headline"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1265,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: "banner-title",
                                                                        required: true,
                                                                        value: bannerForm.title,
                                                                        onChange: (event_17)=>setBannerForm((prev_22)=>({
                                                                                    ...prev_22,
                                                                                    title: event_17.target.value
                                                                                })),
                                                                        className: "w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm",
                                                                        placeholder: "Banner headline"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1268,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-zinc-800",
                                                                        htmlFor: "banner-subtitle",
                                                                        children: "Sub-headline"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1273,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                        id: "banner-subtitle",
                                                                        required: true,
                                                                        value: bannerForm.subtitle,
                                                                        onChange: (event_18)=>setBannerForm((prev_23)=>({
                                                                                    ...prev_23,
                                                                                    subtitle: event_18.target.value
                                                                                })),
                                                                        className: "w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm",
                                                                        rows: 4,
                                                                        placeholder: "Support text for your campaign"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1276,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1256,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1254,
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
                                                                lineNumber: 1284,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                id: "banner-upload-input",
                                                                type: "file",
                                                                accept: "image/*",
                                                                disabled: bannerImageMode === "url" && bannerForm.imageUrl.trim().length > 0,
                                                                onChange: handleBannerImageUpload,
                                                                className: "sr-only"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1285,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "banner-upload-input",
                                                                onDragOver: handleBannerUploadDragOver,
                                                                onDrop: (event_19)=>void handleBannerUploadDrop(event_19),
                                                                className: `mt-4 block rounded-2xl border-2 border-dashed px-4 py-12 text-center ${bannerImageMode === "url" && bannerForm.imageUrl.trim().length > 0 ? "cursor-not-allowed border-zinc-300 bg-zinc-100 text-zinc-500" : "border-sky-500 bg-gradient-to-br from-sky-50 via-blue-50 to-sky-100 text-zinc-700"}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "block text-lg font-semibold",
                                                                        children: "Upload or drag & drop high-res banner asset"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1287,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-2 inline-flex rounded-full border border-sky-300 bg-white px-3 py-1 text-xs font-semibold text-sky-700",
                                                                        children: "Click to choose file"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1288,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-2 block text-sm",
                                                                        children: "JPEG, PNG, WEBP (Max 5MB)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1291,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    uploadingBannerImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-2 block text-xs font-semibold",
                                                                        children: "Uploading..."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1292,
                                                                        columnNumber: 47
                                                                    }, this) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1286,
                                                                columnNumber: 21
                                                            }, this),
                                                            bannerImageMode !== "upload" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "mt-4 block text-sm font-medium text-zinc-800",
                                                                        htmlFor: "banner-image-url",
                                                                        children: "Banner Image URL"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1296,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: "banner-image-url",
                                                                        value: bannerForm.imageUrl,
                                                                        onChange: (event_20)=>handleBannerImageUrlChange(event_20.target.value),
                                                                        className: "mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm disabled:bg-zinc-100 disabled:text-zinc-500",
                                                                        placeholder: "https://..."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1299,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true) : null,
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
                                                                    lineNumber: 1303,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1302,
                                                                columnNumber: 71
                                                            }, this) : null,
                                                            bannerImageMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs text-zinc-700",
                                                                children: [
                                                                    "Using ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold uppercase",
                                                                        children: bannerImageMode
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1307,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    " mode.",
                                                                    bannerImageMode === "url" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>switchBannerImageMode("upload"),
                                                                        className: "ml-2 rounded border border-zinc-300 bg-white px-2 py-1 font-semibold text-zinc-700 transition hover:bg-zinc-100",
                                                                        children: "Switch to Upload"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1308,
                                                                        columnNumber: 54
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>switchBannerImageMode("url"),
                                                                        className: "ml-2 rounded border border-zinc-300 bg-white px-2 py-1 font-semibold text-zinc-700 transition hover:bg-zinc-100",
                                                                        children: "Switch to URL"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1310,
                                                                        columnNumber: 39
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1306,
                                                                columnNumber: 40
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1283,
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
                                                                lineNumber: 1317,
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
                                                                                lineNumber: 1320,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "inline-flex cursor-pointer items-center",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "checkbox",
                                                                                        checked: bannerForm.showCta,
                                                                                        onChange: (event_21)=>setBannerForm((prev_24)=>({
                                                                                                    ...prev_24,
                                                                                                    showCta: event_21.target.checked
                                                                                                })),
                                                                                        className: "peer sr-only"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                        lineNumber: 1322,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "relative h-6 w-11 rounded-full bg-zinc-300 transition peer-checked:bg-blue-600 peer-checked:after:translate-x-5 after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                        lineNumber: 1326,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1321,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1319,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-zinc-800",
                                                                        htmlFor: "banner-cta-label",
                                                                        children: "Button Label"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1330,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: "banner-cta-label",
                                                                        required: bannerForm.showCta,
                                                                        disabled: !bannerForm.showCta,
                                                                        value: bannerForm.ctaLabel,
                                                                        onChange: (event_22)=>setBannerForm((prev_25)=>({
                                                                                    ...prev_25,
                                                                                    ctaLabel: event_22.target.value
                                                                                })),
                                                                        className: "w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm disabled:bg-zinc-100 disabled:text-zinc-500",
                                                                        placeholder: "Download Price List"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1333,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-zinc-800",
                                                                        htmlFor: "banner-cta-href",
                                                                        children: "Button Link"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1338,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: "banner-cta-href",
                                                                        required: bannerForm.showCta,
                                                                        disabled: !bannerForm.showCta,
                                                                        value: bannerForm.ctaHref,
                                                                        onChange: (event_23)=>setBannerForm((prev_26)=>({
                                                                                    ...prev_26,
                                                                                    ctaHref: event_23.target.value
                                                                                })),
                                                                        className: "w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm disabled:bg-zinc-100 disabled:text-zinc-500",
                                                                        placeholder: "/project/slug"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1341,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "mt-3 flex items-center gap-2 text-sm text-zinc-700",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                checked: bannerForm.slideEnabled,
                                                                                onChange: (event_24)=>setBannerForm((prev_27)=>({
                                                                                            ...prev_27,
                                                                                            slideEnabled: event_24.target.checked
                                                                                        }))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1347,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            "Enable homepage auto slider"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1346,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1318,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1316,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1253,
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
                                                        lineNumber: 1358,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        disabled: !editingBannerId && banners.length >= 6,
                                                        className: "rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:bg-zinc-400",
                                                        children: editingBannerId ? "Update Banner" : "Publish Banner"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1363,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1357,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1252,
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
                                                lineNumber: 1370,
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
                                                                        lineNumber: 1374,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-zinc-600",
                                                                        children: banner_1.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1375,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1373,
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
                                                                        lineNumber: 1378,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    banner_1.showCta !== false ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700",
                                                                        children: banner_1.ctaLabel
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1381,
                                                                        columnNumber: 57
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "rounded-full bg-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600",
                                                                        children: "CTA Hidden"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1383,
                                                                        columnNumber: 39
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>void handleBannerDelete(banner_1._id),
                                                                        className: "rounded-lg border border-red-300 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700 transition hover:bg-red-100",
                                                                        children: "Delete"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1386,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1377,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, banner_1._id, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1372,
                                                        columnNumber: 46
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1371,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1369,
                                        columnNumber: 37
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1223,
                                columnNumber: 38
                            }, this) : null,
                            activeView === "managers" ? isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold text-zinc-900",
                                        children: "Manager Accounts"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1396,
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
                                        lineNumber: 1397,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleManagerCreate,
                                        className: "mt-4 grid gap-3 md:grid-cols-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                value: managerForm.name,
                                                onChange: (event_25)=>setManagerForm((prev_28)=>({
                                                            ...prev_28,
                                                            name: event_25.target.value
                                                        })),
                                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                placeholder: "Manager name"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1399,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                type: "email",
                                                value: managerForm.email,
                                                onChange: (event_26)=>setManagerForm((prev_29)=>({
                                                            ...prev_29,
                                                            email: event_26.target.value
                                                        })),
                                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                placeholder: "Manager email"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1403,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                type: "password",
                                                value: managerForm.password,
                                                onChange: (event_27)=>setManagerForm((prev_30)=>({
                                                            ...prev_30,
                                                            password: event_27.target.value
                                                        })),
                                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                placeholder: "Password"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1407,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white md:col-span-3",
                                                children: "Create Manager"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1411,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1398,
                                        columnNumber: 17
                                    }, this),
                                    users.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 grid gap-2",
                                        children: users.map((profile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
                                                children: [
                                                    profile.name,
                                                    " - ",
                                                    profile.email,
                                                    " - ",
                                                    profile.role
                                                ]
                                            }, profile._id, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1416,
                                                columnNumber: 43
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1415,
                                        columnNumber: 37
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1395,
                                columnNumber: 50
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm",
                                children: "Only admins can manage manager accounts."
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1420,
                                columnNumber: 24
                            }, this) : null,
                            activeView === "propertyWizard" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold text-zinc-900",
                                        children: editingId ? "Edit Property" : "Add Property"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1425,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm text-zinc-600",
                                        children: [
                                            "Step ",
                                            propertyStep + 1,
                                            " of ",
                                            propertyWizardSteps.length,
                                            ": ",
                                            propertyWizardSteps[propertyStep]
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1426,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 h-2 overflow-hidden rounded-full bg-zinc-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full rounded-full bg-blue-600 transition-all",
                                            style: {
                                                width: `${(propertyStep + 1) / propertyWizardSteps.length * 100}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 1431,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1430,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 grid grid-cols-5 gap-2",
                                        children: propertyWizardSteps.map((step_2, index_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setPropertyStep(index_2),
                                                className: `rounded-xl px-2 py-2 text-xs font-semibold ${index_2 === propertyStep ? "bg-zinc-900 text-white" : index_2 < propertyStep ? "bg-blue-100 text-blue-900" : "border border-zinc-300 text-zinc-700"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mr-1",
                                                        children: index_2 < propertyStep ? "OK" : propertyStepIcons[index_2]
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1438,
                                                        columnNumber: 21
                                                    }, this),
                                                    step_2
                                                ]
                                            }, step_2, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1437,
                                                columnNumber: 63
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1436,
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
                                                                lineNumber: 1446,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 grid gap-3 md:grid-cols-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        required: true,
                                                                        value: propertyForm.propertyTitle,
                                                                        onChange: (event_28)=>setPropertyForm((prev_31)=>({
                                                                                    ...prev_31,
                                                                                    propertyTitle: event_28.target.value
                                                                                })),
                                                                        className: propertyFieldClass("propertyTitle"),
                                                                        placeholder: "Property Title"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1448,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                value: propertyForm.slug,
                                                                                onChange: (event_29)=>{
                                                                                    setSlugEditedManually(true);
                                                                                    setPropertyForm((prev_32)=>({
                                                                                            ...prev_32,
                                                                                            slug: event_29.target.value
                                                                                        }));
                                                                                },
                                                                                className: `${propertyFieldClass("slug")} w-full`,
                                                                                placeholder: "Slug"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1453,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mt-1 text-xs text-zinc-500",
                                                                                children: "Used in URL"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1460,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1452,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: propertyForm.propertyType,
                                                                        onChange: (event_30)=>setPropertyForm((prev_33)=>({
                                                                                    ...prev_33,
                                                                                    propertyType: event_30.target.value
                                                                                })),
                                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROPERTY_TYPES"].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: type,
                                                                                children: type
                                                                            }, type, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1466,
                                                                                columnNumber: 55
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1462,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: propertyForm.listingType,
                                                                        onChange: (event_31)=>setPropertyForm((prev_34)=>({
                                                                                    ...prev_34,
                                                                                    listingType: event_31.target.value
                                                                                })),
                                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LISTING_TYPES"].map((type_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: type_0,
                                                                                children: type_0
                                                                            }, type_0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1472,
                                                                                columnNumber: 56
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1468,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        value: propertyForm.propertyCode,
                                                                        onChange: (event_32)=>setPropertyForm((prev_35)=>({
                                                                                    ...prev_35,
                                                                                    propertyCode: event_32.target.value
                                                                                })),
                                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                                                        placeholder: "Property Code (optional)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1474,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1447,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1445,
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
                                                                lineNumber: 1482,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 grid gap-3 md:grid-cols-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        required: true,
                                                                        value: propertyForm.price,
                                                                        onChange: (event_33)=>setPropertyForm((prev_36)=>({
                                                                                    ...prev_36,
                                                                                    price: event_33.target.value
                                                                                })),
                                                                        className: propertyFieldClass("price"),
                                                                        placeholder: "Price"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1484,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: propertyForm.priceUnit,
                                                                        onChange: (event_34)=>setPropertyForm((prev_37)=>({
                                                                                    ...prev_37,
                                                                                    priceUnit: event_34.target.value
                                                                                })),
                                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRICE_UNITS"].map((unit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: unit,
                                                                                children: unit
                                                                            }, unit, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1492,
                                                                                columnNumber: 52
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1488,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        required: true,
                                                                        value: propertyForm.areaSize,
                                                                        onChange: (event_35)=>setPropertyForm((prev_38)=>({
                                                                                    ...prev_38,
                                                                                    areaSize: event_35.target.value
                                                                                })),
                                                                        className: propertyFieldClass("areaSize"),
                                                                        placeholder: "Area Size"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1494,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: propertyForm.areaUnit,
                                                                        onChange: (event_36)=>setPropertyForm((prev_39)=>({
                                                                                    ...prev_39,
                                                                                    areaUnit: event_36.target.value
                                                                                })),
                                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AREA_UNITS"].map((unit_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: unit_0,
                                                                                children: unit_0
                                                                            }, unit_0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1502,
                                                                                columnNumber: 53
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1498,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1483,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1481,
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
                                                                lineNumber: 1510,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 flex flex-col gap-2 md:flex-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        value: mapSearch,
                                                                        onChange: (event_37)=>setMapSearch(event_37.target.value),
                                                                        className: "w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                        placeholder: "Paste Google Maps URL or address"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1512,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>void autoFillLocationFromMap(),
                                                                        className: "rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white",
                                                                        disabled: mapAutoFilling,
                                                                        children: mapAutoFilling ? "Filling..." : "Auto Fill"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1513,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1511,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1509,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.city,
                                                        onChange: (event_38)=>setPropertyForm((prev_40)=>({
                                                                    ...prev_40,
                                                                    city: event_38.target.value
                                                                })),
                                                        className: propertyFieldClass("city"),
                                                        placeholder: "City"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1519,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.areaSector,
                                                        onChange: (event_39)=>setPropertyForm((prev_41)=>({
                                                                    ...prev_41,
                                                                    areaSector: event_39.target.value
                                                                })),
                                                        className: propertyFieldClass("areaSector"),
                                                        placeholder: "Area/Sector"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1523,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.fullAddress,
                                                        onChange: (event_40)=>setPropertyForm((prev_42)=>({
                                                                    ...prev_42,
                                                                    fullAddress: event_40.target.value
                                                                })),
                                                        className: `${propertyFieldClass("fullAddress")} md:col-span-2`,
                                                        placeholder: "Full Address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1527,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.lat,
                                                        onChange: (event_41)=>setPropertyForm((prev_43)=>({
                                                                    ...prev_43,
                                                                    lat: event_41.target.value
                                                                })),
                                                        className: propertyFieldClass("lat"),
                                                        placeholder: "Latitude"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1531,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.lng,
                                                        onChange: (event_42)=>setPropertyForm((prev_44)=>({
                                                                    ...prev_44,
                                                                    lng: event_42.target.value
                                                                })),
                                                        className: propertyFieldClass("lng"),
                                                        placeholder: "Longitude"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1535,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.builderName,
                                                        onChange: (event_43)=>setPropertyForm((prev_45)=>({
                                                                    ...prev_45,
                                                                    builderName: event_43.target.value
                                                                })),
                                                        className: propertyFieldClass("builderName"),
                                                        placeholder: "Builder Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1539,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.projectName,
                                                        onChange: (event_44)=>setPropertyForm((prev_46)=>({
                                                                    ...prev_46,
                                                                    projectName: event_44.target.value
                                                                })),
                                                        className: propertyFieldClass("projectName"),
                                                        placeholder: "Project Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1543,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: propertyForm.projectStatus,
                                                        onChange: (event_45)=>setPropertyForm((prev_47)=>({
                                                                    ...prev_47,
                                                                    projectStatus: event_45.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECT_STATUSES"].map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: status,
                                                                children: status
                                                            }, status, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1551,
                                                                columnNumber: 55
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1547,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            value: propertyForm.possessionDate,
                                                            onChange: (event_46)=>setPropertyForm((prev_48)=>({
                                                                        ...prev_48,
                                                                        possessionDate: event_46.target.value
                                                                    })),
                                                            className: "w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 1554,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1553,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: propertyForm.reraNumber,
                                                                onChange: (event_47)=>setPropertyForm((prev_49)=>({
                                                                            ...prev_49,
                                                                            reraNumber: event_47.target.value
                                                                        })),
                                                                className: "w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                placeholder: "RERA (optional)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1560,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-xs text-zinc-500",
                                                                children: "Optional but improves trust."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1564,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1559,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true) : null,
                                            propertyStep === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    propertyForm.propertyType === "plot" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: propertyForm.plotArea,
                                                                onChange: (event_48)=>setPropertyForm((prev_50)=>({
                                                                            ...prev_50,
                                                                            plotArea: event_48.target.value
                                                                        })),
                                                                className: propertyFieldClass("plotArea"),
                                                                placeholder: "Plot Area"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1570,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: propertyForm.facing,
                                                                onChange: (event_49)=>setPropertyForm((prev_51)=>({
                                                                            ...prev_51,
                                                                            facing: event_49.target.value
                                                                        })),
                                                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "Facing"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1578,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FACING_OPTIONS"].map((facing)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: facing,
                                                                            children: facing
                                                                        }, facing, false, {
                                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                                            lineNumber: 1579,
                                                                            columnNumber: 57
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1574,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: propertyForm.roadWidth,
                                                                onChange: (event_50)=>setPropertyForm((prev_52)=>({
                                                                            ...prev_52,
                                                                            roadWidth: event_50.target.value
                                                                        })),
                                                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                                                placeholder: "Road Width"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1581,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : null,
                                                    propertyForm.propertyType === "flat" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: propertyForm.bhk,
                                                                onChange: (event_51)=>setPropertyForm((prev_53)=>({
                                                                            ...prev_53,
                                                                            bhk: event_51.target.value
                                                                        })),
                                                                className: propertyFieldClass("bhk"),
                                                                placeholder: "BHK"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1588,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: propertyForm.floorNumber,
                                                                onChange: (event_52)=>setPropertyForm((prev_54)=>({
                                                                            ...prev_54,
                                                                            floorNumber: event_52.target.value
                                                                        })),
                                                                className: propertyFieldClass("floorNumber"),
                                                                placeholder: "Floor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1592,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: propertyForm.bathrooms,
                                                                onChange: (event_53)=>setPropertyForm((prev_55)=>({
                                                                            ...prev_55,
                                                                            bathrooms: event_53.target.value
                                                                        })),
                                                                className: propertyFieldClass("bathrooms"),
                                                                placeholder: "Bathrooms"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1596,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: propertyForm.totalFloors,
                                                                onChange: (event_54)=>setPropertyForm((prev_56)=>({
                                                                            ...prev_56,
                                                                            totalFloors: event_54.target.value
                                                                        })),
                                                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                placeholder: "Total Floors"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1600,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : null,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-xl border border-zinc-200 p-4 md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-zinc-900",
                                                                children: "Cover Image"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1607,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                onDragOver: (event_55)=>{
                                                                    event_55.preventDefault();
                                                                    setCoverDropActive(true);
                                                                },
                                                                onDragLeave: ()=>setCoverDropActive(false),
                                                                onDrop: (event_56)=>void handleCoverDrop(event_56),
                                                                className: `mt-2 block rounded-xl border-2 border-dashed p-4 text-sm ${coverDropActive ? "border-blue-500 bg-blue-50" : "border-zinc-300 bg-zinc-50"}`,
                                                                children: [
                                                                    "Drag and drop cover image or click to upload",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "file",
                                                                        accept: "image/*",
                                                                        onChange: handleCoverUpload,
                                                                        className: "mt-2 block w-full text-sm"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1613,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    uploadingCover ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-1 block text-xs",
                                                                        children: "Uploading..."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1614,
                                                                        columnNumber: 43
                                                                    }, this) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1608,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: propertyForm.coverImageUrl,
                                                                onChange: (event_57)=>setPropertyForm((prev_57)=>({
                                                                            ...prev_57,
                                                                            coverImageUrl: event_57.target.value
                                                                        })),
                                                                className: `${propertyFieldClass("coverImageUrl")} mt-3 w-full`,
                                                                placeholder: "Cover Image URL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1616,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1606,
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
                                                                lineNumber: 1623,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                onDragOver: (event_58)=>{
                                                                    event_58.preventDefault();
                                                                    setGalleryDropActive(true);
                                                                },
                                                                onDragLeave: ()=>setGalleryDropActive(false),
                                                                onDrop: (event_59)=>void handleGalleryDrop(event_59),
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
                                                                        lineNumber: 1629,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    uploadingGallery ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-1 block text-xs",
                                                                        children: "Uploading..."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1630,
                                                                        columnNumber: 45
                                                                    }, this) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1624,
                                                                columnNumber: 23
                                                            }, this),
                                                            propertyForm.galleryImageUrls.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
                                                                children: propertyForm.galleryImageUrls.map((url_3, index_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "overflow-hidden rounded-lg border border-zinc-200 bg-white",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: url_3,
                                                                                alt: `Gallery ${index_3 + 1}`,
                                                                                width: 400,
                                                                                height: 260,
                                                                                unoptimized: true,
                                                                                className: "h-28 w-full object-cover"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1635,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "space-y-2 p-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        type: "button",
                                                                                        onClick: ()=>setCoverFromGallery(url_3),
                                                                                        className: "w-full rounded-md border border-zinc-300 px-2 py-1 text-xs font-semibold text-zinc-700",
                                                                                        children: "Set Cover Image"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                        lineNumber: 1637,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        type: "button",
                                                                                        onClick: ()=>removeGalleryImage(index_3),
                                                                                        className: "w-full rounded-md border border-red-300 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700",
                                                                                        children: "Remove"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                        lineNumber: 1640,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1636,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, `${url_3}-${index_3}`, true, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1634,
                                                                        columnNumber: 82
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1633,
                                                                columnNumber: 67
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-3 text-xs text-zinc-500",
                                                                children: "No gallery images uploaded yet."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1645,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1622,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: propertyForm.videoUrl,
                                                        onChange: (event_60)=>setPropertyForm((prev_58)=>({
                                                                    ...prev_58,
                                                                    videoUrl: event_60.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "Video URL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1648,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: propertyForm.view360Url,
                                                        onChange: (event_61)=>setPropertyForm((prev_59)=>({
                                                                    ...prev_59,
                                                                    view360Url: event_61.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "360 URL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1652,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true) : null,
                                            propertyStep === 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        required: true,
                                                        value: propertyForm.shortDescription,
                                                        onChange: (event_62)=>setPropertyForm((prev_60)=>({
                                                                    ...prev_60,
                                                                    shortDescription: event_62.target.value
                                                                })),
                                                        className: `${propertyFieldClass("shortDescription")} md:col-span-2`,
                                                        rows: 2,
                                                        placeholder: "Short Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1659,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        required: true,
                                                        value: propertyForm.detailedDescription,
                                                        onChange: (event_63)=>setPropertyForm((prev_61)=>({
                                                                    ...prev_61,
                                                                    detailedDescription: event_63.target.value
                                                                })),
                                                        className: `${propertyFieldClass("detailedDescription")} md:col-span-2`,
                                                        rows: 4,
                                                        placeholder: "Detailed Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1663,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        value: propertyForm.keyHighlightsText,
                                                        onChange: (event_64)=>setPropertyForm((prev_62)=>({
                                                                    ...prev_62,
                                                                    keyHighlightsText: event_64.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                                        rows: 3,
                                                        placeholder: "Highlights (one per line)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1667,
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
                                                                lineNumber: 1672,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid gap-2 md:grid-cols-3",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AMENITY_OPTIONS"].map((amenity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "flex items-center gap-2 text-sm text-zinc-700",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                checked: propertyForm.amenities.includes(amenity),
                                                                                onChange: (event_65)=>setPropertyForm((prev_63)=>({
                                                                                            ...prev_63,
                                                                                            amenities: event_65.target.checked ? [
                                                                                                ...prev_63.amenities,
                                                                                                amenity
                                                                                            ] : prev_63.amenities.filter((item)=>item !== amenity)
                                                                                        }))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1675,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            amenity
                                                                        ]
                                                                    }, amenity, true, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1674,
                                                                        columnNumber: 57
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1673,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1671,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.contactName,
                                                        onChange: (event_66)=>setPropertyForm((prev_64)=>({
                                                                    ...prev_64,
                                                                    contactName: event_66.target.value
                                                                })),
                                                        className: propertyFieldClass("contactName"),
                                                        placeholder: "Contact Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1683,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.phoneNumber,
                                                        onChange: (event_67)=>setPropertyForm((prev_65)=>({
                                                                    ...prev_65,
                                                                    phoneNumber: cleanPhone(event_67.target.value)
                                                                })),
                                                        className: propertyFieldClass("phoneNumber"),
                                                        placeholder: "Phone Number (10 digit)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1687,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.whatsappNumber,
                                                        onChange: (event_68)=>setPropertyForm((prev_66)=>({
                                                                    ...prev_66,
                                                                    whatsappNumber: cleanPhone(event_68.target.value)
                                                                })),
                                                        className: propertyFieldClass("whatsappNumber"),
                                                        placeholder: "WhatsApp Number (10 digit)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1691,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: propertyForm.alternateNumber,
                                                        onChange: (event_69)=>setPropertyForm((prev_67)=>({
                                                                    ...prev_67,
                                                                    alternateNumber: cleanPhone(event_69.target.value)
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "Alternate Number"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1695,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true) : null,
                                            propertyStep === 4 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 text-sm text-zinc-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: propertyForm.featuredProperty,
                                                                onChange: (event_70)=>setPropertyForm((prev_68)=>({
                                                                            ...prev_68,
                                                                            featuredProperty: event_70.target.checked
                                                                        }))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1703,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Featured"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1702,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 text-sm text-zinc-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: propertyForm.verifiedBadge,
                                                                onChange: (event_71)=>setPropertyForm((prev_69)=>({
                                                                            ...prev_69,
                                                                            verifiedBadge: event_71.target.checked
                                                                        }))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1710,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Verified"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1709,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 text-sm text-zinc-700 md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: propertyForm.newLaunch,
                                                                onChange: (event_72)=>setPropertyForm((prev_70)=>({
                                                                            ...prev_70,
                                                                            newLaunch: event_72.target.checked
                                                                        }))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1717,
                                                                columnNumber: 23
                                                            }, this),
                                                            "New Launch"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1716,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: propertyForm.recordStatus,
                                                        onChange: (event_73)=>setPropertyForm((prev_71)=>({
                                                                    ...prev_71,
                                                                    recordStatus: event_73.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROPERTY_RECORD_STATUSES"].map((status_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: status_0,
                                                                children: status_0
                                                            }, status_0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1727,
                                                                columnNumber: 65
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1723,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.metaTitle,
                                                        onChange: (event_74)=>setPropertyForm((prev_72)=>({
                                                                    ...prev_72,
                                                                    metaTitle: event_74.target.value
                                                                })),
                                                        className: propertyFieldClass("metaTitle"),
                                                        placeholder: "Meta Title"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1729,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        required: true,
                                                        value: propertyForm.metaDescription,
                                                        onChange: (event_75)=>setPropertyForm((prev_73)=>({
                                                                    ...prev_73,
                                                                    metaDescription: event_75.target.value
                                                                })),
                                                        className: `${propertyFieldClass("metaDescription")} md:col-span-2`,
                                                        rows: 2,
                                                        placeholder: "Meta Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1733,
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
                                                                        lineNumber: 1740,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: addFaqRow,
                                                                        className: "rounded-md border border-zinc-300 px-2 py-1 text-xs font-semibold text-zinc-700",
                                                                        children: "Add FAQ"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1741,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1739,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 space-y-3",
                                                                children: propertyForm.faqs.map((faq_4, index_4)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid gap-2 rounded-lg border border-zinc-200 p-3 md:grid-cols-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                value: faq_4.question,
                                                                                onChange: (event_76)=>updateFaq(index_4, "question", event_76.target.value),
                                                                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                                placeholder: "FAQ question"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1747,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                value: faq_4.answer,
                                                                                onChange: (event_77)=>updateFaq(index_4, "answer", event_77.target.value),
                                                                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                                                placeholder: "FAQ answer"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1748,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>removeFaqRow(index_4),
                                                                                className: "rounded-md border border-red-300 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700 md:col-span-2",
                                                                                children: "Remove FAQ"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1749,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, index_4, true, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1746,
                                                                        columnNumber: 68
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1745,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1738,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "md:col-span-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setShowPropertyPreview((prev_74)=>!prev_74),
                                                            className: "rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700",
                                                            children: showPropertyPreview ? "Hide Preview" : "Preview Property"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 1757,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1756,
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
                                                                lineNumber: 1763,
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
                                                                        lineNumber: 1765,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-zinc-600",
                                                                        children: propertyForm.fullAddress || "Address preview"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1766,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-zinc-700",
                                                                        children: propertyForm.shortDescription || "Short description preview"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1767,
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
                                                                        lineNumber: 1768,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1764,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1762,
                                                        columnNumber: 44
                                                    }, this) : null
                                                ]
                                            }, void 0, true) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sticky bottom-0 left-0 right-0 z-20 -mx-5 mt-2 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200 bg-white px-5 py-4 md:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: goToPreviousPropertyStep,
                                                                disabled: propertyStep === 0,
                                                                className: "rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 disabled:opacity-60",
                                                                children: "Back"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1777,
                                                                columnNumber: 21
                                                            }, this),
                                                            propertyStep < propertyWizardSteps.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: goToNextPropertyStep,
                                                                className: "rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white",
                                                                children: "Next"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1780,
                                                                columnNumber: 70
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                disabled: submittingProperty,
                                                                className: "rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-70",
                                                                children: submittingProperty ? "Saving..." : editingId ? "Update Property" : "Create Property"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1782,
                                                                columnNumber: 35
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1776,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    window.localStorage.setItem(PROPERTY_WIZARD_DRAFT_KEY, JSON.stringify(propertyForm));
                                                                    setMessage("Draft saved locally.");
                                                                },
                                                                className: "rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700",
                                                                children: "Save"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1787,
                                                                columnNumber: 21
                                                            }, this),
                                                            editingId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    setEditingId(null);
                                                                    setPropertyForm(initialPropertyForm);
                                                                    setSlugEditedManually(false);
                                                                    setShowPropertyPreview(false);
                                                                    setPropertyErrors({});
                                                                    setMapSearch("");
                                                                    setPropertyStep(0);
                                                                },
                                                                className: "rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700",
                                                                children: "Cancel Edit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1793,
                                                                columnNumber: 34
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1786,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1775,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1443,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1424,
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
                                        lineNumber: 1810,
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
                                                            lineNumber: 1813,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "mt-1 text-lg font-semibold text-zinc-900",
                                                            children: property_0.propertyTitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 1814,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-sm text-zinc-600",
                                                            children: [
                                                                property_0.propertyType,
                                                                " | ",
                                                                property_0.areaSector,
                                                                ", ",
                                                                property_0.city,
                                                                " | INR ",
                                                                property_0.price
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 1815,
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
                                                                    lineNumber: 1819,
                                                                    columnNumber: 23
                                                                }, this),
                                                                canDeleteProperty ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>deleteProperty(property_0._id),
                                                                    className: "rounded-md bg-red-600 px-3 py-1 text-xs font-semibold text-white",
                                                                    children: "Delete"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                                    lineNumber: 1822,
                                                                    columnNumber: 44
                                                                }, this) : null
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 1818,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, property_0._id, true, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 1812,
                                                    columnNumber: 47
                                                }, this)),
                                            properties.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "rounded-lg border border-zinc-200 p-4 text-sm text-zinc-700",
                                                children: "No properties found."
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1827,
                                                columnNumber: 44
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1811,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1809,
                                columnNumber: 39
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/CmsApp.tsx",
                        lineNumber: 1222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm lg:sticky lg:top-4 lg:h-fit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                children: "Details"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1833,
                                columnNumber: 11
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
                                                lineNumber: 1835,
                                                columnNumber: 24
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1835,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Total properties: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: properties.length
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1836,
                                                columnNumber: 34
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1836,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Managers: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: setup?.managerCount ?? 0
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1837,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1837,
                                        columnNumber: 13
                                    }, this),
                                    activeView === "propertyWizard" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Wizard step: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: [
                                                    propertyStep + 1,
                                                    "/",
                                                    propertyWizardSteps.length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1839,
                                                columnNumber: 30
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1838,
                                        columnNumber: 48
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-xs text-zinc-600",
                                        children: "Upload limits: Banner/property images must be 500KB or smaller."
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1841,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1834,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/CmsApp.tsx",
                        lineNumber: 1832,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/CmsApp.tsx",
                lineNumber: 1203,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/CmsApp.tsx",
        lineNumber: 1185,
        columnNumber: 10
    }, this);
}
_s(CmsApp, "qdBZMPbpZyvGyccqydqY9BdLYjA=");
_c = CmsApp;
var _c;
__turbopack_context__.k.register(_c, "CmsApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0yk9ysu._.js.map