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
    title: "Software is for people",
    description: "Every tool gets used by a real person having a real day. I build for them, not for the demo.",
  },
  {
    icon: Eye,
    title: "Plain beats clever",
    description: "A simple thing that works beats a clever thing nobody understands. I reach for the boring solution first.",
  },
  {
    icon: Target,
    title: "I own the outcome",
    description: "Shipping a feature isn't the point. I care whether it actually made someone's job easier.",
  },
  {
    icon: Zap,
    title: "Start small, learn fast",
    description: "I'd rather put a rough version in front of someone this week than a perfect one next quarter.",
  },
  {
    icon: Lightbulb,
    title: "Cut what you can",
    description: "Most of building well is deciding what not to build. I try to do less, better.",
  },
  {
    icon: Shield,
    title: "It has to hold up",
    description: "I came from work where failure had consequences. I don't ship things I wouldn't trust.",
  },
];


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
        eyebrow="About me"
        title={["I left construction project management", "to build software tools for the industries I know best."]}
        description={
          <p>
            For years I managed marine construction projects. Now I build
            software for the same kind of work, and I still think like someone
            who has to answer for what gets delivered.
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
                An unusual path to software
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Most software people came up through computer science. I came up
                through civil engineering, then years of project management on
                marine infrastructure, and only then computer science.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each step left me with something. Engineering taught me to
                respect constraints. Project management taught me how to deliver
                when a dozen people and a deadline are involved. Computer science
                gave me the tools to build the fixes I used to only complain
                about.
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
                  I started in civil engineering, building real things in rough
                  marine conditions. As a project manager I handled the budgets,
                  the negotiations, and the parts nobody warns you about, like
                  planning concrete pours around tide charts and weather windows.
                </p>
                <p>
                  What stuck with me was how much time got wasted. Data lived in
                  ten different places, decisions got made on last week's
                  numbers, and good engineers spent their afternoons
                  copy-pasting between spreadsheets.
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
                  It became obvious the biggest improvements wouldn't come from
                  better materials. They'd come from better information. So I
                  went back to school for computer science to build the tools I
                  kept wishing I had.
                </p>
                <p>
                  That's what I do now. I can sit in a site meeting and a code
                  review on the same day, and I build software that takes the
                  domain seriously instead of treating it as an afterthought,
                  using AI to kill the busywork rather than to look impressive.
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
            title="What I care about"
            subtitle="A few things I've come to believe after building in two very different worlds."
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
              Curious what I'm thinking about lately?
            </p>
            <Link
              href="/content"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors font-medium"
            >
              See my writing and videos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
