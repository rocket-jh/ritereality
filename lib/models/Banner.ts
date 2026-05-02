import { Model, Schema, model, models } from "mongoose";

export type BannerDocument = {
  _id: string;
  projectName: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  showCta: boolean;
  ctaLabel: string;
  ctaHref: string;
  slideEnabled?: boolean;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
};

const BannerSchema = new Schema<BannerDocument>(
  {
    projectName: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    subtitle: { type: String, required: true, trim: true },
    imageUrl: { type: String, required: true, trim: true },
    showCta: { type: Boolean, default: true },
    ctaLabel: { type: String, default: "", trim: true },
    ctaHref: { type: String, default: "", trim: true },
    slideEnabled: { type: Boolean, default: true },
    updatedBy: { type: String, required: true },
  },
  { timestamps: true }
);

export const BannerModel: Model<BannerDocument> =
  (models.Banner as Model<BannerDocument> | undefined) ??
  model<BannerDocument>("Banner", BannerSchema);
