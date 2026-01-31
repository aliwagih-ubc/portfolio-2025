"use client";

import Link from "next/link";
import { Project } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FeaturedProjectCardProps {
    project: Project;
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
        >
            {/* Inspection stripe */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2aa3a1] via-[#f05a28] to-[#2aa3a1]"></div>

            <div className="relative panel-surface cut-corner p-8 md:p-12 transition-all group-hover:border-[#f5f1e8]/30">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                    <div className="flex-1">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-block text-[11px] font-mono text-[#cfc7ba] tracking-[0.24em] uppercase mb-4"
                        >
                            Featured Portfolio
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-3xl md:text-4xl font-display font-bold text-[#f5f1e8] mb-4 group-hover:text-[#f05a28] transition-colors"
                        >
                            {project.displayTitle}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg text-[#cfc7ba] font-body leading-relaxed max-w-2xl"
                        >
                            {project.oneLiner}
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Link
                            href={project.link || "/projects"}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#f05a28] text-[#0b0f12] font-semibold rounded-none hover:bg-[#f57547] transition-all group/link"
                        >
                            View Project
                            <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>

                {/* Tech tags */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap gap-2 pt-6 border-t border-[#f5f1e8]/15"
                >
                    {project.tags.slice(0, 5).map((tag, index) => (
                        <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                            className="text-xs font-mono text-[#f5f1e8] bg-[#0f151b] px-3 py-1.5 border border-[#f5f1e8]/15"
                        >
                            {tag}
                        </motion.span>
                    ))}
                    {project.tags.length > 5 && (
                        <span className="text-xs font-mono text-[#cfc7ba] px-3 py-1.5">
                            +{project.tags.length - 5}
                        </span>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
}
