"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hoveringInteractive, setHoveringInteractive] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 30, stiffness: 300, mass: 0.5 });
  const springY = useSpring(cursorY, { damping: 30, stiffness: 300, mass: 0.5 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setEnabled(isFinePointer && !prefersReducedMotion);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      const target = e.target as HTMLElement;
      setHoveringInteractive(Boolean(target.closest("a, button, [data-cursor-interactive]")));
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [enabled, cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      animate={{
        scale: hoveringInteractive ? 2.2 : 1,
        opacity: hoveringInteractive ? 0.5 : 0.9,
      }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground mix-blend-difference"
    />
  );
}
