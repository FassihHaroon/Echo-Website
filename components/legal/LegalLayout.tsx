import type { ReactNode } from "react";
import Breadcrumbs, { type BreadcrumbItem } from "@/components/ui/Breadcrumbs";

export function LegalLayout({
  title,
  updated,
  breadcrumb,
  children,
}: {
  title: string;
  updated: string;
  breadcrumb: BreadcrumbItem[];
  children: ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-24 sm:px-8 sm:py-32">
      <Breadcrumbs items={breadcrumb} />

      <span className="mt-8 block text-xs uppercase tracking-[0.2em] text-silver-dim">
        Legal
      </span>
      <h1 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 text-sm text-silver-dim">Last updated: {updated}</p>

      <div className="legal-content mt-14 flex flex-col gap-10">{children}</div>
    </div>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-xl font-medium text-foreground">{title}</h2>
      <div className="mt-3 flex flex-col gap-3 text-base leading-relaxed text-silver">
        {children}
      </div>
    </section>
  );
}
