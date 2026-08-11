import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ECHO_FEATURES } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import MagneticButton from "@/components/ui/MagneticButton";
import CallTranscriptMockup from "@/components/echo/CallTranscriptMockup";
import OrderTicketMockup from "@/components/echo/OrderTicketMockup";
import AnalyticsMockup from "@/components/echo/AnalyticsMockup";

export const metadata: Metadata = buildMetadata({
  title: "Echo Case Study — How AI Voice Ordering Fixed the Restaurant Phone | Cosecant",
  description:
    "Why restaurants lose orders to missed calls and hold times, and how Cosecant's Echo agent answers every call, takes the order correctly, and sends it to the kitchen.",
  path: "/case-studies/echo",
});

const PROBLEMS = [
  {
    title: "The phone is a bottleneck, not a channel.",
    copy: "During a dinner rush, staff are cooking and expediting — not answering calls. Every ring competing with the kitchen for attention means calls go to hold, voicemail, or nowhere.",
  },
  {
    title: "A missed call is a lost order.",
    copy: "Unlike a website visitor who can wait, a hungry caller who hits hold music usually just calls the next restaurant. There's no cart to recover, no follow-up email — the order is simply gone.",
  },
  {
    title: "Manual order-taking doesn't scale or stay accurate.",
    copy: "A rushed staffer scribbling an order between tickets is how modifiers get dropped, addresses get mistyped, and \"no onions\" doesn't make it to the kitchen.",
  },
  {
    title: "Coverage gaps outside peak hours and languages.",
    copy: "Late nights, understaffed shifts, and customers who don't speak the same language as whoever picks up all turn into the same outcome: no order taken.",
  },
];

export default function EchoCaseStudyPage() {
  return (
    <article className="relative">
      <div className="site-container max-w-4xl pt-24 sm:pt-32">
        <Breadcrumbs items={[{ label: "Echo Case Study", href: "/case-studies/echo" }]} />

        <span className="mt-8 block text-xs uppercase tracking-[0.2em] text-silver-dim">
          Case Study
        </span>
        <h1 className="mt-4 text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl">
          Echo: turning the restaurant phone from a liability into a channel.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver">
          Every restaurant call that goes unanswered is a customer choosing
          somewhere else to eat. Echo was built to make sure that never
          happens — and to prove a voice agent can run in a real kitchen, not
          just a demo.
        </p>
      </div>

      <section className="site-container mt-20 max-w-4xl">
        <h2 className="text-sm font-medium uppercase tracking-[0.15em] text-foreground">
          The Problem
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {PROBLEMS.map((problem) => (
            <div key={problem.title} className="border-t border-white/10 pt-5">
              <h3 className="text-base font-medium text-foreground">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-silver-dim">
                {problem.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="site-container mt-24 max-w-4xl">
        <h2 className="text-sm font-medium uppercase tracking-[0.15em] text-foreground">
          Why Echo Becomes Handy
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-silver">
          Echo answers on the first ring, every time — including during the
          exact rush windows when a human line would be busiest. It runs the
          same natural conversation a trained order-taker would: handling
          interruptions, substitutions, and follow-up questions, in whatever
          language the caller speaks. There&rsquo;s no queue, no hold music, and no
          shift where the phone goes uncovered.
        </p>
      </section>

      <section className="site-container mt-24">
        <h2 className="text-sm font-medium uppercase tracking-[0.15em] text-foreground">
          A Mastered Product
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-silver">
          Echo isn&rsquo;t a scripted IVR bolted onto a phone line — it&rsquo;s a
          production system engineered for the failure cases first: bad
          audio, cross-talk, order changes mid-call, and integration with the
          POS systems restaurants already run.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="h-[340px]">
            <CallTranscriptMockup />
          </div>
          <div className="h-[340px]">
            <OrderTicketMockup />
          </div>
          <div className="h-[340px]">
            <AnalyticsMockup />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
          {ECHO_FEATURES.map((feature, i) => (
            <div key={feature.label} className="border-b border-white/5 py-6">
              <span className="font-mono text-xs text-silver-dim">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-medium text-foreground">
                {feature.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-silver-dim">
                {feature.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="site-container mt-24 max-w-4xl pb-24 sm:pb-32">
        <div className="rounded-3xl border border-white/10 bg-bg-secondary/60 p-10 text-center sm:p-14">
          <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            See Echo answer a real call.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-silver">
            Book a demo and we&rsquo;ll walk through Echo taking a live order,
            end to end.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="/#contact" variant="primary">
              Book a Demo
            </MagneticButton>
            <MagneticButton href="/#portfolio" variant="secondary">
              Back to Portfolio
            </MagneticButton>
          </div>
        </div>
      </section>
    </article>
  );
}
