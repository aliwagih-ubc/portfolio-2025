"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";
import { ProjectMedia } from "@/components/project-media";
import { cn } from "@/lib/utils";

interface FeaturedProjectTeaserProps {
  project: Project;
  index: number;
}

export function FeaturedProjectTeaser({
  project,
  index,
}: FeaturedProjectTeaserProps) {
  const isRedacted = project.redacted;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative"
    >
      <Link
        href={`/projects#${project.slug}`}
        className={cn(
          "block p-6 md:p-8 rounded-xl transition-all duration-300",
          "bg-card/50 border border-border/50",
          "hover:bg-card hover:border-border hover:glow-cyan-subtle"
        )}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          {/* Status badge */}
          <div className="flex items-center gap-3 md:w-40 shrink-0">
            <span
              className={cn(
                "text-xs font-medium px-2.5 py-1 rounded-full border",
                project.status === "In progress" &&
                  "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
                project.status === "Prototype" &&
                  "bg-amber-500/10 text-amber-400 border-amber-500/30",
                project.status === "Concept" &&
                  "bg-violet-500/10 text-violet-400 border-violet-500/30",
                project.status === "Shipped" &&
                  "bg-green-500/10 text-green-400 border-green-500/30"
              )}
            >
              {project.status}
            </span>
            </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
              {project.displayTitle}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-2">
              {project.oneLiner}
            </p>
          </div>

          {/* Thumbnail (desktop) */}
          <div className="hidden md:block shrink-0">
            <ProjectMedia
              media={project.media}
              className="w-20 h-14 rounded-lg"
              sizes="80px"
            />
          </div>

          {/* Arrow */}
          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
        </div>
      </Link>
    </motion.div>
  );
}
