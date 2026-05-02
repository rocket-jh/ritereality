"use client";

import React, {
  FormEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import NextImage from "next/image";
import { EditorContent, useEditor } from "@tiptap/react";
import { Extension, mergeAttributes, type Editor } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TiptapLink from "@tiptap/extension-link";
import TiptapImage from "@tiptap/extension-image";
import {
  Table as TiptapTable,
  TableCell as TiptapTableCell,
  TableHeader as TiptapTableHeader,
  TableRow as TiptapTableRow,
} from "@tiptap/extension-table";
import {
  getAuthEventName,
  getAuthToken,
} from "@/lib/auth-client";

type Status = "draft" | "published" | "scheduled";

type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImageUrl: string;
  categories: string[];
  tags: string[];
  status: Status;
  scheduledAt: string | null;
  publishedAt: string | null;
  authorName: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    ogImage: string;
    canonicalUrl: string;
    schemaJsonLd: string;
    keywords: string[];
    robotsNoIndex: boolean;
    robotsNoFollow: boolean;
  };
  createdAt: string;
  updatedAt: string;
};

type Category = { id: string; name: string; slug: string };
type Media = {
  id: string;
  url: string;
  fileName: string;
  contentType: string;
  size: number;
  width?: number;
  height?: number;
  createdAt: string;
};

type Settings = { siteTitle: string; authorName: string };

type EditorCommandId =
  | "paragraph"
  | "h1"
  | "h2"
  | "h3"
  | "faq"
  | "table"
  | "bold"
  | "italic"
  | "underline"
  | "bulletList"
  | "orderedList"
  | "blockquote"
  | "codeBlock"
  | "link"
  | "image"
  | "alignTextLeft"
  | "alignTextCenter"
  | "alignTextRight"
  | "insertBlock"
  | "resizeImage"
  | "captionImage"
  | "alignImageLeft"
  | "alignImageCenter"
  | "alignImageRight";

type ContextSituation = "text-selected" | "image" | "empty-line";

type MenuCommand = {
  id: EditorCommandId;
  label: string;
};

type ActiveToolbarState = {
  paragraph: boolean;
  h1: boolean;
  h2: boolean;
  h3: boolean;
  h4: boolean;
  h5: boolean;
  h6: boolean;
  bold: boolean;
  italic: boolean;
  underline: boolean;
  bulletList: boolean;
  orderedList: boolean;
  blockquote: boolean;
  codeBlock: boolean;
  link: boolean;
  alignTextLeft: boolean;
  alignTextCenter: boolean;
  alignTextRight: boolean;
};

type LinkRelMode = "dofollow" | "nofollow";

type EditorInteractionState = {
  isFocused: boolean;
  hasTextSelection: boolean;
  selectedText: string;
  isImageSelected: boolean;
  isEmptyLine: boolean;
  nodeType: string;
  activeLinkHref: string;
  active: ActiveToolbarState;
};

type InlineIndicatorState = {
  visible: boolean;
  x: number;
  y: number;
  label: string;
};

type ContextMenuState = {
  open: boolean;
  x: number;
  y: number;
  situation: ContextSituation | null;
  items: MenuCommand[];
};

type SlashMenuState = {
  open: boolean;
  x: number;
  y: number;
  query: string;
  activeIndex: number;
  items: MenuCommand[];
  replaceFrom: number;
  replaceTo: number;
};

type BlockTemplateId =
  | "section"
  | "faq"
  | "table"
  | "quote"
  | "code"
  | "image"
  | "embed";

type CommentStatus = "approved" | "pending" | "spam";
type CommentItem = {
  id: string;
  postSlug: string;
  parentId: string | null;
  authorName: string;
  content: string;
  status: CommentStatus;
  moderationReason: string;
  createdAt: string;
  updatedAt: string;
};

type AnchorPreviewItem = {
  id: string;
  text: string;
  href: string;
};

type FormState = {
  id: string | null;
  title: string;
  slug: string;
  content: string;
  featuredImageUrl: string;
  imageAltText: string;
  categories: string[];
  tagsInput: string;
  status: Status;
  scheduledAt: string;
  authorName: string;
  metaTitle: string;
  metaDescription: string;
  ogImage: string;
  canonicalUrl: string;
  schemaJsonLd: string;
  seoKeywordsInput: string;
  robotsNoIndex: boolean;
  robotsNoFollow: boolean;
};

const fallbackSettings: Settings = {
  siteTitle: "Infobirth Blog",
  authorName: "Infobirth Team",
};

const emptyActiveToolbarState = (): ActiveToolbarState => ({
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
  alignTextRight: false,
});

const emptyEditorInteractionState = (): EditorInteractionState => ({
  isFocused: false,
  hasTextSelection: false,
  selectedText: "",
  isImageSelected: false,
  isEmptyLine: false,
  nodeType: "paragraph",
  activeLinkHref: "",
  active: emptyActiveToolbarState(),
});

const allToolbarContextCommands: MenuCommand[] = [
  { id: "paragraph", label: "Paragraph" },
  { id: "h1", label: "H1" },
  { id: "h2", label: "H2" },
  { id: "h3", label: "H3" },
  { id: "faq", label: "FAQ" },
  { id: "table", label: "Table" },
  { id: "bold", label: "Bold" },
  { id: "italic", label: "Italic" },
  { id: "underline", label: "Underline" },
  { id: "bulletList", label: "Bullet List" },
  { id: "orderedList", label: "Numbered List" },
  { id: "blockquote", label: "Quote" },
  { id: "codeBlock", label: "Code Block" },
  { id: "link", label: "Link" },
  { id: "alignTextLeft", label: "Text Align Left" },
  { id: "alignTextCenter", label: "Text Align Center" },
  { id: "alignTextRight", label: "Text Align Right" },
  { id: "image", label: "Image" },
  { id: "insertBlock", label: "Insert Block" },
];

const contextActionBySituation: Record<ContextSituation, MenuCommand[]> = {
  "text-selected": [
    { id: "bold", label: "Bold (Context)" },
    { id: "h2", label: "H2 (Context)" },
    { id: "link", label: "Link (Context)" },
    { id: "alignTextLeft", label: "Align Left (Text)" },
    { id: "alignTextCenter", label: "Align Center (Text)" },
    { id: "alignTextRight", label: "Align Right (Text)" },
    { id: "faq", label: "FAQ (Context)" },
  ],
  image: [
    { id: "image", label: "Replace Image" },
    { id: "resizeImage", label: "Resize Image" },
    { id: "captionImage", label: "Edit Caption" },
    { id: "alignImageLeft", label: "Align Left" },
    { id: "alignImageCenter", label: "Align Center" },
    { id: "alignImageRight", label: "Align Right" },
  ],
  "empty-line": [
    { id: "faq", label: "Insert FAQ" },
    { id: "table", label: "Insert Table" },
    { id: "insertBlock", label: "Insert Block" },
  ],
};

const slashCommandCatalog: Array<
  MenuCommand & { keyword: string; shortcut?: string }
> = [
  { id: "paragraph", label: "Paragraph", keyword: "p paragraph text" },
  { id: "h2", label: "Heading 2", keyword: "h2 heading section" },
  { id: "h3", label: "Heading 3", keyword: "h3 heading subsection" },
  {
    id: "bulletList",
    label: "Bullet list",
    keyword: "list ul bullet unordered",
  },
  {
    id: "orderedList",
    label: "Ordered list",
    keyword: "list ol ordered numbered",
  },
  { id: "faq", label: "FAQ", keyword: "faq question answer schema" },
  { id: "blockquote", label: "Quote block", keyword: "blockquote quote" },
  { id: "codeBlock", label: "Code block", keyword: "code pre snippet" },
  { id: "image", label: "Image", keyword: "image media photo" },
];

const blockTemplateCatalog: Array<{
  id: BlockTemplateId;
  label: string;
  description: string;
}> = [
  {
    id: "section",
    label: "Section",
    description: "Heading + paragraph block",
  },
  {
    id: "faq",
    label: "FAQ",
    description: "Question and answer block",
  },
  {
    id: "table",
    label: "Table",
    description: "Responsive table block",
  },
  {
    id: "quote",
    label: "Quote",
    description: "Blockquote highlight",
  },
  {
    id: "code",
    label: "Code",
    description: "Code block with monospace style",
  },
  {
    id: "image",
    label: "Image",
    description: "Upload or replace image block",
  },
  {
    id: "embed",
    label: "Embed",
    description: "Video/link embed block",
  },
];

type ImageAlign = "left" | "center" | "right";
type TextAlignMode = "left" | "center" | "right";

const clampImageWidth = (value: number) =>
  Math.max(30, Math.min(100, Math.round(value)));

const normalizeImageAlign = (value: string | null | undefined): ImageAlign => {
  if (value === "left" || value === "right") return value;
  return "center";
};

const normalizeTextAlign = (value: string | null | undefined): TextAlignMode => {
  if (value === "right" || value === "center") return value;
  return "left";
};

const CmsTextAlign = Extension.create({
  name: "cmsTextAlign",
  addGlobalAttributes() {
    return [
      {
        types: [
          "paragraph",
          "heading",
          "blockquote",
          "listItem",
          "tableCell",
          "tableHeader",
          "codeBlock",
        ],
        attributes: {
          textAlign: {
            default: "left",
            parseHTML: (element) =>
              normalizeTextAlign(
                (element as HTMLElement).style.textAlign ||
                  element.getAttribute("data-text-align") ||
                  "left",
              ),
            renderHTML: (attributes) => {
              const align = normalizeTextAlign(
                String(attributes.textAlign || "left"),
              );
              return {
                style: `text-align:${align};`,
                "data-text-align": align,
              };
            },
          },
        },
      },
    ];
  },
});

const imageStyleFromLayout = (widthPercent: number, align: ImageAlign) => {
  const safeWidth = clampImageWidth(widthPercent);
  const margin =
    align === "left"
      ? "1rem auto 1rem 0"
      : align === "right"
        ? "1rem 0 1rem auto"
        : "1rem auto";
  return `display:block;max-width:100%;width:${safeWidth}%;height:auto;border-radius:12px;margin:${margin};`;
};

const imageWidthFromStyle = (style: string | null | undefined) => {
  const match = style?.match(/width\s*:\s*(\d+(?:\.\d+)?)%/i);
  const width = match ? Number(match[1]) : 100;
  return Number.isFinite(width) ? clampImageWidth(width) : 100;
};

const imageAlignFromNode = (node: HTMLElement): ImageAlign => {
  const attrAlign = normalizeImageAlign(node.getAttribute("data-align"));
  if (attrAlign !== "center") return attrAlign;
  const style = node.getAttribute("style") || "";
  if (/margin\s*:\s*[^;]*\s0\s1rem\sauto/i.test(style)) return "right";
  if (/margin\s*:\s*[^;]*\sauto\s1rem\s0/i.test(style)) return "left";
  return "center";
};

const CmsImage = TiptapImage.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      style: {
        default: "",
        parseHTML: (element) => element.getAttribute("style") || "",
        renderHTML: (attributes) => {
          const style = String(attributes.style || "").trim();
          return style ? { style } : {};
        },
      },
      dataAlign: {
        default: "center",
        parseHTML: (element) =>
          normalizeImageAlign(element.getAttribute("data-align")),
        renderHTML: (attributes) => ({
          "data-align": normalizeImageAlign(
            String(attributes.dataAlign || "center"),
          ),
        }),
      },
      dataCaption: {
        default: "",
        parseHTML: (element) => element.getAttribute("data-caption") || "",
        renderHTML: (attributes) => {
          const caption = String(attributes.dataCaption || "").trim();
          return caption ? { "data-caption": caption } : {};
        },
      },
      dataMediaId: {
        default: "",
        parseHTML: (element) => element.getAttribute("data-media-id") || "",
        renderHTML: (attributes) => {
          const mediaId = String(attributes.dataMediaId || "").trim();
          return mediaId ? { "data-media-id": mediaId } : {};
        },
      },
    };
  },
  renderHTML({ HTMLAttributes }) {
    const attrs = { ...HTMLAttributes } as Record<string, string>;
    const width = imageWidthFromStyle(attrs.style || "");
    const align = normalizeImageAlign(attrs["data-align"] || "center");
    attrs.style = imageStyleFromLayout(width, align);
    attrs["data-align"] = align;
    return ["img", mergeAttributes(this.options.HTMLAttributes, attrs)];
  },
});

const slugify = (v: string) =>
  v
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const tagList = (v: string) =>
  Array.from(
    new Set(
      v
        .split(",")
        .map((x) => x.trim().toLowerCase())
        .filter(Boolean),
    ),
  );

const normalizedSeo = (post: Post) => ({
  metaTitle: post.seo?.metaTitle || post.title,
  metaDescription: post.seo?.metaDescription || post.excerpt,
  ogImage: post.seo?.ogImage || post.featuredImageUrl || "",
  canonicalUrl: post.seo?.canonicalUrl || "",
  schemaJsonLd: post.seo?.schemaJsonLd || "",
  keywords: Array.from(
    new Set(
      [...(post.seo?.keywords || []), ...post.tags]
        .map((item) => item.trim().toLowerCase())
        .filter(Boolean),
    ),
  ),
  robotsNoIndex: Boolean(post.seo?.robotsNoIndex),
  robotsNoFollow: Boolean(post.seo?.robotsNoFollow),
});

const payloadHashFromPost = (post: Post) => {
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
    seo,
  });
};

type LocalStorageDraft = {
  savedAt: string;
  hash: string;
  form: FormState;
};

const AUTO_SAVE_STORAGE_KEY = "ib_blog_cms_autosave_v1";

const clearAutoSaveDraft = () => {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(AUTO_SAVE_STORAGE_KEY);
};

const writeAutoSaveDraft = (draft: LocalStorageDraft) => {
  if (typeof window === "undefined") {
    return { ok: false as const, message: "Local storage is unavailable." };
  }
  try {
    window.localStorage.setItem(AUTO_SAVE_STORAGE_KEY, JSON.stringify(draft));
    return { ok: true as const };
  } catch {
    return {
      ok: false as const,
      message:
        "Local storage quota exceeded. Remove large media HTML and retry.",
    };
  }
};

const readAutoSaveDraft = () => {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(AUTO_SAVE_STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as LocalStorageDraft;
  } catch {
    return null;
  }
};

const emptyForm = (authorName: string): FormState => ({
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
  robotsNoFollow: false,
});

const toLocalDateTime = (iso: string | null) => {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

const toIsoDateTime = (local: string) => {
  if (!local) return null;
  const d = new Date(local);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString();
};

const prettyDate = (v: string | null) => {
  if (!v) return "-";
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? "-" : d.toLocaleString();
};

const bytes = (n: number) => {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
};

const NEW_BLOG_SECTION_PROMPT = "Start new blog";

const escapeHtml = (s: string) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const stripBidiControlChars = (html: string) =>
  html.replace(/[\u202A-\u202E\u2066-\u2069]/g, "");

const normalizeEditorDirection = (html: string) => {
  if (typeof document === "undefined") {
    return html
      .replace(/\sdir=(["'])(rtl|auto)\1/gi, ' dir="ltr"') // Force ltr
      .replace(/direction\s*:\s*(rtl|auto)\s*;?/gi, "direction:ltr;"); // Force ltr
  }

  const template = document.createElement("template");
  template.innerHTML = html;

  // Find all elements and force LTR strictly during sanitize on save
  const allElements = Array.from(
    template.content.querySelectorAll<HTMLElement>("*"),
  );
  allElements.forEach((el) => {
    if (el.hasAttribute("dir")) {
      el.setAttribute("dir", "ltr");
    }
    if (el.style.direction) {
      el.style.direction = "ltr";
    }
  });

  return template.innerHTML;
};

const sanitizeEditorHtml = (html: string) =>
  normalizeEditorDirection(stripBidiControlChars(html));

const sanitizeEditorHtmlForSave = (html: string) =>
  sanitizeEditorHtml(html)
    .replace(
      /<button[^>]*data-type="delete-image"[^>]*>[\s\S]*?<\/button>/gi,
      "",
    )
    .replace(/\scontenteditable="false"/gi, "")
    .replace(/\sdraggable="true"/gi, "")
    .replace(/\sdata-editor-block="true"/gi, "")
    .replace(/\sdata-block-index="[^"]*"/gi, "")
    .replace(/<div class="editor-image-wrapper"[^>]*>([\s\S]*?)<\/div>/gi, "$1");

const withEditorImageControls = (html: string) => sanitizeEditorHtml(html);

const imageHtml = (
  url: string,
  alt: string,
  mediaId?: string | null,
  caption = "",
  align: ImageAlign = "center",
  widthPercent = 100,
) =>
  `<img 
    src="${escapeHtml(url)}" 
    alt="${escapeHtml(alt)}"
    title="${escapeHtml(alt)}"
    ${mediaId ? `data-media-id="${escapeHtml(mediaId)}"` : ""}
    data-align="${escapeHtml(align)}"
    ${caption.trim() ? `data-caption="${escapeHtml(caption.trim())}"` : ""}
    style="${escapeHtml(imageStyleFromLayout(widthPercent, align))}"
  /><p></p>`;

const faqHtml = (question: string, answer: string) =>
  `<div class="faq-block" style="margin:1rem 0;">
    <h3>${escapeHtml(question)}</h3>
    <p>${escapeHtml(answer)}</p>
  </div><p></p>`;

const tableHtml = (rows: number, cols: number) => {
  const safeRows = Math.min(10, Math.max(1, rows));
  const safeCols = Math.min(8, Math.max(1, cols));

  const head = Array.from({ length: safeCols })
    .map(
      (_, i) =>
        `<th style="border:1px solid #cbd5e1;padding:8px;text-align:left;">Heading ${i + 1}</th>`,
    )
    .join("");

  const body = Array.from({ length: safeRows })
    .map(
      (_, r) =>
        `<tr>${Array.from({ length: safeCols })
          .map(
            (_, c) =>
              `<td style="border:1px solid #cbd5e1;padding:8px;">Row ${r + 1}, Col ${c + 1}</td>`,
          )
          .join("")}</tr>`,
    )
    .join("");

  return `<div style="overflow-x:auto;margin:1rem 0;">
    <table style="width:100%;border-collapse:collapse;">
      <thead><tr>${head}</tr></thead>
      <tbody>${body}</tbody>
    </table>
  </div>`;
};

const textFromHtml = (html: string) =>
  html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<\/?[^>]+(>|$)/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const anchorLinksFromHtml = (html: string): AnchorPreviewItem[] => {
  if (!html.trim()) return [];

  if (typeof DOMParser === "undefined") {
    const links: AnchorPreviewItem[] = [];
    const regex = /<a[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
    let match: RegExpExecArray | null = regex.exec(html);
    while (match) {
      const href = (match[1] || "").trim();
      const text = textFromHtml(match[2] || "").trim() || href;
      if (href) {
        links.push({
          id: `link-${links.length + 1}`,
          text,
          href,
        });
      }
      match = regex.exec(html);
    }
    return links;
  }

  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const anchors = Array.from(doc.querySelectorAll<HTMLAnchorElement>("a[href]"));
    return anchors
      .map((anchor, index) => {
        const href = (anchor.getAttribute("href") || "").trim();
        const text = (anchor.textContent || "").replace(/\s+/g, " ").trim() || href;
        if (!href) return null;
        return {
          id: `link-${index + 1}`,
          text,
          href,
        } satisfies AnchorPreviewItem;
      })
      .filter((item): item is AnchorPreviewItem => Boolean(item));
  } catch {
    return [];
  }
};

const faqFromHtml = (html: string) => {
  if (typeof DOMParser === "undefined") {
    return [] as Array<{ question: string; answer: string }>;
  }
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const faqBlocks = Array.from(doc.querySelectorAll(".faq-block"));
    const detailBlocks = Array.from(doc.querySelectorAll("details"));
    const entries: Array<{ question: string; answer: string }> = [];

    const seen = new Set<string>();
    const pushEntry = (questionRaw: string, answerRaw: string) => {
      const question = questionRaw
        .replace(/^(faq|q|question)\s*[:\-]\s*/i, "")
        .replace(/\s+/g, " ")
        .trim();
      const answer = answerRaw
        .replace(/^(a|answer)\s*[:\-]\s*/i, "")
        .replace(/\s+/g, " ")
        .trim();
      if (!question || !answer) return;
      const key = `${question.toLowerCase()}::${answer.toLowerCase()}`;
      if (seen.has(key)) return;
      seen.add(key);
      entries.push({ question, answer });
    };

    faqBlocks.forEach((node) => {
      const question =
        node.querySelector("h3,h2,h4,summary")?.textContent?.trim() || "";
      const answer = node.querySelector("p")?.textContent?.trim() || "";
      pushEntry(question, answer);
    });

    detailBlocks.forEach((node) => {
      const question = node.querySelector("summary")?.textContent?.trim() || "";
      const answer = textFromHtml(
        node.innerHTML.replace(/<summary[\s\S]*?<\/summary>/i, ""),
      );
      pushEntry(question, answer);
    });

    const headingNodes = Array.from(doc.querySelectorAll("h2, h3, h4"));
    headingNodes.forEach((heading) => {
      const questionRaw = heading.textContent?.trim() || "";
      const normalizedQuestion = questionRaw
        .replace(/^(faq|q|question)\s*[:\-]\s*/i, "")
        .trim();
      const looksLikeFaq =
        /\?\s*$/.test(normalizedQuestion) ||
        /^(faq|q|question)\s*[:\-]/i.test(questionRaw);
      if (!looksLikeFaq) return;
      const next = heading.nextElementSibling;
      if (!next || next.tagName.toLowerCase() !== "p") return;
      const answer = next.textContent?.trim() || "";
      pushEntry(questionRaw, answer);
    });

    const qaNodes = Array.from(doc.querySelectorAll("p, li"));
    for (let index = 0; index < qaNodes.length - 1; index += 1) {
      const questionRaw = qaNodes[index]?.textContent?.trim() || "";
      const answerRaw = qaNodes[index + 1]?.textContent?.trim() || "";
      const isQuestion = /^(q|question)\s*[:\-]/i.test(questionRaw);
      const isAnswer = /^(a|answer)\s*[:\-]/i.test(answerRaw);
      if (!isQuestion || !isAnswer) continue;
      pushEntry(questionRaw, answerRaw);
      index += 1;
    }

    return entries;
  } catch {
    return [] as Array<{ question: string; answer: string }>;
  }
};

type SchemaJsonNode = Record<string, unknown>;
type SchemaFaqEntity = {
  "@type": "Question";
  name: string;
  acceptedAnswer: {
    "@type": "Answer";
    text: string;
  };
};

const hasType = (node: SchemaJsonNode, typeName: string) => {
  const target = typeName.toLowerCase();
  const typeValue = node["@type"];
  if (Array.isArray(typeValue)) {
    return typeValue.some((item) => String(item).toLowerCase() === target);
  }
  return String(typeValue || "").toLowerCase() === target;
};

const parseSchemaNodes = (schemaJsonLd: string): SchemaJsonNode[] => {
  const raw = schemaJsonLd.trim();
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw) as unknown;
    if (Array.isArray(parsed)) {
      return parsed.filter(
        (item): item is SchemaJsonNode =>
          Boolean(item) && typeof item === "object" && !Array.isArray(item),
      );
    }
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      const node = parsed as SchemaJsonNode;
      const graph = node["@graph"];
      if (Array.isArray(graph)) {
        return graph.filter(
          (item): item is SchemaJsonNode =>
            Boolean(item) && typeof item === "object" && !Array.isArray(item),
        );
      }
      return [node];
    }
  } catch {
    return [];
  }

  return [];
};

const findSchemaNodeByType = (
  schemaJsonLd: string,
  typeName: string,
): SchemaJsonNode | null =>
  parseSchemaNodes(schemaJsonLd).find((node) => hasType(node, typeName)) || null;

const withSchemaContext = (node: SchemaJsonNode): SchemaJsonNode =>
  typeof node["@context"] === "string" && node["@context"].trim()
    ? node
    : { "@context": "https://schema.org", ...node };

const faqEntitiesFromHtml = (html: string): SchemaFaqEntity[] =>
  faqFromHtml(html).map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));

const upsertFaqPageInSchemaJsonLd = (
  schemaJsonLd: string,
  faqEntities: SchemaFaqEntity[],
) => {
  const raw = schemaJsonLd.trim();
  if (!raw || faqEntities.length === 0) return raw;

  const withFaqNode = (node: SchemaJsonNode): SchemaJsonNode => ({
    ...node,
    "@context":
      typeof node["@context"] === "string" && node["@context"].trim()
        ? node["@context"]
        : "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntities,
  });

  const fallbackFaqNode: SchemaJsonNode = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntities,
  };

  try {
    const parsed = JSON.parse(raw) as unknown;

    if (Array.isArray(parsed)) {
      const next = [...parsed];
      const faqIndex = next.findIndex(
        (item) => !!item && typeof item === "object" && hasType(item as SchemaJsonNode, "FAQPage"),
      );
      if (faqIndex >= 0) {
        next[faqIndex] = withFaqNode(next[faqIndex] as SchemaJsonNode);
      } else {
        next.push(fallbackFaqNode);
      }
      return JSON.stringify(next, null, 2);
    }

    if (parsed && typeof parsed === "object") {
      const node = parsed as SchemaJsonNode;
      const graph = node["@graph"];

      if (Array.isArray(graph)) {
        const nextGraph = [...graph];
        const faqIndex = nextGraph.findIndex(
          (item) =>
            !!item && typeof item === "object" && hasType(item as SchemaJsonNode, "FAQPage"),
        );
        if (faqIndex >= 0) {
          nextGraph[faqIndex] = withFaqNode(nextGraph[faqIndex] as SchemaJsonNode);
        } else {
          nextGraph.push(fallbackFaqNode);
        }
        return JSON.stringify(
          {
            ...node,
            "@graph": nextGraph,
          },
          null,
          2,
        );
      }

      if (hasType(node, "FAQPage")) {
        return JSON.stringify(withFaqNode(node), null, 2);
      }

      return JSON.stringify([node, fallbackFaqNode], null, 2);
    }
  } catch {
    return "";
  }

  return "";
};

const upsertBreadcrumbListInSchemaJsonLd = (
  schemaJsonLd: string,
  breadcrumbNode: SchemaJsonNode,
) => {
  const raw = schemaJsonLd.trim();
  if (!raw) return raw;

  const normalizedBreadcrumbNode = withSchemaContext({
    ...breadcrumbNode,
    "@type": "BreadcrumbList",
  });

  const withBreadcrumbNode = (node: SchemaJsonNode): SchemaJsonNode => ({
    ...node,
    "@context":
      typeof node["@context"] === "string" && node["@context"].trim()
        ? node["@context"]
        : normalizedBreadcrumbNode["@context"],
    "@type": "BreadcrumbList",
    itemListElement: normalizedBreadcrumbNode.itemListElement,
  });

  try {
    const parsed = JSON.parse(raw) as unknown;

    if (Array.isArray(parsed)) {
      const next = [...parsed];
      const breadcrumbIndex = next.findIndex(
        (item) =>
          !!item &&
          typeof item === "object" &&
          hasType(item as SchemaJsonNode, "BreadcrumbList"),
      );
      if (breadcrumbIndex >= 0) {
        next[breadcrumbIndex] = withBreadcrumbNode(
          next[breadcrumbIndex] as SchemaJsonNode,
        );
      } else {
        next.push(normalizedBreadcrumbNode);
      }
      return JSON.stringify(next, null, 2);
    }

    if (parsed && typeof parsed === "object") {
      const node = parsed as SchemaJsonNode;
      const graph = node["@graph"];

      if (Array.isArray(graph)) {
        const nextGraph = [...graph];
        const breadcrumbIndex = nextGraph.findIndex(
          (item) =>
            !!item &&
            typeof item === "object" &&
            hasType(item as SchemaJsonNode, "BreadcrumbList"),
        );
        if (breadcrumbIndex >= 0) {
          nextGraph[breadcrumbIndex] = withBreadcrumbNode(
            nextGraph[breadcrumbIndex] as SchemaJsonNode,
          );
        } else {
          nextGraph.push(normalizedBreadcrumbNode);
        }
        return JSON.stringify(
          {
            ...node,
            "@graph": nextGraph,
          },
          null,
          2,
        );
      }

      if (hasType(node, "BreadcrumbList")) {
        return JSON.stringify(withBreadcrumbNode(node), null, 2);
      }

      return JSON.stringify([node, normalizedBreadcrumbNode], null, 2);
    }
  } catch {
    return "";
  }

  return "";
};

const upsertBlogPostingInSchemaJsonLd = (
  schemaJsonLd: string,
  blogPostingNode: SchemaJsonNode,
) => {
  const raw = schemaJsonLd.trim();
  if (!raw) return raw;

  const normalizedBlogPostingNode = withSchemaContext({
    ...blogPostingNode,
    "@type": "BlogPosting",
  });

  const withBlogPostingNode = (node: SchemaJsonNode): SchemaJsonNode => {
    const normalizedAuthor =
      normalizedBlogPostingNode.author &&
      typeof normalizedBlogPostingNode.author === "object" &&
      !Array.isArray(normalizedBlogPostingNode.author)
        ? (normalizedBlogPostingNode.author as SchemaJsonNode)
        : null;
    const normalizedPublisher =
      normalizedBlogPostingNode.publisher &&
      typeof normalizedBlogPostingNode.publisher === "object" &&
      !Array.isArray(normalizedBlogPostingNode.publisher)
        ? (normalizedBlogPostingNode.publisher as SchemaJsonNode)
        : null;
    const normalizedMainEntity =
      normalizedBlogPostingNode.mainEntityOfPage &&
      typeof normalizedBlogPostingNode.mainEntityOfPage === "object" &&
      !Array.isArray(normalizedBlogPostingNode.mainEntityOfPage)
        ? (normalizedBlogPostingNode.mainEntityOfPage as SchemaJsonNode)
        : null;

    const currentAuthor =
      node.author && typeof node.author === "object" && !Array.isArray(node.author)
        ? (node.author as SchemaJsonNode)
        : null;
    const currentPublisher =
      node.publisher &&
      typeof node.publisher === "object" &&
      !Array.isArray(node.publisher)
        ? (node.publisher as SchemaJsonNode)
        : null;
    const currentMainEntity =
      node.mainEntityOfPage &&
      typeof node.mainEntityOfPage === "object" &&
      !Array.isArray(node.mainEntityOfPage)
        ? (node.mainEntityOfPage as SchemaJsonNode)
        : null;

    return {
      ...normalizedBlogPostingNode,
      ...node,
      "@context":
        typeof node["@context"] === "string" && node["@context"].trim()
          ? node["@context"]
          : normalizedBlogPostingNode["@context"],
      "@type": "BlogPosting",
      ...(normalizedAuthor || currentAuthor
        ? {
            author: {
              ...(normalizedAuthor || {}),
              ...(currentAuthor || {}),
            },
          }
        : {}),
      ...(normalizedPublisher || currentPublisher
        ? {
            publisher: {
              ...(normalizedPublisher || {}),
              ...(currentPublisher || {}),
            },
          }
        : {}),
      ...(normalizedMainEntity || currentMainEntity
        ? {
            mainEntityOfPage: {
              ...(normalizedMainEntity || {}),
              ...(currentMainEntity || {}),
            },
          }
        : {}),
    };
  };

  try {
    const parsed = JSON.parse(raw) as unknown;

    if (Array.isArray(parsed)) {
      const next = [...parsed];
      const blogPostingIndex = next.findIndex(
        (item) =>
          !!item && typeof item === "object" && hasType(item as SchemaJsonNode, "BlogPosting"),
      );
      if (blogPostingIndex >= 0) {
        next[blogPostingIndex] = withBlogPostingNode(
          next[blogPostingIndex] as SchemaJsonNode,
        );
      } else {
        next.unshift(normalizedBlogPostingNode);
      }
      return JSON.stringify(next, null, 2);
    }

    if (parsed && typeof parsed === "object") {
      const node = parsed as SchemaJsonNode;
      const graph = node["@graph"];

      if (Array.isArray(graph)) {
        const nextGraph = [...graph];
        const blogPostingIndex = nextGraph.findIndex(
          (item) =>
            !!item && typeof item === "object" && hasType(item as SchemaJsonNode, "BlogPosting"),
        );
        if (blogPostingIndex >= 0) {
          nextGraph[blogPostingIndex] = withBlogPostingNode(
            nextGraph[blogPostingIndex] as SchemaJsonNode,
          );
        } else {
          nextGraph.unshift(normalizedBlogPostingNode);
        }
        return JSON.stringify(
          {
            ...node,
            "@graph": nextGraph,
          },
          null,
          2,
        );
      }

      if (hasType(node, "BlogPosting")) {
        return JSON.stringify(withBlogPostingNode(node), null, 2);
      }

      return JSON.stringify([normalizedBlogPostingNode, node], null, 2);
    }
  } catch {
    return "";
  }

  return "";
};

const resolveSchemaJsonLdForContent = ({
  currentSchemaJsonLd,
  generatedSchemaJsonLd,
  content,
}: {
  currentSchemaJsonLd: string;
  generatedSchemaJsonLd: string;
  content: string;
}) => {
  const faqEntities = faqEntitiesFromHtml(content);
  const current = currentSchemaJsonLd.trim();
  const generated = generatedSchemaJsonLd.trim();
  const base = current || generated;
  if (!base) return "";

  const generatedBlogPosting = findSchemaNodeByType(generated, "BlogPosting");
  const generatedBreadcrumb = findSchemaNodeByType(generated, "BreadcrumbList");
  let resolved = base;

  if (generatedBlogPosting) {
    const blogPostingMerged = upsertBlogPostingInSchemaJsonLd(
      resolved,
      generatedBlogPosting,
    );
    if (blogPostingMerged.trim()) {
      resolved = blogPostingMerged;
    } else if (generated) {
      resolved = generated;
    }
  }

  if (generatedBreadcrumb) {
    const breadcrumbMerged = upsertBreadcrumbListInSchemaJsonLd(
      resolved,
      generatedBreadcrumb,
    );
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

const autoSchemaJsonLd = ({
  title,
  slug,
  content,
  featuredImageUrl,
  categories,
  tags,
  authorName,
  seo,
}: {
  title: string;
  slug: string;
  content: string;
  featuredImageUrl: string;
  categories: string[];
  tags: string[];
  authorName?: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    ogImage: string;
    canonicalUrl: string;
    keywords: string[];
  };
}) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  const toAbsoluteUrl = (value: string) => {
    const input = value.trim();
    if (!input) return "";
    if (/^https?:\/\//i.test(input)) return input;
    if (!siteUrl) return input.startsWith("/") ? input : `/${input}`;
    return input.startsWith("/") ? `${siteUrl}${input}` : `${siteUrl}/${input}`;
  };

  const canonicalUrl =
    toAbsoluteUrl(seo.canonicalUrl.trim()) ||
    (slug ? toAbsoluteUrl(`/blog/${slug}`) : "");
  const description =
    seo.metaDescription.trim() ||
    textFromHtml(content).slice(0, 180) ||
    title.trim();
  const image = toAbsoluteUrl(seo.ogImage.trim() || featuredImageUrl.trim());
  const nowIso = new Date().toISOString();
  const postPath = slug ? `/blog/${slug}` : "/blog";
  const postUrl = canonicalUrl || toAbsoluteUrl(postPath);
  const publisherName = process.env.NEXT_PUBLIC_SITE_NAME?.trim() || "Infobirth";
  const publisherLogoUrl =
    process.env.NEXT_PUBLIC_SITE_LOGO_URL?.trim() ||
    (siteUrl ? `${siteUrl}/logo.png` : "");

  const blogPosting: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: seo.metaTitle.trim() || title.trim(),
    description,
    datePublished: nowIso,
    dateModified: nowIso,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    url: postUrl,
    publisher: {
      "@type": "Organization",
      name: publisherName,
      ...(publisherLogoUrl
        ? {
            logo: {
              "@type": "ImageObject",
              url: publisherLogoUrl,
            },
          }
        : {}),
    },
  };

  blogPosting.author = {
    "@type": "Person",
    name: authorName?.trim() || "Infobirth Team",
  };

  if (image) {
    blogPosting.image = image;
  }
  const keywordMap = new Map<string, string>();
  [...tags, ...seo.keywords]
    .map((item) => item.trim())
    .filter(Boolean)
    .forEach((item) => {
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

  const breadcrumbNode: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: toAbsoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: toAbsoluteUrl("/blog"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title.trim() || "Blog Post",
        item: postUrl,
      },
    ],
  };

  const faqEntities = faqEntitiesFromHtml(content);

  const schemaNodes: Array<Record<string, unknown>> = [blogPosting, breadcrumbNode];
  if (faqEntities.length === 0) {
    return JSON.stringify(schemaNodes, null, 2);
  }

  schemaNodes.push({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntities,
  });

  return JSON.stringify(schemaNodes, null, 2);
};

function embedHtml(url: string) {
  const input = url.trim();
  if (!input) return "";
  try {
    const parsed = new URL(input);
    const host = parsed.hostname.toLowerCase();
    if (host.includes("youtu.be") || host.includes("youtube.com")) {
      const id = host.includes("youtu.be")
        ? parsed.pathname.replace("/", "")
        : parsed.searchParams.get("v") || "";
      if (id) {
        return `<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1rem 0;"><iframe src="https://www.youtube.com/embed/${escapeHtml(id)}" title="Embedded video" style="position:absolute;inset:0;width:100%;height:100%;border:0;" allowfullscreen></iframe></div>`;
      }
    }
    return `<p><a href="${escapeHtml(input)}" target="_blank" rel="noopener noreferrer">${escapeHtml(input)}</a></p>`;
  } catch {
    return "";
  }
}

async function optimizeImage(file: File) {
  const objectUrl = URL.createObjectURL(file);
  try {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error("Unable to read image."));
      image.src = objectUrl;
    });
    const maxEdge = 1600;
    const scale = Math.min(
      1,
      maxEdge / Math.max(img.naturalWidth, img.naturalHeight),
    );
    const width = Math.max(1, Math.round(img.naturalWidth * scale));
    const height = Math.max(1, Math.round(img.naturalHeight * scale));
    if (scale === 1 && file.size <= 1_200_000) {
      return { file, width: img.naturalWidth, height: img.naturalHeight };
    }

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Unable to optimize image.");
    ctx.drawImage(img, 0, 0, width, height);

    const outType = file.type === "image/png" ? "image/png" : "image/jpeg";
    const ext = outType === "image/png" ? "png" : "jpg";
    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, outType, 0.82),
    );
    if (!blob) throw new Error("Image optimization failed.");

    const useBlob = blob.size < file.size ? blob : file;
    const outName = file.name.replace(/\.[a-zA-Z0-9]+$/, `.${ext}`);
    const outFile =
      useBlob instanceof File
        ? useBlob
        : new File([useBlob], outName, { type: outType });
    return { file: outFile, width, height };
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

export default function App() {
  const editorHtmlRef = useRef(emptyForm(fallbackSettings.authorName).content);
  const isPersistingRef = useRef(false);
  const lastSavedHashRef = useRef("");
  const lastCookieHashRef = useRef("");
  const hasRestoredDraftRef = useRef(false);
  const formRef = useRef<FormState>(emptyForm(fallbackSettings.authorName));
  const persistPostShortcutRef = useRef<(() => Promise<void>) | null>(null);

  // We separate `initialContent` to prevent React from updating the
  // dangerouslySetInnerHTML continuously while typing, which completely fixes the cursor backwards issue.
  const [initialContent, setInitialContent] = useState(
    emptyForm(fallbackSettings.authorName).content,
  );
  const [editorKey, setEditorKey] = useState(0);

  const [slugTouched, setSlugTouched] = useState(false);
  const [embedUrl, setEmbedUrl] = useState("");
  const [newCategoryName, setNewCategoryName] = useState("");
  const [faqQuestion, setFaqQuestion] = useState("");
  const [faqAnswer, setFaqAnswer] = useState("");
  const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);
  const [tableRows, setTableRows] = useState(3);
  const [tableCols, setTableCols] = useState(3);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageModalUrl, setImageModalUrl] = useState("");
  const [imageModalAlt, setImageModalAlt] = useState("");
  const [imageModalCaption, setImageModalCaption] = useState("");
  const [imageModalAlign, setImageModalAlign] = useState<ImageAlign>("center");
  // const [imageModalWidth, setImageModalWidth] = useState(100);
  const [imageModalFile, setImageModalFile] = useState<File | null>(null);
  const [insertingImage, setInsertingImage] = useState(false);
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [linkModalUrl, setLinkModalUrl] = useState("");
  const [linkRelMode, setLinkRelMode] = useState<LinkRelMode>("dofollow");
  const [insertingLink, setInsertingLink] = useState(false);
  const linkSelectionRef = useRef<{ from: number; to: number } | null>(null);
  const editorSurfaceRef = useRef<HTMLDivElement | null>(null);
  const contextMenuRef = useRef<HTMLDivElement | null>(null);
  const slashMenuRef = useRef<HTMLDivElement | null>(null);
  const slashMenuListRef = useRef<HTMLDivElement | null>(null);
  const slashItemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [replaceImageSrc, setReplaceImageSrc] = useState<string | null>(null);
  const [contextImageSrc, setContextImageSrc] = useState<string | null>(null);
  const [interactionState, setInteractionState] =
    useState<EditorInteractionState>(emptyEditorInteractionState());
  const [inlineIndicator, setInlineIndicator] = useState<InlineIndicatorState>({
    visible: false,
    x: 0,
    y: 0,
    label: "",
  });
  const [contextMenu, setContextMenu] = useState<ContextMenuState>({
    open: false,
    x: 0,
    y: 0,
    situation: null,
    items: [],
  });
  const [slashMenu, setSlashMenu] = useState<SlashMenuState>({
    open: false,
    x: 0,
    y: 0,
    query: "",
    activeIndex: 0,
    items: [],
    replaceFrom: 0,
    replaceTo: 0,
  });
  const [commandPipeline, setCommandPipeline] = useState<string[]>([
    "Editor ready.",
    "Selection tracking enabled.",
    "Toolbar/UI sync active.",
  ]);

  const [authReady, setAuthReady] = useState(false);
  const [authToken, setAuthToken] = useState<string | null>(null);

  const [loading, setLoading] = useState(true);
  const [savingPost, setSavingPost] = useState(false);
  const [deletingPost, setDeletingPost] = useState(false);
  const [savingSettings, setSavingSettings] = useState(false);
  const [savingCategory, setSavingCategory] = useState(false);
  const [uploadingMedia, setUploadingMedia] = useState(false);
  const [autoSaveNotice, setAutoSaveNotice] = useState("Idle");

  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [mediaItems, setMediaItems] = useState<Media[]>([]);
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [loadingComments, setLoadingComments] = useState(false);
  const [commentActionId, setCommentActionId] = useState("");
  const [settings, setSettings] = useState<Settings>(fallbackSettings);
  const [form, setForm] = useState<FormState>(
    emptyForm(fallbackSettings.authorName),
  );

  const closeContextMenu = useCallback(() => {
    setContextImageSrc(null);
    setContextMenu({
      open: false,
      x: 0,
      y: 0,
      situation: null,
      items: [],
    });
  }, []);

  const closeSlashMenu = useCallback(() => {
    setSlashMenu((prev) =>
      prev.open
        ? {
            open: false,
            x: 0,
            y: 0,
            query: "",
            activeIndex: 0,
            items: [],
            replaceFrom: 0,
            replaceTo: 0,
          }
        : prev,
    );
  }, []);

  const setSlashActiveIndex = useCallback((index: number) => {
    setSlashMenu((prev) => {
      if (!prev.open || prev.items.length === 0) return prev;
      const bounded = Math.max(0, Math.min(index, prev.items.length - 1));
      if (bounded === prev.activeIndex) return prev;
      return { ...prev, activeIndex: bounded };
    });
  }, []);

  const shiftSlashActiveIndex = useCallback((direction: 1 | -1) => {
    setSlashMenu((prev) => {
      if (!prev.open || prev.items.length === 0) return prev;
      const nextIndex =
        (prev.activeIndex + direction + prev.items.length) % prev.items.length;
      if (nextIndex === prev.activeIndex) return prev;
      return { ...prev, activeIndex: nextIndex };
    });
  }, []);

  const updatePipeline = useCallback((steps: string[]) => {
    setCommandPipeline(steps);
  }, []);

  const toSmartPosition = useCallback(
    (rawX: number, rawY: number, width: number, height: number) => {
      if (typeof window === "undefined") {
        return { x: rawX, y: rawY };
      }
      const margin = 12;
      const maxX = window.innerWidth - width - margin;
      const maxY = window.innerHeight - height - margin;
      return {
        x: Math.min(Math.max(margin, rawX), Math.max(margin, maxX)),
        y: Math.min(Math.max(margin, rawY), Math.max(margin, maxY)),
      };
    },
    [],
  );

  const syncInteractionState = useCallback(
    (editor: Editor | null | undefined) => {
      if (!editor) {
        setInteractionState(emptyEditorInteractionState());
        setInlineIndicator((prev) =>
          prev.visible ? { visible: false, x: 0, y: 0, label: "" } : prev,
        );
        return;
      }

      const { from, to } = editor.state.selection;
      const hasTextSelection = from !== to;
      const selectedText = hasTextSelection
        ? editor.state.doc.textBetween(from, to, " ").trim()
        : "";
      const selectionEl =
        typeof window !== "undefined"
          ? (() => {
              const selection = window.getSelection();
              const node = selection?.anchorNode;
              if (!node) return null;
              if (node instanceof Element) return node;
              return node.parentElement;
            })()
          : null;
      const isImageSelected =
        editor.isActive("image") || Boolean(selectionEl?.closest("img"));
      const parentNode = editor.state.selection.$from.parent;
      const activeTextAlign = normalizeTextAlign(
        String(parentNode.attrs?.textAlign || "left"),
      );
      const headingLevel =
        parentNode.type.name === "heading" ? parentNode.attrs?.level : null;
      const nodeType =
        parentNode.type.name === "heading" && headingLevel
          ? `h${headingLevel}`
          : parentNode.type.name;
      const isEmptyLine =
        !hasTextSelection &&
        (parentNode.type.name === "paragraph" ||
          parentNode.type.name === "heading") &&
        !parentNode.textContent.trim();
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
          h1: editor.isActive("heading", { level: 1 }),
          h2: editor.isActive("heading", { level: 2 }),
          h3: editor.isActive("heading", { level: 3 }),
          h4: editor.isActive("heading", { level: 4 }),
          h5: editor.isActive("heading", { level: 5 }),
          h6: editor.isActive("heading", { level: 6 }),
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
          alignTextRight: activeTextAlign === "right",
        },
      });

      if (!hasTextSelection || typeof window === "undefined") {
        setInlineIndicator((prev) =>
          prev.visible ? { visible: false, x: 0, y: 0, label: "" } : prev,
        );
        return;
      }

      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) {
        setInlineIndicator((prev) =>
          prev.visible ? { visible: false, x: 0, y: 0, label: "" } : prev,
        );
        return;
      }

      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      const editorRect = editorSurfaceRef.current?.getBoundingClientRect();
      if (!editorRect || (rect.width === 0 && rect.height === 0)) {
        setInlineIndicator((prev) =>
          prev.visible ? { visible: false, x: 0, y: 0, label: "" } : prev,
        );
        return;
      }

      const indicatorX = rect.left - editorRect.left + rect.width / 2;
      const indicatorY = rect.top - editorRect.top - 10;
      setInlineIndicator({
        visible: true,
        x: indicatorX,
        y: indicatorY,
        label: `Selection: ${selectedText.slice(0, 36)}${selectedText.length > 36 ? "..." : ""}`,
      });
    },
    [],
  );

  const updateSlashMenu = useCallback(
    (editor: Editor | null | undefined) => {
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
      if (!["paragraph", "heading"].includes(parent.type.name)) {
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
      const filtered = slashCommandCatalog
        .filter((item) => {
          if (!query) return true;
          const q = query.trim();
          return (
            item.label.toLowerCase().includes(q) || item.keyword.includes(q)
          );
        })
        .map((item) => ({ id: item.id, label: item.label }));

      if (filtered.length === 0) {
        closeSlashMenu();
        return;
      }

      let x = 24;
      let y = 24;
      if (typeof window !== "undefined") {
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0).cloneRange();
          range.collapse(true);
          const rect = range.getBoundingClientRect();
          x = rect.left;
          y = rect.bottom + 8;
        }
      }

      const positioned = toSmartPosition(
        x,
        y,
        260,
        Math.min(filtered.length, 7) * 36 + 22,
      );
      const token = textBefore.slice(slashIndex);
      const replaceFrom = from - token.length;
      const replaceTo = from;

      setSlashMenu((prev) => ({
        open: true,
        x: positioned.x,
        y: positioned.y,
        query,
        activeIndex: Math.min(prev.activeIndex, filtered.length - 1),
        items: filtered,
        replaceFrom,
        replaceTo,
      }));
    },
    [closeSlashMenu, toSmartPosition],
  );

  const tiptapEditor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3, 4, 5, 6] },
      }),
      Underline,
      CmsTextAlign,
      TiptapLink.configure({
        openOnClick: false,
      }),
      CmsImage.configure({
        inline: false,
        allowBase64: true,
      }),
      TiptapTable.configure({
        resizable: true,
      }),
      TiptapTableRow,
      TiptapTableHeader,
      TiptapTableCell,
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class:
          "min-h-[150px] text-left text-sm leading-7 text-slate-100 outline-none ltr prose prose-invert max-w-none prose-headings:text-white prose-a:text-emerald-300 prose-p:text-slate-200 prose-blockquote:border-emerald-300 prose-pre:bg-slate-950 [&_table]:my-4 [&_table]:w-full [&_table]:border-collapse [&_table]:overflow-hidden [&_table]:rounded-lg [&_table]:border [&_table]:border-slate-500/60 [&_th]:border [&_th]:border-slate-500/60 [&_th]:bg-slate-800 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:text-slate-100 [&_td]:border [&_td]:border-slate-500/60 [&_td]:bg-slate-900/55 [&_td]:px-3 [&_td]:py-2 [&_td]:text-slate-200 [&_.selectedCell]:bg-emerald-500/20",
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      editorHtmlRef.current = html;
      setForm((prev) =>
        prev.content === html ? prev : { ...prev, content: html },
      );
      syncInteractionState(editor);
      updateSlashMenu(editor);
    },
    onSelectionUpdate: ({ editor }) => {
      syncInteractionState(editor);
      updateSlashMenu(editor);
    },
    onFocus: ({ editor }) => {
      syncInteractionState(editor);
      updateSlashMenu(editor);
    },
    onBlur: ({ editor }) => {
      syncInteractionState(editor);
      closeContextMenu();
      closeSlashMenu();
    },
    immediatelyRender: false,
  });

  const getCurrentEditorHtml = useCallback(() => {
    return tiptapEditor?.getHTML() || editorHtmlRef.current || form.content;
  }, [form.content, tiptapEditor]);

  useEffect(() => {
    if (!tiptapEditor) return;
    const next = sanitizeEditorHtml(initialContent);
    if (tiptapEditor.getHTML() === next) return;
    tiptapEditor.commands.setContent(next);
    editorHtmlRef.current = next;
    syncInteractionState(tiptapEditor);
  }, [initialContent, syncInteractionState, tiptapEditor]);

  useEffect(() => {
    if (!tiptapEditor) return;
    syncInteractionState(tiptapEditor);
    updateSlashMenu(tiptapEditor);
  }, [syncInteractionState, tiptapEditor, updateSlashMenu]);

  useEffect(() => {
    if (!interactionState.hasTextSelection) return;
    updatePipeline([
      "Selection change detected.",
      `Node type detected: ${interactionState.nodeType.toUpperCase()}.`,
      "Top toolbar active state updated.",
      "Inline indicator rendered.",
    ]);
  }, [
    interactionState.hasTextSelection,
    interactionState.nodeType,
    updatePipeline,
  ]);

  useEffect(() => {
    if (!contextMenu.open) return;
    const menuEl = contextMenuRef.current;
    if (!menuEl) return;
    const rect = menuEl.getBoundingClientRect();
    const positioned = toSmartPosition(
      contextMenu.x,
      contextMenu.y,
      rect.width,
      rect.height,
    );
    if (positioned.x !== contextMenu.x || positioned.y !== contextMenu.y) {
      setContextMenu((prev) => ({ ...prev, x: positioned.x, y: positioned.y }));
    }
  }, [contextMenu.open, contextMenu.x, contextMenu.y, toSmartPosition]);

  useEffect(() => {
    if (!slashMenu.open) return;
    const menuEl = slashMenuRef.current;
    if (!menuEl) return;
    const rect = menuEl.getBoundingClientRect();
    const positioned = toSmartPosition(
      slashMenu.x,
      slashMenu.y,
      rect.width,
      rect.height,
    );
    if (positioned.x !== slashMenu.x || positioned.y !== slashMenu.y) {
      setSlashMenu((prev) => ({ ...prev, x: positioned.x, y: positioned.y }));
    }
  }, [slashMenu.open, slashMenu.x, slashMenu.y, toSmartPosition]);

  useEffect(() => {
    if (!slashMenu.open || slashMenu.items.length === 0) return;
    const activeItem = slashItemRefs.current[slashMenu.activeIndex];
    if (!activeItem) return;
    activeItem.scrollIntoView({ block: "nearest" });
  }, [slashMenu.activeIndex, slashMenu.items.length, slashMenu.open]);

  useEffect(() => {
    if (!contextMenu.open && !slashMenu.open) return;
    const onPointerDown = (event: globalThis.MouseEvent) => {
      const target = event.target as Node | null;
      if (
        target &&
        (contextMenuRef.current?.contains(target) ||
          slashMenuRef.current?.contains(target))
      ) {
        return;
      }
      closeContextMenu();
      closeSlashMenu();
    };
    const onWindowResize = () => {
      closeContextMenu();
      closeSlashMenu();
    };
    const onWindowScroll = () => {
      closeContextMenu();
      closeSlashMenu();
    };

    window.addEventListener("mousedown", onPointerDown);
    window.addEventListener("resize", onWindowResize);
    window.addEventListener("scroll", onWindowScroll, true);
    return () => {
      window.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("resize", onWindowResize);
      window.removeEventListener("scroll", onWindowScroll, true);
    };
  }, [closeContextMenu, closeSlashMenu, contextMenu.open, slashMenu.open]);

  useEffect(() => {
    let isMounted = true;

    const syncAuthFromStorage = () => {
      const token = getAuthToken();
      if (!isMounted) return;
      setAuthToken(token);
      setAuthReady(true);
      if (!token) {
        setLoading(false);
      }
    };

    syncAuthFromStorage();

    const authEventName = getAuthEventName();
    window.addEventListener(authEventName, syncAuthFromStorage);
    window.addEventListener("storage", syncAuthFromStorage);
    return () => {
      isMounted = false;
      window.removeEventListener(authEventName, syncAuthFromStorage);
      window.removeEventListener("storage", syncAuthFromStorage);
    };
  }, []);

  const api = useCallback(
    async <T,>(
      url: string,
      init?: RequestInit,
      authRequired = false,
    ): Promise<T> => {
      const headers = new Headers(init?.headers ?? {});
      if (authRequired) {
        if (authToken) {
          headers.set("Authorization", `Bearer ${authToken}`);
        }
      }

      const isFormData =
        typeof FormData !== "undefined" && init?.body instanceof FormData;
      if (init?.body && !isFormData && !headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json");
      }

      const res = await fetch(url, { ...init, headers });
      const data = (await res.json()) as T & { ok?: boolean; message?: string };
      if (!res.ok || data.ok === false) {
        throw new Error(data.message || "Request failed.");
      }
      return data;
    },
    [authToken],
  );

  const hydrateFromPost = useCallback((post: Post) => {
    const safeContent = withEditorImageControls(
      sanitizeEditorHtml(post.content),
    );
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
      robotsNoFollow: seo.robotsNoFollow,
    });
    setInitialContent(safeContent); // Provide stable initial content to div
    editorHtmlRef.current = safeContent;
    const serverHash = payloadHashFromPost({
      ...post,
      content: safeContent,
    });
    lastSavedHashRef.current = serverHash;
    lastCookieHashRef.current = serverHash;
    setAutoSaveNotice("Loaded");
    setSlugTouched(true);
    setEditorKey((n) => n + 1);
  }, []);

  const resetToNew = useCallback(
    (authorName = settings.authorName) => {
      const empty = emptyForm(authorName);
      setForm(empty);
      setInitialContent(empty.content); // Provide stable initial content to div
      editorHtmlRef.current = empty.content;
      lastSavedHashRef.current = "";
      lastCookieHashRef.current = "";
      setAutoSaveNotice("Idle");
      setSlugTouched(false);
      setEditorKey((n) => n + 1);
    },
    [settings.authorName],
  );

  const loadData = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const [postsData, catsData, mediaData, settingsData] = await Promise.all([
        api<{ posts: Post[] }>(
          "/api/blog/posts?scope=all",
          undefined,
          true,
        ).catch(() => ({ posts: [] })),
        api<{ categories: Category[] }>("/api/blog/categories").catch(() => ({
          categories: [],
        })),
        api<{ media: Media[] }>("/api/blog/media").catch(() => ({ media: [] })),
        api<{ settings: Settings }>("/api/blog/settings").catch(() => ({
          settings: fallbackSettings,
        })),
      ]);

      const sorted = [...(postsData.posts || [])].sort(
        (a, b) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
      );
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
    } finally {
      setLoading(false);
    }
  }, [api, hydrateFromPost, resetToNew]);

  useEffect(() => {
    if (!authReady) return;
    void loadData();
  }, [authReady, loadData]);

  const selectedPost = useMemo(
    () => posts.find((item) => item.id === form.id) || null,
    [posts, form.id],
  );

  const anchorPreviewLinks = useMemo(
    () => anchorLinksFromHtml(form.content || ""),
    [form.content],
  );

  useEffect(() => {
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
        metaDescription:
          form.metaDescription.trim() ||
          textFromHtml(safeContent).slice(0, 180),
        ogImage: form.ogImage.trim() || form.featuredImageUrl.trim(),
        canonicalUrl: form.canonicalUrl.trim(),
        keywords: tagList(form.seoKeywordsInput),
      },
    });
    const resolved = resolveSchemaJsonLdForContent({
      currentSchemaJsonLd: form.schemaJsonLd,
      generatedSchemaJsonLd: generated,
      content: safeContent,
    });
    if (form.schemaJsonLd.trim() === resolved.trim()) {
      return;
    }
    setForm((prev) => {
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
          metaDescription:
            prev.metaDescription.trim() ||
            textFromHtml(prevSafeContent).slice(0, 180),
          ogImage: prev.ogImage.trim() || prev.featuredImageUrl.trim(),
          canonicalUrl: prev.canonicalUrl.trim(),
          keywords: tagList(prev.seoKeywordsInput),
        },
      });
      const prevResolved = resolveSchemaJsonLdForContent({
        currentSchemaJsonLd: prev.schemaJsonLd,
        generatedSchemaJsonLd: prevGenerated,
        content: prevSafeContent,
      });
      if (prev.schemaJsonLd.trim() === prevResolved.trim()) return prev;
      return { ...prev, schemaJsonLd: prevResolved };
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
    settings.authorName,
  ]);

  const buildPostPayload = useCallback(
    (forAutoSave = false) => {
      const finalContent = getCurrentEditorHtml();
      const safeContent = sanitizeEditorHtmlForSave(finalContent);
      const nextStatus =
        forAutoSave && !form.id ? ("draft" as Status) : form.status;
      const slug = form.slug.trim() || slugify(form.title);
      const seoDraft = {
        metaTitle: form.metaTitle.trim() || form.title.trim(),
        metaDescription:
          form.metaDescription.trim() ||
          textFromHtml(safeContent).slice(0, 180),
        ogImage: form.ogImage.trim() || form.featuredImageUrl.trim(),
        canonicalUrl: form.canonicalUrl.trim(),
        keywords: tagList(form.seoKeywordsInput),
      };
      const generatedSchema = autoSchemaJsonLd({
        title: form.title.trim(),
        slug,
        content: safeContent,
        featuredImageUrl: form.featuredImageUrl.trim(),
        categories: form.categories,
        tags: tagList(form.tagsInput),
        authorName: form.authorName.trim() || settings.authorName,
        seo: seoDraft,
      });
      const schemaJsonLd = resolveSchemaJsonLdForContent({
        currentSchemaJsonLd: form.schemaJsonLd,
        generatedSchemaJsonLd: generatedSchema,
        content: safeContent,
      });
      return {
        title: form.title.trim(),
        slug,
        content: safeContent,
        featuredImageUrl: form.featuredImageUrl.trim(),
        categories: form.categories,
        tags: tagList(form.tagsInput),
        status: nextStatus,
        scheduledAt:
          nextStatus === "scheduled" ? toIsoDateTime(form.scheduledAt) : null,
        authorName: form.authorName.trim() || settings.authorName,
        seo: {
          metaTitle: seoDraft.metaTitle,
          metaDescription: seoDraft.metaDescription,
          ogImage: seoDraft.ogImage,
          canonicalUrl: seoDraft.canonicalUrl,
          schemaJsonLd,
          keywords: seoDraft.keywords,
          robotsNoIndex: form.robotsNoIndex,
          robotsNoFollow: form.robotsNoFollow,
        },
      };
    },
    [form, getCurrentEditorHtml, settings.authorName],
  );

  const loadComments = useCallback(
    async (slug: string) => {
      if (!slug || !authToken) {
        setComments([]);
        return;
      }
      setLoadingComments(true);
      try {
        const data = await api<{ comments: CommentItem[] }>(
          `/api/blog/comments?slug=${encodeURIComponent(slug)}&scope=all`,
          undefined,
          true,
        );
        setComments(data.comments || []);
      } catch {
        setComments([]);
      } finally {
        setLoadingComments(false);
      }
    },
    [api, authToken],
  );

  useEffect(() => {
    if (!form.id || !form.slug) {
      setComments([]);
      return;
    }
    void loadComments(form.slug);
  }, [form.id, form.slug, loadComments]);

  const commentDepth = useMemo(() => {
    const byId = new Map(comments.map((item) => [item.id, item]));
    const depthMap = new Map<string, number>();

    comments.forEach((item) => {
      let depth = 0;
      let parentId = item.parentId;
      while (parentId && depth < 5) {
        const parent = byId.get(parentId);
        if (!parent) break;
        depth += 1;
        parentId = parent.parentId;
      }
      depthMap.set(item.id, depth);
    });
    return depthMap;
  }, [comments]);

  const execEditor = useCallback(
    (command: string, value?: string) => {
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
        chain.extendMarkRange("link").setLink({ href }).run();
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
          const level = Number(tag[1]) as 1 | 2 | 3 | 4 | 5 | 6;
          chain.toggleHeading({ level }).run();
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
    },
    [tiptapEditor],
  );

  const insertEditorHtml = useCallback(
    (html: string) => {
      if (!html || !tiptapEditor) return false;
      const inserted = tiptapEditor.chain().focus().insertContent(html).run();
      if (!inserted) {
        tiptapEditor.commands.setContent(`${tiptapEditor.getHTML()}${html}`);
      }
      return true;
    },
    [tiptapEditor],
  );

  const applyHeading = useCallback(
    (level: 1 | 2 | 3 | 4 | 5 | 6) => {
      execEditor("formatBlock", `<h${level}>`);
    },
    [execEditor],
  );

  const toolbarButtonClass = (active = false) =>
    `rounded-md border px-3 py-1.5 text-xs font-semibold transition ${
      active
        ? "border-emerald-400 bg-emerald-500/15 text-emerald-200"
        : "border-white/20 text-slate-100 hover:border-emerald-300 hover:text-emerald-300"
    }`;

  const preserveSelectionOnToolbarMouseDown = (
    event: MouseEvent<HTMLElement>,
  ) => {
    const target = event.target as HTMLElement;
    if (!target.closest("button")) return;
    event.preventDefault();
    tiptapEditor?.commands.focus();
  };

  const deleteMediaById = async (id: string) => {
    await api(
      `/api/blog/media?id=${encodeURIComponent(id)}`,
      { method: "DELETE" },
      true,
    );
    setMediaItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEditorClick = async (e: MouseEvent<HTMLDivElement>) => {
    closeContextMenu();
    const target = e.target as HTMLElement;

    if (target.dataset.type === "delete-image" && tiptapEditor) {
      e.preventDefault();
      e.stopPropagation();

      const wrapper = target.closest(
        ".editor-image-wrapper",
      ) as HTMLElement | null;
      if (!wrapper) return;

      const img = wrapper.querySelector("img");
      const mediaId =
        img?.getAttribute("data-media-id") ||
        mediaItems.find((m) => m.url === img?.getAttribute("src"))?.id ||
        null;

      const current = tiptapEditor.getHTML();
      const template = document.createElement("template");
      template.innerHTML = current;
      const src = img?.getAttribute("src");
      const candidates = Array.from(
        template.content.querySelectorAll(".editor-image-wrapper"),
      );
      const match =
        candidates.find(
          (node) => node.querySelector("img")?.getAttribute("src") === src,
        ) || null;
      if (match) {
        match.remove();
        tiptapEditor.commands.setContent(template.innerHTML || "<p></p>");
      }

      if (mediaId) {
        try {
          await deleteMediaById(mediaId);
          setNotice("Image deleted from content, MongoDB, and Vercel Blob.");
        } catch {
          setNotice("Image removed from content, but media delete failed.");
        }
      } else {
        setNotice("Image removed from content.");
      }
    }
  };

  const createPost = () => {
    setError("");
    setNotice("");
    clearAutoSaveDraft();
    lastCookieHashRef.current = "";
    resetToNew(settings.authorName || fallbackSettings.authorName);
  };

  const persistPost = useCallback(async () => {
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
      } catch {
        setError("Schema JSON-LD must be valid JSON.");
        return;
      }
    }

    isPersistingRef.current = true;
    setSavingPost(true);
    setError("");
    setNotice("");

    try {
      const endpoint = form.id
        ? `/api/blog/posts/${form.id}`
        : "/api/blog/posts";
      const method = form.id ? "PATCH" : "POST";
      const data = await api<{ post: Post }>(
        endpoint,
        { method, body: JSON.stringify(payload) },
        true,
      );
      if (!data.post) throw new Error("No post returned by API.");

      setPosts((prev) => {
        const next = prev.filter((p) => p.id !== data.post.id);
        next.unshift(data.post);
        return next.sort(
          (a, b) =>
            new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
        );
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
    } finally {
      isPersistingRef.current = false;
      setSavingPost(false);
    }
  }, [api, buildPostPayload, form.id, hydrateFromPost]);

  const savePost = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await persistPost();
  };

  useEffect(() => {
    persistPostShortcutRef.current = persistPost;
  }, [persistPost]);

  useEffect(() => {
    if (!authToken || loading || hasRestoredDraftRef.current) return;
    hasRestoredDraftRef.current = true;
    const draft = readAutoSaveDraft();
    if (!draft?.form) return;

    const restoredContent = withEditorImageControls(
      sanitizeEditorHtml(draft.form.content || ""),
    );
    const restored: FormState = {
      ...emptyForm(settings.authorName || fallbackSettings.authorName),
      ...draft.form,
      content: restoredContent,
    };

    setForm(restored);
    setInitialContent(restoredContent);
    editorHtmlRef.current = restoredContent;
    setSlugTouched(Boolean(restored.slug));
    setEditorKey((n) => n + 1);
    lastCookieHashRef.current = draft.hash || JSON.stringify(restored);
    setAutoSaveNotice("Recovered from local storage");
    setNotice("Recovered unsaved draft from local storage autosave.");
  }, [authToken, loading, settings.authorName]);

  // Keep formRef in sync with form state to avoid effect dependency issues
  useEffect(() => {
    formRef.current = form;
  }, [form]);

  useEffect(() => {
    if (!authToken || loading) return;
    const content =
      tiptapEditor?.getHTML() ||
      editorHtmlRef.current ||
      formRef.current.content;
    const plain = sanitizeEditorHtmlForSave(content)
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const hasMeaningfulContent =
      formRef.current.title.trim().length > 0 ||
      (plain.length > 0 && plain !== "Start writing your post...");
    if (!hasMeaningfulContent) {
      setAutoSaveNotice("Idle");
      return;
    }
    const hash = JSON.stringify({ ...formRef.current, content });
    if (hash !== lastCookieHashRef.current && !isPersistingRef.current) {
      setAutoSaveNotice("Unsaved changes");
    }
  }, [authToken, loading, tiptapEditor]);

  useEffect(() => {
    if (!authToken || loading) return;
    const interval = window.setInterval(() => {
      const content =
        tiptapEditor?.getHTML() ||
        editorHtmlRef.current ||
        formRef.current.content;
      const plain = sanitizeEditorHtmlForSave(content)
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      const hasMeaningfulContent =
        formRef.current.title.trim().length > 0 ||
        (plain.length > 0 && plain !== "Start writing your post...");
      if (!hasMeaningfulContent) {
        setAutoSaveNotice("Idle");
        return;
      }

      const draftForm: FormState = { ...formRef.current, content };
      const hash = JSON.stringify(draftForm);
      if (hash === lastCookieHashRef.current) {
        setAutoSaveNotice("Saved in local storage");
        return;
      }

      const result = writeAutoSaveDraft({
        savedAt: new Date().toISOString(),
        hash,
        form: draftForm,
      });
      if (!result.ok) {
        setAutoSaveNotice(result.message);
        return;
      }

      lastCookieHashRef.current = hash;
      setAutoSaveNotice("Saved in local storage");
    }, 5000);

    return () => window.clearInterval(interval);
  }, [authToken, loading, tiptapEditor]);

  const deletePost = async () => {
    if (!form.id) return;
    if (!window.confirm("Delete this post permanently?")) return;
    setDeletingPost(true);
    setError("");
    setNotice("");
    try {
      await api(`/api/blog/posts/${form.id}`, { method: "DELETE" }, true);
      setPosts((prev) => prev.filter((p) => p.id !== form.id));
      clearAutoSaveDraft();
      lastCookieHashRef.current = "";
      resetToNew(settings.authorName || fallbackSettings.authorName);
      setNotice("Post deleted.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to delete post.");
    } finally {
      setDeletingPost(false);
    }
  };

  const updateCommentStatus = async (
    id: string,
    status: CommentStatus,
    moderationReason = "",
  ) => {
    if (!form.slug) return;
    setCommentActionId(id);
    setError("");
    try {
      await api(
        `/api/blog/comments/${id}`,
        {
          method: "PATCH",
          body: JSON.stringify({ status, moderationReason }),
        },
        true,
      );
      await loadComments(form.slug);
      setNotice(`Comment marked as ${status}.`);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to update comment.");
    } finally {
      setCommentActionId("");
    }
  };

  const removeComment = async (id: string) => {
    if (!form.slug) return;
    if (!window.confirm("Delete this comment and its replies?")) return;
    setCommentActionId(id);
    setError("");
    try {
      await api(`/api/blog/comments/${id}`, { method: "DELETE" }, true);
      await loadComments(form.slug);
      setNotice("Comment deleted.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to delete comment.");
    } finally {
      setCommentActionId("");
    }
  };

  const saveSettings = async () => {
    setSavingSettings(true);
    setError("");
    setNotice("");
    try {
      const data = await api<{ settings: Settings }>(
        "/api/blog/settings",
        { method: "PATCH", body: JSON.stringify(settings) },
        true,
      );
      const next = data.settings || settings;
      setSettings(next);
      setForm((prev) => ({
        ...prev,
        authorName: prev.authorName || next.authorName,
      }));
      setNotice("Settings saved.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to save settings.");
    } finally {
      setSavingSettings(false);
    }
  };

  const addCategory = async () => {
    const name = newCategoryName.trim();
    if (!name) return;
    setSavingCategory(true);
    setError("");
    setNotice("");
    try {
      const data = await api<{ categories: Category[] }>(
        "/api/blog/categories",
        { method: "POST", body: JSON.stringify({ name }) },
        true,
      );
      setCategories(data.categories || []);
      setNewCategoryName("");
      setNotice("Category saved.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to create category.");
    } finally {
      setSavingCategory(false);
    }
  };

  const removeCategory = async (slug: string) => {
    setError("");
    setNotice("");
    try {
      const data = await api<{ categories: Category[] }>(
        `/api/blog/categories?slug=${encodeURIComponent(slug)}`,
        { method: "DELETE" },
        true,
      );
      setCategories(data.categories || []);
      const keep = new Set((data.categories || []).map((c) => c.name));
      setForm((prev) => ({
        ...prev,
        categories: prev.categories.filter((name) => keep.has(name)),
      }));
      setNotice("Category deleted.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to delete category.");
    }
  };

  const toggleCategory = (name: string) => {
    setForm((prev) => ({
      ...prev,
      categories: prev.categories.includes(name)
        ? prev.categories.filter((x) => x !== name)
        : [...prev.categories, name],
    }));
  };

  const uploadMediaFile = async (file: File) => {
    const optimized = await optimizeImage(file);
    const body = new FormData();
    body.append("file", optimized.file);
    body.append("width", String(optimized.width));
    body.append("height", String(optimized.height));
    const data = await api<{ media: Media }>(
      "/api/blog/media",
      { method: "POST", body },
      true,
    );
    if (!data.media) throw new Error("Upload did not return media item.");
    return { media: data.media, originalBytes: file.size };
  };

  const uploadMedia = async (file: File) => {
    setUploadingMedia(true);
    setError("");
    setNotice("");
    try {
      const uploaded = await uploadMediaFile(file);
      setMediaItems((prev) => [uploaded.media, ...prev]);
      setNotice(
        `Image uploaded (${bytes(uploaded.originalBytes)} -> ${bytes(uploaded.media.size)}).`,
      );
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to upload image.");
    } finally {
      setUploadingMedia(false);
    }
  };

  const addEmbed = useCallback(() => {
    const html = embedHtml(embedUrl);
    if (!html) {
      setError("Please enter a valid embed URL.");
      return;
    }
    setError("");
    insertEditorHtml(html);
    setEmbedUrl("");
  }, [embedUrl, insertEditorHtml]);

  const insertFaqBlock = useCallback(
    (questionInput?: string, answerInput?: string) => {
      const rawQuestion = questionInput?.trim() || "FAQ Question";
      const question = /\?\s*$/.test(rawQuestion)
        ? rawQuestion
        : `${rawQuestion}?`;
      const answer = answerInput?.trim() || "FAQ answer goes here.";
      setError("");
      const inserted = insertEditorHtml(faqHtml(question, answer));
      if (!inserted) {
        setError(
          "Could not insert FAQ block. Click inside editor and try again.",
        );
        return false;
      }
      return true;
    },
    [insertEditorHtml],
  );

  const insertTableBlock = useCallback(() => {
    setError("");
    if (!tiptapEditor) return;
    const rows = Math.min(10, Math.max(1, tableRows));
    const cols = Math.min(8, Math.max(1, tableCols));
    const inserted = tiptapEditor
      .chain()
      .focus()
      .insertTable({ rows, cols, withHeaderRow: true })
      .run();
    if (!inserted) {
      insertEditorHtml(tableHtml(rows, cols));
    }
  }, [insertEditorHtml, tableCols, tableRows, tiptapEditor]);

  const insertNewBlogSection = useCallback(() => {
    if (!tiptapEditor) return false;
    setError("");
    closeContextMenu();
    closeSlashMenu();
    const inserted = tiptapEditor
      .chain()
      .focus()
      .insertContent(`<h2>${escapeHtml(NEW_BLOG_SECTION_PROMPT)}</h2><p></p>`)
      .run();
    if (!inserted) {
      setError("Could not insert a new blog section. Click inside editor and try again.");
      return false;
    }

    const setPromptSelection = () => {
      if (!tiptapEditor) return;
      const marker = NEW_BLOG_SECTION_PROMPT.trim().toLowerCase();
      let from = 0;
      let to = 0;
      tiptapEditor.state.doc.descendants((node, pos) => {
        if (node.type.name !== "heading") return;
        const text = node.textContent.trim().toLowerCase();
        if (text !== marker) return;
        from = pos + 1;
        to = pos + node.nodeSize - 1;
      });
      if (from < to) {
        tiptapEditor.chain().focus().setTextSelection({ from, to }).run();
      }
    };

    if (typeof window !== "undefined") {
      window.requestAnimationFrame(setPromptSelection);
    } else {
      setPromptSelection();
    }

    setNotice("New blog section inserted. Start typing to replace prompt text.");
    return true;
  }, [closeContextMenu, closeSlashMenu, tiptapEditor]);

  type ImageEditorMeta = {
    src: string;
    alt: string;
    mediaId: string | null;
    caption: string;
    align: ImageAlign;
    widthPercent: number;
  };

  type ImageInsertOptions = {
    mediaId?: string | null;
    caption?: string;
    align?: ImageAlign;
    widthPercent?: number;
  };

  const getImageMetaBySrc = useCallback(
    (targetSrc: string): ImageEditorMeta | null => {
      if (!tiptapEditor || !targetSrc.trim()) return null;
      const template = document.createElement("template");
      template.innerHTML = tiptapEditor.getHTML();
      const images = Array.from(template.content.querySelectorAll("img"));
      const node =
        images.find(
          (img) => (img.getAttribute("src") || "").trim() === targetSrc.trim(),
        ) || null;
      if (!node) return null;
      return {
        src: (node.getAttribute("src") || "").trim(),
        alt: (node.getAttribute("alt") || "").trim(),
        mediaId: (node.getAttribute("data-media-id") || "").trim() || null,
        caption: (node.getAttribute("data-caption") || "").trim(),
        align: imageAlignFromNode(node),
        widthPercent: imageWidthFromStyle(node.getAttribute("style")),
      };
    },
    [tiptapEditor],
  );

  const updateImageBySrc = useCallback(
    (targetSrc: string, updater: (node: HTMLImageElement) => void): boolean => {
      if (!tiptapEditor || !targetSrc.trim()) return false;
      const template = document.createElement("template");
      template.innerHTML = tiptapEditor.getHTML();
      const images = Array.from(
        template.content.querySelectorAll<HTMLImageElement>("img"),
      );
      const node =
        images.find(
          (img) => (img.getAttribute("src") || "").trim() === targetSrc.trim(),
        ) || null;
      if (!node) return false;
      updater(node);
      tiptapEditor.commands.setContent(template.innerHTML || "<p></p>");
      return true;
    },
    [tiptapEditor],
  );

  const applyImageLayout = useCallback(
    (node: HTMLImageElement, align: ImageAlign, widthPercent: number) => {
      const safeAlign = normalizeImageAlign(align);
      const safeWidth = clampImageWidth(widthPercent);
      node.setAttribute("data-align", safeAlign);
      node.setAttribute("style", imageStyleFromLayout(safeWidth, safeAlign));
    },
    [],
  );

  const insertImageNode = useCallback(
    (url: string, altText: string, options: ImageInsertOptions = {}) => {
      if (!url.trim()) return false;
      const align = normalizeImageAlign(options.align || "center");
      const widthPercent = clampImageWidth(options.widthPercent ?? 100);
      return insertEditorHtml(
        imageHtml(
          url.trim(),
          altText.trim() || "blog image",
          options.mediaId || null,
          options.caption || "",
          align,
          widthPercent,
        ),
      );
    },
    [insertEditorHtml],
  );

  const generateSchemaFromCurrentContent = useCallback(() => {
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
        metaDescription:
          form.metaDescription.trim() ||
          textFromHtml(safeContent).slice(0, 200),
        ogImage: form.ogImage.trim() || form.featuredImageUrl.trim(),
        canonicalUrl: form.canonicalUrl.trim(),
        keywords: tagList(form.seoKeywordsInput),
      },
    });
    const resolved = resolveSchemaJsonLdForContent({
      currentSchemaJsonLd: form.schemaJsonLd,
      generatedSchemaJsonLd: generated,
      content: safeContent,
    });
    setForm((prev) => ({
      ...prev,
      schemaJsonLd: resolved,
      metaDescription:
        prev.metaDescription.trim() || textFromHtml(safeContent).slice(0, 180),
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
    settings.authorName,
  ]);

  const replaceImageInEditor = useCallback(
    (
      targetSrc: string,
      nextSrc: string,
      altText: string,
      options: ImageInsertOptions = {},
    ) => {
      if (!targetSrc.trim() || !nextSrc.trim()) return false;
      const current = getImageMetaBySrc(targetSrc);
      const align = normalizeImageAlign(
        options.align || current?.align || "center",
      );
      const widthPercent = clampImageWidth(
        options.widthPercent ?? current?.widthPercent ?? 100,
      );
      return updateImageBySrc(targetSrc, (node) => {
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
    },
    [applyImageLayout, getImageMetaBySrc, updateImageBySrc],
  );

  const resizeImageInEditor = useCallback(
    (targetSrc: string) => {
      if (!targetSrc.trim()) return false;
      const current = getImageMetaBySrc(targetSrc);
      const currentWidth = current?.widthPercent ?? 100;
      const align = current?.align || "center";
      const nextWidth =
        currentWidth >= 100 ? 80 : currentWidth >= 80 ? 60 : 100;
      const resized = updateImageBySrc(targetSrc, (node) => {
        applyImageLayout(node, align, nextWidth);
      });
      if (!resized) return false;
      setNotice(`Image resized to ${nextWidth}% width.`);
      return true;
    },
    [applyImageLayout, getImageMetaBySrc, updateImageBySrc],
  );

  const alignImageInEditor = useCallback(
    (targetSrc: string, align: ImageAlign) => {
      if (!targetSrc.trim()) return false;
      const current = getImageMetaBySrc(targetSrc);
      const widthPercent = current?.widthPercent ?? 100;
      const changed = updateImageBySrc(targetSrc, (node) => {
        applyImageLayout(node, align, widthPercent);
      });
      if (!changed) return false;
      setNotice(`Image aligned ${align}.`);
      return true;
    },
    [applyImageLayout, getImageMetaBySrc, updateImageBySrc],
  );

  const setImageCaptionInEditor = useCallback(
    (targetSrc: string, caption: string) => {
      if (!targetSrc.trim()) return false;
      const changed = updateImageBySrc(targetSrc, (node) => {
        const safeCaption = caption.trim();
        if (safeCaption) {
          node.setAttribute("data-caption", safeCaption);
        } else {
          node.removeAttribute("data-caption");
        }
      });
      if (!changed) return false;
      setNotice(
        caption.trim() ? "Image caption updated." : "Image caption removed.",
      );
      return true;
    },
    [updateImageBySrc],
  );

  const setTextAlignInEditor = useCallback(
    (align: TextAlignMode) => {
      if (!tiptapEditor) return false;
      const currentType = tiptapEditor.state.selection.$from.parent.type.name;
      const alignableTypeSet = new Set([
        "paragraph",
        "heading",
        "blockquote",
        "listItem",
        "tableCell",
        "tableHeader",
        "codeBlock",
      ]);

      let changed = false;
      if (alignableTypeSet.has(currentType)) {
        changed = tiptapEditor
          .chain()
          .focus()
          .updateAttributes(currentType, { textAlign: align })
          .run();
      }

      if (!changed) {
        for (const type of alignableTypeSet) {
          const ok = tiptapEditor
            .chain()
            .focus()
            .updateAttributes(type, { textAlign: align })
            .run();
          if (ok) {
            changed = true;
            break;
          }
        }
      }

      if (!changed) return false;
      setNotice(`Text aligned ${align}.`);
      return true;
    },
    [tiptapEditor],
  );

  const getActiveImageSource = useCallback(() => {
    if (contextImageSrc?.trim()) return contextImageSrc.trim();
    if (!tiptapEditor) return "";

    const { from, to } = tiptapEditor.state.selection;
    let srcFromDoc = "";
    tiptapEditor.state.doc.nodesBetween(from, to, (node) => {
      if (srcFromDoc || node.type.name !== "image") return;
      const src = String(node.attrs?.src || "").trim();
      if (src) {
        srcFromDoc = src;
      }
    });
    if (srcFromDoc) return srcFromDoc;

    if (typeof window === "undefined") return "";
    const selection = window.getSelection();
    const anchorNode = selection?.anchorNode;
    const anchorElement =
      anchorNode instanceof Element ? anchorNode : anchorNode?.parentElement;
    const image = anchorElement?.closest("img");
    return (image?.getAttribute("src") || "").trim();
  }, [contextImageSrc, tiptapEditor]);

  const openImageModal = useCallback(() => {
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
  }, [closeContextMenu, closeSlashMenu, form.imageAltText, form.title]);

  const openFaqModal = useCallback(() => {
    closeContextMenu();
    closeSlashMenu();
    setError("");
    setFaqQuestion("");
    setFaqAnswer("");
    setIsFaqModalOpen(true);
  }, [closeContextMenu, closeSlashMenu]);

  const openLinkModal = useCallback(() => {
    if (!tiptapEditor) return;
    closeContextMenu();
    closeSlashMenu();
    setError("");
    const { from, to } = tiptapEditor.state.selection;
    linkSelectionRef.current = { from, to };
    const linkAttrs = tiptapEditor.getAttributes("link") || {};
    const activeHref = linkAttrs.href || "";
    const activeRel = String(linkAttrs.rel || "");
    setLinkModalUrl(String(activeHref));
    setLinkRelMode(/\bnofollow\b/i.test(activeRel) ? "nofollow" : "dofollow");
    setIsLinkModalOpen(true);
  }, [closeContextMenu, closeSlashMenu, tiptapEditor]);

  const closeImageModal = () => {
    if (insertingImage) return;
    setIsImageModalOpen(false);
    setImageModalUrl("");
    setImageModalCaption("");
    setImageModalAlign("center");

    setImageModalFile(null);
    setReplaceImageSrc(null);
  };

  const closeLinkModal = () => {
    if (insertingLink) return;
    setIsLinkModalOpen(false);
    setLinkModalUrl("");
    setLinkRelMode("dofollow");
  };

  const closeFaqModal = () => {
    setIsFaqModalOpen(false);
  };

  const insertFaqFromModal = () => {
    const question = faqQuestion.trim();
    const answer = faqAnswer.trim();
    if (!question || !answer) {
      setError("FAQ question and answer are required.");
      return;
    }
    const normalizedQuestion = /\?\s*$/.test(question)
      ? question
      : `${question}?`;
    const inserted = insertFaqBlock(normalizedQuestion, answer);
    if (!inserted) return;
    setFaqQuestion("");
    setFaqAnswer("");
    setIsFaqModalOpen(false);
    setNotice("FAQ inserted.");
    if (typeof window === "undefined") {
      generateSchemaFromCurrentContent();
      return;
    }
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        generateSchemaFromCurrentContent();
      });
    });
  };

  const insertLinkFromModal = () => {
    if (!tiptapEditor) return;
    const raw = linkModalUrl.trim();
    if (!raw) {
      setError("Please enter a valid link URL.");
      return;
    }

    setError("");
    setInsertingLink(true);
    try {
      const href = /^(https?:\/\/|mailto:|tel:)/i.test(raw)
        ? raw
        : `https://${raw}`;
      const rel =
        linkRelMode === "nofollow"
          ? "nofollow noopener noreferrer"
          : "noopener noreferrer";
      const selection =
        linkSelectionRef.current ?? tiptapEditor.state.selection;
      const hasSelection = selection.from !== selection.to;
      const selectedText = hasSelection
        ? tiptapEditor.state.doc
            .textBetween(selection.from, selection.to, " ")
            .replace(/\s+/g, " ")
            .trim()
        : "";
      const anchorText = selectedText || href;

      if (hasSelection) {
        tiptapEditor
          .chain()
          .focus()
          .setTextSelection(selection)
          .extendMarkRange("link")
          .setLink({ href, target: "_blank", rel })
          .run();
      } else {
        tiptapEditor
          .chain()
          .focus()
          .insertContent(
            `<a href="${escapeHtml(href)}" target="_blank" rel="${escapeHtml(rel)}">${escapeHtml(href)}</a>`,
          )
          .run();
      }
      setNotice(`Anchor saved: "${anchorText}" -> ${href}`);
      closeLinkModal();
    } finally {
      setInsertingLink(false);
    }
  };

  const insertImageFromModal = async () => {
    setError("");
    setNotice("");
    setInsertingImage(true);
    try {
      let finalUrl = imageModalUrl.trim();
      let finalMediaId: string | null = null;
      const caption = imageModalCaption.trim();
      const align = normalizeImageAlign(imageModalAlign);
      // const widthPercent = clampImageWidth(imageModalWidth);
      const altText = (
        imageModalAlt.trim() ||
        form.imageAltText ||
        form.title ||
        "blog image"
      ).trim();

      if (imageModalFile) {
        const uploaded = await uploadMediaFile(imageModalFile);
        setMediaItems((prev) => [uploaded.media, ...prev]);
        setNotice(
          `Image uploaded (${bytes(uploaded.originalBytes)} -> ${bytes(uploaded.media.size)}) and inserted.`,
        );
        finalUrl = uploaded.media.url;
        finalMediaId = uploaded.media.id;
      }

      if (!finalUrl) {
        setError("Add image URL or upload an image.");
        return;
      }

      if (!finalMediaId) {
        finalMediaId =
          mediaItems.find((item) => item.url === finalUrl)?.id || null;
      }
      if (replaceImageSrc) {
        const replaced = replaceImageInEditor(
          replaceImageSrc,
          finalUrl,
          altText,
          {
            mediaId: finalMediaId,
            caption,
            align,
          },
        );
        if (!replaced) {
          const insertedNode = insertImageNode(finalUrl, altText, {
            mediaId: finalMediaId,
            caption,
            align,
          });
          if (!insertedNode) {
            insertEditorHtml(
              imageHtml(finalUrl, altText, finalMediaId, caption, align),
            );
          }
        }
      } else {
        const insertedNode = insertImageNode(finalUrl, altText, {
          mediaId: finalMediaId,
          caption,
          align,
        });
        if (!insertedNode) {
          insertEditorHtml(
            imageHtml(finalUrl, altText, finalMediaId, caption, align),
          );
        }
      }
      setForm((prev) => ({
        ...prev,
        imageAltText: prev.imageAltText || altText,
      }));
      closeImageModal();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to insert image.");
    } finally {
      setInsertingImage(false);
    }
  };

  const executeEditorCommand = useCallback(
    (
      commandId: EditorCommandId,
      source:
        | "toolbar"
        | "shortcut"
        | "context-menu"
        | "slash-command" = "toolbar",
      trigger?: string,
    ) => {
      setError("");
      updatePipeline([
        `Command source: ${source}.`,
        trigger ? `Trigger: ${trigger}.` : "Trigger: direct action.",
        `Command detected: ${commandId}.`,
        "Running editor command.",
        "Editor and UI state synchronizing.",
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
          setImageModalAlt(
            current?.alt || form.imageAltText || form.title || "blog image",
          );
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
        const currentCaption =
          getImageMetaBySrc(activeImageSrc)?.caption || "";
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
    },
    [
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
      updatePipeline,
    ],
  );

  const topToolbarActions = useMemo(
    () => [
      {
        key: "paragraph",
        label: "Paragraph",
        active: interactionState.active.paragraph,
        run: () => executeEditorCommand("paragraph"),
      },
      {
        key: "h1",
        label: "H1",
        active: interactionState.active.h1,
        run: () => applyHeading(1),
      },
      {
        key: "h2",
        label: "H2",
        active: interactionState.active.h2,
        run: () => executeEditorCommand("h2"),
      },
      {
        key: "h3",
        label: "H3",
        active: interactionState.active.h3,
        run: () => executeEditorCommand("h3"),
      },
      {
        key: "bold",
        label: "Bold",
        active: interactionState.active.bold,
        run: () => executeEditorCommand("bold"),
      },
      {
        key: "italic",
        label: "Italic",
        active: interactionState.active.italic,
        run: () => executeEditorCommand("italic"),
      },
      {
        key: "underline",
        label: "Underline",
        active: interactionState.active.underline,
        run: () => executeEditorCommand("underline"),
      },
      {
        key: "ul",
        label: "Bullet",
        active: interactionState.active.bulletList,
        run: () => executeEditorCommand("bulletList"),
      },
      {
        key: "ol",
        label: "Numb",
        active: interactionState.active.orderedList,
        run: () => executeEditorCommand("orderedList"),
      },
      {
        key: "quote",
        label: "Quote",
        active: interactionState.active.blockquote,
        run: () => executeEditorCommand("blockquote"),
      },
      {
        key: "code",
        label: "Code",
        active: interactionState.active.codeBlock,
        run: () => executeEditorCommand("codeBlock"),
      },
      {
        key: "link",
        label: "Link",
        active: interactionState.active.link,
        run: () => executeEditorCommand("link"),
      },
      {
        key: "image",
        label: "Image",
        active: false,
        run: () => executeEditorCommand("image"),
      },
    ],
    [applyHeading, executeEditorCommand, interactionState.active],
  );

  const floatingToolbarActions = useMemo(
    () => [
      {
        key: "float-bold",
        label: "Bold",
        active: interactionState.active.bold,
        run: () => executeEditorCommand("bold"),
      },
      {
        key: "float-h2",
        label: "H2",
        active: interactionState.active.h2,
        run: () => executeEditorCommand("h2"),
      },
      {
        key: "float-link",
        label: "Link",
        active: interactionState.active.link,
        run: () => executeEditorCommand("link"),
      },
      {
        key: "float-align-left",
        label: "Left",
        active: interactionState.active.alignTextLeft,
        run: () => executeEditorCommand("alignTextLeft"),
      },
      {
        key: "float-align-center",
        label: "Center",
        active: interactionState.active.alignTextCenter,
        run: () => executeEditorCommand("alignTextCenter"),
      },
      {
        key: "float-align-right",
        label: "Right",
        active: interactionState.active.alignTextRight,
        run: () => executeEditorCommand("alignTextRight"),
      },
    ],
    [
      executeEditorCommand,
      interactionState.active.alignTextCenter,
      interactionState.active.alignTextLeft,
      interactionState.active.alignTextRight,
      interactionState.active.bold,
      interactionState.active.h2,
      interactionState.active.link,
    ],
  );

  const insertBlockTemplate = useCallback(
    (blockId: BlockTemplateId) => {
      closeContextMenu();
      closeSlashMenu();
      if (blockId === "section") {
        insertEditorHtml("<h2>New Section</h2><p>Start writing here...</p>");
        updatePipeline([
          "Block insert requested.",
          "Block type: section.",
          "Section block inserted into editor.",
          "Editor state synced.",
        ]);
        return;
      }
      if (blockId === "faq") {
        openFaqModal();
        updatePipeline([
          "Block insert requested.",
          "Block type: FAQ.",
          "FAQ modal opened.",
          "Editor state synced.",
        ]);
        return;
      }
      if (blockId === "table") {
        insertTableBlock();
        updatePipeline([
          "Block insert requested.",
          "Block type: table.",
          "Responsive table block inserted.",
          "Editor state synced.",
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
          insertEditorHtml(
            "<p>Paste a YouTube URL in the embed input and click Insert Embed.</p>",
          );
        }
        updatePipeline([
          "Block insert requested.",
          "Block type: embed.",
          "Embed block inserted or guided placeholder added.",
          "Editor state synced.",
        ]);
      }
    },
    [
      addEmbed,
      closeContextMenu,
      closeSlashMenu,
      embedUrl,
      executeEditorCommand,
      insertEditorHtml,
      insertTableBlock,
      openFaqModal,
      updatePipeline,
    ],
  );

  const runContextCommand = (commandId: EditorCommandId) => {
    closeContextMenu();
    executeEditorCommand(commandId, "context-menu");
  };

  const runSlashCommand = useCallback(
    (commandId: EditorCommandId) => {
      if (!tiptapEditor) return;
      if (slashMenu.replaceTo > slashMenu.replaceFrom) {
        tiptapEditor
          .chain()
          .focus()
          .deleteRange({ from: slashMenu.replaceFrom, to: slashMenu.replaceTo })
          .run();
      }
      closeSlashMenu();
      executeEditorCommand(commandId, "slash-command");
    },
    [
      closeSlashMenu,
      executeEditorCommand,
      slashMenu.replaceFrom,
      slashMenu.replaceTo,
      tiptapEditor,
    ],
  );

  const handleEditorContextMenu = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (!tiptapEditor) return;
    tiptapEditor.commands.focus();

    const target = event.target as HTMLElement;
    const imageNode = target.closest("img");
    const hasTextSelection =
      tiptapEditor.state.selection.from !== tiptapEditor.state.selection.to &&
      Boolean(
        tiptapEditor.state.doc
          .textBetween(
            tiptapEditor.state.selection.from,
            tiptapEditor.state.selection.to,
            " ",
          )
          .trim(),
      );
    const parentNode = tiptapEditor.state.selection.$from.parent;
    const isEmptyLine =
      !hasTextSelection &&
      (parentNode.type.name === "paragraph" ||
        parentNode.type.name === "heading") &&
      !parentNode.textContent.trim();

    let situation: ContextSituation = "empty-line";
    let imageSrc: string | null = null;
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
    const used = new Set(contextItems.map((item) => item.id));
    const toolboxItems = allToolbarContextCommands.filter(
      (item) => !used.has(item.id),
    );
    const items = [...contextItems, ...toolboxItems];
    const positioned = toSmartPosition(
      event.clientX,
      event.clientY,
      340,
      Math.min(items.length, 10) * 38 + 36,
    );
    closeSlashMenu();
    setContextMenu({
      open: true,
      x: positioned.x,
      y: positioned.y,
      situation,
      items,
    });
    updatePipeline([
      "Context menu event captured.",
      "Default browser menu prevented.",
      `Context detected: ${situation.replace("-", " ")}.`,
      "Custom toolbox opened with smart positioning.",
    ]);
  };

  useEffect(() => {
    const shortcutMap: Record<string, EditorCommandId> = {
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
      "ctrl+shift+r": "alignTextRight",
    };

    const toShortcutKey = (event: KeyboardEvent) => {
      let key = event.key.toLowerCase();
      const code = event.code || "";
      if (/^Key[A-Z]$/.test(code)) {
        key = code.slice(3).toLowerCase();
      } else if (/^Digit[0-9]$/.test(code)) {
        key = code.slice(5);
      }
      const parts: string[] = [];
      if (event.ctrlKey) parts.push("ctrl");
      if (event.shiftKey) parts.push("shift");
      if (event.altKey) parts.push("alt");
      parts.push(key);
      return parts.join("+");
    };

    const isBlockedBrowserShortcut = (event: KeyboardEvent) => {
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

    const isPrintableCharacterKey = (event: KeyboardEvent) => {
      if (event.key.length !== 1) return false;
      if (event.ctrlKey || event.metaKey || event.altKey) return false;
      return true;
    };

    const onKeyDown = (event: KeyboardEvent) => {
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

      const target = event.target as HTMLElement | null;
      const editorContainsTarget =
        !!target && !!editorSurfaceRef.current?.contains(target);
      const typingInNonEditor =
        !!target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT") &&
        !editorContainsTarget;

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
        if (
          parentNode.type.name === "heading" &&
          parentText === NEW_BLOG_SECTION_PROMPT.toLowerCase()
        ) {
          const from = $from.start();
          const to = from + parentNode.content.size;
          if (from < to) {
            tiptapEditor.commands.setTextSelection({ from, to });
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
    return () => {
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
    tiptapEditor,
  ]);

  if (!authReady || loading) {
    return (
      <main
        className="min-h-screen bg-slate-950 px-4 py-20 text-slate-100 sm:px-6 lg:px-8"
        onContextMenu={(event) => event.preventDefault()}
      >
        <div className="mx-auto w-full max-w-7xl rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">
          Loading blog CMS...
        </div>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen bg-slate-950 text-slate-100"
      onContextMenu={(event) => event.preventDefault()}
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <header className="rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-slate-900 to-slate-950 p-5 shadow-[0_25px_70px_rgba(2,6,23,0.45)] sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                Content Management
              </p>
              <h1 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">
                Blog Dashboard
              </h1>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={createPost}
                className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400"
              >
                New Post
              </button>
              <Link
                href="/blog"
                className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold transition hover:border-emerald-300 hover:text-emerald-300"
              >
                View Blog
              </Link>
            </div>
          </div>
        </header>

        {error ? (
          <p className="mt-5 rounded-xl border border-red-300/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </p>
        ) : null}
        {notice ? (
          <p className="mt-5 rounded-xl border border-emerald-300/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
            {notice}
          </p>
        ) : null}

        <div className="mt-6 grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="space-y-6 xl:sticky xl:top-6 xl:h-fit">
            <section className="rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-5">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                  Posts
                </h2>
                <span className="text-xs text-slate-400">{posts.length}</span>
              </div>
              <div className="mt-4 max-h-[360px] space-y-2 overflow-auto pr-1">
                {posts.length === 0 ? (
                  <p className="rounded-lg border border-white/10 bg-slate-800/40 px-3 py-2 text-sm text-slate-300">
                    No posts yet.
                  </p>
                ) : (
                  posts.map((post) => (
                    <button
                      key={post.id}
                      type="button"
                      onClick={() => {
                        setError("");
                        setNotice("");
                        hydrateFromPost(post);
                      }}
                      className={`w-full rounded-xl border px-3 py-3 text-left transition ${
                        form.id === post.id
                          ? "border-emerald-400/50 bg-emerald-500/10"
                          : "border-white/10 bg-slate-800/35 hover:border-white/20"
                      }`}
                    >
                      <p className="line-clamp-1 text-sm font-semibold text-white">
                        {post.title}
                      </p>
                      <div className="mt-2 flex items-center justify-between gap-2 text-xs text-slate-400">
                        <span className="uppercase">{post.status}</span>
                        <span>{prettyDate(post.updatedAt)}</span>
                      </div>
                    </button>
                  ))
                )}
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-5">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                  Anchor Links
                </h2>
                <span className="text-xs text-slate-400">
                  {anchorPreviewLinks.length}
                </span>
              </div>
              <p className="mt-2 text-[11px] text-slate-400">
                Live preview of saved anchor words with their links.
              </p>
              <div className="mt-4 max-h-[280px] space-y-2 overflow-auto pr-1">
                {anchorPreviewLinks.length === 0 ? (
                  <p className="rounded-lg border border-white/10 bg-slate-800/40 px-3 py-2 text-sm text-slate-300">
                    No anchor links in this post yet.
                  </p>
                ) : (
                  anchorPreviewLinks.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl border border-white/10 bg-slate-800/35 px-3 py-2.5 transition hover:border-emerald-300/50 hover:bg-emerald-500/10"
                    >
                      <p className="line-clamp-1 text-sm font-semibold text-white">
                        {item.text}
                      </p>
                      <p className="mt-1 line-clamp-1 text-xs text-emerald-300">
                        {item.href}
                      </p>
                    </a>
                  ))
                )}
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                Site Settings
              </h2>
              <div className="mt-4 space-y-3">
                <label className="block text-xs text-slate-300">
                  Site Title
                  <input
                    value={settings.siteTitle}
                    onChange={(event) =>
                      setSettings((prev) => ({
                        ...prev,
                        siteTitle: event.target.value,
                      }))
                    }
                    className="mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                  />
                </label>
                <label className="block text-xs text-slate-300">
                  Author Name
                  <input
                    value={settings.authorName}
                    onChange={(event) =>
                      setSettings((prev) => ({
                        ...prev,
                        authorName: event.target.value,
                      }))
                    }
                    className="mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                  />
                </label>
                <button
                  type="button"
                  onClick={saveSettings}
                  disabled={savingSettings}
                  className="w-full rounded-lg bg-emerald-500 px-3 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400 disabled:opacity-50"
                >
                  {savingSettings ? "Saving..." : "Save Settings"}
                </button>
              </div>
            </section>
          </aside>

          <section className="space-y-6">
            <form onSubmit={savePost} className="space-y-6">
              <article className="rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block text-xs text-slate-300">
                    Title (H1)
                    <input
                      value={form.title}
                      onChange={(event) => {
                        const nextTitle = event.target.value;
                        setForm((prev) => {
                          const nextMetaTitle =
                            !prev.metaTitle || prev.metaTitle === prev.title
                              ? nextTitle
                              : prev.metaTitle;
                          return {
                            ...prev,
                            title: nextTitle,
                            slug: slugTouched ? prev.slug : slugify(nextTitle),
                            metaTitle: nextMetaTitle,
                          };
                        });
                      }}
                      placeholder="Post title"
                      className="mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm outline-none focus:border-emerald-400"
                    />
                    <span className="mt-1 block text-[11px] text-slate-400">
                      The post title is always rendered as{" "}
                      <code className="text-slate-200">h1</code>.
                    </span>
                  </label>
                  <label className="block text-xs text-slate-300">
                    Slug (auto-generate)
                    <input
                      value={form.slug}
                      onChange={(event) => {
                        setSlugTouched(true);
                        setForm((prev) => ({
                          ...prev,
                          slug: slugify(event.target.value),
                        }));
                      }}
                      placeholder="my-blog-post"
                      className="mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm outline-none focus:border-emerald-400"
                    />
                  </label>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <label className="block text-xs text-slate-300">
                    Author Name
                    <input
                      value={form.authorName}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          authorName: event.target.value,
                        }))
                      }
                      className="mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm outline-none focus:border-emerald-400"
                    />
                  </label>
                  <div className="text-xs text-slate-300">
                    <p>Status</p>
                    <div className="mt-1.5 flex flex-wrap gap-2">
                      {(["draft", "published", "scheduled"] as Status[]).map(
                        (status) => (
                          <button
                            key={status}
                            type="button"
                            onClick={() =>
                              setForm((prev) => ({
                                ...prev,
                                status,
                                scheduledAt:
                                  status === "scheduled"
                                    ? prev.scheduledAt
                                    : "",
                              }))
                            }
                            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition ${
                              form.status === status
                                ? "border-emerald-400 bg-emerald-500/15 text-emerald-300"
                                : "border-white/20 text-slate-200 hover:border-white/40"
                            }`}
                          >
                            {status}
                          </button>
                        ),
                      )}
                    </div>
                  </div>
                  <label className="block text-xs text-slate-300">
                    Schedule Date & Time
                    <input
                      type="datetime-local"
                      value={form.scheduledAt}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          scheduledAt: event.target.value,
                        }))
                      }
                      disabled={form.status !== "scheduled"}
                      className="mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm outline-none focus:border-emerald-400 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </label>
                </div>
              </article>

              <article className="rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-6">
                <div
                  className="sticky top-20 z-30 -mx-1 rounded-xl border border-white/15 bg-slate-950/92 p-2 shadow-[0_10px_30px_rgba(2,6,23,0.35)] backdrop-blur transition-all duration-200"
                  onMouseDown={preserveSelectionOnToolbarMouseDown}
                >
                  <p className="px-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    Top Toolbar (Static)
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    {topToolbarActions.map((action) => (
                      <button
                        key={action.key}
                        type="button"
                        onClick={action.run}
                        aria-pressed={action.active}
                        className={toolbarButtonClass(action.active)}
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-[11px] text-slate-400">
                  State-driven editor active. Shortcuts: Ctrl+B, I, U, K and
                  Ctrl+Alt+1,2,3,7,8. Ctrl+Enter inserts a new blog section.
                  Ctrl+Shift+L/E/R aligns text. Ctrl+S updates/saves this post.
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] text-slate-300">
                  <span
                    className={`rounded-full border px-2 py-1 ${
                      interactionState.isFocused
                        ? "border-emerald-400/60 bg-emerald-500/15 text-emerald-200"
                        : "border-white/20 bg-white/5 text-slate-300"
                    }`}
                  >
                    {interactionState.isFocused
                      ? "Editor focused"
                      : "Editor idle"}
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/5 px-2 py-1 text-slate-200">
                    {interactionState.hasTextSelection
                      ? `Selected: ${interactionState.selectedText.slice(0, 28)}${interactionState.selectedText.length > 28 ? "..." : ""}`
                      : interactionState.isImageSelected
                        ? "Image selected"
                        : interactionState.isEmptyLine
                          ? "Empty line context"
                          : "Cursor context"}
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/5 px-2 py-1 text-slate-200">
                    Node: {interactionState.nodeType.toUpperCase()}
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/5 px-2 py-1 text-slate-200">
                    Context menu: {contextMenu.open ? "open" : "closed"}
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/5 px-2 py-1 text-slate-200">
                    Slash menu: {slashMenu.open ? "open" : "closed"}
                  </span>
                </div>

                <div className="mt-3 rounded-xl border border-white/10 bg-slate-900/45 p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-300">
                    Command Driven UX
                  </p>
                  <div className="mt-2 space-y-1 text-xs text-white">
                    {commandPipeline.map((step, index) => (
                      <p key={`${step}-${index}`} className="leading-5">
                        {index + 1}. {step}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-3 rounded-xl border border-white/10 bg-slate-900/45 p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-300">
                    Block Inserter ( Instrctions + Templates )
                  </p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
                    {blockTemplateCatalog.map((block) => (
                      <button
                        key={block.id}
                        type="button"
                        onClick={() => insertBlockTemplate(block.id)}
                        className="rounded-lg border border-white/15 bg-slate-800/55 px-3 py-2.5 text-left transition hover:-translate-y-0.5 hover:border-emerald-300/50 hover:bg-emerald-500/10"
                      >
                        <p className="text-sm font-semibold text-slate-100">
                          {block.label}
                        </p>
                        <p className="mt-1 text-[11px] text-slate-300">
                          {block.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                <div
                  className="mt-4 grid gap-3 lg:grid-cols-[minmax(0,1fr)_220px]"
                  onMouseDown={preserveSelectionOnToolbarMouseDown}
                >
                  <input
                    value={embedUrl}
                    onChange={(event) => setEmbedUrl(event.target.value)}
                    placeholder="Paste YouTube URL for embed"
                    className="w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                  />
                  <button
                    type="button"
                    onClick={addEmbed}
                    className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold hover:border-emerald-300 hover:text-emerald-300"
                  >
                    Insert Embed
                  </button>
                </div>

                <div
                  className="mt-3"
                  onMouseDown={preserveSelectionOnToolbarMouseDown}
                >
                  <button
                    type="button"
                    onClick={openFaqModal}
                    className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold hover:border-emerald-300 hover:text-emerald-300"
                  >
                    Open FAQ Modal
                  </button>
                </div>

                <div
                  className="mt-3 grid gap-3 sm:grid-cols-[120px_120px_180px]"
                  onMouseDown={preserveSelectionOnToolbarMouseDown}
                >
                  <label className="text-xs text-slate-300">
                    Rows
                    <input
                      type="number"
                      min={1}
                      max={10}
                      value={tableRows}
                      onChange={(event) =>
                        setTableRows(
                          Number.isFinite(Number(event.target.value))
                            ? Number(event.target.value)
                            : 3,
                        )
                      }
                      className="mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                    />
                  </label>
                  <label className="text-xs text-slate-300">
                    Cols
                    <input
                      type="number"
                      min={1}
                      max={8}
                      value={tableCols}
                      onChange={(event) =>
                        setTableCols(
                          Number.isFinite(Number(event.target.value))
                            ? Number(event.target.value)
                            : 3,
                        )
                      }
                      className="mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                    />
                  </label>
                  <button
                    type="button"
                    onClick={insertTableBlock}
                    className="self-end rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold hover:border-emerald-300 hover:text-emerald-300"
                  >
                    Insert Table
                  </button>
                </div>

                <div
                  key={editorKey}
                  ref={editorSurfaceRef}
                  onClick={(event) => void handleEditorClick(event)}
                  onContextMenu={handleEditorContextMenu}
                  className="relative mt-4 min-h-[220px] rounded-2xl border border-white/10 bg-slate-950/70 p-4"
                >
                  <EditorContent editor={tiptapEditor} />
                  {interactionState.active.link &&
                  interactionState.activeLinkHref ? (
                    <div className="pointer-events-none absolute left-3 -top-3 z-20 max-w-[260px] rounded-lg border border-emerald-300/35 bg-slate-900/95 px-2.5 py-2 shadow-[0_10px_30px_rgba(16,185,129,0.2)]">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-300/80">
                        Anchor Preview
                      </p>
                      <p className="mt-1 truncate text-xs text-emerald-200">
                        {interactionState.activeLinkHref}
                      </p>
                    </div>
                  ) : null}
                  {interactionState.hasTextSelection &&
                  inlineIndicator.visible ? (
                    <div
                      className="absolute z-30 translate-x-42 rounded-xl border border-emerald-300/35 bg-slate-900/95 px-2 py-1.5 shadow-[0_16px_40px_rgba(16,185,129,0.45)] backdrop-blur transition-all duration-150"
                      style={{
                        left: `${inlineIndicator.x}px`,
                        top: `${Math.max(8, inlineIndicator.y - 42)}px`,
                      }}
                      onMouseDown={preserveSelectionOnToolbarMouseDown}
                    >
                      <p className="mb-1 px-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-400">
                        Floating Toolbar
                      </p>
                      <div className="flex items-center gap-1.5">
                        {floatingToolbarActions.map((action) => (
                          <button
                            key={action.key}
                            type="button"
                            onClick={action.run}
                            aria-pressed={action.active}
                            className={toolbarButtonClass(action.active)}
                          >
                            {action.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : null}
                  {inlineIndicator.visible ? (
                    <div
                      className="pointer-events-none absolute z-20 max-w-[260px] -translate-x-1/2 rounded-full border border-emerald-300/40 bg-slate-900/95 px-2.5 py-1 text-[10px] font-semibold text-emerald-200 shadow-[0_8px_25px_rgba(16,185,129,0.25)] transition-all duration-150"
                      style={{
                        left: `${inlineIndicator.x}px`,
                        top: `${Math.max(8, inlineIndicator.y - 30)}px`,
                      }}
                    >
                      {inlineIndicator.label}
                    </div>
                  ) : null}
                </div>
              </article>

              <article className="rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-6">
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                  Taxonomy
                </h2>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs text-slate-300">Categories</p>
                    <div className="mt-2 max-h-44 space-y-2 overflow-auto pr-1">
                      {categories.map((category) => (
                        <label
                          key={category.id}
                          className="flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-slate-800/35 px-3 py-2 text-sm"
                        >
                          <span className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={form.categories.includes(category.name)}
                              onChange={() => toggleCategory(category.name)}
                              className="h-4 w-4 accent-emerald-500"
                            />
                            {category.name}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeCategory(category.slug)}
                            className="text-xs text-red-200 hover:text-red-100"
                          >
                            Delete
                          </button>
                        </label>
                      ))}
                      {categories.length === 0 ? (
                        <p className="text-sm text-slate-400">
                          No categories added.
                        </p>
                      ) : null}
                    </div>
                    <div className="mt-3 flex gap-2">
                      <input
                        value={newCategoryName}
                        onChange={(event) =>
                          setNewCategoryName(event.target.value)
                        }
                        placeholder="New category"
                        className="w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                      />
                      <button
                        type="button"
                        onClick={addCategory}
                        disabled={savingCategory}
                        className="rounded-lg bg-emerald-500 px-3 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400 disabled:opacity-50"
                      >
                        Add
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300">
                      Tags (comma separated)
                      <input
                        value={form.tagsInput}
                        onChange={(event) =>
                          setForm((prev) => ({
                            ...prev,
                            tagsInput: event.target.value,
                          }))
                        }
                        placeholder="design, branding, marketing"
                        className="mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                      />
                    </label>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {tagList(form.tagsInput).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/20 px-2.5 py-1 text-xs text-slate-200"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>

              <article className="rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-6">
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                  SEO Panel
                </h2>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <label className="block text-xs text-slate-300">
                    Meta Title
                    <input
                      value={form.metaTitle}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          metaTitle: event.target.value,
                        }))
                      }
                      className="mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                    />
                  </label>
                  <label className="block text-xs text-slate-300">
                    OG Image
                    <input
                      value={form.ogImage}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          ogImage: event.target.value,
                        }))
                      }
                      className="mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                    />
                  </label>
                  <label className="block text-xs text-slate-300 md:col-span-2">
                    Canonical URL
                    <input
                      value={form.canonicalUrl}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          canonicalUrl: event.target.value,
                        }))
                      }
                      placeholder="https://www.yoursite.com/blog/post-slug"
                      className="mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                    />
                  </label>
                </div>
                <label className="mt-4 block text-xs text-slate-300">
                  Meta Description
                  <textarea
                    rows={4}
                    value={form.metaDescription}
                    onChange={(event) =>
                      setForm((prev) => ({
                        ...prev,
                        metaDescription: event.target.value,
                      }))
                    }
                    className="mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                  />
                </label>
                <label className="mt-4 block text-xs text-slate-300">
                  SEO Keywords (comma separated)
                  <input
                    value={form.seoKeywordsInput}
                    onChange={(event) =>
                      setForm((prev) => ({
                        ...prev,
                        seoKeywordsInput: event.target.value,
                      }))
                    }
                    placeholder="seo, web design, digital marketing"
                    className="mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                  />
                  <span className="mt-1 block text-[11px] text-slate-400">
                    Used in BlogPosting schema `keywords`.
                  </span>
                </label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tagList(form.seoKeywordsInput).map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full border border-emerald-300/30 bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-200"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                <label className="mt-4 block text-xs text-slate-300">
                  <span className="flex items-center justify-between gap-2">
                    <span>Schema (JSON-LD)</span>
                    <button
                      type="button"
                      onClick={generateSchemaFromCurrentContent}
                      className="rounded-md border border-white/20 px-2.5 py-1 text-[11px] font-semibold text-slate-200 transition hover:border-emerald-300 hover:text-emerald-300"
                    >
                      Auto Generate
                    </button>
                  </span>
                  <textarea
                    rows={6}
                    value={form.schemaJsonLd}
                    onChange={(event) =>
                      setForm((prev) => ({
                        ...prev,
                        schemaJsonLd: event.target.value,
                      }))
                    }
                    placeholder='{"@context":"https://schema.org","@type":"BlogPosting"}'
                    className="mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm font-mono outline-none focus:border-emerald-400"
                  />
                  <span className="mt-1 block text-[11px] text-slate-400">
                    Auto-generated on save if empty. Use button to refresh
                    anytime.
                  </span>
                </label>
                <div className="mt-4 flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 text-xs text-slate-300">
                    <input
                      type="checkbox"
                      checked={form.robotsNoIndex}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          robotsNoIndex: event.target.checked,
                        }))
                      }
                      className="h-4 w-4 accent-emerald-500"
                    />
                    Robots: noindex
                  </label>
                  <label className="flex items-center gap-2 text-xs text-slate-300">
                    <input
                      type="checkbox"
                      checked={form.robotsNoFollow}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          robotsNoFollow: event.target.checked,
                        }))
                      }
                      className="h-4 w-4 accent-emerald-500"
                    />
                    Robots: nofollow
                  </label>
                </div>
              </article>

              <article className="rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-6">
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                  Media Library
                </h2>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <label className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold transition hover:border-emerald-300 hover:text-emerald-300">
                    {uploadingMedia ? "Uploading..." : "Upload Image"}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      disabled={uploadingMedia}
                      onChange={(event) => {
                        const file = event.target.files?.[0];
                        if (!file) return;
                        void uploadMedia(file);
                        event.target.value = "";
                      }}
                    />
                  </label>
                  <label className="block text-xs text-slate-300 sm:max-w-sm sm:flex-1">
                    Featured Image URL
                    <input
                      value={form.featuredImageUrl}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          featuredImageUrl: event.target.value,
                        }))
                      }
                      className="mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                    />
                  </label>
                </div>
                <label className="mt-3 block text-xs text-slate-300">
                  Image Alt Text
                  <input
                    value={form.imageAltText}
                    onChange={(event) =>
                      setForm((prev) => ({
                        ...prev,
                        imageAltText: event.target.value,
                      }))
                    }
                    placeholder="Describe the image for accessibility and SEO"
                    className="mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                  />
                </label>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {mediaItems.map((item) => (
                    <div
                      key={item.id}
                      className="overflow-hidden rounded-xl border border-white/10 bg-slate-800/40"
                    >
                      <div className="relative aspect-[4/3] bg-black">
                        <NextImage
                          src={item.url}
                          alt={form.imageAltText || item.fileName}
                          fill
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      </div>
                      <div className="space-y-2 p-3">
                        <p className="line-clamp-1 text-xs text-slate-300">
                          {item.fileName}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          {bytes(item.size)}
                          {item.width && item.height
                            ? ` | ${item.width} x ${item.height}`
                            : ""}
                        </p>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              setForm((prev) => ({
                                ...prev,
                                featuredImageUrl: item.url,
                                imageAltText:
                                  prev.imageAltText || item.fileName,
                                ogImage: prev.ogImage || item.url,
                              }))
                            }
                            className="flex-1 rounded-md border border-white/20 px-2 py-1.5 text-[11px] font-semibold hover:border-emerald-300 hover:text-emerald-300"
                          >
                            Use as Featured
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              const alt = form.imageAltText || item.fileName;
                              const insertedNode = insertImageNode(
                                item.url,
                                alt,
                                {
                                  mediaId: item.id,
                                  caption: "",
                                  align: "center",
                                  widthPercent: 100,
                                },
                              );
                              if (!insertedNode) {
                                insertEditorHtml(
                                  imageHtml(
                                    item.url,
                                    alt,
                                    item.id,
                                    "",
                                    "center",
                                    100,
                                  ),
                                );
                              }
                            }}
                            className="flex-1 rounded-md border border-white/20 px-2 py-1.5 text-[11px] font-semibold hover:border-emerald-300 hover:text-emerald-300"
                          >
                            Insert
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {mediaItems.length === 0 ? (
                    <p className="rounded-lg border border-white/10 bg-slate-800/40 px-3 py-3 text-sm text-slate-300">
                      No media uploaded yet.
                    </p>
                  ) : null}
                </div>
              </article>

              <article className="rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                    Comments
                  </h2>
                  <span className="text-xs text-slate-400">
                    {loadingComments
                      ? "Loading..."
                      : `${comments.length} total`}
                  </span>
                </div>
                {!form.id ? (
                  <p className="mt-3 text-sm text-slate-400">
                    Save the post first to moderate comments.
                  </p>
                ) : comments.length === 0 ? (
                  <p className="mt-3 text-sm text-slate-400">
                    No comments on this post yet.
                  </p>
                ) : (
                  <div className="mt-4 space-y-3">
                    {comments.map((item) => (
                      <div
                        key={item.id}
                        className="rounded-xl border border-white/10 bg-slate-800/35 p-3"
                        style={{
                          marginLeft: `${Math.min(commentDepth.get(item.id) || 0, 4) * 14}px`,
                        }}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                          <p className="text-slate-200">
                            <span className="font-semibold">
                              {item.authorName}
                            </span>
                            {" | "}
                            {prettyDate(item.createdAt)}
                          </p>
                          <span
                            className={`rounded-full px-2 py-0.5 uppercase tracking-[0.08em] ${
                              item.status === "approved"
                                ? "bg-emerald-500/15 text-emerald-300"
                                : item.status === "pending"
                                  ? "bg-amber-500/15 text-amber-300"
                                  : "bg-red-500/15 text-red-300"
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-slate-200">
                          {item.content}
                        </p>
                        {item.moderationReason ? (
                          <p className="mt-1 text-xs text-amber-200">
                            Reason: {item.moderationReason}
                          </p>
                        ) : null}
                        <div className="mt-3 flex flex-wrap gap-2">
                          <button
                            type="button"
                            disabled={commentActionId === item.id}
                            onClick={() =>
                              void updateCommentStatus(item.id, "approved")
                            }
                            className="rounded-md border border-white/20 px-2.5 py-1.5 text-[11px] font-semibold hover:border-emerald-300 hover:text-emerald-300 disabled:opacity-50"
                          >
                            Approve
                          </button>
                          <button
                            type="button"
                            disabled={commentActionId === item.id}
                            onClick={() =>
                              void updateCommentStatus(item.id, "pending")
                            }
                            className="rounded-md border border-white/20 px-2.5 py-1.5 text-[11px] font-semibold hover:border-amber-300 hover:text-amber-300 disabled:opacity-50"
                          >
                            Pending
                          </button>
                          <button
                            type="button"
                            disabled={commentActionId === item.id}
                            onClick={() =>
                              void updateCommentStatus(
                                item.id,
                                "spam",
                                "Marked as spam by admin.",
                              )
                            }
                            className="rounded-md border border-white/20 px-2.5 py-1.5 text-[11px] font-semibold hover:border-red-300 hover:text-red-300 disabled:opacity-50"
                          >
                            Spam
                          </button>
                          <button
                            type="button"
                            disabled={commentActionId === item.id}
                            onClick={() => void removeComment(item.id)}
                            className="rounded-md border border-red-300/30 px-2.5 py-1.5 text-[11px] font-semibold text-red-200 hover:border-red-300 hover:text-red-100 disabled:opacity-50"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </article>

              <article className="rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-xs text-slate-300">
                    <p>
                      Editing:{" "}
                      <span className="font-semibold text-white">
                        {selectedPost?.title || "New post"}
                      </span>
                    </p>
                    <p className="mt-1 text-slate-400">
                      Updated:{" "}
                      {selectedPost ? prettyDate(selectedPost.updatedAt) : "-"}
                    </p>
                    <p className="mt-1 text-slate-400">
                      Scheduled:{" "}
                      {selectedPost
                        ? prettyDate(selectedPost.scheduledAt)
                        : "-"}
                    </p>
                    <p className="mt-1 text-slate-400">
                      Autosave:{" "}
                      <span className="text-slate-200">{autoSaveNotice}</span>
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="submit"
                      disabled={savingPost}
                      className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400 disabled:opacity-50"
                    >
                      {savingPost
                        ? "Saving..."
                        : form.id
                          ? "Update Post"
                          : "Create Post"}
                    </button>
                    <button
                      type="button"
                      onClick={deletePost}
                      disabled={!form.id || deletingPost}
                      className="rounded-lg border border-red-300/30 px-5 py-2.5 text-sm font-semibold text-red-200 transition hover:border-red-300 hover:text-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {deletingPost ? "Deleting..." : "Delete Post"}
                    </button>
                  </div>
                </div>
              </article>
            </form>
          </section>
        </div>
      </div>

      {contextMenu.open ? (
        <div
          ref={contextMenuRef}
          className="fixed z-[70] w-[340px] rounded-xl border border-white/15 bg-slate-900/95 p-2.5 shadow-[0_22px_60px_rgba(2,6,23,0.6)] backdrop-blur"
          style={{ left: `${contextMenu.x}px`, top: `${contextMenu.y}px` }}
          role="menu"
          aria-label="Editor context menu"
        >
          <p className="px-1 py-1 text-[10px] uppercase tracking-[0.1em] text-slate-400">
            {contextMenu.situation === "text-selected"
              ? "Text selected"
              : contextMenu.situation === "image"
                ? "Image"
                : "Empty line"}
          </p>
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            {contextMenu.items.map((item, index) => (
              <button
                key={`${contextMenu.situation}-${item.id}-${index}`}
                type="button"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => runContextCommand(item.id)}
                className="w-full rounded-md border border-transparent px-2 py-2 text-left text-xs text-slate-200 transition hover:border-emerald-300/40 hover:bg-emerald-500/10 hover:text-emerald-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {slashMenu.open ? (
        <div
          ref={slashMenuRef}
          className="fixed z-[72] w-[260px] rounded-xl border border-white/15 bg-slate-900/95 p-2 shadow-[0_22px_60px_rgba(2,6,23,0.6)] backdrop-blur"
          style={{ left: `${slashMenu.x}px`, top: `${slashMenu.y}px` }}
          role="listbox"
          aria-label="Slash commands"
        >
          <p className="px-2 py-1 text-[10px] uppercase tracking-[0.1em] text-green-500">
            Slash Command{slashMenu.query ? `: ${slashMenu.query}` : ""}
          </p>
          <div
            ref={slashMenuListRef}
            className="mt-1 max-h-64 space-y-1 overflow-auto"
            onWheel={(event) => {
              if (slashMenu.items.length === 0) return;
              event.preventDefault();
              const absDelta = Math.abs(event.deltaY);
              if (absDelta < 2) return;
              shiftSlashActiveIndex(event.deltaY > 0 ? 1 : -1);
            }}
          >
            {slashMenu.items.map((item, index) => (
              <button
                key={`slash-${item.id}-${index}`}
                ref={(node) => {
                  slashItemRefs.current[index] = node;
                }}
                type="button"
                onMouseDown={(event) => event.preventDefault()}
                onMouseEnter={() => setSlashActiveIndex(index)}
                onClick={() => runSlashCommand(item.id)}
                className={`w-full rounded-md border px-2.5 py-2 text-left text-sm transition ${
                  slashMenu.activeIndex === index
                    ? "border-emerald-300/45 bg-emerald-500/15 text-emerald-200"
                    : "border-transparent text-slate-200 hover:border-emerald-300/40 hover:bg-emerald-500/10 hover:text-emerald-200"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {isImageModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4">
          <div className="w-full max-w-lg rounded-2xl border border-white/15 bg-slate-900 p-5 shadow-[0_30px_80px_rgba(2,6,23,0.55)] sm:p-6">
            <h2 className="text-lg font-semibold text-white">
              {replaceImageSrc ? "Replace Image" : "Insert Image"}
            </h2>
            <p className="mt-1 text-xs text-slate-400">
              {replaceImageSrc
                ? "Upload or paste a new image URL to replace the selected one."
                : "Upload a new image or paste a URL, then add ALT text."}
            </p>

            <div className="my-5 space-y-4">
              <label className="block text-xs text-slate-300">
                Image URL
                <input
                  value={imageModalUrl}
                  onChange={(event) => setImageModalUrl(event.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm outline-none focus:border-emerald-400"
                />
              </label>

              <label className="block text-xs text-slate-300">
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) =>
                    setImageModalFile(event.target.files?.[0] ?? null)
                  }
                  className="mt-1.5 block w-full cursor-pointer rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm text-slate-200 file:mr-3 file:cursor-pointer file:rounded-md file:border-0 file:bg-emerald-500 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-slate-950"
                />
              </label>

              <label className="block text-xs text-slate-300">
                ALT Text
                <input
                  value={imageModalAlt}
                  onChange={(event) => setImageModalAlt(event.target.value)}
                  placeholder="Describe the image"
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm outline-none focus:border-emerald-400"
                />
              </label>

              <label className="block text-xs text-slate-300">
                Figure Caption
                <input
                  value={imageModalCaption}
                  onChange={(event) => setImageModalCaption(event.target.value)}
                  placeholder="Optional caption shown below image"
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm outline-none focus:border-emerald-400"
                />
              </label>

              <label className="block text-xs text-slate-300">
                Alignment
                <select
                  value={imageModalAlign}
                  onChange={(event) =>
                    setImageModalAlign(normalizeImageAlign(event.target.value))
                  }
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm outline-none focus:border-emerald-400"
                >
                  <option value="left">Left</option>
                  <option value="center">Center</option>
                  <option value="right">Right</option>
                </select>
              </label>
            </div>

            <div className="mt-5 flex flex-wrap justify-end gap-2">
              <button
                type="button"
                onClick={closeImageModal}
                disabled={insertingImage}
                className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/40 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => void insertImageFromModal()}
                disabled={insertingImage}
                className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400 disabled:opacity-50"
              >
                {insertingImage
                  ? replaceImageSrc
                    ? "Replacing..."
                    : "Inserting..."
                  : replaceImageSrc
                    ? "Replace Image"
                    : "Insert Image"}
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {isFaqModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4">
          <div className="w-full max-w-lg rounded-2xl border border-white/15 bg-slate-900 p-5 shadow-[0_30px_80px_rgba(2,6,23,0.55)] sm:p-6">
            <h2 className="text-lg font-semibold text-white">Insert FAQ</h2>
            <p className="mt-1 text-xs text-slate-400">
              Add FAQ question and answer. It will render SEO-friendly FAQ
              block.
            </p>

            <div className="mt-5 space-y-4">
              <label className="block text-xs text-slate-300">
                Question
                <input
                  value={faqQuestion}
                  onChange={(event) => setFaqQuestion(event.target.value)}
                  placeholder="What is your question?"
                  className="mt-1 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                />
              </label>
              <label className="block text-xs text-slate-300">
                Answer
                <textarea
                  rows={4}
                  value={faqAnswer}
                  onChange={(event) => setFaqAnswer(event.target.value)}
                  placeholder="Write the FAQ answer..."
                  className="mt-1 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                />
              </label>
            </div>

            <div className="mt-5 flex flex-wrap justify-end gap-2">
              <button
                type="button"
                onClick={closeFaqModal}
                className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/40"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={insertFaqFromModal}
                className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400"
              >
                Insert FAQ
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {isLinkModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4">
          <div className="w-full max-w-md rounded-2xl border border-white/15 bg-slate-900 p-5 shadow-[0_30px_80px_rgba(2,6,23,0.55)] sm:p-6">
            <h2 className="text-lg font-semibold text-white">Insert Link</h2>
            <p className="mt-1 text-xs text-slate-400">
              Add URL and click insert. If no text is selected, URL will be
              inserted as link text.
            </p>

            <label className="mt-5 block text-xs text-slate-300">
              Link URL
              <input
                value={linkModalUrl}
                onChange={(event) => setLinkModalUrl(event.target.value)}
                placeholder="https://example.com"
                className="mt-1.5 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm outline-none focus:border-emerald-400"
              />
            </label>
            <fieldset className="mt-4">
              <legend className="text-xs text-slate-300">Link Type</legend>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 bg-slate-800/40 px-3 py-2 text-xs text-slate-200">
                  <input
                    type="radio"
                    name="link-rel-mode"
                    checked={linkRelMode === "dofollow"}
                    onChange={() => setLinkRelMode("dofollow")}
                    className="h-4 w-4 accent-emerald-500"
                  />
                  Dofollow
                </label>
                <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 bg-slate-800/40 px-3 py-2 text-xs text-slate-200">
                  <input
                    type="radio"
                    name="link-rel-mode"
                    checked={linkRelMode === "nofollow"}
                    onChange={() => setLinkRelMode("nofollow")}
                    className="h-4 w-4 accent-emerald-500"
                  />
                  Nofollow
                </label>
              </div>
            </fieldset>

            <div className="mt-5 flex flex-wrap justify-end gap-2">
              <button
                type="button"
                onClick={closeLinkModal}
                disabled={insertingLink}
                className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/40 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={insertLinkFromModal}
                disabled={insertingLink}
                className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400 disabled:opacity-50"
              >
                {insertingLink ? "Inserting..." : "Insert Link"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
