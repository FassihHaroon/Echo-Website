"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
  decimals?: number;
};

const STATS: Stat[] = [
  { label: "Calls handled today", value: 312 },
  { label: "Avg. order value", value: 24.5, suffix: "$", decimals: 2 },
  { label: "Languages served", value: 6 },
];

function CountUpValue({ stat, active }: { stat: Stat; active: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    const controls = animate(0, stat.value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [active, stat.value]);

  const formatted = stat.decimals ? display.toFixed(stat.decimals) : Math.round(display);

  return (
    <span className="text-2xl font-medium text-foreground">
      {stat.suffix === "$" ? "$" : ""}
      {formatted}
    </span>
  );
}

export default function AnalyticsMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5"
    >
      <span className="text-xs uppercase tracking-[0.15em] text-silver-dim">
        Analytics
      </span>

      <div className="mt-5 flex flex-1 flex-col justify-center gap-6">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * i }}
          >
            <CountUpValue stat={stat} active={inView} />
            <p className="mt-1 text-xs text-silver-dim">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
