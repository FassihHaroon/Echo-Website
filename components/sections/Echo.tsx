"use client";

import { motion } from "framer-motion";
import { ECHO_FEATURES } from "@/lib/constants";
import { fadeUp, fadeUpStagger, staggerChildren } from "@/lib/motion";
import CallTranscriptMockup from "@/components/echo/CallTranscriptMockup";
import OrderTicketMockup from "@/components/echo/OrderTicketMockup";
import AnalyticsMockup from "@/components/echo/AnalyticsMockup";

export default function Echo() {
  return (
    <section
      id="echo"
      className="relative border-t border-white/5 bg-bg-secondary px-6 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-silver-dim">
            Echo
          </span>
          <h2 className="mt-4 text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            The voice on the other end is Echo.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-silver">
            A restaurant-grade voice agent that answers, takes the order, and
            sends it straight to the kitchen — no hold music, no missed calls.
          </p>
        </motion.div>

        <motion.div
          variants={staggerChildren(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ECHO_FEATURES.map((feature, i) => (
            <motion.div
              key={feature.label}
              variants={fadeUpStagger()}
              className="border-b border-white/5 py-6"
            >
              <span className="font-mono text-xs text-silver-dim">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-medium text-foreground">
                {feature.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-silver-dim">
                {feature.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={staggerChildren(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          <motion.div variants={fadeUpStagger()} className="h-[360px]">
            <CallTranscriptMockup />
          </motion.div>
          <motion.div variants={fadeUpStagger()} className="h-[360px]">
            <OrderTicketMockup />
          </motion.div>
          <motion.div variants={fadeUpStagger()} className="h-[360px]">
            <AnalyticsMockup />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
