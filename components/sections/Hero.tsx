"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import ResponseBadge from "@/components/ui/ResponseBadge";
import { fadeUpStagger, staggerChildren, EASE_PREMIUM } from "@/lib/motion";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [showScene, setShowScene] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  useEffect(() => {
    // Defer the Three.js scene's heavy init off the critical loading path —
    // text is the LCP element and interactive controls shouldn't wait on WebGL setup.
    const idle =
      "requestIdleCallback" in window
        ? window.requestIdleCallback
        : (cb: () => void) => setTimeout(cb, 200);
    const id = idle(() => setShowScene(true));
    return () => {
      if ("cancelIdleCallback" in window) window.cancelIdleCallback(id as number);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-bg"
    >
      {showScene && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE_PREMIUM }}
          className="absolute inset-0"
        >
          <HeroScene scrollProgress={scrollYProgress} />
        </motion.div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-bg/75 to-transparent" />

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg/0 via-bg/0 to-bg"
      />

      <motion.div
        variants={staggerChildren(0.12, 0.4)}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8"
      >
        <motion.p
          variants={fadeUpStagger()}
          className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-silver"
        >
          Cosecant
        </motion.p>

        <motion.h1
          variants={fadeUpStagger()}
          className="max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[1.05] tracking-tight text-foreground"
        >
          Industrial AI software
          <br />
          for real businesses.
        </motion.h1>

        <motion.p
          variants={fadeUpStagger()}
          className="mt-8 max-w-xl text-lg leading-relaxed text-silver"
        >
          We design and engineer production-grade AI systems — voice, automation,
          and enterprise software built to run in the real world.
        </motion.p>

        <motion.div
          variants={fadeUpStagger()}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#portfolio" variant="primary">
            View Portfolio
          </MagneticButton>
          <MagneticButton href="#contact" variant="secondary">
            Book a Demo
          </MagneticButton>
        </motion.div>

        <motion.div variants={fadeUpStagger()} className="mt-6">
          <ResponseBadge />
        </motion.div>
      </motion.div>

      <motion.a
        href="#portfolio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-[0.2em] text-silver-dim transition-colors duration-300 hover:text-foreground"
      >
        Scroll
      </motion.a>
    </section>
  );
}
