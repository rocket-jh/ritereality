import { Model, Schema, model, models } from "mongoose";
import {
  AREA_UNITS,
  FACING_OPTIONS,
  LISTING_TYPES,
  PRICE_UNITS,
  PROJECT_STATUSES,
  PROPERTY_RECORD_STATUSES,
  PROPERTY_TYPES,
} from "@/lib/constants";

export type PropertyDocument = {
  _id: string;
  propertyTitle: string;
  propertyType: (typeof PROPERTY_TYPES)[number];
  listingType: (typeof LISTING_TYPES)[number];
  price: number;
  priceUnit: (typeof PRICE_UNITS)[number];
  areaSize: number;
  areaUnit: (typeof AREA_UNITS)[number];
  propertyCode: string;
  city: string;
  areaSector: string;
  fullAddress: string;
  mapLocation: {
    lat: number;
    lng: number;
  };
  builderName: string;
  projectName: string;
  projectStatus: (typeof PROJECT_STATUSES)[number];
  possessionDate?: Date | null;
  reraNumber?: string;
  flatConfig: {
    bhk?: number | null;
    bathrooms?: number | null;
    balconies?: number | null;
    floorNumber?: number | null;
    totalFloors?: number | null;
  };
  plotConfig: {
    plotArea?: number | null;
    facing?: (typeof FACING_OPTIONS)[number] | null;
    roadWidth?: number | null;
  };
  coverImageUrl: string;
  galleryImageUrls: string[];
  videoUrl?: string;
  view360Url?: string;
  shortDescription: string;
  detailedDescription: string;
  keyHighlights: string[];
  amenities: string[];
  contactName: string;
  phoneNumber: string;
  whatsappNumber: string;
  alternateNumber?: string;
  featuredProperty: boolean;
  verifiedBadge: boolean;
  newLaunch: boolean;
  recordStatus: (typeof PROPERTY_RECORD_STATUSES)[number];
  metaTitle: string;
  metaDescription: string;
  faqs: { question: string; answer: string }[];
  slug: string;
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
};

const PropertySchema = new Schema<PropertyDocument>(
  {
    propertyTitle: { type: String, required: true, trim: true },
    propertyType: { type: String, enum: PROPERTY_TYPES, required: true },
    listingType: { type: String, enum: LISTING_TYPES, required: true },
    price: { type: Number, required: true },
    priceUnit: { type: String, enum: PRICE_UNITS, required: true },
    areaSize: { type: Number, required: true },
    areaUnit: { type: String, enum: AREA_UNITS, required: true },
    propertyCode: { type: String, required: true, unique: true, index: true },
    city: { type: String, required: true, default: "Kurukshetra", trim: true },
    areaSector: { type: String, required: true, trim: true, index: true },
    fullAddress: { type: String, required: true, trim: true },
    mapLocation: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
    },
    builderName: { type: String, required: true, trim: true },
    projectName: { type: String, required: true, trim: true },
    projectStatus: { type: String, enum: PROJECT_STATUSES, required: true },
    possessionDate: { type: Date, default: null },
    reraNumber: { type: String, trim: true, default: "" },
    flatConfig: {
      bhk: { type: Number, default: null },
      bathrooms: { type: Number, default: null },
      balconies: { type: Number, default: null },
      floorNumber: { type: Number, default: null },
      totalFloors: { type: Number, default: null },
    },
    plotConfig: {
      plotArea: { type: Number, default: null },
      facing: { type: String, enum: FACING_OPTIONS, default: null },
      roadWidth: { type: Number, default: null },
    },
    coverImageUrl: { type: String, required: true, trim: true },
    galleryImageUrls: { type: [String], default: [] },
    videoUrl: { type: String, trim: true, default: "" },
    view360Url: { type: String, trim: true, default: "" },
    shortDescription: { type: String, required: true, trim: true },
    detailedDescription: { type: String, required: true, trim: true },
    keyHighlights: { type: [String], default: [] },
    amenities: { type: [String], default: [] },
    contactName: { type: String, required: true, trim: true },
    phoneNumber: { type: String, required: true, trim: true },
    whatsappNumber: { type: String, required: true, trim: true },
    alternateNumber: { type: String, trim: true, default: "" },
    featuredProperty: { type: Boolean, default: false },
    verifiedBadge: { type: Boolean, default: false },
    newLaunch: { type: Boolean, default: false },
    recordStatus: { type: String, enum: PROPERTY_RECORD_STATUSES, default: "draft" },
    metaTitle: { type: String, required: true, trim: true },
    metaDescription: { type: String, required: true, trim: true },
    faqs: {
      type: [
        {
          question: { type: String, required: true, trim: true },
          answer: { type: String, required: true, trim: true },
        },
      ],
      default: [],
    },
    slug: { type: String, required: true, unique: true, index: true },
    createdBy: { type: String, required: true },
    updatedBy: { type: String, required: true },
  },
  { timestamps: true }
);

export const PropertyModel: Model<PropertyDocument> =
  (models.Property as Model<PropertyDocument> | undefined) ??
  model<PropertyDocument>("Property", PropertySchema);
