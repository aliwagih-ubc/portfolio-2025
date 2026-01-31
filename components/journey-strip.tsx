"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, HardHat, BrainCircuit } from "lucide-react";

const timelineItems = [
    {
        icon: HardHat,
        label: "Civil Engineering",
        description: "Boots on the ground reality",
        date: "2016-2020",
    },
    {
        icon: Briefcase,
        label: "Consulting PM",
        description: "High-stakes delivery",
        date: "2020-2023",
    },
    {
        icon: GraduationCap,
        label: "CS Degree",
        description: "Systems thinking & craft",
        date: "2023-Present",
    },
    {
        icon: BrainCircuit,
        label: "AI Solutions",
        description: "Bridging physical & digital",
        date: "Now",
    },
];

export function JourneyStrip() {
    return (
        <section className="border-y border-border/60 bg-muted/20">
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
                    {/* Connecting line (desktop only) */}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-border/50 hidden md:block -z-10 -translate-y-[24px]" />

                    {timelineItems.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-row md:flex-col items-center md:text-center p-4 md:p-0 gap-4 md:gap-0 bg-background/50 md:bg-transparent rounded-lg border md:border-none border-border/50"
                        >
                            <div className="h-12 w-12 rounded-full bg-background border border-border flex items-center justify-center shadow-sm z-10 md:mb-4 shrink-0">
                                <item.icon className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">{item.label}</h3>
                                <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
