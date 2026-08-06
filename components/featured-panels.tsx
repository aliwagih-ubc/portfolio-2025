import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectMedia } from "@/components/project-media";
import { SelectionFrame, FileChip } from "@/components/canvas/canvas";
import { cn } from "@/lib/utils";

const PANEL_TONES = [
  { bg: "bg-cyan", text: "text-ink", sub: "text-ink/70", chip: "bg-white/70", accent: "bg-cyan" },
  { bg: "bg-ink", text: "text-white", sub: "text-white/70", chip: "bg-white/10 text-white", accent: "bg-pink" },
  { bg: "bg-yellow", text: "text-ink", sub: "text-ink/70", chip: "bg-white/70", accent: "bg-yellow" },
  { bg: "bg-pink", text: "text-white", sub: "text-white/70", chip: "bg-white/15 text-white", accent: "bg-pink" },
];

/* Terminal mock for projects without a cover image */
export function TerminalMock() {
  return (
    <div className="bg-ink text-left p-5 font-mono text-sm leading-7 aspect-[16/9] overflow-hidden">
      <p className="text-white/50">$ superintendent start</p>
      <p className="text-green">✓ daemon online — watching Linear</p>
      <p className="text-white/80">→ refining ticket ALI-42: “make it faster”</p>
      <p className="text-cyan">? asking: faster where — queries or builds?</p>
      <p className="text-white/80">→ dispatching to claude-code…</p>
      <p className="text-yellow">⚡ PR opened · self-review passed · $0.42</p>
      <p className="text-white/50">_</p>
    </div>
  );
}

export function FeaturedPanels() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div>
      {featured.map((project, i) => {
        const tone = PANEL_TONES[i % PANEL_TONES.length];
        return (
          <div
            key={project.slug}
            className="sticky"
            style={{ top: `calc(4rem + ${i * 3.25}rem)` }}
          >
            {/* Folder tab */}
            <div
              className="hidden md:block"
              style={{ marginLeft: `${i * 15}rem` }}
            >
              <span
                className={cn(
                  "panel-tab inline-flex items-center gap-2 font-mono uppercase text-sm px-6 pr-14 py-3.5",
                  tone.bg,
                  tone.text
                )}
              >
                Project {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <section className={cn("min-h-[34rem]", tone.bg, tone.text)}>
              <div className="container-custom py-10 md:py-14 grid md:grid-cols-2 gap-10 items-start">
                <div className="max-w-md">
                  <p className={cn("font-mono uppercase text-sm", tone.sub)}>
                    ● {project.status}
                  </p>
                  <h3 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
                    {project.displayTitle}
                  </h3>
                  <p className={cn("mt-5 text-lg leading-relaxed", tone.sub)}>
                    {project.oneLiner}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className={cn(
                          "folder-chip font-mono uppercase text-xs px-3 py-1.5",
                          tone.chip
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link ?? `/projects#${project.slug}`}
                    target={project.link ? "_blank" : undefined}
                    rel={project.link ? "noopener noreferrer" : undefined}
                    className="mt-8 inline-flex items-center gap-2 font-mono uppercase text-sm border-b-2 border-current pb-1 hover:gap-3.5 transition-all"
                  >
                    View project <ArrowUpRight className="size-4" />
                  </Link>
                </div>
                <SelectionFrame tone={i === 1 ? "cyan" : "ink"} className="bg-white">
                  <FileChip
                    label="image.jpg"
                    accent={tone.accent}
                    className="absolute top-3 right-3 z-10"
                  />
                  {project.media.type === "placeholder" ? (
                    <TerminalMock />
                  ) : (
                    <ProjectMedia media={project.media} className="aspect-[16/9] object-cover" />
                  )}
                </SelectionFrame>
              </div>
            </section>
          </div>
        );
      })}
      {/* spacer so the last sticky panel scrolls out cleanly */}
      <div className="h-24 bg-transparent" />
    </div>
  );
}
