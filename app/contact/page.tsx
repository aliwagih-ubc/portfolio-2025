import type { Metadata } from "next";
import { ArrowUpRight, Linkedin, Github, Mail, Compass } from "lucide-react";
import { site } from "@/lib/site";
import {
  PixelHeading,
  SelectionFrame,
  Handwritten,
  SketchUnderline,
  StickyNote,
} from "@/components/canvas/canvas";
import { Reveal } from "@/components/canvas/reveal";
import { YouCursor } from "@/components/canvas/you-cursor";

export const metadata: Metadata = {
  title: "Contact | Ali Wagih",
  description:
    "Work with Ali Wagih through Manara Ventures, or reach out directly on LinkedIn.",
};

const channels = [
  {
    tone: "cyan" as const,
    rotate: "-rotate-2",
    label: "Work with me",
    body: "Consulting, automation builds, and AI projects run through Manara Ventures. Book a free discovery call and tell me what's slowing your team down.",
    cta: "Contact via Manara",
    href: site.manaraContact,
    icon: Compass,
  },
  {
    tone: "yellow" as const,
    rotate: "rotate-1",
    label: "Say hello",
    body: `Prefer email? Anything sent to ${site.email} lands in my inbox. Tell me a story, or a project idea.`,
    cta: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    tone: "green" as const,
    rotate: "-rotate-1",
    label: "Connect",
    body: "For quick questions, career chats, or just to follow along, LinkedIn is the fastest way to reach me directly.",
    cta: "Find me on LinkedIn",
    href: site.linkedin,
    icon: Linkedin,
  },
];

export default function ContactPage() {
  return (
    <div className="overflow-x-clip">
      <YouCursor />

      <section className="container-custom pt-16 md:pt-24 pb-24 md:pb-32">
        <div className="text-center">
          <Handwritten className="text-3xl">leave me a note</Handwritten>
          <SketchUnderline className="mx-auto block" />
        </div>

        <Reveal>
          <div className="mt-10 flex justify-center">
            <SelectionFrame tone="ink" className="rotate-[-2deg] bg-white px-8 md:px-16 py-8 md:py-12">
              <PixelHeading as="h1" className="text-6xl sm:text-8xl md:text-[9rem]">
                Contact
              </PixelHeading>
            </SelectionFrame>
          </div>
        </Reveal>

        <p className="mt-14 flex items-center justify-center gap-2.5 font-mono uppercase text-sm md:text-base text-ink text-center">
          <span className="size-3 rounded-full bg-green inline-block animate-pulse" />
          I&apos;m available for new projects
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {channels.map((channel, i) => (
            <Reveal key={channel.label} delay={i * 0.1}>
              <StickyNote tone={channel.tone} rotate={channel.rotate} className="h-full flex flex-col">
                <channel.icon className="size-6 text-ink mb-3" strokeWidth={2.25} />
                <p className="font-mono uppercase text-sm text-ink mb-2">{channel.label}</p>
                <p className="text-sm text-ink/80 leading-relaxed flex-1">{channel.body}</p>
                <a
                  href={channel.href}
                  target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={channel.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="mt-5 inline-flex items-center gap-2 bg-ink text-white font-mono uppercase text-xs px-4 py-3 self-start hover:bg-brown transition-colors break-all"
                >
                  {channel.cta} <ArrowUpRight className="size-4 shrink-0" />
                </a>
              </StickyNote>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <div className="bg-white rounded-2xl shadow-[0_10px_36px_rgba(17,18,18,0.14)] px-8 py-5 flex flex-wrap justify-center gap-x-10 gap-y-4">
            {[
              { href: site.linkedin, label: "LinkedIn", icon: Linkedin },
              { href: site.github, label: "GitHub", icon: Github },
              { href: site.manara, label: "Manara", icon: Compass },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 text-ink hover:text-muted-foreground transition-colors"
              >
                <social.icon className="size-6" strokeWidth={2} />
                <span className="font-mono uppercase text-xs">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
