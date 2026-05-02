(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
            setPropertyForm((prev)=>({
                    ...prev,
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
            setPropertyForm((prev_0)=>({
                    ...prev_0,
                    galleryImageUrls: [
                        ...prev_0.galleryImageUrls,
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
    async function handleBannerImageUpload(event_1) {
        const input_1 = event_1.currentTarget;
        const file_4 = input_1.files?.[0];
        if (!file_4) return;
        setBannerPreviewUrl(URL.createObjectURL(file_4));
        await uploadBannerImageFile(file_4);
        input_1.value = "";
    }
    async function uploadBannerImageFile(file_5) {
        setUploadingBannerImage(true);
        setMessage("");
        try {
            ensureValidImage(file_5, "Banner image", MAX_BANNER_IMAGE_UPLOAD_BYTES);
            const url_0 = await uploadSingleFile(file_5, "/riterealty/banner");
            setBannerImageMode("upload");
            setBannerPreviewUrl(url_0);
            setBannerForm((prev_1)=>({
                    ...prev_1,
                    imageUrl: url_0
                }));
            setMessage("Banner image uploaded.");
        } catch (error_1) {
            setMessage(error_1 instanceof Error ? error_1.message : "Banner upload failed.");
        } finally{
            setUploadingBannerImage(false);
        }
    }
    function handleBannerUploadDragOver(event_2) {
        const uploadBlockedByUrlMode = bannerImageMode === "url" && bannerForm.imageUrl.trim().length > 0;
        if (uploadBlockedByUrlMode) {
            return;
        }
        event_2.preventDefault();
        event_2.dataTransfer.dropEffect = "copy";
    }
    async function handleBannerUploadDrop(event_3) {
        event_3.preventDefault();
        const uploadBlockedByUrlMode_0 = bannerImageMode === "url" && bannerForm.imageUrl.trim().length > 0;
        if (uploadBlockedByUrlMode_0) {
            setMessage("Switch to Upload mode first to replace the image file.");
            return;
        }
        const file_6 = event_3.dataTransfer.files?.[0];
        if (!file_6) return;
        setBannerPreviewUrl(URL.createObjectURL(file_6));
        await uploadBannerImageFile(file_6);
    }
    async function handleLogin(event_4) {
        event_4.preventDefault();
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
    async function handleBootstrapAdmin(event_5) {
        event_5.preventDefault();
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
    async function handleBannerSubmit(event_6) {
        event_6.preventDefault();
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
        setBannerForm((prev_2)=>({
                ...prev_2,
                imageUrl: nextValue
            }));
        setBannerImageMode(nextValue.trim().length > 0 ? "url" : null);
    }
    function switchBannerImageMode(nextMode) {
        setBannerImageMode(nextMode);
        setBannerPreviewUrl(null);
        setBannerForm((prev_3)=>({
                ...prev_3,
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
    async function handleManagerCreate(event_7) {
        event_7.preventDefault();
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
    function validatePropertyStep(step) {
        if (step === 0) {
            if (!propertyForm.propertyTitle.trim()) return "Property title is required.";
            if (!propertyForm.price.trim()) return "Price is required.";
            if (!propertyForm.areaSize.trim()) return "Area size is required.";
            return "";
        }
        if (step === 1) {
            if (!propertyForm.city.trim()) return "City is required.";
            if (!propertyForm.areaSector.trim()) return "Area/Sector is required.";
            if (!propertyForm.fullAddress.trim()) return "Address is required.";
            if (!propertyForm.lat.trim() || !propertyForm.lng.trim()) return "Latitude and longitude are required.";
            if (!propertyForm.builderName.trim() || !propertyForm.projectName.trim()) {
                return "Builder and project name are required.";
            }
            return "";
        }
        if (step === 2) {
            if (!propertyForm.coverImageUrl.trim()) return "Cover image is required.";
            return "";
        }
        if (step === 3) {
            if (!propertyForm.shortDescription.trim()) return "Short description is required.";
            if (!propertyForm.detailedDescription.trim()) return "Detailed description is required.";
            if (!propertyForm.contactName.trim()) return "Contact name is required.";
            if (!propertyForm.phoneNumber.trim()) return "Phone number is required.";
            if (!propertyForm.whatsappNumber.trim()) return "WhatsApp number is required.";
            return "";
        }
        if (step === 4) {
            if (!propertyForm.metaTitle.trim()) return "Meta title is required.";
            if (!propertyForm.metaDescription.trim()) return "Meta description is required.";
            return "";
        }
        return "";
    }
    function goToNextPropertyStep() {
        const error_2 = validatePropertyStep(propertyStep);
        if (error_2) {
            setMessage(error_2);
            return;
        }
        setMessage("");
        setPropertyStep((prev_4)=>Math.min(prev_4 + 1, propertyWizardSteps.length - 1));
    }
    function goToPreviousPropertyStep() {
        setMessage("");
        setPropertyStep((prev_5)=>Math.max(prev_5 - 1, 0));
    }
    async function handlePropertySubmit(event_8) {
        event_8.preventDefault();
        setMessage("");
        for(let step_0 = 0; step_0 < propertyWizardSteps.length; step_0 += 1){
            const error_3 = validatePropertyStep(step_0);
            if (error_3) {
                setPropertyStep(step_0);
                setMessage(error_3);
                return;
            }
        }
        setSubmittingProperty(true);
        const payload_0 = {
            propertyTitle: propertyForm.propertyTitle,
            propertyType: propertyForm.propertyType,
            listingType: propertyForm.listingType,
            price: propertyForm.price,
            priceUnit: propertyForm.priceUnit,
            areaSize: propertyForm.areaSize,
            areaUnit: propertyForm.areaUnit,
            propertyCode: propertyForm.propertyCode,
            city: propertyForm.city,
            areaSector: propertyForm.areaSector,
            fullAddress: propertyForm.fullAddress,
            mapLocation: {
                lat: propertyForm.lat,
                lng: propertyForm.lng
            },
            builderName: propertyForm.builderName,
            projectName: propertyForm.projectName,
            projectStatus: propertyForm.projectStatus,
            possessionDate: propertyForm.possessionDate || null,
            reraNumber: propertyForm.reraNumber,
            flatConfig: {
                bhk: propertyForm.bhk,
                bathrooms: propertyForm.bathrooms,
                balconies: propertyForm.balconies,
                floorNumber: propertyForm.floorNumber,
                totalFloors: propertyForm.totalFloors
            },
            plotConfig: {
                plotArea: propertyForm.plotArea,
                facing: propertyForm.facing || null,
                roadWidth: propertyForm.roadWidth
            },
            coverImageUrl: propertyForm.coverImageUrl,
            galleryImageUrls: propertyForm.galleryImageUrls,
            videoUrl: propertyForm.videoUrl,
            view360Url: propertyForm.view360Url,
            shortDescription: propertyForm.shortDescription,
            detailedDescription: propertyForm.detailedDescription,
            keyHighlights: parseLines(propertyForm.keyHighlightsText),
            amenities: propertyForm.amenities,
            contactName: propertyForm.contactName,
            phoneNumber: propertyForm.phoneNumber,
            whatsappNumber: propertyForm.whatsappNumber,
            alternateNumber: propertyForm.alternateNumber,
            featuredProperty: propertyForm.featuredProperty,
            verifiedBadge: propertyForm.verifiedBadge,
            newLaunch: propertyForm.newLaunch,
            recordStatus: propertyForm.recordStatus,
            metaTitle: propertyForm.metaTitle,
            metaDescription: propertyForm.metaDescription,
            slug: propertyForm.slug || undefined
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
            setEditingId(null);
            setSubmittingProperty(false);
            await loadProperties();
        } catch (error_4) {
            setMessage(error_4 instanceof Error ? error_4.message : "Property save failed.");
            setSubmittingProperty(false);
        }
    }
    function startEdit(property) {
        setActiveView("propertyWizard");
        setPropertyStep(0);
        setEditingId(property._id);
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
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-zinc-600",
            children: "Loading CMS..."
        }, void 0, false, {
            fileName: "[project]/app/cms/CmsApp.tsx",
            lineNumber: 922,
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
                    lineNumber: 926,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm text-zinc-600",
                    children: setup?.adminExists ? "Login as admin or manager." : "No admin found. Create the first admin account."
                }, void 0, false, {
                    fileName: "[project]/app/cms/CmsApp.tsx",
                    lineNumber: 927,
                    columnNumber: 9
                }, this),
                !setup?.adminExists ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleBootstrapAdmin,
                    className: "mt-5 grid gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            value: bootstrapForm.name,
                            onChange: (event_9)=>setBootstrapForm((prev_6)=>({
                                        ...prev_6,
                                        name: event_9.target.value
                                    })),
                            placeholder: "Admin Name",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 931,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            type: "email",
                            value: bootstrapForm.email,
                            onChange: (event_10)=>setBootstrapForm((prev_7)=>({
                                        ...prev_7,
                                        email: event_10.target.value
                                    })),
                            placeholder: "Admin Email",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 935,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            type: "password",
                            value: bootstrapForm.password,
                            onChange: (event_11)=>setBootstrapForm((prev_8)=>({
                                        ...prev_8,
                                        password: event_11.target.value
                                    })),
                            placeholder: "Password (min 8)",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 939,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white",
                            children: "Create Admin"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 943,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/CmsApp.tsx",
                    lineNumber: 930,
                    columnNumber: 32
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleLogin,
                    className: "mt-5 grid gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            type: "email",
                            value: loginForm.email,
                            onChange: (event_12)=>setLoginForm((prev_9)=>({
                                        ...prev_9,
                                        email: event_12.target.value
                                    })),
                            placeholder: "Email",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 945,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            type: "password",
                            value: loginForm.password,
                            onChange: (event_13)=>setLoginForm((prev_10)=>({
                                        ...prev_10,
                                        password: event_13.target.value
                                    })),
                            placeholder: "Password",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 949,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white",
                            children: "Login"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 953,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/CmsApp.tsx",
                    lineNumber: 944,
                    columnNumber: 21
                }, this),
                message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-sm text-zinc-700",
                    children: message
                }, void 0, false, {
                    fileName: "[project]/app/cms/CmsApp.tsx",
                    lineNumber: 955,
                    columnNumber: 20
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/app/cms/CmsApp.tsx",
            lineNumber: 925,
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
                                    lineNumber: 962,
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
                                    lineNumber: 963,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 961,
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
                                    lineNumber: 966,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleLogout,
                                    className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm font-semibold text-zinc-700",
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 969,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 965,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/CmsApp.tsx",
                    lineNumber: 960,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/CmsApp.tsx",
                lineNumber: 959,
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
                                lineNumber: 978,
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
                                        lineNumber: 980,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveView("propertyWizard"),
                                        className: `rounded-lg px-3 py-2 text-left text-sm font-medium ${activeView === "propertyWizard" ? "bg-zinc-900 text-white" : "border border-zinc-300 text-zinc-700"}`,
                                        children: "Property Listing"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 983,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveView("records"),
                                        className: `rounded-lg px-3 py-2 text-left text-sm font-medium ${activeView === "records" ? "bg-zinc-900 text-white" : "border border-zinc-300 text-zinc-700"}`,
                                        children: "Records"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 986,
                                        columnNumber: 13
                                    }, this),
                                    isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveView("managers"),
                                        className: `rounded-lg px-3 py-2 text-left text-sm font-medium ${activeView === "managers" ? "bg-zinc-900 text-white" : "border border-zinc-300 text-zinc-700"}`,
                                        children: "Managers"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 989,
                                        columnNumber: 24
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 979,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/CmsApp.tsx",
                        lineNumber: 977,
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
                                                        lineNumber: 999,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-sm text-zinc-600",
                                                        children: editingBannerId ? "Editing saved campaign banner." : "Create banner content with the same wizard feel."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1000,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 998,
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
                                                        lineNumber: 1005,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white",
                                                        children: editingBannerId ? "Live Editor" : "Draft"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1006,
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
                                                        lineNumber: 1009,
                                                        columnNumber: 38
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1004,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 997,
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
                                        lineNumber: 1021,
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
                                                                lineNumber: 1028,
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
                                                                        lineNumber: 1030,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: "banner-project-name",
                                                                        required: true,
                                                                        value: bannerForm.projectName,
                                                                        onChange: (event_14)=>setBannerForm((prev_11)=>({
                                                                                    ...prev_11,
                                                                                    projectName: event_14.target.value
                                                                                })),
                                                                        className: "w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm",
                                                                        placeholder: "Project name"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1033,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-zinc-800",
                                                                        htmlFor: "banner-title",
                                                                        children: "Banner Headline"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1038,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: "banner-title",
                                                                        required: true,
                                                                        value: bannerForm.title,
                                                                        onChange: (event_15)=>setBannerForm((prev_12)=>({
                                                                                    ...prev_12,
                                                                                    title: event_15.target.value
                                                                                })),
                                                                        className: "w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm",
                                                                        placeholder: "Banner headline"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1041,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-zinc-800",
                                                                        htmlFor: "banner-subtitle",
                                                                        children: "Sub-headline"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1046,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                        id: "banner-subtitle",
                                                                        required: true,
                                                                        value: bannerForm.subtitle,
                                                                        onChange: (event_16)=>setBannerForm((prev_13)=>({
                                                                                    ...prev_13,
                                                                                    subtitle: event_16.target.value
                                                                                })),
                                                                        className: "w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm",
                                                                        rows: 4,
                                                                        placeholder: "Support text for your campaign"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1049,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1029,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1027,
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
                                                                lineNumber: 1057,
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
                                                                lineNumber: 1058,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "banner-upload-input",
                                                                onDragOver: handleBannerUploadDragOver,
                                                                onDrop: (event_17)=>void handleBannerUploadDrop(event_17),
                                                                className: `mt-4 block rounded-2xl border-2 border-dashed px-4 py-12 text-center ${bannerImageMode === "url" && bannerForm.imageUrl.trim().length > 0 ? "cursor-not-allowed border-zinc-300 bg-zinc-100 text-zinc-500" : "border-sky-500 bg-gradient-to-br from-sky-50 via-blue-50 to-sky-100 text-zinc-700"}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "block text-lg font-semibold",
                                                                        children: "Upload or drag & drop high-res banner asset"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1060,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-2 inline-flex rounded-full border border-sky-300 bg-white px-3 py-1 text-xs font-semibold text-sky-700",
                                                                        children: "Click to choose file"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1061,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-2 block text-sm",
                                                                        children: "JPEG, PNG, WEBP (Max 5MB)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1064,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    uploadingBannerImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-2 block text-xs font-semibold",
                                                                        children: "Uploading..."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1065,
                                                                        columnNumber: 47
                                                                    }, this) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1059,
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
                                                                        lineNumber: 1069,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: "banner-image-url",
                                                                        value: bannerForm.imageUrl,
                                                                        disabled: bannerImageMode === "upload" && bannerForm.imageUrl.trim().length > 0,
                                                                        onChange: (event_18)=>handleBannerImageUrlChange(event_18.target.value),
                                                                        className: "mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm disabled:bg-zinc-100 disabled:text-zinc-500",
                                                                        placeholder: "https://..."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1072,
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
                                                                    lineNumber: 1076,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1075,
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
                                                                        lineNumber: 1080,
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
                                                                        lineNumber: 1081,
                                                                        columnNumber: 54
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>switchBannerImageMode("url"),
                                                                        className: "ml-2 rounded border border-zinc-300 bg-white px-2 py-1 font-semibold text-zinc-700 transition hover:bg-zinc-100",
                                                                        children: "Switch to URL"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1083,
                                                                        columnNumber: 39
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1079,
                                                                columnNumber: 40
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1056,
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
                                                                lineNumber: 1090,
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
                                                                                lineNumber: 1093,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "inline-flex cursor-pointer items-center",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "checkbox",
                                                                                        checked: bannerForm.showCta,
                                                                                        onChange: (event_19)=>setBannerForm((prev_14)=>({
                                                                                                    ...prev_14,
                                                                                                    showCta: event_19.target.checked
                                                                                                })),
                                                                                        className: "peer sr-only"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                        lineNumber: 1095,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "relative h-6 w-11 rounded-full bg-zinc-300 transition peer-checked:bg-blue-600 peer-checked:after:translate-x-5 after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                        lineNumber: 1099,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1094,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1092,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-zinc-800",
                                                                        htmlFor: "banner-cta-label",
                                                                        children: "Button Label"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1103,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: "banner-cta-label",
                                                                        required: bannerForm.showCta,
                                                                        disabled: !bannerForm.showCta,
                                                                        value: bannerForm.ctaLabel,
                                                                        onChange: (event_20)=>setBannerForm((prev_15)=>({
                                                                                    ...prev_15,
                                                                                    ctaLabel: event_20.target.value
                                                                                })),
                                                                        className: "w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm disabled:bg-zinc-100 disabled:text-zinc-500",
                                                                        placeholder: "Download Price List"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1106,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-zinc-800",
                                                                        htmlFor: "banner-cta-href",
                                                                        children: "Button Link"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1111,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: "banner-cta-href",
                                                                        required: bannerForm.showCta,
                                                                        disabled: !bannerForm.showCta,
                                                                        value: bannerForm.ctaHref,
                                                                        onChange: (event_21)=>setBannerForm((prev_16)=>({
                                                                                    ...prev_16,
                                                                                    ctaHref: event_21.target.value
                                                                                })),
                                                                        className: "w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm disabled:bg-zinc-100 disabled:text-zinc-500",
                                                                        placeholder: "/project/slug"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1114,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "mt-3 flex items-center gap-2 text-sm text-zinc-700",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                checked: bannerForm.slideEnabled,
                                                                                onChange: (event_22)=>setBannerForm((prev_17)=>({
                                                                                            ...prev_17,
                                                                                            slideEnabled: event_22.target.checked
                                                                                        }))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1120,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            "Enable homepage auto slider"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1119,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1091,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1089,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1026,
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
                                                        lineNumber: 1131,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        disabled: !editingBannerId && banners.length >= 6,
                                                        className: "rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:bg-zinc-400",
                                                        children: editingBannerId ? "Update Banner" : "Publish Banner"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1136,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1130,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1025,
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
                                                lineNumber: 1143,
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
                                                                        lineNumber: 1147,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-zinc-600",
                                                                        children: banner_1.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1148,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1146,
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
                                                                        lineNumber: 1151,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    banner_1.showCta !== false ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700",
                                                                        children: banner_1.ctaLabel
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1154,
                                                                        columnNumber: 57
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "rounded-full bg-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600",
                                                                        children: "CTA Hidden"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1156,
                                                                        columnNumber: 39
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>void handleBannerDelete(banner_1._id),
                                                                        className: "rounded-lg border border-red-300 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700 transition hover:bg-red-100",
                                                                        children: "Delete"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1159,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1150,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, banner_1._id, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1145,
                                                        columnNumber: 46
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1144,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1142,
                                        columnNumber: 37
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 996,
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
                                        lineNumber: 1169,
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
                                        lineNumber: 1170,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleManagerCreate,
                                        className: "mt-4 grid gap-3 md:grid-cols-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                value: managerForm.name,
                                                onChange: (event_23)=>setManagerForm((prev_18)=>({
                                                            ...prev_18,
                                                            name: event_23.target.value
                                                        })),
                                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                placeholder: "Manager name"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1172,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                type: "email",
                                                value: managerForm.email,
                                                onChange: (event_24)=>setManagerForm((prev_19)=>({
                                                            ...prev_19,
                                                            email: event_24.target.value
                                                        })),
                                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                placeholder: "Manager email"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1176,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                type: "password",
                                                value: managerForm.password,
                                                onChange: (event_25)=>setManagerForm((prev_20)=>({
                                                            ...prev_20,
                                                            password: event_25.target.value
                                                        })),
                                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                placeholder: "Password"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1180,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white md:col-span-3",
                                                children: "Create Manager"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1184,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1171,
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
                                                lineNumber: 1189,
                                                columnNumber: 43
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1188,
                                        columnNumber: 37
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1168,
                                columnNumber: 50
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm",
                                children: "Only admins can manage manager accounts."
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1193,
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
                                        lineNumber: 1198,
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
                                        lineNumber: 1199,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 grid grid-cols-5 gap-2",
                                        children: propertyWizardSteps.map((step_1, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setPropertyStep(index),
                                                className: `rounded-lg px-2 py-2 text-xs font-medium ${index === propertyStep ? "bg-zinc-900 text-white" : index < propertyStep ? "bg-zinc-200 text-zinc-900" : "border border-zinc-300 text-zinc-700"}`,
                                                children: [
                                                    index + 1,
                                                    ". ",
                                                    step_1
                                                ]
                                            }, step_1, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1204,
                                                columnNumber: 61
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1203,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handlePropertySubmit,
                                        className: "mt-5 grid gap-3 md:grid-cols-2",
                                        children: [
                                            propertyStep === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.propertyTitle,
                                                        onChange: (event_26)=>setPropertyForm((prev_21)=>({
                                                                    ...prev_21,
                                                                    propertyTitle: event_26.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "Property Title"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1211,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: propertyForm.slug,
                                                        onChange: (event_27)=>setPropertyForm((prev_22)=>({
                                                                    ...prev_22,
                                                                    slug: event_27.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "Slug (optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1215,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: propertyForm.propertyType,
                                                        onChange: (event_28)=>setPropertyForm((prev_23)=>({
                                                                    ...prev_23,
                                                                    propertyType: event_28.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROPERTY_TYPES"].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: type,
                                                                children: type
                                                            }, type, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1223,
                                                                columnNumber: 51
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1219,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: propertyForm.listingType,
                                                        onChange: (event_29)=>setPropertyForm((prev_24)=>({
                                                                    ...prev_24,
                                                                    listingType: event_29.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LISTING_TYPES"].map((type_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: type_0,
                                                                children: type_0
                                                            }, type_0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1229,
                                                                columnNumber: 52
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1225,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.price,
                                                        onChange: (event_30)=>setPropertyForm((prev_25)=>({
                                                                    ...prev_25,
                                                                    price: event_30.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "Price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1231,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: propertyForm.priceUnit,
                                                        onChange: (event_31)=>setPropertyForm((prev_26)=>({
                                                                    ...prev_26,
                                                                    priceUnit: event_31.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRICE_UNITS"].map((unit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: unit,
                                                                children: unit
                                                            }, unit, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1239,
                                                                columnNumber: 48
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1235,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.areaSize,
                                                        onChange: (event_32)=>setPropertyForm((prev_27)=>({
                                                                    ...prev_27,
                                                                    areaSize: event_32.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "Area Size"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1241,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: propertyForm.areaUnit,
                                                        onChange: (event_33)=>setPropertyForm((prev_28)=>({
                                                                    ...prev_28,
                                                                    areaUnit: event_33.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AREA_UNITS"].map((unit_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: unit_0,
                                                                children: unit_0
                                                            }, unit_0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1249,
                                                                columnNumber: 49
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1245,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: propertyForm.propertyCode,
                                                        onChange: (event_34)=>setPropertyForm((prev_29)=>({
                                                                    ...prev_29,
                                                                    propertyCode: event_34.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                                        placeholder: "Property Code (optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1251,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true) : null,
                                            propertyStep === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.city,
                                                        onChange: (event_35)=>setPropertyForm((prev_30)=>({
                                                                    ...prev_30,
                                                                    city: event_35.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "City"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1258,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.areaSector,
                                                        onChange: (event_36)=>setPropertyForm((prev_31)=>({
                                                                    ...prev_31,
                                                                    areaSector: event_36.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "Area/Sector"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1262,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.fullAddress,
                                                        onChange: (event_37)=>setPropertyForm((prev_32)=>({
                                                                    ...prev_32,
                                                                    fullAddress: event_37.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                                        placeholder: "Full Address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1266,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.lat,
                                                        onChange: (event_38)=>setPropertyForm((prev_33)=>({
                                                                    ...prev_33,
                                                                    lat: event_38.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "Latitude"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1270,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.lng,
                                                        onChange: (event_39)=>setPropertyForm((prev_34)=>({
                                                                    ...prev_34,
                                                                    lng: event_39.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "Longitude"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1274,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.builderName,
                                                        onChange: (event_40)=>setPropertyForm((prev_35)=>({
                                                                    ...prev_35,
                                                                    builderName: event_40.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "Builder Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1278,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.projectName,
                                                        onChange: (event_41)=>setPropertyForm((prev_36)=>({
                                                                    ...prev_36,
                                                                    projectName: event_41.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "Project Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1282,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: propertyForm.projectStatus,
                                                        onChange: (event_42)=>setPropertyForm((prev_37)=>({
                                                                    ...prev_37,
                                                                    projectStatus: event_42.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECT_STATUSES"].map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: status,
                                                                children: status
                                                            }, status, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1290,
                                                                columnNumber: 55
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1286,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: propertyForm.possessionDate,
                                                        onChange: (event_43)=>setPropertyForm((prev_38)=>({
                                                                    ...prev_38,
                                                                    possessionDate: event_43.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1292,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: propertyForm.reraNumber,
                                                        onChange: (event_44)=>setPropertyForm((prev_39)=>({
                                                                    ...prev_39,
                                                                    reraNumber: event_44.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                                        placeholder: "RERA (optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1296,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true) : null,
                                            propertyStep === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: propertyForm.bhk,
                                                        onChange: (event_45)=>setPropertyForm((prev_40)=>({
                                                                    ...prev_40,
                                                                    bhk: event_45.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "BHK"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1303,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: propertyForm.bathrooms,
                                                        onChange: (event_46)=>setPropertyForm((prev_41)=>({
                                                                    ...prev_41,
                                                                    bathrooms: event_46.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "Bathrooms"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1307,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: propertyForm.balconies,
                                                        onChange: (event_47)=>setPropertyForm((prev_42)=>({
                                                                    ...prev_42,
                                                                    balconies: event_47.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "Balconies"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1311,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: propertyForm.floorNumber,
                                                        onChange: (event_48)=>setPropertyForm((prev_43)=>({
                                                                    ...prev_43,
                                                                    floorNumber: event_48.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "Floor No."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1315,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: propertyForm.totalFloors,
                                                        onChange: (event_49)=>setPropertyForm((prev_44)=>({
                                                                    ...prev_44,
                                                                    totalFloors: event_49.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "Total Floors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1319,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: propertyForm.plotArea,
                                                        onChange: (event_50)=>setPropertyForm((prev_45)=>({
                                                                    ...prev_45,
                                                                    plotArea: event_50.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "Plot Area"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1323,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: propertyForm.facing,
                                                        onChange: (event_51)=>setPropertyForm((prev_46)=>({
                                                                    ...prev_46,
                                                                    facing: event_51.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Facing"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1331,
                                                                columnNumber: 23
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FACING_OPTIONS"].map((facing)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: facing,
                                                                    children: facing
                                                                }, facing, false, {
                                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                                    lineNumber: 1332,
                                                                    columnNumber: 53
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1327,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: propertyForm.roadWidth,
                                                        onChange: (event_52)=>setPropertyForm((prev_47)=>({
                                                                    ...prev_47,
                                                                    roadWidth: event_52.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "Road Width"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1334,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.coverImageUrl,
                                                        onChange: (event_53)=>setPropertyForm((prev_48)=>({
                                                                    ...prev_48,
                                                                    coverImageUrl: event_53.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                                        placeholder: "Cover Image URL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1338,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                                        children: [
                                                            "Upload Cover Image (max 500KB)",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                accept: "image/*",
                                                                onChange: handleCoverUpload,
                                                                className: "mt-2 block w-full text-sm"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1344,
                                                                columnNumber: 23
                                                            }, this),
                                                            uploadingCover ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 block text-xs",
                                                                children: "Uploading..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1345,
                                                                columnNumber: 41
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1342,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                                        children: [
                                                            "Upload Gallery Images (max 500KB each)",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                accept: "image/*",
                                                                multiple: true,
                                                                onChange: handleGalleryUpload,
                                                                className: "mt-2 block w-full text-sm"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1349,
                                                                columnNumber: 23
                                                            }, this),
                                                            uploadingGallery ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 block text-xs",
                                                                children: "Uploading..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1350,
                                                                columnNumber: 43
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1347,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-xs text-zinc-700 md:col-span-2",
                                                        children: [
                                                            "Gallery URLs: ",
                                                            propertyForm.galleryImageUrls.join(", ") || "none"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1352,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: propertyForm.videoUrl,
                                                        onChange: (event_54)=>setPropertyForm((prev_49)=>({
                                                                    ...prev_49,
                                                                    videoUrl: event_54.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "Video URL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1355,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: propertyForm.view360Url,
                                                        onChange: (event_55)=>setPropertyForm((prev_50)=>({
                                                                    ...prev_50,
                                                                    view360Url: event_55.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "360 URL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1359,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true) : null,
                                            propertyStep === 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        required: true,
                                                        value: propertyForm.shortDescription,
                                                        onChange: (event_56)=>setPropertyForm((prev_51)=>({
                                                                    ...prev_51,
                                                                    shortDescription: event_56.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                                        rows: 2,
                                                        placeholder: "Short Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1366,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        required: true,
                                                        value: propertyForm.detailedDescription,
                                                        onChange: (event_57)=>setPropertyForm((prev_52)=>({
                                                                    ...prev_52,
                                                                    detailedDescription: event_57.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                                        rows: 4,
                                                        placeholder: "Detailed Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1370,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        value: propertyForm.keyHighlightsText,
                                                        onChange: (event_58)=>setPropertyForm((prev_53)=>({
                                                                    ...prev_53,
                                                                    keyHighlightsText: event_58.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                                        rows: 3,
                                                        placeholder: "Highlights (one per line)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1374,
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
                                                                lineNumber: 1379,
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
                                                                                onChange: (event_59)=>setPropertyForm((prev_54)=>({
                                                                                            ...prev_54,
                                                                                            amenities: event_59.target.checked ? [
                                                                                                ...prev_54.amenities,
                                                                                                amenity
                                                                                            ] : prev_54.amenities.filter((item)=>item !== amenity)
                                                                                        }))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                                lineNumber: 1382,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            amenity
                                                                        ]
                                                                    }, amenity, true, {
                                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                                        lineNumber: 1381,
                                                                        columnNumber: 57
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1380,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1378,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.contactName,
                                                        onChange: (event_60)=>setPropertyForm((prev_55)=>({
                                                                    ...prev_55,
                                                                    contactName: event_60.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "Contact Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1390,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.phoneNumber,
                                                        onChange: (event_61)=>setPropertyForm((prev_56)=>({
                                                                    ...prev_56,
                                                                    phoneNumber: event_61.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "Phone Number"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1394,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.whatsappNumber,
                                                        onChange: (event_62)=>setPropertyForm((prev_57)=>({
                                                                    ...prev_57,
                                                                    whatsappNumber: event_62.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "WhatsApp Number"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1398,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: propertyForm.alternateNumber,
                                                        onChange: (event_63)=>setPropertyForm((prev_58)=>({
                                                                    ...prev_58,
                                                                    alternateNumber: event_63.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "Alternate Number"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1402,
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
                                                                onChange: (event_64)=>setPropertyForm((prev_59)=>({
                                                                            ...prev_59,
                                                                            featuredProperty: event_64.target.checked
                                                                        }))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1410,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Featured"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1409,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 text-sm text-zinc-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: propertyForm.verifiedBadge,
                                                                onChange: (event_65)=>setPropertyForm((prev_60)=>({
                                                                            ...prev_60,
                                                                            verifiedBadge: event_65.target.checked
                                                                        }))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1417,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Verified"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1416,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 text-sm text-zinc-700 md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: propertyForm.newLaunch,
                                                                onChange: (event_66)=>setPropertyForm((prev_61)=>({
                                                                            ...prev_61,
                                                                            newLaunch: event_66.target.checked
                                                                        }))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1424,
                                                                columnNumber: 23
                                                            }, this),
                                                            "New Launch"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1423,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: propertyForm.recordStatus,
                                                        onChange: (event_67)=>setPropertyForm((prev_62)=>({
                                                                    ...prev_62,
                                                                    recordStatus: event_67.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROPERTY_RECORD_STATUSES"].map((status_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: status_0,
                                                                children: status_0
                                                            }, status_0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1434,
                                                                columnNumber: 65
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1430,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: propertyForm.metaTitle,
                                                        onChange: (event_68)=>setPropertyForm((prev_63)=>({
                                                                    ...prev_63,
                                                                    metaTitle: event_68.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                                        placeholder: "Meta Title"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1436,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        required: true,
                                                        value: propertyForm.metaDescription,
                                                        onChange: (event_69)=>setPropertyForm((prev_64)=>({
                                                                    ...prev_64,
                                                                    metaDescription: event_69.target.value
                                                                })),
                                                        className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                                        rows: 2,
                                                        placeholder: "Meta Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1440,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 flex flex-wrap items-center justify-between gap-2 md:col-span-2",
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
                                                                lineNumber: 1448,
                                                                columnNumber: 21
                                                            }, this),
                                                            propertyStep < propertyWizardSteps.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: goToNextPropertyStep,
                                                                className: "rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white",
                                                                children: "Next Step"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1451,
                                                                columnNumber: 70
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                disabled: submittingProperty,
                                                                className: "rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-70",
                                                                children: submittingProperty ? "Saving..." : editingId ? "Update Property" : "Create Property"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                                lineNumber: 1453,
                                                                columnNumber: 35
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1447,
                                                        columnNumber: 19
                                                    }, this),
                                                    editingId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            setEditingId(null);
                                                            setPropertyForm(initialPropertyForm);
                                                            setPropertyStep(0);
                                                        },
                                                        className: "rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700",
                                                        children: "Cancel Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 1457,
                                                        columnNumber: 32
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1446,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1209,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1197,
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
                                        lineNumber: 1469,
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
                                                            lineNumber: 1472,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "mt-1 text-lg font-semibold text-zinc-900",
                                                            children: property_0.propertyTitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 1473,
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
                                                            lineNumber: 1474,
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
                                                                    lineNumber: 1478,
                                                                    columnNumber: 23
                                                                }, this),
                                                                canDeleteProperty ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>deleteProperty(property_0._id),
                                                                    className: "rounded-md bg-red-600 px-3 py-1 text-xs font-semibold text-white",
                                                                    children: "Delete"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                                    lineNumber: 1481,
                                                                    columnNumber: 44
                                                                }, this) : null
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                                            lineNumber: 1477,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, property_0._id, true, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 1471,
                                                    columnNumber: 47
                                                }, this)),
                                            properties.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "rounded-lg border border-zinc-200 p-4 text-sm text-zinc-700",
                                                children: "No properties found."
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 1486,
                                                columnNumber: 44
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1470,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1468,
                                columnNumber: 39
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/CmsApp.tsx",
                        lineNumber: 995,
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
                                lineNumber: 1492,
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
                                                lineNumber: 1494,
                                                columnNumber: 24
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1494,
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
                                                lineNumber: 1495,
                                                columnNumber: 34
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1495,
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
                                                lineNumber: 1496,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1496,
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
                                                lineNumber: 1498,
                                                columnNumber: 30
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1497,
                                        columnNumber: 48
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-xs text-zinc-600",
                                        children: "Upload limits: Banner/property images must be 500KB or smaller."
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 1500,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1493,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/CmsApp.tsx",
                        lineNumber: 1491,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/CmsApp.tsx",
                lineNumber: 976,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/CmsApp.tsx",
        lineNumber: 958,
        columnNumber: 10
    }, this);
}
_s(CmsApp, "+fG8MCjf26BETXOFbJeS67pe+lw=");
_c = CmsApp;
var _c;
__turbopack_context__.k.register(_c, "CmsApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0xm08ur._.js.map