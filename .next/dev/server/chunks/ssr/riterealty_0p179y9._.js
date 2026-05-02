module.exports = [
"[project]/riterealty/app/components/AddPropertySection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddPropertySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const initialFormState = {
    title: "",
    type: "",
    location: "",
    price: "",
    status: "new launch",
    imageUrl: "",
    description: ""
};
function AddPropertySection() {
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialFormState);
    const [properties, setProperties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function loadProperties() {
            const response = await fetch("/api/properties", {
                cache: "no-store"
            });
            if (!response.ok) {
                return;
            }
            const data = await response.json();
            setProperties(data.properties);
        }
        void loadProperties();
    }, []);
    async function handleSubmit(event) {
        event.preventDefault();
        setSubmitting(true);
        setMessage("");
        const response = await fetch("/api/properties", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });
        const data = await response.json();
        if (!response.ok || !data.property) {
            setMessage(data.error ?? "Could not add property.");
            setSubmitting(false);
            return;
        }
        setProperties((prev)=>[
                data.property,
                ...prev
            ]);
        setForm(initialFormState);
        setMessage("Property added successfully.");
        setSubmitting(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto mt-10 mb-16 w-full max-w-7xl px-4 md:px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold text-zinc-900",
                        children: "Add Property"
                    }, void 0, false, {
                        fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-zinc-600",
                        children: "This section is connected to backend `POST /api/properties`."
                    }, void 0, false, {
                        fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "mt-6 grid gap-3 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: form.title,
                                onChange: (event)=>setForm((prev)=>({
                                            ...prev,
                                            title: event.target.value
                                        })),
                                placeholder: "Property title",
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: form.type,
                                onChange: (event)=>setForm((prev)=>({
                                            ...prev,
                                            type: event.target.value
                                        })),
                                placeholder: "Property type",
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: form.location,
                                onChange: (event)=>setForm((prev)=>({
                                            ...prev,
                                            location: event.target.value
                                        })),
                                placeholder: "Location",
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: form.price,
                                onChange: (event)=>setForm((prev)=>({
                                            ...prev,
                                            price: event.target.value
                                        })),
                                placeholder: "Price (example: INR 1.2 Cr)",
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: form.status,
                                onChange: (event)=>setForm((prev)=>({
                                            ...prev,
                                            status: event.target.value
                                        })),
                                placeholder: "Status",
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                            }, void 0, false, {
                                fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: form.imageUrl,
                                onChange: (event)=>setForm((prev)=>({
                                            ...prev,
                                            imageUrl: event.target.value
                                        })),
                                placeholder: "Image URL (optional)",
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                            }, void 0, false, {
                                fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: form.description,
                                onChange: (event)=>setForm((prev)=>({
                                            ...prev,
                                            description: event.target.value
                                        })),
                                placeholder: "Description",
                                className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                                rows: 3
                            }, void 0, false, {
                                fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: submitting,
                                className: "md:col-span-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-70",
                                children: submitting ? "Adding..." : "Add Property"
                            }, void 0, false, {
                                fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-sm text-zinc-700",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
                        lineNumber: 154,
                        columnNumber: 20
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 grid gap-3 md:grid-cols-2",
                children: properties.slice(0, 6).map((property)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "rounded-xl border border-zinc-200 bg-zinc-50 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                children: property.status
                            }, void 0, false, {
                                fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mt-1 text-lg font-semibold text-zinc-900",
                                children: property.title
                            }, void 0, false, {
                                fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-zinc-600",
                                children: [
                                    property.type,
                                    " - ",
                                    property.location
                                ]
                            }, void 0, true, {
                                fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm font-medium text-zinc-900",
                                children: property.price
                            }, void 0, false, {
                                fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this)
                        ]
                    }, property.id, true, {
                        fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
}),
"[project]/riterealty/app/components/BannerUpdateSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BannerUpdateSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const initialState = {
    projectName: "Rite Realty",
    title: "",
    subtitle: "",
    imageUrl: "",
    ctaLabel: "Explore Projects",
    ctaHref: "/projects/new-launch"
};
function BannerUpdateSection() {
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialState);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    async function handleSubmit(event) {
        event.preventDefault();
        setSubmitting(true);
        setMessage("");
        const response = await fetch("/api/banner", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });
        const data = await response.json();
        if (!response.ok) {
            setMessage(data.error ?? "Could not update banner.");
            setSubmitting(false);
            return;
        }
        setMessage("Banner updated. Refresh the page to see the latest project banner.");
        setForm(initialState);
        setSubmitting(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto mt-10 w-full max-w-7xl px-4 md:px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-semibold text-zinc-900",
                    children: "Update Project Banner"
                }, void 0, false, {
                    fileName: "[project]/riterealty/app/components/BannerUpdateSection.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm text-zinc-600",
                    children: "Update the latest homepage banner from backend."
                }, void 0, false, {
                    fileName: "[project]/riterealty/app/components/BannerUpdateSection.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "mt-6 grid gap-3 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: form.projectName,
                            onChange: (event)=>setForm((prev)=>({
                                        ...prev,
                                        projectName: event.target.value
                                    })),
                            placeholder: "Project Name",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/riterealty/app/components/BannerUpdateSection.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: form.title,
                            onChange: (event)=>setForm((prev)=>({
                                        ...prev,
                                        title: event.target.value
                                    })),
                            placeholder: "Banner Title",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/riterealty/app/components/BannerUpdateSection.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: form.subtitle,
                            onChange: (event)=>setForm((prev)=>({
                                        ...prev,
                                        subtitle: event.target.value
                                    })),
                            placeholder: "Banner Subtitle",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/riterealty/app/components/BannerUpdateSection.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: form.imageUrl,
                            onChange: (event)=>setForm((prev)=>({
                                        ...prev,
                                        imageUrl: event.target.value
                                    })),
                            placeholder: "Background Image URL",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/riterealty/app/components/BannerUpdateSection.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: form.ctaLabel,
                            onChange: (event)=>setForm((prev)=>({
                                        ...prev,
                                        ctaLabel: event.target.value
                                    })),
                            placeholder: "CTA Label",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/riterealty/app/components/BannerUpdateSection.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: form.ctaHref,
                            onChange: (event)=>setForm((prev)=>({
                                        ...prev,
                                        ctaHref: event.target.value
                                    })),
                            placeholder: "CTA Href",
                            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/riterealty/app/components/BannerUpdateSection.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: submitting,
                            className: "md:col-span-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-70",
                            children: submitting ? "Updating..." : "Update Banner"
                        }, void 0, false, {
                            fileName: "[project]/riterealty/app/components/BannerUpdateSection.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/riterealty/app/components/BannerUpdateSection.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-sm text-zinc-700",
                    children: message
                }, void 0, false, {
                    fileName: "[project]/riterealty/app/components/BannerUpdateSection.tsx",
                    lineNumber: 124,
                    columnNumber: 20
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/riterealty/app/components/BannerUpdateSection.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/riterealty/app/components/BannerUpdateSection.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
}),
"[project]/riterealty/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/riterealty/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=riterealty_0p179y9._.js.map