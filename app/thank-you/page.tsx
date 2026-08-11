import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import MagneticButton from "@/components/ui/MagneticButton";
import ResponseBadge from "@/components/ui/ResponseBadge";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Thank You — Cosecant",
    description: "Thanks for reaching out to Cosecant. We'll be in touch shortly.",
    path: "/thank-you",
  }),
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <section className="relative flex min-h-[80vh] items-center px-6 py-24 sm:px-8">
      <div className="mx-auto flex w-full max-w-xl flex-col items-start">
        <Breadcrumbs items={[{ label: "Thank You", href: "/thank-you" }]} />

        <span className="mt-8 text-xs uppercase tracking-[0.2em] text-silver-dim">
          Message Received
        </span>
        <h1 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl">
          Thanks — your message is with us.
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-silver">
          A member of our team will review what you shared and follow up by
          email or phone with next steps.
        </p>

        <div className="mt-8">
          <ResponseBadge />
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton href="/" variant="primary">
            Back to Home
          </MagneticButton>
          <MagneticButton href="/case-studies/echo" variant="secondary">
            Read the Echo Case Study
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
