module.exports = [
"[project]/lib/auth-client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    if ("TURBOPACK compile-time truthy", 1) {
        return null;
    }
    //TURBOPACK unreachable
    ;
    const token = undefined;
}
function setAuthToken(token) {
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
    const normalized = undefined;
}
function clearAuthToken() {
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
}
function getAuthEventName() {
    return AUTH_EVENT_NAME;
}
}),
"[project]/app/blog/cms/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/react/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/core/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/starter-kit/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$underline$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-underline/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-link/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$image$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-image/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-table/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth-client.ts [app-ssr] (ecmascript)");
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
const CmsTextAlign = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Extension"].create({
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
const CmsImage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$image$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].extend({
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeAttributes"])(this.options.HTMLAttributes, attrs)
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
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
};
const writeAutoSaveDraft = (draft)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return {
            ok: false,
            message: "Local storage is unavailable."
        };
    }
    //TURBOPACK unreachable
    ;
};
const readAutoSaveDraft = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    const raw = undefined;
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
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
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
    const publisherName = process.env.NEXT_PUBLIC_SITE_NAME?.trim() || "Infobirth";
    const publisherLogoUrl = process.env.NEXT_PUBLIC_SITE_LOGO_URL?.trim() || (siteUrl ? `${siteUrl}/logo.png` : "");
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
    const editorHtmlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(emptyForm(fallbackSettings.authorName).content);
    const isPersistingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastSavedHashRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("");
    const lastCookieHashRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("");
    const hasRestoredDraftRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(emptyForm(fallbackSettings.authorName));
    const persistPostShortcutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // We separate `initialContent` to prevent React from updating the
    // dangerouslySetInnerHTML continuously while typing, which completely fixes the cursor backwards issue.
    const [initialContent, setInitialContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(emptyForm(fallbackSettings.authorName).content);
    const [editorKey, setEditorKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [slugTouched, setSlugTouched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [embedUrl, setEmbedUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [newCategoryName, setNewCategoryName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [faqQuestion, setFaqQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [faqAnswer, setFaqAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isFaqModalOpen, setIsFaqModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tableRows, setTableRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(3);
    const [tableCols, setTableCols] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(3);
    const [isImageModalOpen, setIsImageModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imageModalUrl, setImageModalUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [imageModalAlt, setImageModalAlt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [imageModalCaption, setImageModalCaption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [imageModalAlign, setImageModalAlign] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("center");
    // const [imageModalWidth, setImageModalWidth] = useState(100);
    const [imageModalFile, setImageModalFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [insertingImage, setInsertingImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLinkModalOpen, setIsLinkModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [linkModalUrl, setLinkModalUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [linkRelMode, setLinkRelMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("dofollow");
    const [insertingLink, setInsertingLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const linkSelectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const editorSurfaceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contextMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const slashMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const slashMenuListRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const slashItemRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [replaceImageSrc, setReplaceImageSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [contextImageSrc, setContextImageSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [interactionState, setInteractionState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(emptyEditorInteractionState());
    const [inlineIndicator, setInlineIndicator] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        visible: false,
        x: 0,
        y: 0,
        label: ""
    });
    const [contextMenu, setContextMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        open: false,
        x: 0,
        y: 0,
        situation: null,
        items: []
    });
    const [slashMenu, setSlashMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        open: false,
        x: 0,
        y: 0,
        query: "",
        activeIndex: 0,
        items: [],
        replaceFrom: 0,
        replaceTo: 0
    });
    const [commandPipeline, setCommandPipeline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        "Editor ready.",
        "Selection tracking enabled.",
        "Toolbar/UI sync active."
    ]);
    const [authReady, setAuthReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [authToken, setAuthToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [savingPost, setSavingPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deletingPost, setDeletingPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [savingSettings, setSavingSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [savingCategory, setSavingCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadingMedia, setUploadingMedia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [autoSaveNotice, setAutoSaveNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Idle");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mediaItems, setMediaItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingComments, setLoadingComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [commentActionId, setCommentActionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(fallbackSettings);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(emptyForm(fallbackSettings.authorName));
    const closeContextMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setContextImageSrc(null);
        setContextMenu({
            open: false,
            x: 0,
            y: 0,
            situation: null,
            items: []
        });
    }, []);
    const closeSlashMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setSlashMenu((prev)=>prev.open ? {
                open: false,
                x: 0,
                y: 0,
                query: "",
                activeIndex: 0,
                items: [],
                replaceFrom: 0,
                replaceTo: 0
            } : prev);
    }, []);
    const setSlashActiveIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((index)=>{
        setSlashMenu((prev)=>{
            if (!prev.open || prev.items.length === 0) return prev;
            const bounded = Math.max(0, Math.min(index, prev.items.length - 1));
            if (bounded === prev.activeIndex) return prev;
            return {
                ...prev,
                activeIndex: bounded
            };
        });
    }, []);
    const shiftSlashActiveIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((direction)=>{
        setSlashMenu((prev)=>{
            if (!prev.open || prev.items.length === 0) return prev;
            const nextIndex = (prev.activeIndex + direction + prev.items.length) % prev.items.length;
            if (nextIndex === prev.activeIndex) return prev;
            return {
                ...prev,
                activeIndex: nextIndex
            };
        });
    }, []);
    const updatePipeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((steps)=>{
        setCommandPipeline(steps);
    }, []);
    const toSmartPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((rawX, rawY, width, height)=>{
        if ("TURBOPACK compile-time truthy", 1) {
            return {
                x: rawX,
                y: rawY
            };
        }
        //TURBOPACK unreachable
        ;
        const margin = undefined;
        const maxX = undefined;
        const maxY = undefined;
    }, []);
    const syncInteractionState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((editor)=>{
        if (!editor) {
            setInteractionState(emptyEditorInteractionState());
            setInlineIndicator((prev)=>prev.visible ? {
                    visible: false,
                    x: 0,
                    y: 0,
                    label: ""
                } : prev);
            return;
        }
        const { from, to } = editor.state.selection;
        const hasTextSelection = from !== to;
        const selectedText = hasTextSelection ? editor.state.doc.textBetween(from, to, " ").trim() : "";
        const selectionEl = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
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
        if ("TURBOPACK compile-time truthy", 1) {
            setInlineIndicator((prev)=>prev.visible ? {
                    visible: false,
                    x: 0,
                    y: 0,
                    label: ""
                } : prev);
            return;
        }
        //TURBOPACK unreachable
        ;
        const selection = undefined;
        const range = undefined;
        const rect = undefined;
        const editorRect = undefined;
        const indicatorX = undefined;
        const indicatorY = undefined;
    }, []);
    const updateSlashMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((editor)=>{
        if (!editor || !editor.isFocused) {
            closeSlashMenu();
            return;
        }
        const { from, to, $from } = editor.state.selection;
        if (from !== to) {
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
        const filtered = slashCommandCatalog.filter((item)=>{
            if (!query) return true;
            const q = query.trim();
            return item.label.toLowerCase().includes(q) || item.keyword.includes(q);
        }).map((item)=>({
                id: item.id,
                label: item.label
            }));
        if (filtered.length === 0) {
            closeSlashMenu();
            return;
        }
        let x = 24;
        let y = 24;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const positioned = toSmartPosition(x, y, 260, Math.min(filtered.length, 7) * 36 + 22);
        const token = textBefore.slice(slashIndex);
        const replaceFrom = from - token.length;
        const replaceTo = from;
        setSlashMenu((prev)=>({
                open: true,
                x: positioned.x,
                y: positioned.y,
                query,
                activeIndex: Math.min(prev.activeIndex, filtered.length - 1),
                items: filtered,
                replaceFrom,
                replaceTo
            }));
    }, [
        closeSlashMenu,
        toSmartPosition
    ]);
    const tiptapEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"])({
        extensions: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].configure({
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$underline$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
            CmsTextAlign,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].configure({
                openOnClick: false
            }),
            CmsImage.configure({
                inline: false,
                allowBase64: true
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].configure({
                resizable: true
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"]
        ],
        content: initialContent,
        editorProps: {
            attributes: {
                class: "min-h-[150px] text-left text-sm leading-7 text-slate-100 outline-none ltr prose prose-invert max-w-none prose-headings:text-white prose-a:text-emerald-300 prose-p:text-slate-200 prose-blockquote:border-emerald-300 prose-pre:bg-slate-950 [&_table]:my-4 [&_table]:w-full [&_table]:border-collapse [&_table]:overflow-hidden [&_table]:rounded-lg [&_table]:border [&_table]:border-slate-500/60 [&_th]:border [&_th]:border-slate-500/60 [&_th]:bg-slate-800 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:text-slate-100 [&_td]:border [&_td]:border-slate-500/60 [&_td]:bg-slate-900/55 [&_td]:px-3 [&_td]:py-2 [&_td]:text-slate-200 [&_.selectedCell]:bg-emerald-500/20"
            }
        },
        onUpdate: ({ editor })=>{
            const html = editor.getHTML();
            editorHtmlRef.current = html;
            setForm((prev)=>prev.content === html ? prev : {
                    ...prev,
                    content: html
                });
            syncInteractionState(editor);
            updateSlashMenu(editor);
        },
        onSelectionUpdate: ({ editor })=>{
            syncInteractionState(editor);
            updateSlashMenu(editor);
        },
        onFocus: ({ editor })=>{
            syncInteractionState(editor);
            updateSlashMenu(editor);
        },
        onBlur: ({ editor })=>{
            syncInteractionState(editor);
            closeContextMenu();
            closeSlashMenu();
        },
        immediatelyRender: false
    });
    const getCurrentEditorHtml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        return tiptapEditor?.getHTML() || editorHtmlRef.current || form.content;
    }, [
        form.content,
        tiptapEditor
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!tiptapEditor) return;
        const next = sanitizeEditorHtml(initialContent);
        if (tiptapEditor.getHTML() === next) return;
        tiptapEditor.commands.setContent(next);
        editorHtmlRef.current = next;
        syncInteractionState(tiptapEditor);
    }, [
        initialContent,
        syncInteractionState,
        tiptapEditor
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!tiptapEditor) return;
        syncInteractionState(tiptapEditor);
        updateSlashMenu(tiptapEditor);
    }, [
        syncInteractionState,
        tiptapEditor,
        updateSlashMenu
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!interactionState.hasTextSelection) return;
        updatePipeline([
            "Selection change detected.",
            `Node type detected: ${interactionState.nodeType.toUpperCase()}.`,
            "Top toolbar active state updated.",
            "Inline indicator rendered."
        ]);
    }, [
        interactionState.hasTextSelection,
        interactionState.nodeType,
        updatePipeline
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!contextMenu.open) return;
        const menuEl = contextMenuRef.current;
        if (!menuEl) return;
        const rect = menuEl.getBoundingClientRect();
        const positioned = toSmartPosition(contextMenu.x, contextMenu.y, rect.width, rect.height);
        if (positioned.x !== contextMenu.x || positioned.y !== contextMenu.y) {
            setContextMenu((prev)=>({
                    ...prev,
                    x: positioned.x,
                    y: positioned.y
                }));
        }
    }, [
        contextMenu.open,
        contextMenu.x,
        contextMenu.y,
        toSmartPosition
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!slashMenu.open) return;
        const menuEl = slashMenuRef.current;
        if (!menuEl) return;
        const rect = menuEl.getBoundingClientRect();
        const positioned = toSmartPosition(slashMenu.x, slashMenu.y, rect.width, rect.height);
        if (positioned.x !== slashMenu.x || positioned.y !== slashMenu.y) {
            setSlashMenu((prev)=>({
                    ...prev,
                    x: positioned.x,
                    y: positioned.y
                }));
        }
    }, [
        slashMenu.open,
        slashMenu.x,
        slashMenu.y,
        toSmartPosition
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!slashMenu.open || slashMenu.items.length === 0) return;
        const activeItem = slashItemRefs.current[slashMenu.activeIndex];
        if (!activeItem) return;
        activeItem.scrollIntoView({
            block: "nearest"
        });
    }, [
        slashMenu.activeIndex,
        slashMenu.items.length,
        slashMenu.open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!contextMenu.open && !slashMenu.open) return;
        const onPointerDown = (event)=>{
            const target = event.target;
            if (target && (contextMenuRef.current?.contains(target) || slashMenuRef.current?.contains(target))) {
                return;
            }
            closeContextMenu();
            closeSlashMenu();
        };
        const onWindowResize = ()=>{
            closeContextMenu();
            closeSlashMenu();
        };
        const onWindowScroll = ()=>{
            closeContextMenu();
            closeSlashMenu();
        };
        window.addEventListener("mousedown", onPointerDown);
        window.addEventListener("resize", onWindowResize);
        window.addEventListener("scroll", onWindowScroll, true);
        return ()=>{
            window.removeEventListener("mousedown", onPointerDown);
            window.removeEventListener("resize", onWindowResize);
            window.removeEventListener("scroll", onWindowScroll, true);
        };
    }, [
        closeContextMenu,
        closeSlashMenu,
        contextMenu.open,
        slashMenu.open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let isMounted = true;
        const syncAuthFromStorage = ()=>{
            const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthToken"])();
            if (!isMounted) return;
            setAuthToken(token);
            setAuthReady(true);
            if (!token) {
                setLoading(false);
            }
        };
        syncAuthFromStorage();
        const authEventName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthEventName"])();
        window.addEventListener(authEventName, syncAuthFromStorage);
        window.addEventListener("storage", syncAuthFromStorage);
        return ()=>{
            isMounted = false;
            window.removeEventListener(authEventName, syncAuthFromStorage);
            window.removeEventListener("storage", syncAuthFromStorage);
        };
    }, []);
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (url, init, authRequired = false)=>{
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
    }, [
        authToken
    ]);
    const hydrateFromPost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((post)=>{
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
        setEditorKey((n)=>n + 1);
    }, []);
    const resetToNew = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((authorName = settings.authorName)=>{
        const empty = emptyForm(authorName);
        setForm(empty);
        setInitialContent(empty.content); // Provide stable initial content to div
        editorHtmlRef.current = empty.content;
        lastSavedHashRef.current = "";
        lastCookieHashRef.current = "";
        setAutoSaveNotice("Idle");
        setSlugTouched(false);
        setEditorKey((n)=>n + 1);
    }, [
        settings.authorName
    ]);
    const loadData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setLoading(true);
        setError("");
        try {
            const [postsData, catsData, mediaData, settingsData] = await Promise.all([
                api("/api/blog/posts?scope=all", undefined, true).catch(()=>({
                        posts: []
                    })),
                api("/api/blog/categories").catch(()=>({
                        categories: []
                    })),
                api("/api/blog/media").catch(()=>({
                        media: []
                    })),
                api("/api/blog/settings").catch(()=>({
                        settings: fallbackSettings
                    }))
            ]);
            const sorted = [
                ...postsData.posts || []
            ].sort((a, b)=>new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
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
    }, [
        api,
        hydrateFromPost,
        resetToNew
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!authReady) return;
        void loadData();
    }, [
        authReady,
        loadData
    ]);
    const selectedPost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>posts.find((item)=>item.id === form.id) || null, [
        posts,
        form.id
    ]);
    const anchorPreviewLinks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>anchorLinksFromHtml(form.content || ""), [
        form.content
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!form.title.trim()) return;
        const safeContent = sanitizeEditorHtmlForSave(form.content || "");
        const slug = form.slug.trim() || slugify(form.title);
        const generated = autoSchemaJsonLd({
            title: form.title.trim(),
            slug,
            content: safeContent,
            featuredImageUrl: form.featuredImageUrl.trim(),
            categories: form.categories,
            tags: tagList(form.tagsInput),
            authorName: form.authorName.trim() || settings.authorName,
            seo: {
                metaTitle: form.metaTitle.trim() || form.title.trim(),
                metaDescription: form.metaDescription.trim() || textFromHtml(safeContent).slice(0, 180),
                ogImage: form.ogImage.trim() || form.featuredImageUrl.trim(),
                canonicalUrl: form.canonicalUrl.trim(),
                keywords: tagList(form.seoKeywordsInput)
            }
        });
        const resolved = resolveSchemaJsonLdForContent({
            currentSchemaJsonLd: form.schemaJsonLd,
            generatedSchemaJsonLd: generated,
            content: safeContent
        });
        if (form.schemaJsonLd.trim() === resolved.trim()) {
            return;
        }
        setForm((prev)=>{
            const prevSafeContent = sanitizeEditorHtmlForSave(prev.content || "");
            const prevGenerated = autoSchemaJsonLd({
                title: prev.title.trim(),
                slug: prev.slug.trim() || slugify(prev.title),
                content: prevSafeContent,
                featuredImageUrl: prev.featuredImageUrl.trim(),
                categories: prev.categories,
                tags: tagList(prev.tagsInput),
                authorName: prev.authorName.trim() || settings.authorName,
                seo: {
                    metaTitle: prev.metaTitle.trim() || prev.title.trim(),
                    metaDescription: prev.metaDescription.trim() || textFromHtml(prevSafeContent).slice(0, 180),
                    ogImage: prev.ogImage.trim() || prev.featuredImageUrl.trim(),
                    canonicalUrl: prev.canonicalUrl.trim(),
                    keywords: tagList(prev.seoKeywordsInput)
                }
            });
            const prevResolved = resolveSchemaJsonLdForContent({
                currentSchemaJsonLd: prev.schemaJsonLd,
                generatedSchemaJsonLd: prevGenerated,
                content: prevSafeContent
            });
            if (prev.schemaJsonLd.trim() === prevResolved.trim()) return prev;
            return {
                ...prev,
                schemaJsonLd: prevResolved
            };
        });
    }, [
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
    const buildPostPayload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((forAutoSave = false)=>{
        const finalContent = getCurrentEditorHtml();
        const safeContent = sanitizeEditorHtmlForSave(finalContent);
        const nextStatus = forAutoSave && !form.id ? "draft" : form.status;
        const slug = form.slug.trim() || slugify(form.title);
        const seoDraft = {
            metaTitle: form.metaTitle.trim() || form.title.trim(),
            metaDescription: form.metaDescription.trim() || textFromHtml(safeContent).slice(0, 180),
            ogImage: form.ogImage.trim() || form.featuredImageUrl.trim(),
            canonicalUrl: form.canonicalUrl.trim(),
            keywords: tagList(form.seoKeywordsInput)
        };
        const generatedSchema = autoSchemaJsonLd({
            title: form.title.trim(),
            slug,
            content: safeContent,
            featuredImageUrl: form.featuredImageUrl.trim(),
            categories: form.categories,
            tags: tagList(form.tagsInput),
            authorName: form.authorName.trim() || settings.authorName,
            seo: seoDraft
        });
        const schemaJsonLd = resolveSchemaJsonLdForContent({
            currentSchemaJsonLd: form.schemaJsonLd,
            generatedSchemaJsonLd: generatedSchema,
            content: safeContent
        });
        return {
            title: form.title.trim(),
            slug,
            content: safeContent,
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
    }, [
        form,
        getCurrentEditorHtml,
        settings.authorName
    ]);
    const loadComments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (slug)=>{
        if (!slug || !authToken) {
            setComments([]);
            return;
        }
        setLoadingComments(true);
        try {
            const data = await api(`/api/blog/comments?slug=${encodeURIComponent(slug)}&scope=all`, undefined, true);
            setComments(data.comments || []);
        } catch  {
            setComments([]);
        } finally{
            setLoadingComments(false);
        }
    }, [
        api,
        authToken
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!form.id || !form.slug) {
            setComments([]);
            return;
        }
        void loadComments(form.slug);
    }, [
        form.id,
        form.slug,
        loadComments
    ]);
    const commentDepth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const byId = new Map(comments.map((item)=>[
                item.id,
                item
            ]));
        const depthMap = new Map();
        comments.forEach((item)=>{
            let depth = 0;
            let parentId = item.parentId;
            while(parentId && depth < 5){
                const parent = byId.get(parentId);
                if (!parent) break;
                depth += 1;
                parentId = parent.parentId;
            }
            depthMap.set(item.id, depth);
        });
        return depthMap;
    }, [
        comments
    ]);
    const execEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((command, value)=>{
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
    }, [
        tiptapEditor
    ]);
    const insertEditorHtml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((html)=>{
        if (!html || !tiptapEditor) return false;
        const inserted = tiptapEditor.chain().focus().insertContent(html).run();
        if (!inserted) {
            tiptapEditor.commands.setContent(`${tiptapEditor.getHTML()}${html}`);
        }
        return true;
    }, [
        tiptapEditor
    ]);
    const applyHeading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((level)=>{
        execEditor("formatBlock", `<h${level}>`);
    }, [
        execEditor
    ]);
    const toolbarButtonClass = (active = false)=>`rounded-md border px-3 py-1.5 text-xs font-semibold transition ${active ? "border-emerald-400 bg-emerald-500/15 text-emerald-200" : "border-white/20 text-slate-100 hover:border-emerald-300 hover:text-emerald-300"}`;
    const preserveSelectionOnToolbarMouseDown = (event)=>{
        const target = event.target;
        if (!target.closest("button")) return;
        event.preventDefault();
        tiptapEditor?.commands.focus();
    };
    const deleteMediaById = async (id)=>{
        await api(`/api/blog/media?id=${encodeURIComponent(id)}`, {
            method: "DELETE"
        }, true);
        setMediaItems((prev)=>prev.filter((item)=>item.id !== id));
    };
    const handleEditorClick = async (e)=>{
        closeContextMenu();
        const target = e.target;
        if (target.dataset.type === "delete-image" && tiptapEditor) {
            e.preventDefault();
            e.stopPropagation();
            const wrapper = target.closest(".editor-image-wrapper");
            if (!wrapper) return;
            const img = wrapper.querySelector("img");
            const mediaId = img?.getAttribute("data-media-id") || mediaItems.find((m)=>m.url === img?.getAttribute("src"))?.id || null;
            const current = tiptapEditor.getHTML();
            const template = document.createElement("template");
            template.innerHTML = current;
            const src = img?.getAttribute("src");
            const candidates = Array.from(template.content.querySelectorAll(".editor-image-wrapper"));
            const match = candidates.find((node)=>node.querySelector("img")?.getAttribute("src") === src) || null;
            if (match) {
                match.remove();
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
    const persistPost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
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
            const data = await api(endpoint, {
                method,
                body: JSON.stringify(payload)
            }, true);
            if (!data.post) throw new Error("No post returned by API.");
            setPosts((prev)=>{
                const next = prev.filter((p)=>p.id !== data.post.id);
                next.unshift(data.post);
                return next.sort((a, b)=>new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
            });
            hydrateFromPost(data.post);
            lastSavedHashRef.current = JSON.stringify(payload);
            lastCookieHashRef.current = lastSavedHashRef.current;
            clearAutoSaveDraft();
            setNotice(form.id ? "Post updated." : "Post created.");
            setAutoSaveNotice("Saved to server");
        } catch (e) {
            const message = e instanceof Error ? e.message : "Failed to save post.";
            setError(message);
        } finally{
            isPersistingRef.current = false;
            setSavingPost(false);
        }
    }, [
        api,
        buildPostPayload,
        form.id,
        hydrateFromPost
    ]);
    const savePost = async (event)=>{
        event.preventDefault();
        await persistPost();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        persistPostShortcutRef.current = persistPost;
    }, [
        persistPost
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        setEditorKey((n)=>n + 1);
        lastCookieHashRef.current = draft.hash || JSON.stringify(restored);
        setAutoSaveNotice("Recovered from local storage");
        setNotice("Recovered unsaved draft from local storage autosave.");
    }, [
        authToken,
        loading,
        settings.authorName
    ]);
    // Keep formRef in sync with form state to avoid effect dependency issues
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        formRef.current = form;
    }, [
        form
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, [
        authToken,
        loading,
        tiptapEditor
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!authToken || loading) return;
        const interval = window.setInterval(()=>{
            const content = tiptapEditor?.getHTML() || editorHtmlRef.current || formRef.current.content;
            const plain = sanitizeEditorHtmlForSave(content).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
            const hasMeaningfulContent = formRef.current.title.trim().length > 0 || plain.length > 0 && plain !== "Start writing your post...";
            if (!hasMeaningfulContent) {
                setAutoSaveNotice("Idle");
                return;
            }
            const draftForm = {
                ...formRef.current,
                content
            };
            const hash = JSON.stringify(draftForm);
            if (hash === lastCookieHashRef.current) {
                setAutoSaveNotice("Saved in local storage");
                return;
            }
            const result = writeAutoSaveDraft({
                savedAt: new Date().toISOString(),
                hash,
                form: draftForm
            });
            if (!result.ok) {
                setAutoSaveNotice(result.message);
                return;
            }
            lastCookieHashRef.current = hash;
            setAutoSaveNotice("Saved in local storage");
        }, 5000);
        return ()=>window.clearInterval(interval);
    }, [
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
            setPosts((prev)=>prev.filter((p)=>p.id !== form.id));
            clearAutoSaveDraft();
            lastCookieHashRef.current = "";
            resetToNew(settings.authorName || fallbackSettings.authorName);
            setNotice("Post deleted.");
        } catch (e) {
            setError(e instanceof Error ? e.message : "Failed to delete post.");
        } finally{
            setDeletingPost(false);
        }
    };
    const updateCommentStatus = async (id, status, moderationReason = "")=>{
        if (!form.slug) return;
        setCommentActionId(id);
        setError("");
        try {
            await api(`/api/blog/comments/${id}`, {
                method: "PATCH",
                body: JSON.stringify({
                    status,
                    moderationReason
                })
            }, true);
            await loadComments(form.slug);
            setNotice(`Comment marked as ${status}.`);
        } catch (e) {
            setError(e instanceof Error ? e.message : "Failed to update comment.");
        } finally{
            setCommentActionId("");
        }
    };
    const removeComment = async (id)=>{
        if (!form.slug) return;
        if (!window.confirm("Delete this comment and its replies?")) return;
        setCommentActionId(id);
        setError("");
        try {
            await api(`/api/blog/comments/${id}`, {
                method: "DELETE"
            }, true);
            await loadComments(form.slug);
            setNotice("Comment deleted.");
        } catch (e) {
            setError(e instanceof Error ? e.message : "Failed to delete comment.");
        } finally{
            setCommentActionId("");
        }
    };
    const saveSettings = async ()=>{
        setSavingSettings(true);
        setError("");
        setNotice("");
        try {
            const data = await api("/api/blog/settings", {
                method: "PATCH",
                body: JSON.stringify(settings)
            }, true);
            const next = data.settings || settings;
            setSettings(next);
            setForm((prev)=>({
                    ...prev,
                    authorName: prev.authorName || next.authorName
                }));
            setNotice("Settings saved.");
        } catch (e) {
            setError(e instanceof Error ? e.message : "Failed to save settings.");
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
            const data = await api("/api/blog/categories", {
                method: "POST",
                body: JSON.stringify({
                    name
                })
            }, true);
            setCategories(data.categories || []);
            setNewCategoryName("");
            setNotice("Category saved.");
        } catch (e) {
            setError(e instanceof Error ? e.message : "Failed to create category.");
        } finally{
            setSavingCategory(false);
        }
    };
    const removeCategory = async (slug)=>{
        setError("");
        setNotice("");
        try {
            const data = await api(`/api/blog/categories?slug=${encodeURIComponent(slug)}`, {
                method: "DELETE"
            }, true);
            setCategories(data.categories || []);
            const keep = new Set((data.categories || []).map((c)=>c.name));
            setForm((prev)=>({
                    ...prev,
                    categories: prev.categories.filter((name)=>keep.has(name))
                }));
            setNotice("Category deleted.");
        } catch (e) {
            setError(e instanceof Error ? e.message : "Failed to delete category.");
        }
    };
    const toggleCategory = (name)=>{
        setForm((prev)=>({
                ...prev,
                categories: prev.categories.includes(name) ? prev.categories.filter((x)=>x !== name) : [
                    ...prev.categories,
                    name
                ]
            }));
    };
    const uploadMediaFile = async (file)=>{
        const optimized = await optimizeImage(file);
        const body = new FormData();
        body.append("file", optimized.file);
        body.append("width", String(optimized.width));
        body.append("height", String(optimized.height));
        const data = await api("/api/blog/media", {
            method: "POST",
            body
        }, true);
        if (!data.media) throw new Error("Upload did not return media item.");
        return {
            media: data.media,
            originalBytes: file.size
        };
    };
    const uploadMedia = async (file)=>{
        setUploadingMedia(true);
        setError("");
        setNotice("");
        try {
            const uploaded = await uploadMediaFile(file);
            setMediaItems((prev)=>[
                    uploaded.media,
                    ...prev
                ]);
            setNotice(`Image uploaded (${bytes(uploaded.originalBytes)} -> ${bytes(uploaded.media.size)}).`);
        } catch (e) {
            setError(e instanceof Error ? e.message : "Failed to upload image.");
        } finally{
            setUploadingMedia(false);
        }
    };
    const addEmbed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const html = embedHtml(embedUrl);
        if (!html) {
            setError("Please enter a valid embed URL.");
            return;
        }
        setError("");
        insertEditorHtml(html);
        setEmbedUrl("");
    }, [
        embedUrl,
        insertEditorHtml
    ]);
    const insertFaqBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((questionInput, answerInput)=>{
        const rawQuestion = questionInput?.trim() || "FAQ Question";
        const question = /\?\s*$/.test(rawQuestion) ? rawQuestion : `${rawQuestion}?`;
        const answer = answerInput?.trim() || "FAQ answer goes here.";
        setError("");
        const inserted = insertEditorHtml(faqHtml(question, answer));
        if (!inserted) {
            setError("Could not insert FAQ block. Click inside editor and try again.");
            return false;
        }
        return true;
    }, [
        insertEditorHtml
    ]);
    const insertTableBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setError("");
        if (!tiptapEditor) return;
        const rows = Math.min(10, Math.max(1, tableRows));
        const cols = Math.min(8, Math.max(1, tableCols));
        const inserted = tiptapEditor.chain().focus().insertTable({
            rows,
            cols,
            withHeaderRow: true
        }).run();
        if (!inserted) {
            insertEditorHtml(tableHtml(rows, cols));
        }
    }, [
        insertEditorHtml,
        tableCols,
        tableRows,
        tiptapEditor
    ]);
    const insertNewBlogSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!tiptapEditor) return false;
        setError("");
        closeContextMenu();
        closeSlashMenu();
        const inserted = tiptapEditor.chain().focus().insertContent(`<h2>${escapeHtml(NEW_BLOG_SECTION_PROMPT)}</h2><p></p>`).run();
        if (!inserted) {
            setError("Could not insert a new blog section. Click inside editor and try again.");
            return false;
        }
        const setPromptSelection = ()=>{
            if (!tiptapEditor) return;
            const marker = NEW_BLOG_SECTION_PROMPT.trim().toLowerCase();
            let from = 0;
            let to = 0;
            tiptapEditor.state.doc.descendants((node, pos)=>{
                if (node.type.name !== "heading") return;
                const text = node.textContent.trim().toLowerCase();
                if (text !== marker) return;
                from = pos + 1;
                to = pos + node.nodeSize - 1;
            });
            if (from < to) {
                tiptapEditor.chain().focus().setTextSelection({
                    from,
                    to
                }).run();
            }
        };
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            setPromptSelection();
        }
        setNotice("New blog section inserted. Start typing to replace prompt text.");
        return true;
    }, [
        closeContextMenu,
        closeSlashMenu,
        tiptapEditor
    ]);
    const getImageMetaBySrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((targetSrc)=>{
        if (!tiptapEditor || !targetSrc.trim()) return null;
        const template = document.createElement("template");
        template.innerHTML = tiptapEditor.getHTML();
        const images = Array.from(template.content.querySelectorAll("img"));
        const node = images.find((img)=>(img.getAttribute("src") || "").trim() === targetSrc.trim()) || null;
        if (!node) return null;
        return {
            src: (node.getAttribute("src") || "").trim(),
            alt: (node.getAttribute("alt") || "").trim(),
            mediaId: (node.getAttribute("data-media-id") || "").trim() || null,
            caption: (node.getAttribute("data-caption") || "").trim(),
            align: imageAlignFromNode(node),
            widthPercent: imageWidthFromStyle(node.getAttribute("style"))
        };
    }, [
        tiptapEditor
    ]);
    const updateImageBySrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((targetSrc, updater)=>{
        if (!tiptapEditor || !targetSrc.trim()) return false;
        const template = document.createElement("template");
        template.innerHTML = tiptapEditor.getHTML();
        const images = Array.from(template.content.querySelectorAll("img"));
        const node = images.find((img)=>(img.getAttribute("src") || "").trim() === targetSrc.trim()) || null;
        if (!node) return false;
        updater(node);
        tiptapEditor.commands.setContent(template.innerHTML || "<p></p>");
        return true;
    }, [
        tiptapEditor
    ]);
    const applyImageLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((node, align, widthPercent)=>{
        const safeAlign = normalizeImageAlign(align);
        const safeWidth = clampImageWidth(widthPercent);
        node.setAttribute("data-align", safeAlign);
        node.setAttribute("style", imageStyleFromLayout(safeWidth, safeAlign));
    }, []);
    const insertImageNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((url, altText, options = {})=>{
        if (!url.trim()) return false;
        const align = normalizeImageAlign(options.align || "center");
        const widthPercent = clampImageWidth(options.widthPercent ?? 100);
        return insertEditorHtml(imageHtml(url.trim(), altText.trim() || "blog image", options.mediaId || null, options.caption || "", align, widthPercent));
    }, [
        insertEditorHtml
    ]);
    const generateSchemaFromCurrentContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const safeContent = sanitizeEditorHtmlForSave(getCurrentEditorHtml());
        const slug = form.slug.trim() || slugify(form.title);
        const generated = autoSchemaJsonLd({
            title: form.title.trim(),
            slug,
            content: safeContent,
            featuredImageUrl: form.featuredImageUrl.trim(),
            categories: form.categories,
            tags: tagList(form.tagsInput),
            authorName: form.authorName.trim() || settings.authorName,
            seo: {
                metaTitle: form.metaTitle.trim() || form.title.trim(),
                metaDescription: form.metaDescription.trim() || textFromHtml(safeContent).slice(0, 200),
                ogImage: form.ogImage.trim() || form.featuredImageUrl.trim(),
                canonicalUrl: form.canonicalUrl.trim(),
                keywords: tagList(form.seoKeywordsInput)
            }
        });
        const resolved = resolveSchemaJsonLdForContent({
            currentSchemaJsonLd: form.schemaJsonLd,
            generatedSchemaJsonLd: generated,
            content: safeContent
        });
        setForm((prev)=>({
                ...prev,
                schemaJsonLd: resolved,
                metaDescription: prev.metaDescription.trim() || textFromHtml(safeContent).slice(0, 180)
            }));
        setNotice("Schema JSON-LD auto-generated.");
    }, [
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
    const replaceImageInEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((targetSrc, nextSrc, altText, options = {})=>{
        if (!targetSrc.trim() || !nextSrc.trim()) return false;
        const current = getImageMetaBySrc(targetSrc);
        const align = normalizeImageAlign(options.align || current?.align || "center");
        const widthPercent = clampImageWidth(options.widthPercent ?? current?.widthPercent ?? 100);
        return updateImageBySrc(targetSrc, (node)=>{
            node.setAttribute("src", nextSrc.trim());
            node.setAttribute("alt", altText.trim() || "blog image");
            node.setAttribute("title", altText.trim() || "blog image");
            const caption = (options.caption ?? current?.caption ?? "").trim();
            if (caption) {
                node.setAttribute("data-caption", caption);
            } else {
                node.removeAttribute("data-caption");
            }
            const mediaId = (options.mediaId ?? current?.mediaId ?? "").trim();
            if (mediaId) {
                node.setAttribute("data-media-id", mediaId);
            } else {
                node.removeAttribute("data-media-id");
            }
            applyImageLayout(node, align, widthPercent);
        });
    }, [
        applyImageLayout,
        getImageMetaBySrc,
        updateImageBySrc
    ]);
    const resizeImageInEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((targetSrc)=>{
        if (!targetSrc.trim()) return false;
        const current = getImageMetaBySrc(targetSrc);
        const currentWidth = current?.widthPercent ?? 100;
        const align = current?.align || "center";
        const nextWidth = currentWidth >= 100 ? 80 : currentWidth >= 80 ? 60 : 100;
        const resized = updateImageBySrc(targetSrc, (node)=>{
            applyImageLayout(node, align, nextWidth);
        });
        if (!resized) return false;
        setNotice(`Image resized to ${nextWidth}% width.`);
        return true;
    }, [
        applyImageLayout,
        getImageMetaBySrc,
        updateImageBySrc
    ]);
    const alignImageInEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((targetSrc, align)=>{
        if (!targetSrc.trim()) return false;
        const current = getImageMetaBySrc(targetSrc);
        const widthPercent = current?.widthPercent ?? 100;
        const changed = updateImageBySrc(targetSrc, (node)=>{
            applyImageLayout(node, align, widthPercent);
        });
        if (!changed) return false;
        setNotice(`Image aligned ${align}.`);
        return true;
    }, [
        applyImageLayout,
        getImageMetaBySrc,
        updateImageBySrc
    ]);
    const setImageCaptionInEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((targetSrc, caption)=>{
        if (!targetSrc.trim()) return false;
        const changed = updateImageBySrc(targetSrc, (node)=>{
            const safeCaption = caption.trim();
            if (safeCaption) {
                node.setAttribute("data-caption", safeCaption);
            } else {
                node.removeAttribute("data-caption");
            }
        });
        if (!changed) return false;
        setNotice(caption.trim() ? "Image caption updated." : "Image caption removed.");
        return true;
    }, [
        updateImageBySrc
    ]);
    const setTextAlignInEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((align)=>{
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
        let changed = false;
        if (alignableTypeSet.has(currentType)) {
            changed = tiptapEditor.chain().focus().updateAttributes(currentType, {
                textAlign: align
            }).run();
        }
        if (!changed) {
            for (const type of alignableTypeSet){
                const ok = tiptapEditor.chain().focus().updateAttributes(type, {
                    textAlign: align
                }).run();
                if (ok) {
                    changed = true;
                    break;
                }
            }
        }
        if (!changed) return false;
        setNotice(`Text aligned ${align}.`);
        return true;
    }, [
        tiptapEditor
    ]);
    const getActiveImageSource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (contextImageSrc?.trim()) return contextImageSrc.trim();
        if (!tiptapEditor) return "";
        const { from, to } = tiptapEditor.state.selection;
        let srcFromDoc = "";
        tiptapEditor.state.doc.nodesBetween(from, to, (node)=>{
            if (srcFromDoc || node.type.name !== "image") return;
            const src = String(node.attrs?.src || "").trim();
            if (src) {
                srcFromDoc = src;
            }
        });
        if (srcFromDoc) return srcFromDoc;
        if ("TURBOPACK compile-time truthy", 1) return "";
        //TURBOPACK unreachable
        ;
        const selection = undefined;
        const anchorNode = undefined;
        const anchorElement = undefined;
        const image = undefined;
    }, [
        contextImageSrc,
        tiptapEditor
    ]);
    const openImageModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
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
    }, [
        closeContextMenu,
        closeSlashMenu,
        form.imageAltText,
        form.title
    ]);
    const openFaqModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        closeContextMenu();
        closeSlashMenu();
        setError("");
        setFaqQuestion("");
        setFaqAnswer("");
        setIsFaqModalOpen(true);
    }, [
        closeContextMenu,
        closeSlashMenu
    ]);
    const openLinkModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!tiptapEditor) return;
        closeContextMenu();
        closeSlashMenu();
        setError("");
        const { from, to } = tiptapEditor.state.selection;
        linkSelectionRef.current = {
            from,
            to
        };
        const linkAttrs = tiptapEditor.getAttributes("link") || {};
        const activeHref = linkAttrs.href || "";
        const activeRel = String(linkAttrs.rel || "");
        setLinkModalUrl(String(activeHref));
        setLinkRelMode(/\bnofollow\b/i.test(activeRel) ? "nofollow" : "dofollow");
        setIsLinkModalOpen(true);
    }, [
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
        const question = faqQuestion.trim();
        const answer = faqAnswer.trim();
        if (!question || !answer) {
            setError("FAQ question and answer are required.");
            return;
        }
        const normalizedQuestion = /\?\s*$/.test(question) ? question : `${question}?`;
        const inserted = insertFaqBlock(normalizedQuestion, answer);
        if (!inserted) return;
        setFaqQuestion("");
        setFaqAnswer("");
        setIsFaqModalOpen(false);
        setNotice("FAQ inserted.");
        if ("TURBOPACK compile-time truthy", 1) {
            generateSchemaFromCurrentContent();
            return;
        }
        //TURBOPACK unreachable
        ;
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
            const caption = imageModalCaption.trim();
            const align = normalizeImageAlign(imageModalAlign);
            // const widthPercent = clampImageWidth(imageModalWidth);
            const altText = (imageModalAlt.trim() || form.imageAltText || form.title || "blog image").trim();
            if (imageModalFile) {
                const uploaded = await uploadMediaFile(imageModalFile);
                setMediaItems((prev)=>[
                        uploaded.media,
                        ...prev
                    ]);
                setNotice(`Image uploaded (${bytes(uploaded.originalBytes)} -> ${bytes(uploaded.media.size)}) and inserted.`);
                finalUrl = uploaded.media.url;
                finalMediaId = uploaded.media.id;
            }
            if (!finalUrl) {
                setError("Add image URL or upload an image.");
                return;
            }
            if (!finalMediaId) {
                finalMediaId = mediaItems.find((item)=>item.url === finalUrl)?.id || null;
            }
            if (replaceImageSrc) {
                const replaced = replaceImageInEditor(replaceImageSrc, finalUrl, altText, {
                    mediaId: finalMediaId,
                    caption,
                    align
                });
                if (!replaced) {
                    const insertedNode = insertImageNode(finalUrl, altText, {
                        mediaId: finalMediaId,
                        caption,
                        align
                    });
                    if (!insertedNode) {
                        insertEditorHtml(imageHtml(finalUrl, altText, finalMediaId, caption, align));
                    }
                }
            } else {
                const insertedNode = insertImageNode(finalUrl, altText, {
                    mediaId: finalMediaId,
                    caption,
                    align
                });
                if (!insertedNode) {
                    insertEditorHtml(imageHtml(finalUrl, altText, finalMediaId, caption, align));
                }
            }
            setForm((prev)=>({
                    ...prev,
                    imageAltText: prev.imageAltText || altText
                }));
            closeImageModal();
        } catch (e) {
            setError(e instanceof Error ? e.message : "Failed to insert image.");
        } finally{
            setInsertingImage(false);
        }
    };
    const executeEditorCommand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((commandId, source = "toolbar", trigger)=>{
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
            const changed = setTextAlignInEditor("left");
            if (!changed) {
                setError("Could not align selected text block.");
            }
            return;
        }
        if (commandId === "alignTextCenter") {
            const changed = setTextAlignInEditor("center");
            if (!changed) {
                setError("Could not align selected text block.");
            }
            return;
        }
        if (commandId === "alignTextRight") {
            const changed = setTextAlignInEditor("right");
            if (!changed) {
                setError("Could not align selected text block.");
            }
            return;
        }
        if (commandId === "image") {
            const activeImageSrc = getActiveImageSource();
            if (activeImageSrc) {
                const current = getImageMetaBySrc(activeImageSrc);
                setReplaceImageSrc(activeImageSrc);
                setError("");
                setImageModalUrl("");
                setImageModalAlt(current?.alt || form.imageAltText || form.title || "blog image");
                setImageModalCaption(current?.caption || "");
                setImageModalAlign(current?.align || "center");
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
            const activeImageSrc = getActiveImageSource();
            if (!activeImageSrc) {
                setError("Right-click on an image to resize it.");
                return;
            }
            const resized = resizeImageInEditor(activeImageSrc);
            if (!resized) {
                setError("Could not resize selected image.");
            }
            return;
        }
        if (commandId === "captionImage") {
            const activeImageSrc = getActiveImageSource();
            if (!activeImageSrc) {
                setError("Right-click on an image to edit caption.");
                return;
            }
            const currentCaption = getImageMetaBySrc(activeImageSrc)?.caption || "";
            const caption = window.prompt("Image caption", currentCaption);
            if (caption === null) return;
            const changed = setImageCaptionInEditor(activeImageSrc, caption);
            if (!changed) {
                setError("Could not update image caption.");
            }
            return;
        }
        if (commandId === "alignImageLeft") {
            const activeImageSrc = getActiveImageSource();
            if (!activeImageSrc) {
                setError("Right-click on an image to align it.");
                return;
            }
            const changed = alignImageInEditor(activeImageSrc, "left");
            if (!changed) {
                setError("Could not align selected image.");
            }
            return;
        }
        if (commandId === "alignImageCenter") {
            const activeImageSrc = getActiveImageSource();
            if (!activeImageSrc) {
                setError("Right-click on an image to align it.");
                return;
            }
            const changed = alignImageInEditor(activeImageSrc, "center");
            if (!changed) {
                setError("Could not align selected image.");
            }
            return;
        }
        if (commandId === "alignImageRight") {
            const activeImageSrc = getActiveImageSource();
            if (!activeImageSrc) {
                setError("Right-click on an image to align it.");
                return;
            }
            const changed = alignImageInEditor(activeImageSrc, "right");
            if (!changed) {
                setError("Could not align selected image.");
            }
            return;
        }
    }, [
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
    const topToolbarActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            {
                key: "paragraph",
                label: "Paragraph",
                active: interactionState.active.paragraph,
                run: ()=>executeEditorCommand("paragraph")
            },
            {
                key: "h1",
                label: "H1",
                active: interactionState.active.h1,
                run: ()=>applyHeading(1)
            },
            {
                key: "h2",
                label: "H2",
                active: interactionState.active.h2,
                run: ()=>executeEditorCommand("h2")
            },
            {
                key: "h3",
                label: "H3",
                active: interactionState.active.h3,
                run: ()=>executeEditorCommand("h3")
            },
            {
                key: "bold",
                label: "Bold",
                active: interactionState.active.bold,
                run: ()=>executeEditorCommand("bold")
            },
            {
                key: "italic",
                label: "Italic",
                active: interactionState.active.italic,
                run: ()=>executeEditorCommand("italic")
            },
            {
                key: "underline",
                label: "Underline",
                active: interactionState.active.underline,
                run: ()=>executeEditorCommand("underline")
            },
            {
                key: "ul",
                label: "Bullet",
                active: interactionState.active.bulletList,
                run: ()=>executeEditorCommand("bulletList")
            },
            {
                key: "ol",
                label: "Numb",
                active: interactionState.active.orderedList,
                run: ()=>executeEditorCommand("orderedList")
            },
            {
                key: "quote",
                label: "Quote",
                active: interactionState.active.blockquote,
                run: ()=>executeEditorCommand("blockquote")
            },
            {
                key: "code",
                label: "Code",
                active: interactionState.active.codeBlock,
                run: ()=>executeEditorCommand("codeBlock")
            },
            {
                key: "link",
                label: "Link",
                active: interactionState.active.link,
                run: ()=>executeEditorCommand("link")
            },
            {
                key: "image",
                label: "Image",
                active: false,
                run: ()=>executeEditorCommand("image")
            }
        ], [
        applyHeading,
        executeEditorCommand,
        interactionState.active
    ]);
    const floatingToolbarActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            {
                key: "float-bold",
                label: "Bold",
                active: interactionState.active.bold,
                run: ()=>executeEditorCommand("bold")
            },
            {
                key: "float-h2",
                label: "H2",
                active: interactionState.active.h2,
                run: ()=>executeEditorCommand("h2")
            },
            {
                key: "float-link",
                label: "Link",
                active: interactionState.active.link,
                run: ()=>executeEditorCommand("link")
            },
            {
                key: "float-align-left",
                label: "Left",
                active: interactionState.active.alignTextLeft,
                run: ()=>executeEditorCommand("alignTextLeft")
            },
            {
                key: "float-align-center",
                label: "Center",
                active: interactionState.active.alignTextCenter,
                run: ()=>executeEditorCommand("alignTextCenter")
            },
            {
                key: "float-align-right",
                label: "Right",
                active: interactionState.active.alignTextRight,
                run: ()=>executeEditorCommand("alignTextRight")
            }
        ], [
        executeEditorCommand,
        interactionState.active.alignTextCenter,
        interactionState.active.alignTextLeft,
        interactionState.active.alignTextRight,
        interactionState.active.bold,
        interactionState.active.h2,
        interactionState.active.link
    ]);
    const insertBlockTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((blockId)=>{
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
    }, [
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
    const runContextCommand = (commandId)=>{
        closeContextMenu();
        executeEditorCommand(commandId, "context-menu");
    };
    const runSlashCommand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((commandId)=>{
        if (!tiptapEditor) return;
        if (slashMenu.replaceTo > slashMenu.replaceFrom) {
            tiptapEditor.chain().focus().deleteRange({
                from: slashMenu.replaceFrom,
                to: slashMenu.replaceTo
            }).run();
        }
        closeSlashMenu();
        executeEditorCommand(commandId, "slash-command");
    }, [
        closeSlashMenu,
        executeEditorCommand,
        slashMenu.replaceFrom,
        slashMenu.replaceTo,
        tiptapEditor
    ]);
    const handleEditorContextMenu = (event)=>{
        event.preventDefault();
        if (!tiptapEditor) return;
        tiptapEditor.commands.focus();
        const target = event.target;
        const imageNode = target.closest("img");
        const hasTextSelection = tiptapEditor.state.selection.from !== tiptapEditor.state.selection.to && Boolean(tiptapEditor.state.doc.textBetween(tiptapEditor.state.selection.from, tiptapEditor.state.selection.to, " ").trim());
        const parentNode = tiptapEditor.state.selection.$from.parent;
        const isEmptyLine = !hasTextSelection && (parentNode.type.name === "paragraph" || parentNode.type.name === "heading") && !parentNode.textContent.trim();
        let situation = "empty-line";
        let imageSrc = null;
        if (imageNode) {
            situation = "image";
            imageSrc = imageNode.getAttribute("src");
        } else if (hasTextSelection) {
            situation = "text-selected";
        } else if (isEmptyLine) {
            situation = "empty-line";
        }
        setContextImageSrc(imageSrc);
        const contextItems = contextActionBySituation[situation];
        const used = new Set(contextItems.map((item)=>item.id));
        const toolboxItems = allToolbarContextCommands.filter((item)=>!used.has(item.id));
        const items = [
            ...contextItems,
            ...toolboxItems
        ];
        const positioned = toSmartPosition(event.clientX, event.clientY, 340, Math.min(items.length, 10) * 38 + 36);
        closeSlashMenu();
        setContextMenu({
            open: true,
            x: positioned.x,
            y: positioned.y,
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        const toShortcutKey = (event)=>{
            let key = event.key.toLowerCase();
            const code = event.code || "";
            if (/^Key[A-Z]$/.test(code)) {
                key = code.slice(3).toLowerCase();
            } else if (/^Digit[0-9]$/.test(code)) {
                key = code.slice(5);
            }
            const parts = [];
            if (event.ctrlKey) parts.push("ctrl");
            if (event.shiftKey) parts.push("shift");
            if (event.altKey) parts.push("alt");
            parts.push(key);
            return parts.join("+");
        };
        const isBlockedBrowserShortcut = (event)=>{
            const key = event.key.toLowerCase();
            const hasPrimaryModifier = event.ctrlKey || event.metaKey;
            const editorHasFocus = Boolean(tiptapEditor?.isFocused);
            if (event.key === "F12") return true;
            if (!hasPrimaryModifier) return false;
            if (key === "p") return true;
            if (key === "u" && !editorHasFocus) return true;
            if (event.shiftKey && (key === "i" || key === "j" || key === "c")) {
                return true;
            }
            if (event.metaKey && event.altKey && (key === "i" || key === "j" || key === "c")) {
                return true;
            }
            return false;
        };
        const isPrintableCharacterKey = (event)=>{
            if (event.key.length !== 1) return false;
            if (event.ctrlKey || event.metaKey || event.altKey) return false;
            return true;
        };
        const onKeyDown = (event)=>{
            if (isBlockedBrowserShortcut(event)) {
                event.preventDefault();
                event.stopPropagation();
                closeContextMenu();
                closeSlashMenu();
                return;
            }
            if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "s") {
                event.preventDefault();
                event.stopPropagation();
                void persistPostShortcutRef.current?.();
                return;
            }
            const target = event.target;
            const editorContainsTarget = !!target && !!editorSurfaceRef.current?.contains(target);
            const typingInNonEditor = !!target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "SELECT") && !editorContainsTarget;
            if (typingInNonEditor) return;
            if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
                if (!tiptapEditor || !tiptapEditor.isFocused) return;
                event.preventDefault();
                insertNewBlogSection();
                return;
            }
            if (isPrintableCharacterKey(event) && tiptapEditor?.isFocused) {
                const { $from } = tiptapEditor.state.selection;
                const parentNode = $from.parent;
                const parentText = parentNode.textContent.trim().toLowerCase();
                if (parentNode.type.name === "heading" && parentText === NEW_BLOG_SECTION_PROMPT.toLowerCase()) {
                    const from = $from.start();
                    const to = from + parentNode.content.size;
                    if (from < to) {
                        tiptapEditor.commands.setTextSelection({
                            from,
                            to
                        });
                    }
                }
            }
            if (event.key === "Escape") {
                closeContextMenu();
                closeSlashMenu();
                return;
            }
            if (slashMenu.open) {
                if (event.key === "ArrowDown") {
                    event.preventDefault();
                    shiftSlashActiveIndex(1);
                    return;
                }
                if (event.key === "ArrowUp") {
                    event.preventDefault();
                    shiftSlashActiveIndex(-1);
                    return;
                }
                if (event.key === "Enter") {
                    event.preventDefault();
                    const selected = slashMenu.items[slashMenu.activeIndex];
                    if (selected) {
                        runSlashCommand(selected.id);
                    }
                    return;
                }
            }
            if (!tiptapEditor || !tiptapEditor.isFocused) return;
            const shortcut = toShortcutKey(event);
            const mapped = shortcutMap[shortcut];
            if (!mapped) return;
            event.preventDefault();
            executeEditorCommand(mapped, "shortcut", shortcut);
        };
        window.addEventListener("keydown", onKeyDown);
        return ()=>{
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-slate-950 px-4 py-20 text-slate-100 sm:px-6 lg:px-8",
            onContextMenu: (event)=>event.preventDefault(),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto w-full max-w-7xl rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8",
                children: "Loading blog CMS..."
            }, void 0, false, {
                fileName: "[project]/app/blog/cms/page.tsx",
                lineNumber: 4159,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/blog/cms/page.tsx",
            lineNumber: 4155,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-slate-950 text-slate-100",
        onContextMenu: (event)=>event.preventDefault(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-slate-900 to-slate-950 p-5 shadow-[0_25px_70px_rgba(2,6,23,0.45)] sm:p-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300",
                                            children: "Content Management"
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 4175,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl",
                                            children: "Blog Dashboard"
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 4178,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 4174,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: createPost,
                                            className: "rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400",
                                            children: "New Post"
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 4183,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/blog",
                                            className: "rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold transition hover:border-emerald-300 hover:text-emerald-300",
                                            children: "View Blog"
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 4190,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 4182,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 4173,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/blog/cms/page.tsx",
                        lineNumber: 4172,
                        columnNumber: 9
                    }, this),
                    error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-5 rounded-xl border border-red-300/30 bg-red-500/10 px-4 py-3 text-sm text-red-200",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/app/blog/cms/page.tsx",
                        lineNumber: 4201,
                        columnNumber: 11
                    }, this) : null,
                    notice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-5 rounded-xl border border-emerald-300/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200",
                        children: notice
                    }, void 0, false, {
                        fileName: "[project]/app/blog/cms/page.tsx",
                        lineNumber: 4206,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "space-y-6 xl:sticky xl:top-6 xl:h-fit",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-sm font-semibold uppercase tracking-[0.16em] text-slate-300",
                                                        children: "Posts"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                        lineNumber: 4215,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate-400",
                                                        children: posts.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                        lineNumber: 4218,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                lineNumber: 4214,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 max-h-[360px] space-y-2 overflow-auto pr-1",
                                                children: posts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "rounded-lg border border-white/10 bg-slate-800/40 px-3 py-2 text-sm text-slate-300",
                                                    children: "No posts yet."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4222,
                                                    columnNumber: 19
                                                }, this) : posts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            setError("");
                                                            setNotice("");
                                                            hydrateFromPost(post);
                                                        },
                                                        className: `w-full rounded-xl border px-3 py-3 text-left transition ${form.id === post.id ? "border-emerald-400/50 bg-emerald-500/10" : "border-white/10 bg-slate-800/35 hover:border-white/20"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "line-clamp-1 text-sm font-semibold text-white",
                                                                children: post.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                lineNumber: 4241,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 flex items-center justify-between gap-2 text-xs text-slate-400",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "uppercase",
                                                                        children: post.status
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                                        lineNumber: 4245,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: prettyDate(post.updatedAt)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                                        lineNumber: 4246,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                lineNumber: 4244,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, post.id, true, {
                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                        lineNumber: 4227,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                lineNumber: 4220,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/blog/cms/page.tsx",
                                        lineNumber: 4213,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-sm font-semibold uppercase tracking-[0.16em] text-slate-300",
                                                        children: "Anchor Links"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                        lineNumber: 4256,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate-400",
                                                        children: anchorPreviewLinks.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                        lineNumber: 4259,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                lineNumber: 4255,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-[11px] text-slate-400",
                                                children: "Live preview of saved anchor words with their links."
                                            }, void 0, false, {
                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                lineNumber: 4263,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 max-h-[280px] space-y-2 overflow-auto pr-1",
                                                children: anchorPreviewLinks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "rounded-lg border border-white/10 bg-slate-800/40 px-3 py-2 text-sm text-slate-300",
                                                    children: "No anchor links in this post yet."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4268,
                                                    columnNumber: 19
                                                }, this) : anchorPreviewLinks.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: item.href,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "block rounded-xl border border-white/10 bg-slate-800/35 px-3 py-2.5 transition hover:border-emerald-300/50 hover:bg-emerald-500/10",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "line-clamp-1 text-sm font-semibold text-white",
                                                                children: item.text
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                lineNumber: 4280,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 line-clamp-1 text-xs text-emerald-300",
                                                                children: item.href
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                lineNumber: 4283,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, item.id, true, {
                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                        lineNumber: 4273,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                lineNumber: 4266,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/blog/cms/page.tsx",
                                        lineNumber: 4254,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-sm font-semibold uppercase tracking-[0.16em] text-slate-300",
                                                children: "Site Settings"
                                            }, void 0, false, {
                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                lineNumber: 4293,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs text-slate-300",
                                                        children: [
                                                            "Site Title",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: settings.siteTitle,
                                                                onChange: (event)=>setSettings((prev)=>({
                                                                            ...prev,
                                                                            siteTitle: event.target.value
                                                                        })),
                                                                className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                lineNumber: 4299,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                        lineNumber: 4297,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs text-slate-300",
                                                        children: [
                                                            "Author Name",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: settings.authorName,
                                                                onChange: (event)=>setSettings((prev)=>({
                                                                            ...prev,
                                                                            authorName: event.target.value
                                                                        })),
                                                                className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                lineNumber: 4312,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                        lineNumber: 4310,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: saveSettings,
                                                        disabled: savingSettings,
                                                        className: "w-full rounded-lg bg-emerald-500 px-3 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400 disabled:opacity-50",
                                                        children: savingSettings ? "Saving..." : "Save Settings"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                        lineNumber: 4323,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                lineNumber: 4296,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/blog/cms/page.tsx",
                                        lineNumber: 4292,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/blog/cms/page.tsx",
                                lineNumber: 4212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "space-y-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: savePost,
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-4 md:grid-cols-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs text-slate-300",
                                                            children: [
                                                                "Title (H1)",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: form.title,
                                                                    onChange: (event)=>{
                                                                        const nextTitle = event.target.value;
                                                                        setForm((prev)=>{
                                                                            const nextMetaTitle = !prev.metaTitle || prev.metaTitle === prev.title ? nextTitle : prev.metaTitle;
                                                                            return {
                                                                                ...prev,
                                                                                title: nextTitle,
                                                                                slug: slugTouched ? prev.slug : slugify(nextTitle),
                                                                                metaTitle: nextMetaTitle
                                                                            };
                                                                        });
                                                                    },
                                                                    placeholder: "Post title",
                                                                    className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm outline-none focus:border-emerald-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4341,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "mt-1 block text-[11px] text-slate-400",
                                                                    children: [
                                                                        "The post title is always rendered as",
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                            className: "text-slate-200",
                                                                            children: "h1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 4363,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        "."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4361,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4339,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs text-slate-300",
                                                            children: [
                                                                "Slug (auto-generate)",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: form.slug,
                                                                    onChange: (event)=>{
                                                                        setSlugTouched(true);
                                                                        setForm((prev)=>({
                                                                                ...prev,
                                                                                slug: slugify(event.target.value)
                                                                            }));
                                                                    },
                                                                    placeholder: "my-blog-post",
                                                                    className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm outline-none focus:border-emerald-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4368,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4366,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4338,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 grid gap-4 md:grid-cols-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs text-slate-300",
                                                            children: [
                                                                "Author Name",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: form.authorName,
                                                                    onChange: (event)=>setForm((prev)=>({
                                                                                ...prev,
                                                                                authorName: event.target.value
                                                                            })),
                                                                    className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm outline-none focus:border-emerald-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4386,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4384,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-slate-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "Status"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4398,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-1.5 flex flex-wrap gap-2",
                                                                    children: [
                                                                        "draft",
                                                                        "published",
                                                                        "scheduled"
                                                                    ].map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>setForm((prev)=>({
                                                                                        ...prev,
                                                                                        status,
                                                                                        scheduledAt: status === "scheduled" ? prev.scheduledAt : ""
                                                                                    })),
                                                                            className: `rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition ${form.status === status ? "border-emerald-400 bg-emerald-500/15 text-emerald-300" : "border-white/20 text-slate-200 hover:border-white/40"}`,
                                                                            children: status
                                                                        }, status, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 4402,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4399,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4397,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs text-slate-300",
                                                            children: [
                                                                "Schedule Date & Time",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "datetime-local",
                                                                    value: form.scheduledAt,
                                                                    onChange: (event)=>setForm((prev)=>({
                                                                                ...prev,
                                                                                scheduledAt: event.target.value
                                                                            })),
                                                                    disabled: form.status !== "scheduled",
                                                                    className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm outline-none focus:border-emerald-400 disabled:cursor-not-allowed disabled:opacity-50"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4429,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4427,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4383,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 4337,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "sticky top-20 z-30 -mx-1 rounded-xl border border-white/15 bg-slate-950/92 p-2 shadow-[0_10px_30px_rgba(2,6,23,0.35)] backdrop-blur transition-all duration-200",
                                                    onMouseDown: preserveSelectionOnToolbarMouseDown,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "px-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400",
                                                            children: "Top Toolbar (Static)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4450,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2 flex flex-wrap items-center gap-2",
                                                            children: topToolbarActions.map((action)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: action.run,
                                                                    "aria-pressed": action.active,
                                                                    className: toolbarButtonClass(action.active),
                                                                    children: action.label
                                                                }, action.key, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4455,
                                                                    columnNumber: 23
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4453,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4446,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 text-[11px] text-slate-400",
                                                    children: "State-driven editor active. Shortcuts: Ctrl+B, I, U, K and Ctrl+Alt+1,2,3,7,8. Ctrl+Enter inserts a new blog section. Ctrl+Shift+L/E/R aligns text. Ctrl+S updates/saves this post."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4467,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 flex flex-wrap items-center gap-2 text-[11px] text-slate-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `rounded-full border px-2 py-1 ${interactionState.isFocused ? "border-emerald-400/60 bg-emerald-500/15 text-emerald-200" : "border-white/20 bg-white/5 text-slate-300"}`,
                                                            children: interactionState.isFocused ? "Editor focused" : "Editor idle"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4473,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-full border border-white/20 bg-white/5 px-2 py-1 text-slate-200",
                                                            children: interactionState.hasTextSelection ? `Selected: ${interactionState.selectedText.slice(0, 28)}${interactionState.selectedText.length > 28 ? "..." : ""}` : interactionState.isImageSelected ? "Image selected" : interactionState.isEmptyLine ? "Empty line context" : "Cursor context"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4484,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-full border border-white/20 bg-white/5 px-2 py-1 text-slate-200",
                                                            children: [
                                                                "Node: ",
                                                                interactionState.nodeType.toUpperCase()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4493,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-full border border-white/20 bg-white/5 px-2 py-1 text-slate-200",
                                                            children: [
                                                                "Context menu: ",
                                                                contextMenu.open ? "open" : "closed"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4496,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-full border border-white/20 bg-white/5 px-2 py-1 text-slate-200",
                                                            children: [
                                                                "Slash menu: ",
                                                                slashMenu.open ? "open" : "closed"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4499,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4472,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 rounded-xl border border-white/10 bg-slate-900/45 p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-300",
                                                            children: "Command Driven UX"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4505,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2 space-y-1 text-xs text-white",
                                                            children: commandPipeline.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "leading-5",
                                                                    children: [
                                                                        index + 1,
                                                                        ". ",
                                                                        step
                                                                    ]
                                                                }, `${step}-${index}`, true, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4510,
                                                                    columnNumber: 23
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4508,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4504,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 rounded-xl border border-white/10 bg-slate-900/45 p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-300",
                                                            children: "Block Inserter ( Instrctions + Templates )"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4518,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-4",
                                                            children: blockTemplateCatalog.map((block)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>insertBlockTemplate(block.id),
                                                                    className: "rounded-lg border border-white/15 bg-slate-800/55 px-3 py-2.5 text-left transition hover:-translate-y-0.5 hover:border-emerald-300/50 hover:bg-emerald-500/10",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm font-semibold text-slate-100",
                                                                            children: block.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 4529,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mt-1 text-[11px] text-slate-300",
                                                                            children: block.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 4532,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, block.id, true, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4523,
                                                                    columnNumber: 23
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4521,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4517,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 grid gap-3 lg:grid-cols-[minmax(0,1fr)_220px]",
                                                    onMouseDown: preserveSelectionOnToolbarMouseDown,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: embedUrl,
                                                            onChange: (event)=>setEmbedUrl(event.target.value),
                                                            placeholder: "Paste YouTube URL for embed",
                                                            className: "w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4544,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: addEmbed,
                                                            className: "rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold hover:border-emerald-300 hover:text-emerald-300",
                                                            children: "Insert Embed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4550,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4540,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3",
                                                    onMouseDown: preserveSelectionOnToolbarMouseDown,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: openFaqModal,
                                                        className: "rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold hover:border-emerald-300 hover:text-emerald-300",
                                                        children: "Open FAQ Modal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                        lineNumber: 4563,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4559,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 grid gap-3 sm:grid-cols-[120px_120px_180px]",
                                                    onMouseDown: preserveSelectionOnToolbarMouseDown,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs text-slate-300",
                                                            children: [
                                                                "Rows",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    min: 1,
                                                                    max: 10,
                                                                    value: tableRows,
                                                                    onChange: (event)=>setTableRows(Number.isFinite(Number(event.target.value)) ? Number(event.target.value) : 3),
                                                                    className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4578,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4576,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs text-slate-300",
                                                            children: [
                                                                "Cols",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    min: 1,
                                                                    max: 8,
                                                                    value: tableCols,
                                                                    onChange: (event)=>setTableCols(Number.isFinite(Number(event.target.value)) ? Number(event.target.value) : 3),
                                                                    className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4595,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4593,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: insertTableBlock,
                                                            className: "self-end rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold hover:border-emerald-300 hover:text-emerald-300",
                                                            children: "Insert Table"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4610,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4572,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    ref: editorSurfaceRef,
                                                    onClick: (event)=>void handleEditorClick(event),
                                                    onContextMenu: handleEditorContextMenu,
                                                    className: "relative mt-4 min-h-[220px] rounded-2xl border border-white/10 bg-slate-950/70 p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EditorContent"], {
                                                            editor: tiptapEditor
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4626,
                                                            columnNumber: 19
                                                        }, this),
                                                        interactionState.active.link && interactionState.activeLinkHref ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pointer-events-none absolute left-3 -top-3 z-20 max-w-[260px] rounded-lg border border-emerald-300/35 bg-slate-900/95 px-2.5 py-2 shadow-[0_10px_30px_rgba(16,185,129,0.2)]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-300/80",
                                                                    children: "Anchor Preview"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4630,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-1 truncate text-xs text-emerald-200",
                                                                    children: interactionState.activeLinkHref
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4633,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4629,
                                                            columnNumber: 21
                                                        }, this) : null,
                                                        interactionState.hasTextSelection && inlineIndicator.visible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute z-30 translate-x-42 rounded-xl border border-emerald-300/35 bg-slate-900/95 px-2 py-1.5 shadow-[0_16px_40px_rgba(16,185,129,0.45)] backdrop-blur transition-all duration-150",
                                                            style: {
                                                                left: `${inlineIndicator.x}px`,
                                                                top: `${Math.max(8, inlineIndicator.y - 42)}px`
                                                            },
                                                            onMouseDown: preserveSelectionOnToolbarMouseDown,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mb-1 px-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-400",
                                                                    children: "Floating Toolbar"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4648,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1.5",
                                                                    children: floatingToolbarActions.map((action)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: action.run,
                                                                            "aria-pressed": action.active,
                                                                            className: toolbarButtonClass(action.active),
                                                                            children: action.label
                                                                        }, action.key, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 4653,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4651,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4640,
                                                            columnNumber: 21
                                                        }, this) : null,
                                                        inlineIndicator.visible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pointer-events-none absolute z-20 max-w-[260px] -translate-x-1/2 rounded-full border border-emerald-300/40 bg-slate-900/95 px-2.5 py-1 text-[10px] font-semibold text-emerald-200 shadow-[0_8px_25px_rgba(16,185,129,0.25)] transition-all duration-150",
                                                            style: {
                                                                left: `${inlineIndicator.x}px`,
                                                                top: `${Math.max(8, inlineIndicator.y - 30)}px`
                                                            },
                                                            children: inlineIndicator.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4667,
                                                            columnNumber: 21
                                                        }, this) : null
                                                    ]
                                                }, editorKey, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4619,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 4445,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-sm font-semibold uppercase tracking-[0.16em] text-slate-300",
                                                    children: "Taxonomy"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4681,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 grid gap-4 md:grid-cols-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-300",
                                                                    children: "Categories"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4686,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-2 max-h-44 space-y-2 overflow-auto pr-1",
                                                                    children: [
                                                                        categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-slate-800/35 px-3 py-2 text-sm",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "flex items-center gap-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                checked: form.categories.includes(category.name),
                                                                                                onChange: ()=>toggleCategory(category.name),
                                                                                                className: "h-4 w-4 accent-emerald-500"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                                                lineNumber: 4694,
                                                                                                columnNumber: 29
                                                                                            }, this),
                                                                                            category.name
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                                                        lineNumber: 4693,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        type: "button",
                                                                                        onClick: ()=>removeCategory(category.slug),
                                                                                        className: "text-xs text-red-200 hover:text-red-100",
                                                                                        children: "Delete"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                                                        lineNumber: 4702,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, category.id, true, {
                                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                                lineNumber: 4689,
                                                                                columnNumber: 25
                                                                            }, this)),
                                                                        categories.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-slate-400",
                                                                            children: "No categories added."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 4712,
                                                                            columnNumber: 25
                                                                        }, this) : null
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4687,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-3 flex gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: newCategoryName,
                                                                            onChange: (event)=>setNewCategoryName(event.target.value),
                                                                            placeholder: "New category",
                                                                            className: "w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 4718,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: addCategory,
                                                                            disabled: savingCategory,
                                                                            className: "rounded-lg bg-emerald-500 px-3 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400 disabled:opacity-50",
                                                                            children: "Add"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 4726,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4717,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4685,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs text-slate-300",
                                                                    children: [
                                                                        "Tags (comma separated)",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: form.tagsInput,
                                                                            onChange: (event)=>setForm((prev)=>({
                                                                                        ...prev,
                                                                                        tagsInput: event.target.value
                                                                                    })),
                                                                            placeholder: "design, branding, marketing",
                                                                            className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 4740,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4738,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-3 flex flex-wrap gap-2",
                                                                    children: tagList(form.tagsInput).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "rounded-full border border-white/20 px-2.5 py-1 text-xs text-slate-200",
                                                                            children: [
                                                                                "#",
                                                                                tag
                                                                            ]
                                                                        }, tag, true, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 4754,
                                                                            columnNumber: 25
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4752,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4737,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4684,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 4680,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-sm font-semibold uppercase tracking-[0.16em] text-slate-300",
                                                    children: "SEO Panel"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4767,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 grid gap-4 md:grid-cols-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs text-slate-300",
                                                            children: [
                                                                "Meta Title",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: form.metaTitle,
                                                                    onChange: (event)=>setForm((prev)=>({
                                                                                ...prev,
                                                                                metaTitle: event.target.value
                                                                            })),
                                                                    className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4773,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4771,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs text-slate-300",
                                                            children: [
                                                                "OG Image",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: form.ogImage,
                                                                    onChange: (event)=>setForm((prev)=>({
                                                                                ...prev,
                                                                                ogImage: event.target.value
                                                                            })),
                                                                    className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4786,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4784,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs text-slate-300 md:col-span-2",
                                                            children: [
                                                                "Canonical URL",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: form.canonicalUrl,
                                                                    onChange: (event)=>setForm((prev)=>({
                                                                                ...prev,
                                                                                canonicalUrl: event.target.value
                                                                            })),
                                                                    placeholder: "https://www.yoursite.com/blog/post-slug",
                                                                    className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4799,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4797,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4770,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "mt-4 block text-xs text-slate-300",
                                                    children: [
                                                        "Meta Description",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            rows: 4,
                                                            value: form.metaDescription,
                                                            onChange: (event)=>setForm((prev)=>({
                                                                        ...prev,
                                                                        metaDescription: event.target.value
                                                                    })),
                                                            className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4814,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4812,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "mt-4 block text-xs text-slate-300",
                                                    children: [
                                                        "SEO Keywords (comma separated)",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: form.seoKeywordsInput,
                                                            onChange: (event)=>setForm((prev)=>({
                                                                        ...prev,
                                                                        seoKeywordsInput: event.target.value
                                                                    })),
                                                            placeholder: "seo, web design, digital marketing",
                                                            className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4828,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mt-1 block text-[11px] text-slate-400",
                                                            children: "Used in BlogPosting schema `keywords`."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4839,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4826,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 flex flex-wrap gap-2",
                                                    children: tagList(form.seoKeywordsInput).map((keyword)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-full border border-emerald-300/30 bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-200",
                                                            children: keyword
                                                        }, keyword, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4845,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4843,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "mt-4 block text-xs text-slate-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center justify-between gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Schema (JSON-LD)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4855,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: generateSchemaFromCurrentContent,
                                                                    className: "rounded-md border border-white/20 px-2.5 py-1 text-[11px] font-semibold text-slate-200 transition hover:border-emerald-300 hover:text-emerald-300",
                                                                    children: "Auto Generate"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4856,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4854,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            rows: 6,
                                                            value: form.schemaJsonLd,
                                                            onChange: (event)=>setForm((prev)=>({
                                                                        ...prev,
                                                                        schemaJsonLd: event.target.value
                                                                    })),
                                                            placeholder: '{"@context":"https://schema.org","@type":"BlogPosting"}',
                                                            className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm font-mono outline-none focus:border-emerald-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4864,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mt-1 block text-[11px] text-slate-400",
                                                            children: "Auto-generated on save if empty. Use button to refresh anytime."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4876,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4853,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 flex flex-wrap gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2 text-xs text-slate-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: form.robotsNoIndex,
                                                                    onChange: (event)=>setForm((prev)=>({
                                                                                ...prev,
                                                                                robotsNoIndex: event.target.checked
                                                                            })),
                                                                    className: "h-4 w-4 accent-emerald-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4883,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Robots: noindex"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4882,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2 text-xs text-slate-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: form.robotsNoFollow,
                                                                    onChange: (event)=>setForm((prev)=>({
                                                                                ...prev,
                                                                                robotsNoFollow: event.target.checked
                                                                            })),
                                                                    className: "h-4 w-4 accent-emerald-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4897,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Robots: nofollow"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4896,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4881,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 4766,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-sm font-semibold uppercase tracking-[0.16em] text-slate-300",
                                                    children: "Media Library"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4914,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "inline-flex cursor-pointer items-center justify-center rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold transition hover:border-emerald-300 hover:text-emerald-300",
                                                            children: [
                                                                uploadingMedia ? "Uploading..." : "Upload Image",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "file",
                                                                    accept: "image/*",
                                                                    className: "hidden",
                                                                    disabled: uploadingMedia,
                                                                    onChange: (event)=>{
                                                                        const file = event.target.files?.[0];
                                                                        if (!file) return;
                                                                        void uploadMedia(file);
                                                                        event.target.value = "";
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4920,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4918,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs text-slate-300 sm:max-w-sm sm:flex-1",
                                                            children: [
                                                                "Featured Image URL",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: form.featuredImageUrl,
                                                                    onChange: (event)=>setForm((prev)=>({
                                                                                ...prev,
                                                                                featuredImageUrl: event.target.value
                                                                            })),
                                                                    className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 4935,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4933,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4917,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "mt-3 block text-xs text-slate-300",
                                                    children: [
                                                        "Image Alt Text",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: form.imageAltText,
                                                            onChange: (event)=>setForm((prev)=>({
                                                                        ...prev,
                                                                        imageAltText: event.target.value
                                                                    })),
                                                            placeholder: "Describe the image for accessibility and SEO",
                                                            className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 4949,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4947,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3",
                                                    children: [
                                                        mediaItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "overflow-hidden rounded-xl border border-white/10 bg-slate-800/40",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative aspect-[4/3] bg-black",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            src: item.url,
                                                                            alt: form.imageAltText || item.fileName,
                                                                            fill: true,
                                                                            sizes: "(max-width: 1024px) 100vw, 33vw",
                                                                            className: "absolute inset-0 h-full w-full object-cover"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 4969,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                                        lineNumber: 4968,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-2 p-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "line-clamp-1 text-xs text-slate-300",
                                                                                children: item.fileName
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                                lineNumber: 4978,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[11px] text-slate-400",
                                                                                children: [
                                                                                    bytes(item.size),
                                                                                    item.width && item.height ? ` | ${item.width} x ${item.height}` : ""
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                                lineNumber: 4981,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        type: "button",
                                                                                        onClick: ()=>setForm((prev)=>({
                                                                                                    ...prev,
                                                                                                    featuredImageUrl: item.url,
                                                                                                    imageAltText: prev.imageAltText || item.fileName,
                                                                                                    ogImage: prev.ogImage || item.url
                                                                                                })),
                                                                                        className: "flex-1 rounded-md border border-white/20 px-2 py-1.5 text-[11px] font-semibold hover:border-emerald-300 hover:text-emerald-300",
                                                                                        children: "Use as Featured"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                                                        lineNumber: 4988,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        type: "button",
                                                                                        onClick: ()=>{
                                                                                            const alt = form.imageAltText || item.fileName;
                                                                                            const insertedNode = insertImageNode(item.url, alt, {
                                                                                                mediaId: item.id,
                                                                                                caption: "",
                                                                                                align: "center",
                                                                                                widthPercent: 100
                                                                                            });
                                                                                            if (!insertedNode) {
                                                                                                insertEditorHtml(imageHtml(item.url, alt, item.id, "", "center", 100));
                                                                                            }
                                                                                        },
                                                                                        className: "flex-1 rounded-md border border-white/20 px-2 py-1.5 text-[11px] font-semibold hover:border-emerald-300 hover:text-emerald-300",
                                                                                        children: "Insert"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                                                        lineNumber: 5003,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                                lineNumber: 4987,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                                        lineNumber: 4977,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, item.id, true, {
                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                lineNumber: 4964,
                                                                columnNumber: 21
                                                            }, this)),
                                                        mediaItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "rounded-lg border border-white/10 bg-slate-800/40 px-3 py-3 text-sm text-slate-300",
                                                            children: "No media uploaded yet."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 5039,
                                                            columnNumber: 21
                                                        }, this) : null
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 4962,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 4913,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-sm font-semibold uppercase tracking-[0.16em] text-slate-300",
                                                            children: "Comments"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 5048,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-slate-400",
                                                            children: loadingComments ? "Loading..." : `${comments.length} total`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 5051,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 5047,
                                                    columnNumber: 17
                                                }, this),
                                                !form.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 text-sm text-slate-400",
                                                    children: "Save the post first to moderate comments."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 5058,
                                                    columnNumber: 19
                                                }, this) : comments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 text-sm text-slate-400",
                                                    children: "No comments on this post yet."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 5062,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 space-y-3",
                                                    children: comments.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-xl border border-white/10 bg-slate-800/35 p-3",
                                                            style: {
                                                                marginLeft: `${Math.min(commentDepth.get(item.id) || 0, 4) * 14}px`
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap items-center justify-between gap-2 text-xs",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-slate-200",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-semibold",
                                                                                    children: item.authorName
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                                    lineNumber: 5077,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                " | ",
                                                                                prettyDate(item.createdAt)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 5076,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `rounded-full px-2 py-0.5 uppercase tracking-[0.08em] ${item.status === "approved" ? "bg-emerald-500/15 text-emerald-300" : item.status === "pending" ? "bg-amber-500/15 text-amber-300" : "bg-red-500/15 text-red-300"}`,
                                                                            children: item.status
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 5083,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 5075,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-2 text-sm text-slate-200",
                                                                    children: item.content
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 5095,
                                                                    columnNumber: 25
                                                                }, this),
                                                                item.moderationReason ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-1 text-xs text-amber-200",
                                                                    children: [
                                                                        "Reason: ",
                                                                        item.moderationReason
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 5099,
                                                                    columnNumber: 27
                                                                }, this) : null,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-3 flex flex-wrap gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            disabled: commentActionId === item.id,
                                                                            onClick: ()=>void updateCommentStatus(item.id, "approved"),
                                                                            className: "rounded-md border border-white/20 px-2.5 py-1.5 text-[11px] font-semibold hover:border-emerald-300 hover:text-emerald-300 disabled:opacity-50",
                                                                            children: "Approve"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 5104,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            disabled: commentActionId === item.id,
                                                                            onClick: ()=>void updateCommentStatus(item.id, "pending"),
                                                                            className: "rounded-md border border-white/20 px-2.5 py-1.5 text-[11px] font-semibold hover:border-amber-300 hover:text-amber-300 disabled:opacity-50",
                                                                            children: "Pending"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 5114,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            disabled: commentActionId === item.id,
                                                                            onClick: ()=>void updateCommentStatus(item.id, "spam", "Marked as spam by admin."),
                                                                            className: "rounded-md border border-white/20 px-2.5 py-1.5 text-[11px] font-semibold hover:border-red-300 hover:text-red-300 disabled:opacity-50",
                                                                            children: "Spam"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 5124,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            disabled: commentActionId === item.id,
                                                                            onClick: ()=>void removeComment(item.id),
                                                                            className: "rounded-md border border-red-300/30 px-2.5 py-1.5 text-[11px] font-semibold text-red-200 hover:border-red-300 hover:text-red-100 disabled:opacity-50",
                                                                            children: "Delete"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                                            lineNumber: 5138,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                                    lineNumber: 5103,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, item.id, true, {
                                                            fileName: "[project]/app/blog/cms/page.tsx",
                                                            lineNumber: 5068,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 5066,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 5046,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-slate-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "Editing:",
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-white",
                                                                        children: selectedPost?.title || "New post"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                                        lineNumber: 5158,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                lineNumber: 5156,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-slate-400",
                                                                children: [
                                                                    "Updated:",
                                                                    " ",
                                                                    selectedPost ? prettyDate(selectedPost.updatedAt) : "-"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                lineNumber: 5162,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-slate-400",
                                                                children: [
                                                                    "Scheduled:",
                                                                    " ",
                                                                    selectedPost ? prettyDate(selectedPost.scheduledAt) : "-"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                lineNumber: 5166,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-slate-400",
                                                                children: [
                                                                    "Autosave:",
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-slate-200",
                                                                        children: autoSaveNotice
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                                        lineNumber: 5174,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                lineNumber: 5172,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                        lineNumber: 5155,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "submit",
                                                                disabled: savingPost,
                                                                className: "rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400 disabled:opacity-50",
                                                                children: savingPost ? "Saving..." : form.id ? "Update Post" : "Create Post"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                lineNumber: 5178,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: deletePost,
                                                                disabled: !form.id || deletingPost,
                                                                className: "rounded-lg border border-red-300/30 px-5 py-2.5 text-sm font-semibold text-red-200 transition hover:border-red-300 hover:text-red-100 disabled:cursor-not-allowed disabled:opacity-50",
                                                                children: deletingPost ? "Deleting..." : "Delete Post"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                                lineNumber: 5189,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/blog/cms/page.tsx",
                                                        lineNumber: 5177,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/blog/cms/page.tsx",
                                                lineNumber: 5154,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 5153,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 4336,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/blog/cms/page.tsx",
                                lineNumber: 4335,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/blog/cms/page.tsx",
                        lineNumber: 4211,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/blog/cms/page.tsx",
                lineNumber: 4171,
                columnNumber: 7
            }, this),
            contextMenu.open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: contextMenuRef,
                className: "fixed z-[70] w-[340px] rounded-xl border border-white/15 bg-slate-900/95 p-2.5 shadow-[0_22px_60px_rgba(2,6,23,0.6)] backdrop-blur",
                style: {
                    left: `${contextMenu.x}px`,
                    top: `${contextMenu.y}px`
                },
                role: "menu",
                "aria-label": "Editor context menu",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "px-1 py-1 text-[10px] uppercase tracking-[0.1em] text-slate-400",
                        children: contextMenu.situation === "text-selected" ? "Text selected" : contextMenu.situation === "image" ? "Image" : "Empty line"
                    }, void 0, false, {
                        fileName: "[project]/app/blog/cms/page.tsx",
                        lineNumber: 5213,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 grid grid-cols-2 gap-1.5",
                        children: contextMenu.items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onMouseDown: (event)=>event.preventDefault(),
                                onClick: ()=>runContextCommand(item.id),
                                className: "w-full rounded-md border border-transparent px-2 py-2 text-left text-xs text-slate-200 transition hover:border-emerald-300/40 hover:bg-emerald-500/10 hover:text-emerald-200",
                                children: item.label
                            }, `${contextMenu.situation}-${item.id}-${index}`, false, {
                                fileName: "[project]/app/blog/cms/page.tsx",
                                lineNumber: 5222,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/blog/cms/page.tsx",
                        lineNumber: 5220,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/blog/cms/page.tsx",
                lineNumber: 5206,
                columnNumber: 9
            }, this) : null,
            slashMenu.open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: slashMenuRef,
                className: "fixed z-[72] w-[260px] rounded-xl border border-white/15 bg-slate-900/95 p-2 shadow-[0_22px_60px_rgba(2,6,23,0.6)] backdrop-blur",
                style: {
                    left: `${slashMenu.x}px`,
                    top: `${slashMenu.y}px`
                },
                role: "listbox",
                "aria-label": "Slash commands",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "px-2 py-1 text-[10px] uppercase tracking-[0.1em] text-green-500",
                        children: [
                            "Slash Command",
                            slashMenu.query ? `: ${slashMenu.query}` : ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/blog/cms/page.tsx",
                        lineNumber: 5244,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: slashMenuListRef,
                        className: "mt-1 max-h-64 space-y-1 overflow-auto",
                        onWheel: (event)=>{
                            if (slashMenu.items.length === 0) return;
                            event.preventDefault();
                            const absDelta = Math.abs(event.deltaY);
                            if (absDelta < 2) return;
                            shiftSlashActiveIndex(event.deltaY > 0 ? 1 : -1);
                        },
                        children: slashMenu.items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: (node)=>{
                                    slashItemRefs.current[index] = node;
                                },
                                type: "button",
                                onMouseDown: (event)=>event.preventDefault(),
                                onMouseEnter: ()=>setSlashActiveIndex(index),
                                onClick: ()=>runSlashCommand(item.id),
                                className: `w-full rounded-md border px-2.5 py-2 text-left text-sm transition ${slashMenu.activeIndex === index ? "border-emerald-300/45 bg-emerald-500/15 text-emerald-200" : "border-transparent text-slate-200 hover:border-emerald-300/40 hover:bg-emerald-500/10 hover:text-emerald-200"}`,
                                children: item.label
                            }, `slash-${item.id}-${index}`, false, {
                                fileName: "[project]/app/blog/cms/page.tsx",
                                lineNumber: 5259,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/blog/cms/page.tsx",
                        lineNumber: 5247,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/blog/cms/page.tsx",
                lineNumber: 5237,
                columnNumber: 9
            }, this) : null,
            isImageModalOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-lg rounded-2xl border border-white/15 bg-slate-900 p-5 shadow-[0_30px_80px_rgba(2,6,23,0.55)] sm:p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold text-white",
                            children: replaceImageSrc ? "Replace Image" : "Insert Image"
                        }, void 0, false, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 5284,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xs text-slate-400",
                            children: replaceImageSrc ? "Upload or paste a new image URL to replace the selected one." : "Upload a new image or paste a URL, then add ALT text."
                        }, void 0, false, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 5287,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "my-5 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs text-slate-300",
                                    children: [
                                        "Image URL",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: imageModalUrl,
                                            onChange: (event)=>setImageModalUrl(event.target.value),
                                            placeholder: "https://example.com/image.jpg",
                                            className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm outline-none focus:border-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 5296,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 5294,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs text-slate-300",
                                    children: [
                                        "Upload Image",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            accept: "image/*",
                                            onChange: (event)=>setImageModalFile(event.target.files?.[0] ?? null),
                                            className: "mt-1.5 block w-full cursor-pointer rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm text-slate-200 file:mr-3 file:cursor-pointer file:rounded-md file:border-0 file:bg-emerald-500 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-slate-950"
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 5306,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 5304,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs text-slate-300",
                                    children: [
                                        "ALT Text",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: imageModalAlt,
                                            onChange: (event)=>setImageModalAlt(event.target.value),
                                            placeholder: "Describe the image",
                                            className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm outline-none focus:border-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 5318,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 5316,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs text-slate-300",
                                    children: [
                                        "Figure Caption",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: imageModalCaption,
                                            onChange: (event)=>setImageModalCaption(event.target.value),
                                            placeholder: "Optional caption shown below image",
                                            className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm outline-none focus:border-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 5328,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 5326,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs text-slate-300",
                                    children: [
                                        "Alignment",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: imageModalAlign,
                                            onChange: (event)=>setImageModalAlign(normalizeImageAlign(event.target.value)),
                                            className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm outline-none focus:border-emerald-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "left",
                                                    children: "Left"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 5345,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "center",
                                                    children: "Center"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 5346,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "right",
                                                    children: "Right"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 5347,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 5338,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 5336,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 5293,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 flex flex-wrap justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: closeImageModal,
                                    disabled: insertingImage,
                                    className: "rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/40 disabled:opacity-50",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 5353,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>void insertImageFromModal(),
                                    disabled: insertingImage,
                                    className: "rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400 disabled:opacity-50",
                                    children: insertingImage ? replaceImageSrc ? "Replacing..." : "Inserting..." : replaceImageSrc ? "Replace Image" : "Insert Image"
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 5361,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 5352,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/blog/cms/page.tsx",
                    lineNumber: 5283,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/blog/cms/page.tsx",
                lineNumber: 5282,
                columnNumber: 9
            }, this) : null,
            isFaqModalOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-lg rounded-2xl border border-white/15 bg-slate-900 p-5 shadow-[0_30px_80px_rgba(2,6,23,0.55)] sm:p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold text-white",
                            children: "Insert FAQ"
                        }, void 0, false, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 5383,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xs text-slate-400",
                            children: "Add FAQ question and answer. It will render SEO-friendly FAQ block."
                        }, void 0, false, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 5384,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs text-slate-300",
                                    children: [
                                        "Question",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: faqQuestion,
                                            onChange: (event)=>setFaqQuestion(event.target.value),
                                            placeholder: "What is your question?",
                                            className: "mt-1 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 5392,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 5390,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs text-slate-300",
                                    children: [
                                        "Answer",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            rows: 4,
                                            value: faqAnswer,
                                            onChange: (event)=>setFaqAnswer(event.target.value),
                                            placeholder: "Write the FAQ answer...",
                                            className: "mt-1 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 5401,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 5399,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 5389,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 flex flex-wrap justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: closeFaqModal,
                                    className: "rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/40",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 5412,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: insertFaqFromModal,
                                    className: "rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400",
                                    children: "Insert FAQ"
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 5419,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 5411,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/blog/cms/page.tsx",
                    lineNumber: 5382,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/blog/cms/page.tsx",
                lineNumber: 5381,
                columnNumber: 9
            }, this) : null,
            isLinkModalOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md rounded-2xl border border-white/15 bg-slate-900 p-5 shadow-[0_30px_80px_rgba(2,6,23,0.55)] sm:p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold text-white",
                            children: "Insert Link"
                        }, void 0, false, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 5434,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xs text-slate-400",
                            children: "Add URL and click insert. If no text is selected, URL will be inserted as link text."
                        }, void 0, false, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 5435,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "mt-5 block text-xs text-slate-300",
                            children: [
                                "Link URL",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: linkModalUrl,
                                    onChange: (event)=>setLinkModalUrl(event.target.value),
                                    placeholder: "https://example.com",
                                    className: "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm outline-none focus:border-emerald-400"
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 5442,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 5440,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                            className: "mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                    className: "text-xs text-slate-300",
                                    children: "Link Type"
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 5450,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 grid gap-2 sm:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 bg-slate-800/40 px-3 py-2 text-xs text-slate-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "link-rel-mode",
                                                    checked: linkRelMode === "dofollow",
                                                    onChange: ()=>setLinkRelMode("dofollow"),
                                                    className: "h-4 w-4 accent-emerald-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 5453,
                                                    columnNumber: 19
                                                }, this),
                                                "Dofollow"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 5452,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 bg-slate-800/40 px-3 py-2 text-xs text-slate-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "link-rel-mode",
                                                    checked: linkRelMode === "nofollow",
                                                    onChange: ()=>setLinkRelMode("nofollow"),
                                                    className: "h-4 w-4 accent-emerald-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/cms/page.tsx",
                                                    lineNumber: 5463,
                                                    columnNumber: 19
                                                }, this),
                                                "Nofollow"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/blog/cms/page.tsx",
                                            lineNumber: 5462,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 5451,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 5449,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 flex flex-wrap justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: closeLinkModal,
                                    disabled: insertingLink,
                                    className: "rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/40 disabled:opacity-50",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 5476,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: insertLinkFromModal,
                                    disabled: insertingLink,
                                    className: "rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400 disabled:opacity-50",
                                    children: insertingLink ? "Inserting..." : "Insert Link"
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/cms/page.tsx",
                                    lineNumber: 5484,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/blog/cms/page.tsx",
                            lineNumber: 5475,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/blog/cms/page.tsx",
                    lineNumber: 5433,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/blog/cms/page.tsx",
                lineNumber: 5432,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/app/blog/cms/page.tsx",
        lineNumber: 4167,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_0mi-~6o._.js.map