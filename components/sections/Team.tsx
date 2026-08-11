"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TEAM_MEMBERS } from "@/lib/constants";
import { fadeUp, fadeUpStagger, staggerChildren } from "@/lib/motion";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Team() {
  return (
    <section
      id="team"
      className="relative border-t border-white/5 bg-bg-secondary px-6 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto w-full max-w-6xl">
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
          className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TEAM_MEMBERS.map((member) => (
            <motion.div key={member.name + member.role} variants={fadeUpStagger()}>
              <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-3xl font-medium text-silver-dim">
                      {initials(member.name)}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="mt-4 text-base font-medium text-foreground">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-silver-dim">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
