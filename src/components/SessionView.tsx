import { memo, type ReactNode } from "react";
import type { Lab, Section, Session } from "../content/types";
import { PHASES } from "../content/types";
import { SESSIONS } from "../content";
import { TOTAL_SESSIONS } from "../constants";
import { href, type Tab } from "../router";
import { status, useLang, useProgress } from "../store";
import { S } from "../strings";
import Diagram from "./Diagram";
import QuizRunner from "./QuizRunner";
import CareerInterestQuiz from "./CareerInterestQuiz";
import { CiaTool, CidrTool, FirewallTool, MatchTool, OrderTool, PermTool, PhishTool, PortTool } from "./LabToolsA";
import { CipherTool, HashTool, LogTool, PasswordTool, RbacTool, RiskTool, SqliTool } from "./LabToolsB";
import { ProgressBar } from "./ui";

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
    case "match": return lab.match ? <MatchTool data={lab.match} /> : null;
    case "order": return lab.order ? <OrderTool data={lab.order} /> : null;
    default: return null;
  }
}

const SectionView = memo(function SectionView({ s }: { s: Section }) {
  const { t } = useLang();
  const cal = s.callout;
  const calCls = cal?.kind === "warn" ? "border-amber-500/60 bg-amber-500/10 text-amber-100" : cal?.kind === "tip" ? "border-cyan-500/60 bg-cyan-500/10 text-cyan-100" : "border-emerald-500/60 bg-emerald-500/10 text-emerald-100";
  const icon = cal?.kind === "warn" ? "⚠" : cal?.kind === "tip" ? "💡" : "🔑";
  return (
    <section className="space-y-3">
      <h3 className="border-s-4 border-emerald-400 ps-3 text-xl font-bold text-white">{t(s.h)}</h3>
      {s.p.map((p, i) => <p key={i} className="leading-relaxed text-slate-300">{t(p)}</p>)}
      {s.bullets && (
        <ul className="list-disc space-y-1.5 ps-6 text-slate-300 marker:text-emerald-400">
          {s.bullets.map((b, i) => <li key={i}>{t(b)}</li>)}
        </ul>
      )}
      {s.table && (
        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-start text-sm">
            <thead className="bg-slate-800/70 text-slate-200"><tr>{s.table.head.map((h, i) => <th key={i} className="px-3 py-2 text-start font-semibold">{t(h)}</th>)}</tr></thead>
            <tbody>{s.table.rows.map((r, i) => <tr key={i} className="border-t border-slate-800 text-slate-300">{r.map((c, j) => <td key={j} className={`px-3 py-2 align-top ${j === 0 ? "font-semibold text-slate-100" : ""}`}>{t(c)}</td>)}</tr>)}</tbody>
          </table>
        </div>
      )}
      {cal && <div className={`rounded-xl border px-4 py-3 text-sm leading-relaxed ${calCls}`}><span aria-hidden="true">{icon}</span> {t(cal.text)}</div>}
      {s.matches?.map((m, i) => <MatchTool key={i} data={m} />)}
      {s.diagram && <div className="pt-2"><Diagram d={s.diagram} /></div>}
    </section>
  );
});

function Check({ on, onChange, children }: { on: boolean; onChange: () => void; children: ReactNode }) {
  return (
    <label
      className={`flex min-h-11 w-full cursor-pointer items-start gap-3 rounded-lg border px-3 py-2.5 text-start text-sm transition focus-within:ring-2 focus-within:ring-emerald-400 focus-within:ring-offset-2 focus-within:ring-offset-slate-950 ${
        on ? "border-emerald-500/60 bg-emerald-500/10 text-emerald-100" : "border-slate-700 bg-slate-900/60 text-slate-300 hover:border-slate-500"
      }`}
    >
      <input type="checkbox" checked={on} onChange={onChange} className="sr-only" />
      <span aria-hidden="true" className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs ${on ? "border-emerald-400 bg-emerald-400 text-slate-950" : "border-slate-500"}`}>{on ? "✓" : ""}</span>
      <span>{children}</span>
    </label>
  );
}

export default function SessionView({ s, tab }: { s: Session; tab: Tab }) {
  const { t, tr } = useLang();
  const { progress, setRead, toggleLab, toggleHw, saveQuiz, resetSession } = useProgress();
  const st = status(progress, s);
  const phase = PHASES.find((p) => p.id === s.phase) ?? PHASES[0];
  const tabs: [Tab, string][] = [["lesson", t(S.lesson)], ["lab", t(S.lab)], ["quiz", t(S.quiz)], ["homework", t(S.homework)], ["refs", t(S.references)]];
  const labDone = progress.lab[s.id] ?? [];
  const hwDone = progress.hw[s.id] ?? [];
  const prev = SESSIONS.find((x) => x.id === s.id - 1);
  const next = SESSIONS.find((x) => x.id === s.id + 1);

  const isDone = (k: Tab) =>
    (k === "lesson" && st.read) ||
    (k === "quiz" && st.quizPass) ||
    (k === "lab" && st.lab === 1) ||
    (k === "homework" && st.hw === 1);

  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">{t(S.session)} {s.id} / {TOTAL_SESSIONS} · {t(phase.title)}</p>
        <h2 className="mt-1 text-2xl font-extrabold text-white md:text-3xl">{t(s.title)}</h2>
        <p className="mt-2 max-w-3xl text-slate-300">{t(s.summary)}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-300">⏱ {s.minutes} {t(S.minutes)}</span>
          <span className="rounded-full bg-slate-800 px-3 py-1 text-emerald-300">{st.pct}% {t(S.completed)}</span>
          <ProgressBar value={st.pct} label={tr("Session progress", "تقدم الجلسة")} className="h-2 w-32" />
          <button
            type="button"
            onClick={() => confirm(t(S.resetSessionConfirm)) && resetSession(s.id)}
            className="ms-auto min-h-11 rounded-full border border-slate-700 px-3 py-2 text-slate-300 hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            {t(S.resetSession)}
          </button>
        </div>
      </header>

      <nav className="flex flex-wrap gap-2" aria-label={t(S.sessionTabs)}>
        {tabs.map(([k, label]) => {
          const done = isDone(k);
          return (
            <a
              key={k}
              href={href.session(s.id, k)}
              aria-current={tab === k ? "page" : undefined}
              className={`min-h-11 rounded-lg px-4 py-2 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${tab === k ? "bg-emerald-400 text-slate-950" : "bg-slate-900 text-slate-300 hover:bg-slate-800"}`}
            >
              {label}
              {done && <span aria-hidden="true"> ✓</span>}
              {done && <span className="sr-only"> ({t(S.completed)})</span>}
            </a>
          );
        })}
      </nav>

      <div hidden={tab !== "lesson"} className="space-y-8">
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
          <h3 className="mb-2 font-bold text-emerald-300">{t(S.objectives)}</h3>
          <ul className="list-disc space-y-1 ps-6 text-sm text-slate-300 marker:text-emerald-400">{s.objectives.map((o, i) => <li key={i}>{t(o)}</li>)}</ul>
        </div>
        {s.sections.map((x, i) => <SectionView key={i} s={x} />)}
        {s.careerQuiz && <CareerInterestQuiz data={s.careerQuiz} />}
        <Diagram d={s.diagram} />
        <div>
          <h3 className="mb-3 text-lg font-bold text-white">{t(S.keyTerms)}</h3>
          <dl className="grid gap-3 md:grid-cols-2">
            {s.terms.map((x, i) => (
              <div key={i} className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                <dt className="font-semibold text-cyan-300">{t(x.term)}</dt>
                <dd className="mt-1 text-sm text-slate-300">{t(x.def)}</dd>
              </div>
            ))}
          </dl>
        </div>
        <button type="button" onClick={() => setRead(s.id, !st.read)} className={`min-h-11 rounded-lg px-5 py-2.5 font-semibold focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${st.read ? "bg-emerald-500/20 text-emerald-300" : "bg-emerald-500 text-slate-950"}`}>{st.read ? t(S.readDone) : t(S.markRead)}</button>
      </div>

      <div hidden={tab !== "lab"} className="space-y-5">
        <h3 className="text-xl font-bold text-white"><span aria-hidden="true">🧪</span> {t(s.lab.title)}</h3>
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-slate-300"><b className="text-cyan-300">{t(S.scenario)}: </b>{t(s.lab.scenario)}</div>
        <div className="rounded-xl border border-amber-500/50 bg-amber-500/10 p-4 text-sm text-amber-100"><span aria-hidden="true">⚠</span> <b>{t(S.safety)}: </b>{t(s.lab.safety)}</div>
        <LabTool lab={s.lab} />
        <div>
          <h4 className="mb-2 font-bold text-white">{t(S.steps)} ({labDone.filter(Boolean).length}/{s.lab.steps.length})</h4>
          <div className="space-y-2">{s.lab.steps.map((x, i) => <Check key={i} on={!!labDone[i]} onChange={() => toggleLab(s.id, i, s.lab.steps.length)}>{t(x)}</Check>)}</div>
        </div>
        <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-emerald-100"><span aria-hidden="true">🎯</span> <b>{t(S.expected)}: </b>{t(s.lab.expected)}</div>
      </div>

      <div hidden={tab !== "quiz"} className="space-y-3">
        {st.quizScore && <p className="text-sm text-slate-400">{t(S.bestScore)}: {st.quizScore.score}/{st.quizScore.total}</p>}
        <QuizRunner questions={s.quiz} onDone={(sc, tot) => saveQuiz(s.id, sc, tot)} />
      </div>

      <div hidden={tab !== "homework"} className="space-y-4">
        <h3 className="text-xl font-bold text-white"><span aria-hidden="true">📝</span> {t(s.homework.title)}</h3>
        <div className="space-y-2">{s.homework.tasks.map((x, i) => <Check key={i} on={!!hwDone[i]} onChange={() => toggleHw(s.id, i, s.homework.tasks.length)}>{t(x)}</Check>)}</div>
        <div className="rounded-xl border border-cyan-500/40 bg-cyan-500/10 p-4 text-sm text-cyan-100"><b>{t(S.deliverable)}: </b>{t(s.homework.deliverable)}</div>
      </div>

      <div hidden={tab !== "refs"}>
        <ul className="space-y-2">
          {s.refs.map((r, i) => (
            <li key={i} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-cyan-300 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-emerald-400">{r.title} <span aria-hidden="true">↗</span></a>
              {r.desc && <p className="mt-1 text-sm text-slate-300">{t(r.desc)}</p>}
              <p className="mt-1 break-all text-xs text-slate-400">{r.org} · <span dir="ltr">{r.url}</span></p>
            </li>
          ))}
        </ul>
      </div>

      <footer className="flex flex-col justify-between gap-3 border-t border-slate-800 pt-5 text-sm sm:flex-row">
        {prev ? <a href={href.session(prev.id)} className="min-h-11 rounded-lg bg-slate-900 px-4 py-2 text-slate-300 hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-emerald-400"><span aria-hidden="true" className="inline-block rtl:rotate-180">←</span> {t(S.prev)}: {prev.id}</a> : <span />}
        {next ? <a href={href.session(next.id)} className="min-h-11 rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-slate-950 focus-visible:ring-2 focus-visible:ring-emerald-300">{t(S.next)}: {next.id} <span aria-hidden="true" className="inline-block rtl:rotate-180">→</span></a> : <a href={href.exam} className="min-h-11 rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-slate-950 focus-visible:ring-2 focus-visible:ring-emerald-300">{t(S.exam)} <span aria-hidden="true" className="inline-block rtl:rotate-180">→</span></a>}
      </footer>
    </div>
  );
}
