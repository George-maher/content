import type { Session } from "../content/types";
import { PHASES } from "../content/types";
import { SESSIONS } from "../content";
import { TOTAL_SESSIONS } from "../constants";
import { href, type Tab } from "../router";
import { status, useLang, useProgress } from "../store";
import { S } from "../strings";
import AssessmentRunner from "./AssessmentRunner";
import ChapterView from "./ChapterView";
import MajorLab from "./MajorLab";
import QuizRunner from "./QuizRunner";
import { Check, ProgressBar } from "./ui";

export default function SessionView({ s, tab }: { s: Session; tab: Tab }) {
  const { t, tr } = useLang();
  const { progress, toggleHw, saveQuiz, resetSession } = useProgress();
  const st = status(progress, s);
  const phase = PHASES.find((p) => p.id === s.phase) ?? PHASES[0];
  const tabs: [Tab, string][] = [
    ["lesson", t(S.lesson)],
    ["lab", t(S.lab)],
    ["quiz", t(S.quiz)],
    ["homework", t(S.homework)],
    ["refs", t(S.references)],
  ];
  const hwDone = progress.hw[s.id] ?? [];
  const prev = SESSIONS.find((x) => x.id === s.id - 1);
  const next = SESSIONS.find((x) => x.id === s.id + 1);
  const fullAssessment = s.schemaVersion === 2 || !!(s.trueFalse || s.classification || s.scenarios);

  const isDone = (k: Tab) =>
    (k === "lesson" && st.read) ||
    (k === "quiz" && st.quizPass) ||
    (k === "lab" && st.lab === 1) ||
    (k === "homework" && st.hw === 1);

  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
          {t(S.session)} {s.id} / {TOTAL_SESSIONS} · {t(S.section)} {s.phase} · {t(phase.title)}
        </p>
        <h2 className="mt-1 text-2xl font-extrabold text-white md:text-3xl">{t(s.title)}</h2>
        <p className="mt-2 max-w-3xl text-slate-300">{t(s.summary)}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-300">
            ⏱ {s.minutes} {t(S.minutes)}
          </span>
          <span className="rounded-full bg-slate-800 px-3 py-1 text-emerald-300">
            {st.pct}% {t(S.completed)}
          </span>
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
              className={`min-h-11 rounded-lg px-4 py-2 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                tab === k ? "bg-emerald-400 text-slate-950" : "bg-slate-900 text-slate-300 hover:bg-slate-800"
              }`}
            >
              {label}
              {done && <span aria-hidden="true"> ✓</span>}
              {done && <span className="sr-only"> ({t(S.completed)})</span>}
            </a>
          );
        })}
      </nav>

      <div hidden={tab !== "lesson"}>
        <ChapterView s={s} />
      </div>

      <div hidden={tab !== "lab"}>
        <MajorLab s={s} />
      </div>

      <div hidden={tab !== "quiz"} className="space-y-3">
        {st.quizScore && (
          <p className="text-sm text-slate-400">
            {t(S.bestScore)}: {st.quizScore.score}/{st.quizScore.total}
          </p>
        )}
        {fullAssessment ? (
          <AssessmentRunner session={s} onDone={(sc, tot) => saveQuiz(s.id, sc, tot)} />
        ) : (
          <QuizRunner questions={s.quiz} onDone={(sc, tot) => saveQuiz(s.id, sc, tot)} />
        )}
      </div>

      <div hidden={tab !== "homework"} className="space-y-4">
        <h3 className="text-xl font-bold text-white">
          <span aria-hidden="true">📝</span> {t(s.homework.title)}
        </h3>
        <div className="space-y-2">
          {s.homework.tasks.map((x, i) => (
            <Check key={i} on={!!hwDone[i]} onChange={() => toggleHw(s.id, i, s.homework.tasks.length)}>
              {t(x)}
            </Check>
          ))}
        </div>
        <div className="rounded-xl border border-cyan-500/40 bg-cyan-500/10 p-4 text-sm text-cyan-100">
          <b>{t(S.deliverable)}: </b>
          {t(s.homework.deliverable)}
        </div>
        {s.homework.criteria && s.homework.criteria.length > 0 && (
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <h4 className="mb-2 font-bold text-white">{t(S.homeworkCriteria)}</h4>
            <ul className="list-disc space-y-1.5 ps-5 text-sm text-slate-300 marker:text-emerald-400">
              {s.homework.criteria.map((x, i) => (
                <li key={i}>{t(x)}</li>
              ))}
            </ul>
          </div>
        )}
        {s.homework.challenge && (
          <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-100">
            <b>{t(S.challenge)}: </b>
            {t(s.homework.challenge)}
          </div>
        )}
      </div>

      <div hidden={tab !== "refs"}>
        <ul className="space-y-2">
          {s.refs.map((r, i) => (
            <li key={i} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-cyan-300 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                {r.title} <span aria-hidden="true">↗</span>
              </a>
              {r.desc && <p className="mt-1 text-sm text-slate-300">{t(r.desc)}</p>}
              <p className="mt-1 break-all text-xs text-slate-400">
                {r.org} · <span dir="ltr">{r.url}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>

      <footer className="flex flex-col justify-between gap-3 border-t border-slate-800 pt-5 text-sm sm:flex-row">
        {prev ? (
          <a
            href={href.session(prev.id)}
            className="min-h-11 rounded-lg bg-slate-900 px-4 py-2 text-slate-300 hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <span aria-hidden="true" className="inline-block rtl:rotate-180">←</span> {t(S.prev)}: {prev.id}
          </a>
        ) : (
          <span />
        )}
        {next ? (
          <a
            href={href.session(next.id)}
            className="min-h-11 rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-slate-950 focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            {t(S.next)}: {next.id} <span aria-hidden="true" className="inline-block rtl:rotate-180">→</span>
          </a>
        ) : (
          <a
            href={href.exam}
            className="min-h-11 rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-slate-950 focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            {t(S.exam)} <span aria-hidden="true" className="inline-block rtl:rotate-180">→</span>
          </a>
        )}
      </footer>
    </div>
  );
}
