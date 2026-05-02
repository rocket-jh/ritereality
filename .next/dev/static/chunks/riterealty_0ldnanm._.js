(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/riterealty/app/components/AddPropertySection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddPropertySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(54);
    if ($[0] !== "a5652114685cc3f0babb6791f3e50b2a6ebd0f197d5c4382da1eb729df33c5a3") {
        for(let $i = 0; $i < 54; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a5652114685cc3f0babb6791f3e50b2a6ebd0f197d5c4382da1eb729df33c5a3";
    }
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialFormState);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [properties, setProperties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "AddPropertySection[useEffect()]": ()=>{
                const loadProperties = async function loadProperties() {
                    const response = await fetch("/api/properties", {
                        cache: "no-store"
                    });
                    if (!response.ok) {
                        return;
                    }
                    const data = await response.json();
                    setProperties(data.properties);
                };
                loadProperties();
            }
        })["AddPropertySection[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== form) {
        t3 = async function handleSubmit(event) {
            event.preventDefault();
            setSubmitting(true);
            setMessage("");
            const response_0 = await fetch("/api/properties", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });
            const data_0 = await response_0.json();
            if (!response_0.ok || !data_0.property) {
                setMessage(data_0.error ?? "Could not add property.");
                setSubmitting(false);
                return;
            }
            setProperties({
                "AddPropertySection[handleSubmit > setProperties()]": (prev)=>[
                        data_0.property,
                        ...prev
                    ]
            }["AddPropertySection[handleSubmit > setProperties()]"]);
            setForm(initialFormState);
            setMessage("Property added successfully.");
            setSubmitting(false);
        };
        $[4] = form;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const handleSubmit = t3;
    let t4;
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-semibold text-zinc-900",
            children: "Add Property"
        }, void 0, false, {
            fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-sm text-zinc-600",
            children: "This section is connected to backend `POST /api/properties`."
        }, void 0, false, {
            fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[6] = t4;
        $[7] = t5;
    } else {
        t4 = $[6];
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "AddPropertySection[<input>.onChange]": (event_0)=>setForm({
                    "AddPropertySection[<input>.onChange > setForm()]": (prev_0)=>({
                            ...prev_0,
                            title: event_0.target.value
                        })
                }["AddPropertySection[<input>.onChange > setForm()]"])
        })["AddPropertySection[<input>.onChange]"];
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== form.title) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: form.title,
            onChange: t6,
            placeholder: "Property title",
            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
            required: true
        }, void 0, false, {
            fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
            lineNumber: 142,
            columnNumber: 10
        }, this);
        $[9] = form.title;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "AddPropertySection[<input>.onChange]": (event_1)=>setForm({
                    "AddPropertySection[<input>.onChange > setForm()]": (prev_1)=>({
                            ...prev_1,
                            type: event_1.target.value
                        })
                }["AddPropertySection[<input>.onChange > setForm()]"])
        })["AddPropertySection[<input>.onChange]"];
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== form.type) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: form.type,
            onChange: t8,
            placeholder: "Property type",
            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
            required: true
        }, void 0, false, {
            fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
            lineNumber: 164,
            columnNumber: 10
        }, this);
        $[12] = form.type;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "AddPropertySection[<input>.onChange]": (event_2)=>setForm({
                    "AddPropertySection[<input>.onChange > setForm()]": (prev_2)=>({
                            ...prev_2,
                            location: event_2.target.value
                        })
                }["AddPropertySection[<input>.onChange > setForm()]"])
        })["AddPropertySection[<input>.onChange]"];
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== form.location) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: form.location,
            onChange: t10,
            placeholder: "Location",
            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
            required: true
        }, void 0, false, {
            fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[15] = form.location;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "AddPropertySection[<input>.onChange]": (event_3)=>setForm({
                    "AddPropertySection[<input>.onChange > setForm()]": (prev_3)=>({
                            ...prev_3,
                            price: event_3.target.value
                        })
                }["AddPropertySection[<input>.onChange > setForm()]"])
        })["AddPropertySection[<input>.onChange]"];
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== form.price) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: form.price,
            onChange: t12,
            placeholder: "Price (example: INR 1.2 Cr)",
            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
            required: true
        }, void 0, false, {
            fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        $[18] = form.price;
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = ({
            "AddPropertySection[<input>.onChange]": (event_4)=>setForm({
                    "AddPropertySection[<input>.onChange > setForm()]": (prev_4)=>({
                            ...prev_4,
                            status: event_4.target.value
                        })
                }["AddPropertySection[<input>.onChange > setForm()]"])
        })["AddPropertySection[<input>.onChange]"];
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    let t15;
    if ($[21] !== form.status) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: form.status,
            onChange: t14,
            placeholder: "Status",
            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
        }, void 0, false, {
            fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
            lineNumber: 230,
            columnNumber: 11
        }, this);
        $[21] = form.status;
        $[22] = t15;
    } else {
        t15 = $[22];
    }
    let t16;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = ({
            "AddPropertySection[<input>.onChange]": (event_5)=>setForm({
                    "AddPropertySection[<input>.onChange > setForm()]": (prev_5)=>({
                            ...prev_5,
                            imageUrl: event_5.target.value
                        })
                }["AddPropertySection[<input>.onChange > setForm()]"])
        })["AddPropertySection[<input>.onChange]"];
        $[23] = t16;
    } else {
        t16 = $[23];
    }
    let t17;
    if ($[24] !== form.imageUrl) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: form.imageUrl,
            onChange: t16,
            placeholder: "Image URL (optional)",
            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm"
        }, void 0, false, {
            fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[24] = form.imageUrl;
        $[25] = t17;
    } else {
        t17 = $[25];
    }
    let t18;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = ({
            "AddPropertySection[<textarea>.onChange]": (event_6)=>setForm({
                    "AddPropertySection[<textarea>.onChange > setForm()]": (prev_6)=>({
                            ...prev_6,
                            description: event_6.target.value
                        })
                }["AddPropertySection[<textarea>.onChange > setForm()]"])
        })["AddPropertySection[<textarea>.onChange]"];
        $[26] = t18;
    } else {
        t18 = $[26];
    }
    let t19;
    if ($[27] !== form.description) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            value: form.description,
            onChange: t18,
            placeholder: "Description",
            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
            rows: 3
        }, void 0, false, {
            fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[27] = form.description;
        $[28] = t19;
    } else {
        t19 = $[28];
    }
    const t20 = submitting ? "Adding..." : "Add Property";
    let t21;
    if ($[29] !== submitting || $[30] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            disabled: submitting,
            className: "md:col-span-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-70",
            children: t20
        }, void 0, false, {
            fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
            lineNumber: 283,
            columnNumber: 11
        }, this);
        $[29] = submitting;
        $[30] = t20;
        $[31] = t21;
    } else {
        t21 = $[31];
    }
    let t22;
    if ($[32] !== handleSubmit || $[33] !== t11 || $[34] !== t13 || $[35] !== t15 || $[36] !== t17 || $[37] !== t19 || $[38] !== t21 || $[39] !== t7 || $[40] !== t9) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "mt-6 grid gap-3 md:grid-cols-2",
            children: [
                t7,
                t9,
                t11,
                t13,
                t15,
                t17,
                t19,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
            lineNumber: 292,
            columnNumber: 11
        }, this);
        $[32] = handleSubmit;
        $[33] = t11;
        $[34] = t13;
        $[35] = t15;
        $[36] = t17;
        $[37] = t19;
        $[38] = t21;
        $[39] = t7;
        $[40] = t9;
        $[41] = t22;
    } else {
        t22 = $[41];
    }
    let t23;
    if ($[42] !== message) {
        t23 = message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-3 text-sm text-zinc-700",
            children: message
        }, void 0, false, {
            fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
            lineNumber: 308,
            columnNumber: 21
        }, this) : null;
        $[42] = message;
        $[43] = t23;
    } else {
        t23 = $[43];
    }
    let t24;
    if ($[44] !== t22 || $[45] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm",
            children: [
                t4,
                t5,
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
            lineNumber: 316,
            columnNumber: 11
        }, this);
        $[44] = t22;
        $[45] = t23;
        $[46] = t24;
    } else {
        t24 = $[46];
    }
    let t25;
    if ($[47] !== properties) {
        t25 = properties.slice(0, 6).map(_AddPropertySectionAnonymous);
        $[47] = properties;
        $[48] = t25;
    } else {
        t25 = $[48];
    }
    let t26;
    if ($[49] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 grid gap-3 md:grid-cols-2",
            children: t25
        }, void 0, false, {
            fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
            lineNumber: 333,
            columnNumber: 11
        }, this);
        $[49] = t25;
        $[50] = t26;
    } else {
        t26 = $[50];
    }
    let t27;
    if ($[51] !== t24 || $[52] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mx-auto mt-10 mb-16 w-full max-w-7xl px-4 md:px-6",
            children: [
                t24,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
            lineNumber: 341,
            columnNumber: 11
        }, this);
        $[51] = t24;
        $[52] = t26;
        $[53] = t27;
    } else {
        t27 = $[53];
    }
    return t27;
}
_s(AddPropertySection, "6WPSbkz8tjFF1xVVpTwxVrnk8GE=");
_c = AddPropertySection;
function _AddPropertySectionAnonymous(property) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "rounded-xl border border-zinc-200 bg-zinc-50 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs font-semibold uppercase tracking-wide text-zinc-500",
                children: property.status
            }, void 0, false, {
                fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
                lineNumber: 351,
                columnNumber: 98
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mt-1 text-lg font-semibold text-zinc-900",
                children: property.title
            }, void 0, false, {
                fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
                lineNumber: 351,
                columnNumber: 194
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-sm text-zinc-600",
                children: [
                    property.type,
                    " - ",
                    property.location
                ]
            }, void 0, true, {
                fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
                lineNumber: 351,
                columnNumber: 272
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm font-medium text-zinc-900",
                children: property.price
            }, void 0, false, {
                fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
                lineNumber: 351,
                columnNumber: 355
            }, this)
        ]
    }, property.id, true, {
        fileName: "[project]/riterealty/app/components/AddPropertySection.tsx",
        lineNumber: 351,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "AddPropertySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/riterealty/app/components/BannerUpdateSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BannerUpdateSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/riterealty/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "983b37e3049de35c7d384e2da68ed4264a50088ff48920d5f483703fa9009265") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "983b37e3049de35c7d384e2da68ed4264a50088ff48920d5f483703fa9009265";
    }
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialState);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] !== form) {
        t0 = async function handleSubmit(event) {
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
        };
        $[1] = form;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const handleSubmit = t0;
    let t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-semibold text-zinc-900",
            children: "Update Project Banner"
        }, void 0, false, {
            fileName: "[project]/riterealty/app/components/BannerUpdateSection.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-sm text-zinc-600",
            children: "Update the latest homepage banner from backend."
        }, void 0, false, {
            fileName: "[project]/riterealty/app/components/BannerUpdateSection.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "BannerUpdateSection[<input>.onChange]": (event_0)=>setForm({
                    "BannerUpdateSection[<input>.onChange > setForm()]": (prev)=>({
                            ...prev,
                            projectName: event_0.target.value
                        })
                }["BannerUpdateSection[<input>.onChange > setForm()]"])
        })["BannerUpdateSection[<input>.onChange]"];
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== form.projectName) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: form.projectName,
            onChange: t3,
            placeholder: "Project Name",
            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
            required: true
        }, void 0, false, {
            fileName: "[project]/riterealty/app/components/BannerUpdateSection.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[6] = form.projectName;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "BannerUpdateSection[<input>.onChange]": (event_1)=>setForm({
                    "BannerUpdateSection[<input>.onChange > setForm()]": (prev_0)=>({
                            ...prev_0,
                            title: event_1.target.value
                        })
                }["BannerUpdateSection[<input>.onChange > setForm()]"])
        })["BannerUpdateSection[<input>.onChange]"];
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== form.title) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: form.title,
            onChange: t5,
            placeholder: "Banner Title",
            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
            required: true
        }, void 0, false, {
            fileName: "[project]/riterealty/app/components/BannerUpdateSection.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[9] = form.title;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "BannerUpdateSection[<input>.onChange]": (event_2)=>setForm({
                    "BannerUpdateSection[<input>.onChange > setForm()]": (prev_1)=>({
                            ...prev_1,
                            subtitle: event_2.target.value
                        })
                }["BannerUpdateSection[<input>.onChange > setForm()]"])
        })["BannerUpdateSection[<input>.onChange]"];
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== form.subtitle) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: form.subtitle,
            onChange: t7,
            placeholder: "Banner Subtitle",
            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
            required: true
        }, void 0, false, {
            fileName: "[project]/riterealty/app/components/BannerUpdateSection.tsx",
            lineNumber: 134,
            columnNumber: 10
        }, this);
        $[12] = form.subtitle;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "BannerUpdateSection[<input>.onChange]": (event_3)=>setForm({
                    "BannerUpdateSection[<input>.onChange > setForm()]": (prev_2)=>({
                            ...prev_2,
                            imageUrl: event_3.target.value
                        })
                }["BannerUpdateSection[<input>.onChange > setForm()]"])
        })["BannerUpdateSection[<input>.onChange]"];
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== form.imageUrl) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: form.imageUrl,
            onChange: t9,
            placeholder: "Background Image URL",
            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2",
            required: true
        }, void 0, false, {
            fileName: "[project]/riterealty/app/components/BannerUpdateSection.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[15] = form.imageUrl;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "BannerUpdateSection[<input>.onChange]": (event_4)=>setForm({
                    "BannerUpdateSection[<input>.onChange > setForm()]": (prev_3)=>({
                            ...prev_3,
                            ctaLabel: event_4.target.value
                        })
                }["BannerUpdateSection[<input>.onChange > setForm()]"])
        })["BannerUpdateSection[<input>.onChange]"];
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== form.ctaLabel) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: form.ctaLabel,
            onChange: t11,
            placeholder: "CTA Label",
            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
            required: true
        }, void 0, false, {
            fileName: "[project]/riterealty/app/components/BannerUpdateSection.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[18] = form.ctaLabel;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "BannerUpdateSection[<input>.onChange]": (event_5)=>setForm({
                    "BannerUpdateSection[<input>.onChange > setForm()]": (prev_4)=>({
                            ...prev_4,
                            ctaHref: event_5.target.value
                        })
                }["BannerUpdateSection[<input>.onChange > setForm()]"])
        })["BannerUpdateSection[<input>.onChange]"];
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] !== form.ctaHref) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: form.ctaHref,
            onChange: t13,
            placeholder: "CTA Href",
            className: "rounded-lg border border-zinc-300 px-3 py-2 text-sm",
            required: true
        }, void 0, false, {
            fileName: "[project]/riterealty/app/components/BannerUpdateSection.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[21] = form.ctaHref;
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    const t15 = submitting ? "Updating..." : "Update Banner";
    let t16;
    if ($[23] !== submitting || $[24] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            disabled: submitting,
            className: "md:col-span-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-70",
            children: t15
        }, void 0, false, {
            fileName: "[project]/riterealty/app/components/BannerUpdateSection.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[23] = submitting;
        $[24] = t15;
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    let t17;
    if ($[26] !== handleSubmit || $[27] !== t10 || $[28] !== t12 || $[29] !== t14 || $[30] !== t16 || $[31] !== t4 || $[32] !== t6 || $[33] !== t8) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "mt-6 grid gap-3 md:grid-cols-2",
            children: [
                t4,
                t6,
                t8,
                t10,
                t12,
                t14,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/riterealty/app/components/BannerUpdateSection.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[26] = handleSubmit;
        $[27] = t10;
        $[28] = t12;
        $[29] = t14;
        $[30] = t16;
        $[31] = t4;
        $[32] = t6;
        $[33] = t8;
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] !== message) {
        t18 = message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-3 text-sm text-zinc-700",
            children: message
        }, void 0, false, {
            fileName: "[project]/riterealty/app/components/BannerUpdateSection.tsx",
            lineNumber: 233,
            columnNumber: 21
        }, this) : null;
        $[35] = message;
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    let t19;
    if ($[37] !== t17 || $[38] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mx-auto mt-10 w-full max-w-7xl px-4 md:px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm",
                children: [
                    t1,
                    t2,
                    t17,
                    t18
                ]
            }, void 0, true, {
                fileName: "[project]/riterealty/app/components/BannerUpdateSection.tsx",
                lineNumber: 241,
                columnNumber: 76
            }, this)
        }, void 0, false, {
            fileName: "[project]/riterealty/app/components/BannerUpdateSection.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[37] = t17;
        $[38] = t18;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    return t19;
}
_s(BannerUpdateSection, "e/9soHx0Y6dNVehvW/mHzPhskkI=");
_c = BannerUpdateSection;
var _c;
__turbopack_context__.k.register(_c, "BannerUpdateSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/riterealty/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/riterealty/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
    var React = __turbopack_context__.r("[project]/riterealty/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
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
"[project]/riterealty/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/riterealty/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/riterealty/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/riterealty/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/riterealty/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/riterealty/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/riterealty/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$riterealty$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/riterealty/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/riterealty/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=riterealty_0ldnanm._.js.map