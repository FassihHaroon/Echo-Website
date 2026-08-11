"use client";

import { motion } from "framer-motion";
import { EASE_PREMIUM } from "@/lib/motion";

const LINES = [
  { speaker: "Caller", text: "Hi, can I get a large pepperoni pizza?" },
  { speaker: "Echo", text: "Sure — large pepperoni. Anything else?" },
  { speaker: "Caller", text: "Add a garlic bread and a coke." },
  { speaker: "Echo", text: "Got it. That's $24.50, ready in 20 min." },
];

const WAVEFORM_HEIGHTS = [6, 14, 9, 18, 11, 16, 7, 13];

export default function CallTranscriptMockup() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.15em] text-silver-dim">
          Live Call
        </span>
        <div className="flex items-center gap-1.5">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-foreground"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-xs text-silver-dim">00:14</span>
        </div>
      </div>

      <div className="mt-4 flex items-end gap-[3px]">
        {WAVEFORM_HEIGHTS.map((h, i) => (
          <motion.span
            key={i}
            className="w-[3px] rounded-full bg-silver-dim"
            style={{ height: h }}
            animate={{ scaleY: [0.4, 1, 0.4] }}
            transition={{
              duration: 1.1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.08,
            }}
          />
        ))}
      </div>

      <div className="mt-5 flex min-w-0 flex-1 flex-col gap-3">
        {LINES.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: EASE_PREMIUM, delay: 0.15 * i }}
            className={`flex w-full min-w-0 flex-col ${
              line.speaker === "Echo" ? "items-end text-right" : "items-start"
            }`}
          >
            <span className="mb-1 block text-[10px] uppercase tracking-wide text-silver-dim">
              {line.speaker}
            </span>
            <p
              className={`max-w-[85%] min-w-0 break-words rounded-xl px-3 py-2 text-sm leading-snug ${
                line.speaker === "Echo"
                  ? "bg-foreground/10 text-foreground"
                  : "bg-white/5 text-silver"
              }`}
            >
              {line.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
