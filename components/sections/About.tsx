"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeUpStagger, staggerChildren } from "@/lib/motion";
import AbstractPanel from "@/components/ui/AbstractPanel";

const PILLARS = [
  {
    title: "Mission",
    copy: "Build the software that industrial businesses run on — not another interface bolted onto a spreadsheet.",
  },
  {
    title: "Vision",
    copy: "AI that disappears into the workflow. The measure of success is fewer things for a business to think about, not more dashboards.",
  },
  {
    title: "Engineering Philosophy",
    copy: "Production-grade from day one. We design for the failure case first, then build the happy path.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative border-t border-white/5 bg-bg-secondary py-24 sm:py-32"
    >
      <div className="site-container grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div
          variants={staggerChildren(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            variants={fadeUpStagger()}
            className="text-xs uppercase tracking-[0.2em] text-silver-dim"
          >
            About
          </motion.span>

          <motion.h2
            variants={fadeUpStagger()}
            className="mt-4 text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            We solve the hard, unglamorous problems inside real businesses.
          </motion.h2>

          <motion.div
            variants={staggerChildren(0.08)}
            className="mt-12 flex flex-col gap-8"
          >
            {PILLARS.map((pillar) => (
              <motion.div key={pillar.title} variants={fadeUpStagger()}>
                <h3 className="text-sm font-medium uppercase tracking-[0.1em] text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 max-w-md text-base leading-relaxed text-silver">
                  {pillar.copy}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <AbstractPanel variant="lg" seed={1} />
        </motion.div>
      </div>
    </section>
  );
}
