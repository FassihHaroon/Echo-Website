"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { BUDGET_OPTIONS, SOCIAL_LINKS } from "@/lib/constants";
import { fadeUp, fadeUpStagger, staggerChildren } from "@/lib/motion";

type Status = "idle" | "loading" | "success" | "error";

const SOCIAL_ROW = [
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin.href },
  { label: "Instagram", href: SOCIAL_LINKS.instagram.href },
  { label: "WhatsApp", href: SOCIAL_LINKS.whatsapp.href },
  { label: SOCIAL_LINKS.email.address, href: SOCIAL_LINKS.email.href },
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          phone: data.get("phone"),
          budget: data.get("budget"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });

      const result = await res.json();

      if (!res.ok || !result.ok) {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section
      id="contact"
      className="relative border-t border-white/5 bg-bg px-6 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <motion.div
          variants={staggerChildren(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            variants={fadeUpStagger()}
            className="text-xs uppercase tracking-[0.2em] text-silver-dim"
          >
            Contact
          </motion.span>
          <motion.h2
            variants={fadeUpStagger()}
            className="mt-4 text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            Let&rsquo;s build something exceptional.
          </motion.h2>
          <motion.p variants={fadeUpStagger()} className="mt-5 max-w-sm text-base text-silver">
            Tell us about the problem you&rsquo;re solving. We&rsquo;ll get back to you within
            one business day.
          </motion.p>

          <motion.div variants={fadeUpStagger()} className="mt-12 flex flex-col gap-3">
            {SOCIAL_ROW.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-silver-dim transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          {/* Honeypot field — hidden from real users, left blank */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Company" name="company" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />
          </div>

          <label className="flex flex-col gap-2">
            <span className="text-sm text-silver-dim">Project Budget</span>
            <select
              name="budget"
              defaultValue=""
              className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-foreground outline-none transition-colors duration-300 focus:border-white/30"
            >
              <option value="" disabled>
                Select a range
              </option>
              {BUDGET_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm text-silver-dim">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              className="resize-none rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-silver-dim/60 focus:border-white/30"
              placeholder="What are you building?"
            />
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-bg transition-colors duration-300 hover:bg-silver disabled:opacity-60"
          >
            {status === "loading" ? "Sending…" : "Let's Build Something Exceptional"}
          </button>

          {status === "success" && (
            <p className="text-sm text-silver">Thanks — we&rsquo;ll be in touch shortly.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-silver-dim">{errorMessage}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm text-silver-dim">
        {label}
        {required && <span className="text-silver-dim/60"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-foreground outline-none transition-colors duration-300 focus:border-white/30"
      />
    </label>
  );
}
