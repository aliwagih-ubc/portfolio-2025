"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { InteractiveHeadshot } from "@/components/interactive-headshot";
import { SectionHeading } from "@/components/section-heading";
import { ArrowRight, Heart, Target, Zap, Shield, Eye, Lightbulb } from "lucide-react";

const coreValues = [
  {
    icon: Heart,
    title: "Empathy for the end-user",
    description: "Software is for people. I build with their reality in mind.",
  },
  {
    icon: Eye,
    title: "Clarity over cleverness",
    description: "Simple, understandable solutions beat complex ones.",
  },
  {
    icon: Target,
    title: "Ownership of outcomes",
    description: "I care about results, not just shipping features.",
  },
  {
    icon: Zap,
    title: "Bias for action",
    description: "Start small, iterate fast, learn from what's real.",
  },
  {
    icon: Lightbulb,
    title: "Rigorous simplicity",
    description: "The simplest solution that works is often the best.",
  },
  {
    icon: Shield,
    title: "Reliability matters",
    description: "From bridges to code—failure isn't an option.",
  },
];

const techStack = {
  frontend: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
  backend: ["Node.js", "Python", "Supabase", "PostgreSQL", "Prisma"],
  ai: ["OpenAI API", "LangChain", "RAG Patterns", "Vercel AI SDK"],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function About() {
  return (
    <div className="flex flex-col">
      <HeroSection
        eyebrow="My Journey"
        title="From concrete and steel to code and cloud."
        description={
          <p>
            I spent years managing complex marine construction projects. Now, I
            use that experience to build software that actually solves the
            problems I saw on site every day.
          </p>
        }
        compact
      />

      {/* Interactive Headshot Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <InteractiveHeadshot />
            <div className="space-y-6">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Two worlds, one perspective
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                My path is not typical for a software builder. I started in civil
                engineering, moved into project management on complex marine
                infrastructure, and then pivoted to computer science.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each chapter taught me something essential: engineering gave me
                discipline and respect for constraints; PM taught me stakeholder
                navigation and delivery under pressure; CS gave me the tools to
                build solutions at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-16">
            {/* The Background */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                The Background
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My career started in civil engineering, where production
                  meant delivering tangible infrastructure in harsh marine
                  environments. As a Project Manager, I dealt with multi-million
                  dollar budgets, complex stakeholder negotiations, and the
                  constant pressure of tide charts and weather windows.
                </p>
                <p>
                  I saw first-hand how much friction exists in construction
                  workflows. Data is siloed, decisions are made on stale
                  information, and brilliant engineers spend hours copy-pasting
                  spreadsheet rows.
                </p>
              </div>
            </motion.div>

            {/* The Pivot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                The Pivot
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I realized that the biggest levers for improvement were not
                  better concrete mixes, but better information systems. I went
                  back to school for Computer Science to build the tools I
                  wished I had.
                </p>
                <p>
                  Today, I am bridging the gap. I speak the language of the job
                  site and the language of the pull request. I build software
                  that respects deep domain constraints while leveraging modern
                  AI to automate the drudgery.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32">
        <div className="container-custom">
          <SectionHeading
            title="Core Values"
            subtitle="The principles that guide how I build."
            centered
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            {coreValues.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="p-6 rounded-xl bg-card/50 border border-border/50 hover:bg-card hover:border-border transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack (Subtle Footer) */}
      <section className="py-16 border-t border-border/40 bg-card/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8 text-center">
              Technical Stack
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h5 className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-3">
                  Frontend
                </h5>
                <div className="flex flex-wrap gap-2">
                  {techStack.frontend.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-muted-foreground bg-muted/30 px-2.5 py-1 rounded-md border border-border/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-3">
                  Backend & Data
                </h5>
                <div className="flex flex-wrap gap-2">
                  {techStack.backend.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-muted-foreground bg-muted/30 px-2.5 py-1 rounded-md border border-border/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-3">
                  AI & Tools
                </h5>
                <div className="flex flex-wrap gap-2">
                  {techStack.ai.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-muted-foreground bg-muted/30 px-2.5 py-1 rounded-md border border-border/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA to Content */}
      <section className="py-16 md:py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground mb-6">
              Curious about what I am thinking about?
            </p>
            <Link
              href="/content"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors font-medium"
            >
              Check out my content
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
