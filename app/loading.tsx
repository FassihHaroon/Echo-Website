import { COMPANY } from "@/lib/constants";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <span className="text-sm font-medium uppercase tracking-[0.3em] text-silver-dim">
        {COMPANY.name}
      </span>
    </div>
  );
}
