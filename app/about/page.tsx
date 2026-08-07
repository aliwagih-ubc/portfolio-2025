import {
  Hand,
  Heart,
  Target,
  Zap,
  Shield,
  Eye,
  Lightbulb,
  Cog,
  Shapes,
  Sparkle,
  HardHat,
  GraduationCap,
  Building2,
  Sparkles,
} from "lucide-react";
import {
  PixelHeading,
  SelectionFrame,
  StickyNote,
  Handwritten,
  SketchArrow,
  CursorBadge,
  FolderChip,
} from "@/components/canvas/canvas";
import { Reveal } from "@/components/canvas/reveal";
import { LetsTalk } from "@/components/lets-talk";

const coreValues = [
  {
    icon: Heart,
    tone: "cyan",
    title: "Software is for people",
    description:
      "Every tool gets used by a real person having a real day. I build for them, not for the demo.",
  },
  {
    icon: Eye,
    tone: "yellow",
    title: "Plain beats clever",
    description:
      "A simple thing that works beats a clever thing nobody understands. I reach for the boring solution first.",
  },
  {
    icon: Target,
    tone: "pink",
    title: "I own the outcome",
    description:
      "Shipping a feature isn't the point. I care whether it actually made someone's job easier.",
  },
  {
    icon: Zap,
    tone: "green",
    title: "Start small, learn fast",
    description:
      "I'd rather put a rough version in front of someone this week than a perfect one next quarter.",
  },
  {
    icon: Lightbulb,
    tone: "yellow",
    title: "Cut what you can",
    description:
      "Most of building well is deciding what not to build. I try to do less, better.",
  },
  {
    icon: Shield,
    tone: "cyan",
    title: "It has to hold up",
    description:
      "I came from work where failure had consequences. I don't ship things I wouldn't trust.",
  },
] as const;

const timeline = [
  {
    icon: Sparkles,
    iconBg: "bg-cyan",
    name: "Manara Ventures",
    role: "Founder",
    period: "2026 - Current",
    current: true,
    description:
      "I started Manara Ventures in Vancouver to help construction and operations teams put practical AI to work: assessments, automation builds, marketing sites, and hands-on coaching. It's also where I ship my own products, like LienClock, a lien and prompt-payment deadline tracker for BC contractors.",
  },
  {
    icon: HardHat,
    iconBg: "bg-yellow",
    name: "Marine Construction PM",
    role: "Project Manager",
    period: "2022 - 2026",
    current: false,
    description:
      "Running marine construction projects worth millions: budgets, schedules, contractors, and the weather. This is where I learned how work actually gets delivered when a lot is on the line.",
  },
  {
    icon: GraduationCap,
    iconBg: "bg-green",
    name: "Computer Science, UBC",
    role: "Student",
    period: "2023 - 2026",
    current: false,
    description:
      "Went back to school to build the tools I kept wishing existed on site. Algorithms and systems by day, shipping side projects by night.",
  },
  {
    icon: Building2,
    iconBg: "bg-pink",
    name: "Civil Engineering",
    role: "Engineer",
    period: "2019 - 2022",
    current: false,
    description:
      "My first work was on real infrastructure: bridges and marine structures, where a mistake isn't a bug, it's a safety report. It taught me to respect constraints.",
  },
];

const rail = [
  { href: "#bio", label: "Bio", icon: Cog },
  { href: "#story", label: "Story", icon: Shapes },
  { href: "#work", label: "Work", icon: Sparkle },
];

export default function About() {
  return (
    <div className="overflow-x-clip">
      {/* Floating section rail */}
      <nav className="hidden xl:flex flex-col gap-6 fixed left-6 top-1/2 -translate-y-1/2 z-40 bg-white rounded-3xl shadow-[0_10px_36px_rgba(17,18,18,0.14)] px-5 py-8">
        {rail.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex flex-col items-center gap-1.5 group"
          >
            <span className="size-11 rounded-xl flex items-center justify-center text-ink group-hover:bg-ink group-hover:text-white transition-colors">
              <item.icon className="size-5" strokeWidth={2.25} />
            </span>
            <span className="font-mono uppercase text-xs text-ink">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* ── Title ────────────────────────────────────────────── */}
      <section className="container-custom pt-14 md:pt-20 pb-10">
        <Reveal>
          <PixelHeading as="h1" className="text-7xl md:text-[10rem]">
            About
          </PixelHeading>
        </Reveal>
      </section>

      {/* ── Bio ──────────────────────────────────────────────── */}
      <section id="bio" className="container-custom pb-24 scroll-mt-28">
        <span className="inline-block bg-yellow font-mono uppercase text-sm px-3 py-1.5 mb-4 ml-2">
          Main bio
        </span>
        <Reveal>
          <SelectionFrame tone="yellow" className="bg-white/80 backdrop-blur-sm px-6 md:px-14 py-10 md:py-14">
            <div className="max-w-3xl mx-auto">
              <p className="text-3xl md:text-5xl font-medium tracking-tight text-ink leading-snug">
                I&apos;m Ali{" "}
                <span className="inline-flex size-11 md:size-14 bg-cyan rounded-lg border-2 border-ink items-center justify-center align-middle -rotate-3">
                  <Hand className="size-6 md:size-8 text-ink" strokeWidth={2.25} />
                </span>{" "}
                a civil engineer turned software builder, and the founder of{" "}
                <a
                  href="https://manaraventures.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-cyan decoration-4 underline-offset-4 hover:bg-cyan-pastel transition-colors"
                >
                  Manara Ventures
                </a>{" "}
                <Sparkles className="inline size-8 md:size-10 text-yellow align-middle" />.
              </p>
              <div className="mt-8 space-y-4 text-lg text-ink/75 leading-relaxed">
                <p>
                  Most software people came up through computer science. I came
                  up through civil engineering, then years of project management
                  on marine infrastructure, and only then computer science.
                </p>
                <p>
                  Each step left me with something. Engineering taught me to
                  respect constraints. Project management taught me how to
                  deliver when a dozen people and a deadline are involved.
                  Computer science gave me the tools to build the fixes I used
                  to only complain about.
                </p>
              </div>
            </div>
          </SelectionFrame>
        </Reveal>
      </section>

      {/* ── Story ────────────────────────────────────────────── */}
      <section id="story" className="container-custom pb-24 scroll-mt-28">
        <div className="relative max-w-5xl mx-auto space-y-14">
          <CursorBadge name="My story" tone="pink" className="hidden md:flex absolute -top-8 right-8" />

          <Reveal className="md:w-3/5">
            <div className="bg-cyan-pastel px-7 py-7">
              <h3 className="text-2xl md:text-3xl font-semibold text-ink mb-4">
                Starting on the water
              </h3>
              <p className="text-ink/80 leading-relaxed">
                I started in civil engineering, building real things in rough
                marine conditions. As a project manager I handled the budgets,
                the negotiations, and the parts nobody warns you about, like
                planning concrete pours around tide charts and weather windows.
                What stuck with me was how much time got wasted: data lived in
                ten different places, and good engineers spent their afternoons
                copy-pasting between spreadsheets.
              </p>
            </div>
          </Reveal>

          <div className="hidden md:flex justify-center items-center gap-3">
            <SketchArrow />
            <Handwritten className="text-2xl rotate-2">then it clicked!</Handwritten>
          </div>

          <Reveal className="md:w-3/5 md:ml-auto">
            <div className="bg-yellow-pastel px-7 py-7">
              <h3 className="text-2xl md:text-3xl font-semibold text-ink mb-4">
                The pivot
              </h3>
              <p className="text-ink/80 leading-relaxed">
                It became obvious the biggest improvements wouldn&apos;t come
                from better materials. They&apos;d come from better information.
                So I went back to school for computer science and started
                building the tools I kept wishing I had, using AI to kill the
                busywork rather than to look impressive.
              </p>
            </div>
          </Reveal>

          <div className="hidden md:flex justify-start items-center gap-3 pl-16">
            <Handwritten className="text-2xl -rotate-3">so I made it official:</Handwritten>
            <SketchArrow flip />
          </div>

          <Reveal className="md:w-3/5">
            <div className="bg-green-pastel px-7 py-7">
              <h3 className="text-2xl md:text-3xl font-semibold text-ink mb-4">
                Starting Manara
              </h3>
              <p className="text-ink/80 leading-relaxed">
                In 2026 I founded Manara Ventures, a Vancouver consulting
                company at the intersection of construction operations and
                practical AI. I help teams figure out where AI actually pays
                off, build the automations and dashboards to get them there,
                and ship products of my own along the way. I can still sit in a
                site meeting and a code review on the same day, and that&apos;s
                the point.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────── */}
      <section className="container-custom pb-28">
        <div className="text-center mb-12">
          <Handwritten className="text-3xl">what I care about</Handwritten>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {coreValues.map((value, i) => (
            <Reveal key={value.title} delay={(i % 3) * 0.08}>
              <StickyNote
                tone={value.tone}
                rotate={i % 2 ? "rotate-1" : "-rotate-1"}
                className="h-full"
              >
                <value.icon className="size-6 text-ink mb-3" strokeWidth={2.25} />
                <h4 className="font-semibold text-ink mb-1.5">{value.title}</h4>
                <p className="text-sm text-ink/75 leading-relaxed">{value.description}</p>
              </StickyNote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────── */}
      <section id="work" className="container-custom pb-24 scroll-mt-28">
        <span className="inline-block bg-cyan font-mono uppercase text-sm px-3 py-1.5 mb-4 ml-2">
          Where I&apos;ve been
        </span>
        <Reveal>
          <SelectionFrame tone="cyan" className="bg-white/80 backdrop-blur-sm px-6 md:px-14 py-10 md:py-12">
            <p className="text-muted-foreground text-xl mb-2">Timeline</p>
            <div className="divide-y divide-grid">
              {timeline.map((entry) => (
                <div key={entry.name} className="py-10">
                  <div className="flex items-center gap-4">
                    <span className={`size-10 ${entry.iconBg} flex items-center justify-center shrink-0`}>
                      <entry.icon className="size-5 text-ink" strokeWidth={2.25} />
                    </span>
                    <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink">
                      {entry.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-lg text-ink/75 leading-relaxed max-w-3xl md:pl-14">
                    {entry.description}
                  </p>
                  <div className="mt-5 md:pl-14">
                    <span
                      className={
                        "inline-flex items-center gap-2 font-mono uppercase text-sm px-4 py-2 border-2 " +
                        (entry.current
                          ? "border-cyan bg-cyan-pastel text-ink"
                          : "border-ink/20 text-muted-foreground")
                      }
                    >
                      <Zap className="size-4 fill-current" /> {entry.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </SelectionFrame>
        </Reveal>
        <div className="mt-8 flex justify-end">
          <FolderChip>P.Eng · Vancouver, BC</FolderChip>
        </div>
      </section>

      <LetsTalk />
    </div>
  );
}
