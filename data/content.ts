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

export const articles: ContentItem[] = [
  {
    id: "ai-construction-reality",
    type: "article",
    title: "Why AI in Construction Needs Field-Tested Builders",
    description:
      "Most construction tech fails because it's built by people who've never worn a hard hat. Here's what I learned from both sides.",
    link: "https://medium.com/@aliwagih",
    publishedAt: "2024-12",
    tags: ["AI", "Construction", "Product"],
  },
  {
    id: "rag-engineering-docs",
    type: "article",
    title: "Building RAG Systems for Engineering Documentation",
    description:
      "A practical guide to retrieval-augmented generation for technical specifications and construction documents.",
    link: "https://medium.com/@aliwagih",
    publishedAt: "2024-11",
    tags: ["AI", "RAG", "Engineering"],
  },
  {
    id: "pm-to-dev-transition",
    type: "article",
    title: "From Project Manager to Developer: What Transfers",
    description:
      "The unexpected skills from managing marine infrastructure that made me a better software engineer.",
    link: "https://medium.com/@aliwagih",
    publishedAt: "2024-10",
    tags: ["Career", "Engineering", "Software"],
  },
];

export const videos: ContentItem[] = [
  {
    id: "ai-intro-arabic",
    type: "video",
    title: "مقدمة في الذكاء الاصطناعي للمهندسين",
    description: "شرح مبسط لكيفية استخدام الذكاء الاصطناعي في مجال الهندسة والبناء",
    link: "https://youtube.com/@aliwagih",
    publishedAt: "2024-12",
    isArabic: true,
    tags: ["AI", "Arabic"],
  },
  {
    id: "chatgpt-engineering-arabic",
    type: "video",
    title: "استخدام ChatGPT في المشاريع الهندسية",
    description: "كيف يمكن للمهندسين الاستفادة من ChatGPT في عملهم اليومي",
    link: "https://youtube.com/@aliwagih",
    publishedAt: "2024-11",
    isArabic: true,
    tags: ["ChatGPT", "Arabic"],
  },
  {
    id: "prompt-engineering-arabic",
    type: "video",
    title: "فن كتابة الـ Prompts",
    description: "دليل عملي لكتابة prompts فعالة للحصول على أفضل النتائج من AI",
    link: "https://youtube.com/@aliwagih",
    publishedAt: "2024-10",
    isArabic: true,
    tags: ["AI", "Arabic", "Tutorial"],
  },
];

export const allContent: ContentItem[] = [...articles, ...videos];
