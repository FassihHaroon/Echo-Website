"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Routed through Link so cross-page targets (e.g. "/#contact" from a legal
// page) navigate client-side and still land on the hash.
const MotionLink = motion.create(Link);

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function MagneticButton({
  href,
  children,
  variant = "primary",
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 20, stiffness: 200, mass: 0.4 });
  const springY = useSpring(y, { damping: 20, stiffness: 200, mass: 0.4 });

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Padding/font-size are in the transition so callers (the navbar) can resize
  // the button on scroll; transform stays out of it, that's the magnetic spring.
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-[color,background-color,border-color,padding,font-size] duration-300";
  const variants = {
    primary: "bg-foreground text-bg hover:bg-silver",
    secondary: "border border-white/15 text-foreground hover:border-white/40",
  };

  return (
    <MotionLink
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </MotionLink>
  );
}
