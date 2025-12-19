"use client";

import { useState } from "react";
import { Project, ProjectCategory } from "@/data/projects";
import { ProjectGrid } from "@/components/project-grid";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectsViewProps {
    projects: Project[];
    allTags: string[];
}

export function ProjectsView({ projects, allTags }: ProjectsViewProps) {
    const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
    const [searchQuery, setSearchQuery] = useState("");

    const categories: ProjectCategory[] = ["All", "AI & Automation", "Dashboards", "Product"];

    const filteredProjects = projects.filter((project) => {
        const matchesCategory = activeCategory === "All" || project.category === activeCategory;
        const searchLower = searchQuery.toLowerCase();
        const matchesSearch =
            project.title.toLowerCase().includes(searchLower) ||
            project.displayTitle.toLowerCase().includes(searchLower) ||
            project.oneLiner.toLowerCase().includes(searchLower) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchLower));

        return matchesCategory && matchesSearch;
    });

    return (
        <div className="space-y-10">
            {/* Controls */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-border/50 pb-8">

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-colors border",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground border-primary"
                                    : "bg-background text-muted-foreground border-border hover:bg-muted hover:text-foreground"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Search */}
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full h-10 pl-10 pr-4 rounded-md border border-border bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                </div>
            </div>

            {/* Grid */}
            {filteredProjects.length > 0 ? (
                <ProjectGrid projects={filteredProjects} />
            ) : (
                <div className="py-20 text-center text-muted-foreground border border-dashed border-border rounded-lg bg-muted/20">
                    <p>No projects found matching your criteria.</p>
                    <button
                        onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                        className="mt-4 text-sm text-accent hover:underline"
                    >
                        Clear filters
                    </button>
                </div>
            )}
        </div>
    );
}
