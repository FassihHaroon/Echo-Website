"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { fadeUp } from "@/lib/motion";
import ProjectCard from "@/components/ui/ProjectCard";
import CallTranscriptMockup from "@/components/echo/CallTranscriptMockup";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-white/5 bg-bg px-6 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 max-w-xl"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-silver-dim">
            Projects
          </span>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Software built to run in production, not a demo.
          </h2>
        </motion.div>

        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            visual={<CallTranscriptMockup />}
          />
        ))}
      </div>
    </section>
  );
}
