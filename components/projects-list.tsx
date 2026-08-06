"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, Lock } from "lucide-react";
import { Project, ProjectCategory } from "@/data/projects";
import { ProjectMedia } from "@/components/project-media";
import { FileChip } from "@/components/canvas/canvas";
import { TerminalMock } from "@/components/featured-panels";
import { cn } from "@/lib/utils";

interface ProjectsListProps {
  projects: Project[];
}

const categories: ProjectCategory[] = [
  "All",
  "AI & Automation",
  "Dashboards & Apps",
  "Product",
  "Case Study",
];

const STATUS_TONES: Record<Project["status"], string> = {
  Shipped: "bg-green text-ink",
  "In progress": "bg-cyan text-ink",
  Prototype: "bg-yellow text-ink",
  Concept: "bg-muted text-ink",
};

function ProjectCard({
  project,
  isExpanded,
  onToggle,
}: {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div>
      {/* Folder tab */}
      <div className="panel-tab inline-flex items-center gap-3 bg-muted font-mono uppercase text-xs md:text-sm px-4 pr-12 py-2.5 text-ink">
        <span className={cn("px-2 py-0.5", STATUS_TONES[project.status])}>
          ● {project.status}
        </span>
        {project.category}
        {project.redacted && (
          <span className="inline-flex items-center gap-1 text-pink">
            <Lock className="size-3.5" /> NDA
          </span>
        )}
      </div>

      {/* Body */}
      <div className="bg-white border border-ink/10 shadow-[0_8px_28px_rgba(17,18,18,0.08)]">
        <div className="relative">
          <FileChip label="image.jpg" className="absolute top-3 right-3 z-10" />
          {project.media.type === "placeholder" ? (
            <TerminalMock />
          ) : (
            <ProjectMedia media={project.media} className="aspect-[16/9]" />
          )}
        </div>
        <div className="p-6 md:p-7">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
            {project.displayTitle}
          </h3>
          <p className="mt-3 text-ink/75 leading-relaxed">{project.oneLiner}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="folder-chip bg-muted font-mono uppercase text-xs px-3 py-1.5 text-ink"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-5">
            {(project.problem || project.solution || project.result) && (
              <button
                onClick={onToggle}
                className="inline-flex items-center gap-2 font-mono uppercase text-sm text-ink border-b-2 border-ink pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors"
                aria-expanded={isExpanded}
              >
                Case file
                <ChevronDown
                  className={cn("size-4 transition-transform", isExpanded && "rotate-180")}
                />
              </button>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono uppercase text-sm text-ink border-b-2 border-cyan pb-1 hover:bg-cyan-pastel transition-colors"
              >
                Visit live <ArrowUpRight className="size-4" />
              </a>
            )}
          </div>

          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.21, 0.6, 0.35, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-6 grid gap-4">
                  {project.problem && (
                    <div className="bg-cyan-pastel px-5 py-4">
                      <p className="font-mono uppercase text-xs text-ink/60 mb-1.5">Problem</p>
                      <p className="text-sm text-ink/85 leading-relaxed">{project.problem}</p>
                    </div>
                  )}
                  {project.solution && (
                    <div className="bg-yellow-pastel px-5 py-4">
                      <p className="font-mono uppercase text-xs text-ink/60 mb-1.5">Solution</p>
                      <p className="text-sm text-ink/85 leading-relaxed">{project.solution}</p>
                    </div>
                  )}
                  {project.result && (
                    <div className="bg-green-pastel px-5 py-4">
                      <p className="font-mono uppercase text-xs text-ink/60 mb-1.5">Result</p>
                      <p className="text-sm text-ink/85 leading-relaxed">{project.result}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export function ProjectsList({ projects }: ProjectsListProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // On mount: read hash, auto-expand + scroll to the matching project
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const match = projects.find((p) => p.slug === hash);
    if (!match) return;

    const timer = setTimeout(() => {
      setActiveCategory("All");
      setExpandedSlug(hash);
      itemRefs.current[hash]?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
    return () => clearTimeout(timer);
  }, [projects]);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="space-y-10">
      {/* Category filter */}
      <div className="flex flex-wrap gap-2.5">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setExpandedSlug(null);
            }}
            className={cn(
              "folder-chip px-4 py-2 pr-8 font-mono uppercase text-sm transition-colors",
              activeCategory === category
                ? "bg-ink text-white"
                : "bg-muted text-ink hover:bg-yellow-pastel"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-12 items-start">
        {filteredProjects.map((project) => (
          <div
            key={project.slug}
            id={project.slug}
            className="scroll-mt-28"
            ref={(el) => {
              itemRefs.current[project.slug] = el;
            }}
          >
            <ProjectCard
              project={project}
              isExpanded={expandedSlug === project.slug}
              onToggle={() =>
                setExpandedSlug(expandedSlug === project.slug ? null : project.slug)
              }
            />
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-20 text-center text-muted-foreground border-2 border-dashed border-ink/20 bg-white">
          <p className="font-mono uppercase text-sm">Nothing in this drawer.</p>
          <button
            onClick={() => setActiveCategory("All")}
            className="mt-4 font-mono uppercase text-sm text-ink border-b-2 border-ink pb-0.5"
          >
            View all projects
          </button>
        </div>
      )}
    </div>
  );
}
