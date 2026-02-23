export interface LocalizedText {
  uz: string;
  ru: string;
}

export interface Seo {
  metaTitle: string;
  metaDescription: string;
}

export interface LocalizedProjectContent {
  excerpt: string;
  challenge: string;
  solution: string;
  results: string;
  seo: Seo;
}

export interface LocalizedContent {
  uz: LocalizedProjectContent;
  ru: LocalizedProjectContent;
}

export interface Location {
  country: string;
  city: string;
}

export interface Facts {
  year: number;
  areaM2: number;
  location: Location;
  budget: number;
}

export interface Design {
  style: string[];
  palette: string[];
  materials: string[];
  keyFeatures: string[];
}

export interface CoverImage {
  id: number;
  projectId: number;
  image_light: string;
  image_dark: string;
  imageLightPublicId: string;
  imageDarkPublicId: string;
  image_alt: LocalizedText;
}

export interface GalleryItem {
  id: number;
  projectId: number;
  image: string;
  imagePublicId: string;
  image_alt: LocalizedText | string;
}

export interface Category {
  id: number;
  title: string;
}

export interface ProjectDTO {
  id: number;
  title: string;
  categoryId: number;
  slug: string;
  status: "completed" | "in_progress" | "pending";
  localizedContent: LocalizedContent;
  facts: Facts;
  design: Design;
  coverImage: CoverImage;
  gallery: GalleryItem[];
  category: Category;
}
