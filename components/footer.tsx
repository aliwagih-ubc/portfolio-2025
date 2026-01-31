import Link from "next/link";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";

const socialLinks = [
  {
    href: "mailto:contact@aliwagih.com",
    icon: Mail,
    label: "Email",
  },
  {
    href: "https://linkedin.com/in/aliwagih",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/aliwagih",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://youtube.com/@aliwagih",
    icon: Youtube,
    label: "YouTube",
  },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/content", label: "Content" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/50">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="font-display font-bold text-xl text-foreground hover:text-accent transition-colors"
            >
              Ali Wagih
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Field-tested builder bridging engineering reality with AI.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Navigate</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted transition-all hover:glow-cyan-subtle"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ali Wagih. All rights reserved.
          </span>
          <span className="text-xs text-muted-foreground">
            Built with Next.js & Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}
