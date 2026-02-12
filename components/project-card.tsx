import Link from "next/link";
import { Project } from "@/data/projects";
import { TagPill } from "@/components/tag-pill";
import { ProjectMedia } from "@/components/project-media";
import { ArrowUpRight, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isRedacted = project.redacted;

  return (
    <div className="group relative flex flex-col justify-between rounded-xl border border-border/50 bg-card/50 overflow-hidden transition-all hover:bg-card hover:border-border hover:glow-cyan-subtle">
      <ProjectMedia
        media={project.media}
        className="aspect-video"
      />
      <div className="p-6">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "text-xs font-semibold px-2.5 py-1 rounded-full border",
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
            {isRedacted && (
              <span className="flex items-center gap-1 text-[10px] uppercase font-bold text-muted-foreground tracking-wider border border-border px-1.5 py-0.5 rounded">
                <Lock className="h-2.5 w-2.5" /> Confidential
              </span>
            )}
          </div>
          <TagPill>{project.category}</TagPill>
        </div>

        <h3 className="text-xl font-bold tracking-tight mb-2 text-foreground group-hover:text-accent transition-colors">
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
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs text-muted-foreground bg-muted/30 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs text-muted-foreground bg-muted/30 px-2 py-1 rounded">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </div>
      </div>
    </div>
  );
}
