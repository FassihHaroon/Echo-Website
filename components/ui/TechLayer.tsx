"use client";

import { motion } from "framer-motion";
import type { TechLayerData } from "@/lib/constants";
import { fadeUpStagger } from "@/lib/motion";

export default function TechLayer({
  layer,
  index,
}: {
  layer: TechLayerData;
  index: number;
}) {
  return (
    <motion.div variants={fadeUpStagger()} className="relative flex gap-6 pb-14 last:pb-0">
      <div className="relative flex w-6 flex-none flex-col items-center">
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.1 * index }}
          className="z-10 mt-1.5 h-2.5 w-2.5 rounded-full border border-foreground/60 bg-bg"
        />
      </div>

      <div className="pb-2">
        <span className="font-mono text-xs text-silver-dim">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-2 text-xl font-medium text-foreground sm:text-2xl">
          {layer.name}
        </h3>
        <p className="mt-2 max-w-md text-sm text-silver">{layer.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {layer.items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-silver-dim"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
