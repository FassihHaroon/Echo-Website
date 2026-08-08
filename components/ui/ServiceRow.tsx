"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Service } from "@/lib/constants";
import { fadeUp, EASE_PREMIUM } from "@/lib/motion";
import AbstractPanel from "@/components/ui/AbstractPanel";

export default function ServiceRow({
  service,
  index,
  reverse,
}: {
  service: Service;
  index: number;
  reverse: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      tabIndex={0}
      role="button"
      aria-expanded={expanded}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onFocus={() => setExpanded(true)}
      onBlur={() => setExpanded(false)}
      onClick={() => setExpanded((v) => !v)}
      className={`grid grid-cols-1 items-center gap-8 border-b border-white/5 py-12 outline-none first:pt-0 last:border-b-0 lg:grid-cols-2 lg:gap-16 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <span className="font-mono text-xs text-silver-dim">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-3 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
          {service.title}
        </h3>
        <p className="mt-3 max-w-md text-base text-silver">{service.summary}</p>

        <motion.ul
          initial={false}
          animate={{
            height: expanded ? "auto" : 0,
            opacity: expanded ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: EASE_PREMIUM }}
          className="mt-4 flex max-w-md flex-col gap-2 overflow-hidden"
        >
          {service.capabilities.map((capability) => (
            <li
              key={capability}
              className="border-t border-white/5 pt-2 text-sm text-silver-dim first:border-t-0 first:pt-0"
            >
              {capability}
            </li>
          ))}
        </motion.ul>
      </div>

      <AbstractPanel seed={index} active={expanded} />
    </motion.div>
  );
}
