import Image from "next/image";
import { ChevronsRight, Target, Hammer, Workflow, LayoutDashboard, HardHat } from "lucide-react";
import Link from "next/link";
import {
  StickyNote,
  SelectionFrame,
  Handwritten,
  SketchUnderline,
  SketchArrow,
  CursorBadge,
  PixelHeading,
} from "@/components/canvas/canvas";
import { Reveal } from "@/components/canvas/reveal";
import { Typewriter } from "@/components/canvas/typewriter";
import { LiveClock } from "@/components/canvas/live-clock";
import { YouCursor } from "@/components/canvas/you-cursor";
import { FeaturedPanels } from "@/components/featured-panels";
import { LetsTalk } from "@/components/lets-talk";

const skills = [
  { label: "AI & Automation", icon: Workflow, tone: "bg-yellow text-ink" },
  { label: "Full-Stack Apps", icon: Hammer, tone: "bg-green text-white" },
  { label: "Construction Ops", icon: HardHat, tone: "bg-pink text-white" },
  { label: "Dashboards & Data", icon: LayoutDashboard, tone: "bg-cyan text-ink" },
];

export default function Home() {
  return (
    <div className="overflow-x-clip">
      <YouCursor />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="container-custom relative pt-10 pb-24 md:pt-14 md:pb-32">
        <p className="text-center font-mono text-sm text-muted-foreground">
          <LiveClock />
        </p>

        {/* Typing bubble */}
        <div className="mt-8 flex justify-center">
          <span className="bg-cyan border-2 border-ink rounded-xl rounded-bl-none px-5 py-2.5 text-2xl md:text-3xl font-semibold text-ink shadow-[3px_4px_0_rgba(17,18,18,0.9)]">
            <Typewriter text="Hey, there!" />
          </span>
        </div>

        <div className="mt-10 relative">
          {/* floating annotations */}
          <div className="hidden md:block absolute -top-8 left-1/2 -translate-x-1/2 text-center">
            <Handwritten className="text-3xl">my name is</Handwritten>
            <SketchUnderline className="mx-auto block" />
          </div>
          <StickyNote
            tone="green"
            rotate="-rotate-6"
            className="hidden md:block absolute -top-6 left-4 lg:left-16 z-10 max-w-56"
          >
            <span className="font-medium">Currently building Manara Ventures</span>
          </StickyNote>
          <StickyNote
            tone="yellow"
            rotate="rotate-3"
            className="hidden md:block absolute -top-2 right-4 lg:right-14 z-10 max-w-56"
          >
            <span className="font-medium">Previously: marine construction PM</span>
          </StickyNote>

          <Reveal>
            <SelectionFrame tone="cyan" className="mx-auto max-w-4xl px-6 py-10 md:py-14">
              <PixelHeading as="h1" className="text-center text-[17vw] md:text-9xl">
                Ali Wagih
              </PixelHeading>
            </SelectionFrame>
          </Reveal>

          <StickyNote
            tone="orange"
            rotate="-rotate-6"
            className="hidden md:inline-block absolute -bottom-16 left-8 lg:left-24"
          >
            <span className="font-mono uppercase text-sm">Engineer × Builder</span>
          </StickyNote>
          <SketchArrow className="hidden md:block absolute -bottom-12 left-56 lg:left-72 -scale-y-100 rotate-12" />
          <span className="hidden md:inline-block absolute -bottom-20 right-10 lg:right-28 rotate-6 bg-pink text-white font-mono uppercase text-sm px-4 py-2.5 rounded-full rounded-tl-none border-2 border-ink shadow-[3px_4px_0_rgba(17,18,18,0.4)]">
            Vancouver, BC
          </span>
          <CursorBadge name="PM" tone="green" className="hidden lg:flex absolute top-1/2 left-0" />
          <CursorBadge name="Eng" tone="yellow" className="hidden lg:flex absolute top-1/3 right-0" />
        </div>

        <p className="mt-24 md:mt-28 flex items-center justify-center gap-2.5 font-mono uppercase text-sm md:text-base text-ink text-center">
          <span className="size-3 rounded-full bg-cyan inline-block animate-pulse" />
          Available for thoughtful projects
        </p>

        <Reveal delay={0.1}>
          <h2 className="mt-8 text-center text-4xl md:text-6xl font-semibold tracking-tight text-ink max-w-4xl mx-auto leading-[1.08]">
            I build{" "}
            <span className="inline-block align-middle size-8 md:size-11 bg-green rounded-full border-2 border-ink" aria-hidden />{" "}
            practical AI for work that still runs on{" "}
            <span className="inline-block align-middle -rotate-3 bg-yellow-pastel px-2 font-hand text-4xl md:text-6xl">
              spreadsheets
            </span>{" "}
            and gut feel <span className="text-pink">✳</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-ink text-white font-mono uppercase text-sm px-6 py-4"
            >
              <span className="flex size-8 bg-cyan items-center justify-center">
                <ChevronsRight className="size-5 text-ink group-hover:translate-x-0.5 transition-transform" strokeWidth={3} />
              </span>
              Contact me
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── About teaser ─────────────────────────────────────── */}
      <section className="container-custom relative pb-24 md:pb-32">
        <div className="hidden md:block absolute -top-10 left-10">
          <Handwritten className="text-3xl -rotate-6 inline-block">about me!</Handwritten>
        </div>

        <div className="flex justify-center mb-10">
          <SelectionFrame tone="ink" className="px-6 py-3 bg-white">
            <span className="text-3xl md:text-4xl font-semibold text-ink">what&apos;s up</span>
          </SelectionFrame>
        </div>

        <div className="relative">
          <Reveal>
            <p className="text-center text-3xl md:text-5xl font-medium tracking-tight text-ink leading-snug max-w-4xl mx-auto">
              I&apos;m Ali{" "}
              <Image
                src="/headshot-cropped.png"
                alt="Ali Wagih"
                width={96}
                height={96}
                className="inline-block size-12 md:size-16 object-cover object-top rounded-lg border-2 border-ink align-middle"
              />{" "}
              a civil engineer turned software builder in Vancouver. I run{" "}
              <a href="https://manaraventures.ca" target="_blank" rel="noopener noreferrer" className="underline decoration-cyan decoration-4 underline-offset-4 hover:bg-cyan-pastel transition-colors">
                Manara Ventures
              </a>
              , helping construction and operations teams put AI to work{" "}
              <Target className="inline size-8 md:size-10 text-pink align-middle" strokeWidth={2.5} />{" "}
              and building products for industries that still run on paper.
            </p>
          </Reveal>

          {/* polaroid */}
          <Reveal delay={0.15} className="hidden lg:block absolute -left-6 top-8 w-52">
            <div className="bg-white p-3 pb-8 shadow-[6px_10px_24px_rgba(17,18,18,0.18)] -rotate-6">
              <Image
                src="/headshot-cropped.png"
                alt="Ali Wagih"
                width={400}
                height={400}
                className="w-full aspect-square object-cover object-top"
              />
              <Handwritten className="absolute bottom-1 left-0 right-0 text-center text-xl">
                2026
              </Handwritten>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/about"
            className="font-mono uppercase text-sm text-ink border-b-2 border-ink pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors"
          >
            More about me →
          </Link>
        </div>
      </section>

      {/* ── Skills strip ─────────────────────────────────────── */}
      <section className="container-custom pb-28 md:pb-36">
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {skills.map((s, i) => (
              <span
                key={s.label}
                className={`inline-flex items-center gap-3 px-5 md:px-7 py-3 md:py-4 text-xl md:text-3xl font-semibold ${s.tone} ${i % 2 ? "rotate-1" : "-rotate-1"}`}
              >
                <s.icon className="size-6 md:size-8" strokeWidth={2.25} />
                {s.label}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Featured works ───────────────────────────────────── */}
      <section className="pb-10">
        <div className="container-custom text-center mb-12">
          <Handwritten className="text-3xl inline-block">explore my work!</Handwritten>
          <SketchUnderline className="mx-auto block" />
          <Reveal>
            <PixelHeading className="mt-6 text-6xl md:text-9xl">
              Featured
              <br />
              Works
            </PixelHeading>
          </Reveal>
          <Reveal delay={0.12}>
            <StickyNote tone="yellow" rotate="rotate-1" className="inline-block mt-8 max-w-sm text-left">
              A showcase of what happens when field experience meets working
              code.
            </StickyNote>
          </Reveal>
        </div>
        <FeaturedPanels />
        <div className="container-custom mt-4 text-center">
          <Link
            href="/projects"
            className="font-mono uppercase text-sm text-ink border-b-2 border-ink pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors"
          >
            All projects →
          </Link>
        </div>
      </section>

      {/* ── Let's talk ───────────────────────────────────────── */}
      <LetsTalk />
    </div>
  );
}
