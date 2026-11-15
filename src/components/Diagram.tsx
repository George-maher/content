import { memo } from "react";
import type { Diagram as D } from "../content/types";
import { useLang } from "../store";

const COLORS = ["#34d399", "#22d3ee", "#60a5fa", "#a78bfa", "#f472b6", "#fbbf24", "#fb923c", "#f87171"];

function Diagram({ d }: { d: D }) {
  const { t } = useLang();
  return (
    <figure className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5" aria-label={t(d.title)}>
      <figcaption className="mb-4 text-sm font-semibold text-emerald-300">▣ {t(d.title)}</figcaption>
      {d.kind === "flow" && <Flow d={d} />}
      {d.kind === "layers" && <Layers d={d} />}
      {d.kind === "cycle" && <Cycle d={d} />}
      {d.kind === "grid" && <Grid d={d} />}
      <p className="mt-4 text-xs leading-relaxed text-slate-400">{t(d.caption)}</p>
    </figure>
  );
}

function Flow({ d }: { d: D }) {
  const { t } = useLang();
  return (
    <div className="flex flex-col items-stretch gap-2 md:flex-row md:flex-wrap md:items-stretch">
      {d.nodes.map((n, i) => (
        <div key={i} className="flex flex-col items-center gap-2 md:flex-row md:flex-1">
          <div
            className="w-full flex-1 rounded-xl border bg-slate-950/70 p-3 text-center"
            style={{ borderColor: COLORS[i % COLORS.length] }}
          >
            <div className="text-sm font-semibold text-slate-100">{t(n.label)}</div>
            {n.desc && <div className="mt-1 text-xs text-slate-400">{t(n.desc)}</div>}
          </div>
          {i < d.nodes.length - 1 && (
            <span aria-hidden="true" className="rotate-90 text-lg text-slate-400 md:rotate-0 md:rtl:rotate-180">→</span>
          )}
        </div>
      ))}
    </div>
  );
}

function Layers({ d }: { d: D }) {
  const { t } = useLang();
  const n = d.nodes.length;
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-1.5">
      {d.nodes.map((x, i) => (
        <div
          key={i}
          className="rounded-lg px-4 py-2.5 text-center"
          style={{
            background: `${COLORS[i % COLORS.length]}22`,
            border: `1px solid ${COLORS[i % COLORS.length]}`,
            marginInline: `${(i * 24) / Math.max(n - 1, 1)}%`,
          }}
        >
          <div className="text-sm font-semibold text-slate-100">{t(x.label)}</div>
          {x.desc && <div className="text-xs text-slate-400">{t(x.desc)}</div>}
        </div>
      ))}
    </div>
  );
}

function Cycle({ d }: { d: D }) {
  const { t } = useLang();
  const n = d.nodes.length;
  const R = 105;
  const pos = (i: number) => {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2;
    return [150 + R * Math.cos(a), 150 + R * Math.sin(a)];
  };
  return (
    <div className="flex flex-col items-center gap-5 md:flex-row">
      <svg viewBox="0 0 300 300" className="h-64 w-64 shrink-0" aria-hidden="true" focusable="false">
        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" fill="#64748b" />
          </marker>
        </defs>
        <circle cx="150" cy="150" r={R} fill="none" stroke="#1e293b" strokeWidth="2" />
        {d.nodes.map((_, i) => {
          const [x1, y1] = pos(i);
          const [x2, y2] = pos((i + 1) % n);
          const dx = x2 - x1,
            dy = y2 - y1,
            len = Math.hypot(dx, dy);
          const ux = dx / len,
            uy = dy / len;
          return (
            <line
              key={i}
              x1={x1 + ux * 22}
              y1={y1 + uy * 22}
              x2={x2 - ux * 26}
              y2={y2 - uy * 26}
              stroke="#64748b"
              strokeWidth="1.5"
              markerEnd="url(#arr)"
            />
          );
        })}
        {d.nodes.map((_, i) => {
          const [x, y] = pos(i);
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="19" fill="#020617" stroke={COLORS[i % COLORS.length]} strokeWidth="2" />
              <text x={x} y={y + 5} textAnchor="middle" fontSize="14" fontWeight="700" fill="#e2e8f0">
                {i + 1}
              </text>
            </g>
          );
        })}
      </svg>
      <ol className="grid flex-1 gap-2">
        {d.nodes.map((x, i) => (
          <li key={i} className="flex gap-3 text-sm">
            <span
              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-slate-950"
              style={{ background: COLORS[i % COLORS.length] }}
            >
              {i + 1}
            </span>
            <span>
              <b className="text-slate-100">{t(x.label)}</b>
              {x.desc && <span className="block text-xs text-slate-400">{t(x.desc)}</span>}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Grid({ d }: { d: D }) {
  const { t } = useLang();
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {d.nodes.map((x, i) => (
        <div key={i} className="rounded-xl border-t-4 bg-slate-950/70 p-3" style={{ borderColor: COLORS[i % COLORS.length] }}>
          <div className="text-sm font-semibold text-slate-100">{t(x.label)}</div>
          {x.desc && <div className="mt-1 text-xs leading-relaxed text-slate-400">{t(x.desc)}</div>}
        </div>
      ))}
    </div>
  );
}

export default memo(Diagram);
