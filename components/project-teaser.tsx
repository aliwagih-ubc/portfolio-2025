"use client";

import { motion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";
import { ProjectMedia } from "@/components/project-media";
import { cn } from "@/lib/utils";

interface ProjectTeaserProps {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

export function ProjectTeaser({
  project,
  isExpanded,
  onToggle,
  index,
}: ProjectTeaserProps) {
  const isRedacted = project.redacted;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      {/* Teaser Row */}
      <button
        onClick={onToggle}
        className={cn(
          "w-full text-left p-6 md:p-8 rounded-xl transition-all duration-300",
          "bg-card/50 border border-border/50 hover:bg-card hover:border-border",
          isExpanded && "bg-card border-border border-b-0 rounded-b-none"
        )}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          {/* Thumbnail */}
          <div className="hidden md:block shrink-0">
            <ProjectMedia
              media={project.media}
              className="w-16 h-16 rounded-lg"
              sizes="64px"
            />
          </div>

          {/* Status & Category */}
          <div className="flex items-center gap-3 md:w-48 shrink-0">
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

          {/* Title & One-liner */}
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
              {project.displayTitle}
            </h3>
            <p className="text-muted-foreground text-sm md:text-base line-clamp-2">
              {project.oneLiner}
            </p>
          </div>

          {/* Expand Icon */}
          <div className="flex items-center shrink-0">
            <ChevronDown
              className={cn(
                "h-5 w-5 text-muted-foreground transition-transform duration-300",
                isExpanded && "rotate-180"
              )}
            />
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <div className="p-6 md:p-8 pt-0 bg-card border border-t-0 border-border rounded-b-xl">
          {/* Expanded Media */}
          <ProjectMedia
            media={project.media}
            className="aspect-video rounded-lg mb-6"
          />

          <div className="pt-6 border-t border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Problem */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  Problem
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.problem || "Addressing friction in workflows through automation and better data access."}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  Solution
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.solution || "Building a focused product that streamlines operations and surfaces insights."}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-foreground/80 bg-muted/50 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Result / Link */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  Status
                </h4>
                {project.link && !isRedacted ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors"
                  >
                    View Project
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    {project.result || "In active development"}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
