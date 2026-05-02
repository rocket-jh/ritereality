(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/auth-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearAuthToken",
    ()=>clearAuthToken,
    "getAuthEventName",
    ()=>getAuthEventName,
    "getAuthToken",
    ()=>getAuthToken,
    "setAuthToken",
    ()=>setAuthToken
]);
const AUTH_STORAGE_KEY = "riterealty_blog_auth_token";
const AUTH_EVENT_NAME = "riterealty:blog-auth-change";
function getAuthToken() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const token = window.localStorage.getItem(AUTH_STORAGE_KEY);
    return token?.trim() || null;
}
function setAuthToken(token) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const normalized = token.trim();
    if (!normalized) {
        clearAuthToken();
        return;
    }
    window.localStorage.setItem(AUTH_STORAGE_KEY, normalized);
    window.dispatchEvent(new Event(AUTH_EVENT_NAME));
}
function clearAuthToken() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
    window.dispatchEvent(new Event(AUTH_EVENT_NAME));
}
function getAuthEventName() {
    return AUTH_EVENT_NAME;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/blog/cms/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/starter-kit/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$underline$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-underline/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-link/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$image$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-image/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-table/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth-client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
;
;
const fallbackSettings = {
    siteTitle: "Infobirth Blog",
    authorName: "Infobirth Team"
};
const emptyActiveToolbarState = ()=>({
        paragraph: false,
        h1: false,
        h2: false,
        h3: false,
        h4: false,
        h5: false,
        h6: false,
        bold: false,
        italic: false,
        underline: false,
        bulletList: false,
        orderedList: false,
        blockquote: false,
        codeBlock: false,
        link: false,
        alignTextLeft: false,
        alignTextCenter: false,
        alignTextRight: false
    });
const emptyEditorInteractionState = ()=>({
        isFocused: false,
        hasTextSelection: false,
        selectedText: "",
        isImageSelected: false,
        isEmptyLine: false,
        nodeType: "paragraph",
        activeLinkHref: "",
        active: emptyActiveToolbarState()
    });
const allToolbarContextCommands = [
    {
        id: "paragraph",
        label: "Paragraph"
    },
    {
        id: "h1",
        label: "H1"
    },
    {
        id: "h2",
        label: "H2"
    },
    {
        id: "h3",
        label: "H3"
    },
    {
        id: "faq",
        label: "FAQ"
    },
    {
        id: "table",
        label: "Table"
    },
    {
        id: "bold",
        label: "Bold"
    },
    {
        id: "italic",
        label: "Italic"
    },
    {
        id: "underline",
        label: "Underline"
    },
    {
        id: "bulletList",
        label: "Bullet List"
    },
    {
        id: "orderedList",
        label: "Numbered List"
    },
    {
        id: "blockquote",
        label: "Quote"
    },
    {
        id: "codeBlock",
        label: "Code Block"
    },
    {
        id: "link",
        label: "Link"
    },
    {
        id: "alignTextLeft",
        label: "Text Align Left"
    },
    {
        id: "alignTextCenter",
        label: "Text Align Center"
    },
    {
        id: "alignTextRight",
        label: "Text Align Right"
    },
    {
        id: "image",
        label: "Image"
    },
    {
        id: "insertBlock",
        label: "Insert Block"
    }
];
const contextActionBySituation = {
    "text-selected": [
        {
            id: "bold",
            label: "Bold (Context)"
        },
        {
            id: "h2",
            label: "H2 (Context)"
        },
        {
            id: "link",
            label: "Link (Context)"
        },
        {
            id: "alignTextLeft",
            label: "Align Left (Text)"
        },
        {
            id: "alignTextCenter",
            label: "Align Center (Text)"
        },
        {
            id: "alignTextRight",
            label: "Align Right (Text)"
        },
        {
            id: "faq",
            label: "FAQ (Context)"
        }
    ],
    image: [
        {
            id: "image",
            label: "Replace Image"
        },
        {
            id: "resizeImage",
            label: "Resize Image"
        },
        {
            id: "captionImage",
            label: "Edit Caption"
        },
        {
            id: "alignImageLeft",
            label: "Align Left"
        },
        {
            id: "alignImageCenter",
            label: "Align Center"
        },
        {
            id: "alignImageRight",
            label: "Align Right"
        }
    ],
    "empty-line": [
        {
            id: "faq",
            label: "Insert FAQ"
        },
        {
            id: "table",
            label: "Insert Table"
        },
        {
            id: "insertBlock",
            label: "Insert Block"
        }
    ]
};
const slashCommandCatalog = [
    {
        id: "paragraph",
        label: "Paragraph",
        keyword: "p paragraph text"
    },
    {
        id: "h2",
        label: "Heading 2",
        keyword: "h2 heading section"
    },
    {
        id: "h3",
        label: "Heading 3",
        keyword: "h3 heading subsection"
    },
    {
        id: "bulletList",
        label: "Bullet list",
        keyword: "list ul bullet unordered"
    },
    {
        id: "orderedList",
        label: "Ordered list",
        keyword: "list ol ordered numbered"
    },
    {
        id: "faq",
        label: "FAQ",
        keyword: "faq question answer schema"
    },
    {
        id: "blockquote",
        label: "Quote block",
        keyword: "blockquote quote"
    },
    {
        id: "codeBlock",
        label: "Code block",
        keyword: "code pre snippet"
    },
    {
        id: "image",
        label: "Image",
        keyword: "image media photo"
    }
];
const blockTemplateCatalog = [
    {
        id: "section",
        label: "Section",
        description: "Heading + paragraph block"
    },
    {
        id: "faq",
        label: "FAQ",
        description: "Question and answer block"
    },
    {
        id: "table",
        label: "Table",
        description: "Responsive table block"
    },
    {
        id: "quote",
        label: "Quote",
        description: "Blockquote highlight"
    },
    {
        id: "code",
        label: "Code",
        description: "Code block with monospace style"
    },
    {
        id: "image",
        label: "Image",
        description: "Upload or replace image block"
    },
    {
        id: "embed",
        label: "Embed",
        description: "Video/link embed block"
    }
];
const clampImageWidth = (value)=>Math.max(30, Math.min(100, Math.round(value)));
const normalizeImageAlign = (value)=>{
    if (value === "left" || value === "right") return value;
    return "center";
};
const normalizeTextAlign = (value)=>{
    if (value === "right" || value === "center") return value;
    return "left";
};
const CmsTextAlign = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "cmsTextAlign",
    addGlobalAttributes () {
        return [
            {
                types: [
                    "paragraph",
                    "heading",
                    "blockquote",
                    "listItem",
                    "tableCell",
                    "tableHeader",
                    "codeBlock"
                ],
                attributes: {
                    textAlign: {
                        default: "left",
                        parseHTML: (element)=>normalizeTextAlign(element.style.textAlign || element.getAttribute("data-text-align") || "left"),
                        renderHTML: (attributes)=>{
                            const align = normalizeTextAlign(String(attributes.textAlign || "left"));
                            return {
                                style: `text-align:${align};`,
                                "data-text-align": align
                            };
                        }
                    }
                }
            }
        ];
    }
});
const imageStyleFromLayout = (widthPercent, align)=>{
    const safeWidth = clampImageWidth(widthPercent);
    const margin = align === "left" ? "1rem auto 1rem 0" : align === "right" ? "1rem 0 1rem auto" : "1rem auto";
    return `display:block;max-width:100%;width:${safeWidth}%;height:auto;border-radius:12px;margin:${margin};`;
};
const imageWidthFromStyle = (style)=>{
    const match = style?.match(/width\s*:\s*(\d+(?:\.\d+)?)%/i);
    const width = match ? Number(match[1]) : 100;
    return Number.isFinite(width) ? clampImageWidth(width) : 100;
};
const imageAlignFromNode = (node)=>{
    const attrAlign = normalizeImageAlign(node.getAttribute("data-align"));
    if (attrAlign !== "center") return attrAlign;
    const style = node.getAttribute("style") || "";
    if (/margin\s*:\s*[^;]*\s0\s1rem\sauto/i.test(style)) return "right";
    if (/margin\s*:\s*[^;]*\sauto\s1rem\s0/i.test(style)) return "left";
    return "center";
};
const CmsImage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$image$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].extend({
    addAttributes () {
        return {
            ...this.parent?.(),
            style: {
                default: "",
                parseHTML: (element)=>element.getAttribute("style") || "",
                renderHTML: (attributes)=>{
                    const style = String(attributes.style || "").trim();
                    return style ? {
                        style
                    } : {};
                }
            },
            dataAlign: {
                default: "center",
                parseHTML: (element)=>normalizeImageAlign(element.getAttribute("data-align")),
                renderHTML: (attributes)=>({
                        "data-align": normalizeImageAlign(String(attributes.dataAlign || "center"))
                    })
            },
            dataCaption: {
                default: "",
                parseHTML: (element)=>element.getAttribute("data-caption") || "",
                renderHTML: (attributes)=>{
                    const caption = String(attributes.dataCaption || "").trim();
                    return caption ? {
                        "data-caption": caption
                    } : {};
                }
            },
            dataMediaId: {
                default: "",
                parseHTML: (element)=>element.getAttribute("data-media-id") || "",
                renderHTML: (attributes)=>{
                    const mediaId = String(attributes.dataMediaId || "").trim();
                    return mediaId ? {
                        "data-media-id": mediaId
                    } : {};
                }
            }
        };
    },
    renderHTML ({ HTMLAttributes }) {
        const attrs = {
            ...HTMLAttributes
        };
        const width = imageWidthFromStyle(attrs.style || "");
        const align = normalizeImageAlign(attrs["data-align"] || "center");
        attrs.style = imageStyleFromLayout(width, align);
        attrs["data-align"] = align;
        return [
            "img",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"])(this.options.HTMLAttributes, attrs)
        ];
    }
});
const slugify = (v)=>v.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
const tagList = (v)=>Array.from(new Set(v.split(",").map((x)=>x.trim().toLowerCase()).filter(Boolean)));
const normalizedSeo = (post)=>({
        metaTitle: post.seo?.metaTitle || post.title,
        metaDescription: post.seo?.metaDescription || post.excerpt,
        ogImage: post.seo?.ogImage || post.featuredImageUrl || "",
        canonicalUrl: post.seo?.canonicalUrl || "",
        schemaJsonLd: post.seo?.schemaJsonLd || "",
        keywords: Array.from(new Set([
            ...post.seo?.keywords || [],
            ...post.tags
        ].map((item)=>item.trim().toLowerCase()).filter(Boolean))),
        robotsNoIndex: Boolean(post.seo?.robotsNoIndex),
        robotsNoFollow: Boolean(post.seo?.robotsNoFollow)
    });
const payloadHashFromPost = (post)=>{
    const seo = normalizedSeo(post);
    return JSON.stringify({
        title: post.title.trim(),
        slug: post.slug.trim(),
        content: sanitizeEditorHtmlForSave(post.content),
        featuredImageUrl: post.featuredImageUrl.trim(),
        categories: post.categories,
        tags: post.tags,
        status: post.status,
        scheduledAt: post.status === "scheduled" ? post.scheduledAt : null,
        authorName: post.authorName.trim(),
        seo
    });
};
const AUTO_SAVE_STORAGE_KEY = "ib_blog_cms_autosave_v1";
const clearAutoSaveDraft = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.localStorage.removeItem(AUTO_SAVE_STORAGE_KEY);
};
const writeAutoSaveDraft = (draft)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        window.localStorage.setItem(AUTO_SAVE_STORAGE_KEY, JSON.stringify(draft));
        return {
            ok: true
        };
    } catch  {
        return {
            ok: false,
            message: "Local storage quota exceeded. Remove large media HTML and retry."
        };
    }
};
const readAutoSaveDraft = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const raw = window.localStorage.getItem(AUTO_SAVE_STORAGE_KEY);
    if (!raw) return null;
    try {
        return JSON.parse(raw);
    } catch  {
        return null;
    }
};
const emptyForm = (authorName)=>({
        id: null,
        title: "",
        slug: "",
        content: "<p>Start writing your post...</p>",
        featuredImageUrl: "",
        imageAltText: "",
        categories: [],
        tagsInput: "",
        status: "draft",
        scheduledAt: "",
        authorName,
        metaTitle: "",
        metaDescription: "",
        ogImage: "",
        canonicalUrl: "",
        schemaJsonLd: "",
        seoKeywordsInput: "",
        robotsNoIndex: false,
        robotsNoFollow: false
    });
const toLocalDateTime = (iso)=>{
    if (!iso) return "";
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "";
    const pad = (n)=>String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
};
const toIsoDateTime = (local)=>{
    if (!local) return null;
    const d = new Date(local);
    if (Number.isNaN(d.getTime())) return null;
    return d.toISOString();
};
const prettyDate = (v)=>{
    if (!v) return "-";
    const d = new Date(v);
    return Number.isNaN(d.getTime()) ? "-" : d.toLocaleString();
};
const bytes = (n)=>{
    if (n < 1024) return `${n} B`;
    if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
    return `${(n / (1024 * 1024)).toFixed(2)} MB`;
};
const NEW_BLOG_SECTION_PROMPT = "Start new blog";
const escapeHtml = (s)=>s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
const stripBidiControlChars = (html)=>html.replace(/[\u202A-\u202E\u2066-\u2069]/g, "");
const normalizeEditorDirection = (html)=>{
    if (typeof document === "undefined") {
        return html.replace(/\sdir=(["'])(rtl|auto)\1/gi, ' dir="ltr"') // Force ltr
        .replace(/direction\s*:\s*(rtl|auto)\s*;?/gi, "direction:ltr;"); // Force ltr
    }
    const template = document.createElement("template");
    template.innerHTML = html;
    // Find all elements and force LTR strictly during sanitize on save
    const allElements = Array.from(template.content.querySelectorAll("*"));
    allElements.forEach((el)=>{
        if (el.hasAttribute("dir")) {
            el.setAttribute("dir", "ltr");
        }
        if (el.style.direction) {
            el.style.direction = "ltr";
        }
    });
    return template.innerHTML;
};
const sanitizeEditorHtml = (html)=>normalizeEditorDirection(stripBidiControlChars(html));
const sanitizeEditorHtmlForSave = (html)=>sanitizeEditorHtml(html).replace(/<button[^>]*data-type="delete-image"[^>]*>[\s\S]*?<\/button>/gi, "").replace(/\scontenteditable="false"/gi, "").replace(/\sdraggable="true"/gi, "").replace(/\sdata-editor-block="true"/gi, "").replace(/\sdata-block-index="[^"]*"/gi, "").replace(/<div class="editor-image-wrapper"[^>]*>([\s\S]*?)<\/div>/gi, "$1");
const withEditorImageControls = (html)=>sanitizeEditorHtml(html);
const imageHtml = (url, alt, mediaId, caption = "", align = "center", widthPercent = 100)=>`<img 
    src="${escapeHtml(url)}" 
    alt="${escapeHtml(alt)}"
    title="${escapeHtml(alt)}"
    ${mediaId ? `data-media-id="${escapeHtml(mediaId)}"` : ""}
    data-align="${escapeHtml(align)}"
    ${caption.trim() ? `data-caption="${escapeHtml(caption.trim())}"` : ""}
    style="${escapeHtml(imageStyleFromLayout(widthPercent, align))}"
  /><p></p>`;
const faqHtml = (question, answer)=>`<div class="faq-block" style="margin:1rem 0;">
    <h3>${escapeHtml(question)}</h3>
    <p>${escapeHtml(answer)}</p>
  </div><p></p>`;
const tableHtml = (rows, cols)=>{
    const safeRows = Math.min(10, Math.max(1, rows));
    const safeCols = Math.min(8, Math.max(1, cols));
    const head = Array.from({
        length: safeCols
    }).map((_, i)=>`<th style="border:1px solid #cbd5e1;padding:8px;text-align:left;">Heading ${i + 1}</th>`).join("");
    const body = Array.from({
        length: safeRows
    }).map((_, r)=>`<tr>${Array.from({
            length: safeCols
        }).map((_, c)=>`<td style="border:1px solid #cbd5e1;padding:8px;">Row ${r + 1}, Col ${c + 1}</td>`).join("")}</tr>`).join("");
    return `<div style="overflow-x:auto;margin:1rem 0;">
    <table style="width:100%;border-collapse:collapse;">
      <thead><tr>${head}</tr></thead>
      <tbody>${body}</tbody>
    </table>
  </div>`;
};
const textFromHtml = (html)=>html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, " ").replace(/<script[^>]*>[\s\S]*?<\/script>/gi, " ").replace(/<\/?[^>]+(>|$)/g, " ").replace(/\s+/g, " ").trim();
const anchorLinksFromHtml = (html)=>{
    if (!html.trim()) return [];
    if (typeof DOMParser === "undefined") {
        const links = [];
        const regex = /<a[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
        let match = regex.exec(html);
        while(match){
            const href = (match[1] || "").trim();
            const text = textFromHtml(match[2] || "").trim() || href;
            if (href) {
                links.push({
                    id: `link-${links.length + 1}`,
                    text,
                    href
                });
            }
            match = regex.exec(html);
        }
        return links;
    }
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const anchors = Array.from(doc.querySelectorAll("a[href]"));
        return anchors.map((anchor, index)=>{
            const href = (anchor.getAttribute("href") || "").trim();
            const text = (anchor.textContent || "").replace(/\s+/g, " ").trim() || href;
            if (!href) return null;
            return {
                id: `link-${index + 1}`,
                text,
                href
            };
        }).filter((item)=>Boolean(item));
    } catch  {
        return [];
    }
};
const faqFromHtml = (html)=>{
    if (typeof DOMParser === "undefined") {
        return [];
    }
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const faqBlocks = Array.from(doc.querySelectorAll(".faq-block"));
        const detailBlocks = Array.from(doc.querySelectorAll("details"));
        const entries = [];
        const seen = new Set();
        const pushEntry = (questionRaw, answerRaw)=>{
            const question = questionRaw.replace(/^(faq|q|question)\s*[:\-]\s*/i, "").replace(/\s+/g, " ").trim();
            const answer = answerRaw.replace(/^(a|answer)\s*[:\-]\s*/i, "").replace(/\s+/g, " ").trim();
            if (!question || !answer) return;
            const key = `${question.toLowerCase()}::${answer.toLowerCase()}`;
            if (seen.has(key)) return;
            seen.add(key);
            entries.push({
                question,
                answer
            });
        };
        faqBlocks.forEach((node)=>{
            const question = node.querySelector("h3,h2,h4,summary")?.textContent?.trim() || "";
            const answer = node.querySelector("p")?.textContent?.trim() || "";
            pushEntry(question, answer);
        });
        detailBlocks.forEach((node)=>{
            const question = node.querySelector("summary")?.textContent?.trim() || "";
            const answer = textFromHtml(node.innerHTML.replace(/<summary[\s\S]*?<\/summary>/i, ""));
            pushEntry(question, answer);
        });
        const headingNodes = Array.from(doc.querySelectorAll("h2, h3, h4"));
        headingNodes.forEach((heading)=>{
            const questionRaw = heading.textContent?.trim() || "";
            const normalizedQuestion = questionRaw.replace(/^(faq|q|question)\s*[:\-]\s*/i, "").trim();
            const looksLikeFaq = /\?\s*$/.test(normalizedQuestion) || /^(faq|q|question)\s*[:\-]/i.test(questionRaw);
            if (!looksLikeFaq) return;
            const next = heading.nextElementSibling;
            if (!next || next.tagName.toLowerCase() !== "p") return;
            const answer = next.textContent?.trim() || "";
            pushEntry(questionRaw, answer);
        });
        const qaNodes = Array.from(doc.querySelectorAll("p, li"));
        for(let index = 0; index < qaNodes.length - 1; index += 1){
            const questionRaw = qaNodes[index]?.textContent?.trim() || "";
            const answerRaw = qaNodes[index + 1]?.textContent?.trim() || "";
            const isQuestion = /^(q|question)\s*[:\-]/i.test(questionRaw);
            const isAnswer = /^(a|answer)\s*[:\-]/i.test(answerRaw);
            if (!isQuestion || !isAnswer) continue;
            pushEntry(questionRaw, answerRaw);
            index += 1;
        }
        return entries;
    } catch  {
        return [];
    }
};
const hasType = (node, typeName)=>{
    const target = typeName.toLowerCase();
    const typeValue = node["@type"];
    if (Array.isArray(typeValue)) {
        return typeValue.some((item)=>String(item).toLowerCase() === target);
    }
    return String(typeValue || "").toLowerCase() === target;
};
const parseSchemaNodes = (schemaJsonLd)=>{
    const raw = schemaJsonLd.trim();
    if (!raw) return [];
    try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
            return parsed.filter((item)=>Boolean(item) && typeof item === "object" && !Array.isArray(item));
        }
        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
            const node = parsed;
            const graph = node["@graph"];
            if (Array.isArray(graph)) {
                return graph.filter((item)=>Boolean(item) && typeof item === "object" && !Array.isArray(item));
            }
            return [
                node
            ];
        }
    } catch  {
        return [];
    }
    return [];
};
const findSchemaNodeByType = (schemaJsonLd, typeName)=>parseSchemaNodes(schemaJsonLd).find((node)=>hasType(node, typeName)) || null;
const withSchemaContext = (node)=>typeof node["@context"] === "string" && node["@context"].trim() ? node : {
        "@context": "https://schema.org",
        ...node
    };
const faqEntitiesFromHtml = (html)=>faqFromHtml(html).map((item)=>({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer
            }
        }));
const upsertFaqPageInSchemaJsonLd = (schemaJsonLd, faqEntities)=>{
    const raw = schemaJsonLd.trim();
    if (!raw || faqEntities.length === 0) return raw;
    const withFaqNode = (node)=>({
            ...node,
            "@context": typeof node["@context"] === "string" && node["@context"].trim() ? node["@context"] : "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqEntities
        });
    const fallbackFaqNode = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqEntities
    };
    try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
            const next = [
                ...parsed
            ];
            const faqIndex = next.findIndex((item)=>!!item && typeof item === "object" && hasType(item, "FAQPage"));
            if (faqIndex >= 0) {
                next[faqIndex] = withFaqNode(next[faqIndex]);
            } else {
                next.push(fallbackFaqNode);
            }
            return JSON.stringify(next, null, 2);
        }
        if (parsed && typeof parsed === "object") {
            const node = parsed;
            const graph = node["@graph"];
            if (Array.isArray(graph)) {
                const nextGraph = [
                    ...graph
                ];
                const faqIndex = nextGraph.findIndex((item)=>!!item && typeof item === "object" && hasType(item, "FAQPage"));
                if (faqIndex >= 0) {
                    nextGraph[faqIndex] = withFaqNode(nextGraph[faqIndex]);
                } else {
                    nextGraph.push(fallbackFaqNode);
                }
                return JSON.stringify({
                    ...node,
                    "@graph": nextGraph
                }, null, 2);
            }
            if (hasType(node, "FAQPage")) {
                return JSON.stringify(withFaqNode(node), null, 2);
            }
            return JSON.stringify([
                node,
                fallbackFaqNode
            ], null, 2);
        }
    } catch  {
        return "";
    }
    return "";
};
const upsertBreadcrumbListInSchemaJsonLd = (schemaJsonLd, breadcrumbNode)=>{
    const raw = schemaJsonLd.trim();
    if (!raw) return raw;
    const normalizedBreadcrumbNode = withSchemaContext({
        ...breadcrumbNode,
        "@type": "BreadcrumbList"
    });
    const withBreadcrumbNode = (node)=>({
            ...node,
            "@context": typeof node["@context"] === "string" && node["@context"].trim() ? node["@context"] : normalizedBreadcrumbNode["@context"],
            "@type": "BreadcrumbList",
            itemListElement: normalizedBreadcrumbNode.itemListElement
        });
    try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
            const next = [
                ...parsed
            ];
            const breadcrumbIndex = next.findIndex((item)=>!!item && typeof item === "object" && hasType(item, "BreadcrumbList"));
            if (breadcrumbIndex >= 0) {
                next[breadcrumbIndex] = withBreadcrumbNode(next[breadcrumbIndex]);
            } else {
                next.push(normalizedBreadcrumbNode);
            }
            return JSON.stringify(next, null, 2);
        }
        if (parsed && typeof parsed === "object") {
            const node = parsed;
            const graph = node["@graph"];
            if (Array.isArray(graph)) {
                const nextGraph = [
                    ...graph
                ];
                const breadcrumbIndex = nextGraph.findIndex((item)=>!!item && typeof item === "object" && hasType(item, "BreadcrumbList"));
                if (breadcrumbIndex >= 0) {
                    nextGraph[breadcrumbIndex] = withBreadcrumbNode(nextGraph[breadcrumbIndex]);
                } else {
                    nextGraph.push(normalizedBreadcrumbNode);
                }
                return JSON.stringify({
                    ...node,
                    "@graph": nextGraph
                }, null, 2);
            }
            if (hasType(node, "BreadcrumbList")) {
                return JSON.stringify(withBreadcrumbNode(node), null, 2);
            }
            return JSON.stringify([
                node,
                normalizedBreadcrumbNode
            ], null, 2);
        }
    } catch  {
        return "";
    }
    return "";
};
const upsertBlogPostingInSchemaJsonLd = (schemaJsonLd, blogPostingNode)=>{
    const raw = schemaJsonLd.trim();
    if (!raw) return raw;
    const normalizedBlogPostingNode = withSchemaContext({
        ...blogPostingNode,
        "@type": "BlogPosting"
    });
    const withBlogPostingNode = (node)=>{
        const normalizedAuthor = normalizedBlogPostingNode.author && typeof normalizedBlogPostingNode.author === "object" && !Array.isArray(normalizedBlogPostingNode.author) ? normalizedBlogPostingNode.author : null;
        const normalizedPublisher = normalizedBlogPostingNode.publisher && typeof normalizedBlogPostingNode.publisher === "object" && !Array.isArray(normalizedBlogPostingNode.publisher) ? normalizedBlogPostingNode.publisher : null;
        const normalizedMainEntity = normalizedBlogPostingNode.mainEntityOfPage && typeof normalizedBlogPostingNode.mainEntityOfPage === "object" && !Array.isArray(normalizedBlogPostingNode.mainEntityOfPage) ? normalizedBlogPostingNode.mainEntityOfPage : null;
        const currentAuthor = node.author && typeof node.author === "object" && !Array.isArray(node.author) ? node.author : null;
        const currentPublisher = node.publisher && typeof node.publisher === "object" && !Array.isArray(node.publisher) ? node.publisher : null;
        const currentMainEntity = node.mainEntityOfPage && typeof node.mainEntityOfPage === "object" && !Array.isArray(node.mainEntityOfPage) ? node.mainEntityOfPage : null;
        return {
            ...normalizedBlogPostingNode,
            ...node,
            "@context": typeof node["@context"] === "string" && node["@context"].trim() ? node["@context"] : normalizedBlogPostingNode["@context"],
            "@type": "BlogPosting",
            ...normalizedAuthor || currentAuthor ? {
                author: {
                    ...normalizedAuthor || {},
                    ...currentAuthor || {}
                }
            } : {},
            ...normalizedPublisher || currentPublisher ? {
                publisher: {
                    ...normalizedPublisher || {},
                    ...currentPublisher || {}
                }
            } : {},
            ...normalizedMainEntity || currentMainEntity ? {
                mainEntityOfPage: {
                    ...normalizedMainEntity || {},
                    ...currentMainEntity || {}
                }
            } : {}
        };
    };
    try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
            const next = [
                ...parsed
            ];
            const blogPostingIndex = next.findIndex((item)=>!!item && typeof item === "object" && hasType(item, "BlogPosting"));
            if (blogPostingIndex >= 0) {
                next[blogPostingIndex] = withBlogPostingNode(next[blogPostingIndex]);
            } else {
                next.unshift(normalizedBlogPostingNode);
            }
            return JSON.stringify(next, null, 2);
        }
        if (parsed && typeof parsed === "object") {
            const node = parsed;
            const graph = node["@graph"];
            if (Array.isArray(graph)) {
                const nextGraph = [
                    ...graph
                ];
                const blogPostingIndex = nextGraph.findIndex((item)=>!!item && typeof item === "object" && hasType(item, "BlogPosting"));
                if (blogPostingIndex >= 0) {
                    nextGraph[blogPostingIndex] = withBlogPostingNode(nextGraph[blogPostingIndex]);
                } else {
                    nextGraph.unshift(normalizedBlogPostingNode);
                }
                return JSON.stringify({
                    ...node,
                    "@graph": nextGraph
                }, null, 2);
            }
            if (hasType(node, "BlogPosting")) {
                return JSON.stringify(withBlogPostingNode(node), null, 2);
            }
            return JSON.stringify([
                normalizedBlogPostingNode,
                node
            ], null, 2);
        }
    } catch  {
        return "";
    }
    return "";
};
const resolveSchemaJsonLdForContent = ({ currentSchemaJsonLd, generatedSchemaJsonLd, content })=>{
    const faqEntities = faqEntitiesFromHtml(content);
    const current = currentSchemaJsonLd.trim();
    const generated = generatedSchemaJsonLd.trim();
    const base = current || generated;
    if (!base) return "";
    const generatedBlogPosting = findSchemaNodeByType(generated, "BlogPosting");
    const generatedBreadcrumb = findSchemaNodeByType(generated, "BreadcrumbList");
    let resolved = base;
    if (generatedBlogPosting) {
        const blogPostingMerged = upsertBlogPostingInSchemaJsonLd(resolved, generatedBlogPosting);
        if (blogPostingMerged.trim()) {
            resolved = blogPostingMerged;
        } else if (generated) {
            resolved = generated;
        }
    }
    if (generatedBreadcrumb) {
        const breadcrumbMerged = upsertBreadcrumbListInSchemaJsonLd(resolved, generatedBreadcrumb);
        if (breadcrumbMerged.trim()) {
            resolved = breadcrumbMerged;
        } else if (generated) {
            resolved = generated;
        }
    }
    if (faqEntities.length === 0) return resolved;
    const faqMerged = upsertFaqPageInSchemaJsonLd(resolved, faqEntities);
    if (faqMerged.trim()) return faqMerged;
    return generated || resolved || base;
};
const autoSchemaJsonLd = ({ title, slug, content, featuredImageUrl, categories, tags, authorName, seo })=>{
    const siteUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
    const toAbsoluteUrl = (value)=>{
        const input = value.trim();
        if (!input) return "";
        if (/^https?:\/\//i.test(input)) return input;
        if (!siteUrl) return input.startsWith("/") ? input : `/${input}`;
        return input.startsWith("/") ? `${siteUrl}${input}` : `${siteUrl}/${input}`;
    };
    const canonicalUrl = toAbsoluteUrl(seo.canonicalUrl.trim()) || (slug ? toAbsoluteUrl(`/blog/${slug}`) : "");
    const description = seo.metaDescription.trim() || textFromHtml(content).slice(0, 180) || title.trim();
    const image = toAbsoluteUrl(seo.ogImage.trim() || featuredImageUrl.trim());
    const nowIso = new Date().toISOString();
    const postPath = slug ? `/blog/${slug}` : "/blog";
    const postUrl = canonicalUrl || toAbsoluteUrl(postPath);
    const publisherName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SITE_NAME?.trim() || "Infobirth";
    const publisherLogoUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SITE_LOGO_URL?.trim() || (siteUrl ? `${siteUrl}/logo.png` : "");
    const blogPosting = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: seo.metaTitle.trim() || title.trim(),
        description,
        datePublished: nowIso,
        dateModified: nowIso,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": postUrl
        },
        url: postUrl,
        publisher: {
            "@type": "Organization",
            name: publisherName,
            ...publisherLogoUrl ? {
                logo: {
                    "@type": "ImageObject",
                    url: publisherLogoUrl
                }
            } : {}
        }
    };
    blogPosting.author = {
        "@type": "Person",
        name: authorName?.trim() || "Infobirth Team"
    };
    if (image) {
        blogPosting.image = image;
    }
    const keywordMap = new Map();
    [
        ...tags,
        ...seo.keywords
    ].map((item)=>item.trim()).filter(Boolean).forEach((item)=>{
        const key = item.toLowerCase();
        if (!keywordMap.has(key)) {
            keywordMap.set(key, item);
        }
    });
    const keywordList = Array.from(keywordMap.values());
    if (keywordList.length > 0) {
        blogPosting.keywords = keywordList.join(", ");
    }
    if (categories.length > 0) {
        blogPosting.articleSection = categories;
    }
    const breadcrumbNode = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: toAbsoluteUrl("/")
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: toAbsoluteUrl("/blog")
            },
            {
                "@type": "ListItem",
                position: 3,
                name: title.trim() || "Blog Post",
                item: postUrl
            }
        ]
    };
    const faqEntities = faqEntitiesFromHtml(content);
    const schemaNodes = [
        blogPosting,
        breadcrumbNode
    ];
    if (faqEntities.length === 0) {
        return JSON.stringify(schemaNodes, null, 2);
    }
    schemaNodes.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqEntities
    });
    return JSON.stringify(schemaNodes, null, 2);
};
function embedHtml(url) {
    const input = url.trim();
    if (!input) return "";
    try {
        const parsed = new URL(input);
        const host = parsed.hostname.toLowerCase();
        if (host.includes("youtu.be") || host.includes("youtube.com")) {
            const id = host.includes("youtu.be") ? parsed.pathname.replace("/", "") : parsed.searchParams.get("v") || "";
            if (id) {
                return `<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1rem 0;"><iframe src="https://www.youtube.com/embed/${escapeHtml(id)}" title="Embedded video" style="position:absolute;inset:0;width:100%;height:100%;border:0;" allowfullscreen></iframe></div>`;
            }
        }
        return `<p><a href="${escapeHtml(input)}" target="_blank" rel="noopener noreferrer">${escapeHtml(input)}</a></p>`;
    } catch  {
        return "";
    }
}
async function optimizeImage(file) {
    const objectUrl = URL.createObjectURL(file);
    try {
        const img = await new Promise((resolve, reject)=>{
            const image = new Image();
            image.onload = ()=>resolve(image);
            image.onerror = ()=>reject(new Error("Unable to read image."));
            image.src = objectUrl;
        });
        const maxEdge = 1600;
        const scale = Math.min(1, maxEdge / Math.max(img.naturalWidth, img.naturalHeight));
        const width = Math.max(1, Math.round(img.naturalWidth * scale));
        const height = Math.max(1, Math.round(img.naturalHeight * scale));
        if (scale === 1 && file.size <= 1_200_000) {
            return {
                file,
                width: img.naturalWidth,
                height: img.naturalHeight
            };
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Unable to optimize image.");
        ctx.drawImage(img, 0, 0, width, height);
        const outType = file.type === "image/png" ? "image/png" : "image/jpeg";
        const ext = outType === "image/png" ? "png" : "jpg";
        const blob = await new Promise((resolve)=>canvas.toBlob(resolve, outType, 0.82));
        if (!blob) throw new Error("Image optimization failed.");
        const useBlob = blob.size < file.size ? blob : file;
        const outName = file.name.replace(/\.[a-zA-Z0-9]+$/, `.${ext}`);
        const outFile = useBlob instanceof File ? useBlob : new File([
            useBlob
        ], outName, {
            type: outType
        });
        return {
            file: outFile,
            width,
            height
        };
    } finally{
        URL.revokeObjectURL(objectUrl);
    }
}
function App() {
    _s();
    const editorHtmlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(emptyForm(fallbackSettings.authorName).content);
    const isPersistingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastSavedHashRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    const lastCookieHashRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    const hasRestoredDraftRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(emptyForm(fallbackSettings.authorName));
    const persistPostShortcutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // We separate `initialContent` to prevent React from updating the
    // dangerouslySetInnerHTML continuously while typing, which completely fixes the cursor backwards issue.
    const [initialContent, setInitialContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(emptyForm(fallbackSettings.authorName).content);
    const [editorKey, setEditorKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [slugTouched, setSlugTouched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [embedUrl, setEmbedUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newCategoryName, setNewCategoryName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [faqQuestion, setFaqQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [faqAnswer, setFaqAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isFaqModalOpen, setIsFaqModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tableRows, setTableRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    const [tableCols, setTableCols] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    const [isImageModalOpen, setIsImageModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imageModalUrl, setImageModalUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [imageModalAlt, setImageModalAlt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [imageModalCaption, setImageModalCaption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [imageModalAlign, setImageModalAlign] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("center");
    // const [imageModalWidth, setImageModalWidth] = useState(100);
    const [imageModalFile, setImageModalFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [insertingImage, setInsertingImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLinkModalOpen, setIsLinkModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [linkModalUrl, setLinkModalUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [linkRelMode, setLinkRelMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dofollow");
    const [insertingLink, setInsertingLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const linkSelectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const editorSurfaceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contextMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const slashMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const slashMenuListRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const slashItemRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [replaceImageSrc, setReplaceImageSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [contextImageSrc, setContextImageSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [interactionState, setInteractionState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(emptyEditorInteractionState());
    const [inlineIndicator, setInlineIndicator] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        visible: false,
        x: 0,
        y: 0,
        label: ""
    });
    const [contextMenu, setContextMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        open: false,
        x: 0,
        y: 0,
        situation: null,
        items: []
    });
    const [slashMenu, setSlashMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        open: false,
        x: 0,
        y: 0,
        query: "",
        activeIndex: 0,
        items: [],
        replaceFrom: 0,
        replaceTo: 0
    });
    const [commandPipeline, setCommandPipeline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "Editor ready.",
        "Selection tracking enabled.",
        "Toolbar/UI sync active."
    ]);
    const [authReady, setAuthReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [authToken, setAuthToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [savingPost, setSavingPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deletingPost, setDeletingPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [savingSettings, setSavingSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [savingCategory, setSavingCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadingMedia, setUploadingMedia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [autoSaveNotice, setAutoSaveNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Idle");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mediaItems, setMediaItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingComments, setLoadingComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [commentActionId, setCommentActionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(fallbackSettings);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(emptyForm(fallbackSettings.authorName));
    const closeContextMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[closeContextMenu]": ()=>{
            setContextImageSrc(null);
            setContextMenu({
                open: false,
                x: 0,
                y: 0,
                situation: null,
                items: []
            });
        }
    }["App.useCallback[closeContextMenu]"], []);
    const closeSlashMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[closeSlashMenu]": ()=>{
            setSlashMenu({
                "App.useCallback[closeSlashMenu]": (prev)=>prev.open ? {
                        open: false,
                        x: 0,
                        y: 0,
                        query: "",
                        activeIndex: 0,
                        items: [],
                        replaceFrom: 0,
                        replaceTo: 0
                    } : prev
            }["App.useCallback[closeSlashMenu]"]);
        }
    }["App.useCallback[closeSlashMenu]"], []);
    const setSlashActiveIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[setSlashActiveIndex]": (index)=>{
            setSlashMenu({
                "App.useCallback[setSlashActiveIndex]": (prev_0)=>{
                    if (!prev_0.open || prev_0.items.length === 0) return prev_0;
                    const bounded = Math.max(0, Math.min(index, prev_0.items.length - 1));
                    if (bounded === prev_0.activeIndex) return prev_0;
                    return {
                        ...prev_0,
                        activeIndex: bounded
                    };
                }
            }["App.useCallback[setSlashActiveIndex]"]);
        }
    }["App.useCallback[setSlashActiveIndex]"], []);
    const shiftSlashActiveIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[shiftSlashActiveIndex]": (direction)=>{
            setSlashMenu({
                "App.useCallback[shiftSlashActiveIndex]": (prev_1)=>{
                    if (!prev_1.open || prev_1.items.length === 0) return prev_1;
                    const nextIndex = (prev_1.activeIndex + direction + prev_1.items.length) % prev_1.items.length;
                    if (nextIndex === prev_1.activeIndex) return prev_1;
                    return {
                        ...prev_1,
                        activeIndex: nextIndex
                    };
                }
            }["App.useCallback[shiftSlashActiveIndex]"]);
        }
    }["App.useCallback[shiftSlashActiveIndex]"], []);
    const updatePipeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[updatePipeline]": (steps)=>{
            setCommandPipeline(steps);
        }
    }["App.useCallback[updatePipeline]"], []);
    const toSmartPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[toSmartPosition]": (rawX, rawY, width, height)=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const margin = 12;
            const maxX = window.innerWidth - width - margin;
            const maxY = window.innerHeight - height - margin;
            return {
                x: Math.min(Math.max(margin, rawX), Math.max(margin, maxX)),
                y: Math.min(Math.max(margin, rawY), Math.max(margin, maxY))
            };
        }
    }["App.useCallback[toSmartPosition]"], []);
    const syncInteractionState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[syncInteractionState]": (editor)=>{
            if (!editor) {
                setInteractionState(emptyEditorInteractionState());
                setInlineIndicator({
                    "App.useCallback[syncInteractionState]": (prev_2)=>prev_2.visible ? {
                            visible: false,
                            x: 0,
                            y: 0,
                            label: ""
                        } : prev_2
                }["App.useCallback[syncInteractionState]"]);
                return;
            }
            const { from, to } = editor.state.selection;
            const hasTextSelection = from !== to;
            const selectedText = hasTextSelection ? editor.state.doc.textBetween(from, to, " ").trim() : "";
            const selectionEl = ("TURBOPACK compile-time truthy", 1) ? ({
                "App.useCallback[syncInteractionState]": ()=>{
                    const selection = window.getSelection();
                    const node = selection?.anchorNode;
                    if (!node) return null;
                    if (node instanceof Element) return node;
                    return node.parentElement;
                }
            })["App.useCallback[syncInteractionState]"]() : "TURBOPACK unreachable";
            const isImageSelected = editor.isActive("image") || Boolean(selectionEl?.closest("img"));
            const parentNode = editor.state.selection.$from.parent;
            const activeTextAlign = normalizeTextAlign(String(parentNode.attrs?.textAlign || "left"));
            const headingLevel = parentNode.type.name === "heading" ? parentNode.attrs?.level : null;
            const nodeType = parentNode.type.name === "heading" && headingLevel ? `h${headingLevel}` : parentNode.type.name;
            const isEmptyLine = !hasTextSelection && (parentNode.type.name === "paragraph" || parentNode.type.name === "heading") && !parentNode.textContent.trim();
            const activeLinkHref = String(editor.getAttributes("link")?.href || "");
            setInteractionState({
                isFocused: editor.isFocused,
                hasTextSelection,
                selectedText,
                isImageSelected,
                isEmptyLine,
                nodeType,
                activeLinkHref,
                active: {
                    paragraph: editor.isActive("paragraph"),
                    h1: editor.isActive("heading", {
                        level: 1
                    }),
                    h2: editor.isActive("heading", {
                        level: 2
                    }),
                    h3: editor.isActive("heading", {
                        level: 3
                    }),
                    h4: editor.isActive("heading", {
                        level: 4
                    }),
                    h5: editor.isActive("heading", {
                        level: 5
                    }),
                    h6: editor.isActive("heading", {
                        level: 6
                    }),
                    bold: editor.isActive("bold"),
                    italic: editor.isActive("italic"),
                    underline: editor.isActive("underline"),
                    bulletList: editor.isActive("bulletList"),
                    orderedList: editor.isActive("orderedList"),
                    blockquote: editor.isActive("blockquote"),
                    codeBlock: editor.isActive("codeBlock"),
                    link: editor.isActive("link"),
                    alignTextLeft: activeTextAlign === "left",
                    alignTextCenter: activeTextAlign === "center",
                    alignTextRight: activeTextAlign === "right"
                }
            });
            if (!hasTextSelection || ("TURBOPACK compile-time value", "object") === "undefined") {
                setInlineIndicator({
                    "App.useCallback[syncInteractionState]": (prev_3)=>prev_3.visible ? {
                            visible: false,
                            x: 0,
                            y: 0,
                            label: ""
                        } : prev_3
                }["App.useCallback[syncInteractionState]"]);
                return;
            }
            const selection_0 = window.getSelection();
            if (!selection_0 || selection_0.rangeCount === 0) {
                setInlineIndicator({
                    "App.useCallback[syncInteractionState]": (prev_4)=>prev_4.visible ? {
                            visible: false,
                            x: 0,
                            y: 0,
                            label: ""
                        } : prev_4
                }["App.useCallback[syncInteractionState]"]);
                return;
            }
            const range = selection_0.getRangeAt(0);
            const rect = range.getBoundingClientRect();
            const editorRect = editorSurfaceRef.current?.getBoundingClientRect();
            if (!editorRect || rect.width === 0 && rect.height === 0) {
                setInlineIndicator({
                    "App.useCallback[syncInteractionState]": (prev_5)=>prev_5.visible ? {
                            visible: false,
                            x: 0,
                            y: 0,
                            label: ""
                        } : prev_5
                }["App.useCallback[syncInteractionState]"]);
                return;
            }
            const indicatorX = rect.left - editorRect.left + rect.width / 2;
            const indicatorY = rect.top - editorRect.top - 10;
            setInlineIndicator({
                visible: true,
                x: indicatorX,
                y: indicatorY,
                label: `Selection: ${selectedText.slice(0, 36)}${selectedText.length > 36 ? "..." : ""}`
            });
        }
    }["App.useCallback[syncInteractionState]"], []);
    const updateSlashMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[updateSlashMenu]": (editor_0)=>{
            if (!editor_0 || !editor_0.isFocused) {
                closeSlashMenu();
                return;
            }
            const { from: from_0, to: to_0, $from } = editor_0.state.selection;
            if (from_0 !== to_0) {
                closeSlashMenu();
                return;
            }
            const parent = $from.parent;
            if (![
                "paragraph",
                "heading"
            ].includes(parent.type.name)) {
                closeSlashMenu();
                return;
            }
            const textBefore = parent.textContent.slice(0, $from.parentOffset);
            const match = textBefore.match(/(^|\s)\/([a-z0-9-]*)$/i);
            if (!match) {
                closeSlashMenu();
                return;
            }
            const slashIndex = textBefore.lastIndexOf("/");
            if (slashIndex < 0) {
                closeSlashMenu();
                return;
            }
            const query = (match[2] || "").toLowerCase();
            const filtered = slashCommandCatalog.filter({
                "App.useCallback[updateSlashMenu].filtered": (item)=>{
                    if (!query) return true;
                    const q = query.trim();
                    return item.label.toLowerCase().includes(q) || item.keyword.includes(q);
                }
            }["App.useCallback[updateSlashMenu].filtered"]).map({
                "App.useCallback[updateSlashMenu].filtered": (item_0)=>({
                        id: item_0.id,
                        label: item_0.label
                    })
            }["App.useCallback[updateSlashMenu].filtered"]);
            if (filtered.length === 0) {
                closeSlashMenu();
                return;
            }
            let x = 24;
            let y = 24;
            if ("TURBOPACK compile-time truthy", 1) {
                const selection_1 = window.getSelection();
                if (selection_1 && selection_1.rangeCount > 0) {
                    const range_0 = selection_1.getRangeAt(0).cloneRange();
                    range_0.collapse(true);
                    const rect_0 = range_0.getBoundingClientRect();
                    x = rect_0.left;
                    y = rect_0.bottom + 8;
                }
            }
            const positioned = toSmartPosition(x, y, 260, Math.min(filtered.length, 7) * 36 + 22);
            const token = textBefore.slice(slashIndex);
            const replaceFrom = from_0 - token.length;
            const replaceTo = from_0;
            setSlashMenu({
                "App.useCallback[updateSlashMenu]": (prev_6)=>({
                        open: true,
                        x: positioned.x,
                        y: positioned.y,
                        query,
                        activeIndex: Math.min(prev_6.activeIndex, filtered.length - 1),
                        items: filtered,
                        replaceFrom,
                        replaceTo
                    })
            }["App.useCallback[updateSlashMenu]"]);
        }
    }["App.useCallback[updateSlashMenu]"], [
        closeSlashMenu,
        toSmartPosition
    ]);
    const tiptapEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"])({
        extensions: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                heading: {
                    levels: [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                    ]
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$underline$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            CmsTextAlign,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                openOnClick: false
            }),
            CmsImage.configure({
                inline: false,
                allowBase64: true
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"].configure({
                resizable: true
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"]
        ],
        content: initialContent,
        editorProps: {
            attributes: {
                class: "min-h-[150px] text-left text-sm leading-7 text-slate-100 outline-none ltr prose prose-invert max-w-none prose-headings:text-white prose-a:text-emerald-300 prose-p:text-slate-200 prose-blockquote:border-emerald-300 prose-pre:bg-slate-950 [&_table]:my-4 [&_table]:w-full [&_table]:border-collapse [&_table]:overflow-hidden [&_table]:rounded-lg [&_table]:border [&_table]:border-slate-500/60 [&_th]:border [&_th]:border-slate-500/60 [&_th]:bg-slate-800 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:text-slate-100 [&_td]:border [&_td]:border-slate-500/60 [&_td]:bg-slate-900/55 [&_td]:px-3 [&_td]:py-2 [&_td]:text-slate-200 [&_.selectedCell]:bg-emerald-500/20"
            }
        },
        onUpdate: {
            "App.useEditor[tiptapEditor]": ({ editor: editor_1 })=>{
                const html = editor_1.getHTML();
                editorHtmlRef.current = html;
                setForm({
                    "App.useEditor[tiptapEditor]": (prev_7)=>prev_7.content === html ? prev_7 : {
                            ...prev_7,
                            content: html
                        }
                }["App.useEditor[tiptapEditor]"]);
                syncInteractionState(editor_1);
                updateSlashMenu(editor_1);
            }
        }["App.useEditor[tiptapEditor]"],
        onSelectionUpdate: {
            "App.useEditor[tiptapEditor]": ({ editor: editor_2 })=>{
                syncInteractionState(editor_2);
                updateSlashMenu(editor_2);
            }
        }["App.useEditor[tiptapEditor]"],
        onFocus: {
            "App.useEditor[tiptapEditor]": ({ editor: editor_3 })=>{
                syncInteractionState(editor_3);
                updateSlashMenu(editor_3);
            }
        }["App.useEditor[tiptapEditor]"],
        onBlur: {
            "App.useEditor[tiptapEditor]": ({ editor: editor_4 })=>{
                syncInteractionState(editor_4);
                closeContextMenu();
                closeSlashMenu();
            }
        }["App.useEditor[tiptapEditor]"],
        immediatelyRender: false
    });
    const getCurrentEditorHtml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[getCurrentEditorHtml]": ()=>{
            return tiptapEditor?.getHTML() || editorHtmlRef.current || form.content;
        }
    }["App.useCallback[getCurrentEditorHtml]"], [
        form.content,
        tiptapEditor
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (!tiptapEditor) return;
            const next = sanitizeEditorHtml(initialContent);
            if (tiptapEditor.getHTML() === next) return;
            tiptapEditor.commands.setContent(next);
            editorHtmlRef.current = next;
            syncInteractionState(tiptapEditor);
        }
    }["App.useEffect"], [
        initialContent,
        syncInteractionState,
        tiptapEditor
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (!tiptapEditor) return;
            syncInteractionState(tiptapEditor);
            updateSlashMenu(tiptapEditor);
        }
    }["App.useEffect"], [
        syncInteractionState,
        tiptapEditor,
        updateSlashMenu
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (!interactionState.hasTextSelection) return;
            updatePipeline([
                "Selection change detected.",
                `Node type detected: ${interactionState.nodeType.toUpperCase()}.`,
                "Top toolbar active state updated.",
                "Inline indicator rendered."
            ]);
        }
    }["App.useEffect"], [
        interactionState.hasTextSelection,
        interactionState.nodeType,
        updatePipeline
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (!contextMenu.open) return;
            const menuEl = contextMenuRef.current;
            if (!menuEl) return;
            const rect_1 = menuEl.getBoundingClientRect();
            const positioned_0 = toSmartPosition(contextMenu.x, contextMenu.y, rect_1.width, rect_1.height);
            if (positioned_0.x !== contextMenu.x || positioned_0.y !== contextMenu.y) {
                setContextMenu({
                    "App.useEffect": (prev_8)=>({
                            ...prev_8,
                            x: positioned_0.x,
                            y: positioned_0.y
                        })
                }["App.useEffect"]);
            }
        }
    }["App.useEffect"], [
        contextMenu.open,
        contextMenu.x,
        contextMenu.y,
        toSmartPosition
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (!slashMenu.open) return;
            const menuEl_0 = slashMenuRef.current;
            if (!menuEl_0) return;
            const rect_2 = menuEl_0.getBoundingClientRect();
            const positioned_1 = toSmartPosition(slashMenu.x, slashMenu.y, rect_2.width, rect_2.height);
            if (positioned_1.x !== slashMenu.x || positioned_1.y !== slashMenu.y) {
                setSlashMenu({
                    "App.useEffect": (prev_9)=>({
                            ...prev_9,
                            x: positioned_1.x,
                            y: positioned_1.y
                        })
                }["App.useEffect"]);
            }
        }
    }["App.useEffect"], [
        slashMenu.open,
        slashMenu.x,
        slashMenu.y,
        toSmartPosition
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (!slashMenu.open || slashMenu.items.length === 0) return;
            const activeItem = slashItemRefs.current[slashMenu.activeIndex];
            if (!activeItem) return;
            activeItem.scrollIntoView({
                block: "nearest"
            });
        }
    }["App.useEffect"], [
        slashMenu.activeIndex,
        slashMenu.items.length,
        slashMenu.open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (!contextMenu.open && !slashMenu.open) return;
            const onPointerDown = {
                "App.useEffect.onPointerDown": (event)=>{
                    const target = event.target;
                    if (target && (contextMenuRef.current?.contains(target) || slashMenuRef.current?.contains(target))) {
                        return;
                    }
                    closeContextMenu();
                    closeSlashMenu();
                }
            }["App.useEffect.onPointerDown"];
            const onWindowResize = {
                "App.useEffect.onWindowResize": ()=>{
                    closeContextMenu();
                    closeSlashMenu();
                }
            }["App.useEffect.onWindowResize"];
            const onWindowScroll = {
                "App.useEffect.onWindowScroll": ()=>{
                    closeContextMenu();
                    closeSlashMenu();
                }
            }["App.useEffect.onWindowScroll"];
            window.addEventListener("mousedown", onPointerDown);
            window.addEventListener("resize", onWindowResize);
            window.addEventListener("scroll", onWindowScroll, true);
            return ({
                "App.useEffect": ()=>{
                    window.removeEventListener("mousedown", onPointerDown);
                    window.removeEventListener("resize", onWindowResize);
                    window.removeEventListener("scroll", onWindowScroll, true);
                }
            })["App.useEffect"];
        }
    }["App.useEffect"], [
        closeContextMenu,
        closeSlashMenu,
        contextMenu.open,
        slashMenu.open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            let isMounted = true;
            const syncAuthFromStorage = {
                "App.useEffect.syncAuthFromStorage": ()=>{
                    const token_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthToken"])();
                    if (!isMounted) return;
                    setAuthToken(token_0);
                    setAuthReady(true);
                    if (!token_0) {
                        setLoading(false);
                    }
                }
            }["App.useEffect.syncAuthFromStorage"];
            syncAuthFromStorage();
            const authEventName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthEventName"])();
            window.addEventListener(authEventName, syncAuthFromStorage);
            window.addEventListener("storage", syncAuthFromStorage);
            return ({
                "App.useEffect": ()=>{
                    isMounted = false;
                    window.removeEventListener(authEventName, syncAuthFromStorage);
                    window.removeEventListener("storage", syncAuthFromStorage);
                }
            })["App.useEffect"];
        }
    }["App.useEffect"], []);
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[api]": async (url, init, authRequired = false)=>{
            const headers = new Headers(init?.headers ?? {});
            if (authRequired) {
                if (authToken) {
                    headers.set("Authorization", `Bearer ${authToken}`);
                }
            }
            const isFormData = typeof FormData !== "undefined" && init?.body instanceof FormData;
            if (init?.body && !isFormData && !headers.has("Content-Type")) {
                headers.set("Content-Type", "application/json");
            }
            const res = await fetch(url, {
                ...init,
                headers
            });
            const data = await res.json();
            if (!res.ok || data.ok === false) {
                throw new Error(data.message || "Request failed.");
            }
            return data;
        }
    }["App.useCallback[api]"], [
        authToken
    ]);
    const hydrateFromPost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[hydrateFromPost]": (post)=>{
            const safeContent = withEditorImageControls(sanitizeEditorHtml(post.content));
            const seo = normalizedSeo(post);
            setForm({
                id: post.id,
                title: post.title,
                slug: post.slug,
                content: safeContent,
                featuredImageUrl: post.featuredImageUrl,
                imageAltText: post.title,
                categories: post.categories,
                tagsInput: post.tags.join(", "),
                status: post.status,
                scheduledAt: toLocalDateTime(post.scheduledAt),
                authorName: post.authorName,
                metaTitle: seo.metaTitle,
                metaDescription: seo.metaDescription,
                ogImage: seo.ogImage,
                canonicalUrl: seo.canonicalUrl,
                schemaJsonLd: seo.schemaJsonLd,
                seoKeywordsInput: seo.keywords.join(", "),
                robotsNoIndex: seo.robotsNoIndex,
                robotsNoFollow: seo.robotsNoFollow
            });
            setInitialContent(safeContent); // Provide stable initial content to div
            editorHtmlRef.current = safeContent;
            const serverHash = payloadHashFromPost({
                ...post,
                content: safeContent
            });
            lastSavedHashRef.current = serverHash;
            lastCookieHashRef.current = serverHash;
            setAutoSaveNotice("Loaded");
            setSlugTouched(true);
            setEditorKey({
                "App.useCallback[hydrateFromPost]": (n)=>n + 1
            }["App.useCallback[hydrateFromPost]"]);
        }
    }["App.useCallback[hydrateFromPost]"], []);
    const resetToNew = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[resetToNew]": (authorName = settings.authorName)=>{
            const empty = emptyForm(authorName);
            setForm(empty);
            setInitialContent(empty.content); // Provide stable initial content to div
            editorHtmlRef.current = empty.content;
            lastSavedHashRef.current = "";
            lastCookieHashRef.current = "";
            setAutoSaveNotice("Idle");
            setSlugTouched(false);
            setEditorKey({
                "App.useCallback[resetToNew]": (n_0)=>n_0 + 1
            }["App.useCallback[resetToNew]"]);
        }
    }["App.useCallback[resetToNew]"], [
        settings.authorName
    ]);
    const loadData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[loadData]": async ()=>{
            setLoading(true);
            setError("");
            try {
                const [postsData, catsData, mediaData, settingsData] = await Promise.all([
                    api("/api/blog/posts?scope=all", undefined, true).catch({
                        "App.useCallback[loadData]": ()=>({
                                posts: []
                            })
                    }["App.useCallback[loadData]"]),
                    api("/api/blog/categories").catch({
                        "App.useCallback[loadData]": ()=>({
                                categories: []
                            })
                    }["App.useCallback[loadData]"]),
                    api("/api/blog/media").catch({
                        "App.useCallback[loadData]": ()=>({
                                media: []
                            })
                    }["App.useCallback[loadData]"]),
                    api("/api/blog/settings").catch({
                        "App.useCallback[loadData]": ()=>({
                                settings: fallbackSettings
                            })
                    }["App.useCallback[loadData]"])
                ]);
                const sorted = [
                    ...postsData.posts || []
                ].sort({
                    "App.useCallback[loadData].sorted": (a, b)=>new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
                }["App.useCallback[loadData].sorted"]);
                setPosts(sorted);
                setCategories(catsData.categories || []);
                setMediaItems(mediaData.media || []);
                const nextSettings = settingsData.settings || fallbackSettings;
                setSettings(nextSettings);
                if (sorted.length > 0) {
                    hydrateFromPost(sorted[0]);
                } else {
                    resetToNew(nextSettings.authorName || fallbackSettings.authorName);
                }
            } catch (e) {
                setError(e instanceof Error ? e.message : "Failed to load CMS data.");
            } finally{
                setLoading(false);
            }
        }
    }["App.useCallback[loadData]"], [
        api,
        hydrateFromPost,
        resetToNew
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (!authReady) return;
            void loadData();
        }
    }["App.useEffect"], [
        authReady,
        loadData
    ]);
    const selectedPost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "App.useMemo[selectedPost]": ()=>posts.find({
                "App.useMemo[selectedPost]": (item_1)=>item_1.id === form.id
            }["App.useMemo[selectedPost]"]) || null
    }["App.useMemo[selectedPost]"], [
        posts,
        form.id
    ]);
    const anchorPreviewLinks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "App.useMemo[anchorPreviewLinks]": ()=>anchorLinksFromHtml(form.content || "")
    }["App.useMemo[anchorPreviewLinks]"], [
        form.content
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (!form.title.trim()) return;
            const safeContent_0 = sanitizeEditorHtmlForSave(form.content || "");
            const slug = form.slug.trim() || slugify(form.title);
            const generated = autoSchemaJsonLd({
                title: form.title.trim(),
                slug,
                content: safeContent_0,
                featuredImageUrl: form.featuredImageUrl.trim(),
                categories: form.categories,
                tags: tagList(form.tagsInput),
                authorName: form.authorName.trim() || settings.authorName,
                seo: {
                    metaTitle: form.metaTitle.trim() || form.title.trim(),
                    metaDescription: form.metaDescription.trim() || textFromHtml(safeContent_0).slice(0, 180),
                    ogImage: form.ogImage.trim() || form.featuredImageUrl.trim(),
                    canonicalUrl: form.canonicalUrl.trim(),
                    keywords: tagList(form.seoKeywordsInput)
                }
            });
            const resolved = resolveSchemaJsonLdForContent({
                currentSchemaJsonLd: form.schemaJsonLd,
                generatedSchemaJsonLd: generated,
                content: safeContent_0
            });
            if (form.schemaJsonLd.trim() === resolved.trim()) {
                return;
            }
            setForm({
                "App.useEffect": (prev_10)=>{
                    const prevSafeContent = sanitizeEditorHtmlForSave(prev_10.content || "");
                    const prevGenerated = autoSchemaJsonLd({
                        title: prev_10.title.trim(),
                        slug: prev_10.slug.trim() || slugify(prev_10.title),
                        content: prevSafeContent,
                        featuredImageUrl: prev_10.featuredImageUrl.trim(),
                        categories: prev_10.categories,
                        tags: tagList(prev_10.tagsInput),
                        authorName: prev_10.authorName.trim() || settings.authorName,
                        seo: {
                            metaTitle: prev_10.metaTitle.trim() || prev_10.title.trim(),
                            metaDescription: prev_10.metaDescription.trim() || textFromHtml(prevSafeContent).slice(0, 180),
                            ogImage: prev_10.ogImage.trim() || prev_10.featuredImageUrl.trim(),
                            canonicalUrl: prev_10.canonicalUrl.trim(),
                            keywords: tagList(prev_10.seoKeywordsInput)
                        }
                    });
                    const prevResolved = resolveSchemaJsonLdForContent({
                        currentSchemaJsonLd: prev_10.schemaJsonLd,
                        generatedSchemaJsonLd: prevGenerated,
                        content: prevSafeContent
                    });
                    if (prev_10.schemaJsonLd.trim() === prevResolved.trim()) return prev_10;
                    return {
                        ...prev_10,
                        schemaJsonLd: prevResolved
                    };
                }
            }["App.useEffect"]);
        }
    }["App.useEffect"], [
        form.authorName,
        form.canonicalUrl,
        form.categories,
        form.content,
        form.featuredImageUrl,
        form.metaDescription,
        form.metaTitle,
        form.ogImage,
        form.schemaJsonLd,
        form.seoKeywordsInput,
        form.slug,
        form.tagsInput,
        form.title,
        settings.authorName
    ]);
    const buildPostPayload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[buildPostPayload]": (forAutoSave = false)=>{
            const finalContent = getCurrentEditorHtml();
            const safeContent_1 = sanitizeEditorHtmlForSave(finalContent);
            const nextStatus = forAutoSave && !form.id ? "draft" : form.status;
            const slug_0 = form.slug.trim() || slugify(form.title);
            const seoDraft = {
                metaTitle: form.metaTitle.trim() || form.title.trim(),
                metaDescription: form.metaDescription.trim() || textFromHtml(safeContent_1).slice(0, 180),
                ogImage: form.ogImage.trim() || form.featuredImageUrl.trim(),
                canonicalUrl: form.canonicalUrl.trim(),
                keywords: tagList(form.seoKeywordsInput)
            };
            const generatedSchema = autoSchemaJsonLd({
                title: form.title.trim(),
                slug: slug_0,
                content: safeContent_1,
                featuredImageUrl: form.featuredImageUrl.trim(),
                categories: form.categories,
                tags: tagList(form.tagsInput),
                authorName: form.authorName.trim() || settings.authorName,
                seo: seoDraft
            });
            const schemaJsonLd = resolveSchemaJsonLdForContent({
                currentSchemaJsonLd: form.schemaJsonLd,
                generatedSchemaJsonLd: generatedSchema,
                content: safeContent_1
            });
            return {
                title: form.title.trim(),
                slug: slug_0,
                content: safeContent_1,
                featuredImageUrl: form.featuredImageUrl.trim(),
                categories: form.categories,
                tags: tagList(form.tagsInput),
                status: nextStatus,
                scheduledAt: nextStatus === "scheduled" ? toIsoDateTime(form.scheduledAt) : null,
                authorName: form.authorName.trim() || settings.authorName,
                seo: {
                    metaTitle: seoDraft.metaTitle,
                    metaDescription: seoDraft.metaDescription,
                    ogImage: seoDraft.ogImage,
                    canonicalUrl: seoDraft.canonicalUrl,
                    schemaJsonLd,
                    keywords: seoDraft.keywords,
                    robotsNoIndex: form.robotsNoIndex,
                    robotsNoFollow: form.robotsNoFollow
                }
            };
        }
    }["App.useCallback[buildPostPayload]"], [
        form,
        getCurrentEditorHtml,
        settings.authorName
    ]);
    const loadComments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[loadComments]": async (slug_1)=>{
            if (!slug_1 || !authToken) {
                setComments([]);
                return;
            }
            setLoadingComments(true);
            try {
                const data_0 = await api(`/api/blog/comments?slug=${encodeURIComponent(slug_1)}&scope=all`, undefined, true);
                setComments(data_0.comments || []);
            } catch  {
                setComments([]);
            } finally{
                setLoadingComments(false);
            }
        }
    }["App.useCallback[loadComments]"], [
        api,
        authToken
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (!form.id || !form.slug) {
                setComments([]);
                return;
            }
            void loadComments(form.slug);
        }
    }["App.useEffect"], [
        form.id,
        form.slug,
        loadComments
    ]);
    const commentDepth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "App.useMemo[commentDepth]": ()=>{
            const byId = new Map(comments.map({
                "App.useMemo[commentDepth]": (item_2)=>[
                        item_2.id,
                        item_2
                    ]
            }["App.useMemo[commentDepth]"]));
            const depthMap = new Map();
            comments.forEach({
                "App.useMemo[commentDepth]": (item_3)=>{
                    let depth = 0;
                    let parentId = item_3.parentId;
                    while(parentId && depth < 5){
                        const parent_0 = byId.get(parentId);
                        if (!parent_0) break;
                        depth += 1;
                        parentId = parent_0.parentId;
                    }
                    depthMap.set(item_3.id, depth);
                }
            }["App.useMemo[commentDepth]"]);
            return depthMap;
        }
    }["App.useMemo[commentDepth]"], [
        comments
    ]);
    const execEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[execEditor]": (command, value)=>{
            if (!tiptapEditor) return;
            const chain = tiptapEditor.chain().focus();
            if (command === "bold") {
                chain.toggleBold().run();
                return;
            }
            if (command === "italic") {
                chain.toggleItalic().run();
                return;
            }
            if (command === "underline") {
                chain.toggleUnderline().run();
                return;
            }
            if (command === "insertUnorderedList") {
                chain.toggleBulletList().run();
                return;
            }
            if (command === "insertOrderedList") {
                chain.toggleOrderedList().run();
                return;
            }
            if (command === "createLink") {
                const href = value?.trim();
                if (!href) return;
                chain.extendMarkRange("link").setLink({
                    href
                }).run();
                return;
            }
            if (command === "insertHTML") {
                if (!value) return;
                chain.insertContent(value).run();
                return;
            }
            if (command === "formatBlock") {
                const tag = value?.replace(/[<>]/g, "").toLowerCase() || "";
                if (!tag) return;
                if (/^h[1-6]$/.test(tag)) {
                    const level = Number(tag[1]);
                    chain.toggleHeading({
                        level
                    }).run();
                    return;
                }
                if (tag === "blockquote") {
                    chain.toggleBlockquote().run();
                    return;
                }
                if (tag === "pre") {
                    chain.toggleCodeBlock().run();
                    return;
                }
                if (tag === "p") {
                    chain.setParagraph().run();
                }
            }
        }
    }["App.useCallback[execEditor]"], [
        tiptapEditor
    ]);
    const insertEditorHtml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[insertEditorHtml]": (html_0)=>{
            if (!html_0 || !tiptapEditor) return false;
            const inserted = tiptapEditor.chain().focus().insertContent(html_0).run();
            if (!inserted) {
                tiptapEditor.commands.setContent(`${tiptapEditor.getHTML()}${html_0}`);
            }
            return true;
        }
    }["App.useCallback[insertEditorHtml]"], [
        tiptapEditor
    ]);
    const applyHeading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[applyHeading]": (level_0)=>{
            execEditor("formatBlock", `<h${level_0}>`);
        }
    }["App.useCallback[applyHeading]"], [
        execEditor
    ]);
    const toolbarButtonClass = (active = false)=>`rounded-md border px-3 py-1.5 text-xs font-semibold transition ${active ? "border-emerald-400 bg-emerald-500/15 text-emerald-200" : "border-white/20 text-slate-100 hover:border-emerald-300 hover:text-emerald-300"}`;
    const preserveSelectionOnToolbarMouseDown = (event_0)=>{
        const target_0 = event_0.target;
        if (!target_0.closest("button")) return;
        event_0.preventDefault();
        tiptapEditor?.commands.focus();
    };
    const deleteMediaById = async (id)=>{
        await api(`/api/blog/media?id=${encodeURIComponent(id)}`, {
            method: "DELETE"
        }, true);
        setMediaItems((prev_11)=>prev_11.filter((item_4)=>item_4.id !== id));
    };
    const handleEditorClick = async (e_0)=>{
        closeContextMenu();
        const target_1 = e_0.target;
        if (target_1.dataset.type === "delete-image" && tiptapEditor) {
            e_0.preventDefault();
            e_0.stopPropagation();
            const wrapper = target_1.closest(".editor-image-wrapper");
            if (!wrapper) return;
            const img = wrapper.querySelector("img");
            const mediaId = img?.getAttribute("data-media-id") || mediaItems.find((m)=>m.url === img?.getAttribute("src"))?.id || null;
            const current = tiptapEditor.getHTML();
            const template = document.createElement("template");
            template.innerHTML = current;
            const src = img?.getAttribute("src");
            const candidates = Array.from(template.content.querySelectorAll(".editor-image-wrapper"));
            const match_0 = candidates.find((node_0)=>node_0.querySelector("img")?.getAttribute("src") === src) || null;
            if (match_0) {
                match_0.remove();
                tiptapEditor.commands.setContent(template.innerHTML || "<p></p>");
            }
            if (mediaId) {
                try {
                    await deleteMediaById(mediaId);
                    setNotice("Image deleted from content, MongoDB, and Vercel Blob.");
                } catch  {
                    setNotice("Image removed from content, but media delete failed.");
                }
            } else {
                setNotice("Image removed from content.");
            }
        }
    };
    const createPost = ()=>{
        setError("");
        setNotice("");
        clearAutoSaveDraft();
        lastCookieHashRef.current = "";
        resetToNew(settings.authorName || fallbackSettings.authorName);
    };
    const persistPost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[persistPost]": async ()=>{
            if (isPersistingRef.current) return;
            const payload = buildPostPayload(false);
            if (!payload.title.trim()) {
                setError("Title is required.");
                return;
            }
            if (!payload.content.trim() || payload.content === "<p><br></p>") {
                setError("Content is required.");
                return;
            }
            if (payload.status === "scheduled" && !payload.scheduledAt) {
                setError("Set schedule date/time for scheduled posts.");
                return;
            }
            if (payload.seo.schemaJsonLd) {
                try {
                    JSON.parse(payload.seo.schemaJsonLd);
                } catch  {
                    setError("Schema JSON-LD must be valid JSON.");
                    return;
                }
            }
            isPersistingRef.current = true;
            setSavingPost(true);
            setError("");
            setNotice("");
            try {
                const endpoint = form.id ? `/api/blog/posts/${form.id}` : "/api/blog/posts";
                const method = form.id ? "PATCH" : "POST";
                const data_1 = await api(endpoint, {
                    method,
                    body: JSON.stringify(payload)
                }, true);
                if (!data_1.post) throw new Error("No post returned by API.");
                setPosts({
                    "App.useCallback[persistPost]": (prev_12)=>{
                        const next_0 = prev_12.filter({
                            "App.useCallback[persistPost].next_0": (p)=>p.id !== data_1.post.id
                        }["App.useCallback[persistPost].next_0"]);
                        next_0.unshift(data_1.post);
                        return next_0.sort({
                            "App.useCallback[persistPost]": (a_0, b_0)=>new Date(b_0.updatedAt).getTime() - new Date(a_0.updatedAt).getTime()
                        }["App.useCallback[persistPost]"]);
                    }
                }["App.useCallback[persistPost]"]);
                hydrateFromPost(data_1.post);
                lastSavedHashRef.current = JSON.stringify(payload);
                lastCookieHashRef.current = lastSavedHashRef.current;
                clearAutoSaveDraft();
                setNotice(form.id ? "Post updated." : "Post created.");
                setAutoSaveNotice("Saved to server");
            } catch (e_1) {
                const message = e_1 instanceof Error ? e_1.message : "Failed to save post.";
                setError(message);
            } finally{
                isPersistingRef.current = false;
                setSavingPost(false);
            }
        }
    }["App.useCallback[persistPost]"], [
        api,
        buildPostPayload,
        form.id,
        hydrateFromPost
    ]);
    const savePost = async (event_1)=>{
        event_1.preventDefault();
        await persistPost();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            persistPostShortcutRef.current = persistPost;
        }
    }["App.useEffect"], [
        persistPost
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (!authToken || loading || hasRestoredDraftRef.current) return;
            hasRestoredDraftRef.current = true;
            const draft = readAutoSaveDraft();
            if (!draft?.form) return;
            const restoredContent = withEditorImageControls(sanitizeEditorHtml(draft.form.content || ""));
            const restored = {
                ...emptyForm(settings.authorName || fallbackSettings.authorName),
                ...draft.form,
                content: restoredContent
            };
            setForm(restored);
            setInitialContent(restoredContent);
            editorHtmlRef.current = restoredContent;
            setSlugTouched(Boolean(restored.slug));
            setEditorKey({
                "App.useEffect": (n_1)=>n_1 + 1
            }["App.useEffect"]);
            lastCookieHashRef.current = draft.hash || JSON.stringify(restored);
            setAutoSaveNotice("Recovered from local storage");
            setNotice("Recovered unsaved draft from local storage autosave.");
        }
    }["App.useEffect"], [
        authToken,
        loading,
        settings.authorName
    ]);
    // Keep formRef in sync with form state to avoid effect dependency issues
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            formRef.current = form;
        }
    }["App.useEffect"], [
        form
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (!authToken || loading) return;
            const content = tiptapEditor?.getHTML() || editorHtmlRef.current || formRef.current.content;
            const plain = sanitizeEditorHtmlForSave(content).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
            const hasMeaningfulContent = formRef.current.title.trim().length > 0 || plain.length > 0 && plain !== "Start writing your post...";
            if (!hasMeaningfulContent) {
                setAutoSaveNotice("Idle");
                return;
            }
            const hash = JSON.stringify({
                ...formRef.current,
                content
            });
            if (hash !== lastCookieHashRef.current && !isPersistingRef.current) {
                setAutoSaveNotice("Unsaved changes");
            }
        }
    }["App.useEffect"], [
        authToken,
        loading,
        tiptapEditor
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (!authToken || loading) return;
            const interval = window.setInterval({
                "App.useEffect.interval": ()=>{
                    const content_0 = tiptapEditor?.getHTML() || editorHtmlRef.current || formRef.current.content;
                    const plain_0 = sanitizeEditorHtmlForSave(content_0).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
                    const hasMeaningfulContent_0 = formRef.current.title.trim().length > 0 || plain_0.length > 0 && plain_0 !== "Start writing your post...";
                    if (!hasMeaningfulContent_0) {
                        setAutoSaveNotice("Idle");
                        return;
                    }
                    const draftForm = {
                        ...formRef.current,
                        content: content_0
                    };
                    const hash_0 = JSON.stringify(draftForm);
                    if (hash_0 === lastCookieHashRef.current) {
                        setAutoSaveNotice("Saved in local storage");
                        return;
                    }
                    const result = writeAutoSaveDraft({
                        savedAt: new Date().toISOString(),
                        hash: hash_0,
                        form: draftForm
                    });
                    if (!result.ok) {
                        setAutoSaveNotice(result.message);
                        return;
                    }
                    lastCookieHashRef.current = hash_0;
                    setAutoSaveNotice("Saved in local storage");
                }
            }["App.useEffect.interval"], 5000);
            return ({
                "App.useEffect": ()=>window.clearInterval(interval)
            })["App.useEffect"];
        }
    }["App.useEffect"], [
        authToken,
        loading,
        tiptapEditor
    ]);
    const deletePost = async ()=>{
        if (!form.id) return;
        if (!window.confirm("Delete this post permanently?")) return;
        setDeletingPost(true);
        setError("");
        setNotice("");
        try {
            await api(`/api/blog/posts/${form.id}`, {
                method: "DELETE"
            }, true);
            setPosts((prev_13)=>prev_13.filter((p_0)=>p_0.id !== form.id));
            clearAutoSaveDraft();
            lastCookieHashRef.current = "";
            resetToNew(settings.authorName || fallbackSettings.authorName);
            setNotice("Post deleted.");
        } catch (e_2) {
            setError(e_2 instanceof Error ? e_2.message : "Failed to delete post.");
        } finally{
            setDeletingPost(false);
        }
    };
    const updateCommentStatus = async (id_0, status, moderationReason = "")=>{
        if (!form.slug) return;
        setCommentActionId(id_0);
        setError("");
        try {
            await api(`/api/blog/comments/${id_0}`, {
                method: "PATCH",
                body: JSON.stringify({
                    status,
                    moderationReason
                })
            }, true);
            await loadComments(form.slug);
            setNotice(`Comment marked as ${status}.`);
        } catch (e_3) {
            setError(e_3 instanceof Error ? e_3.message : "Failed to update comment.");
        } finally{
            setCommentActionId("");
        }
    };
    const removeComment = async (id_1)=>{
        if (!form.slug) return;
        if (!window.confirm("Delete this comment and its replies?")) return;
        setCommentActionId(id_1);
        setError("");
        try {
            await api(`/api/blog/comments/${id_1}`, {
                method: "DELETE"
            }, true);
            await loadComments(form.slug);
            setNotice("Comment deleted.");
        } catch (e_4) {
            setError(e_4 instanceof Error ? e_4.message : "Failed to delete comment.");
        } finally{
            setCommentActionId("");
        }
    };
    const saveSettings = async ()=>{
        setSavingSettings(true);
        setError("");
        setNotice("");
        try {
            const data_2 = await api("/api/blog/settings", {
                method: "PATCH",
                body: JSON.stringify(settings)
            }, true);
            const next_1 = data_2.settings || settings;
            setSettings(next_1);
            setForm((prev_14)=>({
                    ...prev_14,
                    authorName: prev_14.authorName || next_1.authorName
                }));
            setNotice("Settings saved.");
        } catch (e_5) {
            setError(e_5 instanceof Error ? e_5.message : "Failed to save settings.");
        } finally{
            setSavingSettings(false);
        }
    };
    const addCategory = async ()=>{
        const name = newCategoryName.trim();
        if (!name) return;
        setSavingCategory(true);
        setError("");
        setNotice("");
        try {
            const data_3 = await api("/api/blog/categories", {
                method: "POST",
                body: JSON.stringify({
                    name
                })
            }, true);
            setCategories(data_3.categories || []);
            setNewCategoryName("");
            setNotice("Category saved.");
        } catch (e_6) {
            setError(e_6 instanceof Error ? e_6.message : "Failed to create category.");
        } finally{
            setSavingCategory(false);
        }
    };
    const removeCategory = async (slug_2)=>{
        setError("");
        setNotice("");
        try {
            const data_4 = await api(`/api/blog/categories?slug=${encodeURIComponent(slug_2)}`, {
                method: "DELETE"
            }, true);
            setCategories(data_4.categories || []);
            const keep = new Set((data_4.categories || []).map((c)=>c.name));
            setForm((prev_15)=>({
                    ...prev_15,
                    categories: prev_15.categories.filter((name_0)=>keep.has(name_0))
                }));
            setNotice("Category deleted.");
        } catch (e_7) {
            setError(e_7 instanceof Error ? e_7.message : "Failed to delete category.");
        }
    };
    const toggleCategory = (name_1)=>{
        setForm((prev_16)=>({
                ...prev_16,
                categories: prev_16.categories.includes(name_1) ? prev_16.categories.filter((x_0)=>x_0 !== name_1) : [
                    ...prev_16.categories,
                    name_1
                ]
            }));
    };
    const uploadMediaFile = async (file)=>{
        const optimized = await optimizeImage(file);
        const body = new FormData();
        body.append("file", optimized.file);
        body.append("width", String(optimized.width));
        body.append("height", String(optimized.height));
        const data_5 = await api("/api/blog/media", {
            method: "POST",
            body
        }, true);
        if (!data_5.media) throw new Error("Upload did not return media item.");
        return {
            media: data_5.media,
            originalBytes: file.size
        };
    };
    const uploadMedia = async (file_0)=>{
        setUploadingMedia(true);
        setError("");
        setNotice("");
        try {
            const uploaded = await uploadMediaFile(file_0);
            setMediaItems((prev_17)=>[
                    uploaded.media,
                    ...prev_17
                ]);
            setNotice(`Image uploaded (${bytes(uploaded.originalBytes)} -> ${bytes(uploaded.media.size)}).`);
        } catch (e_8) {
            setError(e_8 instanceof Error ? e_8.message : "Failed to upload image.");
        } finally{
            setUploadingMedia(false);
        }
    };
    const addEmbed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[addEmbed]": ()=>{
            const html_1 = embedHtml(embedUrl);
            if (!html_1) {
                setError("Please enter a valid embed URL.");
                return;
            }
            setError("");
            insertEditorHtml(html_1);
            setEmbedUrl("");
        }
    }["App.useCallback[addEmbed]"], [
        embedUrl,
        insertEditorHtml
    ]);
    const insertFaqBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[insertFaqBlock]": (questionInput, answerInput)=>{
            const rawQuestion = questionInput?.trim() || "FAQ Question";
            const question = /\?\s*$/.test(rawQuestion) ? rawQuestion : `${rawQuestion}?`;
            const answer = answerInput?.trim() || "FAQ answer goes here.";
            setError("");
            const inserted_0 = insertEditorHtml(faqHtml(question, answer));
            if (!inserted_0) {
                setError("Could not insert FAQ block. Click inside editor and try again.");
                return false;
            }
            return true;
        }
    }["App.useCallback[insertFaqBlock]"], [
        insertEditorHtml
    ]);
    const insertTableBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[insertTableBlock]": ()=>{
            setError("");
            if (!tiptapEditor) return;
            const rows = Math.min(10, Math.max(1, tableRows));
            const cols = Math.min(8, Math.max(1, tableCols));
            const inserted_1 = tiptapEditor.chain().focus().insertTable({
                rows,
                cols,
                withHeaderRow: true
            }).run();
            if (!inserted_1) {
                insertEditorHtml(tableHtml(rows, cols));
            }
        }
    }["App.useCallback[insertTableBlock]"], [
        insertEditorHtml,
        tableCols,
        tableRows,
        tiptapEditor
    ]);
    const insertNewBlogSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[insertNewBlogSection]": ()=>{
            if (!tiptapEditor) return false;
            setError("");
            closeContextMenu();
            closeSlashMenu();
            const inserted_2 = tiptapEditor.chain().focus().insertContent(`<h2>${escapeHtml(NEW_BLOG_SECTION_PROMPT)}</h2><p></p>`).run();
            if (!inserted_2) {
                setError("Could not insert a new blog section. Click inside editor and try again.");
                return false;
            }
            const setPromptSelection = {
                "App.useCallback[insertNewBlogSection].setPromptSelection": ()=>{
                    if (!tiptapEditor) return;
                    const marker = NEW_BLOG_SECTION_PROMPT.trim().toLowerCase();
                    let from_1 = 0;
                    let to_1 = 0;
                    tiptapEditor.state.doc.descendants({
                        "App.useCallback[insertNewBlogSection].setPromptSelection": (node_1, pos)=>{
                            if (node_1.type.name !== "heading") return;
                            const text = node_1.textContent.trim().toLowerCase();
                            if (text !== marker) return;
                            from_1 = pos + 1;
                            to_1 = pos + node_1.nodeSize - 1;
                        }
                    }["App.useCallback[insertNewBlogSection].setPromptSelection"]);
                    if (from_1 < to_1) {
                        tiptapEditor.chain().focus().setTextSelection({
                            from: from_1,
                            to: to_1
                        }).run();
                    }
                }
            }["App.useCallback[insertNewBlogSection].setPromptSelection"];
            if ("TURBOPACK compile-time truthy", 1) {
                window.requestAnimationFrame(setPromptSelection);
            } else //TURBOPACK unreachable
            ;
            setNotice("New blog section inserted. Start typing to replace prompt text.");
            return true;
        }
    }["App.useCallback[insertNewBlogSection]"], [
        closeContextMenu,
        closeSlashMenu,
        tiptapEditor
    ]);
    const getImageMetaBySrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[getImageMetaBySrc]": (targetSrc)=>{
            if (!tiptapEditor || !targetSrc.trim()) return null;
            const template_0 = document.createElement("template");
            template_0.innerHTML = tiptapEditor.getHTML();
            const images = Array.from(template_0.content.querySelectorAll("img"));
            const node_2 = images.find({
                "App.useCallback[getImageMetaBySrc]": (img_0)=>(img_0.getAttribute("src") || "").trim() === targetSrc.trim()
            }["App.useCallback[getImageMetaBySrc]"]) || null;
            if (!node_2) return null;
            return {
                src: (node_2.getAttribute("src") || "").trim(),
                alt: (node_2.getAttribute("alt") || "").trim(),
                mediaId: (node_2.getAttribute("data-media-id") || "").trim() || null,
                caption: (node_2.getAttribute("data-caption") || "").trim(),
                align: imageAlignFromNode(node_2),
                widthPercent: imageWidthFromStyle(node_2.getAttribute("style"))
            };
        }
    }["App.useCallback[getImageMetaBySrc]"], [
        tiptapEditor
    ]);
    const updateImageBySrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[updateImageBySrc]": (targetSrc_0, updater)=>{
            if (!tiptapEditor || !targetSrc_0.trim()) return false;
            const template_1 = document.createElement("template");
            template_1.innerHTML = tiptapEditor.getHTML();
            const images_0 = Array.from(template_1.content.querySelectorAll("img"));
            const node_3 = images_0.find({
                "App.useCallback[updateImageBySrc]": (img_1)=>(img_1.getAttribute("src") || "").trim() === targetSrc_0.trim()
            }["App.useCallback[updateImageBySrc]"]) || null;
            if (!node_3) return false;
            updater(node_3);
            tiptapEditor.commands.setContent(template_1.innerHTML || "<p></p>");
            return true;
        }
    }["App.useCallback[updateImageBySrc]"], [
        tiptapEditor
    ]);
    const applyImageLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[applyImageLayout]": (node_4, align, widthPercent)=>{
            const safeAlign = normalizeImageAlign(align);
            const safeWidth = clampImageWidth(widthPercent);
            node_4.setAttribute("data-align", safeAlign);
            node_4.setAttribute("style", imageStyleFromLayout(safeWidth, safeAlign));
        }
    }["App.useCallback[applyImageLayout]"], []);
    const insertImageNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[insertImageNode]": (url_0, altText, options = {})=>{
            if (!url_0.trim()) return false;
            const align_0 = normalizeImageAlign(options.align || "center");
            const widthPercent_0 = clampImageWidth(options.widthPercent ?? 100);
            return insertEditorHtml(imageHtml(url_0.trim(), altText.trim() || "blog image", options.mediaId || null, options.caption || "", align_0, widthPercent_0));
        }
    }["App.useCallback[insertImageNode]"], [
        insertEditorHtml
    ]);
    const generateSchemaFromCurrentContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[generateSchemaFromCurrentContent]": ()=>{
            const safeContent_2 = sanitizeEditorHtmlForSave(getCurrentEditorHtml());
            const slug_3 = form.slug.trim() || slugify(form.title);
            const generated_0 = autoSchemaJsonLd({
                title: form.title.trim(),
                slug: slug_3,
                content: safeContent_2,
                featuredImageUrl: form.featuredImageUrl.trim(),
                categories: form.categories,
                tags: tagList(form.tagsInput),
                authorName: form.authorName.trim() || settings.authorName,
                seo: {
                    metaTitle: form.metaTitle.trim() || form.title.trim(),
                    metaDescription: form.metaDescription.trim() || textFromHtml(safeContent_2).slice(0, 200),
                    ogImage: form.ogImage.trim() || form.featuredImageUrl.trim(),
                    canonicalUrl: form.canonicalUrl.trim(),
                    keywords: tagList(form.seoKeywordsInput)
                }
            });
            const resolved_0 = resolveSchemaJsonLdForContent({
                currentSchemaJsonLd: form.schemaJsonLd,
                generatedSchemaJsonLd: generated_0,
                content: safeContent_2
            });
            setForm({
                "App.useCallback[generateSchemaFromCurrentContent]": (prev_18)=>({
                        ...prev_18,
                        schemaJsonLd: resolved_0,
                        metaDescription: prev_18.metaDescription.trim() || textFromHtml(safeContent_2).slice(0, 180)
                    })
            }["App.useCallback[generateSchemaFromCurrentContent]"]);
            setNotice("Schema JSON-LD auto-generated.");
        }
    }["App.useCallback[generateSchemaFromCurrentContent]"], [
        form.authorName,
        form.canonicalUrl,
        form.categories,
        form.featuredImageUrl,
        form.metaDescription,
        form.metaTitle,
        form.ogImage,
        form.schemaJsonLd,
        form.seoKeywordsInput,
        form.slug,
        form.tagsInput,
        form.title,
        getCurrentEditorHtml,
        settings.authorName
    ]);
    const replaceImageInEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[replaceImageInEditor]": (targetSrc_1, nextSrc, altText_0, options_0 = {})=>{
            if (!targetSrc_1.trim() || !nextSrc.trim()) return false;
            const current_0 = getImageMetaBySrc(targetSrc_1);
            const align_1 = normalizeImageAlign(options_0.align || current_0?.align || "center");
            const widthPercent_1 = clampImageWidth(options_0.widthPercent ?? current_0?.widthPercent ?? 100);
            return updateImageBySrc(targetSrc_1, {
                "App.useCallback[replaceImageInEditor]": (node_5)=>{
                    node_5.setAttribute("src", nextSrc.trim());
                    node_5.setAttribute("alt", altText_0.trim() || "blog image");
                    node_5.setAttribute("title", altText_0.trim() || "blog image");
                    const caption = (options_0.caption ?? current_0?.caption ?? "").trim();
                    if (caption) {
                        node_5.setAttribute("data-caption", caption);
                    } else {
                        node_5.removeAttribute("data-caption");
                    }
                    const mediaId_0 = (options_0.mediaId ?? current_0?.mediaId ?? "").trim();
                    if (mediaId_0) {
                        node_5.setAttribute("data-media-id", mediaId_0);
                    } else {
                        node_5.removeAttribute("data-media-id");
                    }
                    applyImageLayout(node_5, align_1, widthPercent_1);
                }
            }["App.useCallback[replaceImageInEditor]"]);
        }
    }["App.useCallback[replaceImageInEditor]"], [
        applyImageLayout,
        getImageMetaBySrc,
        updateImageBySrc
    ]);
    const resizeImageInEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[resizeImageInEditor]": (targetSrc_2)=>{
            if (!targetSrc_2.trim()) return false;
            const current_1 = getImageMetaBySrc(targetSrc_2);
            const currentWidth = current_1?.widthPercent ?? 100;
            const align_2 = current_1?.align || "center";
            const nextWidth = currentWidth >= 100 ? 80 : currentWidth >= 80 ? 60 : 100;
            const resized = updateImageBySrc(targetSrc_2, {
                "App.useCallback[resizeImageInEditor].resized": (node_6)=>{
                    applyImageLayout(node_6, align_2, nextWidth);
                }
            }["App.useCallback[resizeImageInEditor].resized"]);
            if (!resized) return false;
            setNotice(`Image resized to ${nextWidth}% width.`);
            return true;
        }
    }["App.useCallback[resizeImageInEditor]"], [
        applyImageLayout,
        getImageMetaBySrc,
        updateImageBySrc
    ]);
    const alignImageInEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[alignImageInEditor]": (targetSrc_3, align_3)=>{
            if (!targetSrc_3.trim()) return false;
            const current_2 = getImageMetaBySrc(targetSrc_3);
            const widthPercent_2 = current_2?.widthPercent ?? 100;
            const changed = updateImageBySrc(targetSrc_3, {
                "App.useCallback[alignImageInEditor].changed": (node_7)=>{
                    applyImageLayout(node_7, align_3, widthPercent_2);
                }
            }["App.useCallback[alignImageInEditor].changed"]);
            if (!changed) return false;
            setNotice(`Image aligned ${align_3}.`);
            return true;
        }
    }["App.useCallback[alignImageInEditor]"], [
        applyImageLayout,
        getImageMetaBySrc,
        updateImageBySrc
    ]);
    const setImageCaptionInEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[setImageCaptionInEditor]": (targetSrc_4, caption_0)=>{
            if (!targetSrc_4.trim()) return false;
            const changed_0 = updateImageBySrc(targetSrc_4, {
                "App.useCallback[setImageCaptionInEditor].changed_0": (node_8)=>{
                    const safeCaption = caption_0.trim();
                    if (safeCaption) {
                        node_8.setAttribute("data-caption", safeCaption);
                    } else {
                        node_8.removeAttribute("data-caption");
                    }
                }
            }["App.useCallback[setImageCaptionInEditor].changed_0"]);
            if (!changed_0) return false;
            setNotice(caption_0.trim() ? "Image caption updated." : "Image caption removed.");
            return true;
        }
    }["App.useCallback[setImageCaptionInEditor]"], [
        updateImageBySrc
    ]);
    const setTextAlignInEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[setTextAlignInEditor]": (align_4)=>{
            if (!tiptapEditor) return false;
            const currentType = tiptapEditor.state.selection.$from.parent.type.name;
            const alignableTypeSet = new Set([
                "paragraph",
                "heading",
                "blockquote",
                "listItem",
                "tableCell",
                "tableHeader",
                "codeBlock"
            ]);
            let changed_1 = false;
            if (alignableTypeSet.has(currentType)) {
                changed_1 = tiptapEditor.chain().focus().updateAttributes(currentType, {
                    textAlign: align_4
                }).run();
            }
            if (!changed_1) {
                for (const type of alignableTypeSet){
                    const ok = tiptapEditor.chain().focus().updateAttributes(type, {
                        textAlign: align_4
                    }).run();
                    if (ok) {
                        changed_1 = true;
                        break;
                    }
                }
            }
            if (!changed_1) return false;
            setNotice(`Text aligned ${align_4}.`);
            return true;
        }
    }["App.useCallback[setTextAlignInEditor]"], [
        tiptapEditor
    ]);
    const getActiveImageSource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[getActiveImageSource]": ()=>{
            if (contextImageSrc?.trim()) return contextImageSrc.trim();
            if (!tiptapEditor) return "";
            const { from: from_2, to: to_2 } = tiptapEditor.state.selection;
            let srcFromDoc = "";
            tiptapEditor.state.doc.nodesBetween(from_2, to_2, {
                "App.useCallback[getActiveImageSource]": (node_9)=>{
                    if (srcFromDoc || node_9.type.name !== "image") return;
                    const src_0 = String(node_9.attrs?.src || "").trim();
                    if (src_0) {
                        srcFromDoc = src_0;
                    }
                }
            }["App.useCallback[getActiveImageSource]"]);
            if (srcFromDoc) return srcFromDoc;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const selection_2 = window.getSelection();
            const anchorNode = selection_2?.anchorNode;
            const anchorElement = anchorNode instanceof Element ? anchorNode : anchorNode?.parentElement;
            const image = anchorElement?.closest("img");
            return (image?.getAttribute("src") || "").trim();
        }
    }["App.useCallback[getActiveImageSource]"], [
        contextImageSrc,
        tiptapEditor
    ]);
    const openImageModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[openImageModal]": ()=>{
            closeContextMenu();
            closeSlashMenu();
            setError("");
            setImageModalUrl("");
            setImageModalAlt(form.imageAltText || form.title || "blog image");
            setImageModalCaption("");
            setImageModalAlign("center");
            // setImageModalWidth(100);
            setImageModalFile(null);
            setReplaceImageSrc(null);
            setIsImageModalOpen(true);
        }
    }["App.useCallback[openImageModal]"], [
        closeContextMenu,
        closeSlashMenu,
        form.imageAltText,
        form.title
    ]);
    const openFaqModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[openFaqModal]": ()=>{
            closeContextMenu();
            closeSlashMenu();
            setError("");
            setFaqQuestion("");
            setFaqAnswer("");
            setIsFaqModalOpen(true);
        }
    }["App.useCallback[openFaqModal]"], [
        closeContextMenu,
        closeSlashMenu
    ]);
    const openLinkModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[openLinkModal]": ()=>{
            if (!tiptapEditor) return;
            closeContextMenu();
            closeSlashMenu();
            setError("");
            const { from: from_3, to: to_3 } = tiptapEditor.state.selection;
            linkSelectionRef.current = {
                from: from_3,
                to: to_3
            };
            const linkAttrs = tiptapEditor.getAttributes("link") || {};
            const activeHref = linkAttrs.href || "";
            const activeRel = String(linkAttrs.rel || "");
            setLinkModalUrl(String(activeHref));
            setLinkRelMode(/\bnofollow\b/i.test(activeRel) ? "nofollow" : "dofollow");
            setIsLinkModalOpen(true);
        }
    }["App.useCallback[openLinkModal]"], [
        closeContextMenu,
        closeSlashMenu,
        tiptapEditor
    ]);
    const closeImageModal = ()=>{
        if (insertingImage) return;
        setIsImageModalOpen(false);
        setImageModalUrl("");
        setImageModalCaption("");
        setImageModalAlign("center");
        setImageModalFile(null);
        setReplaceImageSrc(null);
    };
    const closeLinkModal = ()=>{
        if (insertingLink) return;
        setIsLinkModalOpen(false);
        setLinkModalUrl("");
        setLinkRelMode("dofollow");
    };
    const closeFaqModal = ()=>{
        setIsFaqModalOpen(false);
    };
    const insertFaqFromModal = ()=>{
        const question_0 = faqQuestion.trim();
        const answer_0 = faqAnswer.trim();
        if (!question_0 || !answer_0) {
            setError("FAQ question and answer are required.");
            return;
        }
        const normalizedQuestion = /\?\s*$/.test(question_0) ? question_0 : `${question_0}?`;
        const inserted_3 = insertFaqBlock(normalizedQuestion, answer_0);
        if (!inserted_3) return;
        setFaqQuestion("");
        setFaqAnswer("");
        setIsFaqModalOpen(false);
        setNotice("FAQ inserted.");
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        window.requestAnimationFrame(()=>{
            window.requestAnimationFrame(()=>{
                generateSchemaFromCurrentContent();
            });
        });
    };
    const insertLinkFromModal = ()=>{
        if (!tiptapEditor) return;
        const raw = linkModalUrl.trim();
        if (!raw) {
            setError("Please enter a valid link URL.");
            return;
        }
        setError("");
        setInsertingLink(true);
        try {
            const href = /^(https?:\/\/|mailto:|tel:)/i.test(raw) ? raw : `https://${raw}`;
            const rel = linkRelMode === "nofollow" ? "nofollow noopener noreferrer" : "noopener noreferrer";
            const selection = linkSelectionRef.current ?? tiptapEditor.state.selection;
            const hasSelection = selection.from !== selection.to;
            const selectedText = hasSelection ? tiptapEditor.state.doc.textBetween(selection.from, selection.to, " ").replace(/\s+/g, " ").trim() : "";
            const anchorText = selectedText || href;
            if (hasSelection) {
                tiptapEditor.chain().focus().setTextSelection(selection).extendMarkRange("link").setLink({
                    href,
                    target: "_blank",
                    rel
                }).run();
            } else {
                tiptapEditor.chain().focus().insertContent(`<a href="${escapeHtml(href)}" target="_blank" rel="${escapeHtml(rel)}">${escapeHtml(href)}</a>`).run();
            }
            setNotice(`Anchor saved: "${anchorText}" -> ${href}`);
            closeLinkModal();
        } finally{
            setInsertingLink(false);
        }
    };
    const insertImageFromModal = async ()=>{
        setError("");
        setNotice("");
        setInsertingImage(true);
        try {
            let finalUrl = imageModalUrl.trim();
            let finalMediaId = null;
            const caption_1 = imageModalCaption.trim();
            const align_5 = normalizeImageAlign(imageModalAlign);
            // const widthPercent = clampImageWidth(imageModalWidth);
            const altText_1 = (imageModalAlt.trim() || form.imageAltText || form.title || "blog image").trim();
            if (imageModalFile) {
                const uploaded_0 = await uploadMediaFile(imageModalFile);
                setMediaItems((prev_19)=>[
                        uploaded_0.media,
                        ...prev_19
                    ]);
                setNotice(`Image uploaded (${bytes(uploaded_0.originalBytes)} -> ${bytes(uploaded_0.media.size)}) and inserted.`);
                finalUrl = uploaded_0.media.url;
                finalMediaId = uploaded_0.media.id;
            }
            if (!finalUrl) {
                setError("Add image URL or upload an image.");
                return;
            }
            if (!finalMediaId) {
                finalMediaId = mediaItems.find((item_5)=>item_5.url === finalUrl)?.id || null;
            }
            if (replaceImageSrc) {
                const replaced = replaceImageInEditor(replaceImageSrc, finalUrl, altText_1, {
                    mediaId: finalMediaId,
                    caption: caption_1,
                    align: align_5
                });
                if (!replaced) {
                    const insertedNode = insertImageNode(finalUrl, altText_1, {
                        mediaId: finalMediaId,
                        caption: caption_1,
                        align: align_5
                    });
                    if (!insertedNode) {
                        insertEditorHtml(imageHtml(finalUrl, altText_1, finalMediaId, caption_1, align_5));
                    }
                }
            } else {
                const insertedNode_0 = insertImageNode(finalUrl, altText_1, {
                    mediaId: finalMediaId,
                    caption: caption_1,
                    align: align_5
                });
                if (!insertedNode_0) {
                    insertEditorHtml(imageHtml(finalUrl, altText_1, finalMediaId, caption_1, align_5));
                }
            }
            setForm((prev_20)=>({
                    ...prev_20,
                    imageAltText: prev_20.imageAltText || altText_1
                }));
            closeImageModal();
        } catch (e_9) {
            setError(e_9 instanceof Error ? e_9.message : "Failed to insert image.");
        } finally{
            setInsertingImage(false);
        }
    };
    const executeEditorCommand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[executeEditorCommand]": (commandId, source = "toolbar", trigger)=>{
            setError("");
            updatePipeline([
                `Command source: ${source}.`,
                trigger ? `Trigger: ${trigger}.` : "Trigger: direct action.",
                `Command detected: ${commandId}.`,
                "Running editor command.",
                "Editor and UI state synchronizing."
            ]);
            if (commandId === "paragraph") {
                execEditor("formatBlock", "<p>");
                return;
            }
            if (commandId === "h1") {
                applyHeading(1);
                return;
            }
            if (commandId === "h2") {
                applyHeading(2);
                return;
            }
            if (commandId === "h3") {
                applyHeading(3);
                return;
            }
            if (commandId === "faq") {
                openFaqModal();
                return;
            }
            if (commandId === "table") {
                insertTableBlock();
                return;
            }
            if (commandId === "bold") {
                execEditor("bold");
                return;
            }
            if (commandId === "italic") {
                execEditor("italic");
                return;
            }
            if (commandId === "underline") {
                execEditor("underline");
                return;
            }
            if (commandId === "bulletList") {
                execEditor("insertUnorderedList");
                return;
            }
            if (commandId === "orderedList") {
                execEditor("insertOrderedList");
                return;
            }
            if (commandId === "blockquote") {
                execEditor("formatBlock", "<blockquote>");
                return;
            }
            if (commandId === "codeBlock") {
                execEditor("formatBlock", "<pre>");
                return;
            }
            if (commandId === "link") {
                openLinkModal();
                return;
            }
            if (commandId === "alignTextLeft") {
                const changed_2 = setTextAlignInEditor("left");
                if (!changed_2) {
                    setError("Could not align selected text block.");
                }
                return;
            }
            if (commandId === "alignTextCenter") {
                const changed_3 = setTextAlignInEditor("center");
                if (!changed_3) {
                    setError("Could not align selected text block.");
                }
                return;
            }
            if (commandId === "alignTextRight") {
                const changed_4 = setTextAlignInEditor("right");
                if (!changed_4) {
                    setError("Could not align selected text block.");
                }
                return;
            }
            if (commandId === "image") {
                const activeImageSrc = getActiveImageSource();
                if (activeImageSrc) {
                    const current_3 = getImageMetaBySrc(activeImageSrc);
                    setReplaceImageSrc(activeImageSrc);
                    setError("");
                    setImageModalUrl("");
                    setImageModalAlt(current_3?.alt || form.imageAltText || form.title || "blog image");
                    setImageModalCaption(current_3?.caption || "");
                    setImageModalAlign(current_3?.align || "center");
                    // setImageModalWidth(current?.widthPercent || 100);
                    setImageModalFile(null);
                    setIsImageModalOpen(true);
                    return;
                }
                openImageModal();
                return;
            }
            if (commandId === "insertBlock") {
                insertEditorHtml("<h2>New Section</h2><p>Start writing...</p>");
                return;
            }
            if (commandId === "resizeImage") {
                const activeImageSrc_0 = getActiveImageSource();
                if (!activeImageSrc_0) {
                    setError("Right-click on an image to resize it.");
                    return;
                }
                const resized_0 = resizeImageInEditor(activeImageSrc_0);
                if (!resized_0) {
                    setError("Could not resize selected image.");
                }
                return;
            }
            if (commandId === "captionImage") {
                const activeImageSrc_1 = getActiveImageSource();
                if (!activeImageSrc_1) {
                    setError("Right-click on an image to edit caption.");
                    return;
                }
                const currentCaption = getImageMetaBySrc(activeImageSrc_1)?.caption || "";
                const caption_2 = window.prompt("Image caption", currentCaption);
                if (caption_2 === null) return;
                const changed_5 = setImageCaptionInEditor(activeImageSrc_1, caption_2);
                if (!changed_5) {
                    setError("Could not update image caption.");
                }
                return;
            }
            if (commandId === "alignImageLeft") {
                const activeImageSrc_2 = getActiveImageSource();
                if (!activeImageSrc_2) {
                    setError("Right-click on an image to align it.");
                    return;
                }
                const changed_6 = alignImageInEditor(activeImageSrc_2, "left");
                if (!changed_6) {
                    setError("Could not align selected image.");
                }
                return;
            }
            if (commandId === "alignImageCenter") {
                const activeImageSrc_3 = getActiveImageSource();
                if (!activeImageSrc_3) {
                    setError("Right-click on an image to align it.");
                    return;
                }
                const changed_7 = alignImageInEditor(activeImageSrc_3, "center");
                if (!changed_7) {
                    setError("Could not align selected image.");
                }
                return;
            }
            if (commandId === "alignImageRight") {
                const activeImageSrc_4 = getActiveImageSource();
                if (!activeImageSrc_4) {
                    setError("Right-click on an image to align it.");
                    return;
                }
                const changed_8 = alignImageInEditor(activeImageSrc_4, "right");
                if (!changed_8) {
                    setError("Could not align selected image.");
                }
                return;
            }
        }
    }["App.useCallback[executeEditorCommand]"], [
        alignImageInEditor,
        applyHeading,
        execEditor,
        form.imageAltText,
        form.title,
        getActiveImageSource,
        getImageMetaBySrc,
        insertEditorHtml,
        insertTableBlock,
        openFaqModal,
        openImageModal,
        openLinkModal,
        resizeImageInEditor,
        setTextAlignInEditor,
        setImageCaptionInEditor,
        updatePipeline
    ]);
    const topToolbarActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "App.useMemo[topToolbarActions]": ()=>[
                {
                    key: "paragraph",
                    label: "Paragraph",
                    active: interactionState.active.paragraph,
                    run: {
                        "App.useMemo[topToolbarActions]": ()=>executeEditorCommand("paragraph")
                    }["App.useMemo[topToolbarActions]"]
                },
                {
                    key: "h1",
                    label: "H1",
                    active: interactionState.active.h1,
                    run: {
                        "App.useMemo[topToolbarActions]": ()=>applyHeading(1)
                    }["App.useMemo[topToolbarActions]"]
                },
                {
                    key: "h2",
                    label: "H2",
                    active: interactionState.active.h2,
                    run: {
                        "App.useMemo[topToolbarActions]": ()=>executeEditorCommand("h2")
                    }["App.useMemo[topToolbarActions]"]
                },
                {
                    key: "h3",
                    label: "H3",
                    active: interactionState.active.h3,
                    run: {
                        "App.useMemo[topToolbarActions]": ()=>executeEditorCommand("h3")
                    }["App.useMemo[topToolbarActions]"]
                },
                {
                    key: "bold",
                    label: "Bold",
                    active: interactionState.active.bold,
                    run: {
                        "App.useMemo[topToolbarActions]": ()=>executeEditorCommand("bold")
                    }["App.useMemo[topToolbarActions]"]
                },
                {
                    key: "italic",
                    label: "Italic",
                    active: interactionState.active.italic,
                    run: {
                        "App.useMemo[topToolbarActions]": ()=>executeEditorCommand("italic")
                    }["App.useMemo[topToolbarActions]"]
                },
                {
                    key: "underline",
                    label: "Underline",
                    active: interactionState.active.underline,
                    run: {
                        "App.useMemo[topToolbarActions]": ()=>executeEditorCommand("underline")
                    }["App.useMemo[topToolbarActions]"]
                },
                {
                    key: "ul",
                    label: "Bullet",
                    active: interactionState.active.bulletList,
                    run: {
                        "App.useMemo[topToolbarActions]": ()=>executeEditorCommand("bulletList")
                    }["App.useMemo[topToolbarActions]"]
                },
                {
                    key: "ol",
                    label: "Numb",
                    active: interactionState.active.orderedList,
                    run: {
                        "App.useMemo[topToolbarActions]": ()=>executeEditorCommand("orderedList")
                    }["App.useMemo[topToolbarActions]"]
                },
                {
                    key: "quote",
                    label: "Quote",
                    active: interactionState.active.blockquote,
                    run: {
                        "App.useMemo[topToolbarActions]": ()=>executeEditorCommand("blockquote")
                    }["App.useMemo[topToolbarActions]"]
                },
                {
                    key: "code",
                    label: "Code",
                    active: interactionState.active.codeBlock,
                    run: {
                        "App.useMemo[topToolbarActions]": ()=>executeEditorCommand("codeBlock")
                    }["App.useMemo[topToolbarActions]"]
                },
                {
                    key: "link",
                    label: "Link",
                    active: interactionState.active.link,
                    run: {
                        "App.useMemo[topToolbarActions]": ()=>executeEditorCommand("link")
                    }["App.useMemo[topToolbarActions]"]
                },
                {
                    key: "image",
                    label: "Image",
                    active: false,
                    run: {
                        "App.useMemo[topToolbarActions]": ()=>executeEditorCommand("image")
                    }["App.useMemo[topToolbarActions]"]
                }
            ]
    }["App.useMemo[topToolbarActions]"], [
        applyHeading,
        executeEditorCommand,
        interactionState.active
    ]);
    const floatingToolbarActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "App.useMemo[floatingToolbarActions]": ()=>[
                {
                    key: "float-bold",
                    label: "Bold",
                    active: interactionState.active.bold,
                    run: {
                        "App.useMemo[floatingToolbarActions]": ()=>executeEditorCommand("bold")
                    }["App.useMemo[floatingToolbarActions]"]
                },
                {
                    key: "float-h2",
                    label: "H2",
                    active: interactionState.active.h2,
                    run: {
                        "App.useMemo[floatingToolbarActions]": ()=>executeEditorCommand("h2")
                    }["App.useMemo[floatingToolbarActions]"]
                },
                {
                    key: "float-link",
                    label: "Link",
                    active: interactionState.active.link,
                    run: {
                        "App.useMemo[floatingToolbarActions]": ()=>executeEditorCommand("link")
                    }["App.useMemo[floatingToolbarActions]"]
                },
                {
                    key: "float-align-left",
                    label: "Left",
                    active: interactionState.active.alignTextLeft,
                    run: {
                        "App.useMemo[floatingToolbarActions]": ()=>executeEditorCommand("alignTextLeft")
                    }["App.useMemo[floatingToolbarActions]"]
                },
                {
                    key: "float-align-center",
                    label: "Center",
                    active: interactionState.active.alignTextCenter,
                    run: {
                        "App.useMemo[floatingToolbarActions]": ()=>executeEditorCommand("alignTextCenter")
                    }["App.useMemo[floatingToolbarActions]"]
                },
                {
                    key: "float-align-right",
                    label: "Right",
                    active: interactionState.active.alignTextRight,
                    run: {
                        "App.useMemo[floatingToolbarActions]": ()=>executeEditorCommand("alignTextRight")
                    }["App.useMemo[floatingToolbarActions]"]
                }
            ]
    }["App.useMemo[floatingToolbarActions]"], [
        executeEditorCommand,
        interactionState.active.alignTextCenter,
        interactionState.active.alignTextLeft,
        interactionState.active.alignTextRight,
        interactionState.active.bold,
        interactionState.active.h2,
        interactionState.active.link
    ]);
    const insertBlockTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[insertBlockTemplate]": (blockId)=>{
            closeContextMenu();
            closeSlashMenu();
            if (blockId === "section") {
                insertEditorHtml("<h2>New Section</h2><p>Start writing here...</p>");
                updatePipeline([
                    "Block insert requested.",
                    "Block type: section.",
                    "Section block inserted into editor.",
                    "Editor state synced."
                ]);
                return;
            }
            if (blockId === "faq") {
                openFaqModal();
                updatePipeline([
                    "Block insert requested.",
                    "Block type: FAQ.",
                    "FAQ modal opened.",
                    "Editor state synced."
                ]);
                return;
            }
            if (blockId === "table") {
                insertTableBlock();
                updatePipeline([
                    "Block insert requested.",
                    "Block type: table.",
                    "Responsive table block inserted.",
                    "Editor state synced."
                ]);
                return;
            }
            if (blockId === "quote") {
                executeEditorCommand("blockquote");
                return;
            }
            if (blockId === "code") {
                executeEditorCommand("codeBlock");
                return;
            }
            if (blockId === "image") {
                executeEditorCommand("image");
                return;
            }
            if (blockId === "embed") {
                if (embedUrl.trim()) {
                    addEmbed();
                } else {
                    insertEditorHtml("<p>Paste a YouTube URL in the embed input and click Insert Embed.</p>");
                }
                updatePipeline([
                    "Block insert requested.",
                    "Block type: embed.",
                    "Embed block inserted or guided placeholder added.",
                    "Editor state synced."
                ]);
            }
        }
    }["App.useCallback[insertBlockTemplate]"], [
        addEmbed,
        closeContextMenu,
        closeSlashMenu,
        embedUrl,
        executeEditorCommand,
        insertEditorHtml,
        insertTableBlock,
        openFaqModal,
        updatePipeline
    ]);
    const runContextCommand = (commandId_0)=>{
        closeContextMenu();
        executeEditorCommand(commandId_0, "context-menu");
    };
    const runSlashCommand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[runSlashCommand]": (commandId_1)=>{
            if (!tiptapEditor) return;
            if (slashMenu.replaceTo > slashMenu.replaceFrom) {
                tiptapEditor.chain().focus().deleteRange({
                    from: slashMenu.replaceFrom,
                    to: slashMenu.replaceTo
                }).run();
            }
            closeSlashMenu();
            executeEditorCommand(commandId_1, "slash-command");
        }
    }["App.useCallback[runSlashCommand]"], [
        closeSlashMenu,
        executeEditorCommand,
        slashMenu.replaceFrom,
        slashMenu.replaceTo,
        tiptapEditor
    ]);
    const handleEditorContextMenu = (event_2)=>{
        event_2.preventDefault();
        if (!tiptapEditor) return;
        tiptapEditor.commands.focus();
        const target_2 = event_2.target;
        const imageNode = target_2.closest("img");
        const hasTextSelection_0 = tiptapEditor.state.selection.from !== tiptapEditor.state.selection.to && Boolean(tiptapEditor.state.doc.textBetween(tiptapEditor.state.selection.from, tiptapEditor.state.selection.to, " ").trim());
        const parentNode_0 = tiptapEditor.state.selection.$from.parent;
        const isEmptyLine_0 = !hasTextSelection_0 && (parentNode_0.type.name === "paragraph" || parentNode_0.type.name === "heading") && !parentNode_0.textContent.trim();
        let situation = "empty-line";
        let imageSrc = null;
        if (imageNode) {
            situation = "image";
            imageSrc = imageNode.getAttribute("src");
        } else if (hasTextSelection_0) {
            situation = "text-selected";
        } else if (isEmptyLine_0) {
            situation = "empty-line";
        }
        setContextImageSrc(imageSrc);
        const contextItems = contextActionBySituation[situation];
        const used = new Set(contextItems.map((item_6)=>item_6.id));
        const toolboxItems = allToolbarContextCommands.filter((item_7)=>!used.has(item_7.id));
        const items = [
            ...contextItems,
            ...toolboxItems
        ];
        const positioned_2 = toSmartPosition(event_2.clientX, event_2.clientY, 340, Math.min(items.length, 10) * 38 + 36);
        closeSlashMenu();
        setContextMenu({
            open: true,
            x: positioned_2.x,
            y: positioned_2.y,
            situation,
            items
        });
        updatePipeline([
            "Context menu event captured.",
            "Default browser menu prevented.",
            `Context detected: ${situation.replace("-", " ")}.`,
            "Custom toolbox opened with smart positioning."
        ]);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            const shortcutMap = {
                "ctrl+b": "bold",
                "ctrl+i": "italic",
                "ctrl+u": "underline",
                "ctrl+k": "link",
                "ctrl+alt+1": "h1",
                "ctrl+alt+2": "h2",
                "ctrl+alt+3": "h3",
                "ctrl+alt+7": "orderedList",
                "ctrl+alt+8": "bulletList",
                "ctrl+shift+2": "h2",
                "ctrl+shift+3": "h3",
                "ctrl+shift+7": "orderedList",
                "ctrl+shift+8": "bulletList",
                "ctrl+shift+l": "alignTextLeft",
                "ctrl+shift+e": "alignTextCenter",
                "ctrl+shift+r": "alignTextRight"
            };
            const toShortcutKey = {
                "App.useEffect.toShortcutKey": (event_3)=>{
                    let key = event_3.key.toLowerCase();
                    const code = event_3.code || "";
                    if (/^Key[A-Z]$/.test(code)) {
                        key = code.slice(3).toLowerCase();
                    } else if (/^Digit[0-9]$/.test(code)) {
                        key = code.slice(5);
                    }
                    const parts = [];
                    if (event_3.ctrlKey) parts.push("ctrl");
                    if (event_3.shiftKey) parts.push("shift");
                    if (event_3.altKey) parts.push("alt");
                    parts.push(key);
                    return parts.join("+");
                }
            }["App.useEffect.toShortcutKey"];
            const isBlockedBrowserShortcut = {
                "App.useEffect.isBlockedBrowserShortcut": (event_4)=>{
                    const key_0 = event_4.key.toLowerCase();
                    const hasPrimaryModifier = event_4.ctrlKey || event_4.metaKey;
                    const editorHasFocus = Boolean(tiptapEditor?.isFocused);
                    if (event_4.key === "F12") return true;
                    if (!hasPrimaryModifier) return false;
                    if (key_0 === "p") return true;
                    if (key_0 === "u" && !editorHasFocus) return true;
                    if (event_4.shiftKey && (key_0 === "i" || key_0 === "j" || key_0 === "c")) {
                        return true;
                    }
                    if (event_4.metaKey && event_4.altKey && (key_0 === "i" || key_0 === "j" || key_0 === "c")) {
                        return true;
                    }
                    return false;
                }
            }["App.useEffect.isBlockedBrowserShortcut"];
            const isPrintableCharacterKey = {
                "App.useEffect.isPrintableCharacterKey": (event_5)=>{
                    if (event_5.key.length !== 1) return false;
                    if (event_5.ctrlKey || event_5.metaKey || event_5.altKey) return false;
                    return true;
                }
            }["App.useEffect.isPrintableCharacterKey"];
            const onKeyDown = {
                "App.useEffect.onKeyDown": (event_6)=>{
                    if (isBlockedBrowserShortcut(event_6)) {
                        event_6.preventDefault();
                        event_6.stopPropagation();
                        closeContextMenu();
                        closeSlashMenu();
                        return;
                    }
                    if ((event_6.ctrlKey || event_6.metaKey) && event_6.key.toLowerCase() === "s") {
                        event_6.preventDefault();
                        event_6.stopPropagation();
                        void persistPostShortcutRef.current?.();
                        return;
                    }
                    const target_3 = event_6.target;
                    const editorContainsTarget = !!target_3 && !!editorSurfaceRef.current?.contains(target_3);
                    const typingInNonEditor = !!target_3 && (target_3.tagName === "INPUT" || target_3.tagName === "TEXTAREA" || target_3.tagName === "SELECT") && !editorContainsTarget;
                    if (typingInNonEditor) return;
                    if ((event_6.ctrlKey || event_6.metaKey) && event_6.key === "Enter") {
                        if (!tiptapEditor || !tiptapEditor.isFocused) return;
                        event_6.preventDefault();
                        insertNewBlogSection();
                        return;
                    }
                    if (isPrintableCharacterKey(event_6) && tiptapEditor?.isFocused) {
                        const { $from: $from_0 } = tiptapEditor.state.selection;
                        const parentNode_1 = $from_0.parent;
                        const parentText = parentNode_1.textContent.trim().toLowerCase();
                        if (parentNode_1.type.name === "heading" && parentText === NEW_BLOG_SECTION_PROMPT.toLowerCase()) {
                            const from_4 = $from_0.start();
                            const to_4 = from_4 + parentNode_1.content.size;
                            if (from_4 < to_4) {
                                tiptapEditor.commands.setTextSelection({
                                    from: from_4,
                                    to: to_4
                                });
                            }
                        }
                    }
                    if (event_6.key === "Escape") {
                        closeContextMenu();
                        closeSlashMenu();
                        return;
                    }
                    if (slashMenu.open) {
                        if (event_6.key === "ArrowDown") {
                            event_6.preventDefault();
                            shiftSlashActiveIndex(1);
                            return;
                        }
                        if (event_6.key === "ArrowUp") {
                            event_6.preventDefault();
                            shiftSlashActiveIndex(-1);
                            return;
                        }
                        if (event_6.key === "Enter") {
                            event_6.preventDefault();
                            const selected = slashMenu.items[slashMenu.activeIndex];
                            if (selected) {
                                runSlashCommand(selected.id);
                            }
                            return;
                        }
                    }
                    if (!tiptapEditor || !tiptapEditor.isFocused) return;
                    const shortcut = toShortcutKey(event_6);
                    const mapped = shortcutMap[shortcut];
                    if (!mapped) return;
                    event_6.preventDefault();
                    executeEditorCommand(mapped, "shortcut", shortcut);
                }
            }["App.useEffect.onKeyDown"];
            window.addEventListener("keydown", onKeyDown);
            return ({
                "App.useEffect": ()=>{
                    window.removeEventListener("keydown", onKeyDown);
                }
            })["App.useEffect"];
        }
    }["App.useEffect"], [
        closeContextMenu,
        closeSlashMenu,
        executeEditorCommand,
        insertNewBlogSection,
        runSlashCommand,
        shiftSlashActiveIndex,
        slashMenu.activeIndex,
        slashMenu.items,
        slashMenu.open,
        tiptapEditor
    ]);
    if (!authReady || loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-slate-950 px-4 py-20 text-slate-100 sm:px-6 lg:px-8",
            onContextMenu: (event_7)=>event_7.preventDefault(),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto w-full max-w-7xl rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8",
                children: "Loading blog CMS..."
            }, void 0, false, {
                fileName: "[project]/app/blog/cms/page.tsx",
                lineNumber: 3308,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/blog/cms/page.tsx",
            lineNumber: 3307,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-slate-950 text-slate-100",
        onContextMenu: (event_8)=>event_8.preventDefault(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-slate-900 to-slate-950 p-5 shadow-[0_25px_70px_rgba(2,6,23,0.45)] sm:p-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300",
                                            children: "Content Management"
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 3318,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl",
                                            children: "Blog Dashboard"
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 3321,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 3317,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: createPost,
                                            className: "rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400",
                                            children: "New Post"
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 3326,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/blog",
                                            className: "rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold transition hover:border-emerald-300 hover:text-emerald-300",
                                            children: "View Blog"
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 3329,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 3325,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 3316,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/blog/cms/page.tsx",
                        lineNumber: 3315,
                        columnNumber: 9
                    }, this),
                    error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-5 rounded-xl border border-red-300/30 bg-red-500/10 px-4 py-3 text-sm text-red-200",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/app/blog/cms/page.tsx",
                        lineNumber: 3336,
                        columnNumber: 18
                    }, this) : null,
                    notice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-5 rounded-xl border border-emerald-300/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200",
                        children: notice
                    }, void 0, false, {
                        fileName: "[project]/app/blog/cms/page.tsx",
                        lineNumber: 3339,
                        columnNumber: 19
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "space-y-6 xl:sticky xl:top-6 xl:h-fit",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-sm font-semibold uppercase tracking-[0.16em] text-slate-300",
                                                        children: "Posts"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                        lineNumber: 3347,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate-400",
                                                        children: posts.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                        lineNumber: 3350,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                lineNumber: 3346,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 max-h-[360px] space-y-2 overflow-auto pr-1",
                                                children: posts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "rounded-lg border border-white/10 bg-slate-800/40 px-3 py-2 text-sm text-slate-300",
                                                    children: "No posts yet."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3353,
                                                    columnNumber: 39
                                                }, this) : posts.map((post_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            setError("");
                                                            setNotice("");
                                                            hydrateFromPost(post_0);
                                                        },
                                                        className: `w-full rounded-xl border px-3 py-3 text-left transition ${form.id === post_0.id ? "border-emerald-400/50 bg-emerald-500/10" : "border-white/10 bg-slate-800/35 hover:border-white/20"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "line-clamp-1 text-sm font-semibold text-white",
                                                                children: post_0.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                lineNumber: 3360,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 flex items-center justify-between gap-2 text-xs text-slate-400",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "uppercase",
                                                                        children: post_0.status
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                                        lineNumber: 3364,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: prettyDate(post_0.updatedAt)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                                        lineNumber: 3365,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                lineNumber: 3363,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, post_0.id, true, {
                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                        lineNumber: 3355,
                                                        columnNumber: 46
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                lineNumber: 3352,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/blog/cms/page.tsx",
                                        lineNumber: 3345,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-sm font-semibold uppercase tracking-[0.16em] text-slate-300",
                                                        children: "Anchor Links"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                        lineNumber: 3373,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate-400",
                                                        children: anchorPreviewLinks.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                        lineNumber: 3376,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                lineNumber: 3372,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-[11px] text-slate-400",
                                                children: "Live preview of saved anchor words with their links."
                                            }, void 0, false, {
                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                lineNumber: 3380,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 max-h-[280px] space-y-2 overflow-auto pr-1",
                                                children: anchorPreviewLinks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "rounded-lg border border-white/10 bg-slate-800/40 px-3 py-2 text-sm text-slate-300",
                                                    children: "No anchor links in this post yet."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3384,
                                                    columnNumber: 52
                                                }, this) : anchorPreviewLinks.map((item_8)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: item_8.href,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "block rounded-xl border border-white/10 bg-slate-800/35 px-3 py-2.5 transition hover:border-emerald-300/50 hover:bg-emerald-500/10",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "line-clamp-1 text-sm font-semibold text-white",
                                                                children: item_8.text
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                lineNumber: 3387,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 line-clamp-1 text-xs text-emerald-300",
                                                                children: item_8.href
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                lineNumber: 3390,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, item_8.id, true, {
                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                        lineNumber: 3386,
                                                        columnNumber: 59
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                lineNumber: 3383,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/blog/cms/page.tsx",
                                        lineNumber: 3371,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-sm font-semibold uppercase tracking-[0.16em] text-slate-300",
                                                children: "Site Settings"
                                            }, void 0, false, {
                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                lineNumber: 3398,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs text-slate-300",
                                                        children: [
                                                            "Site Title",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: settings.siteTitle,
                                                                onChange: (event_9)=>setSettings((prev_21)=>({
                                                                            ...prev_21,
                                                                            siteTitle: event_9.target.value
                                                                        })),
                                                                className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                lineNumber: 3404,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                        lineNumber: 3402,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs text-slate-300",
                                                        children: [
                                                            "Author Name",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: settings.authorName,
                                                                onChange: (event_10)=>setSettings((prev_22)=>({
                                                                            ...prev_22,
                                                                            authorName: event_10.target.value
                                                                        })),
                                                                className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                lineNumber: 3411,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                        lineNumber: 3409,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: saveSettings,
                                                        disabled: savingSettings,
                                                        className: "w-full rounded-lg bg-emerald-500 px-3 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400 disabled:opacity-50",
                                                        children: savingSettings ? "Saving..." : "Save Settings"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                        lineNumber: 3416,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                lineNumber: 3401,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/blog/cms/page.tsx",
                                        lineNumber: 3397,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/blog/cms/page.tsx",
                                lineNumber: 3344,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "space-y-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: savePost,
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-4 md:grid-cols-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs text-slate-300",
                                                            children: [
                                                                "Title (H1)",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: form.title,
                                                                    onChange: (event_11)=>{
                                                                        const nextTitle = event_11.target.value;
                                                                        setForm((prev_23)=>{
                                                                            const nextMetaTitle = !prev_23.metaTitle || prev_23.metaTitle === prev_23.title ? nextTitle : prev_23.metaTitle;
                                                                            return {
                                                                                ...prev_23,
                                                                                title: nextTitle,
                                                                                slug: slugTouched ? prev_23.slug : slugify(nextTitle),
                                                                                metaTitle: nextMetaTitle
                                                                            };
                                                                        });
                                                                    },
                                                                    placeholder: "Post title",
                                                                    className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm outline-none focus:border-emerald-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3429,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "mt-1 block text-[11px] text-slate-400",
                                                                    children: [
                                                                        "The post title is always rendered as",
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                            className: "text-slate-200",
                                                                            children: "h1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 3443,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        "."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3441,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3427,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs text-slate-300",
                                                            children: [
                                                                "Slug (auto-generate)",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: form.slug,
                                                                    onChange: (event_12)=>{
                                                                        setSlugTouched(true);
                                                                        setForm((prev_24)=>({
                                                                                ...prev_24,
                                                                                slug: slugify(event_12.target.value)
                                                                            }));
                                                                    },
                                                                    placeholder: "my-blog-post",
                                                                    className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm outline-none focus:border-emerald-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3448,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3446,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3426,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 grid gap-4 md:grid-cols-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs text-slate-300",
                                                            children: [
                                                                "Author Name",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: form.authorName,
                                                                    onChange: (event_13)=>setForm((prev_25)=>({
                                                                                ...prev_25,
                                                                                authorName: event_13.target.value
                                                                            })),
                                                                    className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm outline-none focus:border-emerald-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3461,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3459,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-slate-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "Status"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3467,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-1.5 flex flex-wrap gap-2",
                                                                    children: [
                                                                        "draft",
                                                                        "published",
                                                                        "scheduled"
                                                                    ].map((status_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>setForm((prev_26)=>({
                                                                                        ...prev_26,
                                                                                        status: status_0,
                                                                                        scheduledAt: status_0 === "scheduled" ? prev_26.scheduledAt : ""
                                                                                    })),
                                                                            className: `rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition ${form.status === status_0 ? "border-emerald-400 bg-emerald-500/15 text-emerald-300" : "border-white/20 text-slate-200 hover:border-white/40"}`,
                                                                            children: status_0
                                                                        }, status_0, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 3469,
                                                                            columnNumber: 90
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3468,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3466,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs text-slate-300",
                                                            children: [
                                                                "Schedule Date & Time",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "datetime-local",
                                                                    value: form.scheduledAt,
                                                                    onChange: (event_14)=>setForm((prev_27)=>({
                                                                                ...prev_27,
                                                                                scheduledAt: event_14.target.value
                                                                            })),
                                                                    disabled: form.status !== "scheduled",
                                                                    className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm outline-none focus:border-emerald-400 disabled:cursor-not-allowed disabled:opacity-50"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3480,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3478,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3458,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 3425,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "sticky top-20 z-30 -mx-1 rounded-xl border border-white/15 bg-slate-950/92 p-2 shadow-[0_10px_30px_rgba(2,6,23,0.35)] backdrop-blur transition-all duration-200",
                                                    onMouseDown: preserveSelectionOnToolbarMouseDown,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "px-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400",
                                                            children: "Top Toolbar (Static)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3490,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2 flex flex-wrap items-center gap-2",
                                                            children: topToolbarActions.map((action)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: action.run,
                                                                    "aria-pressed": action.active,
                                                                    className: toolbarButtonClass(action.active),
                                                                    children: action.label
                                                                }, action.key, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3494,
                                                                    columnNumber: 54
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3493,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3489,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 text-[11px] text-slate-400",
                                                    children: "State-driven editor active. Shortcuts: Ctrl+B, I, U, K and Ctrl+Alt+1,2,3,7,8. Ctrl+Enter inserts a new blog section. Ctrl+Shift+L/E/R aligns text. Ctrl+S updates/saves this post."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3499,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 flex flex-wrap items-center gap-2 text-[11px] text-slate-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `rounded-full border px-2 py-1 ${interactionState.isFocused ? "border-emerald-400/60 bg-emerald-500/15 text-emerald-200" : "border-white/20 bg-white/5 text-slate-300"}`,
                                                            children: interactionState.isFocused ? "Editor focused" : "Editor idle"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3505,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-full border border-white/20 bg-white/5 px-2 py-1 text-slate-200",
                                                            children: interactionState.hasTextSelection ? `Selected: ${interactionState.selectedText.slice(0, 28)}${interactionState.selectedText.length > 28 ? "..." : ""}` : interactionState.isImageSelected ? "Image selected" : interactionState.isEmptyLine ? "Empty line context" : "Cursor context"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3508,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-full border border-white/20 bg-white/5 px-2 py-1 text-slate-200",
                                                            children: [
                                                                "Node: ",
                                                                interactionState.nodeType.toUpperCase()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3511,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-full border border-white/20 bg-white/5 px-2 py-1 text-slate-200",
                                                            children: [
                                                                "Context menu: ",
                                                                contextMenu.open ? "open" : "closed"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3514,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-full border border-white/20 bg-white/5 px-2 py-1 text-slate-200",
                                                            children: [
                                                                "Slash menu: ",
                                                                slashMenu.open ? "open" : "closed"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3517,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3504,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 rounded-xl border border-white/10 bg-slate-900/45 p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-300",
                                                            children: "Command Driven UX"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3523,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2 space-y-1 text-xs text-white",
                                                            children: commandPipeline.map((step, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "leading-5",
                                                                    children: [
                                                                        index_0 + 1,
                                                                        ". ",
                                                                        step
                                                                    ]
                                                                }, `${step}-${index_0}`, true, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3527,
                                                                    columnNumber: 61
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3526,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3522,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 rounded-xl border border-white/10 bg-slate-900/45 p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-300",
                                                            children: "Block Inserter ( Instrctions + Templates )"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3534,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-4",
                                                            children: blockTemplateCatalog.map((block)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>insertBlockTemplate(block.id),
                                                                    className: "rounded-lg border border-white/15 bg-slate-800/55 px-3 py-2.5 text-left transition hover:-translate-y-0.5 hover:border-emerald-300/50 hover:bg-emerald-500/10",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm font-semibold text-slate-100",
                                                                            children: block.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 3539,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mt-1 text-[11px] text-slate-300",
                                                                            children: block.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 3542,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, block.id, true, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3538,
                                                                    columnNumber: 56
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3537,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3533,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 grid gap-3 lg:grid-cols-[minmax(0,1fr)_220px]",
                                                    onMouseDown: preserveSelectionOnToolbarMouseDown,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: embedUrl,
                                                            onChange: (event_15)=>setEmbedUrl(event_15.target.value),
                                                            placeholder: "Paste YouTube URL for embed",
                                                            className: "w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3550,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: addEmbed,
                                                            className: "rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold hover:border-emerald-300 hover:text-emerald-300",
                                                            children: "Insert Embed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3551,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3549,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3",
                                                    onMouseDown: preserveSelectionOnToolbarMouseDown,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: openFaqModal,
                                                        className: "rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold hover:border-emerald-300 hover:text-emerald-300",
                                                        children: "Open FAQ Modal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                        lineNumber: 3557,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3556,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 grid gap-3 sm:grid-cols-[120px_120px_180px]",
                                                    onMouseDown: preserveSelectionOnToolbarMouseDown,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs text-slate-300",
                                                            children: [
                                                                "Rows",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    min: 1,
                                                                    max: 10,
                                                                    value: tableRows,
                                                                    onChange: (event_16)=>setTableRows(Number.isFinite(Number(event_16.target.value)) ? Number(event_16.target.value) : 3),
                                                                    className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3565,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3563,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs text-slate-300",
                                                            children: [
                                                                "Cols",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    min: 1,
                                                                    max: 8,
                                                                    value: tableCols,
                                                                    onChange: (event_17)=>setTableCols(Number.isFinite(Number(event_17.target.value)) ? Number(event_17.target.value) : 3),
                                                                    className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3569,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3567,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: insertTableBlock,
                                                            className: "self-end rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold hover:border-emerald-300 hover:text-emerald-300",
                                                            children: "Insert Table"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3571,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3562,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    ref: editorSurfaceRef,
                                                    onClick: (event_18)=>void handleEditorClick(event_18),
                                                    onContextMenu: handleEditorContextMenu,
                                                    className: "relative mt-4 min-h-[220px] rounded-2xl border border-white/10 bg-slate-950/70 p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EditorContent"], {
                                                            editor: tiptapEditor
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3577,
                                                            columnNumber: 19
                                                        }, this),
                                                        interactionState.active.link && interactionState.activeLinkHref ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pointer-events-none absolute left-3 -top-3 z-20 max-w-[260px] rounded-lg border border-emerald-300/35 bg-slate-900/95 px-2.5 py-2 shadow-[0_10px_30px_rgba(16,185,129,0.2)]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-300/80",
                                                                    children: "Anchor Preview"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3579,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-1 truncate text-xs text-emerald-200",
                                                                    children: interactionState.activeLinkHref
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3582,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3578,
                                                            columnNumber: 86
                                                        }, this) : null,
                                                        interactionState.hasTextSelection && inlineIndicator.visible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute z-30 translate-x-42 rounded-xl border border-emerald-300/35 bg-slate-900/95 px-2 py-1.5 shadow-[0_16px_40px_rgba(16,185,129,0.45)] backdrop-blur transition-all duration-150",
                                                            style: {
                                                                left: `${inlineIndicator.x}px`,
                                                                top: `${Math.max(8, inlineIndicator.y - 42)}px`
                                                            },
                                                            onMouseDown: preserveSelectionOnToolbarMouseDown,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mb-1 px-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-400",
                                                                    children: "Floating Toolbar"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3590,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1.5",
                                                                    children: floatingToolbarActions.map((action_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: action_0.run,
                                                                            "aria-pressed": action_0.active,
                                                                            className: toolbarButtonClass(action_0.active),
                                                                            children: action_0.label
                                                                        }, action_0.key, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 3594,
                                                                            columnNumber: 65
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3593,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3586,
                                                            columnNumber: 83
                                                        }, this) : null,
                                                        inlineIndicator.visible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pointer-events-none absolute z-20 max-w-[260px] -translate-x-1/2 rounded-full border border-emerald-300/40 bg-slate-900/95 px-2.5 py-1 text-[10px] font-semibold text-emerald-200 shadow-[0_8px_25px_rgba(16,185,129,0.25)] transition-all duration-150",
                                                            style: {
                                                                left: `${inlineIndicator.x}px`,
                                                                top: `${Math.max(8, inlineIndicator.y - 30)}px`
                                                            },
                                                            children: inlineIndicator.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3599,
                                                            columnNumber: 46
                                                        }, this) : null
                                                    ]
                                                }, editorKey, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3576,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 3488,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-sm font-semibold uppercase tracking-[0.16em] text-slate-300",
                                                    children: "Taxonomy"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3609,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 grid gap-4 md:grid-cols-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-300",
                                                                    children: "Categories"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3614,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-2 max-h-44 space-y-2 overflow-auto pr-1",
                                                                    children: [
                                                                        categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-slate-800/35 px-3 py-2 text-sm",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "flex items-center gap-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                checked: form.categories.includes(category.name),
                                                                                                onChange: ()=>toggleCategory(category.name),
                                                                                                className: "h-4 w-4 accent-emerald-500"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                                                lineNumber: 3618,
                                                                                                columnNumber: 29
                                                                                            }, this),
                                                                                            category.name
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                                                        lineNumber: 3617,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        type: "button",
                                                                                        onClick: ()=>removeCategory(category.slug),
                                                                                        className: "text-xs text-red-200 hover:text-red-100",
                                                                                        children: "Delete"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                                                        lineNumber: 3621,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, category.id, true, {
                                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                                lineNumber: 3616,
                                                                                columnNumber: 51
                                                                            }, this)),
                                                                        categories.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-slate-400",
                                                                            children: "No categories added."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 3625,
                                                                            columnNumber: 50
                                                                        }, this) : null
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3615,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-3 flex gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: newCategoryName,
                                                                            onChange: (event_19)=>setNewCategoryName(event_19.target.value),
                                                                            placeholder: "New category",
                                                                            className: "w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 3630,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: addCategory,
                                                                            disabled: savingCategory,
                                                                            className: "rounded-lg bg-emerald-500 px-3 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400 disabled:opacity-50",
                                                                            children: "Add"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 3631,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3629,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3613,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs text-slate-300",
                                                                    children: [
                                                                        "Tags (comma separated)",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: form.tagsInput,
                                                                            onChange: (event_20)=>setForm((prev_28)=>({
                                                                                        ...prev_28,
                                                                                        tagsInput: event_20.target.value
                                                                                    })),
                                                                            placeholder: "design, branding, marketing",
                                                                            className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 3640,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3638,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-3 flex flex-wrap gap-2",
                                                                    children: tagList(form.tagsInput).map((tag_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "rounded-full border border-white/20 px-2.5 py-1 text-xs text-slate-200",
                                                                            children: [
                                                                                "#",
                                                                                tag_0
                                                                            ]
                                                                        }, tag_0, true, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 3646,
                                                                            columnNumber: 61
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3645,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3637,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3612,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 3608,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-sm font-semibold uppercase tracking-[0.16em] text-slate-300",
                                                    children: "SEO Panel"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3655,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 grid gap-4 md:grid-cols-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs text-slate-300",
                                                            children: [
                                                                "Meta Title",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: form.metaTitle,
                                                                    onChange: (event_21)=>setForm((prev_29)=>({
                                                                                ...prev_29,
                                                                                metaTitle: event_21.target.value
                                                                            })),
                                                                    className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3661,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3659,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs text-slate-300",
                                                            children: [
                                                                "OG Image",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: form.ogImage,
                                                                    onChange: (event_22)=>setForm((prev_30)=>({
                                                                                ...prev_30,
                                                                                ogImage: event_22.target.value
                                                                            })),
                                                                    className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3668,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3666,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs text-slate-300 md:col-span-2",
                                                            children: [
                                                                "Canonical URL",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: form.canonicalUrl,
                                                                    onChange: (event_23)=>setForm((prev_31)=>({
                                                                                ...prev_31,
                                                                                canonicalUrl: event_23.target.value
                                                                            })),
                                                                    placeholder: "https://www.yoursite.com/blog/post-slug",
                                                                    className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3675,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3673,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3658,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "mt-4 block text-xs text-slate-300",
                                                    children: [
                                                        "Meta Description",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            rows: 4,
                                                            value: form.metaDescription,
                                                            onChange: (event_24)=>setForm((prev_32)=>({
                                                                        ...prev_32,
                                                                        metaDescription: event_24.target.value
                                                                    })),
                                                            className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3683,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3681,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "mt-4 block text-xs text-slate-300",
                                                    children: [
                                                        "SEO Keywords (comma separated)",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: form.seoKeywordsInput,
                                                            onChange: (event_25)=>setForm((prev_33)=>({
                                                                        ...prev_33,
                                                                        seoKeywordsInput: event_25.target.value
                                                                    })),
                                                            placeholder: "seo, web design, digital marketing",
                                                            className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3690,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mt-1 block text-[11px] text-slate-400",
                                                            children: "Used in BlogPosting schema `keywords`."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3694,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3688,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 flex flex-wrap gap-2",
                                                    children: tagList(form.seoKeywordsInput).map((keyword)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-full border border-emerald-300/30 bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-200",
                                                            children: keyword
                                                        }, keyword, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3699,
                                                            columnNumber: 66
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3698,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "mt-4 block text-xs text-slate-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center justify-between gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Schema (JSON-LD)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3705,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: generateSchemaFromCurrentContent,
                                                                    className: "rounded-md border border-white/20 px-2.5 py-1 text-[11px] font-semibold text-slate-200 transition hover:border-emerald-300 hover:text-emerald-300",
                                                                    children: "Auto Generate"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3706,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3704,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            rows: 6,
                                                            value: form.schemaJsonLd,
                                                            onChange: (event_26)=>setForm((prev_34)=>({
                                                                        ...prev_34,
                                                                        schemaJsonLd: event_26.target.value
                                                                    })),
                                                            placeholder: '{"@context":"https://schema.org","@type":"BlogPosting"}',
                                                            className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm font-mono outline-none focus:border-emerald-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3710,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mt-1 block text-[11px] text-slate-400",
                                                            children: "Auto-generated on save if empty. Use button to refresh anytime."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3714,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3703,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 flex flex-wrap gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2 text-xs text-slate-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: form.robotsNoIndex,
                                                                    onChange: (event_27)=>setForm((prev_35)=>({
                                                                                ...prev_35,
                                                                                robotsNoIndex: event_27.target.checked
                                                                            })),
                                                                    className: "h-4 w-4 accent-emerald-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3721,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Robots: noindex"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3720,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2 text-xs text-slate-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: form.robotsNoFollow,
                                                                    onChange: (event_28)=>setForm((prev_36)=>({
                                                                                ...prev_36,
                                                                                robotsNoFollow: event_28.target.checked
                                                                            })),
                                                                    className: "h-4 w-4 accent-emerald-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3728,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Robots: nofollow"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3727,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3719,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 3654,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-sm font-semibold uppercase tracking-[0.16em] text-slate-300",
                                                    children: "Media Library"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3738,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "inline-flex cursor-pointer items-center justify-center rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold transition hover:border-emerald-300 hover:text-emerald-300",
                                                            children: [
                                                                uploadingMedia ? "Uploading..." : "Upload Image",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "file",
                                                                    accept: "image/*",
                                                                    className: "hidden",
                                                                    disabled: uploadingMedia,
                                                                    onChange: (event_29)=>{
                                                                        const file_1 = event_29.target.files?.[0];
                                                                        if (!file_1) return;
                                                                        void uploadMedia(file_1);
                                                                        event_29.target.value = "";
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3744,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3742,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs text-slate-300 sm:max-w-sm sm:flex-1",
                                                            children: [
                                                                "Featured Image URL",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: form.featuredImageUrl,
                                                                    onChange: (event_30)=>setForm((prev_37)=>({
                                                                                ...prev_37,
                                                                                featuredImageUrl: event_30.target.value
                                                                            })),
                                                                    className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3753,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3751,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3741,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "mt-3 block text-xs text-slate-300",
                                                    children: [
                                                        "Image Alt Text",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: form.imageAltText,
                                                            onChange: (event_31)=>setForm((prev_38)=>({
                                                                        ...prev_38,
                                                                        imageAltText: event_31.target.value
                                                                    })),
                                                            placeholder: "Describe the image for accessibility and SEO",
                                                            className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3761,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3759,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3",
                                                    children: [
                                                        mediaItems.map((item_9)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "overflow-hidden rounded-xl border border-white/10 bg-slate-800/40",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative aspect-[4/3] bg-black",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            src: item_9.url,
                                                                            alt: form.imageAltText || item_9.fileName,
                                                                            fill: true,
                                                                            sizes: "(max-width: 1024px) 100vw, 33vw",
                                                                            className: "absolute inset-0 h-full w-full object-cover"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 3770,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                                        lineNumber: 3769,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-2 p-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "line-clamp-1 text-xs text-slate-300",
                                                                                children: item_9.fileName
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                                lineNumber: 3773,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[11px] text-slate-400",
                                                                                children: [
                                                                                    bytes(item_9.size),
                                                                                    item_9.width && item_9.height ? ` | ${item_9.width} x ${item_9.height}` : ""
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                                lineNumber: 3776,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        type: "button",
                                                                                        onClick: ()=>setForm((prev_39)=>({
                                                                                                    ...prev_39,
                                                                                                    featuredImageUrl: item_9.url,
                                                                                                    imageAltText: prev_39.imageAltText || item_9.fileName,
                                                                                                    ogImage: prev_39.ogImage || item_9.url
                                                                                                })),
                                                                                        className: "flex-1 rounded-md border border-white/20 px-2 py-1.5 text-[11px] font-semibold hover:border-emerald-300 hover:text-emerald-300",
                                                                                        children: "Use as Featured"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                                                        lineNumber: 3781,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        type: "button",
                                                                                        onClick: ()=>{
                                                                                            const alt = form.imageAltText || item_9.fileName;
                                                                                            const insertedNode_1 = insertImageNode(item_9.url, alt, {
                                                                                                mediaId: item_9.id,
                                                                                                caption: "",
                                                                                                align: "center",
                                                                                                widthPercent: 100
                                                                                            });
                                                                                            if (!insertedNode_1) {
                                                                                                insertEditorHtml(imageHtml(item_9.url, alt, item_9.id, "", "center", 100));
                                                                                            }
                                                                                        },
                                                                                        className: "flex-1 rounded-md border border-white/20 px-2 py-1.5 text-[11px] font-semibold hover:border-emerald-300 hover:text-emerald-300",
                                                                                        children: "Insert"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                                                        lineNumber: 3789,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                                lineNumber: 3780,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                                        lineNumber: 3772,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, item_9.id, true, {
                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                lineNumber: 3768,
                                                                columnNumber: 45
                                                            }, this)),
                                                        mediaItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "rounded-lg border border-white/10 bg-slate-800/40 px-3 py-3 text-sm text-slate-300",
                                                            children: "No media uploaded yet."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3806,
                                                            columnNumber: 46
                                                        }, this) : null
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3767,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 3737,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-sm font-semibold uppercase tracking-[0.16em] text-slate-300",
                                                            children: "Comments"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3814,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-slate-400",
                                                            children: loadingComments ? "Loading..." : `${comments.length} total`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3817,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3813,
                                                    columnNumber: 17
                                                }, this),
                                                !form.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 text-sm text-slate-400",
                                                    children: "Save the post first to moderate comments."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3821,
                                                    columnNumber: 29
                                                }, this) : comments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 text-sm text-slate-400",
                                                    children: "No comments on this post yet."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3823,
                                                    columnNumber: 50
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 space-y-3",
                                                    children: comments.map((item_10)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-xl border border-white/10 bg-slate-800/35 p-3",
                                                            style: {
                                                                marginLeft: `${Math.min(commentDepth.get(item_10.id) || 0, 4) * 14}px`
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap items-center justify-between gap-2 text-xs",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-slate-200",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-semibold",
                                                                                    children: item_10.authorName
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                                    lineNumber: 3831,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                " | ",
                                                                                prettyDate(item_10.createdAt)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 3830,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `rounded-full px-2 py-0.5 uppercase tracking-[0.08em] ${item_10.status === "approved" ? "bg-emerald-500/15 text-emerald-300" : item_10.status === "pending" ? "bg-amber-500/15 text-amber-300" : "bg-red-500/15 text-red-300"}`,
                                                                            children: item_10.status
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 3837,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3829,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-2 text-sm text-slate-200",
                                                                    children: item_10.content
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3841,
                                                                    columnNumber: 25
                                                                }, this),
                                                                item_10.moderationReason ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-1 text-xs text-amber-200",
                                                                    children: [
                                                                        "Reason: ",
                                                                        item_10.moderationReason
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3844,
                                                                    columnNumber: 53
                                                                }, this) : null,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-3 flex flex-wrap gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            disabled: commentActionId === item_10.id,
                                                                            onClick: ()=>void updateCommentStatus(item_10.id, "approved"),
                                                                            className: "rounded-md border border-white/20 px-2.5 py-1.5 text-[11px] font-semibold hover:border-emerald-300 hover:text-emerald-300 disabled:opacity-50",
                                                                            children: "Approve"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 3848,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            disabled: commentActionId === item_10.id,
                                                                            onClick: ()=>void updateCommentStatus(item_10.id, "pending"),
                                                                            className: "rounded-md border border-white/20 px-2.5 py-1.5 text-[11px] font-semibold hover:border-amber-300 hover:text-amber-300 disabled:opacity-50",
                                                                            children: "Pending"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 3851,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            disabled: commentActionId === item_10.id,
                                                                            onClick: ()=>void updateCommentStatus(item_10.id, "spam", "Marked as spam by admin."),
                                                                            className: "rounded-md border border-white/20 px-2.5 py-1.5 text-[11px] font-semibold hover:border-red-300 hover:text-red-300 disabled:opacity-50",
                                                                            children: "Spam"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 3854,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            disabled: commentActionId === item_10.id,
                                                                            onClick: ()=>void removeComment(item_10.id),
                                                                            className: "rounded-md border border-red-300/30 px-2.5 py-1.5 text-[11px] font-semibold text-red-200 hover:border-red-300 hover:text-red-100 disabled:opacity-50",
                                                                            children: "Delete"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 3857,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 3847,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, item_10.id, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 3826,
                                                            columnNumber: 46
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3825,
                                                    columnNumber: 26
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 3812,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-slate-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "Editing:",
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-white",
                                                                        children: selectedPost?.title || "New post"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                                        lineNumber: 3870,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                lineNumber: 3868,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-slate-400",
                                                                children: [
                                                                    "Updated:",
                                                                    " ",
                                                                    selectedPost ? prettyDate(selectedPost.updatedAt) : "-"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                lineNumber: 3874,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-slate-400",
                                                                children: [
                                                                    "Scheduled:",
                                                                    " ",
                                                                    selectedPost ? prettyDate(selectedPost.scheduledAt) : "-"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                lineNumber: 3878,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-slate-400",
                                                                children: [
                                                                    "Autosave:",
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-slate-200",
                                                                        children: autoSaveNotice
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                                        lineNumber: 3884,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                lineNumber: 3882,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                        lineNumber: 3867,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "submit",
                                                                disabled: savingPost,
                                                                className: "rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400 disabled:opacity-50",
                                                                children: savingPost ? "Saving..." : form.id ? "Update Post" : "Create Post"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                lineNumber: 3888,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: deletePost,
                                                                disabled: !form.id || deletingPost,
                                                                className: "rounded-lg border border-red-300/30 px-5 py-2.5 text-sm font-semibold text-red-200 transition hover:border-red-300 hover:text-red-100 disabled:cursor-not-allowed disabled:opacity-50",
                                                                children: deletingPost ? "Deleting..." : "Delete Post"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                lineNumber: 3891,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                        lineNumber: 3887,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                lineNumber: 3866,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 3865,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 3424,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/blog/cms/page.tsx",
                                lineNumber: 3423,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/blog/cms/page.tsx",
                        lineNumber: 3343,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/blog/cms/page.tsx",
                lineNumber: 3314,
                columnNumber: 7
            }, this),
            contextMenu.open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: contextMenuRef,
                className: "fixed z-[70] w-[340px] rounded-xl border border-white/15 bg-slate-900/95 p-2.5 shadow-[0_22px_60px_rgba(2,6,23,0.6)] backdrop-blur",
                style: {
                    left: `${contextMenu.x}px`,
                    top: `${contextMenu.y}px`
                },
                role: "menu",
                "aria-label": "Editor context menu",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "px-1 py-1 text-[10px] uppercase tracking-[0.1em] text-slate-400",
                        children: contextMenu.situation === "text-selected" ? "Text selected" : contextMenu.situation === "image" ? "Image" : "Empty line"
                    }, void 0, false, {
                        fileName: "[project]/app/blog/cms/page.tsx",
                        lineNumber: 3906,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 grid grid-cols-2 gap-1.5",
                        children: contextMenu.items.map((item_11, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onMouseDown: (event_32)=>event_32.preventDefault(),
                                onClick: ()=>runContextCommand(item_11.id),
                                className: "w-full rounded-md border border-transparent px-2 py-2 text-left text-xs text-slate-200 transition hover:border-emerald-300/40 hover:bg-emerald-500/10 hover:text-emerald-200",
                                children: item_11.label
                            }, `${contextMenu.situation}-${item_11.id}-${index_1}`, false, {
                                fileName: "[project]/app/blog/cms/page.tsx",
                                lineNumber: 3910,
                                columnNumber: 58
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/blog/cms/page.tsx",
                        lineNumber: 3909,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/blog/cms/page.tsx",
                lineNumber: 3902,
                columnNumber: 27
            }, this) : null,
            slashMenu.open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: slashMenuRef,
                className: "fixed z-[72] w-[260px] rounded-xl border border-white/15 bg-slate-900/95 p-2 shadow-[0_22px_60px_rgba(2,6,23,0.6)] backdrop-blur",
                style: {
                    left: `${slashMenu.x}px`,
                    top: `${slashMenu.y}px`
                },
                role: "listbox",
                "aria-label": "Slash commands",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "px-2 py-1 text-[10px] uppercase tracking-[0.1em] text-green-500",
                        children: [
                            "Slash Command",
                            slashMenu.query ? `: ${slashMenu.query}` : ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/blog/cms/page.tsx",
                        lineNumber: 3920,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: slashMenuListRef,
                        className: "mt-1 max-h-64 space-y-1 overflow-auto",
                        onWheel: (event_33)=>{
                            if (slashMenu.items.length === 0) return;
                            event_33.preventDefault();
                            const absDelta = Math.abs(event_33.deltaY);
                            if (absDelta < 2) return;
                            shiftSlashActiveIndex(event_33.deltaY > 0 ? 1 : -1);
                        },
                        children: slashMenu.items.map((item_12, index_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: (node_10)=>{
                                    slashItemRefs.current[index_2] = node_10;
                                },
                                type: "button",
                                onMouseDown: (event_34)=>event_34.preventDefault(),
                                onMouseEnter: ()=>setSlashActiveIndex(index_2),
                                onClick: ()=>runSlashCommand(item_12.id),
                                className: `w-full rounded-md border px-2.5 py-2 text-left text-sm transition ${slashMenu.activeIndex === index_2 ? "border-emerald-300/45 bg-emerald-500/15 text-emerald-200" : "border-transparent text-slate-200 hover:border-emerald-300/40 hover:bg-emerald-500/10 hover:text-emerald-200"}`,
                                children: item_12.label
                            }, `slash-${item_12.id}-${index_2}`, false, {
                                fileName: "[project]/app/blog/cms/page.tsx",
                                lineNumber: 3930,
                                columnNumber: 56
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/blog/cms/page.tsx",
                        lineNumber: 3923,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/blog/cms/page.tsx",
                lineNumber: 3916,
                columnNumber: 25
            }, this) : null,
            isImageModalOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-lg rounded-2xl border border-white/15 bg-slate-900 p-5 shadow-[0_30px_80px_rgba(2,6,23,0.55)] sm:p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold text-white",
                            children: replaceImageSrc ? "Replace Image" : "Insert Image"
                        }, void 0, false, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 3940,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xs text-slate-400",
                            children: replaceImageSrc ? "Upload or paste a new image URL to replace the selected one." : "Upload a new image or paste a URL, then add ALT text."
                        }, void 0, false, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 3943,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "my-5 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs text-slate-300",
                                    children: [
                                        "Image URL",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: imageModalUrl,
                                            onChange: (event_35)=>setImageModalUrl(event_35.target.value),
                                            placeholder: "https://example.com/image.jpg",
                                            className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm outline-none focus:border-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 3950,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 3948,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs text-slate-300",
                                    children: [
                                        "Upload Image",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            accept: "image/*",
                                            onChange: (event_36)=>setImageModalFile(event_36.target.files?.[0] ?? null),
                                            className: "mt-1.5 block w-full cursor-pointer rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm text-slate-200 file:mr-3 file:cursor-pointer file:rounded-md file:border-0 file:bg-emerald-500 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-slate-950"
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 3955,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 3953,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs text-slate-300",
                                    children: [
                                        "ALT Text",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: imageModalAlt,
                                            onChange: (event_37)=>setImageModalAlt(event_37.target.value),
                                            placeholder: "Describe the image",
                                            className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm outline-none focus:border-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 3960,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 3958,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs text-slate-300",
                                    children: [
                                        "Figure Caption",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: imageModalCaption,
                                            onChange: (event_38)=>setImageModalCaption(event_38.target.value),
                                            placeholder: "Optional caption shown below image",
                                            className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm outline-none focus:border-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 3965,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 3963,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs text-slate-300",
                                    children: [
                                        "Alignment",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: imageModalAlign,
                                            onChange: (event_39)=>setImageModalAlign(normalizeImageAlign(event_39.target.value)),
                                            className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm outline-none focus:border-emerald-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "left",
                                                    children: "Left"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3971,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "center",
                                                    children: "Center"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3972,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "right",
                                                    children: "Right"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 3973,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 3970,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 3968,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 3947,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 flex flex-wrap justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: closeImageModal,
                                    disabled: insertingImage,
                                    className: "rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/40 disabled:opacity-50",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 3979,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>void insertImageFromModal(),
                                    disabled: insertingImage,
                                    className: "rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400 disabled:opacity-50",
                                    children: insertingImage ? replaceImageSrc ? "Replacing..." : "Inserting..." : replaceImageSrc ? "Replace Image" : "Insert Image"
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 3982,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 3978,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/blog/cms/page.tsx",
                    lineNumber: 3939,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/blog/cms/page.tsx",
                lineNumber: 3938,
                columnNumber: 27
            }, this) : null,
            isFaqModalOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-lg rounded-2xl border border-white/15 bg-slate-900 p-5 shadow-[0_30px_80px_rgba(2,6,23,0.55)] sm:p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold text-white",
                            children: "Insert FAQ"
                        }, void 0, false, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 3991,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xs text-slate-400",
                            children: "Add FAQ question and answer. It will render SEO-friendly FAQ block."
                        }, void 0, false, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 3992,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs text-slate-300",
                                    children: [
                                        "Question",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: faqQuestion,
                                            onChange: (event_40)=>setFaqQuestion(event_40.target.value),
                                            placeholder: "What is your question?",
                                            className: "mt-1 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 4000,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 3998,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs text-slate-300",
                                    children: [
                                        "Answer",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            rows: 4,
                                            value: faqAnswer,
                                            onChange: (event_41)=>setFaqAnswer(event_41.target.value),
                                            placeholder: "Write the FAQ answer...",
                                            className: "mt-1 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 4004,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 4002,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 3997,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 flex flex-wrap justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: closeFaqModal,
                                    className: "rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/40",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 4009,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: insertFaqFromModal,
                                    className: "rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400",
                                    children: "Insert FAQ"
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 4012,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 4008,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/blog/cms/page.tsx",
                    lineNumber: 3990,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/blog/cms/page.tsx",
                lineNumber: 3989,
                columnNumber: 25
            }, this) : null,
            isLinkModalOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md rounded-2xl border border-white/15 bg-slate-900 p-5 shadow-[0_30px_80px_rgba(2,6,23,0.55)] sm:p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold text-white",
                            children: "Insert Link"
                        }, void 0, false, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 4021,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xs text-slate-400",
                            children: "Add URL and click insert. If no text is selected, URL will be inserted as link text."
                        }, void 0, false, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 4022,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "mt-5 block text-xs text-slate-300",
                            children: [
                                "Link URL",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: linkModalUrl,
                                    onChange: (event_42)=>setLinkModalUrl(event_42.target.value),
                                    placeholder: "https://example.com",
                                    className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm outline-none focus:border-emerald-400"
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 4029,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 4027,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                            className: "mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                    className: "text-xs text-slate-300",
                                    children: "Link Type"
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 4032,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 grid gap-2 sm:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 bg-slate-800/40 px-3 py-2 text-xs text-slate-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "link-rel-mode",
                                                    checked: linkRelMode === "dofollow",
                                                    onChange: ()=>setLinkRelMode("dofollow"),
                                                    className: "h-4 w-4 accent-emerald-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4035,
                                                    columnNumber: 19
                                                }, this),
                                                "Dofollow"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 4034,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 bg-slate-800/40 px-3 py-2 text-xs text-slate-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "link-rel-mode",
                                                    checked: linkRelMode === "nofollow",
                                                    onChange: ()=>setLinkRelMode("nofollow"),
                                                    className: "h-4 w-4 accent-emerald-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4039,
                                                    columnNumber: 19
                                                }, this),
                                                "Nofollow"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 4038,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 4033,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 4031,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 flex flex-wrap justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: closeLinkModal,
                                    disabled: insertingLink,
                                    className: "rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/40 disabled:opacity-50",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 4046,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: insertLinkFromModal,
                                    disabled: insertingLink,
                                    className: "rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400 disabled:opacity-50",
                                    children: insertingLink ? "Inserting..." : "Insert Link"
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 4049,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 4045,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/blog/cms/page.tsx",
                    lineNumber: 4020,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/blog/cms/page.tsx",
                lineNumber: 4019,
                columnNumber: 26
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/app/blog/cms/page.tsx",
        lineNumber: 3313,
        columnNumber: 10
    }, this);
}
_s(App, "Pdq5C72if/lvKH2+IhqmMq0RPuk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"]
    ];
});
_c = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0qvxlm9._.js.map