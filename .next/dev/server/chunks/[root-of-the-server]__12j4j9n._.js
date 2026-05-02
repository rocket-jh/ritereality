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
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/riterealty/lib/cms-store.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addProperty",
    ()=>addProperty,
    "getLatestBanner",
    ()=>getLatestBanner,
    "getProperties",
    ()=>getProperties,
    "updateLatestBanner",
    ()=>updateLatestBanner
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
;
;
const dataDirectory = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "data");
const dataFile = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(dataDirectory, "cms.json");
const defaultData = {
    banner: {
        id: "banner-default",
        projectName: "Rite Realty",
        title: "Find Premium Projects In Kurukshetra",
        subtitle: "Explore verified plots, villas, and commercial investments in top growth sectors.",
        imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80",
        ctaLabel: "Explore Projects",
        ctaHref: "/projects/new-launch",
        updatedAt: new Date().toISOString()
    },
    properties: []
};
async function ensureDataFile() {
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["mkdir"])(dataDirectory, {
        recursive: true
    });
    try {
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readFile"])(dataFile, "utf8");
    } catch  {
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["writeFile"])(dataFile, JSON.stringify(defaultData, null, 2), "utf8");
    }
}
async function readCmsData() {
    await ensureDataFile();
    const raw = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readFile"])(dataFile, "utf8");
    return JSON.parse(raw);
}
async function writeCmsData(data) {
    await ensureDataFile();
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["writeFile"])(dataFile, JSON.stringify(data, null, 2), "utf8");
}
async function getLatestBanner() {
    const data = await readCmsData();
    return data.banner;
}
async function updateLatestBanner(payload) {
    const data = await readCmsData();
    const updatedBanner = {
        id: `banner-${Date.now()}`,
        updatedAt: new Date().toISOString(),
        ...payload
    };
    const updatedData = {
        ...data,
        banner: updatedBanner
    };
    await writeCmsData(updatedData);
    return updatedBanner;
}
async function getProperties() {
    const data = await readCmsData();
    return [
        ...data.properties
    ].sort((a, b)=>a.createdAt < b.createdAt ? 1 : -1);
}
async function addProperty(payload) {
    const data = await readCmsData();
    const newProperty = {
        id: `property-${Date.now()}`,
        createdAt: new Date().toISOString(),
        ...payload
    };
    const updatedData = {
        ...data,
        properties: [
            newProperty,
            ...data.properties
        ]
    };
    await writeCmsData(updatedData);
    return newProperty;
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$cms$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/lib/cms-store.ts [app-route] (ecmascript)");
;
;
;
const runtime = "nodejs";
async function GET() {
    const properties = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$cms$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getProperties"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        properties
    });
}
async function POST(request) {
    try {
        const body = await request.json();
        if (!body.title || !body.type || !body.location || !body.price) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "title, type, location and price are required."
            }, {
                status: 400
            });
        }
        const property = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$lib$2f$cms$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addProperty"])({
            title: body.title,
            type: body.type,
            location: body.location,
            price: body.price,
            status: body.status ?? "new launch",
            imageUrl: body.imageUrl ?? "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
            description: body.description ?? "No description added yet."
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        return __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            property
        }, {
            status: 201
        });
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Invalid JSON body for property creation."
        }, {
            status: 400
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__12j4j9n._.js.map