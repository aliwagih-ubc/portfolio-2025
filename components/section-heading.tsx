"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  className,
  centered = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("mb-12 space-y-4", centered && "text-center", className)}
    >
      <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg text-muted-foreground max-w-2xl leading-relaxed",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
