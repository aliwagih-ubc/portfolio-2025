import Link from "next/link";
import { ChevronsRight } from "lucide-react";
import { site } from "@/lib/site";
import { Ruler } from "@/components/canvas/ruler";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: site.manara, label: "Manara Ventures" },
  { href: site.linkedin, label: "LinkedIn" },
  { href: site.github, label: "GitHub" },
  { href: `mailto:${site.email}`, label: site.email },
];

export function Footer() {
  return (
    <footer className="bg-white">
      {/* CTA panel: yellow field with brown blades + pixel CONTACT banner */}
      <div className="container-custom pb-10">
        <div className="relative overflow-hidden rounded-3xl bg-yellow min-h-[320px] md:min-h-[420px] flex items-center justify-center">
          <svg
            className="absolute inset-0 w-full h-full text-brown"
            viewBox="0 0 1200 420"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path d="M-40 470 C 180 260, 260 140, 300 -30 L 150 -30 C 130 170, 60 320, -40 430 Z" fill="currentColor" />
            <path d="M760 470 C 950 280, 1030 130, 1060 -40 L 920 -40 C 900 150, 830 320, 700 470 Z" fill="currentColor" />
            <path d="M1120 470 C 1230 330, 1280 200, 1300 60 L 1300 470 Z" fill="currentColor" />
          </svg>
          <Link
            href="/contact"
            className="relative z-10 group flex items-center gap-4 md:gap-6 bg-cyan border-4 border-ink px-6 md:px-10 py-4 md:py-6 shadow-[8px_10px_0_rgba(17,18,18,0.35)] hover:-translate-y-1 transition-transform"
          >
            <span className="hidden sm:flex size-10 md:size-14 bg-ink items-center justify-center">
              <ChevronsRight className="size-6 md:size-8 text-yellow group-hover:translate-x-1 transition-transform" strokeWidth={3} />
            </span>
            <span className="font-pixel font-extrabold uppercase text-5xl md:text-7xl leading-none tracking-tight text-ink">
              Contact
            </span>
            <span className="hidden sm:flex size-10 md:size-14 bg-ink items-center justify-center">
              <ChevronsRight className="size-6 md:size-8 text-yellow group-hover:translate-x-1 transition-transform" strokeWidth={3} />
            </span>
          </Link>
        </div>
      </div>

      {/* Link rows */}
      <div className="container-custom pb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono uppercase text-sm text-ink hover:text-muted-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="font-mono uppercase text-sm text-muted-foreground hover:text-ink transition-colors"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <div className="container-custom pb-6 flex flex-col sm:flex-row justify-between gap-2">
        <span className="font-mono text-xs uppercase text-faint">
          © {new Date().getFullYear()} Ali Wagih
        </span>
        <span className="font-mono text-xs uppercase text-faint">
          Vancouver, BC
        </span>
      </div>

      <div className="hidden md:block">
        <Ruler position="bottom" />
      </div>
    </footer>
  );
}
