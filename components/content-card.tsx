"use client";

import { motion } from "framer-motion";
import { ExternalLink, Play, FileText } from "lucide-react";
import { ContentItem } from "@/data/content";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  item: ContentItem;
  index: number;
}

export function ContentCard({ item, index }: ContentCardProps) {
  const isVideo = item.type === "video";
  const isArabic = item.isArabic;

  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group block"
    >
      <div
        className={cn(
          "h-full p-6 rounded-xl transition-all duration-300",
          "bg-card/50 border border-border/50",
          "hover:bg-card hover:border-border hover:glow-cyan-subtle"
        )}
      >
        {/* Icon & Type Badge */}
        <div className="flex items-center justify-between mb-4">
          <div
            className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center",
              isVideo ? "bg-red-500/10" : "bg-accent/10"
            )}
          >
            {isVideo ? (
              <Play className="h-5 w-5 text-red-400" />
            ) : (
              <FileText className="h-5 w-5 text-accent" />
            )}
          </div>
          {isArabic && (
            <span className="text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded">
              عربي
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className={cn(
            "font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2",
            isArabic && "font-arabic text-right"
          )}
          dir={isArabic ? "rtl" : "ltr"}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          className={cn(
            "text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2",
            isArabic && "font-arabic text-right"
          )}
          dir={isArabic ? "rtl" : "ltr"}
        >
          {item.description}
        </p>

        {/* Tags & Date */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/30">
          <div className="flex flex-wrap gap-1.5">
            {item.tags?.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs text-muted-foreground bg-muted/30 px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{item.publishedAt}</span>
            <ExternalLink className="h-3.5 w-3.5 group-hover:text-accent transition-colors" />
          </div>
        </div>
      </div>
    </motion.a>
  );
}
