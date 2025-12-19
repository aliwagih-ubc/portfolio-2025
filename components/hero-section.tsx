"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
    eyebrow: string;
    title: string;
    description: React.ReactNode;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    status?: string;
}

export function HeroSection({
    eyebrow,
    title,
    description,
    primaryCta,
    secondaryCta,
    status,
}: HeroSectionProps) {
    return (
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
            <div className="container-custom relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl"
                >
                    <span className="inline-block text-sm font-medium text-accent mb-6 tracking-wide">
                        {eyebrow}
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-8 text-balance leading-tight">
                        {title}
                    </h1>

                    <div className="text-lg md:text-xl text-muted-foreground mb-10 space-y-4 max-w-2xl leading-relaxed">
                        {description}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-16">
                        {primaryCta && (
                            <Link
                                href={primaryCta.href}
                                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-transform hover:translate-y-[-1px] hover:shadow-lg active:translate-y-[0px]"
                            >
                                {primaryCta.label}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        )}

                        {secondaryCta && (
                            <Link
                                href={secondaryCta.href}
                                className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                            >
                                {secondaryCta.label}
                            </Link>
                        )}
                    </div>

                    {status && (
                        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full border border-border/50">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            {status}
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
