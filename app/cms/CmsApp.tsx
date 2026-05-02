"use client";

import {
  ChangeEvent,
  DragEvent,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Link from "next/link";
import Image from "next/image";
import { upload } from "@imagekit/next";
import {
  FiArrowRight,
  FiDroplet,
  FiEye,
  FiEyeOff,
  FiFileText,
  FiGrid,
  FiHome,
  FiImage,
  FiLogOut,
  FiMenu,
  FiPlus,
  FiSave,
  FiShield,
  FiTruck,
  FiUsers,
  FiX,
  FiZap,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import { toSlug } from "@/lib/slug";
import {
  AMENITY_OPTIONS,
  AREA_UNITS,
  FACING_OPTIONS,
  LISTING_TYPES,
  PRICE_UNITS,
  PROPERTY_RECORD_STATUSES,
  type UserRole,
} from "@/lib/constants";
import {
  NAVBAR_CONFIG,
  normalizeProjectStatusForForm,
  normalizePropertyTypeForForm,
} from "@/lib/navigation";

type SessionUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};

type SetupStatus = {
  adminExists: boolean;
  managerCount: number;
};

type UserProfile = {
  _id: string;
  name: string;
  email: string;
  role: UserRole;
};

type BannerItem = {
  _id: string;
  projectName: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  showCta?: boolean;
  ctaLabel: string;
  ctaHref: string;
  slideEnabled: boolean;
};

type PropertyItem = {
  _id: string;
  propertyTitle: string;
  propertyType: string;
  listingType: string;
  price: number;
  priceUnit: string;
  areaSize: number;
  areaUnit: string;
  propertyCode: string;
  city: string;
  areaSector: string;
  fullAddress: string;
  mapLocation: { lat: number; lng: number };
  builderName: string;
  projectName: string;
  projectStatus: string;
  possessionDate?: string | null;
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
    facing?: string | null;
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
  recordStatus: string;
  metaTitle: string;
  metaDescription: string;
  faqs?: { question: string; answer: string }[];
  slug: string;
};

type PropertyForm = {
  propertyTitle: string;
  propertyType: string;
  listingType: string;
  price: string;
  priceUnit: string;
  areaSize: string;
  areaUnit: string;
  propertyCode: string;
  city: string;
  areaSector: string;
  fullAddress: string;
  lat: string;
  lng: string;
  builderName: string;
  projectName: string;
  projectStatus: string;
  possessionDate: string;
  reraNumber: string;
  bhk: string;
  bathrooms: string;
  balconies: string;
  floorNumber: string;
  totalFloors: string;
  plotArea: string;
  facing: string;
  roadWidth: string;
  coverImageUrl: string;
  galleryImageUrls: string[];
  videoUrl: string;
  view360Url: string;
  shortDescription: string;
  detailedDescription: string;
  keyHighlightsText: string;
  amenities: string[];
  contactName: string;
  phoneNumber: string;
  featuredProperty: boolean;
  verifiedBadge: boolean;
  newLaunch: boolean;
  recordStatus: string;
  metaTitle: string;
  metaDescription: string;
  faqs: { question: string; answer: string }[];
  slug: string;
};

const initialPropertyForm: PropertyForm = {
  propertyTitle: "",
  propertyType: "plot",
  listingType: "sale",
  price: "",
  priceUnit: "total",
  areaSize: "",
  areaUnit: "sqyd",
  propertyCode: "",
  city: "Kurukshetra",
  areaSector: "",
  fullAddress: "",
  lat: "",
  lng: "",
  builderName: "",
  projectName: "",
  projectStatus: "ready-to-move",
  possessionDate: "",
  reraNumber: "",
  bhk: "",
  bathrooms: "",
  balconies: "",
  floorNumber: "",
  totalFloors: "",
  plotArea: "",
  facing: "",
  roadWidth: "",
  coverImageUrl: "",
  galleryImageUrls: [],
  videoUrl: "",
  view360Url: "",
  shortDescription: "",
  detailedDescription: "",
  keyHighlightsText: "",
  amenities: [],
  contactName: "",
  phoneNumber: "",
  featuredProperty: false,
  verifiedBadge: false,
  newLaunch: false,
  recordStatus: "draft",
  metaTitle: "",
  metaDescription: "",
  faqs: [{ question: "", answer: "" }],
  slug: "",
};

function parseLines(value: string) {
  return value
    .split("\n")
    .map((entry) => entry.trim())
    .filter((entry) => entry.length > 0);
}

function cleanPhone(value: string) {
  return value.replace(/\D/g, "").slice(0, 10);
}

function toCoordinate(value: string, min: number, max: number) {
  const coordinate = Number(value);
  return Number.isFinite(coordinate) && coordinate >= min && coordinate <= max
    ? coordinate
    : 0;
}

function locationMapQuery(form: Pick<PropertyForm, "lat" | "lng" | "fullAddress">) {
  if (form.lat && form.lng) return `${form.lat},${form.lng}`;
  return form.fullAddress;
}

function normalizeAmenity(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function uniqueAmenities(values: string[]) {
  const seen = new Set<string>();
  return values.map(normalizeAmenity).filter((value) => {
    const key = value.toLowerCase();
    if (!value || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function defaultAmenityLabel(value: string) {
  return value
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function amenityIconFor(value: string): IconType {
  const label = value.toLowerCase();
  if (label.includes("security") || label.includes("gated")) return FiShield;
  if (label.includes("parking") || label.includes("road")) return FiTruck;
  if (label.includes("water")) return FiDroplet;
  if (label.includes("electric") || label.includes("power")) return FiZap;
  return FiGrid;
}

function parseCoordinatesFromGoogleUrl(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return null;

  const atMatch = trimmed.match(/@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/);
  if (atMatch) {
    return { lat: Number(atMatch[1]), lng: Number(atMatch[2]) };
  }

  const longMatch = trimmed.match(/!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/);
  if (longMatch) {
    return { lat: Number(longMatch[1]), lng: Number(longMatch[2]) };
  }

  return null;
}

const MAX_IMAGE_UPLOAD_BYTES = 5 * 1024 * 1024;
const MAX_BANNER_IMAGE_UPLOAD_BYTES = 5 * 1024 * 1024;
const PROPERTY_WIZARD_DRAFT_KEY = "riterealty:property-wizard-draft:v1";
const propertyWizardSteps = [
  "Basics",
  "Location",
  "Configuration",
  "Media",
  "Details",
  "SEO & Publish",
] as const;
const propertyStepCaptions = [
  "Basic details",
  "Where it is located",
  "Property configuration",
  "Images and videos",
  "Description, amenities",
  "Meta and publish settings",
] as const;
type CmsView = "banner" | "managers" | "propertyWizard" | "records";

const initialBannerForm = {
  projectName: "Rite Realty",
  title: "",
  subtitle: "",
  imageUrl: "",
  showCta: true,
  ctaLabel: "Explore Projects",
  ctaHref: "/projects/new-launch",
  slideEnabled: true,
};

type LegacyPropertyDraft = Partial<PropertyForm> & {
  whatsappNumber?: string;
  alternateNumber?: string;
};

export default function CmsApp() {
  const [setup, setSetup] = useState<SetupStatus | null>(null);
  const [user, setUser] = useState<SessionUser | null>(null);
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [properties, setProperties] = useState<PropertyItem[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [submittingProperty, setSubmittingProperty] = useState(false);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [uploadingGallery, setUploadingGallery] = useState(false);
  const [uploadingBannerImage, setUploadingBannerImage] = useState(false);
  const [activeView, setActiveView] = useState<CmsView>("propertyWizard");
  const [propertyStep, setPropertyStep] = useState(0);

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [bootstrapForm, setBootstrapForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [managerForm, setManagerForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [bannerForm, setBannerForm] = useState(initialBannerForm);
  const [editingBannerId, setEditingBannerId] = useState<string | null>(null);
  const [bannerPreviewUrl, setBannerPreviewUrl] = useState<string | null>(null);
  const [banners, setBanners] = useState<BannerItem[]>([]);
  const [bannerSlideEnabled, setBannerSlideEnabled] = useState(false);
  const [propertyForm, setPropertyForm] =
    useState<PropertyForm>(initialPropertyForm);
  const [propertyErrors, setPropertyErrors] = useState<Record<string, string>>(
    {},
  );
  const [slugEditedManually, setSlugEditedManually] = useState(false);
  const [mapSearch, setMapSearch] = useState("");
  const [mapAutoFilling, setMapAutoFilling] = useState(false);
  const [showPropertyPreview, setShowPropertyPreview] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [galleryDropActive, setGalleryDropActive] = useState(false);
  const [coverDropActive, setCoverDropActive] = useState(false);
  const [amenityInput, setAmenityInput] = useState("");
  const [coverPreviewUrl, setCoverPreviewUrl] = useState<string | null>(null);
  const [galleryPreviewUrls, setGalleryPreviewUrls] = useState<string[]>([]);

  const isAdmin = user?.role === "admin";
  const canDeleteProperty = useMemo(() => isAdmin, [isAdmin]);
  const showPreviewPanel =
    activeView !== "propertyWizard" || showPropertyPreview;

  const initialize = useCallback(async () => {
    setLoading(true);
    const [setupRes, meRes] = await Promise.all([
      fetch("/api/auth/setup-status", { cache: "no-store" }),
      fetch("/api/auth/me", { cache: "no-store" }),
    ]);
    const setupData = (await setupRes.json()) as SetupStatus;
    const meData = (await meRes.json()) as { user: SessionUser | null };
    setSetup(setupData);
    setUser(meData.user);
    setLoading(false);
  }, []);

  const loadProperties = useCallback(async () => {
    const response = await fetch("/api/properties?all=1", {
      cache: "no-store",
    });
    const data = (await response.json()) as {
      properties?: PropertyItem[];
      error?: string;
    };
    if (!response.ok) {
      setMessage(data.error ?? "Unable to load properties.");
      return;
    }
    setProperties(data.properties ?? []);
  }, []);

  const loadUsers = useCallback(async () => {
    if (!isAdmin) return;
    const response = await fetch("/api/users", { cache: "no-store" });
    if (!response.ok) return;
    const data = (await response.json()) as { users: UserProfile[] };
    setUsers(data.users);
  }, [isAdmin]);

  const loadBanners = useCallback(async () => {
    const response = await fetch("/api/banner", { cache: "no-store" });
    const data = (await response.json()) as {
      banners?: BannerItem[];
      slideEnabled?: boolean;
      error?: string;
    };
    if (!response.ok) {
      setMessage(data.error ?? "Unable to load banners.");
      return;
    }
    const normalized = (data.banners ?? []).map((banner) => ({
      ...banner,
      showCta: banner.showCta !== false,
    }));
    setBanners(normalized);
    setBannerSlideEnabled(data.slideEnabled ?? false);
  }, []);

  useEffect(() => {
    void initialize();
  }, [initialize]);

  useEffect(() => {
    if (!user) return;
    void loadProperties();
    void loadUsers();
    if (activeView === "banner") {
      void loadBanners();
    }
  }, [activeView, loadBanners, loadProperties, loadUsers, user]);

  useEffect(() => {
    return () => {
      if (bannerPreviewUrl?.startsWith("blob:")) {
        URL.revokeObjectURL(bannerPreviewUrl);
      }
    };
  }, [bannerPreviewUrl]);

  useEffect(() => {
    return () => {
      if (coverPreviewUrl?.startsWith("blob:")) {
        URL.revokeObjectURL(coverPreviewUrl);
      }
    };
  }, [coverPreviewUrl]);

  useEffect(() => {
    return () => {
      galleryPreviewUrls.forEach((url) => {
        if (url.startsWith("blob:")) URL.revokeObjectURL(url);
      });
    };
  }, [galleryPreviewUrls]);

  useEffect(() => {
    if (!user || editingId) return;
    const saved = window.localStorage.getItem(PROPERTY_WIZARD_DRAFT_KEY);
    if (!saved) return;
    try {
      const parsed = JSON.parse(saved) as LegacyPropertyDraft;
      setPropertyForm((prev) => ({
        ...prev,
        ...parsed,
        amenities: uniqueAmenities(parsed.amenities ?? prev.amenities),
        phoneNumber: cleanPhone(
          parsed.phoneNumber ||
            parsed.whatsappNumber ||
            parsed.alternateNumber ||
            prev.phoneNumber,
        ),
        faqs:
          Array.isArray(parsed.faqs) && parsed.faqs.length > 0
            ? parsed.faqs.map((faq) => ({
                question: String(faq.question ?? ""),
                answer: String(faq.answer ?? ""),
              }))
            : prev.faqs,
      }));
      if (typeof parsed.slug === "string" && parsed.slug.trim().length > 0) {
        setSlugEditedManually(true);
      }
      setMessage("Recovered saved draft from previous session.");
    } catch {
      window.localStorage.removeItem(PROPERTY_WIZARD_DRAFT_KEY);
    }
  }, [editingId, user]);

  useEffect(() => {
    if (!user || editingId) return;
    window.localStorage.setItem(
      PROPERTY_WIZARD_DRAFT_KEY,
      JSON.stringify(propertyForm),
    );
  }, [editingId, propertyForm, user]);

  useEffect(() => {
    if (slugEditedManually) return;
    const generated = toSlug(propertyForm.propertyTitle);
    setPropertyForm((prev) =>
      prev.slug === generated ? prev : { ...prev, slug: generated },
    );
  }, [propertyForm.propertyTitle, slugEditedManually]);

  function formatByteLimit(bytes: number) {
    if (bytes >= 1024 * 1024) {
      return `${Math.round((bytes / (1024 * 1024)) * 10) / 10}MB`;
    }
    return `${Math.round(bytes / 1024)}KB`;
  }

  function ensureValidImage(
    file: File,
    label: string,
    maxBytes = MAX_IMAGE_UPLOAD_BYTES,
  ) {
    if (!file.type.startsWith("image/")) {
      throw new Error(`${label} must be an image file.`);
    }
    if (file.size > maxBytes) {
      throw new Error(
        `${label} must be ${formatByteLimit(maxBytes)} or smaller.`,
      );
    }
  }

  function propertyFieldClass(field: string) {
    return `rounded-xl border px-3 py-2 text-sm outline-none transition focus:border-[#1e4fb8] focus:ring-2 focus:ring-blue-100 ${
      propertyErrors[field]
        ? "border-red-500 bg-red-50 text-red-900 placeholder:text-red-300 focus:border-red-500 focus:ring-red-100"
        : "border-zinc-200 bg-white"
    }`;
  }

  function propertySelectClass(field: string) {
    return `rounded-lg border px-3 py-2 text-sm outline-none transition focus:border-[#1e4fb8] focus:ring-2 focus:ring-blue-100 ${
      propertyErrors[field]
        ? "border-red-500 bg-red-50 text-red-900 focus:border-red-500 focus:ring-red-100"
        : "border-zinc-300 bg-white"
    }`;
  }

  async function uploadSingleFile(file: File, folder: string) {
    const authRes = await fetch("/api/imagekit/auth", { cache: "no-store" });
    const authData = (await authRes.json()) as {
      token: string;
      expire: number;
      signature: string;
      publicKey: string;
      error?: string;
    };

    if (!authRes.ok) {
      throw new Error(authData.error ?? "ImageKit auth failed.");
    }

    const result = await upload({
      file,
      fileName: file.name,
      token: authData.token,
      expire: authData.expire,
      signature: authData.signature,
      publicKey: authData.publicKey,
      folder,
      useUniqueFileName: true,
    });

    if (!result.url) {
      throw new Error("Upload succeeded but URL was not returned by ImageKit.");
    }

    return result.url;
  }

  async function handleCoverUpload(event: ChangeEvent<HTMLInputElement>) {
    const input = event.currentTarget;
    const file = input.files?.[0];
    if (!file) return;

    setCoverPreviewUrl(URL.createObjectURL(file));
    setUploadingCover(true);
    setMessage("");
    try {
      ensureValidImage(file, "Cover image");
      const url = await uploadSingleFile(file, "/riterealty/properties/cover");
      setPropertyForm((prev) => ({ ...prev, coverImageUrl: url }));
      setCoverPreviewUrl(url);
      setMessage("Cover image uploaded.");
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Cover upload failed.",
      );
    } finally {
      input.value = "";
      setUploadingCover(false);
    }
  }

  async function handleGalleryUpload(event: ChangeEvent<HTMLInputElement>) {
    const input = event.currentTarget;
    const files = Array.from(input.files ?? []);
    if (files.length === 0) return;

    setGalleryPreviewUrls(files.map((file) => URL.createObjectURL(file)));
    setUploadingGallery(true);
    setMessage("");
    try {
      files.forEach((file) => ensureValidImage(file, "Gallery image"));
      const uploadResults = await Promise.allSettled(
        files.map((file) =>
          uploadSingleFile(file, "/riterealty/properties/gallery"),
        ),
      );
      const uploaded = uploadResults
        .filter(
          (result): result is PromiseFulfilledResult<string> =>
            result.status === "fulfilled",
        )
        .map((result) => result.value);
      const failedCount = uploadResults.length - uploaded.length;
      if (uploaded.length === 0) {
        const firstError = uploadResults.find(
          (result): result is PromiseRejectedResult =>
            result.status === "rejected",
        );
        throw firstError?.reason instanceof Error
          ? firstError.reason
          : new Error("Gallery upload failed.");
      }
      setPropertyForm((prev) => ({
        ...prev,
        galleryImageUrls: [...prev.galleryImageUrls, ...uploaded],
      }));
      setGalleryPreviewUrls([]);
      setMessage(
        failedCount > 0
          ? `${uploaded.length} gallery image(s) uploaded. ${failedCount} failed.`
          : "Gallery images uploaded.",
      );
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Gallery upload failed.",
      );
    } finally {
      input.value = "";
      setUploadingGallery(false);
    }
  }

  async function handleCoverDrop(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    setCoverDropActive(false);
    const file = event.dataTransfer.files?.[0];
    if (!file) return;
    setCoverPreviewUrl(URL.createObjectURL(file));
    setUploadingCover(true);
    setMessage("");
    try {
      ensureValidImage(file, "Cover image");
      const url = await uploadSingleFile(file, "/riterealty/properties/cover");
      setPropertyForm((prev) => ({ ...prev, coverImageUrl: url }));
      setCoverPreviewUrl(url);
      setMessage("Cover image uploaded.");
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Cover upload failed.",
      );
    } finally {
      setUploadingCover(false);
    }
  }

  async function handleGalleryDrop(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    setGalleryDropActive(false);
    const files = Array.from(event.dataTransfer.files ?? []);
    if (files.length === 0) return;
    setGalleryPreviewUrls(files.map((file) => URL.createObjectURL(file)));
    setUploadingGallery(true);
    setMessage("");
    try {
      files.forEach((file) => ensureValidImage(file, "Gallery image"));
      const uploadResults = await Promise.allSettled(
        files.map((file) =>
          uploadSingleFile(file, "/riterealty/properties/gallery"),
        ),
      );
      const uploaded = uploadResults
        .filter(
          (result): result is PromiseFulfilledResult<string> =>
            result.status === "fulfilled",
        )
        .map((result) => result.value);
      const failedCount = uploadResults.length - uploaded.length;
      if (uploaded.length === 0) {
        const firstError = uploadResults.find(
          (result): result is PromiseRejectedResult =>
            result.status === "rejected",
        );
        throw firstError?.reason instanceof Error
          ? firstError.reason
          : new Error("Gallery upload failed.");
      }
      setPropertyForm((prev) => ({
        ...prev,
        galleryImageUrls: [...prev.galleryImageUrls, ...uploaded],
      }));
      setGalleryPreviewUrls([]);
      setMessage(
        failedCount > 0
          ? `${uploaded.length} gallery image(s) uploaded. ${failedCount} failed.`
          : "Gallery images uploaded.",
      );
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Gallery upload failed.",
      );
    } finally {
      setUploadingGallery(false);
    }
  }

  async function autoFillLocationFromMap() {
    const query = mapSearch.trim();
    if (!query) {
      setMessage("Paste Google Maps URL or address first.");
      return;
    }
    setMapAutoFilling(true);
    setMessage("");

    try {
      const parsedCoordinates = parseCoordinatesFromGoogleUrl(query);
      let lat = "";
      let lng = "";
      let fullAddress = "";
      let city = "";
      let areaSector = "";

      if (parsedCoordinates) {
        lat = String(parsedCoordinates.lat);
        lng = String(parsedCoordinates.lng);
        const reverseRes = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lng)}`,
        );
        if (reverseRes.ok) {
          const reverseData = (await reverseRes.json()) as {
            display_name?: string;
            address?: Record<string, string>;
          };
          fullAddress = reverseData.display_name ?? "";
          city =
            reverseData.address?.city ??
            reverseData.address?.town ??
            reverseData.address?.village ??
            reverseData.address?.county ??
            "";
          areaSector =
            reverseData.address?.suburb ??
            reverseData.address?.neighbourhood ??
            reverseData.address?.state_district ??
            "";
        }
      } else {
        const searchRes = await fetch(
          `https://nominatim.openstreetmap.org/search?format=jsonv2&addressdetails=1&limit=1&q=${encodeURIComponent(query)}`,
        );
        if (!searchRes.ok) throw new Error("Could not resolve that location.");
        const results = (await searchRes.json()) as Array<{
          lat: string;
          lon: string;
          display_name?: string;
          address?: Record<string, string>;
        }>;
        const first = results[0];
        if (!first)
          throw new Error(
            "No location found. Try a more specific Google Maps address.",
          );
        lat = first.lat;
        lng = first.lon;
        fullAddress = first.display_name ?? "";
        city =
          first.address?.city ??
          first.address?.town ??
          first.address?.village ??
          first.address?.county ??
          "";
        areaSector =
          first.address?.suburb ??
          first.address?.neighbourhood ??
          first.address?.quarter ??
          first.address?.state_district ??
          first.address?.road ??
          "";
      }

      setPropertyForm((prev) => ({
        ...prev,
        lat: lat || prev.lat,
        lng: lng || prev.lng,
        fullAddress: fullAddress || prev.fullAddress,
        city: city || prev.city,
        areaSector: areaSector || prev.areaSector,
      }));

      setMessage("Location details auto-filled. Verify and continue.");
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Failed to auto-fill location.",
      );
    } finally {
      setMapAutoFilling(false);
    }
  }

  async function handleCurrentLocation() {
    if (!navigator.geolocation) {
      setMessage("Current location is not supported in this browser.");
      return;
    }

    setMapAutoFilling(true);
    setMessage("");
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = String(position.coords.latitude);
        const lng = String(position.coords.longitude);
        try {
          const reverseRes = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lng)}`,
          );
          const reverseData = reverseRes.ok
            ? ((await reverseRes.json()) as {
                display_name?: string;
                address?: Record<string, string>;
              })
            : {};

          const city =
            reverseData.address?.city ??
            reverseData.address?.town ??
            reverseData.address?.village ??
            reverseData.address?.county ??
            "";
          const areaSector =
            reverseData.address?.suburb ??
            reverseData.address?.neighbourhood ??
            reverseData.address?.quarter ??
            reverseData.address?.state_district ??
            reverseData.address?.road ??
            "";

          setPropertyForm((prev) => ({
            ...prev,
            lat,
            lng,
            fullAddress: reverseData.display_name || prev.fullAddress,
            city: city || prev.city,
            areaSector: areaSector || prev.areaSector,
          }));
          setMapSearch(reverseData.display_name || `${lat}, ${lng}`);
          setMessage("Current location added. Verify address and continue.");
        } catch (error) {
          setPropertyForm((prev) => ({ ...prev, lat, lng }));
          setMessage(
            error instanceof Error
              ? error.message
              : "Location added, but address lookup failed.",
          );
        } finally {
          setMapAutoFilling(false);
        }
      },
      () => {
        setMapAutoFilling(false);
        setMessage("Location permission was denied.");
      },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  }

  async function handleBannerImageUpload(event: ChangeEvent<HTMLInputElement>) {
    const input = event.currentTarget;
    const file = input.files?.[0];
    if (!file) return;

    setBannerPreviewUrl(URL.createObjectURL(file));
    await uploadBannerImageFile(file);
    input.value = "";
  }

  async function uploadBannerImageFile(file: File) {
    setUploadingBannerImage(true);
    setMessage("");
    try {
      ensureValidImage(file, "Banner image", MAX_BANNER_IMAGE_UPLOAD_BYTES);
      const url = await uploadSingleFile(file, "/riterealty/banner");
      setBannerPreviewUrl(url);
      setBannerForm((prev) => ({ ...prev, imageUrl: url }));
      setMessage("Banner image uploaded.");
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Banner upload failed.",
      );
    } finally {
      setUploadingBannerImage(false);
    }
  }

  function handleBannerUploadDragOver(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  }

  async function handleBannerUploadDrop(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (!file) return;
    setBannerPreviewUrl(URL.createObjectURL(file));
    await uploadBannerImageFile(file);
  }

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginForm),
    });
    const data = (await response.json()) as {
      user?: SessionUser;
      error?: string;
    };
    if (!response.ok || !data.user) {
      setMessage(data.error ?? "Login failed.");
      return;
    }
    setUser(data.user);
    setLoginForm({ email: "", password: "" });
    setMessage("Logged in.");
  }

  async function handleBootstrapAdmin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    const response = await fetch("/api/auth/bootstrap-admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bootstrapForm),
    });
    const data = (await response.json()) as {
      user?: SessionUser;
      error?: string;
    };
    if (!response.ok || !data.user) {
      setMessage(data.error ?? "Could not create admin.");
      return;
    }
    setUser(data.user);
    setBootstrapForm({ name: "", email: "", password: "" });
    setMessage("Admin account created.");
    await initialize();
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    setUsers([]);
    setProperties([]);
    setEditingId(null);
    setPropertyForm(initialPropertyForm);
    setCoverPreviewUrl(null);
    setGalleryPreviewUrls([]);
    setAmenityInput("");
    setMessage("Logged out.");
    await initialize();
  }

  async function handleBannerSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    const payload = {
      ...bannerForm,
      projectName: bannerForm.projectName.trim(),
      title: bannerForm.title.trim(),
      subtitle: bannerForm.subtitle.trim(),
      imageUrl: bannerForm.imageUrl.trim(),
      showCta: Boolean(bannerForm.showCta),
      ctaLabel: bannerForm.showCta ? bannerForm.ctaLabel.trim() : "",
      ctaHref: bannerForm.showCta ? bannerForm.ctaHref.trim() : "",
    };

    if (!editingBannerId && banners.length >= 6) {
      setMessage(
        "Maximum of 6 banners reached. Click Edit on an existing banner to update photos.",
      );
      return;
    }
    if (payload.title.length < 5) {
      setMessage("Banner headline must be at least 5 characters.");
      return;
    }
    if (payload.subtitle.length < 8) {
      setMessage("Sub-headline must be at least 8 characters.");
      return;
    }
    if (!payload.imageUrl) {
      setMessage(
        "Banner image is required. Upload an image or paste a valid URL.",
      );
      return;
    }
    try {
      new URL(payload.imageUrl);
    } catch {
      setMessage(
        "Banner image URL is invalid. Upload again or provide a valid URL.",
      );
      return;
    }

    const endpoint = editingBannerId
      ? `/api/banner/${editingBannerId}`
      : "/api/banner";
    const method = editingBannerId ? "PATCH" : "POST";
    const response = await fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await response.json()) as {
      error?: string;
      issues?: {
        formErrors?: string[];
        fieldErrors?: Record<string, string[]>;
      };
    };
    if (!response.ok) {
      const fieldErrors = data.issues?.fieldErrors
        ? Object.values(data.issues.fieldErrors).flat().filter(Boolean)
        : [];
      const formErrors = data.issues?.formErrors?.filter(Boolean) ?? [];
      const detailed = [...fieldErrors, ...formErrors][0];
      if (detailed) {
        setMessage(detailed);
        return;
      }
      setMessage(data.error ?? "Banner save failed.");
      return;
    }
    setMessage(editingBannerId ? "Banner updated." : "Banner added.");
    setEditingBannerId(null);
    setBannerPreviewUrl(null);
    setBannerForm(initialBannerForm);
    await loadBanners();
  }

  function handleBannerImageUrlChange(value: string) {
    setBannerPreviewUrl(null);
    setBannerForm((prev) => ({ ...prev, imageUrl: value }));
  }

  function startBannerEdit(banner: BannerItem) {
    setEditingBannerId(banner._id);
    setBannerPreviewUrl(banner.imageUrl || null);
    setBannerForm({
      projectName: banner.projectName,
      title: banner.title,
      subtitle: banner.subtitle,
      imageUrl: banner.imageUrl,
      showCta: banner.showCta !== false,
      ctaLabel: banner.ctaLabel ?? "",
      ctaHref: banner.ctaHref ?? "",
      slideEnabled: banner.slideEnabled ?? true,
    });
    setMessage("Editing banner.");
  }

  async function handleBannerDelete(id: string) {
    setMessage("");
    const response = await fetch(`/api/banner/${id}`, { method: "DELETE" });
    const data = (await response.json()) as { error?: string };
    if (!response.ok) {
      setMessage(data.error ?? "Banner delete failed.");
      return;
    }
    if (editingBannerId === id) {
      setEditingBannerId(null);
      setBannerPreviewUrl(null);
      setBannerForm(initialBannerForm);
    }
    setMessage("Banner deleted.");
    await loadBanners();
  }

  async function handleManagerCreate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    const response = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...managerForm, role: "manager" }),
    });
    const data = (await response.json()) as { error?: string };
    if (!response.ok) {
      setMessage(data.error ?? "Could not create manager.");
      return;
    }
    setManagerForm({ name: "", email: "", password: "" });
    setMessage("Manager account created.");
    await initialize();
    await loadUsers();
  }

  function getStepErrors(step: number) {
    const errors: Record<string, string> = {};
    if (step === 0) {
      if (!propertyForm.propertyTitle.trim())
        errors.propertyTitle = "Property title is required.";
      if (!propertyForm.price.trim()) errors.price = "Price is required.";
      if (Number(propertyForm.price) <= 0)
        errors.price = "Price must be greater than 0.";
      if (!propertyForm.areaSize.trim())
        errors.areaSize = "Area size is required.";
      if (!propertyForm.slug.trim()) errors.slug = "Slug is required.";
      if (!propertyForm.builderName.trim())
        errors.builderName = "Builder name is required.";
      if (!propertyForm.projectName.trim())
        errors.projectName = "Project name is required.";
      const needsPossessionDate =
        propertyForm.projectStatus === "under_construction" ||
        propertyForm.projectStatus === "under-construction";
      if (needsPossessionDate && !propertyForm.possessionDate)
        errors.possessionDate = "Possession date is required.";
      return errors;
    }
    if (step === 1) {
      if (!propertyForm.city.trim()) errors.city = "City is required.";
      if (!propertyForm.areaSector.trim())
        errors.areaSector = "Area/Sector is required.";
      if (!propertyForm.fullAddress.trim())
        errors.fullAddress = "Address is required.";
      return errors;
    }
    if (step === 2) {
      if (propertyForm.propertyType === "plot") {
        if (!propertyForm.plotArea.trim())
          errors.plotArea = "Plot area is required for plot.";
      }
      if (propertyForm.propertyType === "flat") {
        if (!propertyForm.bhk.trim()) errors.bhk = "BHK is required for flat.";
        if (!propertyForm.floorNumber.trim())
          errors.floorNumber = "Floor is required for flat.";
        if (!propertyForm.bathrooms.trim())
          errors.bathrooms = "Bathrooms are required for flat.";
      }
      return errors;
    }
    if (step === 3) {
      if (!propertyForm.coverImageUrl.trim())
        errors.coverImageUrl = "Cover image is required.";
      return errors;
    }
    if (step === 4) {
      if (!propertyForm.shortDescription.trim())
        errors.shortDescription = "Short description is required.";
      if (!propertyForm.detailedDescription.trim())
        errors.detailedDescription = "Detailed description is required.";
      if (!propertyForm.contactName.trim())
        errors.contactName = "Contact name is required.";
      const phone = cleanPhone(propertyForm.phoneNumber);
      if (!phone) errors.phoneNumber = "Contact number is required.";
      if (phone && phone.length !== 10)
        errors.phoneNumber = "Contact number must be 10 digits.";
      return errors;
    }
    if (step === 5) {
      if (!propertyForm.metaTitle.trim())
        errors.metaTitle = "Meta title is required.";
      if (!propertyForm.metaDescription.trim())
        errors.metaDescription = "Meta description is required.";
      const hasFaq = propertyForm.faqs.some(
        (faq) => faq.question.trim() && faq.answer.trim(),
      );
      if (!hasFaq) errors.faqs = "Add at least one FAQ item.";
      return errors;
    }
    return errors;
  }

  function validatePropertyStep(step: number) {
    const errors = getStepErrors(step);
    setPropertyErrors(errors);
    return Object.values(errors)[0] ?? "";
  }

  function savePropertyDraft() {
    const contactNumber = cleanPhone(propertyForm.phoneNumber);
    const draft = {
      ...propertyForm,
      amenities: uniqueAmenities(propertyForm.amenities),
      phoneNumber: contactNumber,
      recordStatus: "draft",
    };
    window.localStorage.setItem(
      PROPERTY_WIZARD_DRAFT_KEY,
      JSON.stringify(draft),
    );
    const saved = window.localStorage.getItem(PROPERTY_WIZARD_DRAFT_KEY);
    if (!saved) {
      setMessage("Draft could not be saved in this browser.");
      return;
    }
    setPropertyForm(draft);
    setPropertyErrors({});
    setMessage("Saved in draft.");
  }

  function goToNextPropertyStep() {
    const error = validatePropertyStep(propertyStep);
    if (error) {
      setMessage(error);
      return;
    }
    window.localStorage.setItem(
      PROPERTY_WIZARD_DRAFT_KEY,
      JSON.stringify(propertyForm),
    );
    setMessage("");
    setPropertyStep((prev) =>
      Math.min(prev + 1, propertyWizardSteps.length - 1),
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goToPreviousPropertyStep() {
    setMessage("");
    setPropertyErrors({});
    setPropertyStep((prev) => Math.max(prev - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handlePropertySubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    for (let step = 0; step < propertyWizardSteps.length; step += 1) {
      const error = validatePropertyStep(step);
      if (error) {
        setPropertyStep(step);
        setMessage(error);
        return;
      }
    }

    setSubmittingProperty(true);
    const contactNumber = cleanPhone(propertyForm.phoneNumber);
    const payload = {
      propertyTitle: propertyForm.propertyTitle.trim(),
      propertyType: propertyForm.propertyType,
      listingType: propertyForm.listingType,
      price: Number(propertyForm.price),
      priceUnit: propertyForm.priceUnit,
      areaSize: Number(propertyForm.areaSize),
      areaUnit: propertyForm.areaUnit,
      propertyCode: propertyForm.propertyCode.trim(),
      city: propertyForm.city.trim(),
      areaSector: propertyForm.areaSector.trim(),
      fullAddress: propertyForm.fullAddress.trim(),
      mapLocation: {
        lat: toCoordinate(propertyForm.lat, -90, 90),
        lng: toCoordinate(propertyForm.lng, -180, 180),
      },
      builderName: propertyForm.builderName.trim(),
      projectName: propertyForm.projectName.trim(),
      projectStatus: propertyForm.projectStatus,
      possessionDate: propertyForm.possessionDate || null,
      reraNumber: propertyForm.reraNumber.trim(),
      flatConfig: {
        bhk: propertyForm.bhk ? Number(propertyForm.bhk) : null,
        bathrooms: propertyForm.bathrooms
          ? Number(propertyForm.bathrooms)
          : null,
        balconies: propertyForm.balconies
          ? Number(propertyForm.balconies)
          : null,
        floorNumber: propertyForm.floorNumber
          ? Number(propertyForm.floorNumber)
          : null,
        totalFloors: propertyForm.totalFloors
          ? Number(propertyForm.totalFloors)
          : null,
      },
      plotConfig: {
        plotArea: propertyForm.plotArea ? Number(propertyForm.plotArea) : null,
        facing: propertyForm.facing || null,
        roadWidth: propertyForm.roadWidth
          ? Number(propertyForm.roadWidth)
          : null,
      },
      coverImageUrl: propertyForm.coverImageUrl.trim(),
      galleryImageUrls: propertyForm.galleryImageUrls,
      videoUrl: propertyForm.videoUrl.trim(),
      view360Url: propertyForm.view360Url.trim(),
      shortDescription: propertyForm.shortDescription.trim(),
      detailedDescription: propertyForm.detailedDescription.trim(),
      keyHighlights: parseLines(propertyForm.keyHighlightsText),
      amenities: uniqueAmenities(propertyForm.amenities),
      contactName: propertyForm.contactName.trim(),
      phoneNumber: contactNumber,
      whatsappNumber: contactNumber,
      alternateNumber: contactNumber,
      featuredProperty: propertyForm.featuredProperty,
      verifiedBadge: propertyForm.verifiedBadge,
      newLaunch: propertyForm.newLaunch,
      recordStatus: propertyForm.recordStatus,
      metaTitle: propertyForm.metaTitle.trim(),
      metaDescription: propertyForm.metaDescription.trim(),
      faqs: propertyForm.faqs
        .map((faq) => ({
          question: faq.question.trim(),
          answer: faq.answer.trim(),
        }))
        .filter((faq) => faq.question && faq.answer),
      slug: propertyForm.slug.trim() || undefined,
    };

    const endpoint = editingId
      ? `/api/properties/${editingId}`
      : "/api/properties";
    const method = editingId ? "PUT" : "POST";

    try {
      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { error?: string };
      if (!response.ok) {
        setMessage(data.error ?? "Property save failed.");
        setSubmittingProperty(false);
        return;
      }
      setMessage(editingId ? "Property updated." : "Property created.");
      setPropertyForm(initialPropertyForm);
      setPropertyStep(0);
      setSlugEditedManually(false);
      setMapSearch("");
      setShowPropertyPreview(true);
      setPropertyErrors({});
      setCoverPreviewUrl(null);
      setGalleryPreviewUrls([]);
      setAmenityInput("");
      window.localStorage.removeItem(PROPERTY_WIZARD_DRAFT_KEY);
      setEditingId(null);
      setSubmittingProperty(false);
      await loadProperties();
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Property save failed.",
      );
      setSubmittingProperty(false);
    }
  }

  function startEdit(property: PropertyItem) {
    setActiveView("propertyWizard");
    setPropertyStep(0);
    setEditingId(property._id);
    setSlugEditedManually(true);
    setShowPropertyPreview(true);
    setPropertyErrors({});
    setMapSearch(property.fullAddress ?? "");
    setCoverPreviewUrl(property.coverImageUrl);
    setGalleryPreviewUrls([]);
    setAmenityInput("");
    setPropertyForm({
      propertyTitle: property.propertyTitle,
      propertyType: normalizePropertyTypeForForm(property.propertyType),
      listingType: property.listingType,
      price: String(property.price),
      priceUnit: property.priceUnit,
      areaSize: String(property.areaSize),
      areaUnit: property.areaUnit,
      propertyCode: property.propertyCode,
      city: property.city,
      areaSector: property.areaSector,
      fullAddress: property.fullAddress,
      lat: String(property.mapLocation.lat),
      lng: String(property.mapLocation.lng),
      builderName: property.builderName,
      projectName: property.projectName,
      projectStatus: normalizeProjectStatusForForm(property.projectStatus),
      possessionDate: property.possessionDate
        ? new Date(property.possessionDate).toISOString().slice(0, 10)
        : "",
      reraNumber: property.reraNumber ?? "",
      bhk: property.flatConfig.bhk ? String(property.flatConfig.bhk) : "",
      bathrooms: property.flatConfig.bathrooms
        ? String(property.flatConfig.bathrooms)
        : "",
      balconies: property.flatConfig.balconies
        ? String(property.flatConfig.balconies)
        : "",
      floorNumber: property.flatConfig.floorNumber
        ? String(property.flatConfig.floorNumber)
        : "",
      totalFloors: property.flatConfig.totalFloors
        ? String(property.flatConfig.totalFloors)
        : "",
      plotArea: property.plotConfig.plotArea
        ? String(property.plotConfig.plotArea)
        : "",
      facing: property.plotConfig.facing ?? "",
      roadWidth: property.plotConfig.roadWidth
        ? String(property.plotConfig.roadWidth)
        : "",
      coverImageUrl: property.coverImageUrl,
      galleryImageUrls: property.galleryImageUrls ?? [],
      videoUrl: property.videoUrl ?? "",
      view360Url: property.view360Url ?? "",
      shortDescription: property.shortDescription,
      detailedDescription: property.detailedDescription,
      keyHighlightsText: property.keyHighlights.join("\n"),
      amenities: uniqueAmenities(property.amenities),
      contactName: property.contactName,
      phoneNumber: cleanPhone(
        property.phoneNumber ||
          property.whatsappNumber ||
          property.alternateNumber ||
          "",
      ),
      featuredProperty: property.featuredProperty,
      verifiedBadge: property.verifiedBadge,
      newLaunch: property.newLaunch,
      recordStatus: property.recordStatus,
      metaTitle: property.metaTitle,
      metaDescription: property.metaDescription,
      faqs:
        property.faqs && property.faqs.length > 0
          ? property.faqs
          : [{ question: "", answer: "" }],
      slug: property.slug,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function deleteProperty(id: string) {
    if (!canDeleteProperty) return;
    if (!window.confirm("Delete this property?")) return;

    const response = await fetch(`/api/properties/${id}`, { method: "DELETE" });
    const data = (await response.json()) as { error?: string };
    if (!response.ok) {
      setMessage(data.error ?? "Delete failed.");
      return;
    }
    setMessage("Property deleted.");
    await loadProperties();
  }

  function updateFaq(
    index: number,
    field: "question" | "answer",
    value: string,
  ) {
    setPropertyForm((prev) => ({
      ...prev,
      faqs: prev.faqs.map((faq, faqIndex) =>
        faqIndex === index ? { ...faq, [field]: value } : faq,
      ),
    }));
  }

  function addFaqRow() {
    setPropertyForm((prev) => ({
      ...prev,
      faqs: [...prev.faqs, { question: "", answer: "" }],
    }));
  }

  function removeFaqRow(index: number) {
    setPropertyForm((prev) => {
      if (prev.faqs.length === 1) {
        return { ...prev, faqs: [{ question: "", answer: "" }] };
      }
      return {
        ...prev,
        faqs: prev.faqs.filter((_, faqIndex) => faqIndex !== index),
      };
    });
  }

  function addAmenity(value = amenityInput) {
    const amenity = normalizeAmenity(value);
    if (!amenity) return;
    setPropertyForm((prev) => ({
      ...prev,
      amenities: uniqueAmenities([...prev.amenities, amenity]),
    }));
    setAmenityInput("");
  }

  function removeAmenity(amenity: string) {
    setPropertyForm((prev) => ({
      ...prev,
      amenities: prev.amenities.filter(
        (item) => item.toLowerCase() !== amenity.toLowerCase(),
      ),
    }));
  }

  function removeGalleryImage(index: number) {
    setPropertyForm((prev) => ({
      ...prev,
      galleryImageUrls: prev.galleryImageUrls.filter(
        (_, imageIndex) => imageIndex !== index,
      ),
    }));
  }

  function setCoverFromGallery(url: string) {
    setPropertyForm((prev) => ({ ...prev, coverImageUrl: url }));
    setCoverPreviewUrl(url);
    setMessage("Cover image set from gallery.");
  }

  if (loading) {
    return <p className="text-sm text-zinc-600">Loading CMS...</p>;
  }

  if (!user) {
    return (
      <section className="mx-auto max-w-4xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-zinc-900">
          Rite Realty CMS
        </h1>
        <p className="mt-2 text-sm text-zinc-600">
          {setup?.adminExists
            ? "Login as admin or manager."
            : "No admin found. Create the first admin account."}
        </p>
        {!setup?.adminExists ? (
          <form onSubmit={handleBootstrapAdmin} className="mt-5 grid gap-3">
            <input
              required
              value={bootstrapForm.name}
              onChange={(event) =>
                setBootstrapForm((prev) => ({
                  ...prev,
                  name: event.target.value,
                }))
              }
              placeholder="Admin Name"
              className="rounded-lg border border-zinc-300 px-3 py-2 text-sm"
            />
            <input
              required
              type="email"
              value={bootstrapForm.email}
              onChange={(event) =>
                setBootstrapForm((prev) => ({
                  ...prev,
                  email: event.target.value,
                }))
              }
              placeholder="Admin Email"
              className="rounded-lg border border-zinc-300 px-3 py-2 text-sm"
            />
            <input
              required
              type="password"
              value={bootstrapForm.password}
              onChange={(event) =>
                setBootstrapForm((prev) => ({
                  ...prev,
                  password: event.target.value,
                }))
              }
              placeholder="Password (min 8)"
              className="rounded-lg border border-zinc-300 px-3 py-2 text-sm"
            />
            <button className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white">
              Create Admin
            </button>
          </form>
        ) : (
          <form onSubmit={handleLogin} className="mt-5 grid gap-3">
            <input
              required
              type="email"
              value={loginForm.email}
              onChange={(event) =>
                setLoginForm((prev) => ({ ...prev, email: event.target.value }))
              }
              placeholder="Email"
              className="rounded-lg border border-zinc-300 px-3 py-2 text-sm"
            />
            <input
              required
              type="password"
              value={loginForm.password}
              onChange={(event) =>
                setLoginForm((prev) => ({
                  ...prev,
                  password: event.target.value,
                }))
              }
              placeholder="Password"
              className="rounded-lg border border-zinc-300 px-3 py-2 text-sm"
            />
            <button className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white">
              Login
            </button>
          </form>
        )}
        {message ? (
          <p className="mt-3 text-sm text-zinc-700">{message}</p>
        ) : null}
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#f4f7fc]">
      <div className="bg-white px-4 py-4 md:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <button
              type="button"
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 text-zinc-700 transition hover:bg-zinc-100"
              aria-label={isSidebarOpen ? "Hide menu bar" : "Show menu bar"}
            >
              {isSidebarOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-[#0d2b6b]">
                {activeView === "propertyWizard"
                  ? "Add New Property"
                  : "Rite Realty CMS"}
              </h1>
              <p className="mt-1 text-sm text-zinc-600">
                {activeView === "propertyWizard"
                  ? "Create a new property listing in just a few simple steps"
                  : `Logged in as ${user.name} (${user.role})`}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {activeView === "propertyWizard" ? (
              <>
                <button
                  type="button"
                  onClick={savePropertyDraft}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#1e4fb8] bg-white px-4 py-2 text-sm font-semibold text-[#1e4fb8]"
                >
                  <FiSave size={16} />
                  Save Draft
                </button>
                <button
                  type="button"
                  onClick={() => setShowPropertyPreview((prev) => !prev)}
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700"
                >
                  {showPropertyPreview ? (
                    <FiEyeOff size={16} />
                  ) : (
                    <FiEye size={16} />
                  )}
                  {showPropertyPreview ? "Hide Preview" : "Preview"}
                </button>
                {propertyStep < propertyWizardSteps.length - 1 ? (
                  <button
                    type="button"
                    onClick={goToNextPropertyStep}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#ef1d1d] px-5 py-2 text-sm font-semibold text-white shadow-sm"
                  >
                    <span>Next Step</span>
                    <FiArrowRight size={16} />
                  </button>
                ) : null}
              </>
            ) : null}
            <Link
              href="/blog/cms"
              className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
            >
              Blog Dashboard
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`grid gap-6 p-4 md:p-6 ${
          isSidebarOpen
            ? showPreviewPanel
              ? "lg:grid-cols-[260px_minmax(0,1fr)_360px]"
              : "lg:grid-cols-[260px_minmax(0,1fr)]"
            : showPreviewPanel
              ? "lg:grid-cols-[minmax(0,1fr)_360px]"
              : "lg:grid-cols-[minmax(0,1fr)]"
        }`}
      >
        {isSidebarOpen ? (
          <aside className="flex h-full min-h-[60vh] flex-col bg-gradient-to-b from-[#063a8b] to-[#04275e] p-4 text-white shadow-xl lg:sticky lg:top-0 lg:h-screen">
            <div className="flex items-center gap-2">
              <FiHome size={18} />
              <p className="text-lg font-bold tracking-wide">RITEREALITY</p>
            </div>
            <div className="mt-6">
              <p className="px-2 text-[11px] uppercase tracking-[0.16em] text-blue-100/80">
                Content
              </p>
            </div>
            <div className="mt-2 grid gap-2">
              <button
                type="button"
                onClick={() => setActiveView("banner")}
                className={`rounded-xl px-3 py-2 text-left text-sm font-medium transition ${
                  activeView === "banner"
                    ? "bg-[#ef1d1d] text-white shadow-md"
                    : "text-blue-50 hover:bg-white/10"
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <FiImage size={16} />
                  Banners
                </span>
              </button>
              <button
                type="button"
                onClick={() => setActiveView("propertyWizard")}
                className={`rounded-xl px-3 py-2 text-left text-sm font-medium transition ${
                  activeView === "propertyWizard"
                    ? "bg-[#ef1d1d] text-white shadow-md"
                    : "text-blue-50 hover:bg-white/10"
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <FiHome size={16} />
                  Properties
                </span>
              </button>
              <button
                type="button"
                onClick={() => setActiveView("records")}
                className={`rounded-xl px-3 py-2 text-left text-sm font-medium transition ${
                  activeView === "records"
                    ? "bg-[#ef1d1d] text-white shadow-md"
                    : "text-blue-50 hover:bg-white/10"
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <FiFileText size={16} />
                  All Properties
                </span>
              </button>
            </div>
            <div className="mt-6">
              <p className="px-2 text-[11px] uppercase tracking-[0.16em] text-blue-100/80">
                Management
              </p>
            </div>
            <div className="mt-2 grid gap-2">
              {isAdmin ? (
                <button
                  type="button"
                  onClick={() => setActiveView("managers")}
                  className={`rounded-xl px-3 py-2 text-left text-sm font-medium transition ${
                    activeView === "managers"
                      ? "bg-[#ef1d1d] text-white shadow-md"
                      : "text-blue-50 hover:bg-white/10"
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <FiUsers size={16} />
                    Managers
                  </span>
                </button>
              ) : null}
            </div>
            <div className="mt-8 rounded-xl bg-white p-3 text-sm text-zinc-900">
              <p className="font-semibold">Need help?</p>
              <p className="mt-1 text-xs text-zinc-600">
                You can save drafts and continue later.
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="mt-auto inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-3 py-2 text-left text-sm font-semibold text-white transition hover:bg-white/20"
            >
              <FiLogOut size={16} />
              Logout
            </button>
          </aside>
        ) : null}

        <div className="space-y-6">
          {activeView === "banner" ? (
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-zinc-900">
                    Add New Campaign Banner
                  </h2>
                  <p className="mt-1 text-sm text-zinc-600">
                    {editingBannerId
                      ? "Editing saved campaign banner."
                      : "Create banner content with the same wizard feel."}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-zinc-700">Status:</span>
                  <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white">
                    {editingBannerId ? "Live Editor" : "Draft"}
                  </span>
                  {editingBannerId ? (
                    <button
                      type="button"
                      onClick={() => {
                        setEditingBannerId(null);
                        setBannerPreviewUrl(null);
                        setBannerForm(initialBannerForm);
                        setMessage("Banner edit cancelled.");
                      }}
                      className="rounded-lg border border-zinc-300 px-3 py-2 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-50"
                    >
                      Cancel Edit
                    </button>
                  ) : null}
                </div>
              </div>

              <p className="mt-3 text-sm text-zinc-600">
                {banners.length} / 6 banners stored.{" "}
                {bannerSlideEnabled ? "Slider enabled." : "Slider disabled."}
              </p>

              <form onSubmit={handleBannerSubmit} className="mt-6 space-y-5">
                <div className="grid gap-5 xl:grid-cols-3">
                  <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-blue-700">
                      Campaign Details
                    </h3>
                    <div className="mt-4 space-y-3">
                      <label
                        className="block text-sm font-medium text-zinc-800"
                        htmlFor="banner-project-name"
                      >
                        Project Name
                      </label>
                      <input
                        id="banner-project-name"
                        required
                        value={bannerForm.projectName}
                        onChange={(event) =>
                          setBannerForm((prev) => ({
                            ...prev,
                            projectName: event.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm"
                        placeholder="Project name"
                      />

                      <label
                        className="block text-sm font-medium text-zinc-800"
                        htmlFor="banner-title"
                      >
                        Banner Headline
                      </label>
                      <input
                        id="banner-title"
                        required
                        value={bannerForm.title}
                        onChange={(event) =>
                          setBannerForm((prev) => ({
                            ...prev,
                            title: event.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm"
                        placeholder="Banner headline"
                      />

                      <label
                        className="block text-sm font-medium text-zinc-800"
                        htmlFor="banner-subtitle"
                      >
                        Sub-headline
                      </label>
                      <textarea
                        id="banner-subtitle"
                        required
                        value={bannerForm.subtitle}
                        onChange={(event) =>
                          setBannerForm((prev) => ({
                            ...prev,
                            subtitle: event.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm"
                        rows={4}
                        placeholder="Support text for your campaign"
                      />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-blue-700">
                      High-Res Banner Asset
                    </h3>
                    <input
                      id="banner-upload-input"
                      type="file"
                      accept="image/*"
                      onChange={handleBannerImageUpload}
                      className="sr-only"
                    />
                    <label
                      htmlFor="banner-upload-input"
                      onDragOver={handleBannerUploadDragOver}
                      onDrop={(event) => void handleBannerUploadDrop(event)}
                      className="mt-4 block rounded-2xl border-2 border-dashed border-sky-500 bg-gradient-to-br from-sky-50 via-blue-50 to-sky-100 px-4 py-12 text-center text-zinc-700"
                    >
                      <span className="block text-lg font-semibold">
                        Upload or drag & drop high-res banner asset
                      </span>
                      <span className="mt-2 inline-flex rounded-full border border-sky-300 bg-white px-3 py-1 text-xs font-semibold text-sky-700">
                        Click to choose file
                      </span>
                      <span className="mt-2 block text-sm">
                        JPEG, PNG, WEBP (Max 5MB)
                      </span>
                      {uploadingBannerImage ? (
                        <span className="mt-2 block text-xs font-semibold">
                          Uploading...
                        </span>
                      ) : null}
                    </label>

                    <p className="mt-3 text-xs text-zinc-500">
                      OR paste image URL (optional if already uploaded)
                    </p>
                    <label
                      className="mt-2 block text-sm font-medium text-zinc-800"
                      htmlFor="banner-image-url"
                    >
                      Banner Image URL
                    </label>
                    <input
                      id="banner-image-url"
                      value={bannerForm.imageUrl}
                      onChange={(event) =>
                        handleBannerImageUrlChange(event.target.value)
                      }
                      className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm"
                      placeholder="https://..."
                    />

                    {bannerPreviewUrl || bannerForm.imageUrl.trim() ? (
                      <div className="mt-4 overflow-hidden rounded-xl border border-zinc-200">
                        <Image
                          src={bannerPreviewUrl || bannerForm.imageUrl}
                          alt="Banner preview"
                          width={1200}
                          height={320}
                          unoptimized
                          className="h-40 w-full object-cover"
                        />
                      </div>
                    ) : null}
                  </div>

                  <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-blue-700">
                      Call to Action (CTA)
                    </h3>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-zinc-800">
                          Enable CTA Button
                        </span>
                        <label className="inline-flex cursor-pointer items-center">
                          <input
                            type="checkbox"
                            checked={bannerForm.showCta}
                            onChange={(event) =>
                              setBannerForm((prev) => ({
                                ...prev,
                                showCta: event.target.checked,
                              }))
                            }
                            className="peer sr-only"
                          />
                          <span className="relative h-6 w-11 rounded-full bg-zinc-300 transition peer-checked:bg-blue-600 peer-checked:after:translate-x-5 after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition" />
                        </label>
                      </div>

                      <label
                        className="block text-sm font-medium text-zinc-800"
                        htmlFor="banner-cta-label"
                      >
                        Button Label
                      </label>
                      <input
                        id="banner-cta-label"
                        required={bannerForm.showCta}
                        disabled={!bannerForm.showCta}
                        value={bannerForm.ctaLabel}
                        onChange={(event) =>
                          setBannerForm((prev) => ({
                            ...prev,
                            ctaLabel: event.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm disabled:bg-zinc-100 disabled:text-zinc-500"
                        placeholder="Download Price List"
                      />

                      <label
                        className="block text-sm font-medium text-zinc-800"
                        htmlFor="banner-cta-href"
                      >
                        Button Link
                      </label>
                      <input
                        id="banner-cta-href"
                        required={bannerForm.showCta}
                        disabled={!bannerForm.showCta}
                        value={bannerForm.ctaHref}
                        onChange={(event) =>
                          setBannerForm((prev) => ({
                            ...prev,
                            ctaHref: event.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm disabled:bg-zinc-100 disabled:text-zinc-500"
                        placeholder="/project/slug"
                      />

                      <label className="mt-3 flex items-center gap-2 text-sm text-zinc-700">
                        <input
                          type="checkbox"
                          checked={bannerForm.slideEnabled}
                          onChange={(event) =>
                            setBannerForm((prev) => ({
                              ...prev,
                              slideEnabled: event.target.checked,
                            }))
                          }
                        />
                        Enable homepage auto slider
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-end gap-3 border-t border-zinc-200 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setMessage("Draft saved locally. Publish when ready.");
                    }}
                    className="rounded-xl border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100"
                  >
                    Save as Draft
                  </button>
                  <button
                    disabled={!editingBannerId && banners.length >= 6}
                    className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:bg-zinc-400"
                  >
                    {editingBannerId ? "Update Banner" : "Publish Banner"}
                  </button>
                </div>
              </form>

              {banners.length > 0 ? (
                <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <p className="text-sm font-semibold text-zinc-900">
                    Saved Banners
                  </p>
                  <div className="mt-3 space-y-3">
                    {banners.map((banner) => (
                      <div
                        key={banner._id}
                        className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-3 md:flex-row md:items-center md:justify-between"
                      >
                        <div>
                          <p className="text-sm font-semibold text-zinc-900">
                            {banner.projectName}
                          </p>
                          <p className="text-sm text-zinc-600">
                            {banner.title}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => startBannerEdit(banner)}
                            className="rounded-lg border border-zinc-300 bg-white px-3 py-1 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-100"
                          >
                            Edit
                          </button>
                          {banner.showCta !== false ? (
                            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                              {banner.ctaLabel}
                            </span>
                          ) : (
                            <span className="rounded-full bg-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600">
                              CTA Hidden
                            </span>
                          )}
                          <button
                            type="button"
                            onClick={() => void handleBannerDelete(banner._id)}
                            className="rounded-lg border border-red-300 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700 transition hover:bg-red-100"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}

          {activeView === "managers" ? (
            isAdmin ? (
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <h2 className="text-2xl font-semibold text-[#0d2b6b]">
                  Manager Accounts
                </h2>
                <p className="mt-1 text-sm text-zinc-600">
                  Limit: 2 managers. Current: {setup?.managerCount ?? 0}
                </p>
                <form
                  onSubmit={handleManagerCreate}
                  className="mt-4 grid gap-3 md:grid-cols-3"
                >
                  <input
                    required
                    value={managerForm.name}
                    onChange={(event) =>
                      setManagerForm((prev) => ({
                        ...prev,
                        name: event.target.value,
                      }))
                    }
                    className="rounded-xl border border-zinc-200 px-3 py-2 text-sm outline-none transition focus:border-[#1e4fb8] focus:ring-2 focus:ring-blue-100"
                    placeholder="Manager name"
                  />
                  <input
                    required
                    type="email"
                    value={managerForm.email}
                    onChange={(event) =>
                      setManagerForm((prev) => ({
                        ...prev,
                        email: event.target.value,
                      }))
                    }
                    className="rounded-xl border border-zinc-200 px-3 py-2 text-sm outline-none transition focus:border-[#1e4fb8] focus:ring-2 focus:ring-blue-100"
                    placeholder="Manager email"
                  />
                  <input
                    required
                    type="password"
                    value={managerForm.password}
                    onChange={(event) =>
                      setManagerForm((prev) => ({
                        ...prev,
                        password: event.target.value,
                      }))
                    }
                    className="rounded-xl border border-zinc-200 px-3 py-2 text-sm outline-none transition focus:border-[#1e4fb8] focus:ring-2 focus:ring-blue-100"
                    placeholder="Password"
                  />
                  <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#ef1d1d] px-4 py-2 text-sm font-semibold text-white shadow-sm md:col-span-3">
                    <FiUsers size={16} />
                    Create Manager
                  </button>
                </form>
                {users.length > 0 ? (
                  <div className="mt-4 grid gap-2">
                    {users.map((profile) => (
                      <div
                        key={profile._id}
                        className="rounded-xl border border-zinc-200 bg-blue-50/40 px-3 py-2 text-sm text-zinc-800"
                      >
                        {profile.name} - {profile.email} - {profile.role}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm">
                Only admins can manage manager accounts.
              </div>
            )
          ) : null}

          {activeView === "propertyWizard" ? (
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <h2 className="text-2xl font-semibold text-[#0d2b6b]">
                {editingId ? "Edit Property" : "Basic Information"}
              </h2>
              <p className="mt-1 text-sm text-zinc-600">
                Step {propertyStep + 1} of {propertyWizardSteps.length}:{" "}
                {propertyWizardSteps[propertyStep]}
              </p>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-zinc-200">
                <div
                  className="h-full rounded-full bg-[#ef1d1d] transition-all"
                  style={{
                    width: `${((propertyStep + 1) / propertyWizardSteps.length) * 100}%`,
                  }}
                />
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-6">
                {propertyWizardSteps.map((step, index) => (
                  <button
                    key={step}
                    type="button"
                    onClick={() => setPropertyStep(index)}
                    className={`rounded-2xl border px-3 py-3 text-left text-xs transition ${
                      index === propertyStep
                        ? "border-[#ef1d1d] bg-red-50 text-[#ef1d1d]"
                        : index < propertyStep
                          ? "border-[#1e4fb8] bg-blue-50 text-[#1e4fb8]"
                          : "border-zinc-200 bg-white text-zinc-700"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
                          index === propertyStep
                            ? "bg-[#ef1d1d] text-white"
                            : index < propertyStep
                              ? "bg-[#1e4fb8] text-white"
                              : "border border-zinc-300 text-zinc-600"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-semibold">{step}</p>
                        <p className="text-[11px] text-zinc-500">
                          {propertyStepCaptions[index]}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <form
                onSubmit={handlePropertySubmit}
                className="mt-5 grid gap-4 pb-24 md:grid-cols-2"
              >
                {propertyStep === 0 ? (
                  <>
                    <div className="rounded-xl border border-zinc-200 p-4 md:col-span-2">
                      <p className="text-sm font-semibold text-zinc-900">
                        Identification
                      </p>
                      <div className="mt-3 grid gap-3 md:grid-cols-2">
                        <input
                          required
                          value={propertyForm.propertyTitle}
                          onChange={(event) =>
                            setPropertyForm((prev) => ({
                              ...prev,
                              propertyTitle: event.target.value,
                            }))
                          }
                          className={propertyFieldClass("propertyTitle")}
                          placeholder="Property Title"
                        />
                        <div>
                          <input
                            value={propertyForm.slug}
                            onChange={(event) => {
                              setSlugEditedManually(true);
                              setPropertyForm((prev) => ({
                                ...prev,
                                slug: event.target.value,
                              }));
                            }}
                            className={`${propertyFieldClass("slug")} w-full`}
                            placeholder="Slug"
                          />
                          <p className="mt-1 text-xs text-zinc-500">
                            Used in URL
                          </p>
                        </div>
                        <select
                          value={propertyForm.propertyType}
                          onChange={(event) =>
                            setPropertyForm((prev) => ({
                              ...prev,
                              propertyType: event.target.value,
                            }))
                          }
                          className="rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        >
                          {NAVBAR_CONFIG.propertyType.map((typeItem) => (
                            <option
                              key={typeItem.propertyType}
                              value={typeItem.propertyType}
                            >
                              {typeItem.label}
                            </option>
                          ))}
                        </select>
                        <select
                          value={propertyForm.listingType}
                          onChange={(event) =>
                            setPropertyForm((prev) => ({
                              ...prev,
                              listingType: event.target.value,
                            }))
                          }
                          className="rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        >
                          {LISTING_TYPES.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        <input
                          value={propertyForm.propertyCode}
                          onChange={(event) =>
                            setPropertyForm((prev) => ({
                              ...prev,
                              propertyCode: event.target.value,
                            }))
                          }
                          className="rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2"
                          placeholder="Property Code (optional)"
                        />
                      </div>
                    </div>

                    <div className="rounded-xl border border-zinc-200 p-4 md:col-span-2">
                      <p className="text-sm font-semibold text-zinc-900">
                        Pricing
                      </p>
                      <div className="mt-3 grid gap-3 md:grid-cols-2">
                        <input
                          required
                          value={propertyForm.price}
                          onChange={(event) =>
                            setPropertyForm((prev) => ({
                              ...prev,
                              price: event.target.value,
                            }))
                          }
                          className={propertyFieldClass("price")}
                          placeholder="Price"
                        />
                        <select
                          value={propertyForm.priceUnit}
                          onChange={(event) =>
                            setPropertyForm((prev) => ({
                              ...prev,
                              priceUnit: event.target.value,
                            }))
                          }
                          className="rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        >
                          {PRICE_UNITS.map((unit) => (
                            <option key={unit} value={unit}>
                              {unit}
                            </option>
                          ))}
                        </select>
                        <input
                          required
                          value={propertyForm.areaSize}
                          onChange={(event) =>
                            setPropertyForm((prev) => ({
                              ...prev,
                              areaSize: event.target.value,
                            }))
                          }
                          className={propertyFieldClass("areaSize")}
                          placeholder="Area Size"
                        />
                        <select
                          value={propertyForm.areaUnit}
                          onChange={(event) =>
                            setPropertyForm((prev) => ({
                              ...prev,
                              areaUnit: event.target.value,
                            }))
                          }
                          className="rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        >
                          {AREA_UNITS.map((unit) => (
                            <option key={unit} value={unit}>
                              {unit}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="rounded-xl border border-zinc-200 p-4 md:col-span-2">
                      <p className="text-sm font-semibold text-zinc-900">
                        Project Details
                      </p>
                      <div className="mt-3 grid gap-3 md:grid-cols-3">
                        <input
                          required
                          value={propertyForm.builderName}
                          onChange={(event) =>
                            setPropertyForm((prev) => ({
                              ...prev,
                              builderName: event.target.value,
                            }))
                          }
                          className={propertyFieldClass("builderName")}
                          placeholder="Builder / Owner Name"
                        />
                        <input
                          required
                          value={propertyForm.projectName}
                          onChange={(event) =>
                            setPropertyForm((prev) => ({
                              ...prev,
                              projectName: event.target.value,
                            }))
                          }
                          className={propertyFieldClass("projectName")}
                          placeholder="Project Name"
                        />
                        <select
                          value={propertyForm.projectStatus}
                          onChange={(event) =>
                            setPropertyForm((prev) => ({
                              ...prev,
                              projectStatus: event.target.value,
                            }))
                          }
                          className={propertySelectClass("projectStatus")}
                        >
                          {NAVBAR_CONFIG.projectStatus.map((statusItem) => (
                            <option
                              key={statusItem.projectStatus}
                              value={statusItem.projectStatus}
                            >
                              {statusItem.label}
                            </option>
                          ))}
                        </select>
                        <input
                          type="date"
                          value={propertyForm.possessionDate}
                          onChange={(event) =>
                            setPropertyForm((prev) => ({
                              ...prev,
                              possessionDate: event.target.value,
                            }))
                          }
                          className={`${propertySelectClass("possessionDate")} w-full`}
                        />
                        <input
                          value={propertyForm.reraNumber}
                          onChange={(event) =>
                            setPropertyForm((prev) => ({
                              ...prev,
                              reraNumber: event.target.value,
                            }))
                          }
                          className="rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2"
                          placeholder="RERA Number (optional)"
                        />
                      </div>
                    </div>
                  </>
                ) : null}

                {propertyStep === 1 ? (
                  <>
                    <div className="rounded-xl border border-zinc-200 p-4 md:col-span-2">
                      <p className="text-sm font-semibold text-zinc-900">
                        Google Map Picker
                      </p>
                      <div className="mt-3 flex flex-col gap-2 md:flex-row">
                        <input
                          value={mapSearch}
                          onChange={(event) => setMapSearch(event.target.value)}
                          onKeyDown={(event) => {
                            if (event.key === "Enter") {
                              event.preventDefault();
                              void autoFillLocationFromMap();
                            }
                          }}
                          className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                          placeholder="Search city, locality, sector, address, or paste Google Maps URL"
                        />
                        <button
                          type="button"
                          onClick={() => void autoFillLocationFromMap()}
                          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
                          disabled={mapAutoFilling}
                        >
                          {mapAutoFilling ? "Searching..." : "Search & Fill"}
                        </button>
                        <button
                          type="button"
                          onClick={() => void handleCurrentLocation()}
                          className="rounded-lg border border-[#1e4fb8] px-4 py-2 text-sm font-semibold text-[#1e4fb8]"
                          disabled={mapAutoFilling}
                        >
                          Use My Location
                        </button>
                      </div>
                    </div>

                    <input
                      required
                      value={propertyForm.city}
                      onChange={(event) =>
                        setPropertyForm((prev) => ({
                          ...prev,
                          city: event.target.value,
                        }))
                      }
                      className={propertyFieldClass("city")}
                      placeholder="City"
                    />
                    <input
                      required
                      value={propertyForm.areaSector}
                      onChange={(event) =>
                        setPropertyForm((prev) => ({
                          ...prev,
                          areaSector: event.target.value,
                        }))
                      }
                      className={propertyFieldClass("areaSector")}
                      placeholder="Area/Sector"
                      list="area-sector-options"
                    />
                    <datalist id="area-sector-options">
                      {NAVBAR_CONFIG.locations.map((locationItem) => (
                        <option
                          key={locationItem.href}
                          value={locationItem.areaSector}
                        />
                      ))}
                    </datalist>
                    <input
                      required
                      value={propertyForm.fullAddress}
                      onChange={(event) =>
                        setPropertyForm((prev) => ({
                          ...prev,
                          fullAddress: event.target.value,
                        }))
                      }
                      className={`${propertyFieldClass("fullAddress")} md:col-span-2`}
                      placeholder="Full Address"
                    />
                    {propertyForm.fullAddress || propertyForm.lat ? (
                      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 md:col-span-2">
                        <iframe
                          title="Property map preview"
                          src={`https://www.google.com/maps?q=${encodeURIComponent(
                            locationMapQuery(propertyForm),
                          )}&output=embed`}
                          className="h-64 w-full"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                        <p className="px-3 py-2 text-xs text-zinc-500">
                          This searched location will be saved for the property
                          map.
                        </p>
                      </div>
                    ) : null}
                  </>
                ) : null}

                {propertyStep === 2 ? (
                  <>
                    <div className="rounded-xl border border-zinc-200 p-4 md:col-span-2">
                      <p className="text-sm font-semibold text-zinc-900">
                        Property Configuration
                      </p>
                      <p className="mt-1 text-xs text-zinc-500">
                        Choose the property type and add matching details.
                      </p>
                      <div className="mt-4 grid overflow-hidden rounded-xl border border-zinc-200 md:grid-cols-2">
                        <button
                          type="button"
                          onClick={() =>
                            setPropertyForm((prev) => ({
                              ...prev,
                              propertyType: "flat",
                            }))
                          }
                          className={`px-4 py-3 text-sm font-semibold ${
                            propertyForm.propertyType === "flat"
                              ? "bg-[#1e4fb8] text-white"
                              : "bg-white text-[#0d2b6b]"
                          }`}
                        >
                          Flat / Apartment
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setPropertyForm((prev) => ({
                              ...prev,
                              propertyType: "plot",
                            }))
                          }
                          className={`border-t border-zinc-200 px-4 py-3 text-sm font-semibold md:border-l md:border-t-0 ${
                            propertyForm.propertyType !== "flat"
                              ? "bg-[#1e4fb8] text-white"
                              : "bg-white text-[#0d2b6b]"
                          }`}
                        >
                          Plot / Land
                        </button>
                      </div>
                    </div>

                    {propertyForm.propertyType === "plot" ? (
                      <>
                        <p className="text-sm font-semibold text-[#0d2b6b] md:col-span-2">
                          Plot Configuration
                        </p>
                        <input
                          value={propertyForm.plotArea}
                          onChange={(event) =>
                            setPropertyForm((prev) => ({
                              ...prev,
                              plotArea: event.target.value,
                            }))
                          }
                          className={propertyFieldClass("plotArea")}
                          placeholder="Plot Area"
                        />
                        <select
                          value={propertyForm.facing}
                          onChange={(event) =>
                            setPropertyForm((prev) => ({
                              ...prev,
                              facing: event.target.value,
                            }))
                          }
                          className="rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                        >
                          <option value="">Facing</option>
                          {FACING_OPTIONS.map((facing) => (
                            <option key={facing} value={facing}>
                              {facing}
                            </option>
                          ))}
                        </select>
                        <input
                          value={propertyForm.roadWidth}
                          onChange={(event) =>
                            setPropertyForm((prev) => ({
                              ...prev,
                              roadWidth: event.target.value,
                            }))
                          }
                          className="rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2"
                          placeholder="Road Width"
                        />
                      </>
                    ) : null}

                    {propertyForm.propertyType === "flat" ? (
                      <>
                        <p className="text-sm font-semibold text-[#0d2b6b] md:col-span-2">
                          Flat Configuration
                        </p>
                        <input
                          value={propertyForm.bhk}
                          onChange={(event) =>
                            setPropertyForm((prev) => ({
                              ...prev,
                              bhk: event.target.value,
                            }))
                          }
                          className={propertyFieldClass("bhk")}
                          placeholder="BHK"
                        />
                        <input
                          value={propertyForm.floorNumber}
                          onChange={(event) =>
                            setPropertyForm((prev) => ({
                              ...prev,
                              floorNumber: event.target.value,
                            }))
                          }
                          className={propertyFieldClass("floorNumber")}
                          placeholder="Floor"
                        />
                        <input
                          value={propertyForm.bathrooms}
                          onChange={(event) =>
                            setPropertyForm((prev) => ({
                              ...prev,
                              bathrooms: event.target.value,
                            }))
                          }
                          className={propertyFieldClass("bathrooms")}
                          placeholder="Bathrooms"
                        />
                        <input
                          value={propertyForm.balconies}
                          onChange={(event) =>
                            setPropertyForm((prev) => ({
                              ...prev,
                              balconies: event.target.value,
                            }))
                          }
                          className="rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                          placeholder="Balconies"
                        />
                        <input
                          value={propertyForm.totalFloors}
                          onChange={(event) =>
                            setPropertyForm((prev) => ({
                              ...prev,
                              totalFloors: event.target.value,
                            }))
                          }
                          className="rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                          placeholder="Total Floors"
                        />
                      </>
                    ) : null}
                  </>
                ) : null}

                {propertyStep === 3 ? (
                  <>
                    <div className="rounded-xl border border-zinc-200 p-4 md:col-span-2">
                      <p className="text-sm font-semibold text-zinc-900">
                        Cover Image
                      </p>
                      <label
                        onDragOver={(event) => {
                          event.preventDefault();
                          setCoverDropActive(true);
                        }}
                        onDragLeave={() => setCoverDropActive(false)}
                        onDrop={(event) => void handleCoverDrop(event)}
                        className={`mt-2 block rounded-xl border-2 border-dashed p-4 text-sm ${
                          coverDropActive
                            ? "border-blue-500 bg-blue-50"
                            : propertyErrors.coverImageUrl
                              ? "border-red-500 bg-red-50"
                            : "border-zinc-300 bg-zinc-50"
                        }`}
                      >
                        Drag and drop cover image or click to upload
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleCoverUpload}
                          className="mt-2 block w-full text-sm"
                        />
                        {uploadingCover ? (
                          <span className="mt-1 block text-xs">
                            Uploading...
                          </span>
                        ) : null}
                      </label>
                      <p className="mt-2 text-xs text-zinc-500">
                        {propertyErrors.coverImageUrl ||
                          "Cover image is set from uploads. You can also pick one from gallery using \"Set Cover Image\"."}
                      </p>
                      {coverPreviewUrl || propertyForm.coverImageUrl ? (
                        <div className="mt-3 overflow-hidden rounded-lg border border-zinc-200 bg-white">
                          <Image
                            src={coverPreviewUrl || propertyForm.coverImageUrl}
                            alt="Cover image preview"
                            width={640}
                            height={360}
                            unoptimized
                            className="h-44 w-full object-cover"
                          />
                        </div>
                      ) : null}
                    </div>

                    <div className="rounded-xl border border-zinc-200 p-4 md:col-span-2">
                      <p className="text-sm font-semibold text-zinc-900">
                        Gallery Images
                      </p>
                      <label
                        onDragOver={(event) => {
                          event.preventDefault();
                          setGalleryDropActive(true);
                        }}
                        onDragLeave={() => setGalleryDropActive(false)}
                        onDrop={(event) => void handleGalleryDrop(event)}
                        className={`mt-2 block rounded-xl border-2 border-dashed p-4 text-sm ${
                          galleryDropActive
                            ? "border-blue-500 bg-blue-50"
                            : "border-zinc-300 bg-zinc-50"
                        }`}
                      >
                        Drag and drop gallery images or click to upload
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handleGalleryUpload}
                          className="mt-2 block w-full text-sm"
                        />
                        {uploadingGallery ? (
                          <span className="mt-1 block text-xs">
                            Uploading...
                          </span>
                        ) : null}
                      </label>

                      {galleryPreviewUrls.length > 0 ? (
                        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                          {galleryPreviewUrls.map((url, index) => (
                            <div
                              key={url}
                              className="overflow-hidden rounded-lg border border-blue-200 bg-blue-50"
                            >
                              <Image
                                src={url}
                                alt={`Selected gallery preview ${index + 1}`}
                                width={400}
                                height={260}
                                unoptimized
                                className="h-28 w-full object-cover"
                              />
                              <p className="p-2 text-xs font-semibold text-[#1e4fb8]">
                                Previewing upload
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : null}

                      {propertyForm.galleryImageUrls.length > 0 ? (
                        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                          {propertyForm.galleryImageUrls.map((url, index) => (
                            <div
                              key={`${url}-${index}`}
                              className="overflow-hidden rounded-lg border border-zinc-200 bg-white"
                            >
                              <Image
                                src={url}
                                alt={`Gallery ${index + 1}`}
                                width={400}
                                height={260}
                                unoptimized
                                className="h-28 w-full object-cover"
                              />
                              <div className="space-y-2 p-2">
                                <button
                                  type="button"
                                  onClick={() => setCoverFromGallery(url)}
                                  className="w-full rounded-md border border-zinc-300 px-2 py-1 text-xs font-semibold text-zinc-700"
                                >
                                  Set Cover Image
                                </button>
                                <button
                                  type="button"
                                  onClick={() => removeGalleryImage(index)}
                                  className="w-full rounded-md border border-red-300 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="mt-3 text-xs text-zinc-500">
                          No gallery images uploaded yet.
                        </p>
                      )}
                    </div>

                    <input
                      value={propertyForm.videoUrl}
                      onChange={(event) =>
                        setPropertyForm((prev) => ({
                          ...prev,
                          videoUrl: event.target.value,
                        }))
                      }
                      className="rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                      placeholder="Video URL (optional)"
                    />
                    <input
                      value={propertyForm.view360Url}
                      onChange={(event) =>
                        setPropertyForm((prev) => ({
                          ...prev,
                          view360Url: event.target.value,
                        }))
                      }
                      className="rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                      placeholder="360 View URL (optional)"
                    />
                  </>
                ) : null}

                {propertyStep === 4 ? (
                  <>
                    <textarea
                      required
                      value={propertyForm.shortDescription}
                      onChange={(event) =>
                        setPropertyForm((prev) => ({
                          ...prev,
                          shortDescription: event.target.value,
                        }))
                      }
                      className={`${propertyFieldClass("shortDescription")} md:col-span-2`}
                      rows={2}
                      placeholder="Short Description"
                    />
                    <textarea
                      required
                      value={propertyForm.detailedDescription}
                      onChange={(event) =>
                        setPropertyForm((prev) => ({
                          ...prev,
                          detailedDescription: event.target.value,
                        }))
                      }
                      className={`${propertyFieldClass("detailedDescription")} md:col-span-2`}
                      rows={4}
                      placeholder="Detailed Description"
                    />
                    <textarea
                      value={propertyForm.keyHighlightsText}
                      onChange={(event) =>
                        setPropertyForm((prev) => ({
                          ...prev,
                          keyHighlightsText: event.target.value,
                        }))
                      }
                      className="rounded-lg border border-zinc-300 px-3 py-2 text-sm md:col-span-2"
                      rows={3}
                      placeholder="Highlights (one per line)"
                    />
                    <div className="rounded-lg border border-zinc-300 p-3 md:col-span-2">
                      <p className="mb-2 text-sm font-medium text-zinc-900">
                        Amenities
                      </p>
                      <div className="flex gap-2">
                        <input
                          value={amenityInput}
                          onChange={(event) =>
                            setAmenityInput(event.target.value)
                          }
                          onKeyDown={(event) => {
                            if (event.key === "Enter") {
                              event.preventDefault();
                              addAmenity();
                            }
                          }}
                          className="min-w-0 flex-1 rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                          placeholder="Add amenity, e.g. Club House"
                        />
                        <button
                          type="button"
                          onClick={() => addAmenity()}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#1e4fb8] text-white"
                          aria-label="Add amenity"
                        >
                          <FiPlus size={18} />
                        </button>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {propertyForm.amenities.map((amenity) => {
                          const Icon = amenityIconFor(amenity);
                          return (
                            <span
                              key={amenity}
                              className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm font-medium text-[#0d2b6b]"
                            >
                              <Icon size={15} />
                              {defaultAmenityLabel(amenity)}
                              <button
                                type="button"
                                onClick={() => removeAmenity(amenity)}
                                className="inline-flex h-5 w-5 items-center justify-center rounded-full text-[#0d2b6b] hover:bg-white"
                                aria-label={`Remove ${amenity}`}
                              >
                                <FiX size={14} />
                              </button>
                            </span>
                          );
                        })}
                        {propertyForm.amenities.length === 0 ? (
                          <span className="text-xs text-zinc-500">
                            Add amenities one by one.
                          </span>
                        ) : null}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {AMENITY_OPTIONS.filter(
                          (amenity) =>
                            !propertyForm.amenities.some(
                              (item) =>
                                item.toLowerCase() === amenity.toLowerCase(),
                            ),
                        ).map((amenity) => (
                          <button
                            key={amenity}
                            type="button"
                            onClick={() => addAmenity(amenity)}
                            className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600 hover:border-[#1e4fb8] hover:text-[#1e4fb8]"
                          >
                            {defaultAmenityLabel(amenity)}
                          </button>
                        ))}
                      </div>
                    </div>
                    <input
                      required
                      value={propertyForm.contactName}
                      onChange={(event) =>
                        setPropertyForm((prev) => ({
                          ...prev,
                          contactName: event.target.value,
                        }))
                      }
                      className={propertyFieldClass("contactName")}
                      placeholder="Contact Name"
                    />
                    <input
                      required
                      value={propertyForm.phoneNumber}
                      onChange={(event) => {
                        const contactNumber = cleanPhone(event.target.value);
                        setPropertyForm((prev) => ({
                          ...prev,
                          phoneNumber: contactNumber,
                        }));
                      }}
                      className={propertyFieldClass("phoneNumber")}
                      inputMode="numeric"
                      maxLength={10}
                      placeholder="Contact / WhatsApp / Phone Number (10 digit)"
                    />
                  </>
                ) : null}

                {propertyStep === 5 ? (
                  <>
                    <label className="flex items-center gap-2 text-sm text-zinc-700">
                      <input
                        type="checkbox"
                        checked={propertyForm.featuredProperty}
                        onChange={(event) =>
                          setPropertyForm((prev) => ({
                            ...prev,
                            featuredProperty: event.target.checked,
                          }))
                        }
                      />
                      Featured
                    </label>
                    <label className="flex items-center gap-2 text-sm text-zinc-700">
                      <input
                        type="checkbox"
                        checked={propertyForm.verifiedBadge}
                        onChange={(event) =>
                          setPropertyForm((prev) => ({
                            ...prev,
                            verifiedBadge: event.target.checked,
                          }))
                        }
                      />
                      Verified
                    </label>
                    <label className="flex items-center gap-2 text-sm text-zinc-700 md:col-span-2">
                      <input
                        type="checkbox"
                        checked={propertyForm.newLaunch}
                        onChange={(event) =>
                          setPropertyForm((prev) => ({
                            ...prev,
                            newLaunch: event.target.checked,
                          }))
                        }
                      />
                      New Launch
                    </label>
                    <select
                      value={propertyForm.recordStatus}
                      onChange={(event) =>
                        setPropertyForm((prev) => ({
                          ...prev,
                          recordStatus: event.target.value,
                        }))
                      }
                      className="rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                    >
                      {PROPERTY_RECORD_STATUSES.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                    <input
                      required
                      value={propertyForm.metaTitle}
                      onChange={(event) =>
                        setPropertyForm((prev) => ({
                          ...prev,
                          metaTitle: event.target.value,
                        }))
                      }
                      className={propertyFieldClass("metaTitle")}
                      placeholder="Meta Title"
                    />
                    <textarea
                      required
                      value={propertyForm.metaDescription}
                      onChange={(event) =>
                        setPropertyForm((prev) => ({
                          ...prev,
                          metaDescription: event.target.value,
                        }))
                      }
                      className={`${propertyFieldClass("metaDescription")} md:col-span-2`}
                      rows={2}
                      placeholder="Meta Description"
                    />

                    <div className="rounded-xl border border-zinc-200 p-4 md:col-span-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-zinc-900">
                          FAQs
                        </p>
                        <button
                          type="button"
                          onClick={addFaqRow}
                          className="rounded-md border border-zinc-300 px-2 py-1 text-xs font-semibold text-zinc-700"
                        >
                          Add FAQ
                        </button>
                      </div>
                      <div className="mt-3 space-y-3">
                        {propertyForm.faqs.map((faq, index) => (
                          <div
                            key={index}
                            className="grid gap-2 rounded-lg border border-zinc-200 p-3 md:grid-cols-2"
                          >
                            <input
                              value={faq.question}
                              onChange={(event) =>
                                updateFaq(index, "question", event.target.value)
                              }
                              className="rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                              placeholder="FAQ question"
                            />
                            <input
                              value={faq.answer}
                              onChange={(event) =>
                                updateFaq(index, "answer", event.target.value)
                              }
                              className="rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                              placeholder="FAQ answer"
                            />
                            <button
                              type="button"
                              onClick={() => removeFaqRow(index)}
                              className="rounded-md border border-red-300 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700 md:col-span-2"
                            >
                              Remove FAQ
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <button
                        type="button"
                        onClick={() => setShowPropertyPreview((prev) => !prev)}
                        className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700"
                      >
                        {showPropertyPreview
                          ? "Hide Preview"
                          : "Preview Property"}
                      </button>
                    </div>

                    {showPropertyPreview ? (
                      <div className="overflow-hidden rounded-xl border border-zinc-200 md:col-span-2">
                        {propertyForm.coverImageUrl ? (
                          <Image
                            src={propertyForm.coverImageUrl}
                            alt="Property cover preview"
                            width={1200}
                            height={420}
                            unoptimized
                            className="h-56 w-full object-cover"
                          />
                        ) : null}
                        <div className="space-y-2 p-4">
                          <h3 className="text-xl font-semibold text-zinc-900">
                            {propertyForm.propertyTitle || "Property title"}
                          </h3>
                          <p className="text-sm text-zinc-600">
                            {propertyForm.fullAddress || "Address preview"}
                          </p>
                          <p className="text-sm text-zinc-700">
                            {propertyForm.shortDescription ||
                              "Short description preview"}
                          </p>
                          <p className="text-sm font-semibold text-zinc-900">
                            INR {propertyForm.price || "0"} (
                            {propertyForm.priceUnit})
                          </p>
                        </div>
                      </div>
                    ) : null}
                  </>
                ) : null}

                <div className="sticky bottom-0 left-0 right-0 z-20 -mx-5 mt-2 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200 bg-white px-5 py-4 shadow-[0_-6px_20px_rgba(15,23,42,0.06)] md:col-span-2">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={goToPreviousPropertyStep}
                      disabled={propertyStep === 0}
                      className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 disabled:opacity-60"
                    >
                      Previous Step
                    </button>
                    {propertyStep < propertyWizardSteps.length - 1 ? (
                      <button
                        type="button"
                        onClick={goToNextPropertyStep}
                        className="rounded-lg bg-[#ef1d1d] px-4 py-2 text-sm font-semibold text-white"
                      >
                        Next Step
                      </button>
                    ) : (
                      <button
                        disabled={submittingProperty}
                        className="rounded-lg bg-[#ef1d1d] px-4 py-2 text-sm font-semibold text-white disabled:opacity-70"
                      >
                        {submittingProperty
                          ? "Saving..."
                          : editingId
                            ? "Update Property"
                            : "Create Property"}
                      </button>
                    )}
                  </div>
                  <div className="hidden items-center gap-2 text-sm text-zinc-600 md:flex">
                    <span>
                      Step {propertyStep + 1} of {propertyWizardSteps.length}
                    </span>
                    <div className="h-2 w-40 overflow-hidden rounded-full bg-zinc-200">
                      <div
                        className="h-full rounded-full bg-[#ef1d1d]"
                        style={{
                          width: `${((propertyStep + 1) / propertyWizardSteps.length) * 100}%`,
                        }}
                      />
                    </div>
                    <span>
                      {Math.round(
                        ((propertyStep + 1) / propertyWizardSteps.length) * 100,
                      )}
                      %
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={savePropertyDraft}
                      className="rounded-lg border border-[#1e4fb8] px-4 py-2 text-sm font-semibold text-[#1e4fb8]"
                    >
                      Save Draft
                    </button>
                    {editingId ? (
                      <button
                        type="button"
                        onClick={() => {
                          setEditingId(null);
                          setPropertyForm(initialPropertyForm);
                          setSlugEditedManually(false);
                          setShowPropertyPreview(true);
                          setPropertyErrors({});
                          setMapSearch("");
                          setPropertyStep(0);
                          setCoverPreviewUrl(null);
                          setGalleryPreviewUrls([]);
                          setAmenityInput("");
                        }}
                        className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700"
                      >
                        Cancel Edit
                      </button>
                    ) : null}
                  </div>
                </div>
              </form>
            </div>
          ) : null}

          {activeView === "records" ? (
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <h2 className="text-xl font-semibold text-zinc-900">
                Property Records
              </h2>
              <div className="mt-4 grid gap-3">
                {properties.map((property) => (
                  <article
                    key={property._id}
                    className="rounded-xl border border-zinc-200 bg-zinc-50 p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      {property.recordStatus}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-zinc-900">
                      {property.propertyTitle}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600">
                      {property.propertyType} | {property.areaSector},{" "}
                      {property.city} | INR {property.price}
                    </p>
                    <div className="mt-3 flex gap-2">
                      <button
                        onClick={() => startEdit(property)}
                        className="rounded-md border border-zinc-300 px-3 py-1 text-xs font-semibold text-zinc-700"
                      >
                        Edit
                      </button>
                      {canDeleteProperty ? (
                        <button
                          onClick={() => deleteProperty(property._id)}
                          className="rounded-md bg-red-600 px-3 py-1 text-xs font-semibold text-white"
                        >
                          Delete
                        </button>
                      ) : null}
                    </div>
                  </article>
                ))}
                {properties.length === 0 ? (
                  <p className="rounded-lg border border-zinc-200 p-4 text-sm text-zinc-700">
                    No properties found.
                  </p>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>

        {showPreviewPanel ? (
          <aside className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm lg:sticky lg:top-6 lg:h-fit">
            {activeView === "propertyWizard" ? (
              <>
                <p className="text-2xl font-semibold text-[#0d2b6b]">
                  Live Preview
                </p>
                <p className="mt-1 text-sm text-zinc-600">
                  This is how your property will appear
                </p>
                <div className="mt-4 overflow-hidden rounded-xl border border-zinc-200 bg-white">
                  <div className="relative h-52 w-full bg-zinc-100">
                    {coverPreviewUrl || propertyForm.coverImageUrl ? (
                      <Image
                        src={coverPreviewUrl || propertyForm.coverImageUrl}
                        alt="Property preview cover"
                        width={640}
                        height={360}
                        unoptimized
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-zinc-500">
                        Upload a cover image
                      </div>
                    )}
                    <span className="absolute left-3 top-3 rounded-md bg-[#ef1d1d] px-2 py-1 text-xs font-semibold text-white">
                      {propertyForm.listingType.toUpperCase()}
                    </span>
                  </div>
                  <div className="space-y-3 p-4">
                    <h3 className="text-2xl font-semibold text-[#0d2b6b]">
                      {propertyForm.propertyTitle || "Property title preview"}
                    </h3>
                    <p className="text-sm text-zinc-600">
                      {propertyForm.areaSector || "Sector"} ,{" "}
                      {propertyForm.city || "Kurukshetra"}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-md border border-blue-200 bg-blue-50 px-2 py-1 text-xs font-semibold text-[#1e4fb8]">
                        {propertyForm.projectStatus.replace(/[-_]/g, " ")}
                      </span>
                      {propertyForm.verifiedBadge ? (
                        <span className="rounded-md border border-green-200 bg-green-50 px-2 py-1 text-xs font-semibold text-green-700">
                          Verified
                        </span>
                      ) : null}
                      {propertyForm.featuredProperty ? (
                        <span className="rounded-md border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-[#ef1d1d]">
                          Featured
                        </span>
                      ) : null}
                    </div>
                    <p className="text-3xl font-bold text-[#ef1d1d]">
                      INR {propertyForm.price || "0"}
                    </p>
                    <p className="text-sm text-zinc-700">
                      {propertyForm.shortDescription ||
                        "Short description preview"}
                    </p>
                    <div>
                      <p className="text-sm font-semibold text-[#0d2b6b]">
                        Highlights
                      </p>
                      <ul className="mt-2 space-y-1 text-sm text-zinc-700">
                        {propertyForm.keyHighlightsText
                          .split("\n")
                          .map((item) => item.trim())
                          .filter((item) => item.length > 0)
                          .slice(0, 4)
                          .map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        {propertyForm.keyHighlightsText.trim().length === 0 ? (
                          <li>- Add highlights in Content step</li>
                        ) : null}
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="mt-4 rounded-lg border border-rose-200 bg-rose-50 p-3 text-xs text-rose-700">
                  Note: Preview is for reference only. Actual appearance may
                  vary slightly.
                </p>
              </>
            ) : (
              <>
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Details
                </p>
                <div className="mt-3 space-y-3 text-sm text-zinc-700">
                  <p>
                    Active: <span className="font-semibold">{activeView}</span>
                  </p>
                  <p>
                    Total properties:{" "}
                    <span className="font-semibold">{properties.length}</span>
                  </p>
                  <p>
                    Managers:{" "}
                    <span className="font-semibold">
                      {setup?.managerCount ?? 0}
                    </span>
                  </p>
                  <p className="rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-xs text-zinc-600">
                  Upload limits: Banner/property images must be 5MB or
                    smaller.
                  </p>
                </div>
              </>
            )}
          </aside>
        ) : null}
      </div>
    </section>
  );
}
