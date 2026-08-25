"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TEAM_MEMBERS, type TeamMember } from "@/lib/constants";
import { fadeUp, fadeUpStagger, staggerChildren } from "@/lib/motion";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TeamCard({ member }: { member: TeamMember }) {
  // Hover opens the bio on desktop; tap/keyboard focus does the same on touch
  // and keyboard, so the info button is never a hover-only affordance.
  const [open, setOpen] = useState(false);
  const bioId = `bio-${member.name.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <motion.div variants={fadeUpStagger()}>
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover grayscale contrast-[1.05]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-3xl font-medium text-silver-dim">
              {initials(member.name)}
            </span>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-medium text-foreground">
            {member.name}
          </h3>
          <p className="mt-1 text-sm text-silver-dim">{member.role}</p>
        </div>

        {member.bio ? (
          <div className="relative shrink-0">
            <button
              type="button"
              aria-label={`About ${member.name}`}
              aria-expanded={open}
              aria-describedby={open ? bioId : undefined}
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              onFocus={() => setOpen(true)}
              onBlur={() => setOpen(false)}
              onClick={() => setOpen((prev) => !prev)}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-xs font-medium text-silver-dim transition-colors duration-300 hover:border-white/40 hover:text-foreground"
              style={{ transitionTimingFunction: "var(--ease-premium)" }}
            >
              i
            </button>

            <div
              id={bioId}
              role="tooltip"
              className={`absolute right-0 top-full z-20 mt-3 w-72 max-w-[min(18rem,calc(100vw-3rem))] rounded-xl border border-white/10 bg-bg-secondary/95 p-4 text-sm leading-relaxed text-silver shadow-2xl backdrop-blur-sm transition-all duration-300 ${
                open
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-1 opacity-0"
              }`}
              style={{ transitionTimingFunction: "var(--ease-premium)" }}
            >
              {member.bio}
            </div>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section
      id="team"
      className="relative border-t border-white/5 bg-bg-secondary py-24 sm:py-32"
    >
      <div className="site-container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-xl"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-silver-dim">
            Team
          </span>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            The people building it.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerChildren(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TEAM_MEMBERS.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
