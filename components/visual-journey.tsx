"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  HardHat,
  Briefcase,
  GraduationCap,
  BrainCircuit,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

const journeyStages = [
  {
    icon: HardHat,
    title: "Civil Engineering",
    period: "2019-2022",
    description:
      "Started with boots on the ground. Learned what it means to build things that can't fail, like bridges and marine structures.",
    highlight: "Foundation in engineering discipline",
    color: "from-amber-500 to-orange-600",
    glowColor: "rgba(245, 158, 11, 0.5)",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-500",
    borderColor: "border-amber-500/40",
    dotColor: "bg-amber-500",
  },
  {
    icon: Briefcase,
    title: "Consulting PM",
    period: "2022-Present",
    description:
      "Managed multi-million dollar marine infrastructure projects. Learned stakeholder navigation, risk management, and the art of shipping under pressure.",
    highlight: "High-stakes delivery expertise",
    color: "from-orange-500 to-red-500",
    glowColor: "rgba(249, 115, 22, 0.5)",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-500",
    borderColor: "border-orange-500/40",
    dotColor: "bg-orange-500",
  },
  {
    icon: GraduationCap,
    title: "CS Degree",
    period: "2023-2026",
    description:
      "Went back to fundamentals. Deep-diving into algorithms, systems design, and software craftsmanship while building real products on the side.",
    highlight: "Systems thinking & craft",
    color: "from-cyan-500 to-blue-500",
    glowColor: "rgba(6, 182, 212, 0.5)",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-500",
    borderColor: "border-cyan-500/40",
    dotColor: "bg-cyan-500",
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    period: "2025-Present",
    description:
      "Building AI-powered tools for the industries I know. Bridging the gap between engineering reality and modern software capabilities.",
    highlight: "Bridging physical & digital",
    color: "from-violet-500 to-purple-600",
    glowColor: "rgba(139, 92, 246, 0.5)",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-500",
    borderColor: "border-violet-500/40",
    dotColor: "bg-violet-500",
  },
];

export function VisualJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Timeline line draw progress
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="relative z-10 container-custom">
        {/* Header */}
        <SectionHeading
          title="The Journey"
          subtitle="From concrete and steel to code and cloud, each chapter built on the last."
          centered
        />

        {/* Vertical Timeline */}
        <div className="mt-16 relative max-w-3xl mx-auto">
          {/* Central timeline line (background) */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-border/30" />

          {/* Animated progress line */}
          <motion.div
            className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-amber-500 via-cyan-500 to-violet-500 origin-top"
            style={{ height: lineHeight }}
          />

          {/* Timeline items */}
          <div className="space-y-16 md:space-y-24">
            {journeyStages.map((stage, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={cn(
                    "relative flex items-start gap-6 md:gap-12",
                    "md:items-center",
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      className={cn(
                        "w-4 h-4 rounded-full border-4 border-background",
                        stage.dotColor
                      )}
                      whileInView={{
                        scale: [1, 1.3, 1],
                        boxShadow: [
                          `0 0 0 0 ${stage.glowColor}`,
                          `0 0 0 10px transparent`,
                        ],
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  {/* Spacer for mobile layout */}
                  <div className="w-12 shrink-0 md:hidden" />

                  {/* Card */}
                  <motion.div
                    className={cn(
                      "flex-1 max-w-md",
                      "md:text-left md:pl-12"
                    )}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div
                      className={cn(
                        "p-6 rounded-2xl bg-card/80 backdrop-blur-sm border transition-all duration-300 hover:bg-card",
                        stage.borderColor
                      )}
                    >
                      {/* Icon and period row */}
                      <div
                        className={cn(
                          "flex items-center gap-4 mb-4",
                          "md:flex-row"
                        )}
                      >
                        <div
                          className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center",
                            stage.iconBg
                          )}
                        >
                          <stage.icon className={cn("h-6 w-6", stage.iconColor)} />
                        </div>
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-foreground/10 text-foreground/80">
                          {stage.period}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">
                        {stage.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {stage.description}
                      </p>

                      {/* Highlight */}
                      <div
                        className={cn(
                          "flex items-center gap-2 pt-4 border-t border-border/30",
                          "md:flex-row"
                        )}
                      >
                        <span
                          className={cn(
                            "w-2 h-2 rounded-full bg-gradient-to-r",
                            stage.color
                          )}
                        />
                        <span className="text-xs font-medium text-foreground/70">
                          {stage.highlight}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Empty space on opposite side for desktop */}
                  <div className="hidden md:block flex-1 max-w-md" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
