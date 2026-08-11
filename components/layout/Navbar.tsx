"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SECTION_IDS, COMPANY } from "@/lib/constants";
import { EASE_PREMIUM } from "@/lib/motion";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(SECTION_IDS[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // The sections only exist on the home page, so a bare "#about" resolves
  // against the current route (e.g. /privacy-policy#about) and goes nowhere.
  const onHome = pathname === "/";
  const sectionHref = (hash: string) => (onHome ? hash : `/${hash}`);

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
        className={`mt-4 flex w-full items-center justify-between rounded-full border border-white/10 bg-black/40 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? "max-w-4xl px-4 py-2 sm:px-5"
            : "max-w-6xl px-5 py-4 sm:px-8 sm:py-5"
        }`}
      >
        <Link
          href={sectionHref("#home")}
          className="flex items-center gap-2.5 shrink-0"
          aria-label={`${COMPANY.name} home`}
        >
          <Image
            src="/logo.jpeg"
            alt=""
            width={40}
            height={40}
            className={`rounded-full object-cover transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              scrolled ? "h-7 w-7" : "h-9 w-9"
            }`}
            priority
          />
          <span
            className={`font-medium tracking-wide text-foreground transition-all duration-500 ${
              scrolled ? "text-sm" : "text-base"
            }`}
          >
            {COMPANY.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = onHome && activeSection === item.href.slice(1);
            return (
              <Link
                key={item.href}
                href={sectionHref(item.href)}
                className={`relative text-silver transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-foreground ${
                  scrolled
                    ? "px-3.5 py-1.5 text-sm"
                    : "px-3 py-2 text-sm xl:px-4 xl:text-[0.9375rem]"
                }`}
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
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          {/* Wrapper owns the responsive display — MagneticButton's own
              `inline-flex` outranks a `hidden` passed through className. */}
          <span className="hidden lg:block">
            <MagneticButton
              href={sectionHref("#contact")}
              variant="primary"
              className={
                scrolled
                  ? "!px-4 !py-2 text-xs sm:!px-5"
                  : "!px-5 !py-2.5 text-sm sm:!px-6"
              }
            >
              Book a Demo
            </MagneticButton>
          </span>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="lg:hidden flex h-8 w-8 flex-col items-center justify-center gap-1.5"
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
          className="absolute left-4 right-4 top-[calc(100%+0.5rem)] mx-auto flex max-w-lg flex-col rounded-2xl border border-white/10 bg-black/80 p-2 backdrop-blur-xl lg:hidden"
        >
          <Link
            href={sectionHref("#contact")}
            onClick={() => setMenuOpen(false)}
            className="mb-1 rounded-xl bg-foreground px-4 py-3 text-center text-sm font-medium text-bg transition-colors hover:bg-silver"
          >
            Book a Demo
          </Link>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={sectionHref(item.href)}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm text-silver transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}
