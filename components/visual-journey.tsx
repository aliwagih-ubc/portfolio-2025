"use client";

import { motion } from "framer-motion";
import {
  HardHat,
  Briefcase,
  GraduationCap,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "./section-heading";

const journeyStages = [
  {
    icon: HardHat,
    title: "Civil Engineering",
    period: "2016-2020",
    description:
      "Started with boots on the ground. Learned what it means to build things that can't fail—bridges, marine structures, infrastructure that people depend on.",
    highlight: "Foundation in engineering discipline",
    color: "from-amber-500 to-orange-600",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-500",
  },
  {
    icon: Briefcase,
    title: "Consulting PM",
    period: "2020-2023",
    description:
      "Managed multi-million dollar marine infrastructure projects. Learned stakeholder navigation, risk management, and the art of shipping under pressure.",
    highlight: "High-stakes delivery expertise",
    color: "from-orange-500 to-red-500",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-500",
  },
  {
    icon: GraduationCap,
    title: "CS Degree",
    period: "2023-Present",
    description:
      "Went back to fundamentals. Deep-diving into algorithms, systems design, and software craftsmanship while building real products on the side.",
    highlight: "Systems thinking & craft",
    color: "from-cyan-500 to-blue-500",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-500",
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    period: "Now",
    description:
      "Building AI-powered tools for the industries I know. Bridging the gap between engineering reality and modern software capabilities.",
    highlight: "Bridging physical & digital",
    color: "from-violet-500 to-purple-600",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function VisualJourney() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container-custom relative z-10">
        <SectionHeading
          title="The Journey"
          subtitle="From concrete and steel to code and cloud—each chapter built on the last."
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4"
        >
          {journeyStages.map((stage, index) => (
            <motion.div
              key={stage.title}
              variants={itemVariants}
              className="relative group"
            >
              {/* Connection line (desktop) */}
              {index < journeyStages.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px">
                  <div className="w-full h-full bg-gradient-to-r from-border via-border/50 to-transparent" />
                  <ArrowRight className="absolute -right-2 top-1/2 -translate-y-1/2 h-3 w-3 text-border" />
                </div>
              )}

              {/* Card */}
              <div className="h-full p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-300 hover:bg-card hover:border-border group-hover:shadow-lg">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl ${stage.iconBg} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
                >
                  <stage.icon className={`h-7 w-7 ${stage.iconColor}`} />
                </div>

                {/* Period badge */}
                <span className="inline-block text-xs font-medium text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-full mb-3">
                  {stage.period}
                </span>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {stage.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {stage.description}
                </p>

                {/* Highlight */}
                <div className="flex items-center gap-2 text-xs font-medium">
                  <span
                    className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${stage.color}`}
                  />
                  <span className="text-foreground/80">{stage.highlight}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
