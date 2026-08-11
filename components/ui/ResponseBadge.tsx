export default function ResponseBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs text-silver-dim ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" aria-hidden="true" />
      We respond within 1 business day
    </span>
  );
}
