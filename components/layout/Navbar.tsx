"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { NAV_ITEMS, SECTION_IDS, COMPANY } from "@/lib/constants";
import { EASE_PREMIUM } from "@/lib/motion";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(SECTION_IDS[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE_PREMIUM, delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 sm:px-6"
    >
      <div
        className={`mt-4 flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 bg-black/40 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled ? "px-4 py-2 sm:px-5" : "px-5 py-3 sm:px-7 sm:py-4"
        }`}
      >
        <a
          href="#home"
          className="flex items-center gap-2.5 shrink-0"
          aria-label={`${COMPANY.name} home`}
        >
          <Image
            src="/logo.jpeg"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 rounded-full object-cover"
            priority
          />
          <span className="text-sm font-medium tracking-wide text-foreground">
            {COMPANY.name}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className="relative px-3.5 py-1.5 text-sm text-silver transition-colors duration-300 hover:text-foreground"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ duration: 0.4, ease: EASE_PREMIUM }}
                  />
                )}
                <span className={`relative ${isActive ? "text-foreground" : ""}`}>
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <MagneticButton
            href="#contact"
            variant="primary"
            className="hidden !px-4 !py-2 text-xs sm:!px-5 md:inline-flex"
          >
            Book a Demo
          </MagneticButton>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden flex h-8 w-8 flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`h-px w-4 bg-foreground transition-transform duration-300 ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-4 bg-foreground transition-transform duration-300 ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.nav
          aria-label="Mobile"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: EASE_PREMIUM }}
          className="absolute left-4 right-4 top-[calc(100%+0.5rem)] flex flex-col rounded-2xl border border-white/10 bg-black/80 p-2 backdrop-blur-xl md:hidden"
        >
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mb-1 rounded-xl bg-foreground px-4 py-3 text-center text-sm font-medium text-bg transition-colors hover:bg-silver"
          >
            Book a Demo
          </a>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm text-silver transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}
