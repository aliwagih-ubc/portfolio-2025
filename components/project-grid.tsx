"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

interface ProjectGridProps {
  projects: Project[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
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

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {projects.map((project) => (
        <motion.div key={project.slug} variants={itemVariants}>
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
}
