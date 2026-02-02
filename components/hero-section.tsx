"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GradientWaves } from "./gradient-waves";
import { SplitText } from "@/components/ui/split-text";

interface HeroSectionProps {
  eyebrow?: string;
  title: string;
  description: React.ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  status?: string;
  showWaves?: boolean;
  compact?: boolean;
}

export function HeroSection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  status,
  showWaves = false,
  compact = false,
}: HeroSectionProps) {
  return (
    <section
      className={`relative overflow-hidden ${compact ? "pt-16 pb-12 md:pt-20 md:pb-16" : "pt-24 pb-16 md:pt-32 md:pb-24"
        }`}
    >
      {/* Background Waves */}
      {showWaves && <GradientWaves />}

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block text-sm font-medium text-accent mb-6 tracking-wide"
            >
              {eyebrow}
            </motion.span>
          )}

          <SplitText
            text={title}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-8 text-balance leading-[1.1]"
            delay={0.15}
            triggerOnScroll={false}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 space-y-4 max-w-2xl leading-relaxed"
          >
            {description}
          </motion.div>

          {(primaryCta || secondaryCta) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground shadow-lg transition-all hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98] btn-glow-orange"
                >
                  {primaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              )}

              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-lg border border-border bg-card/50 px-6 py-3.5 text-base font-medium text-foreground transition-all hover:bg-card hover:border-border/80"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </motion.div>
          )}

          {status && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="inline-flex items-center gap-2.5 text-sm text-muted-foreground bg-card/60 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              {status}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
