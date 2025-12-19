import Link from "next/link";
import { Project } from "@/data/projects";
import { TagPill } from "@/components/tag-pill";
import { ArrowUpRight, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const isRedacted = project.redacted;

    return (
        <div className="group relative flex flex-col justify-between rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-border/80">
            <div>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <span className={cn(
                            "text-xs font-semibold px-2 py-0.5 rounded-full border",
                            project.status === "In progress" && "bg-blue-50 text-blue-700 border-blue-200",
                            project.status === "Prototype" && "bg-amber-50 text-amber-700 border-amber-200",
                            project.status === "Concept" && "bg-purple-50 text-purple-700 border-purple-200",
                        )}>
                            {project.status}
                        </span>
                        {isRedacted && (
                            <span className="flex items-center gap-1 text-[10px] uppercase font-bold text-muted-foreground tracking-wider border border-border px-1.5 py-0.5 rounded">
                                <Lock className="h-2.5 w-2.5" /> Confidential
                            </span>
                        )}
                    </div>
                    <TagPill>{project.category}</TagPill>
                </div>

                <h3 className="text-xl font-bold tracking-tight mb-2 group-hover:text-accent transition-colors">
                    <Link href={project.link || "/projects"} className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {project.displayTitle}
                    </Link>
                </h3>

                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {project.oneLiner}
                </p>
            </div>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/40">
                <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 3 && (
                        <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                            +{project.tags.length - 3}
                        </span>
                    )}
                </div>

                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
        </div>
    );
}
