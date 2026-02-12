"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

interface ContactSectionProps {
  variant?: "default" | "minimal";
}

export function ContactSection({ variant = "default" }: ContactSectionProps) {
  if (variant === "minimal") {
    return (
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-6">
              Have a project in mind or just want to chat?
            </p>
            <Link
              href="mailto:awagih@outlook.com"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors font-medium"
            >
              Drop me a line
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card via-card to-card/80 border border-border/50 p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto"
        >
          {/* Background glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-foreground"
            >
              Let&apos;s talk about your project
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Whether you&apos;re building something new in construction tech or need
              a technical partner who understands the domain&mdash;I&apos;d like to hear
              about it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                href="mailto:awagih@outlook.com"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-lg transition-all hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98] btn-glow-orange"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send me an email
              </Link>
              <Link
                href="https://linkedin.com/in/aliwagih"
                target="_blank"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-card/50 px-8 py-4 text-base font-medium text-foreground transition-all hover:bg-card hover:border-border/80"
              >
                Connect on LinkedIn
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
