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
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[project]/lib/mongodb.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connectToDatabase",
    ()=>connectToDatabase,
    "getDb",
    ()=>getDb
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$dns__$5b$external$5d$__$28$dns$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dns [external] (dns, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
;
function setMongoDnsServers() {
    const dnsToggle = process.env.MONGODB_ENABLE_CUSTOM_DNS;
    const servers = process.env.MONGODB_DNS_SERVERS;
    const hasDnsServers = Boolean(servers?.trim());
    const useCustomDns = dnsToggle === "true" || dnsToggle === undefined && hasDnsServers;
    if (!useCustomDns || !servers) return;
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
function getMongoUris() {
    const primaryUri = process.env.MONGODB_URI;
    const fallbackUri = process.env.MONGODB_URI_FALLBACK;
    const activeUri = primaryUri || fallbackUri;
    const forceFallback = process.env.MONGODB_FORCE_FALLBACK === "true";
    if (!activeUri) {
        throw new Error("Missing MongoDB URI. Set MONGODB_URI (or MONGODB_URI_FALLBACK).");
    }
    return {
        activeUri,
        primaryUri,
        fallbackUri,
        forceFallback
    };
}
function isSrvDnsRefusedError(error) {
    if (!error) return false;
    const queue = [
        error
    ];
    const visited = new Set();
    while(queue.length > 0){
        const current = queue.pop();
        if (!current || typeof current !== "object") continue;
        if (visited.has(current)) continue;
        visited.add(current);
        const maybeErr = current;
        if (maybeErr.code === "ECONNREFUSED" && (maybeErr.syscall === "querySrv" || maybeErr.message?.includes("querySrv") || maybeErr.message?.includes("_mongodb._tcp"))) {
            return true;
        }
        if (maybeErr.message?.includes("querySrv") && maybeErr.message.includes("ECONNREFUSED")) {
            return true;
        }
        if (maybeErr.cause) queue.push(maybeErr.cause);
        if (maybeErr.reason) queue.push(maybeErr.reason);
        if (maybeErr.error) queue.push(maybeErr.error);
        if (maybeErr.originalError) queue.push(maybeErr.originalError);
        if (Array.isArray(maybeErr.errors)) queue.push(...maybeErr.errors);
    }
    return false;
}
async function connectWithUriFallback() {
    const { activeUri, primaryUri, fallbackUri, forceFallback } = getMongoUris();
    const canRetryWithFallback = Boolean(primaryUri && fallbackUri && primaryUri !== fallbackUri);
    if (forceFallback) {
        if (!fallbackUri) {
            throw new Error("MONGODB_FORCE_FALLBACK=true requires MONGODB_URI_FALLBACK to be set.");
        }
        return __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].connect(fallbackUri);
    }
    try {
        return await __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].connect(activeUri);
    } catch (error) {
        if (!canRetryWithFallback || !isSrvDnsRefusedError(error)) {
            throw error;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn("MongoDB SRV DNS lookup was refused. Retrying with MONGODB_URI_FALLBACK.");
        }
        return __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].connect(fallbackUri);
    }
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
        cached.promise = connectWithUriFallback().catch((error)=>{
            cached.promise = null;
            throw error;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
async function getDb() {
    const conn = await connectToDatabase();
    const db = conn.connection.db;
    if (!db) {
        throw new Error("MongoDB connection is not ready.");
    }
    return db;
}
}),
"[project]/lib/constants.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/models/User.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserModel",
    ()=>UserModel
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-route] (ecmascript)");
;
;
const UserSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"]({
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
        enum: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["USER_ROLES"],
        required: true
    }
}, {
    timestamps: true
});
const UserModel = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["models"].User ?? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["model"])("User", UserSchema);
}),
"[project]/lib/session.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SESSION_COOKIE_NAME",
    ()=>SESSION_COOKIE_NAME,
    "signSessionToken",
    ()=>signSessionToken,
    "verifySessionToken",
    ()=>verifySessionToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/sign.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/verify.js [app-route] (ecmascript)");
;
const SESSION_COOKIE_NAME = "riterealty_session";
function getSessionSecret() {
    const sessionSecret = process.env.SESSION_SECRET ?? process.env.AUTH_SECRET;
    if (!sessionSecret) {
        throw new Error("Missing SESSION_SECRET (or AUTH_SECRET) in environment variables.");
    }
    return new TextEncoder().encode(sessionSecret);
}
async function signSessionToken(payload) {
    const secret = getSessionSecret();
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignJWT"]({
        role: payload.role,
        email: payload.email,
        name: payload.name
    }).setProtectedHeader({
        alg: "HS256"
    }).setSubject(payload.sub).setIssuedAt().setExpirationTime("7d").sign(secret);
}
async function verifySessionToken(token) {
    const secret = getSessionSecret();
    const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtVerify"])(token, secret);
    return payload;
}
}),
"[project]/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mongodb.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/models/User.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/session.ts [app-route] (ecmascript)");
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
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookieStore.get(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SESSION_COOKIE_NAME"])?.value;
    if (!token) {
        return null;
    }
    try {
        const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifySessionToken"])(token);
        if (!payload.sub || !__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Types"].ObjectId.isValid(payload.sub)) {
            return null;
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserModel"].findById(payload.sub).lean();
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
"[project]/lib/auth-server.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "requirePermission",
    ()=>requirePermission
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-route] (ecmascript)");
;
const BLOG_ALLOWED_ROLES = new Set([
    "admin",
    "manager"
]);
function extractBearerToken(request) {
    const header = request.headers.get("authorization") || "";
    const [scheme, token] = header.split(" ");
    if (scheme?.toLowerCase() !== "bearer") {
        return null;
    }
    return token?.trim() || null;
}
async function requirePermission(request, permission) {
    if (permission !== "manage_blogs") {
        throw new Error("Forbidden");
    }
    const bearer = extractBearerToken(request);
    const staticToken = process.env.BLOG_ADMIN_TOKEN?.trim();
    if (staticToken && bearer && bearer === staticToken) {
        return;
    }
    const sessionUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSessionUser"])();
    if (!sessionUser) {
        throw new Error("Unauthorized");
    }
    if (!BLOG_ALLOWED_ROLES.has(sessionUser.role)) {
        throw new Error("Forbidden");
    }
}
}),
"[project]/lib/blog-db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensureUniqueSlug",
    ()=>ensureUniqueSlug,
    "getBlogCollections",
    ()=>getBlogCollections,
    "htmlToExcerpt",
    ()=>htmlToExcerpt,
    "isPublicPost",
    ()=>isPublicPost,
    "normalizeSeo",
    ()=>normalizeSeo,
    "objectIdFromString",
    ()=>objectIdFromString,
    "parseCategories",
    ()=>parseCategories,
    "parseTags",
    ()=>parseTags,
    "slugify",
    ()=>slugify,
    "toPublicComment",
    ()=>toPublicComment,
    "toPublicPost",
    ()=>toPublicPost
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongodb$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs, [project]/node_modules/mongodb)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mongodb.ts [app-route] (ecmascript)");
;
;
function normalizeSeo(seo, fallbackTitle = "", fallbackDescription = "", fallbackOgImage = "") {
    return {
        metaTitle: seo?.metaTitle?.trim() || fallbackTitle,
        metaDescription: seo?.metaDescription?.trim() || fallbackDescription,
        ogImage: seo?.ogImage?.trim() || fallbackOgImage,
        canonicalUrl: seo?.canonicalUrl?.trim() || "",
        schemaJsonLd: seo?.schemaJsonLd?.trim() || "",
        keywords: parseTags(seo?.keywords),
        robotsNoIndex: Boolean(seo?.robotsNoIndex),
        robotsNoFollow: Boolean(seo?.robotsNoFollow)
    };
}
function slugify(input) {
    return input.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
}
function htmlToExcerpt(html) {
    const plain = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "").replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "").replace(/<\/?[^>]+(>|$)/g, " ").replace(/\s+/g, " ").trim();
    return plain.slice(0, 180);
}
function parseTags(raw) {
    if (!raw) return [];
    const list = Array.isArray(raw) ? raw : raw.split(",");
    return Array.from(new Set(list.map((item)=>item.trim().toLowerCase()).filter(Boolean)));
}
function parseCategories(raw) {
    if (!raw) return [];
    return Array.from(new Set(raw.map((item)=>item.trim()).filter(Boolean)));
}
function toPublicPost(post) {
    const seo = normalizeSeo(post.seo, post.title, post.excerpt, post.featuredImageUrl);
    return {
        id: post._id.toString(),
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        featuredImageUrl: post.featuredImageUrl,
        categories: post.categories,
        tags: post.tags,
        status: post.status,
        scheduledAt: post.scheduledAt,
        publishedAt: post.publishedAt,
        authorName: post.authorName,
        seo,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt
    };
}
function toPublicComment(comment) {
    return {
        id: comment._id.toString(),
        postSlug: comment.postSlug,
        parentId: comment.parentId?.toString() || null,
        authorName: comment.authorName,
        content: comment.content,
        status: comment.status,
        moderationReason: comment.moderationReason,
        createdAt: comment.createdAt,
        updatedAt: comment.updatedAt
    };
}
function isPublicPost(post) {
    if (post.status === "published") return true;
    if (post.status === "scheduled" && post.scheduledAt) {
        return post.scheduledAt.getTime() <= Date.now();
    }
    return false;
}
async function getBlogCollections() {
    const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDb"])();
    const posts = db.collection("blog_posts");
    const categories = db.collection("blog_categories");
    const media = db.collection("blog_media");
    const settings = db.collection("blog_settings");
    const comments = db.collection("blog_comments");
    return {
        posts,
        categories,
        media,
        settings,
        comments
    };
}
async function ensureUniqueSlug(postsCollection, baseSlug, excludeId) {
    const cleanBase = slugify(baseSlug) || "untitled-post";
    let candidate = cleanBase;
    let index = 1;
    while(true){
        const existing = await postsCollection.findOne({
            slug: candidate
        });
        if (!existing) return candidate;
        if (excludeId && existing._id.toString() === excludeId) return candidate;
        index += 1;
        candidate = `${cleanBase}-${index}`;
    }
}
function objectIdFromString(id) {
    try {
        return new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongodb$29$__["ObjectId"](id);
    } catch  {
        return null;
    }
}
}),
"[project]/app/api/blog/posts/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongodb$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs, [project]/node_modules/mongodb)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth-server.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2d$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/blog-db.ts [app-route] (ecmascript)");
;
;
;
;
async function ensureBlogPermission(request) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requirePermission"])(request, "manage_blogs");
}
function mapStatus(message) {
    if (message === "Unauthorized") return 401;
    if (message === "Forbidden") return 403;
    return 500;
}
async function GET(request) {
    try {
        const scope = request.nextUrl.searchParams.get("scope");
        const includeAll = scope === "all";
        if (includeAll) {
            await ensureBlogPermission(request);
        }
        const { posts } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2d$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBlogCollections"])();
        const allPosts = await posts.find({}).sort({
            updatedAt: -1
        }).toArray();
        const filteredPosts = includeAll ? allPosts : allPosts.filter((post)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2d$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPublicPost"])(post));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            posts: filteredPosts.map((post)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2d$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toPublicPost"])(post))
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Failed to load blog posts.";
        const status = mapStatus(message);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            message
        }, {
            status
        });
    }
}
async function POST(request) {
    try {
        await ensureBlogPermission(request);
        const payload = await request.json();
        const { posts } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2d$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBlogCollections"])();
        const now = new Date();
        const title = payload.title?.trim() || "Untitled Post";
        const baseSlug = payload.slug?.trim() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2d$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["slugify"])(title);
        const slug = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2d$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureUniqueSlug"])(posts, baseSlug);
        const content = payload.content || "";
        const status = payload.status || "draft";
        const scheduledAt = status === "scheduled" && payload.scheduledAt ? new Date(payload.scheduledAt) : null;
        const publishedAt = status === "published" ? now : null;
        const excerpt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2d$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["htmlToExcerpt"])(content);
        const doc = {
            _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongodb$29$__["ObjectId"](),
            title,
            slug,
            excerpt,
            content,
            featuredImageUrl: payload.featuredImageUrl || "",
            categories: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2d$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseCategories"])(payload.categories),
            tags: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2d$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseTags"])(payload.tags),
            status,
            scheduledAt,
            publishedAt,
            authorName: payload.authorName?.trim() || "Infobirth Team",
            seo: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2d$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeSeo"])(payload.seo, title, excerpt, payload.featuredImageUrl || ""),
            createdAt: now,
            updatedAt: now
        };
        const result = await posts.insertOne(doc);
        const created = await posts.findOne({
            _id: result.insertedId
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            post: created ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2d$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toPublicPost"])(created) : null
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Failed to create blog post.";
        const status = mapStatus(message);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            message
        }, {
            status
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0laxv1z._.js.map