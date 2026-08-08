"use client";

import { motion } from "framer-motion";
import { EASE_PREMIUM } from "@/lib/motion";

type AbstractPanelProps = {
  variant?: "sm" | "lg";
  active?: boolean;
  seed?: number;
  className?: string;
};

const CURVE_PATHS = [
  "M 10 90 C 40 10, 70 130, 100 50 S 160 10, 190 70",
  "M 10 40 C 50 110, 90 -10, 130 60 S 170 130, 190 40",
  "M 10 70 C 30 20, 90 20, 100 70 S 170 120, 190 60",
];

export default function AbstractPanel({
  variant = "sm",
  active = false,
  seed = 0,
  className = "",
}: AbstractPanelProps) {
  const path = CURVE_PATHS[seed % CURVE_PATHS.length];
  const height = variant === "lg" ? "h-[420px]" : "h-[280px]";

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border transition-colors duration-500 ${
        active ? "border-white/25 bg-white/[0.05]" : "border-white/10 bg-white/[0.02]"
      } ${height} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-70 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(120% 90% at 15% 10%, rgba(245,245,243,0.08) 0%, transparent 60%)",
          opacity: active ? 1 : 0.6,
        }}
      />
      <svg
        viewBox="0 0 200 140"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <motion.path
          d={path}
          fill="none"
          stroke="#f5f5f3"
          strokeWidth={0.6}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: active ? 0.55 : 0.35 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, ease: EASE_PREMIUM }}
        />
      </svg>
    </div>
  );
}
