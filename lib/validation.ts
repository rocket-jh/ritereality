import { z } from "zod";
import {
  AREA_UNITS,
  FACING_OPTIONS,
  LISTING_TYPES,
  PRICE_UNITS,
  PROJECT_STATUSES,
  PROPERTY_RECORD_STATUSES,
  PROPERTY_TYPES,
  USER_ROLES,
} from "@/lib/constants";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const createUserSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(USER_ROLES),
});

const flatConfigSchema = z.object({
  bhk: z.number().int().min(1).max(10).nullable().optional(),
  bathrooms: z.number().int().min(0).max(20).nullable().optional(),
  balconies: z.number().int().min(0).max(20).nullable().optional(),
  floorNumber: z.number().int().min(0).max(200).nullable().optional(),
  totalFloors: z.number().int().min(0).max(200).nullable().optional(),
});

const plotConfigSchema = z.object({
  plotArea: z.number().positive().nullable().optional(),
  facing: z.enum(FACING_OPTIONS).nullable().optional(),
  roadWidth: z.number().positive().nullable().optional(),
});

const faqSchema = z.object({
  question: z.string().min(3),
  answer: z.string().min(5),
});

export const propertySchema = z
  .object({
    propertyTitle: z.string().min(5).max(120),
    propertyType: z.enum(PROPERTY_TYPES),
    listingType: z.enum(LISTING_TYPES),
    price: z.number().positive(),
    priceUnit: z.enum(PRICE_UNITS),
    areaSize: z.number().positive(),
    areaUnit: z.enum(AREA_UNITS),
    propertyCode: z.string().optional(),
    city: z.string().min(2).default("Kurukshetra"),
    areaSector: z.string().min(1),
    fullAddress: z.string().min(5),
    mapLocation: z.object({
      lat: z.number().min(-90).max(90),
      lng: z.number().min(-180).max(180),
    }),
    builderName: z.string().min(2),
    projectName: z.string().min(2),
    projectStatus: z.enum(PROJECT_STATUSES),
    possessionDate: z.string().min(4).nullable().optional(),
    reraNumber: z.string().optional().default(""),
    flatConfig: flatConfigSchema.default({}),
    plotConfig: plotConfigSchema.default({}),
    coverImageUrl: z.string().url(),
    galleryImageUrls: z.array(z.string().url()).default([]),
    videoUrl: z.string().url().or(z.literal("")).optional().default(""),
    view360Url: z.string().url().or(z.literal("")).optional().default(""),
    shortDescription: z.string().min(10).max(240),
    detailedDescription: z.string().min(25),
    keyHighlights: z.array(z.string().min(2)).default([]),
    amenities: z.array(z.string().trim().min(1).max(60)).default([]),
    contactName: z.string().min(2),
    phoneNumber: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits."),
    whatsappNumber: z.string().regex(/^\d{10}$/, "WhatsApp number must be exactly 10 digits."),
    alternateNumber: z.string().max(15).optional().default(""),
    featuredProperty: z.boolean().default(false),
    verifiedBadge: z.boolean().default(false),
    newLaunch: z.boolean().default(false),
    recordStatus: z.enum(PROPERTY_RECORD_STATUSES).default("draft"),
    metaTitle: z.string().min(5).max(80),
    metaDescription: z.string().min(20).max(180),
    faqs: z.array(faqSchema).default([]),
    slug: z.string().optional(),
  })
  .superRefine((value, ctx) => {
    if (value.propertyType === "flat" && !value.flatConfig.bhk) {
      ctx.addIssue({
        code: "custom",
        path: ["flatConfig", "bhk"],
        message: "BHK is required for flats.",
      });
    }
    if (value.propertyType === "plot" && !value.plotConfig.plotArea) {
      ctx.addIssue({
        code: "custom",
        path: ["plotConfig", "plotArea"],
        message: "Plot area is required for plots.",
      });
    }
    const needsPossessionDate =
      value.projectStatus === "under_construction" || value.projectStatus === "under-construction";
    if (needsPossessionDate && (!value.possessionDate || value.possessionDate.length === 0)) {
      ctx.addIssue({
        code: "custom",
        path: ["possessionDate"],
        message: "Possession date is required when project is under construction.",
      });
    }
  });

export const bannerSchema = z
  .object({
    projectName: z.string().min(2),
    title: z.string().min(5),
    subtitle: z.string().min(8),
    imageUrl: z.string().url(),
    showCta: z.boolean().optional().default(true),
    ctaLabel: z.string().optional().default(""),
    ctaHref: z.string().optional().default(""),
    slideEnabled: z.boolean().optional().default(true),
  })
  .superRefine((value, ctx) => {
    if (!value.showCta) {
      return;
    }

    if (!value.ctaLabel || value.ctaLabel.trim().length < 2) {
      ctx.addIssue({
        code: "custom",
        path: ["ctaLabel"],
        message: "CTA label must be at least 2 characters when CTA is enabled.",
      });
    }

    if (!value.ctaHref || value.ctaHref.trim().length < 1) {
      ctx.addIssue({
        code: "custom",
        path: ["ctaHref"],
        message: "CTA link is required when CTA is enabled.",
      });
    }
  });
