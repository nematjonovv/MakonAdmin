export interface TestimonialDto {
  id: number;
  name:string
  photoUrl: string;
  videoUrl: string;
  localizedContent: LocalizedContent;
  altImage: {
    image: altContent;
    video: altContent;
  };
  photoPublicId: string;
  videoPublicId: string;
}

interface LocalizedContent {
  uz: Content;
  ru: Content;
}

interface Content {
  position: string;
  content: string;
}

interface altContent {
  uz: string;
  ru: string;
}
