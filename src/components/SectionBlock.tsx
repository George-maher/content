import { memo } from "react";
import type { Section } from "../content/types";
import { useLang } from "../store";
import Diagram from "./Diagram";
import { MatchTool } from "./LabToolsA";

/** One theoretical section with paragraphs, lists, tables, callouts and diagrams. */
const SectionBlock = memo(function SectionBlock({ s }: { s: Section }) {
  const { t } = useLang();
  const cal = s.callout;
  const calCls =
    cal?.kind === "warn"
      ? "border-amber-500/60 bg-amber-500/10 text-amber-100"
      : cal?.kind === "tip"
        ? "border-cyan-500/60 bg-cyan-500/10 text-cyan-100"
        : "border-emerald-500/60 bg-emerald-500/10 text-emerald-100";
  const icon = cal?.kind === "warn" ? "⚠" : cal?.kind === "tip" ? "💡" : "🔑";

  return (
    <section className="space-y-3">
      <h3 className="border-s-4 border-emerald-400 ps-3 text-xl font-bold text-white">{t(s.h)}</h3>
      {s.p.map((p, i) => (
        <p key={i} className="leading-relaxed text-slate-300">
          {t(p)}
        </p>
      ))}
      {s.bullets && (
        <ul className="list-disc space-y-1.5 ps-6 text-slate-300 marker:text-emerald-400">
          {s.bullets.map((b, i) => (
            <li key={i}>{t(b)}</li>
          ))}
        </ul>
      )}
      {s.table && (
        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-start text-sm">
            <thead className="bg-slate-800/70 text-slate-200">
              <tr>
                {s.table.head.map((h, i) => (
                  <th key={i} className="px-3 py-2 text-start font-semibold">
                    {t(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {s.table.rows.map((r, i) => (
                <tr key={i} className="border-t border-slate-800 text-slate-300">
                  {r.map((c, j) => (
                    <td key={j} className={`px-3 py-2 align-top ${j === 0 ? "font-semibold text-slate-100" : ""}`}>
                      {t(c)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {cal && (
        <div className={`rounded-xl border px-4 py-3 text-sm leading-relaxed ${calCls}`}>
          <span aria-hidden="true">{icon}</span> {t(cal.text)}
        </div>
      )}
      {s.matches?.map((m, i) => <MatchTool key={i} data={m} />)}
      {s.diagram && (
        <div className="pt-2">
          <Diagram d={s.diagram} />
        </div>
      )}
    </section>
  );
});

export default SectionBlock;
