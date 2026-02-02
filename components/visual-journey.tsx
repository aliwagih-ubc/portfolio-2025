"use client";

import { motion } from "framer-motion";
import { useState } from "react";
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
    glowColor: "rgba(245, 158, 11, 0.4)",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-500",
    shadowColor: "shadow-amber-500/20",
  },
  {
    icon: Briefcase,
    title: "Consulting PM",
    period: "2022-Present",
    description:
      "Managed multi-million dollar marine infrastructure projects. Learned stakeholder navigation, risk management, and the art of shipping under pressure.",
    highlight: "High-stakes delivery expertise",
    color: "from-orange-500 to-red-500",
    glowColor: "rgba(249, 115, 22, 0.4)",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-500",
    shadowColor: "shadow-orange-500/20",
  },
  {
    icon: GraduationCap,
    title: "CS Degree",
    period: "2023-2026",
    description:
      "Went back to fundamentals. Deep-diving into algorithms, systems design, and software craftsmanship while building real products on the side.",
    highlight: "Systems thinking & craft",
    color: "from-cyan-500 to-blue-500",
    glowColor: "rgba(6, 182, 212, 0.4)",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-500",
    shadowColor: "shadow-cyan-500/20",
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    period: "2025-Present",
    description:
      "Building AI-powered tools for the industries I know. Bridging the gap between engineering reality and modern software capabilities.",
    highlight: "Bridging physical & digital",
    color: "from-violet-500 to-purple-600",
    glowColor: "rgba(139, 92, 246, 0.4)",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-500",
    shadowColor: "shadow-violet-500/20",
  },
];

export function VisualJourney() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="relative z-10 w-full">
        {/* Header */}
        <div className="container-custom">
          <SectionHeading
            title="The Journey"
            subtitle="From concrete and steel to code and cloud, each chapter built on the last."
          />
        </div>

        {/* Cards container */}
        <div className="mt-12 flex justify-center items-center gap-4 px-4">
          {journeyStages.map((stage, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={stage.title}
                className="relative cursor-pointer"
                onClick={() => setActiveIndex(index)}
                animate={{
                  width: isActive ? 560 : 120,
                  opacity: isActive ? 1 : 0.5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 30,
                }}
              >
                {/* Card glow effect */}
                <motion.div
                  className="absolute -inset-3 rounded-3xl blur-2xl pointer-events-none"
                  animate={{
                    opacity: isActive ? 0.4 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  style={{
                    background: `radial-gradient(circle, ${stage.glowColor} 0%, transparent 70%)`,
                  }}
                />

                {/* Card */}
                <motion.div
                  className={cn(
                    "relative h-[420px] rounded-2xl bg-card/90 backdrop-blur-md border overflow-hidden transition-colors duration-300",
                    isActive ? "border-foreground/20" : "border-border/20 hover:border-border/40"
                  )}
                  animate={{
                    boxShadow: isActive
                      ? `0 30px 60px -15px ${stage.glowColor}`
                      : "0 0 0 0 transparent",
                  }}
                  transition={{ duration: 0.4 }}
                  whileHover={!isActive ? { scale: 1.02 } : {}}
                >
                  {/* Collapsed state - just icon and title */}
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center p-4"
                    animate={{
                      opacity: isActive ? 0 : 1,
                      pointerEvents: isActive ? "none" : "auto",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                        stage.iconBg
                      )}
                    >
                      <stage.icon className={cn("h-6 w-6", stage.iconColor)} />
                    </div>
                    <span
                      className="text-xs font-medium text-muted-foreground text-center"
                      style={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                      }}
                    >
                      {stage.title}
                    </span>
                  </motion.div>

                  {/* Expanded state - full content */}
                  <motion.div
                    className="absolute inset-0 p-8 flex flex-col"
                    animate={{
                      opacity: isActive ? 1 : 0,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                    transition={{ duration: 0.3, delay: isActive ? 0.1 : 0 }}
                  >
                    {/* Chapter number */}
                    <span className="absolute top-6 right-6 text-7xl font-bold text-foreground/5 font-display">
                      0{index + 1}
                    </span>

                    {/* Icon with pulse */}
                    <motion.div
                      className={cn(
                        "w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative",
                        stage.iconBg
                      )}
                      animate={{
                        scale: isActive ? [1, 1.05, 1] : 1,
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <stage.icon className={cn("h-8 w-8", stage.iconColor)} />

                      {/* Pulse ring */}
                      {isActive && (
                        <motion.div
                          className={cn("absolute inset-0 rounded-xl", stage.iconBg)}
                          animate={{
                            scale: [1, 1.5],
                            opacity: [0.4, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                        />
                      )}
                    </motion.div>

                    {/* Period */}
                    <span className="inline-flex self-start text-sm font-medium px-3 py-1.5 rounded-full mb-4 bg-foreground/10 text-foreground">
                      {stage.period}
                    </span>

                    {/* Title */}
                    <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                      {stage.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-muted-foreground leading-relaxed flex-grow">
                      {stage.description}
                    </p>

                    {/* Highlight */}
                    <div className="flex items-center gap-3 pt-6 border-t border-border/30">
                      <motion.span
                        className={cn(
                          "w-2 h-2 rounded-full bg-gradient-to-r",
                          stage.color
                        )}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="text-sm font-medium text-foreground/80">
                        {stage.highlight}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Clickable dot indicators */}
        <div className="mt-10 flex justify-center gap-4">
          {journeyStages.map((stage, index) => (
            <button
              key={stage.title}
              onClick={() => setActiveIndex(index)}
              className="p-2 group"
              aria-label={`View ${stage.title}`}
            >
              <motion.div
                className={cn(
                  "w-3 h-3 rounded-full",
                  index === activeIndex
                    ? "bg-foreground"
                    : "bg-foreground/20 group-hover:bg-foreground/40"
                )}
                animate={{
                  scale: index === activeIndex ? [1, 1.3, 1] : 1,
                }}
                transition={{
                  duration: 1.5,
                  repeat: index === activeIndex ? Infinity : 0,
                  ease: "easeInOut",
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
