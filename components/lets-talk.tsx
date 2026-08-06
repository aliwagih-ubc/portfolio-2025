import { Zap, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { PixelHeading } from "@/components/canvas/canvas";
import { Reveal } from "@/components/canvas/reveal";

/* Four-lobed blob character with eyes */
function Blob({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <path
        d="M100 18 C 118 -6 158 2 162 30 C 165 48 152 62 138 70 C 158 74 182 86 178 112 C 174 138 144 142 126 134 C 136 152 138 182 112 190 C 88 197 72 176 70 156 C 58 172 30 182 16 160 C 2 138 22 116 42 110 C 22 102 4 84 14 62 C 24 40 52 44 68 54 C 62 34 74 10 100 18 Z"
        fill="#2eb67d"
        stroke="#111212"
        strokeWidth="2.5"
      />
      <rect x="88" y="78" width="12" height="34" rx="6" fill="#111212" />
      <rect x="112" y="78" width="12" height="34" rx="6" fill="#111212" />
    </svg>
  );
}

export function LetsTalk() {
  return (
    <section className="container-custom py-20 md:py-28 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        <Reveal>
          <Blob className="w-56 md:w-80 mx-auto" />
        </Reveal>
        <div>
          <Reveal>
            <PixelHeading className="text-6xl md:text-8xl">
              Let&apos;s
              <br />
              Talk
            </PixelHeading>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-ink/80 max-w-md leading-relaxed">
              The best way to work with me is through Manara Ventures, my
              consulting company for construction ops and practical AI. For
              everything else, LinkedIn is always open.
            </p>
          </Reveal>

          {/* Figma-style comment card */}
          <Reveal delay={0.18}>
            <div className="mt-8 bg-white rounded-2xl shadow-[0_10px_36px_rgba(17,18,18,0.14)] p-5 max-w-md">
              <p className="text-sm text-muted-foreground border-b border-grid pb-3">
                Comment
              </p>
              <div className="pt-4 flex gap-3">
                <span className="size-10 rounded-full bg-cyan flex items-center justify-center font-mono text-sm text-ink shrink-0">
                  AW
                </span>
                <div>
                  <p className="font-semibold text-ink">Ali Wagih</p>
                  <p className="text-ink/80 leading-relaxed">
                    Open to consulting engagements, product builds, and
                    interesting conversations about AI for work that happens
                    off the screen.
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 border-2 border-cyan px-2.5 py-1 text-sm text-ink">
                    <Zap className="size-4 fill-ink" /> 1
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.manaraContact}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ink text-white font-mono uppercase text-sm px-5 py-3.5 hover:bg-brown transition-colors"
              >
                Contact via Manara <ArrowUpRight className="size-4" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-ink text-ink font-mono uppercase text-sm px-5 py-3 hover:bg-ink hover:text-white transition-colors"
              >
                LinkedIn <ArrowUpRight className="size-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
