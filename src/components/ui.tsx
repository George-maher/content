import type { ReactNode } from "react";

export const Box = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="rounded-2xl border border-cyan-500/30 bg-slate-950/70 p-5">
    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-cyan-300">
      <span aria-hidden="true">⚙ </span>
      {title}
    </h4>
    {children}
  </div>
);

export function Btn({
  children,
  onClick,
  active,
  disabled,
  label,
}: {
  children: ReactNode;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={active}
      aria-label={label}
      className={`min-h-11 rounded-lg border px-3 py-2 text-sm transition focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-40 ${
        active
          ? "border-emerald-400 bg-emerald-400/20 text-emerald-200"
          : "border-slate-600 text-slate-200 hover:bg-slate-800"
      }`}
    >
      {children}
    </button>
  );
}

export const inp =
  "min-h-11 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none transition focus-visible:border-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

export function ProgressBar({
  value,
  label,
  className = "h-2",
}: {
  value: number;
  label: string;
  className?: string;
}) {
  const clamped = Math.max(0, Math.min(100, Math.round(Number.isFinite(value) ? value : 0)));
  return (
    <div
      className={`overflow-hidden rounded-full bg-slate-800 ${className}`}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clamped}
      aria-valuetext={`${clamped}%`}
      aria-label={label}
    >
      <div
        className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}

/** Accessible tick-off control used by labs and homework. */
export function Check({
  on,
  onChange,
  children,
}: {
  on: boolean;
  onChange: () => void;
  children: ReactNode;
}) {
  return (
    <label
      className={`flex min-h-11 w-full cursor-pointer items-start gap-3 rounded-lg border px-3 py-2.5 text-start text-sm transition focus-within:ring-2 focus-within:ring-emerald-400 focus-within:ring-offset-2 focus-within:ring-offset-slate-950 ${
        on
          ? "border-emerald-500/60 bg-emerald-500/10 text-emerald-100"
          : "border-slate-700 bg-slate-900/60 text-slate-300 hover:border-slate-500"
      }`}
    >
      <input type="checkbox" checked={on} onChange={onChange} className="sr-only" />
      <span
        aria-hidden="true"
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs ${
          on ? "border-emerald-400 bg-emerald-400 text-slate-950" : "border-slate-500"
        }`}
      >
        {on ? "✓" : ""}
      </span>
      <span>{children}</span>
    </label>
  );
}
