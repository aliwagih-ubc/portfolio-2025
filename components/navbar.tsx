"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Asterisk, Layers, PenLine, Heart, ArrowUpRight, Mail, Linkedin } from "lucide-react";
import { site } from "@/lib/site";
import { Ruler } from "@/components/canvas/ruler";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Asterisk },
  { name: "Projects", href: "/projects", icon: Layers },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-ink/10 shadow-[0_1px_0_rgba(17,18,18,0.04)]">
      <nav className="flex items-stretch h-14 md:h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center px-4 md:px-6 border-r border-ink/10 shrink-0"
          aria-label="Ali Wagih — home"
        >
          <span className="font-pixel font-extrabold text-2xl leading-none tracking-tight text-ink">
            AW
          </span>
        </Link>

        {/* Tabs */}
        <div className="flex items-stretch overflow-x-auto">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 px-3 md:px-5 font-mono uppercase text-sm tracking-wide whitespace-nowrap transition-colors",
                  active ? "bg-cyan text-ink" : "text-ink hover:bg-muted"
                )}
              >
                <item.icon className="size-4" strokeWidth={2.25} />
                <span className="hidden sm:inline">{item.name}</span>
              </Link>
            );
          })}
          <a
            href={site.writing}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 md:px-5 font-mono uppercase text-sm tracking-wide whitespace-nowrap text-ink hover:bg-muted transition-colors"
          >
            <PenLine className="size-4" strokeWidth={2.25} />
            <span className="hidden sm:inline">Writing</span>
            <ArrowUpRight className="size-3.5" strokeWidth={2.25} />
          </a>
        </div>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-2 md:gap-3 px-3 md:px-6">
          <a
            href={`mailto:${site.email}`}
            className="hidden sm:flex p-1.5 text-ink hover:text-muted-foreground transition-colors"
            aria-label="Email"
            title={site.email}
          >
            <Mail className="size-5" strokeWidth={2.25} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex p-1.5 text-ink hover:text-muted-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-5" strokeWidth={2.25} />
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-2 border-2 border-ink px-3 md:px-4 py-2 font-mono uppercase text-sm text-ink hover:bg-ink hover:text-white transition-colors"
          >
            <Heart className="size-4 fill-current" />
            Contact
          </Link>
        </div>
      </nav>
      <div className="hidden md:block">
        <Ruler position="top" />
      </div>
    </header>
  );
}
