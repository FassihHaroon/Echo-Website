"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { COMPANY } from "@/lib/constants";
import { EASE_PREMIUM } from "@/lib/motion";

const MIN_DISPLAY_MS = 600;

export default function SiteLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const start = Date.now();

    const finish = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
      window.setTimeout(() => {
        setIsLoading(false);
        document.documentElement.style.overflow = "";
      }, remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      window.removeEventListener("load", finish);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: EASE_PREMIUM }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-bg"
          aria-hidden="true"
        >
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_PREMIUM, delay: 0.1 }}
            className="text-sm font-medium uppercase tracking-[0.3em] text-foreground"
          >
            {COMPANY.name}
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease: EASE_PREMIUM, delay: 0.15 }}
            className="absolute bottom-[calc(50%-2.75rem)] h-px w-24 origin-left bg-white/20"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
