module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/riterealty/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.0x3dzn~oxb6tn.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/riterealty/app/favicon.ico.mjs { IMAGE => \"[project]/riterealty/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/riterealty/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[project]/riterealty/lib/mongodb.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connectToDatabase",
    ()=>connectToDatabase
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$dns__$5b$external$5d$__$28$dns$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dns [external] (dns, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$riterealty$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/riterealty/node_modules/mongoose)");
;
;
function setMongoDnsServers() {
    const useCustomDns = process.env.MONGODB_ENABLE_CUSTOM_DNS === "true";
    if (!useCustomDns) return;
    const servers = process.env.MONGODB_DNS_SERVERS;
    if (!servers) return;
    const list = servers.split(",").map((server)=>server.trim()).filter(Boolean);
    if (list.length > 0) {
        try {
            __TURBOPACK__imported__module__$5b$externals$5d2f$dns__$5b$external$5d$__$28$dns$2c$__cjs$29$__["default"].setServers(list);
        } catch (error) {
            if ("TURBOPACK compile-time truthy", 1) {
                console.warn("Failed to apply custom Mongo DNS servers:", error);
            }
        }
    }
}
function getMongoUri() {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        throw new Error("Missing MONGODB_URI in environment variables.");
    }
    return uri;
}
setMongoDnsServers();
const cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongooseCache ?? {
    conn: null,
    promise: null
};
/*TURBOPACK member replacement*/ __turbopack_context__.g.mongooseCache = cached;
async function connectToDatabase() {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$riterealty$2f$node_modules$2f$mongoose$29$__["default"].connect(getMongoUri());
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
}),
"[project]/riterealty/lib/models/Banner.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BannerModel",
    ()=>BannerModel
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$riterealty$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/riterealty/node_modules/mongoose)");
;
const BannerSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$riterealty$2f$node_modules$2f$mongoose$29$__["Schema"]({
    projectName: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    subtitle: {
        type: String,
        required: true,
        trim: true
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true
    },
    ctaLabel: {
        type: String,
        required: true,
        trim: true
    },
    ctaHref: {
        type: String,
        required: true,
        trim: true
    },
    updatedBy: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const BannerModel = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$riterealty$2f$node_modules$2f$mongoose$29$__["models"].Banner ?? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$riterealty$2f$node_modules$2f$mongoose$29$__["model"])("Banner", BannerSchema);
}),
"[project]/riterealty/lib/constants.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/riterealty/lib/models/Property.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PropertyModel",
    ()=>PropertyModel
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$riterealty$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/riterealty/node_modules/mongoose)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/lib/constants.ts [app-rsc] (ecmascript)");
;
;
const PropertySchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$riterealty$2f$node_modules$2f$mongoose$29$__["Schema"]({
    propertyTitle: {
        type: String,
        required: true,
        trim: true
    },
    propertyType: {
        type: String,
        enum: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PROPERTY_TYPES"],
        required: true
    },
    listingType: {
        type: String,
        enum: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LISTING_TYPES"],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    priceUnit: {
        type: String,
        enum: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRICE_UNITS"],
        required: true
    },
    areaSize: {
        type: Number,
        required: true
    },
    areaUnit: {
        type: String,
        enum: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AREA_UNITS"],
        required: true
    },
    propertyCode: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    city: {
        type: String,
        required: true,
        default: "Kurukshetra",
        trim: true
    },
    areaSector: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    fullAddress: {
        type: String,
        required: true,
        trim: true
    },
    mapLocation: {
        lat: {
            type: Number,
            required: true
        },
        lng: {
            type: Number,
            required: true
        }
    },
    builderName: {
        type: String,
        required: true,
        trim: true
    },
    projectName: {
        type: String,
        required: true,
        trim: true
    },
    projectStatus: {
        type: String,
        enum: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PROJECT_STATUSES"],
        required: true
    },
    possessionDate: {
        type: Date,
        default: null
    },
    reraNumber: {
        type: String,
        trim: true,
        default: ""
    },
    flatConfig: {
        bhk: {
            type: Number,
            default: null
        },
        bathrooms: {
            type: Number,
            default: null
        },
        balconies: {
            type: Number,
            default: null
        },
        floorNumber: {
            type: Number,
            default: null
        },
        totalFloors: {
            type: Number,
            default: null
        }
    },
    plotConfig: {
        plotArea: {
            type: Number,
            default: null
        },
        facing: {
            type: String,
            enum: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FACING_OPTIONS"],
            default: null
        },
        roadWidth: {
            type: Number,
            default: null
        }
    },
    coverImageUrl: {
        type: String,
        required: true,
        trim: true
    },
    galleryImageUrls: {
        type: [
            String
        ],
        default: []
    },
    videoUrl: {
        type: String,
        trim: true,
        default: ""
    },
    view360Url: {
        type: String,
        trim: true,
        default: ""
    },
    shortDescription: {
        type: String,
        required: true,
        trim: true
    },
    detailedDescription: {
        type: String,
        required: true,
        trim: true
    },
    keyHighlights: {
        type: [
            String
        ],
        default: []
    },
    amenities: {
        type: [
            String
        ],
        enum: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AMENITY_OPTIONS"],
        default: []
    },
    contactName: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    whatsappNumber: {
        type: String,
        required: true,
        trim: true
    },
    alternateNumber: {
        type: String,
        trim: true,
        default: ""
    },
    featuredProperty: {
        type: Boolean,
        default: false
    },
    verifiedBadge: {
        type: Boolean,
        default: false
    },
    newLaunch: {
        type: Boolean,
        default: false
    },
    recordStatus: {
        type: String,
        enum: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PROPERTY_RECORD_STATUSES"],
        default: "draft"
    },
    metaTitle: {
        type: String,
        required: true,
        trim: true
    },
    metaDescription: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    createdBy: {
        type: String,
        required: true
    },
    updatedBy: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const PropertyModel = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$riterealty$2f$node_modules$2f$mongoose$29$__["models"].Property ?? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$riterealty$2f$node_modules$2f$mongoose$29$__["model"])("Property", PropertySchema);
}),
"[project]/riterealty/lib/public-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLatestBannerFromDb",
    ()=>getLatestBannerFromDb,
    "getPublishedProperties",
    ()=>getPublishedProperties,
    "getPublishedPropertiesByArea",
    ()=>getPublishedPropertiesByArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/lib/mongodb.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$models$2f$Banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/lib/models/Banner.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$models$2f$Property$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/lib/models/Property.ts [app-rsc] (ecmascript)");
;
;
;
async function getLatestBannerFromDb() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    const banner = await __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$models$2f$Banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BannerModel"].findOne({}, {}, {
        sort: {
            updatedAt: -1
        }
    }).lean();
    if (banner) {
        return banner;
    }
    return {
        projectName: "Rite Realty",
        title: "Find Premium Projects In Kurukshetra",
        subtitle: "Explore verified plots, villas, and commercial investments in top growth sectors.",
        imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80",
        ctaLabel: "Explore Projects",
        ctaHref: "/projects/new-launch"
    };
}
async function getPublishedProperties(limit = 6) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$models$2f$Property$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PropertyModel"].find({
        recordStatus: "published"
    }, {}, {
        sort: {
            createdAt: -1
        },
        limit
    }).lean();
}
async function getPublishedPropertiesByArea(area) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$models$2f$Property$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PropertyModel"].find({
        recordStatus: "published",
        areaSector: {
            $regex: `^${area}$`,
            $options: "i"
        }
    }, {}, {
        sort: {
            createdAt: -1
        }
    }).lean();
}
}),
"[project]/riterealty/app/components/BannerSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BannerSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$public$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/lib/public-data.ts [app-rsc] (ecmascript)");
;
;
;
async function BannerSection() {
    const banner = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$public$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLatestBannerFromDb"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto mt-10 w-full max-w-7xl px-4 md:px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-900 px-6 py-16 text-white md:px-12",
            style: {
                backgroundImage: `linear-gradient(100deg, rgba(9, 9, 11, 0.87), rgba(24, 24, 27, 0.5)), url('${banner.imageUrl}')`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-semibold tracking-[0.16em] text-amber-200",
                    children: banner.projectName
                }, void 0, false, {
                    fileName: "[project]/riterealty/app/components/BannerSection.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "mt-3 max-w-3xl text-3xl font-bold leading-tight md:text-5xl",
                    children: banner.title
                }, void 0, false, {
                    fileName: "[project]/riterealty/app/components/BannerSection.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 max-w-2xl text-base text-zinc-100 md:text-lg",
                    children: banner.subtitle
                }, void 0, false, {
                    fileName: "[project]/riterealty/app/components/BannerSection.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: banner.ctaHref,
                        className: "inline-flex rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-amber-300",
                        children: banner.ctaLabel
                    }, void 0, false, {
                        fileName: "[project]/riterealty/app/components/BannerSection.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/riterealty/app/components/BannerSection.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/riterealty/app/components/BannerSection.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/riterealty/app/components/BannerSection.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/riterealty/app/components/FeaturedProperties.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeaturedProperties
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$public$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/lib/public-data.ts [app-rsc] (ecmascript)");
;
;
;
async function FeaturedProperties() {
    const properties = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$public$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPublishedProperties"])(6);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto mt-10 mb-16 w-full max-w-7xl px-4 md:px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex items-end justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold text-zinc-900",
                        children: "Featured Properties"
                    }, void 0, false, {
                        fileName: "[project]/riterealty/app/components/FeaturedProperties.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/cms",
                        className: "text-sm font-semibold text-zinc-700 hover:text-zinc-900",
                        children: "Open CMS"
                    }, void 0, false, {
                        fileName: "[project]/riterealty/app/components/FeaturedProperties.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/riterealty/app/components/FeaturedProperties.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            properties.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-zinc-200 bg-zinc-50 p-5 text-sm text-zinc-700",
                children: "No published properties yet."
            }, void 0, false, {
                fileName: "[project]/riterealty/app/components/FeaturedProperties.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 md:grid-cols-2",
                children: properties.map((property)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "rounded-xl border border-zinc-200 bg-zinc-50 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                children: property.recordStatus
                            }, void 0, false, {
                                fileName: "[project]/riterealty/app/components/FeaturedProperties.tsx",
                                lineNumber: 24,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mt-1 text-lg font-semibold text-zinc-900",
                                children: property.propertyTitle
                            }, void 0, false, {
                                fileName: "[project]/riterealty/app/components/FeaturedProperties.tsx",
                                lineNumber: 27,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-zinc-600",
                                children: [
                                    property.propertyType,
                                    " - ",
                                    property.areaSector,
                                    ", ",
                                    property.city
                                ]
                            }, void 0, true, {
                                fileName: "[project]/riterealty/app/components/FeaturedProperties.tsx",
                                lineNumber: 28,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm font-medium text-zinc-900",
                                children: [
                                    "INR ",
                                    property.price
                                ]
                            }, void 0, true, {
                                fileName: "[project]/riterealty/app/components/FeaturedProperties.tsx",
                                lineNumber: 31,
                                columnNumber: 15
                            }, this)
                        ]
                    }, String(property._id), true, {
                        fileName: "[project]/riterealty/app/components/FeaturedProperties.tsx",
                        lineNumber: 23,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/riterealty/app/components/FeaturedProperties.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/riterealty/app/components/FeaturedProperties.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/riterealty/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$app$2f$components$2f$BannerSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/app/components/BannerSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$app$2f$components$2f$FeaturedProperties$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/app/components/FeaturedProperties.tsx [app-rsc] (ecmascript)");
;
;
;
const dynamic = "force-dynamic";
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$app$2f$components$2f$BannerSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/riterealty/app/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$app$2f$components$2f$FeaturedProperties$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/riterealty/app/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/riterealty/app/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/riterealty/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/riterealty/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__06h6g5u._.js.map