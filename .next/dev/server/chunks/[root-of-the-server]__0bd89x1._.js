module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/riterealty/lib/mongodb.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connectToDatabase",
    ()=>connectToDatabase
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$riterealty$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/riterealty/node_modules/mongoose)");
;
function getMongoUri() {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        throw new Error("Missing MONGODB_URI in environment variables.");
    }
    return uri;
}
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
"[project]/riterealty/lib/constants.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/riterealty/lib/models/User.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserModel",
    ()=>UserModel
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$riterealty$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/riterealty/node_modules/mongoose)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/lib/constants.ts [app-route] (ecmascript)");
;
;
const UserSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$riterealty$2f$node_modules$2f$mongoose$29$__["Schema"]({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["USER_ROLES"],
        required: true
    }
}, {
    timestamps: true
});
const UserModel = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$riterealty$2f$node_modules$2f$mongoose$29$__["models"].User ?? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$riterealty$2f$node_modules$2f$mongoose$29$__["model"])("User", UserSchema);
}),
"[project]/riterealty/lib/session.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SESSION_COOKIE_NAME",
    ()=>SESSION_COOKIE_NAME,
    "signSessionToken",
    ()=>signSessionToken,
    "verifySessionToken",
    ()=>verifySessionToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/node_modules/jose/dist/webapi/jwt/sign.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/node_modules/jose/dist/webapi/jwt/verify.js [app-route] (ecmascript)");
;
const SESSION_COOKIE_NAME = "riterealty_session";
function getSessionSecret() {
    const sessionSecret = process.env.SESSION_SECRET;
    if (!sessionSecret) {
        throw new Error("Missing SESSION_SECRET in environment variables.");
    }
    return new TextEncoder().encode(sessionSecret);
}
async function signSessionToken(payload) {
    const secret = getSessionSecret();
    return new __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignJWT"]({
        role: payload.role,
        email: payload.email,
        name: payload.name
    }).setProtectedHeader({
        alg: "HS256"
    }).setSubject(payload.sub).setIssuedAt().setExpirationTime("7d").sign(secret);
}
async function verifySessionToken(token) {
    const secret = getSessionSecret();
    const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtVerify"])(token, secret);
    return payload;
}
}),
"[project]/riterealty/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ForbiddenError",
    ()=>ForbiddenError,
    "UnauthorizedError",
    ()=>UnauthorizedError,
    "getSessionUser",
    ()=>getSessionUser,
    "requireRole",
    ()=>requireRole,
    "requireSessionUser",
    ()=>requireSessionUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$riterealty$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/riterealty/node_modules/mongoose)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/lib/mongodb.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/lib/models/User.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/lib/session.ts [app-route] (ecmascript)");
;
;
;
;
;
class UnauthorizedError extends Error {
    status = 401;
}
class ForbiddenError extends Error {
    status = 403;
}
function toSessionUser(user) {
    return {
        id: String(user._id),
        name: user.name,
        email: user.email,
        role: user.role
    };
}
async function getSessionUser() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookieStore.get(__TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SESSION_COOKIE_NAME"])?.value;
    if (!token) {
        return null;
    }
    try {
        const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifySessionToken"])(token);
        if (!payload.sub || !__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$riterealty$2f$node_modules$2f$mongoose$29$__["Types"].ObjectId.isValid(payload.sub)) {
            return null;
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserModel"].findById(payload.sub).lean();
        if (!user) {
            return null;
        }
        return toSessionUser(user);
    } catch  {
        return null;
    }
}
async function requireSessionUser() {
    const user = await getSessionUser();
    if (!user) {
        throw new UnauthorizedError("Please login to continue.");
    }
    return user;
}
async function requireRole(roles) {
    const user = await requireSessionUser();
    if (!roles.includes(user.role)) {
        throw new ForbiddenError("You do not have permission for this action.");
    }
    return user;
}
}),
"[project]/riterealty/lib/api-response.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleApiError",
    ()=>handleApiError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/node_modules/zod/v4/classic/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/lib/auth.ts [app-route] (ecmascript)");
;
;
;
function handleApiError(error) {
    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodError"]) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Validation failed.",
            issues: error.flatten()
        }, {
            status: 400
        });
    }
    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnauthorizedError"] || error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ForbiddenError"]) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message
        }, {
            status: error.status
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: "Something went wrong."
    }, {
        status: 500
    });
}
}),
"[project]/riterealty/lib/models/Property.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PropertyModel",
    ()=>PropertyModel
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$riterealty$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/riterealty/node_modules/mongoose)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/lib/constants.ts [app-route] (ecmascript)");
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
        enum: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PROPERTY_TYPES"],
        required: true
    },
    listingType: {
        type: String,
        enum: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LISTING_TYPES"],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    priceUnit: {
        type: String,
        enum: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PRICE_UNITS"],
        required: true
    },
    areaSize: {
        type: Number,
        required: true
    },
    areaUnit: {
        type: String,
        enum: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AREA_UNITS"],
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
        enum: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PROJECT_STATUSES"],
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
            enum: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FACING_OPTIONS"],
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
        enum: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AMENITY_OPTIONS"],
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
        enum: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PROPERTY_RECORD_STATUSES"],
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
"[project]/riterealty/lib/property-normalize.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizePropertyPayload",
    ()=>normalizePropertyPayload
]);
function toNumber(value, fallback = 0) {
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
function toNullableNumber(value) {
    if (value === null || value === undefined || value === "") {
        return null;
    }
    const parsed = toNumber(value, Number.NaN);
    return Number.isFinite(parsed) ? parsed : null;
}
function toBoolean(value) {
    if (typeof value === "boolean") {
        return value;
    }
    if (typeof value === "string") {
        return value === "true";
    }
    return false;
}
function toStringArray(value) {
    if (Array.isArray(value)) {
        return value.filter((item)=>typeof item === "string");
    }
    if (typeof value === "string") {
        return value.split(",").map((entry)=>entry.trim()).filter((entry)=>entry.length > 0);
    }
    return [];
}
function normalizePropertyPayload(payload) {
    const data = payload ?? {};
    const mapLocation = data.mapLocation ?? {};
    const flatConfig = data.flatConfig ?? {};
    const plotConfig = data.plotConfig ?? {};
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
            lng: toNumber(mapLocation.lng)
        },
        builderName: String(data.builderName ?? ""),
        projectName: String(data.projectName ?? ""),
        projectStatus: String(data.projectStatus ?? ""),
        possessionDate: typeof data.possessionDate === "string" && data.possessionDate.length > 0 ? data.possessionDate : null,
        reraNumber: String(data.reraNumber ?? ""),
        flatConfig: {
            bhk: toNullableNumber(flatConfig.bhk),
            bathrooms: toNullableNumber(flatConfig.bathrooms),
            balconies: toNullableNumber(flatConfig.balconies),
            floorNumber: toNullableNumber(flatConfig.floorNumber),
            totalFloors: toNullableNumber(flatConfig.totalFloors)
        },
        plotConfig: {
            plotArea: toNullableNumber(plotConfig.plotArea),
            facing: typeof plotConfig.facing === "string" && plotConfig.facing.length > 0 ? plotConfig.facing : null,
            roadWidth: toNullableNumber(plotConfig.roadWidth)
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
        slug: data.slug ? String(data.slug) : undefined
    };
}
}),
"[project]/riterealty/lib/property-id.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generatePropertyId",
    ()=>generatePropertyId
]);
function generatePropertyId() {
    const timePart = Date.now().toString(36).toUpperCase();
    const randomPart = Math.random().toString(36).slice(2, 6).toUpperCase();
    return `RR-${timePart}-${randomPart}`;
}
}),
"[project]/riterealty/lib/slug.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toSlug",
    ()=>toSlug
]);
function toSlug(value) {
    return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
}),
"[project]/riterealty/lib/validation.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bannerSchema",
    ()=>bannerSchema,
    "createUserSchema",
    ()=>createUserSchema,
    "loginSchema",
    ()=>loginSchema,
    "propertySchema",
    ()=>propertySchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/riterealty/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/lib/constants.ts [app-route] (ecmascript)");
;
;
const loginSchema = __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email(),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(6)
});
const createUserSchema = __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email(),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(8),
    role: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["USER_ROLES"])
});
const flatConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    bhk: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(1).max(10).nullable().optional(),
    bathrooms: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0).max(20).nullable().optional(),
    balconies: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0).max(20).nullable().optional(),
    floorNumber: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0).max(200).nullable().optional(),
    totalFloors: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0).max(200).nullable().optional()
});
const plotConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    plotArea: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive().nullable().optional(),
    facing: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FACING_OPTIONS"]).nullable().optional(),
    roadWidth: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive().nullable().optional()
});
const propertySchema = __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    propertyTitle: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(5).max(120),
    propertyType: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PROPERTY_TYPES"]),
    listingType: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LISTING_TYPES"]),
    price: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive(),
    priceUnit: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PRICE_UNITS"]),
    areaSize: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive(),
    areaUnit: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AREA_UNITS"]),
    propertyCode: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    city: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2).default("Kurukshetra"),
    areaSector: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    fullAddress: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(5),
    mapLocation: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        lat: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(-90).max(90),
        lng: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(-180).max(180)
    }),
    builderName: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2),
    projectName: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2),
    projectStatus: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PROJECT_STATUSES"]),
    possessionDate: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(4).nullable().optional(),
    reraNumber: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().default(""),
    flatConfig: flatConfigSchema.default({}),
    plotConfig: plotConfigSchema.default({}),
    coverImageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
    galleryImageUrls: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url()).default([]),
    videoUrl: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().or(__TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("")).optional().default(""),
    view360Url: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().or(__TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("")).optional().default(""),
    shortDescription: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10).max(240),
    detailedDescription: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(25),
    keyHighlights: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2)).default([]),
    amenities: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AMENITY_OPTIONS"])).default([]),
    contactName: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2),
    phoneNumber: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10).max(15),
    whatsappNumber: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10).max(15),
    alternateNumber: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(15).optional().default(""),
    featuredProperty: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(false),
    verifiedBadge: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(false),
    newLaunch: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(false),
    recordStatus: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PROPERTY_RECORD_STATUSES"]).default("draft"),
    metaTitle: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(5).max(80),
    metaDescription: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(20).max(180),
    slug: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
}).superRefine((value, ctx)=>{
    if (value.propertyType === "flat" && !value.flatConfig.bhk) {
        ctx.addIssue({
            code: "custom",
            path: [
                "flatConfig",
                "bhk"
            ],
            message: "BHK is required for flats."
        });
    }
    if (value.propertyType === "plot" && !value.plotConfig.plotArea) {
        ctx.addIssue({
            code: "custom",
            path: [
                "plotConfig",
                "plotArea"
            ],
            message: "Plot area is required for plots."
        });
    }
    if (value.projectStatus === "under_construction" && (!value.possessionDate || value.possessionDate.length === 0)) {
        ctx.addIssue({
            code: "custom",
            path: [
                "possessionDate"
            ],
            message: "Possession date is required when project is under construction."
        });
    }
});
const bannerSchema = __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    projectName: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(5),
    subtitle: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(8),
    imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
    ctaLabel: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2),
    ctaHref: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
});
}),
"[project]/riterealty/app/api/properties/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/node_modules/next/cache.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/lib/api-response.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/lib/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/lib/constants.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/lib/mongodb.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$models$2f$Property$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/lib/models/Property.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$property$2d$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/lib/property-normalize.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$property$2d$id$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/lib/property-id.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$slug$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/lib/slug.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/lib/validation.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const runtime = "nodejs";
async function GET(request) {
    const { searchParams } = new URL(request.url);
    const area = searchParams.get("area");
    const all = searchParams.get("all") === "1";
    if (all) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireRole"])([
            "admin",
            "manager"
        ]);
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    const query = {};
    if (!all) {
        query.recordStatus = "published";
    }
    if (area) {
        query.areaSector = area;
    }
    const properties = await __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$models$2f$Property$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PropertyModel"].find(query, {}, {
        sort: {
            createdAt: -1
        }
    }).lean();
    return __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        properties
    });
}
async function POST(request) {
    try {
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireRole"])([
            "admin",
            "manager"
        ]);
        const normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$property$2d$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePropertyPayload"])(await request.json());
        const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["propertySchema"].parse(normalized);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
        const propertyCode = parsed.propertyCode && parsed.propertyCode.length > 0 ? parsed.propertyCode : (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$property$2d$id$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generatePropertyId"])();
        const baseSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$slug$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toSlug"])(parsed.slug && parsed.slug.length > 0 ? parsed.slug : parsed.propertyTitle);
        let slug = baseSlug;
        let counter = 1;
        while(await __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$models$2f$Property$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PropertyModel"].exists({
            slug
        })){
            slug = `${baseSlug}-${counter}`;
            counter += 1;
        }
        const property = await __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$models$2f$Property$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PropertyModel"].create({
            ...parsed,
            possessionDate: parsed.possessionDate ? new Date(parsed.possessionDate) : null,
            propertyCode,
            slug,
            recordStatus: __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PROPERTY_RECORD_STATUSES"].includes(parsed.recordStatus) ? parsed.recordStatus : "draft",
            createdBy: user.id,
            updatedBy: user.id
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        return __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            property
        }, {
            status: 201
        });
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleApiError"])(error);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0bd89x1._.js.map