"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { fadeUp } from "@/lib/motion";
import ServiceRow from "@/components/ui/ServiceRow";

export default function Services() {
  return (
    <section
      id="services"
      className="relative border-t border-white/5 bg-bg py-24 sm:py-32"
    >
      <div className="site-container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 max-w-xl"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-silver-dim">
            Services
          </span>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Engineering, not consulting slides.
          </h2>
        </motion.div>

        <div>
          {SERVICES.map((service, index) => (
            <ServiceRow
              key={service.id}
              service={service}
              index={index}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
