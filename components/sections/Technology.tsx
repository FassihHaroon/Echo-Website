"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/constants";
import { fadeUp, staggerChildren, EASE_PREMIUM } from "@/lib/motion";
import TechLayer from "@/components/ui/TechLayer";

export default function Technology() {
  return (
    <section
      id="technology"
      className="relative border-t border-white/5 bg-bg-secondary py-24 sm:py-32"
    >
      <div className="site-container max-w-5xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 max-w-xl"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-silver-dim">
            Technology
          </span>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            A stack chosen for reliability, not resume points.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerChildren(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: EASE_PREMIUM }}
            style={{ originY: 0 }}
            className="absolute left-[11px] top-2 bottom-2 w-px bg-white/10"
          />
          {TECH_STACK.map((layer, index) => (
            <TechLayer key={layer.id} layer={layer} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
