"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Content", href: "/content" },
];

// Context-aware CTA based on current page
function getCtaConfig(pathname: string) {
  switch (pathname) {
    case "/projects":
      return { label: "Start a Project", href: "#inquiry", isModal: true };
    case "/about":
      return { label: "See My Work", href: "/projects", isModal: false };
    case "/content":
      return { label: "Get in Touch", href: "mailto:contact@aliwagih.com", isModal: false };
    default:
      return { label: "Get in Touch", href: "mailto:contact@aliwagih.com", isModal: false };
  }
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const ctaConfig = getCtaConfig(pathname);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display font-bold text-xl tracking-tight text-foreground hover:text-accent transition-colors"
        >
          Ali Wagih
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors relative py-1",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-accent" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href={ctaConfig.href}
            className="inline-flex h-9 items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground shadow-sm transition-all hover:bg-accent-hover btn-glow-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {ctaConfig.label}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md">
          <div className="container-custom py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block py-2 text-base font-medium transition-colors",
                  pathname === item.href
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={ctaConfig.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 rounded-md bg-accent text-accent-foreground font-medium hover:bg-accent-hover transition-colors"
            >
              {ctaConfig.label}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
