import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import MagneticButton from "@/components/ui/MagneticButton";

export const metadata: Metadata = buildMetadata({
  title: "Page Not Found — Cosecant",
  description: "The page you're looking for doesn't exist or has moved.",
  path: "/404",
});

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center px-6 py-24 sm:px-8">
      <div className="mx-auto flex w-full max-w-xl flex-col items-center text-center">
        <span className="font-mono text-sm text-silver-dim">404</span>
        <h1 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          This page doesn&rsquo;t exist.
        </h1>
        <p className="mt-4 max-w-sm text-base leading-relaxed text-silver">
          The page you&rsquo;re looking for was moved, renamed, or never existed.
          Let&rsquo;s get you back on track.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="/" variant="primary">
            Back to Home
          </MagneticButton>
          <MagneticButton href="/#contact" variant="secondary">
            Contact Us
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
