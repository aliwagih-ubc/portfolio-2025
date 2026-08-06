import { projects } from "@/data/projects";
import { ProjectsList } from "@/components/projects-list";
import { PixelHeading, Handwritten, StickyNote } from "@/components/canvas/canvas";
import { Reveal } from "@/components/canvas/reveal";
import { YouCursor } from "@/components/canvas/you-cursor";
import { LetsTalk } from "@/components/lets-talk";

export default function ProjectsPage() {
  return (
    <div className="overflow-x-clip">
      <YouCursor />

      <section className="container-custom pt-14 md:pt-20 pb-12 relative">
        <Reveal>
          <PixelHeading as="h1" className="text-6xl sm:text-8xl md:text-[9rem]">
            Projects
          </PixelHeading>
        </Reveal>
        <div className="mt-6 flex flex-wrap items-end gap-6">
          <p className="text-lg text-ink/75 max-w-lg leading-relaxed">
            A mix of shipped products, working prototypes, and ideas I&apos;m
            still chasing. Mostly around construction and operations.
          </p>
          <StickyNote tone="cyan" rotate="rotate-2" className="hidden md:block">
            <Handwritten className="text-xl">open a case file for the full story!</Handwritten>
          </StickyNote>
        </div>
      </section>

      <section className="container-custom pb-24 md:pb-32">
        <ProjectsList projects={projects} />
      </section>

      <LetsTalk />
    </div>
  );
}
