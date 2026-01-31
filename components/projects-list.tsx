"use client";

import { useState } from "react";
import { Project, ProjectCategory } from "@/data/projects";
import { ProjectTeaser } from "@/components/project-teaser";
import { cn } from "@/lib/utils";

interface ProjectsListProps {
  projects: Project[];
}

const categories: ProjectCategory[] = [
  "All",
  "AI & Automation",
  "Dashboards",
  "Product",
];

export function ProjectsList({ projects }: ProjectsListProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "All" || project.category === activeCategory
  );

  const handleToggle = (slug: string) => {
    setExpandedSlug(expandedSlug === slug ? null : slug);
  };

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setExpandedSlug(null);
            }}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all border",
              activeCategory === category
                ? "bg-accent text-accent-foreground border-accent"
                : "bg-card/50 text-muted-foreground border-border hover:bg-card hover:text-foreground hover:border-border/80"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {filteredProjects.map((project, index) => (
          <ProjectTeaser
            key={project.slug}
            project={project}
            isExpanded={expandedSlug === project.slug}
            onToggle={() => handleToggle(project.slug)}
            index={index}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-20 text-center text-muted-foreground border border-dashed border-border rounded-xl bg-card/30">
          <p>No projects found in this category.</p>
          <button
            onClick={() => setActiveCategory("All")}
            className="mt-4 text-sm text-accent hover:text-accent-hover transition-colors"
          >
            View all projects
          </button>
        </div>
      )}
    </div>
  );
}
