export type ContentType = "article" | "video";

export interface ContentItem {
  id: string;
  type: ContentType;
  title: string;
  description: string;
  link: string;
  thumbnail?: string;
  publishedAt: string;
  isArabic?: boolean;
  tags?: string[];
}

export const articles: ContentItem[] = [];

export const videos: ContentItem[] = [];

export const allContent: ContentItem[] = [...articles, ...videos];
