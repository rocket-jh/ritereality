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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$imagekit$2f$next$2f$dist$2f$client$2f$index$2d$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@imagekit/next/dist/client/index-esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$imagekit$2f$javascript$2f$dist$2f$imagekit$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@imagekit/javascript/dist/imagekit.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    slug: ""
};
function parseLines(value) {
    return value.split("\n").map((entry)=>entry.trim()).filter((entry)=>entry.length > 0);
}
const MAX_IMAGE_UPLOAD_BYTES = 500 * 1024;
const propertyWizardSteps = [
    "Basics",
    "Location",
    "Media",
    "Content",
    "SEO & Publish"
];
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
    const [bannerForm, setBannerForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        projectName: "Rite Realty",
        title: "",
        subtitle: "",
        imageUrl: "",
        ctaLabel: "Explore Projects",
        ctaHref: "/projects/new-launch"
    });
    const [propertyForm, setPropertyForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialPropertyForm);
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
            if (!isAdmin) {
                return;
            }
            const response_0 = await fetch("/api/users", {
                cache: "no-store"
            });
            if (!response_0.ok) {
                return;
            }
            const data_0 = await response_0.json();
            setUsers(data_0.users);
        }
    }["CmsApp.useCallback[loadUsers]"], [
        isAdmin
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CmsApp.useEffect": ()=>{
            void initialize();
        }
    }["CmsApp.useEffect"], [
        initialize
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CmsApp.useEffect": ()=>{
            if (!user) {
                return;
            }
            void loadProperties();
            void loadUsers();
        }
    }["CmsApp.useEffect"], [
        user,
        isAdmin,
        loadProperties,
        loadUsers
    ]);
    function ensureValidImage(file, label) {
        if (!file.type.startsWith("image/")) {
            throw new Error(`${label} must be an image file.`);
        }
        if (file.size > MAX_IMAGE_UPLOAD_BYTES) {
            throw new Error(`${label} must be 500KB or smaller.`);
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
        if (!file_1) {
            return;
        }
        setUploadingCover(true);
        setMessage("");
        try {
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
        if (files.length === 0) {
            return;
        }
        setUploadingGallery(true);
        setMessage("");
        try {
            const uploaded = await Promise.all(files.map((file_2)=>uploadSingleFile(file_2, "/riterealty/properties/gallery")));
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
    async function handleLogin(event_1) {
        event_1.preventDefault();
        setMessage("");
        const response_1 = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginForm)
        });
        const data_1 = await response_1.json();
        if (!response_1.ok || !data_1.user) {
            setMessage(data_1.error ?? "Login failed.");
            return;
        }
        setUser(data_1.user);
        setLoginForm({
            email: "",
            password: ""
        });
        setMessage("Logged in.");
    }
    async function handleBootstrapAdmin(event_2) {
        event_2.preventDefault();
        setMessage("");
        const response_2 = await fetch("/api/auth/bootstrap-admin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bootstrapForm)
        });
        const data_2 = await response_2.json();
        if (!response_2.ok || !data_2.user) {
            setMessage(data_2.error ?? "Could not create admin.");
            return;
        }
        setUser(data_2.user);
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
    async function handleBannerSubmit(event_3) {
        event_3.preventDefault();
        setMessage("");
        const response_3 = await fetch("/api/banner", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bannerForm)
        });
        const data_3 = await response_3.json();
        if (!response_3.ok) {
            setMessage(data_3.error ?? "Banner update failed.");
            return;
        }
        setMessage("Banner updated.");
    }
    async function handleManagerCreate(event_4) {
        event_4.preventDefault();
        setMessage("");
        const response_4 = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...managerForm,
                role: "manager"
            })
        });
        const data_4 = await response_4.json();
        if (!response_4.ok) {
            setMessage(data_4.error ?? "Could not create manager.");
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
    async function handlePropertySubmit(event_5) {
        event_5.preventDefault();
        setSubmittingProperty(true);
        setMessage("");
        const payload = {
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
        const endpoint = editingId ? `/api/properties/${editingId}` : "/api/properties";
        const method = editingId ? "PUT" : "POST";
        const response_5 = await fetch(endpoint, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        const data_5 = await response_5.json();
        if (!response_5.ok) {
            setMessage(data_5.error ?? "Property save failed.");
            setSubmittingProperty(false);
            return;
        }
        setMessage(editingId ? "Property updated." : "Property created.");
        setPropertyForm(initialPropertyForm);
        setEditingId(null);
        setSubmittingProperty(false);
        await loadProperties();
    }
    function startEdit(property) {
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
    async function deleteProperty(id) {
        if (!canDeleteProperty) {
            return;
        }
        if (!window.confirm("Delete this property?")) {
            return;
        }
        const response_6 = await fetch(`/api/properties/${id}`, {
            method: "DELETE"
        });
        const data_6 = await response_6.json();
        if (!response_6.ok) {
            setMessage(data_6.error ?? "Delete failed.");
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
            lineNumber: 617,
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
                    lineNumber: 621,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm text-zinc-600",
                    children: setup?.adminExists ? "Login as admin or manager." : "No admin found. Create the first admin account."
                }, void 0, false, {
                    fileName: "[project]/app/cms/CmsApp.tsx",
                    lineNumber: 622,
                    columnNumber: 9
                }, this),
                !setup?.adminExists ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleBootstrapAdmin,
                    className: "mt-5 grid gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            value: bootstrapForm.name,
                            onChange: (event_6)=>setBootstrapForm((prev_1)=>({
                                        ...prev_1,
                                        name: event_6.target.value
                                    })),
                            placeholder: "Admin Name",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 627,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            type: "email",
                            value: bootstrapForm.email,
                            onChange: (event_7)=>setBootstrapForm((prev_2)=>({
                                        ...prev_2,
                                        email: event_7.target.value
                                    })),
                            placeholder: "Admin Email",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 631,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            type: "password",
                            value: bootstrapForm.password,
                            onChange: (event_8)=>setBootstrapForm((prev_3)=>({
                                        ...prev_3,
                                        password: event_8.target.value
                                    })),
                            placeholder: "Password (min 8)",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 635,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white",
                            children: "Create Admin"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 639,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/CmsApp.tsx",
                    lineNumber: 626,
                    columnNumber: 32
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleLogin,
                    className: "mt-5 grid gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            type: "email",
                            value: loginForm.email,
                            onChange: (event_9)=>setLoginForm((prev_4)=>({
                                        ...prev_4,
                                        email: event_9.target.value
                                    })),
                            placeholder: "Email",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 643,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            type: "password",
                            value: loginForm.password,
                            onChange: (event_10)=>setLoginForm((prev_5)=>({
                                        ...prev_5,
                                        password: event_10.target.value
                                    })),
                            placeholder: "Password",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 647,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white",
                            children: "Login"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/CmsApp.tsx",
                            lineNumber: 651,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/CmsApp.tsx",
                    lineNumber: 642,
                    columnNumber: 21
                }, this),
                message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-sm text-zinc-700",
                    children: message
                }, void 0, false, {
                    fileName: "[project]/app/cms/CmsApp.tsx",
                    lineNumber: 656,
                    columnNumber: 20
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/app/cms/CmsApp.tsx",
            lineNumber: 620,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-semibold text-zinc-900",
                                        children: "Rite Realty CMS"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 663,
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
                                        lineNumber: 664,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 662,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleLogout,
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm font-semibold text-zinc-700",
                                children: "Logout"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 668,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/CmsApp.tsx",
                        lineNumber: 661,
                        columnNumber: 9
                    }, this),
                    message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-sm text-zinc-700",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/app/cms/CmsApp.tsx",
                        lineNumber: 672,
                        columnNumber: 20
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/CmsApp.tsx",
                lineNumber: 660,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-zinc-900",
                        children: "Latest Project Banner"
                    }, void 0, false, {
                        fileName: "[project]/app/cms/CmsApp.tsx",
                        lineNumber: 676,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleBannerSubmit,
                        className: "mt-4 grid gap-3 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: bannerForm.projectName,
                                onChange: (event_11)=>setBannerForm((prev_6)=>({
                                            ...prev_6,
                                            projectName: event_11.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Project name"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 678,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: bannerForm.title,
                                onChange: (event_12)=>setBannerForm((prev_7)=>({
                                            ...prev_7,
                                            title: event_12.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Banner title"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 682,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: bannerForm.subtitle,
                                onChange: (event_13)=>setBannerForm((prev_8)=>({
                                            ...prev_8,
                                            subtitle: event_13.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                placeholder: "Subtitle"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 686,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: bannerForm.imageUrl,
                                onChange: (event_14)=>setBannerForm((prev_9)=>({
                                            ...prev_9,
                                            imageUrl: event_14.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                placeholder: "Image URL"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 690,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: bannerForm.ctaLabel,
                                onChange: (event_15)=>setBannerForm((prev_10)=>({
                                            ...prev_10,
                                            ctaLabel: event_15.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "CTA label"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 694,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: bannerForm.ctaHref,
                                onChange: (event_16)=>setBannerForm((prev_11)=>({
                                            ...prev_11,
                                            ctaHref: event_16.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "CTA href"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 698,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white md:col-span-2",
                                children: "Update Banner"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 702,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/CmsApp.tsx",
                        lineNumber: 677,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/CmsApp.tsx",
                lineNumber: 675,
                columnNumber: 7
            }, this),
            isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-zinc-900",
                        children: "Manager Accounts"
                    }, void 0, false, {
                        fileName: "[project]/app/cms/CmsApp.tsx",
                        lineNumber: 709,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-zinc-600",
                        children: [
                            "Limit: 2 managers. Current: ",
                            setup?.managerCount ?? 0
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/CmsApp.tsx",
                        lineNumber: 710,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleManagerCreate,
                        className: "mt-4 grid gap-3 md:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: managerForm.name,
                                onChange: (event_17)=>setManagerForm((prev_12)=>({
                                            ...prev_12,
                                            name: event_17.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Manager name"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 714,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                type: "email",
                                value: managerForm.email,
                                onChange: (event_18)=>setManagerForm((prev_13)=>({
                                            ...prev_13,
                                            email: event_18.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Manager email"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 718,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                type: "password",
                                value: managerForm.password,
                                onChange: (event_19)=>setManagerForm((prev_14)=>({
                                            ...prev_14,
                                            password: event_19.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Password"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 722,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white md:col-span-3",
                                children: "Create Manager"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 726,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/CmsApp.tsx",
                        lineNumber: 713,
                        columnNumber: 11
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
                                lineNumber: 732,
                                columnNumber: 37
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/cms/CmsApp.tsx",
                        lineNumber: 731,
                        columnNumber: 31
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/CmsApp.tsx",
                lineNumber: 708,
                columnNumber: 18
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-zinc-900",
                        children: editingId ? "Edit Property" : "Add Property"
                    }, void 0, false, {
                        fileName: "[project]/app/cms/CmsApp.tsx",
                        lineNumber: 739,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-zinc-600",
                        children: "Full property CMS form with SEO, media, amenities, lead and status controls."
                    }, void 0, false, {
                        fileName: "[project]/app/cms/CmsApp.tsx",
                        lineNumber: 742,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handlePropertySubmit,
                        className: "mt-4 grid gap-3 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: propertyForm.propertyTitle,
                                onChange: (event_20)=>setPropertyForm((prev_15)=>({
                                            ...prev_15,
                                            propertyTitle: event_20.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Property Title (SEO optimized)"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 747,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: propertyForm.slug,
                                onChange: (event_21)=>setPropertyForm((prev_16)=>({
                                            ...prev_16,
                                            slug: event_21.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Slug (optional)"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 751,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: propertyForm.propertyType,
                                onChange: (event_22)=>setPropertyForm((prev_17)=>({
                                            ...prev_17,
                                            propertyType: event_22.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROPERTY_TYPES"].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: type,
                                        children: type
                                    }, type, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 759,
                                        columnNumber: 41
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 755,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: propertyForm.listingType,
                                onChange: (event_23)=>setPropertyForm((prev_18)=>({
                                            ...prev_18,
                                            listingType: event_23.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LISTING_TYPES"].map((type_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: type_0,
                                        children: type_0
                                    }, type_0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 767,
                                        columnNumber: 42
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 763,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: propertyForm.price,
                                onChange: (event_24)=>setPropertyForm((prev_19)=>({
                                            ...prev_19,
                                            price: event_24.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Price"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 771,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: propertyForm.priceUnit,
                                onChange: (event_25)=>setPropertyForm((prev_20)=>({
                                            ...prev_20,
                                            priceUnit: event_25.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRICE_UNITS"].map((unit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: unit,
                                        children: unit
                                    }, unit, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 779,
                                        columnNumber: 38
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 775,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: propertyForm.areaSize,
                                onChange: (event_26)=>setPropertyForm((prev_21)=>({
                                            ...prev_21,
                                            areaSize: event_26.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Area Size"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 783,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: propertyForm.areaUnit,
                                onChange: (event_27)=>setPropertyForm((prev_22)=>({
                                            ...prev_22,
                                            areaUnit: event_27.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AREA_UNITS"].map((unit_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: unit_0,
                                        children: unit_0
                                    }, unit_0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 791,
                                        columnNumber: 39
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 787,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: propertyForm.propertyCode,
                                onChange: (event_28)=>setPropertyForm((prev_23)=>({
                                            ...prev_23,
                                            propertyCode: event_28.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Property ID (optional, auto-generated if empty)"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 795,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: propertyForm.city,
                                onChange: (event_29)=>setPropertyForm((prev_24)=>({
                                            ...prev_24,
                                            city: event_29.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "City"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 799,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: propertyForm.areaSector,
                                onChange: (event_30)=>setPropertyForm((prev_25)=>({
                                            ...prev_25,
                                            areaSector: event_30.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Area / Sector"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 803,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: propertyForm.fullAddress,
                                onChange: (event_31)=>setPropertyForm((prev_26)=>({
                                            ...prev_26,
                                            fullAddress: event_31.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Full Address"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 807,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: propertyForm.lat,
                                onChange: (event_32)=>setPropertyForm((prev_27)=>({
                                            ...prev_27,
                                            lat: event_32.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Latitude"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 811,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: propertyForm.lng,
                                onChange: (event_33)=>setPropertyForm((prev_28)=>({
                                            ...prev_28,
                                            lng: event_33.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Longitude"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 815,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: propertyForm.builderName,
                                onChange: (event_34)=>setPropertyForm((prev_29)=>({
                                            ...prev_29,
                                            builderName: event_34.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Builder Name"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 819,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: propertyForm.projectName,
                                onChange: (event_35)=>setPropertyForm((prev_30)=>({
                                            ...prev_30,
                                            projectName: event_35.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Project Name"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 823,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: propertyForm.projectStatus,
                                onChange: (event_36)=>setPropertyForm((prev_31)=>({
                                            ...prev_31,
                                            projectStatus: event_36.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECT_STATUSES"].map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: status,
                                        children: status
                                    }, status, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 831,
                                        columnNumber: 45
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 827,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                value: propertyForm.possessionDate,
                                onChange: (event_37)=>setPropertyForm((prev_32)=>({
                                            ...prev_32,
                                            possessionDate: event_37.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Possession Date"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 835,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: propertyForm.reraNumber,
                                onChange: (event_38)=>setPropertyForm((prev_33)=>({
                                            ...prev_33,
                                            reraNumber: event_38.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                placeholder: "RERA Number (optional)"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 839,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: propertyForm.bhk,
                                onChange: (event_39)=>setPropertyForm((prev_34)=>({
                                            ...prev_34,
                                            bhk: event_39.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "BHK (for flats)"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 844,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: propertyForm.bathrooms,
                                onChange: (event_40)=>setPropertyForm((prev_35)=>({
                                            ...prev_35,
                                            bathrooms: event_40.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Bathrooms"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 848,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: propertyForm.balconies,
                                onChange: (event_41)=>setPropertyForm((prev_36)=>({
                                            ...prev_36,
                                            balconies: event_41.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Balconies"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 852,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: propertyForm.floorNumber,
                                onChange: (event_42)=>setPropertyForm((prev_37)=>({
                                            ...prev_37,
                                            floorNumber: event_42.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Floor Number"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 856,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: propertyForm.totalFloors,
                                onChange: (event_43)=>setPropertyForm((prev_38)=>({
                                            ...prev_38,
                                            totalFloors: event_43.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Total Floors"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 860,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: propertyForm.plotArea,
                                onChange: (event_44)=>setPropertyForm((prev_39)=>({
                                            ...prev_39,
                                            plotArea: event_44.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Plot Area (for plots)"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 864,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: propertyForm.facing,
                                onChange: (event_45)=>setPropertyForm((prev_40)=>({
                                            ...prev_40,
                                            facing: event_45.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Facing"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 872,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FACING_OPTIONS"].map((facing)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: facing,
                                            children: facing
                                        }, facing, false, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 873,
                                            columnNumber: 43
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 868,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: propertyForm.roadWidth,
                                onChange: (event_46)=>setPropertyForm((prev_41)=>({
                                            ...prev_41,
                                            roadWidth: event_46.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Road Width"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 877,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: propertyForm.coverImageUrl,
                                onChange: (event_47)=>setPropertyForm((prev_42)=>({
                                            ...prev_42,
                                            coverImageUrl: event_47.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                placeholder: "Cover Image URL"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 882,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                children: [
                                    "Upload Cover Image",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        accept: "image/*",
                                        onChange: handleCoverUpload,
                                        className: "mt-2 block w-full text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 888,
                                        columnNumber: 13
                                    }, this),
                                    uploadingCover ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-1 block text-xs",
                                        children: "Uploading..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 889,
                                        columnNumber: 31
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 886,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                children: [
                                    "Upload Gallery Images",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        accept: "image/*",
                                        multiple: true,
                                        onChange: handleGalleryUpload,
                                        className: "mt-2 block w-full text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 893,
                                        columnNumber: 13
                                    }, this),
                                    uploadingGallery ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-1 block text-xs",
                                        children: "Uploading..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 894,
                                        columnNumber: 33
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 891,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-xs text-zinc-700 md:col-span-2",
                                children: [
                                    "Gallery URLs: ",
                                    propertyForm.galleryImageUrls.join(", ") || "none"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 896,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: propertyForm.videoUrl,
                                onChange: (event_48)=>setPropertyForm((prev_43)=>({
                                            ...prev_43,
                                            videoUrl: event_48.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Video URL (optional)"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 900,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: propertyForm.view360Url,
                                onChange: (event_49)=>setPropertyForm((prev_44)=>({
                                            ...prev_44,
                                            view360Url: event_49.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "360 View URL (optional)"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 904,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                required: true,
                                value: propertyForm.shortDescription,
                                onChange: (event_50)=>setPropertyForm((prev_45)=>({
                                            ...prev_45,
                                            shortDescription: event_50.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                rows: 2,
                                placeholder: "Short Description"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 909,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                required: true,
                                value: propertyForm.detailedDescription,
                                onChange: (event_51)=>setPropertyForm((prev_46)=>({
                                            ...prev_46,
                                            detailedDescription: event_51.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                rows: 4,
                                placeholder: "Detailed Description"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 913,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: propertyForm.keyHighlightsText,
                                onChange: (event_52)=>setPropertyForm((prev_47)=>({
                                            ...prev_47,
                                            keyHighlightsText: event_52.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                rows: 3,
                                placeholder: "Key Highlights (one per line)"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 917,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-zinc-300 p-3 md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 text-sm font-medium text-zinc-900",
                                        children: "Amenities"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 923,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-2 md:grid-cols-3",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AMENITY_OPTIONS"].map((amenity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center gap-2 text-sm text-zinc-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: propertyForm.amenities.includes(amenity),
                                                        onChange: (event_53)=>setPropertyForm((prev_48)=>({
                                                                    ...prev_48,
                                                                    amenities: event_53.target.checked ? [
                                                                        ...prev_48.amenities,
                                                                        amenity
                                                                    ] : prev_48.amenities.filter((item)=>item !== amenity)
                                                                }))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                                        lineNumber: 926,
                                                        columnNumber: 19
                                                    }, this),
                                                    amenity
                                                ]
                                            }, amenity, true, {
                                                fileName: "[project]/app/cms/CmsApp.tsx",
                                                lineNumber: 925,
                                                columnNumber: 47
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 924,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 922,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: propertyForm.contactName,
                                onChange: (event_54)=>setPropertyForm((prev_49)=>({
                                            ...prev_49,
                                            contactName: event_54.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Contact Name"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 935,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: propertyForm.phoneNumber,
                                onChange: (event_55)=>setPropertyForm((prev_50)=>({
                                            ...prev_50,
                                            phoneNumber: event_55.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Phone Number"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 939,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: propertyForm.whatsappNumber,
                                onChange: (event_56)=>setPropertyForm((prev_51)=>({
                                            ...prev_51,
                                            whatsappNumber: event_56.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "WhatsApp Number"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 943,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: propertyForm.alternateNumber,
                                onChange: (event_57)=>setPropertyForm((prev_52)=>({
                                            ...prev_52,
                                            alternateNumber: event_57.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Alternate Number"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 947,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-2 text-sm text-zinc-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: propertyForm.featuredProperty,
                                        onChange: (event_58)=>setPropertyForm((prev_53)=>({
                                                    ...prev_53,
                                                    featuredProperty: event_58.target.checked
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 953,
                                        columnNumber: 13
                                    }, this),
                                    "Featured Property"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 952,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-2 text-sm text-zinc-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: propertyForm.verifiedBadge,
                                        onChange: (event_59)=>setPropertyForm((prev_54)=>({
                                                    ...prev_54,
                                                    verifiedBadge: event_59.target.checked
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 960,
                                        columnNumber: 13
                                    }, this),
                                    "Verified Badge"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 959,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-2 text-sm text-zinc-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: propertyForm.newLaunch,
                                        onChange: (event_60)=>setPropertyForm((prev_55)=>({
                                                    ...prev_55,
                                                    newLaunch: event_60.target.checked
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 967,
                                        columnNumber: 13
                                    }, this),
                                    "New Launch"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 966,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: propertyForm.recordStatus,
                                onChange: (event_61)=>setPropertyForm((prev_56)=>({
                                            ...prev_56,
                                            recordStatus: event_61.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROPERTY_RECORD_STATUSES"].map((status_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: status_0,
                                        children: status_0
                                    }, status_0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 978,
                                        columnNumber: 55
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 974,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: propertyForm.metaTitle,
                                onChange: (event_62)=>setPropertyForm((prev_57)=>({
                                            ...prev_57,
                                            metaTitle: event_62.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                placeholder: "Meta Title"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 982,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                required: true,
                                value: propertyForm.metaDescription,
                                onChange: (event_63)=>setPropertyForm((prev_58)=>({
                                            ...prev_58,
                                            metaDescription: event_63.target.value
                                        })),
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                rows: 2,
                                placeholder: "Meta Description"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 986,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        disabled: submittingProperty,
                                        className: "rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-70",
                                        children: submittingProperty ? "Saving..." : editingId ? "Update Property" : "Create Property"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 992,
                                        columnNumber: 13
                                    }, this),
                                    editingId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            setEditingId(null);
                                            setPropertyForm(initialPropertyForm);
                                        },
                                        className: "rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700",
                                        children: "Cancel Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/CmsApp.tsx",
                                        lineNumber: 995,
                                        columnNumber: 26
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 991,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/CmsApp.tsx",
                        lineNumber: 746,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/CmsApp.tsx",
                lineNumber: 738,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-zinc-900",
                        children: "Property Records"
                    }, void 0, false, {
                        fileName: "[project]/app/cms/CmsApp.tsx",
                        lineNumber: 1006,
                        columnNumber: 9
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
                                            lineNumber: 1009,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mt-1 text-lg font-semibold text-zinc-900",
                                            children: property_0.propertyTitle
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 1012,
                                            columnNumber: 15
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
                                            lineNumber: 1013,
                                            columnNumber: 15
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
                                                    lineNumber: 1017,
                                                    columnNumber: 17
                                                }, this),
                                                canDeleteProperty ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>deleteProperty(property_0._id),
                                                    className: "rounded-md bg-red-600 px-3 py-1 text-xs font-semibold text-white",
                                                    children: "Delete"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                                    lineNumber: 1020,
                                                    columnNumber: 38
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/CmsApp.tsx",
                                            lineNumber: 1016,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, property_0._id, true, {
                                    fileName: "[project]/app/cms/CmsApp.tsx",
                                    lineNumber: 1008,
                                    columnNumber: 41
                                }, this)),
                            properties.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "rounded-lg border border-zinc-200 p-4 text-sm text-zinc-700",
                                children: "No properties found."
                            }, void 0, false, {
                                fileName: "[project]/app/cms/CmsApp.tsx",
                                lineNumber: 1025,
                                columnNumber: 38
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/CmsApp.tsx",
                        lineNumber: 1007,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/CmsApp.tsx",
                lineNumber: 1005,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/CmsApp.tsx",
        lineNumber: 659,
        columnNumber: 10
    }, this);
}
_s(CmsApp, "5uwiyNhyGW83Sds+DmEoHt/nWtA=");
_c = CmsApp;
var _c;
__turbopack_context__.k.register(_c, "CmsApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function() {
    var e = {
        675: function(e, r) {
            "use strict";
            r.byteLength = byteLength;
            r.toByteArray = toByteArray;
            r.fromByteArray = fromByteArray;
            var t = [];
            var f = [];
            var n = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
            var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for(var o = 0, u = i.length; o < u; ++o){
                t[o] = i[o];
                f[i.charCodeAt(o)] = o;
            }
            f["-".charCodeAt(0)] = 62;
            f["_".charCodeAt(0)] = 63;
            function getLens(e) {
                var r = e.length;
                if (r % 4 > 0) {
                    throw new Error("Invalid string. Length must be a multiple of 4");
                }
                var t = e.indexOf("=");
                if (t === -1) t = r;
                var f = t === r ? 0 : 4 - t % 4;
                return [
                    t,
                    f
                ];
            }
            function byteLength(e) {
                var r = getLens(e);
                var t = r[0];
                var f = r[1];
                return (t + f) * 3 / 4 - f;
            }
            function _byteLength(e, r, t) {
                return (r + t) * 3 / 4 - t;
            }
            function toByteArray(e) {
                var r;
                var t = getLens(e);
                var i = t[0];
                var o = t[1];
                var u = new n(_byteLength(e, i, o));
                var a = 0;
                var s = o > 0 ? i - 4 : i;
                var h;
                for(h = 0; h < s; h += 4){
                    r = f[e.charCodeAt(h)] << 18 | f[e.charCodeAt(h + 1)] << 12 | f[e.charCodeAt(h + 2)] << 6 | f[e.charCodeAt(h + 3)];
                    u[a++] = r >> 16 & 255;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                if (o === 2) {
                    r = f[e.charCodeAt(h)] << 2 | f[e.charCodeAt(h + 1)] >> 4;
                    u[a++] = r & 255;
                }
                if (o === 1) {
                    r = f[e.charCodeAt(h)] << 10 | f[e.charCodeAt(h + 1)] << 4 | f[e.charCodeAt(h + 2)] >> 2;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                return u;
            }
            function tripletToBase64(e) {
                return t[e >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[e & 63];
            }
            function encodeChunk(e, r, t) {
                var f;
                var n = [];
                for(var i = r; i < t; i += 3){
                    f = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255);
                    n.push(tripletToBase64(f));
                }
                return n.join("");
            }
            function fromByteArray(e) {
                var r;
                var f = e.length;
                var n = f % 3;
                var i = [];
                var o = 16383;
                for(var u = 0, a = f - n; u < a; u += o){
                    i.push(encodeChunk(e, u, u + o > a ? a : u + o));
                }
                if (n === 1) {
                    r = e[f - 1];
                    i.push(t[r >> 2] + t[r << 4 & 63] + "==");
                } else if (n === 2) {
                    r = (e[f - 2] << 8) + e[f - 1];
                    i.push(t[r >> 10] + t[r >> 4 & 63] + t[r << 2 & 63] + "=");
                }
                return i.join("");
            }
        },
        72: function(e, r, t) {
            "use strict";
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var f = t(675);
            var n = t(783);
            var i = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
            r.Buffer = Buffer;
            r.SlowBuffer = SlowBuffer;
            r.INSPECT_MAX_BYTES = 50;
            var o = 2147483647;
            r.kMaxLength = o;
            Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
            if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
                console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
            }
            function typedArraySupport() {
                try {
                    var e = new Uint8Array(1);
                    var r = {
                        foo: function() {
                            return 42;
                        }
                    };
                    Object.setPrototypeOf(r, Uint8Array.prototype);
                    Object.setPrototypeOf(e, r);
                    return e.foo() === 42;
                } catch (e) {
                    return false;
                }
            }
            Object.defineProperty(Buffer.prototype, "parent", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.buffer;
                }
            });
            Object.defineProperty(Buffer.prototype, "offset", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.byteOffset;
                }
            });
            function createBuffer(e) {
                if (e > o) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
                var r = new Uint8Array(e);
                Object.setPrototypeOf(r, Buffer.prototype);
                return r;
            }
            function Buffer(e, r, t) {
                if (typeof e === "number") {
                    if (typeof r === "string") {
                        throw new TypeError('The "string" argument must be of type string. Received type number');
                    }
                    return allocUnsafe(e);
                }
                return from(e, r, t);
            }
            Buffer.poolSize = 8192;
            function from(e, r, t) {
                if (typeof e === "string") {
                    return fromString(e, r);
                }
                if (ArrayBuffer.isView(e)) {
                    return fromArrayLike(e);
                }
                if (e == null) {
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
                }
                if (isInstance(e, ArrayBuffer) || e && isInstance(e.buffer, ArrayBuffer)) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof SharedArrayBuffer !== "undefined" && (isInstance(e, SharedArrayBuffer) || e && isInstance(e.buffer, SharedArrayBuffer))) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof e === "number") {
                    throw new TypeError('The "value" argument must not be of type number. Received type number');
                }
                var f = e.valueOf && e.valueOf();
                if (f != null && f !== e) {
                    return Buffer.from(f, r, t);
                }
                var n = fromObject(e);
                if (n) return n;
                if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] === "function") {
                    return Buffer.from(e[Symbol.toPrimitive]("string"), r, t);
                }
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
            }
            Buffer.from = function(e, r, t) {
                return from(e, r, t);
            };
            Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
            Object.setPrototypeOf(Buffer, Uint8Array);
            function assertSize(e) {
                if (typeof e !== "number") {
                    throw new TypeError('"size" argument must be of type number');
                } else if (e < 0) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
            }
            function alloc(e, r, t) {
                assertSize(e);
                if (e <= 0) {
                    return createBuffer(e);
                }
                if (r !== undefined) {
                    return typeof t === "string" ? createBuffer(e).fill(r, t) : createBuffer(e).fill(r);
                }
                return createBuffer(e);
            }
            Buffer.alloc = function(e, r, t) {
                return alloc(e, r, t);
            };
            function allocUnsafe(e) {
                assertSize(e);
                return createBuffer(e < 0 ? 0 : checked(e) | 0);
            }
            Buffer.allocUnsafe = function(e) {
                return allocUnsafe(e);
            };
            Buffer.allocUnsafeSlow = function(e) {
                return allocUnsafe(e);
            };
            function fromString(e, r) {
                if (typeof r !== "string" || r === "") {
                    r = "utf8";
                }
                if (!Buffer.isEncoding(r)) {
                    throw new TypeError("Unknown encoding: " + r);
                }
                var t = byteLength(e, r) | 0;
                var f = createBuffer(t);
                var n = f.write(e, r);
                if (n !== t) {
                    f = f.slice(0, n);
                }
                return f;
            }
            function fromArrayLike(e) {
                var r = e.length < 0 ? 0 : checked(e.length) | 0;
                var t = createBuffer(r);
                for(var f = 0; f < r; f += 1){
                    t[f] = e[f] & 255;
                }
                return t;
            }
            function fromArrayBuffer(e, r, t) {
                if (r < 0 || e.byteLength < r) {
                    throw new RangeError('"offset" is outside of buffer bounds');
                }
                if (e.byteLength < r + (t || 0)) {
                    throw new RangeError('"length" is outside of buffer bounds');
                }
                var f;
                if (r === undefined && t === undefined) {
                    f = new Uint8Array(e);
                } else if (t === undefined) {
                    f = new Uint8Array(e, r);
                } else {
                    f = new Uint8Array(e, r, t);
                }
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            }
            function fromObject(e) {
                if (Buffer.isBuffer(e)) {
                    var r = checked(e.length) | 0;
                    var t = createBuffer(r);
                    if (t.length === 0) {
                        return t;
                    }
                    e.copy(t, 0, 0, r);
                    return t;
                }
                if (e.length !== undefined) {
                    if (typeof e.length !== "number" || numberIsNaN(e.length)) {
                        return createBuffer(0);
                    }
                    return fromArrayLike(e);
                }
                if (e.type === "Buffer" && Array.isArray(e.data)) {
                    return fromArrayLike(e.data);
                }
            }
            function checked(e) {
                if (e >= o) {
                    throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + o.toString(16) + " bytes");
                }
                return e | 0;
            }
            function SlowBuffer(e) {
                if (+e != e) {
                    e = 0;
                }
                return Buffer.alloc(+e);
            }
            Buffer.isBuffer = function isBuffer(e) {
                return e != null && e._isBuffer === true && e !== Buffer.prototype;
            };
            Buffer.compare = function compare(e, r) {
                if (isInstance(e, Uint8Array)) e = Buffer.from(e, e.offset, e.byteLength);
                if (isInstance(r, Uint8Array)) r = Buffer.from(r, r.offset, r.byteLength);
                if (!Buffer.isBuffer(e) || !Buffer.isBuffer(r)) {
                    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                }
                if (e === r) return 0;
                var t = e.length;
                var f = r.length;
                for(var n = 0, i = Math.min(t, f); n < i; ++n){
                    if (e[n] !== r[n]) {
                        t = e[n];
                        f = r[n];
                        break;
                    }
                }
                if (t < f) return -1;
                if (f < t) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(e) {
                switch(String(e).toLowerCase()){
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return true;
                    default:
                        return false;
                }
            };
            Buffer.concat = function concat(e, r) {
                if (!Array.isArray(e)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                }
                if (e.length === 0) {
                    return Buffer.alloc(0);
                }
                var t;
                if (r === undefined) {
                    r = 0;
                    for(t = 0; t < e.length; ++t){
                        r += e[t].length;
                    }
                }
                var f = Buffer.allocUnsafe(r);
                var n = 0;
                for(t = 0; t < e.length; ++t){
                    var i = e[t];
                    if (isInstance(i, Uint8Array)) {
                        i = Buffer.from(i);
                    }
                    if (!Buffer.isBuffer(i)) {
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    }
                    i.copy(f, n);
                    n += i.length;
                }
                return f;
            };
            function byteLength(e, r) {
                if (Buffer.isBuffer(e)) {
                    return e.length;
                }
                if (ArrayBuffer.isView(e) || isInstance(e, ArrayBuffer)) {
                    return e.byteLength;
                }
                if (typeof e !== "string") {
                    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + "Received type " + typeof e);
                }
                var t = e.length;
                var f = arguments.length > 2 && arguments[2] === true;
                if (!f && t === 0) return 0;
                var n = false;
                for(;;){
                    switch(r){
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return t;
                        case "utf8":
                        case "utf-8":
                            return utf8ToBytes(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return t * 2;
                        case "hex":
                            return t >>> 1;
                        case "base64":
                            return base64ToBytes(e).length;
                        default:
                            if (n) {
                                return f ? -1 : utf8ToBytes(e).length;
                            }
                            r = ("" + r).toLowerCase();
                            n = true;
                    }
                }
            }
            Buffer.byteLength = byteLength;
            function slowToString(e, r, t) {
                var f = false;
                if (r === undefined || r < 0) {
                    r = 0;
                }
                if (r > this.length) {
                    return "";
                }
                if (t === undefined || t > this.length) {
                    t = this.length;
                }
                if (t <= 0) {
                    return "";
                }
                t >>>= 0;
                r >>>= 0;
                if (t <= r) {
                    return "";
                }
                if (!e) e = "utf8";
                while(true){
                    switch(e){
                        case "hex":
                            return hexSlice(this, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Slice(this, r, t);
                        case "ascii":
                            return asciiSlice(this, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Slice(this, r, t);
                        case "base64":
                            return base64Slice(this, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return utf16leSlice(this, r, t);
                        default:
                            if (f) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase();
                            f = true;
                    }
                }
            }
            Buffer.prototype._isBuffer = true;
            function swap(e, r, t) {
                var f = e[r];
                e[r] = e[t];
                e[t] = f;
            }
            Buffer.prototype.swap16 = function swap16() {
                var e = this.length;
                if (e % 2 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                }
                for(var r = 0; r < e; r += 2){
                    swap(this, r, r + 1);
                }
                return this;
            };
            Buffer.prototype.swap32 = function swap32() {
                var e = this.length;
                if (e % 4 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                }
                for(var r = 0; r < e; r += 4){
                    swap(this, r, r + 3);
                    swap(this, r + 1, r + 2);
                }
                return this;
            };
            Buffer.prototype.swap64 = function swap64() {
                var e = this.length;
                if (e % 8 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                }
                for(var r = 0; r < e; r += 8){
                    swap(this, r, r + 7);
                    swap(this, r + 1, r + 6);
                    swap(this, r + 2, r + 5);
                    swap(this, r + 3, r + 4);
                }
                return this;
            };
            Buffer.prototype.toString = function toString() {
                var e = this.length;
                if (e === 0) return "";
                if (arguments.length === 0) return utf8Slice(this, 0, e);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.toLocaleString = Buffer.prototype.toString;
            Buffer.prototype.equals = function equals(e) {
                if (!Buffer.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (this === e) return true;
                return Buffer.compare(this, e) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                var e = "";
                var t = r.INSPECT_MAX_BYTES;
                e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim();
                if (this.length > t) e += " ... ";
                return "<Buffer " + e + ">";
            };
            if (i) {
                Buffer.prototype[i] = Buffer.prototype.inspect;
            }
            Buffer.prototype.compare = function compare(e, r, t, f, n) {
                if (isInstance(e, Uint8Array)) {
                    e = Buffer.from(e, e.offset, e.byteLength);
                }
                if (!Buffer.isBuffer(e)) {
                    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + "Received type " + typeof e);
                }
                if (r === undefined) {
                    r = 0;
                }
                if (t === undefined) {
                    t = e ? e.length : 0;
                }
                if (f === undefined) {
                    f = 0;
                }
                if (n === undefined) {
                    n = this.length;
                }
                if (r < 0 || t > e.length || f < 0 || n > this.length) {
                    throw new RangeError("out of range index");
                }
                if (f >= n && r >= t) {
                    return 0;
                }
                if (f >= n) {
                    return -1;
                }
                if (r >= t) {
                    return 1;
                }
                r >>>= 0;
                t >>>= 0;
                f >>>= 0;
                n >>>= 0;
                if (this === e) return 0;
                var i = n - f;
                var o = t - r;
                var u = Math.min(i, o);
                var a = this.slice(f, n);
                var s = e.slice(r, t);
                for(var h = 0; h < u; ++h){
                    if (a[h] !== s[h]) {
                        i = a[h];
                        o = s[h];
                        break;
                    }
                }
                if (i < o) return -1;
                if (o < i) return 1;
                return 0;
            };
            function bidirectionalIndexOf(e, r, t, f, n) {
                if (e.length === 0) return -1;
                if (typeof t === "string") {
                    f = t;
                    t = 0;
                } else if (t > 2147483647) {
                    t = 2147483647;
                } else if (t < -2147483648) {
                    t = -2147483648;
                }
                t = +t;
                if (numberIsNaN(t)) {
                    t = n ? 0 : e.length - 1;
                }
                if (t < 0) t = e.length + t;
                if (t >= e.length) {
                    if (n) return -1;
                    else t = e.length - 1;
                } else if (t < 0) {
                    if (n) t = 0;
                    else return -1;
                }
                if (typeof r === "string") {
                    r = Buffer.from(r, f);
                }
                if (Buffer.isBuffer(r)) {
                    if (r.length === 0) {
                        return -1;
                    }
                    return arrayIndexOf(e, r, t, f, n);
                } else if (typeof r === "number") {
                    r = r & 255;
                    if (typeof Uint8Array.prototype.indexOf === "function") {
                        if (n) {
                            return Uint8Array.prototype.indexOf.call(e, r, t);
                        } else {
                            return Uint8Array.prototype.lastIndexOf.call(e, r, t);
                        }
                    }
                    return arrayIndexOf(e, [
                        r
                    ], t, f, n);
                }
                throw new TypeError("val must be string, number or Buffer");
            }
            function arrayIndexOf(e, r, t, f, n) {
                var i = 1;
                var o = e.length;
                var u = r.length;
                if (f !== undefined) {
                    f = String(f).toLowerCase();
                    if (f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le") {
                        if (e.length < 2 || r.length < 2) {
                            return -1;
                        }
                        i = 2;
                        o /= 2;
                        u /= 2;
                        t /= 2;
                    }
                }
                function read(e, r) {
                    if (i === 1) {
                        return e[r];
                    } else {
                        return e.readUInt16BE(r * i);
                    }
                }
                var a;
                if (n) {
                    var s = -1;
                    for(a = t; a < o; a++){
                        if (read(e, a) === read(r, s === -1 ? 0 : a - s)) {
                            if (s === -1) s = a;
                            if (a - s + 1 === u) return s * i;
                        } else {
                            if (s !== -1) a -= a - s;
                            s = -1;
                        }
                    }
                } else {
                    if (t + u > o) t = o - u;
                    for(a = t; a >= 0; a--){
                        var h = true;
                        for(var c = 0; c < u; c++){
                            if (read(e, a + c) !== read(r, c)) {
                                h = false;
                                break;
                            }
                        }
                        if (h) return a;
                    }
                }
                return -1;
            }
            Buffer.prototype.includes = function includes(e, r, t) {
                return this.indexOf(e, r, t) !== -1;
            };
            Buffer.prototype.indexOf = function indexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, true);
            };
            Buffer.prototype.lastIndexOf = function lastIndexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, false);
            };
            function hexWrite(e, r, t, f) {
                t = Number(t) || 0;
                var n = e.length - t;
                if (!f) {
                    f = n;
                } else {
                    f = Number(f);
                    if (f > n) {
                        f = n;
                    }
                }
                var i = r.length;
                if (f > i / 2) {
                    f = i / 2;
                }
                for(var o = 0; o < f; ++o){
                    var u = parseInt(r.substr(o * 2, 2), 16);
                    if (numberIsNaN(u)) return o;
                    e[t + o] = u;
                }
                return o;
            }
            function utf8Write(e, r, t, f) {
                return blitBuffer(utf8ToBytes(r, e.length - t), e, t, f);
            }
            function asciiWrite(e, r, t, f) {
                return blitBuffer(asciiToBytes(r), e, t, f);
            }
            function latin1Write(e, r, t, f) {
                return asciiWrite(e, r, t, f);
            }
            function base64Write(e, r, t, f) {
                return blitBuffer(base64ToBytes(r), e, t, f);
            }
            function ucs2Write(e, r, t, f) {
                return blitBuffer(utf16leToBytes(r, e.length - t), e, t, f);
            }
            Buffer.prototype.write = function write(e, r, t, f) {
                if (r === undefined) {
                    f = "utf8";
                    t = this.length;
                    r = 0;
                } else if (t === undefined && typeof r === "string") {
                    f = r;
                    t = this.length;
                    r = 0;
                } else if (isFinite(r)) {
                    r = r >>> 0;
                    if (isFinite(t)) {
                        t = t >>> 0;
                        if (f === undefined) f = "utf8";
                    } else {
                        f = t;
                        t = undefined;
                    }
                } else {
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                }
                var n = this.length - r;
                if (t === undefined || t > n) t = n;
                if (e.length > 0 && (t < 0 || r < 0) || r > this.length) {
                    throw new RangeError("Attempt to write outside buffer bounds");
                }
                if (!f) f = "utf8";
                var i = false;
                for(;;){
                    switch(f){
                        case "hex":
                            return hexWrite(this, e, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Write(this, e, r, t);
                        case "ascii":
                            return asciiWrite(this, e, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Write(this, e, r, t);
                        case "base64":
                            return base64Write(this, e, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return ucs2Write(this, e, r, t);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + f);
                            f = ("" + f).toLowerCase();
                            i = true;
                    }
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function base64Slice(e, r, t) {
                if (r === 0 && t === e.length) {
                    return f.fromByteArray(e);
                } else {
                    return f.fromByteArray(e.slice(r, t));
                }
            }
            function utf8Slice(e, r, t) {
                t = Math.min(e.length, t);
                var f = [];
                var n = r;
                while(n < t){
                    var i = e[n];
                    var o = null;
                    var u = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
                    if (n + u <= t) {
                        var a, s, h, c;
                        switch(u){
                            case 1:
                                if (i < 128) {
                                    o = i;
                                }
                                break;
                            case 2:
                                a = e[n + 1];
                                if ((a & 192) === 128) {
                                    c = (i & 31) << 6 | a & 63;
                                    if (c > 127) {
                                        o = c;
                                    }
                                }
                                break;
                            case 3:
                                a = e[n + 1];
                                s = e[n + 2];
                                if ((a & 192) === 128 && (s & 192) === 128) {
                                    c = (i & 15) << 12 | (a & 63) << 6 | s & 63;
                                    if (c > 2047 && (c < 55296 || c > 57343)) {
                                        o = c;
                                    }
                                }
                                break;
                            case 4:
                                a = e[n + 1];
                                s = e[n + 2];
                                h = e[n + 3];
                                if ((a & 192) === 128 && (s & 192) === 128 && (h & 192) === 128) {
                                    c = (i & 15) << 18 | (a & 63) << 12 | (s & 63) << 6 | h & 63;
                                    if (c > 65535 && c < 1114112) {
                                        o = c;
                                    }
                                }
                        }
                    }
                    if (o === null) {
                        o = 65533;
                        u = 1;
                    } else if (o > 65535) {
                        o -= 65536;
                        f.push(o >>> 10 & 1023 | 55296);
                        o = 56320 | o & 1023;
                    }
                    f.push(o);
                    n += u;
                }
                return decodeCodePointsArray(f);
            }
            var u = 4096;
            function decodeCodePointsArray(e) {
                var r = e.length;
                if (r <= u) {
                    return String.fromCharCode.apply(String, e);
                }
                var t = "";
                var f = 0;
                while(f < r){
                    t += String.fromCharCode.apply(String, e.slice(f, f += u));
                }
                return t;
            }
            function asciiSlice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n] & 127);
                }
                return f;
            }
            function latin1Slice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n]);
                }
                return f;
            }
            function hexSlice(e, r, t) {
                var f = e.length;
                if (!r || r < 0) r = 0;
                if (!t || t < 0 || t > f) t = f;
                var n = "";
                for(var i = r; i < t; ++i){
                    n += s[e[i]];
                }
                return n;
            }
            function utf16leSlice(e, r, t) {
                var f = e.slice(r, t);
                var n = "";
                for(var i = 0; i < f.length; i += 2){
                    n += String.fromCharCode(f[i] + f[i + 1] * 256);
                }
                return n;
            }
            Buffer.prototype.slice = function slice(e, r) {
                var t = this.length;
                e = ~~e;
                r = r === undefined ? t : ~~r;
                if (e < 0) {
                    e += t;
                    if (e < 0) e = 0;
                } else if (e > t) {
                    e = t;
                }
                if (r < 0) {
                    r += t;
                    if (r < 0) r = 0;
                } else if (r > t) {
                    r = t;
                }
                if (r < e) r = e;
                var f = this.subarray(e, r);
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            };
            function checkOffset(e, r, t) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + r > t) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer.prototype.readUIntLE = function readUIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                return f;
            };
            Buffer.prototype.readUIntBE = function readUIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) {
                    checkOffset(e, r, this.length);
                }
                var f = this[e + --r];
                var n = 1;
                while(r > 0 && (n *= 256)){
                    f += this[e + --r] * n;
                }
                return f;
            };
            Buffer.prototype.readUInt8 = function readUInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                return this[e];
            };
            Buffer.prototype.readUInt16LE = function readUInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] | this[e + 1] << 8;
            };
            Buffer.prototype.readUInt16BE = function readUInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] << 8 | this[e + 1];
            };
            Buffer.prototype.readUInt32LE = function readUInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
            };
            Buffer.prototype.readUInt32BE = function readUInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
            };
            Buffer.prototype.readIntLE = function readIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                n *= 128;
                if (f >= n) f -= Math.pow(2, 8 * r);
                return f;
            };
            Buffer.prototype.readIntBE = function readIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = r;
                var n = 1;
                var i = this[e + --f];
                while(f > 0 && (n *= 256)){
                    i += this[e + --f] * n;
                }
                n *= 128;
                if (i >= n) i -= Math.pow(2, 8 * r);
                return i;
            };
            Buffer.prototype.readInt8 = function readInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                if (!(this[e] & 128)) return this[e];
                return (255 - this[e] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e] | this[e + 1] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e + 1] | this[e] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
            };
            Buffer.prototype.readFloatLE = function readFloatLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, false, 52, 8);
            };
            function checkInt(e, r, t, f, n, i) {
                if (!Buffer.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (r > n || r < i) throw new RangeError('"value" argument is out of bounds');
                if (t + f > e.length) throw new RangeError("Index out of range");
            }
            Buffer.prototype.writeUIntLE = function writeUIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = 1;
                var o = 0;
                this[r] = e & 255;
                while(++o < t && (i *= 256)){
                    this[r + o] = e / i & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUIntBE = function writeUIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = t - 1;
                var o = 1;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    this[r + i] = e / o & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUInt8 = function writeUInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 255, 0);
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeUInt16LE = function writeUInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeUInt16BE = function writeUInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeUInt32LE = function writeUInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r + 3] = e >>> 24;
                this[r + 2] = e >>> 16;
                this[r + 1] = e >>> 8;
                this[r] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeUInt32BE = function writeUInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeIntLE = function writeIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = 0;
                var o = 1;
                var u = 0;
                this[r] = e & 255;
                while(++i < t && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i - 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = t - 1;
                var o = 1;
                var u = 0;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i + 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeInt8 = function writeInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 127, -128);
                if (e < 0) e = 255 + e + 1;
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                this[r + 2] = e >>> 16;
                this[r + 3] = e >>> 24;
                return r + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                if (e < 0) e = 4294967295 + e + 1;
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            function checkIEEE754(e, r, t, f, n, i) {
                if (t + f > e.length) throw new RangeError("Index out of range");
                if (t < 0) throw new RangeError("Index out of range");
            }
            function writeFloat(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 4, 34028234663852886e22, -34028234663852886e22);
                }
                n.write(e, r, t, f, 23, 4);
                return t + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(e, r, t) {
                return writeFloat(this, e, r, true, t);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(e, r, t) {
                return writeFloat(this, e, r, false, t);
            };
            function writeDouble(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 8, 17976931348623157e292, -17976931348623157e292);
                }
                n.write(e, r, t, f, 52, 8);
                return t + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(e, r, t) {
                return writeDouble(this, e, r, true, t);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(e, r, t) {
                return writeDouble(this, e, r, false, t);
            };
            Buffer.prototype.copy = function copy(e, r, t, f) {
                if (!Buffer.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (!t) t = 0;
                if (!f && f !== 0) f = this.length;
                if (r >= e.length) r = e.length;
                if (!r) r = 0;
                if (f > 0 && f < t) f = t;
                if (f === t) return 0;
                if (e.length === 0 || this.length === 0) return 0;
                if (r < 0) {
                    throw new RangeError("targetStart out of bounds");
                }
                if (t < 0 || t >= this.length) throw new RangeError("Index out of range");
                if (f < 0) throw new RangeError("sourceEnd out of bounds");
                if (f > this.length) f = this.length;
                if (e.length - r < f - t) {
                    f = e.length - r + t;
                }
                var n = f - t;
                if (this === e && typeof Uint8Array.prototype.copyWithin === "function") {
                    this.copyWithin(r, t, f);
                } else if (this === e && t < r && r < f) {
                    for(var i = n - 1; i >= 0; --i){
                        e[i + r] = this[i + t];
                    }
                } else {
                    Uint8Array.prototype.set.call(e, this.subarray(t, f), r);
                }
                return n;
            };
            Buffer.prototype.fill = function fill(e, r, t, f) {
                if (typeof e === "string") {
                    if (typeof r === "string") {
                        f = r;
                        r = 0;
                        t = this.length;
                    } else if (typeof t === "string") {
                        f = t;
                        t = this.length;
                    }
                    if (f !== undefined && typeof f !== "string") {
                        throw new TypeError("encoding must be a string");
                    }
                    if (typeof f === "string" && !Buffer.isEncoding(f)) {
                        throw new TypeError("Unknown encoding: " + f);
                    }
                    if (e.length === 1) {
                        var n = e.charCodeAt(0);
                        if (f === "utf8" && n < 128 || f === "latin1") {
                            e = n;
                        }
                    }
                } else if (typeof e === "number") {
                    e = e & 255;
                } else if (typeof e === "boolean") {
                    e = Number(e);
                }
                if (r < 0 || this.length < r || this.length < t) {
                    throw new RangeError("Out of range index");
                }
                if (t <= r) {
                    return this;
                }
                r = r >>> 0;
                t = t === undefined ? this.length : t >>> 0;
                if (!e) e = 0;
                var i;
                if (typeof e === "number") {
                    for(i = r; i < t; ++i){
                        this[i] = e;
                    }
                } else {
                    var o = Buffer.isBuffer(e) ? e : Buffer.from(e, f);
                    var u = o.length;
                    if (u === 0) {
                        throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    }
                    for(i = 0; i < t - r; ++i){
                        this[i + r] = o[i % u];
                    }
                }
                return this;
            };
            var a = /[^+/0-9A-Za-z-_]/g;
            function base64clean(e) {
                e = e.split("=")[0];
                e = e.trim().replace(a, "");
                if (e.length < 2) return "";
                while(e.length % 4 !== 0){
                    e = e + "=";
                }
                return e;
            }
            function utf8ToBytes(e, r) {
                r = r || Infinity;
                var t;
                var f = e.length;
                var n = null;
                var i = [];
                for(var o = 0; o < f; ++o){
                    t = e.charCodeAt(o);
                    if (t > 55295 && t < 57344) {
                        if (!n) {
                            if (t > 56319) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            } else if (o + 1 === f) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            }
                            n = t;
                            continue;
                        }
                        if (t < 56320) {
                            if ((r -= 3) > -1) i.push(239, 191, 189);
                            n = t;
                            continue;
                        }
                        t = (n - 55296 << 10 | t - 56320) + 65536;
                    } else if (n) {
                        if ((r -= 3) > -1) i.push(239, 191, 189);
                    }
                    n = null;
                    if (t < 128) {
                        if ((r -= 1) < 0) break;
                        i.push(t);
                    } else if (t < 2048) {
                        if ((r -= 2) < 0) break;
                        i.push(t >> 6 | 192, t & 63 | 128);
                    } else if (t < 65536) {
                        if ((r -= 3) < 0) break;
                        i.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
                    } else if (t < 1114112) {
                        if ((r -= 4) < 0) break;
                        i.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
                    } else {
                        throw new Error("Invalid code point");
                    }
                }
                return i;
            }
            function asciiToBytes(e) {
                var r = [];
                for(var t = 0; t < e.length; ++t){
                    r.push(e.charCodeAt(t) & 255);
                }
                return r;
            }
            function utf16leToBytes(e, r) {
                var t, f, n;
                var i = [];
                for(var o = 0; o < e.length; ++o){
                    if ((r -= 2) < 0) break;
                    t = e.charCodeAt(o);
                    f = t >> 8;
                    n = t % 256;
                    i.push(n);
                    i.push(f);
                }
                return i;
            }
            function base64ToBytes(e) {
                return f.toByteArray(base64clean(e));
            }
            function blitBuffer(e, r, t, f) {
                for(var n = 0; n < f; ++n){
                    if (n + t >= r.length || n >= e.length) break;
                    r[n + t] = e[n];
                }
                return n;
            }
            function isInstance(e, r) {
                return e instanceof r || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === r.name;
            }
            function numberIsNaN(e) {
                return e !== e;
            }
            var s = function() {
                var e = "0123456789abcdef";
                var r = new Array(256);
                for(var t = 0; t < 16; ++t){
                    var f = t * 16;
                    for(var n = 0; n < 16; ++n){
                        r[f + n] = e[t] + e[n];
                    }
                }
                return r;
            }();
        },
        783: function(e, r) {
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ r.read = function(e, r, t, f, n) {
                var i, o;
                var u = n * 8 - f - 1;
                var a = (1 << u) - 1;
                var s = a >> 1;
                var h = -7;
                var c = t ? n - 1 : 0;
                var l = t ? -1 : 1;
                var p = e[r + c];
                c += l;
                i = p & (1 << -h) - 1;
                p >>= -h;
                h += u;
                for(; h > 0; i = i * 256 + e[r + c], c += l, h -= 8){}
                o = i & (1 << -h) - 1;
                i >>= -h;
                h += f;
                for(; h > 0; o = o * 256 + e[r + c], c += l, h -= 8){}
                if (i === 0) {
                    i = 1 - s;
                } else if (i === a) {
                    return o ? NaN : (p ? -1 : 1) * Infinity;
                } else {
                    o = o + Math.pow(2, f);
                    i = i - s;
                }
                return (p ? -1 : 1) * o * Math.pow(2, i - f);
            };
            r.write = function(e, r, t, f, n, i) {
                var o, u, a;
                var s = i * 8 - n - 1;
                var h = (1 << s) - 1;
                var c = h >> 1;
                var l = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                var p = f ? 0 : i - 1;
                var y = f ? 1 : -1;
                var g = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
                r = Math.abs(r);
                if (isNaN(r) || r === Infinity) {
                    u = isNaN(r) ? 1 : 0;
                    o = h;
                } else {
                    o = Math.floor(Math.log(r) / Math.LN2);
                    if (r * (a = Math.pow(2, -o)) < 1) {
                        o--;
                        a *= 2;
                    }
                    if (o + c >= 1) {
                        r += l / a;
                    } else {
                        r += l * Math.pow(2, 1 - c);
                    }
                    if (r * a >= 2) {
                        o++;
                        a /= 2;
                    }
                    if (o + c >= h) {
                        u = 0;
                        o = h;
                    } else if (o + c >= 1) {
                        u = (r * a - 1) * Math.pow(2, n);
                        o = o + c;
                    } else {
                        u = r * Math.pow(2, c - 1) * Math.pow(2, n);
                        o = 0;
                    }
                }
                for(; n >= 8; e[t + p] = u & 255, p += y, u /= 256, n -= 8){}
                o = o << n | u;
                s += n;
                for(; s > 0; e[t + p] = o & 255, p += y, o /= 256, s -= 8){}
                e[t + p - y] |= g * 128;
            };
        }
    };
    var r = {};
    function __nccwpck_require__(t) {
        var f = r[t];
        if (f !== undefined) {
            return f.exports;
        }
        var n = r[t] = {
            exports: {}
        };
        var i = true;
        try {
            e[t](n, n.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[t];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/node_modules/next/dist/compiled/buffer") + "/";
    var t = __nccwpck_require__(72);
    module.exports = t;
})();
}),
"[project]/node_modules/@imagekit/javascript/dist/imagekit.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
!function(e, t) {
    ("TURBOPACK compile-time truthy", 1) ? t(exports) : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function(e) {
    "use strict";
    const t = {
        width: "w",
        height: "h",
        aspectRatio: "ar",
        background: "bg",
        border: "b",
        crop: "c",
        cropMode: "cm",
        dpr: "dpr",
        focus: "fo",
        quality: "q",
        x: "x",
        xCenter: "xc",
        y: "y",
        yCenter: "yc",
        format: "f",
        videoCodec: "vc",
        audioCodec: "ac",
        radius: "r",
        rotation: "rt",
        blur: "bl",
        named: "n",
        defaultImage: "di",
        flip: "fl",
        original: "orig",
        startOffset: "so",
        endOffset: "eo",
        duration: "du",
        streamingResolutions: "sr",
        grayscale: "e-grayscale",
        aiUpscale: "e-upscale",
        aiRetouch: "e-retouch",
        aiVariation: "e-genvar",
        aiDropShadow: "e-dropshadow",
        aiChangeBackground: "e-changebg",
        aiEdit: "e-edit",
        aiRemoveBackground: "e-bgremove",
        aiRemoveBackgroundExternal: "e-removedotbg",
        contrastStretch: "e-contrast",
        shadow: "e-shadow",
        sharpen: "e-sharpen",
        unsharpMask: "e-usm",
        gradient: "e-gradient",
        colorReplace: "cr",
        distort: "e-distort",
        progressive: "pr",
        lossless: "lo",
        colorProfile: "cp",
        metadata: "md",
        opacity: "o",
        trim: "t",
        zoom: "z",
        page: "pg",
        layerMode: "lm",
        fontSize: "fs",
        fontFamily: "ff",
        fontColor: "co",
        innerAlignment: "ia",
        padding: "pa",
        alpha: "al",
        typography: "tg",
        lineHeight: "lh",
        fontOutline: "fol",
        fontShadow: "fsh",
        raw: "raw"
    };
    var r = (e)=>"query" === e.transformationPosition, n = function(e) {
        return e && (t[e] || t[e.toLowerCase()]) || "";
    }, s = function() {
        return ":";
    }, o = function() {
        return ",";
    }, a = function() {
        return "-";
    };
    const i = function(e) {
        return "undefined" != typeof window ? btoa(e) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(e, "utf8").toString("base64");
    }, u = new RegExp("^[a-zA-Z0-9-._/ ]*$"), c = new RegExp("^[a-zA-Z0-9-._ ]*$");
    function p(e) {
        return "string" == typeof e && "/" == e[e.length - 1] && (e = e.substring(0, e.length - 1)), e;
    }
    function l(e) {
        return "string" == typeof e && "/" == e[0] && (e = e.slice(1)), e;
    }
    function d(e, t) {
        var r = t || "/", n = new RegExp(r + "{1,}", "g");
        return e.join(r).replace(n, r);
    }
    const f = (e)=>{
        if (e.urlEndpoint = e.urlEndpoint || "", e.src = e.src || "", e.transformationPosition = e.transformationPosition || "query", !e.src) return "";
        const t = e.src.startsWith("http://") || e.src.startsWith("https://");
        var n, o, a;
        try {
            t ? (n = new URL(e.src), o = !0) : (a = new URL(e.urlEndpoint).pathname, n = new URL(d([
                e.urlEndpoint.replace(a, ""),
                e.src
            ])));
        } catch (e) {
            return console.error(e), "";
        }
        for(var i in e.queryParameters)n.searchParams.append(i, String(e.queryParameters[i]));
        var u = h(e.transformation);
        return u && u.length && (r(e) || o || (n.pathname = d([
            "tr" + s() + u,
            n.pathname
        ]))), n.pathname = d(a ? [
            a,
            n.pathname
        ] : [
            n.pathname
        ]), u && u.length && (r(e) || o) ? "" !== n.searchParams.toString() ? `${n.href}&tr=${u}` : `${n.href}?tr=${u}` : n.href;
    };
    function g(e, t) {
        return e = p(l(e)), "plain" === t ? "i-" + e.replace(/\//g, "@@") : "base64" === t ? "ie-" + encodeURIComponent(i(e)) : u.test(e) ? "i-" + e.replace(/\//g, "@@") : "ie-" + encodeURIComponent(i(e));
    }
    function m(e) {
        const t = [], { type: r, layerMode: n, position: s = {}, timing: a = {}, transformation: u = [] } = e || {};
        if (!r) return;
        switch(r){
            case "text":
                {
                    const r = e;
                    if (!r.text) return;
                    const n = r.encoding || "auto";
                    t.push("l-text"), t.push(function(e, t) {
                        return "plain" === t ? "i-" + encodeURIComponent(e) : "base64" === t ? "ie-" + encodeURIComponent(i(e)) : c.test(e) ? "i-" + encodeURIComponent(e) : "ie-" + encodeURIComponent(i(e));
                    }(r.text, n));
                }
                break;
            case "image":
                t.push("l-image");
                {
                    const r = e, n = r.encoding || "auto";
                    if (!r.input) return;
                    t.push(g(r.input, n));
                }
                break;
            case "video":
                t.push("l-video");
                {
                    const r = e, n = r.encoding || "auto";
                    if (!r.input) return;
                    t.push(g(r.input, n));
                }
                break;
            case "subtitle":
                t.push("l-subtitles");
                {
                    const r = e, n = r.encoding || "auto";
                    if (!r.input) return;
                    t.push(g(r.input, n));
                }
                break;
            case "solidColor":
                t.push("l-image"), t.push("i-ik_canvas");
                {
                    const r = e;
                    if (!r.color) return;
                    t.push("bg-" + r.color);
                }
        }
        n && t.push("lm-" + n);
        const { x: p, y: l, xCenter: d, yCenter: f, anchorPoint: m, focus: y } = s;
        p && t.push("lx-" + p), l && t.push("ly-" + l), d && t.push("lxc-" + d), f && t.push("lyc-" + f), m && t.push("lap-" + m), y && t.push("lfo-" + y);
        const { start: v, end: b, duration: w } = a;
        v && t.push("lso-" + v), b && t.push("leo-" + b), w && t.push("ldu-" + w);
        const x = h(u);
        return x && "" !== x.trim() && t.push(x), t.push("l-end"), t.join(o());
    }
    const h = function(e) {
        if (!Array.isArray(e)) return "";
        for(var t = [], r = 0, i = e.length; r < i; r++){
            var u = [];
            for(var c in e[r]){
                let t = e[r][c];
                if (null != t) if ("overlay" !== c || "object" != typeof t) {
                    var d = n(c);
                    if (d || (d = c), "" !== d) if ([
                        "e-grayscale",
                        "e-contrast",
                        "e-removedotbg",
                        "e-bgremove",
                        "e-upscale",
                        "e-retouch",
                        "e-genvar"
                    ].includes(d)) {
                        if (!0 !== t && "-" !== t && "true" !== t) continue;
                        u.push(d);
                    } else ![
                        "e-sharpen",
                        "e-shadow",
                        "e-gradient",
                        "e-usm",
                        "e-dropshadow"
                    ].includes(d) || "" !== t.toString().trim() && !0 !== t && "true" !== t ? "raw" === c ? u.push(e[r][c]) : ("di" === d && (t = p(l(t || "")), t = t.replace(/\//g, "@@")), "sr" === d && Array.isArray(t) && (t = t.join("_")), "t" === d && "" === t.toString().trim() && (t = "true"), u.push([
                        d,
                        t
                    ].join(a()))) : u.push(d);
                } else {
                    var f = m(t);
                    f && "" !== f.trim() && u.push(f);
                }
            }
            u.length && t.push(u.join(o()));
        }
        return t.join(s());
    }, y = [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
    ], v = [
        16,
        32,
        48,
        64,
        96,
        128,
        256,
        384
    ];
    var b = {
        message: "Missing file parameter for upload"
    }, w = {
        message: "Missing fileName parameter for upload"
    }, x = {
        message: "Missing public key for upload"
    }, k = {
        message: "Request to ImageKit upload endpoint failed due to network error"
    }, S = {
        message: "Missing signature for upload. The SDK expects token, signature and expire for authentication."
    }, R = {
        message: "Missing token for upload. The SDK expects token, signature and expire for authentication."
    }, E = {
        message: "Missing expire for upload. The SDK expects token, signature and expire for authentication."
    }, I = {
        message: "Invalid transformation parameter. Please include at least pre, post, or both."
    }, A = {
        message: "Invalid pre transformation parameter."
    }, M = {
        message: "Invalid post transformation parameter."
    };
    class P extends Error {
        constructor(e, t){
            super(e), this.$ResponseMetadata = void 0, this.name = "ImageKitInvalidRequestError", this.$ResponseMetadata = t;
        }
    }
    class j extends Error {
        constructor(e, t){
            super(e), this.reason = void 0, this.name = "ImageKitAbortError", this.reason = t;
        }
    }
    class K extends Error {
        constructor(e){
            super(e), this.name = "ImageKitUploadNetworkError";
        }
    }
    class C extends Error {
        constructor(e, t){
            super(e), this.$ResponseMetadata = void 0, this.name = "ImageKitServerError", this.$ResponseMetadata = t;
        }
    }
    const O = (e, t)=>{
        let r = {
            ...e
        };
        const n = q(t);
        return Object.defineProperty(r, "$ResponseMetadata", {
            value: n,
            enumerable: !1,
            writable: !1
        }), r;
    }, q = (e)=>{
        const t = function(e) {
            const t = {}, r = e.getAllResponseHeaders();
            Object.keys(r).length && r.trim().split(/[\r\n]+/).map((e)=>e.split(/: /)).forEach((e)=>{
                t[e[0].trim().toLowerCase()] = e[1].trim();
            });
            return t;
        }(e);
        return {
            statusCode: e.status,
            headers: t,
            requestId: t["x-request-id"]
        };
    };
    e.ImageKitAbortError = j, e.ImageKitInvalidRequestError = P, e.ImageKitServerError = C, e.ImageKitUploadNetworkError = K, e.buildSrc = f, e.buildTransformationString = h, e.getResponsiveImageAttributes = function(e) {
        const { src: t, urlEndpoint: r, transformation: n = [], queryParameters: s, transformationPosition: o, sizes: a, width: i, deviceBreakpoints: u = y, imageBreakpoints: c = v } = e, p = [
            ...u
        ].sort((e, t)=>e - t), l = [
            ...[
                ...c
            ].sort((e, t)=>e - t),
            ...p
        ].sort((e, t)=>e - t), { candidates: d, descriptorKind: g } = function(e) {
            const { allBreakpoints: t, deviceBreakpoints: r, explicitWidth: n, sizesAttr: s } = e;
            if (s) {
                const e = (s.match(/(^|\s)(1?\d{1,2})vw/g) || []).map((e)=>parseInt(e, 10));
                if (e.length) {
                    const n = Math.min(...e) / 100, s = r[0] * n;
                    return {
                        candidates: t.filter((e)=>e >= s),
                        descriptorKind: "w"
                    };
                }
                return {
                    candidates: t,
                    descriptorKind: "w"
                };
            }
            if ("number" != typeof n) return {
                candidates: r,
                descriptorKind: "w"
            };
            const o = (e)=>t.find((t)=>t >= e) || t[t.length - 1];
            return {
                candidates: Array.from(new Set([
                    o(n),
                    o(2 * n)
                ])),
                descriptorKind: "x"
            };
        }({
            allBreakpoints: l,
            deviceBreakpoints: p,
            explicitWidth: i,
            sizesAttr: a
        }), m = (e)=>f({
                src: t,
                urlEndpoint: r,
                queryParameters: s,
                transformationPosition: o,
                transformation: [
                    ...n,
                    {
                        width: e,
                        crop: "at_max"
                    }
                ]
            }), h = d.map((e, t)=>`${m(e)} ${"w" === g ? e : t + 1}${g}`).join(", ") || void 0, b = a ?? ("w" === g ? "100vw" : void 0);
        return {
            src: m(d[d.length - 1]),
            srcSet: h,
            ...b ? {
                sizes: b
            } : {},
            ...void 0 !== i ? {
                width: i
            } : {}
        };
    }, e.upload = (e)=>e ? new Promise((t, r)=>{
            const { xhr: n } = e || {};
            delete e.xhr;
            const s = n || new XMLHttpRequest;
            if (!e.file) return r(new P(b.message));
            if (!e.fileName) return r(new P(w.message));
            if (!e.publicKey || 0 === e.publicKey.length) return r(new P(x.message));
            if (!e.token) return r(new P(R.message));
            if (!e.signature) return r(new P(S.message));
            if (!e.expire) return r(new P(E.message));
            if (e.transformation) {
                if (!Object.keys(e.transformation).includes("pre") && !Object.keys(e.transformation).includes("post")) return r(new P(I.message));
                if (Object.keys(e.transformation).includes("pre") && !e.transformation.pre) return r(new P(A.message));
                if (Object.keys(e.transformation).includes("post")) {
                    if (!Array.isArray(e.transformation.post)) return r(new P(M.message));
                    for (let t of e.transformation.post){
                        if ("abs" === t.type && !t.protocol && !t.value) return r(new P(M.message));
                        if ("transformation" === t.type && !t.value) return r(new P(M.message));
                    }
                }
            }
            var o = new FormData;
            let a;
            for(a in e)if (a) if ("file" === a && "string" != typeof e.file) o.set("file", e.file, String(e.fileName));
            else if ("tags" === a && Array.isArray(e.tags)) o.set("tags", e.tags.join(","));
            else if ("signature" === a) o.set("signature", e.signature);
            else if ("expire" === a) o.set("expire", String(e.expire));
            else if ("token" === a) o.set("token", e.token);
            else if ("responseFields" === a && Array.isArray(e.responseFields)) o.set("responseFields", e.responseFields.join(","));
            else if ("extensions" === a && Array.isArray(e.extensions)) o.set("extensions", JSON.stringify(e.extensions));
            else if ("customMetadata" !== a || "object" != typeof e.customMetadata || Array.isArray(e.customMetadata) || null === e.customMetadata) {
                if ("transformation" === a && "object" == typeof e.transformation && null !== e.transformation) o.set(a, JSON.stringify(e.transformation));
                else if ("checks" === a && e.checks) o.set("checks", e.checks);
                else if (void 0 !== e[a]) {
                    if ([
                        "onProgress",
                        "abortSignal"
                    ].includes(a)) continue;
                    o.set(a, String(e[a]));
                }
            } else o.set("customMetadata", JSON.stringify(e.customMetadata));
            function i() {
                var t;
                return s.abort(), r(new j("Upload aborted", null === (t = e.abortSignal) || void 0 === t ? void 0 : t.reason));
            }
            if (e.onProgress && (s.upload.onprogress = function(t) {
                e.onProgress && e.onProgress(t);
            }), e.abortSignal) {
                var u;
                if (e.abortSignal.aborted) return r(new j("Upload aborted", null === (u = e.abortSignal) || void 0 === u ? void 0 : u.reason));
                e.abortSignal.addEventListener("abort", i), s.addEventListener("loadend", ()=>{
                    e.abortSignal && e.abortSignal.removeEventListener("abort", i);
                });
            }
            s.open("POST", "https://upload.imagekit.io/api/v1/files/upload"), s.onerror = function(e) {
                return r(new K(k.message));
            }, s.onload = function() {
                if (s.status >= 200 && s.status < 300) try {
                    var e = JSON.parse(s.responseText), n = O(e, s);
                    return t(n);
                } catch (e) {
                    return r(e);
                }
                else if (s.status >= 400 && s.status < 500) try {
                    e = JSON.parse(s.responseText);
                    return r(new P(e.message ?? "Invalid request. Please check the parameters.", q(s)));
                } catch (e) {
                    return r(e);
                }
                else try {
                    e = JSON.parse(s.responseText);
                    return r(new C(e.message ?? "Server error occurred while uploading the file. This is rare and usually temporary.", q(s)));
                } catch (e) {
                    return r(new C("Server error occurred while uploading the file. This is rare and usually temporary.", q(s)));
                }
            }, s.send(o);
        }) : Promise.reject(new P("Invalid options provided for upload")), Object.defineProperty(e, "__esModule", {
        value: !0
    });
});
}),
"[project]/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    getImageProps: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _getimgprops = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)");
const _imagecomponent = __turbopack_context__.r("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)"));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: ("TURBOPACK compile-time value", {
            "deviceSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 640),
                ("TURBOPACK compile-time value", 750),
                ("TURBOPACK compile-time value", 828),
                ("TURBOPACK compile-time value", 1080),
                ("TURBOPACK compile-time value", 1200),
                ("TURBOPACK compile-time value", 1920),
                ("TURBOPACK compile-time value", 2048),
                ("TURBOPACK compile-time value", 3840)
            ]),
            "imageSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 32),
                ("TURBOPACK compile-time value", 48),
                ("TURBOPACK compile-time value", 64),
                ("TURBOPACK compile-time value", 96),
                ("TURBOPACK compile-time value", 128),
                ("TURBOPACK compile-time value", 256),
                ("TURBOPACK compile-time value", 384)
            ]),
            "qualities": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 75)
            ]),
            "path": ("TURBOPACK compile-time value", "/_next/image"),
            "loader": ("TURBOPACK compile-time value", "default"),
            "dangerouslyAllowSVG": ("TURBOPACK compile-time value", false),
            "unoptimized": ("TURBOPACK compile-time value", false),
            "domains": ("TURBOPACK compile-time value", []),
            "remotePatterns": ("TURBOPACK compile-time value", []),
            "localPatterns": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", {
                    "pathname": ("TURBOPACK compile-time value", "**"),
                    "search": ("TURBOPACK compile-time value", "")
                })
            ])
        })
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image;
}),
"[project]/node_modules/next/image.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@imagekit/next/dist/client/index-esm.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Image",
    ()=>Image,
    "ImageKitContext",
    ()=>ImageKitContext,
    "ImageKitProvider",
    ()=>ImageKitProvider,
    "Video",
    ()=>Video
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$imagekit$2f$javascript$2f$dist$2f$imagekit$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@imagekit/javascript/dist/imagekit.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
;
;
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
const ImageKitContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
/**
 * You can use the `ImageKitProvider` component to set the default values for all nested Image and Video components provided by the SDK.
 *
 * It accepts the following props:
 * - `urlEndpoint`: The URL endpoint for your ImageKit account. You can get this from the [ImageKit dashboard](https://imagekit.io/dashboard/url-endpoints).
 * - `transformationPosition`: The position of the transformation string in the URL. It can be either `path` or `query`. By default, it is set to `query`.
 *
 * @example
 * ```jsx
 * import { ImageKitProvider, Image } from "@imagekit/next";
 * <ImageKitProvider urlEndpoint="https://ik.imagekit.io/your_imagekit_id">
 *   <Image src="/default-image.jpg" />
 * </ImageKitProvider>
 * ```
 */ const ImageKitProvider = (props)=>{
    const { urlEndpoint, transformationPosition } = props;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ImageKitContext.Provider, {
        value: {
            urlEndpoint,
            transformationPosition
        }
    }, props.children);
};
/**
 * The Image component is a wrapper around the Next.js Image component. It supports all the features of the Next.js Image component, along with additional features provided by ImageKit.
 *
 * @example
 * ```jsx
 * import { Image } from "@imagekit/next";
 * <Image
 *  urlEndpoint="https://ik.imagekit.io/your_imagekit_id" // You can also set this in a parent ImageKitProvider component
 *  src="/default-image.jpg" // The path to the image in your ImageKit account
 *  alt="Default Image"
 *  width={500}
 *  height={500}
 *  transformation={[{ width: 500, height: 500 }]} // Add ImageKit transformations
 * />
 * ```
 */ const Image = (props)=>{
    if (props.loader) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn('loader prop is ignored by ImageKit Image component.');
        }
    }
    const contextValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ImageKitContext);
    // Its important to extract the ImageKit specific props from the props, so that we can use the rest of the props as is in the NextImage component
    const _a = Object.assign(Object.assign({}, contextValues), props // Override with props
    ), { transformation = [], unoptimized = false, quality, src = "", queryParameters, urlEndpoint, transformationPosition, responsive = true, loader } = _a, nonIKParams = __rest(_a, [
        "transformation",
        "unoptimized",
        "quality",
        "src",
        "queryParameters",
        "urlEndpoint",
        "transformationPosition",
        "responsive",
        "loader"
    ]);
    if (!urlEndpoint || urlEndpoint.trim() === "") {
        if ("TURBOPACK compile-time truthy", 1) {
            console.error("urlEndpoint is neither provided in this component nor in the ImageKitContext.");
        }
        return null;
    }
    const isAbsoluteURL = src.startsWith("http://") || src.startsWith("https://");
    // Do not mutate original transformation array from the props
    const finalTransformation = [
        ...transformation
    ];
    let propsTransformation = {};
    if (quality) {
        const parsedQuality = Number(quality);
        if (!isNaN(parsedQuality)) {
            propsTransformation.quality = parsedQuality;
        } else {
            if ("TURBOPACK compile-time truthy", 1) {
                console.error('Invalid quality value, skipping transformation.');
            }
        }
    }
    // Return original file without any transformation or optimization to match the behavior of NextImage
    // Always keep src in the end
    if (unoptimized) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], Object.assign({
            unoptimized: true
        }, nonIKParams, {
            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$imagekit$2f$javascript$2f$dist$2f$imagekit$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSrc"])({
                urlEndpoint,
                src,
                queryParameters,
                transformationPosition,
                transformation: [
                    {
                        "raw": "orig-true"
                    }
                ]
            })
        }));
    }
    // User disabled responsive images
    if (!responsive) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], Object.assign({
            unoptimized: true
        }, nonIKParams, {
            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$imagekit$2f$javascript$2f$dist$2f$imagekit$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSrc"])({
                urlEndpoint,
                src,
                queryParameters,
                transformationPosition,
                // keep only user‑supplied transformations;no width, no crop
                transformation: [
                    ...finalTransformation,
                    Object.assign({}, propsTransformation)
                ]
            })
        }));
    }
    // Don't pass transformation just yet as loader will take care of it along with width for srcset generation as per Next.js logic.
    const finalSrcWithoutTransformation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$imagekit$2f$javascript$2f$dist$2f$imagekit$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSrc"])({
        urlEndpoint,
        queryParameters,
        src
    });
    return(// Always keep src in the end
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], Object.assign({
        loader: ({ src, width })=>{
            // Since `src` inside loader is always absolute, `buildSrc` won't respect the `path` transformation position.
            // To fix this, if the original src prop isn't an absolute URL, remove `urlEndpoint` from this `src`
            // before calling `buildSrc`. Otherwise, leave it as is.
            const srcWithoutUrlEndpoint = !isAbsoluteURL ? src.replace(urlEndpoint, "") : src;
            const finalSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$imagekit$2f$javascript$2f$dist$2f$imagekit$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSrc"])({
                urlEndpoint,
                src: srcWithoutUrlEndpoint,
                transformationPosition,
                transformation: [
                    ...finalTransformation,
                    Object.assign(Object.assign({}, propsTransformation), {
                        width,
                        crop: "at_max"
                    })
                ]
            });
            return finalSrc;
        }
    }, nonIKParams, {
        src: finalSrcWithoutTransformation
    })));
};
/**
 * The Video component is a wrapper around the HTML video element. It supports all the features of the HTML video element, along with additional features provided by ImageKit.
 *
 * @example
 * ```jsx
 * import { Video } from "@imagekit/next";
 * <Video
 *  urlEndpoint="https://ik.imagekit.io/your_imagekit_id" // You can also set this in a parent ImageKitProvider component
 *  src="/default-video.mp4" // The path to the video in your ImageKit account
 *  controls
 *  width={500}
 *  height={500}
 *  transformation={[{ width: 500, height: 500 }]} // Add ImageKit transformations
 * />
 * ```
 *
 * @example
 * ```jsx
 * // With ref for programmatic control
 * const videoRef = useRef<HTMLVideoElement>(null);
 * <Video
 *  ref={videoRef}
 *  urlEndpoint="https://ik.imagekit.io/your_imagekit_id"
 *  src="/default-video.mp4"
 *  muted
 *  playsInline
 * />
 * ```
 */ const Video = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const contextValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ImageKitContext);
    // Its important to extract the ImageKit specific props from the props, so that we can use the rest of the props as is in the video element
    const _a = Object.assign(Object.assign({}, contextValues), props // Override with props
    ), { transformation = [], src = "", queryParameters, urlEndpoint, transformationPosition } = _a, nonIKParams = __rest(_a, [
        "transformation",
        "src",
        "queryParameters",
        "urlEndpoint",
        "transformationPosition"
    ]);
    if (!urlEndpoint || urlEndpoint.trim() === "") {
        if ("TURBOPACK compile-time truthy", 1) {
            console.error("urlEndpoint is neither provided in this component nor in the ImageKitContext.");
        }
        return null;
    }
    const finalSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$imagekit$2f$javascript$2f$dist$2f$imagekit$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSrc"])({
        urlEndpoint,
        src,
        transformation: [
            ...transformation
        ],
        // Do not mutate original transformation array from the props
        queryParameters,
        transformationPosition
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("video", Object.assign({
        ref: ref
    }, nonIKParams, {
        src: finalSrc
    }));
});
Video.displayName = "Video";
;
}),
]);

//# sourceMappingURL=_008-te6._.js.map