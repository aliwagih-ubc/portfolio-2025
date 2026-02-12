"use client";

import Image from "next/image";
import { Layers } from "lucide-react";
import { ProjectMedia as ProjectMediaType } from "@/data/projects";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

// Lazy-load diagram components — keeps initial bundle small
const OpsPlatformDiagram = dynamic(
  () => import("@/components/diagrams/ops-platform").then((m) => m.OpsPlatformDiagram),
  { ssr: false }
);
const ArabicPipelineDiagram = dynamic(
  () => import("@/components/diagrams/arabic-pipeline").then((m) => m.ArabicPipelineDiagram),
  { ssr: false }
);
const GoHelpMeDiagram = dynamic(
  () => import("@/components/diagrams/gohelpme").then((m) => m.GoHelpMeDiagram),
  { ssr: false }
);

const diagramMap = {
  "ops-platform": OpsPlatformDiagram,
  "arabic-pipeline": ArabicPipelineDiagram,
  gohelpme: GoHelpMeDiagram,
} as const;

interface ProjectMediaProps {
  media: ProjectMediaType;
  className?: string;
  sizes?: string;
}

export function ProjectMedia({ media, className, sizes }: ProjectMediaProps) {
  const base = "w-full overflow-hidden bg-muted/20";

  if (media.type === "diagram") {
    const Diagram = diagramMap[media.id];
    return (
      <div className={cn(base, className)}>
        <Diagram />
      </div>
    );
  }

  if (media.type === "image") {
    return (
      <div className={cn(base, "relative group/img", className)}>
        <Image
          src={media.src}
          alt={media.alt}
          width={800}
          height={450}
          sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
          className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-[1.02] animate-float"
        />
        {/* shimmer sweep on hover */}
        <div className="absolute inset-0 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/img:translate-x-full duration-700 pointer-events-none" />
      </div>
    );
  }

  if (media.type === "video") {
    return (
      <div className={cn(base, className)}>
        <video
          src={media.src}
          poster={media.poster}
          muted
          loop
          playsInline
          autoPlay
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  // placeholder
  return (
    <div
      className={cn(
        base,
        "flex items-center justify-center bg-gradient-to-br from-muted/30 to-muted/5 border-b border-border/20",
        className
      )}
    >
      <Layers className="h-8 w-8 text-muted-foreground/25" />
    </div>
  );
}
