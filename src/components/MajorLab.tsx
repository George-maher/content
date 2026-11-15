import type { ReactNode } from "react";
import type { Lab, Session } from "../content/types";
import { useLang, useProgress } from "../store";
import { S } from "../strings";
import { CiaTool, CidrTool, FirewallTool, MatchTool, OrderTool, PermTool, PhishTool, PortTool, WebserverTool } from "./LabToolsA";
import { CipherTool, HashTool, LogTool, PasswordTool, RbacTool, RiskTool, SqliTool } from "./LabToolsB";
import { Check } from "./ui";

function LabTool({ lab }: { lab: Lab }) {
  switch (lab.tool) {
    case "cia": return <CiaTool />;
    case "phish": return <PhishTool />;
    case "perm": return <PermTool />;
    case "cidr": return <CidrTool />;
    case "port": return <PortTool />;
    case "firewall": return <FirewallTool />;
    case "cipher": return <CipherTool />;
    case "hash": return <HashTool />;
    case "password": return <PasswordTool />;
    case "rbac": return <RbacTool />;
    case "sqli": return <SqliTool />;
    case "risk": return <RiskTool />;
    case "logs": return <LogTool />;
    case "webserver": return <WebserverTool />;
    case "match": return lab.match ? <MatchTool data={lab.match} /> : null;
    case "order": return lab.order ? <OrderTool data={lab.order} /> : null;
    default: return null;
  }
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
      <h4 className="mb-3 font-bold text-white">{title}</h4>
      {children}
    </section>
  );
}

export default function MajorLab({ s }: { s: Session }) {
  const { t } = useLang();
  const { progress, toggleLab } = useProgress();
  const lab = s.lab;
  const done = progress.lab[s.id] ?? [];

  return (
    <div className="space-y-5">
      <h3 className="text-xl font-bold text-white">
        <span aria-hidden="true">🧪</span> {t(lab.title)}
      </h3>

      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-slate-300">
        <b className="text-cyan-300">{t(S.scenario)}: </b>
        {t(lab.scenario)}
      </div>

      <div className="rounded-xl border border-amber-500/50 bg-amber-500/10 p-4 text-sm text-amber-100">
        <span aria-hidden="true">⚠</span> <b>{t(S.safety)}: </b>
        {t(lab.safety)}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {lab.objectives && lab.objectives.length > 0 && (
          <Block title={t(S.labObjectives)}>
            <ul className="list-disc space-y-1.5 ps-5 text-sm text-slate-300 marker:text-emerald-400">
              {lab.objectives.map((x, i) => <li key={i}>{t(x)}</li>)}
            </ul>
          </Block>
        )}
        {lab.prerequisites && lab.prerequisites.length > 0 && (
          <Block title={t(S.labPrerequisites)}>
            <ul className="list-disc space-y-1.5 ps-5 text-sm text-slate-300 marker:text-cyan-400">
              {lab.prerequisites.map((x, i) => <li key={i}>{t(x)}</li>)}
            </ul>
          </Block>
        )}
        {lab.environment && (
          <Block title={t(S.environment)}>
            <p className="text-sm leading-relaxed text-slate-300">{t(lab.environment)}</p>
          </Block>
        )}
        {lab.tools && lab.tools.length > 0 && (
          <Block title={t(S.tools)}>
            <div className="flex flex-wrap gap-2">
              {lab.tools.map((x, i) => (
                <span key={i} className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200">
                  {t(x)}
                </span>
              ))}
            </div>
          </Block>
        )}
      </div>

      {lab.authorization && (
        <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm leading-relaxed text-emerald-100">
          <b>{t(S.authorization)}: </b>
          {t(lab.authorization)}
        </div>
      )}

      <LabTool lab={lab} />

      <section>
        <h4 className="mb-2 font-bold text-white">
          {t(S.steps)} ({done.filter(Boolean).length}/{lab.steps.length})
        </h4>
        <div className="space-y-2">
          {lab.steps.map((x, i) => (
            <Check key={i} on={!!done[i]} onChange={() => toggleLab(s.id, i, lab.steps.length)}>
              {t(x)}
            </Check>
          ))}
        </div>
      </section>

      {lab.detailedSteps && lab.detailedSteps.length > 0 && (
        <section className="space-y-3">
          <h4 className="font-bold text-white">{t(S.detailedSteps)}</h4>
          {lab.detailedSteps.map((step, i) => (
            <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h5 className="font-semibold text-emerald-300">
                {i + 1}. {t(step.title)}
              </h5>
              {step.command && (
                <pre className="mt-3 overflow-x-auto rounded-lg border border-slate-700 bg-slate-950 p-3 text-sm text-cyan-200" dir="ltr">
                  <code>{step.command}</code>
                </pre>
              )}
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{t(step.explanation)}</p>
              {step.expected && (
                <p className="mt-2 rounded-lg bg-slate-950/70 p-3 text-sm text-slate-400">
                  <b className="text-cyan-300">{t(S.expectedResults)}:</b> {t(step.expected)}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-emerald-100">
        <span aria-hidden="true">🎯</span> <b>{t(S.expected)}: </b>
        {t(lab.expected)}
      </div>

      {lab.troubleshooting && lab.troubleshooting.length > 0 && (
        <section>
          <h4 className="mb-2 font-bold text-white">{t(S.troubleshooting)}</h4>
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-start text-sm">
              <thead className="bg-slate-800/70 text-slate-200">
                <tr>
                  <th className="px-3 py-2 text-start font-semibold">{t(S.problem)}</th>
                  <th className="px-3 py-2 text-start font-semibold">{t(S.fix)}</th>
                </tr>
              </thead>
              <tbody>
                {lab.troubleshooting.map((x, i) => (
                  <tr key={i} className="border-t border-slate-800 text-slate-300">
                    <td className="px-3 py-2 align-top">{t(x.problem)}</td>
                    <td className="px-3 py-2 align-top">{t(x.fix)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {lab.deliverables && lab.deliverables.length > 0 && (
        <Block title={t(S.deliverables)}>
          <ul className="list-disc space-y-1.5 ps-5 text-sm text-slate-300 marker:text-emerald-400">
            {lab.deliverables.map((x, i) => <li key={i}>{t(x)}</li>)}
          </ul>
        </Block>
      )}

      {lab.rubric && lab.rubric.length > 0 && (
        <section>
          <h4 className="mb-2 font-bold text-white">{t(S.rubric)}</h4>
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-start text-sm">
              <thead className="bg-slate-800/70 text-slate-200">
                <tr>
                  <th className="px-3 py-2 text-start font-semibold">{t(S.rubric)}</th>
                  <th className="px-3 py-2 text-end font-semibold">%</th>
                </tr>
              </thead>
              <tbody>
                {lab.rubric.map((x, i) => (
                  <tr key={i} className="border-t border-slate-800 text-slate-300">
                    <td className="px-3 py-2">{t(x.criterion)}</td>
                    <td className="px-3 py-2 text-end font-mono">{x.weight}</td>
                  </tr>
                ))}
                <tr className="border-t border-emerald-500/30 bg-emerald-500/5 font-semibold text-emerald-200">
                  <td className="px-3 py-2">{t(S.rubric)}</td>
                  <td className="px-3 py-2 text-end font-mono">
                    {lab.rubric.reduce((n, x) => n + x.weight, 0)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}
