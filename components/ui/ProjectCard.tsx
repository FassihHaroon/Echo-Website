"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { Project } from "@/lib/constants";
import { fadeUpStagger, staggerChildren } from "@/lib/motion";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ProjectCard({
  project,
  visual,
}: {
  project: Project;
  visual: ReactNode;
}) {
  return (
    <motion.div
      variants={staggerChildren(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 items-center gap-10 rounded-3xl border border-white/10 bg-bg-secondary/60 p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14"
    >
      <div>
        <motion.span
          variants={fadeUpStagger()}
          className="text-xs uppercase tracking-[0.2em] text-silver-dim"
        >
          Featured Project
        </motion.span>

        <motion.h3
          variants={fadeUpStagger()}
          className="mt-4 text-4xl font-medium tracking-tight text-foreground sm:text-5xl"
        >
          {project.name}
        </motion.h3>

        <motion.p
          variants={fadeUpStagger()}
          className="mt-4 text-lg text-silver"
        >
          {project.tagline}
        </motion.p>

        <motion.p
          variants={fadeUpStagger()}
          className="mt-3 max-w-md text-sm leading-relaxed text-silver-dim"
        >
          {project.description}
        </motion.p>

        <motion.div
          variants={fadeUpStagger()}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href={project.caseStudyHref} variant="primary">
            View Case Study
          </MagneticButton>
          <MagneticButton href={project.demoHref} variant="secondary">
            Book a Demo
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        variants={fadeUpStagger()}
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.4 }}
        className="h-[320px] sm:h-[380px]"
      >
        {visual}
      </motion.div>
    </motion.div>
  );
}
