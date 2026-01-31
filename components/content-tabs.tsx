"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Video } from "lucide-react";
import { ContentItem } from "@/data/content";
import { ContentCard } from "@/components/content-card";
import { cn } from "@/lib/utils";

interface ContentTabsProps {
  articles: ContentItem[];
  videos: ContentItem[];
}

type TabType = "articles" | "videos";

const tabs = [
  { id: "articles" as TabType, label: "Articles", icon: FileText },
  { id: "videos" as TabType, label: "Videos", icon: Video },
];

export function ContentTabs({ articles, videos }: ContentTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>("articles");

  const content = activeTab === "articles" ? articles : videos;

  return (
    <div className="space-y-8">
      {/* Tab Navigation */}
      <div className="flex gap-2 p-1 bg-card/50 rounded-lg border border-border/50 w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all",
              activeTab === tab.id
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            )}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
            <span
              className={cn(
                "ml-1 px-1.5 py-0.5 rounded text-xs",
                activeTab === tab.id
                  ? "bg-accent-foreground/20 text-accent-foreground"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {tab.id === "articles" ? articles.length : videos.length}
            </span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {content.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.map((item, index) => (
                <ContentCard key={item.id} item={item} index={index} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-muted-foreground border border-dashed border-border rounded-xl bg-card/30">
              <p>No {activeTab} available yet.</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
