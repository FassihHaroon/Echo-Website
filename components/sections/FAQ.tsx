"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeUpStagger, staggerChildren } from "@/lib/motion";

const FAQS = [
  {
    question: "What does Cosecant actually build?",
    answer:
      "Production-grade AI systems: voice agents like Echo, LLM integrations wired into existing tools, multi-tenant SaaS platforms, workflow automation, and the cloud infrastructure underneath all of it.",
  },
  {
    question: "How is Echo different from a regular phone menu or chatbot?",
    answer:
      "Echo holds a real conversation — it handles interruptions, substitutions, and follow-up questions instead of routing you through a menu tree. Orders land directly in the existing POS, and it answers instantly instead of putting callers on hold.",
  },
  {
    question: "How long does a project take to launch?",
    answer:
      "It depends on the integration surface. Wiring a voice agent into an existing POS moves faster than building a platform from scratch. We give a concrete timeline once we understand the scope on the first call.",
  },
  {
    question: "How fast do you respond to inquiries?",
    answer:
      "Within one business day. Most inquiries submitted through the contact form hear back the same day.",
  },
  {
    question: "Is our call and business data handled securely?",
    answer:
      "Yes. Data is processed by the AI model providers required to deliver the service (for example OpenAI, Anthropic, or Whisper for transcription), under their data handling terms, and we don't use client business data to train foundation models we don't control. Full detail is in our Privacy Policy.",
  },
];

export default function FAQ() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="relative border-t border-white/5 bg-bg px-6 py-24 sm:px-8 sm:py-32"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="mx-auto w-full max-w-3xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-silver-dim">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Common questions.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerChildren(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 flex flex-col"
        >
          {FAQS.map((faq) => (
            <motion.details
              key={faq.question}
              variants={fadeUpStagger()}
              className="group border-b border-white/10 py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-foreground marker:content-none">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-silver-dim transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-silver">
                {faq.answer}
              </p>
            </motion.details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
