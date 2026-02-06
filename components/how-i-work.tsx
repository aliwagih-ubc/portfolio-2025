"use client";

import { motion } from "framer-motion";
import { Compass, Hammer, ShieldCheck, ArrowRight } from "lucide-react";
import { SectionHeading } from "./section-heading";

const pillars = [
  {
    icon: Compass,
    title: "Empathy-First Discovery",
    description:
      "I map the real pain, understand constraints, and ensure we solve the right problem for people in the field.",
    accent: "border-t-cyan-500",
  },
  {
    icon: Hammer,
    title: "Build the Right Thing",
    description:
      "I focus on the smallest useful version. Rapid prototyping and tight loops ensure adoption and prevent wasted effort.",
    accent: "border-t-orange-500",
  },
  {
    icon: ShieldCheck,
    title: "Ship with Reliability",
    description:
      "Civil engineering taught me failure isn't an option. I bring that rigour to software, handling edge cases and ensuring stability.",
    accent: "border-t-violet-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function HowIWork() {
  return (
    <section className="py-16 md:py-24 relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />

      <div className="container-custom relative z-10">
        <SectionHeading
          title="How I Work"
          subtitle="Software success isn't just code. It's understanding the reality of where that code&nbsp;lives."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              variants={cardVariants}
              className="group relative"
            >
              {/* Arrow connector (desktop) */}
              {index < pillars.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 z-10 w-8 h-8 items-center justify-center -translate-y-1/2 translate-x-1/2">
                  <ArrowRight className="h-6 w-6 text-accent/80" />
                </div>
              )}

              <div
                className={`h-full p-8 rounded-2xl bg-card/50 border border-border/50 border-t-2 ${pillar.accent} backdrop-blur-sm transition-all duration-300 hover:bg-card hover:border-border hover:shadow-lg`}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-muted/50 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <pillar.icon className="h-7 w-7 text-foreground" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
