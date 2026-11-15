import { useMemo, useState } from "react";
import { SESSIONS } from "../content";
import { PHASES } from "../content/types";
import { EXAM_QUESTIONS, MAJOR_LABS, PASS, TOTAL_SESSIONS } from "../constants";
import { buildExam, randomSeed } from "../lib/exam";
import { href } from "../router";
import { status, useLang, useProgress } from "../store";
import { S } from "../strings";
import QuizRunner from "./QuizRunner";
import { ProgressBar } from "./ui";

export function SessionList() {
  const { t, tr } = useLang();
  const { progress } = useProgress();
  const statuses = useMemo(
    () => new Map(SESSIONS.map((s) => [s.id, status(progress, s)] as const)),
    [progress],
  );
  return (
    <div className="space-y-8">
      {PHASES.map((ph) => (
        <div key={ph.id}>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-slate-400">{ph.id}. {t(ph.title)}</h3>
          <div className="grid gap-3 md:grid-cols-2">
            {SESSIONS.filter((s) => s.phase === ph.id).map((s) => {
              const st = statuses.get(s.id);
              if (!st) return null;
              return (
                <a key={s.id} href={href.session(s.id)} className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-emerald-500/60 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                  <div className="flex items-start gap-3">
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold ${st.pct === 100 ? "bg-emerald-400 text-slate-950" : "bg-slate-800 text-emerald-300"}`} aria-hidden="true">{st.pct === 100 ? "✓" : s.id}</span>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-white group-hover:text-emerald-300">{t(s.title)}</h4>
                      <p className="mt-1 line-clamp-2 text-xs text-slate-400">{t(s.summary)}</p>
                      <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                        <ProgressBar value={st.pct} label={`${t(s.title)} – ${tr("progress", "التقدم")}`} className="h-1.5 flex-1" />
                        <span>{st.pct}%</span><span>· {s.minutes} {t(S.minutes)}</span>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Home() {
  const { t, tr } = useLang();
  const { progress, reset } = useProgress();
  const total = TOTAL_SESSIONS;
  const statuses = useMemo(
    () => SESSIONS.map((s) => ({ session: s, st: status(progress, s) })),
    [progress],
  );
  const pcts = statuses.map((x) => x.st.pct);
  const overall = total > 0 ? Math.round(pcts.reduce((a, b) => a + b, 0) / total) : 0;
  const done = pcts.filter((p) => p === 100).length;
  const nextS = statuses.find((x) => x.st.pct < 100)?.session ?? SESSIONS[0];
  const hours = Math.round(SESSIONS.reduce((a, s) => a + s.minutes, 0) / 60);
  const quizCount = SESSIONS.reduce(
    (n, s) =>
      n +
      s.quiz.length +
      (s.trueFalse?.length ?? 0) +
      (s.classification?.reduce((m, q) => m + q.items.length, 0) ?? 0) +
      (s.scenarios?.length ?? 0),
    0,
  );
  const stats: [string, string][] = [
    [String(total), tr("Sessions", "جلسة")],
    [tr(`~${hours}h`, `~${hours} س`), tr("Learning time", "وقت التعلم")],
    [String(MAJOR_LABS), tr("Major labs", "مختبرًا رئيسيًا")],
    [String(quizCount), tr("Assessment items", "عنصر تقييم")],
  ];

  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/40 p-8 md:p-12">
        <div className="pointer-events-none absolute -end-10 -top-10 text-[14rem] leading-none text-emerald-400/5" aria-hidden="true">🛡</div>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">{tr("Cybersecurity · Foundation", "الأمن السيبراني · الأساسيات")}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-black text-white md:text-5xl">{t(S.appName)}</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">{t(S.tagline)}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={href.session(nextS.id)} className="min-h-11 rounded-xl bg-emerald-400 px-6 py-3 font-bold text-slate-950 hover:bg-emerald-300 focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">{done === 0 && overall === 0 ? t(S.start) : t(S.continue)} <span aria-hidden="true" className="inline-block rtl:rotate-180">→</span> {t(S.session)} {nextS.id}</a>
          <a href={href.exam} className="min-h-11 rounded-xl border border-slate-600 px-6 py-3 font-semibold text-slate-200 hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-emerald-400">{t(S.exam)}</a>
        </div>
        <dl className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map(([v, k], i) => (
            <div key={i} className="rounded-xl bg-slate-950/60 p-4">
              <dt className="text-xs text-slate-400">{k}</dt>
              <dd className="text-2xl font-extrabold text-emerald-300">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2 text-sm"><b className="text-white">{t(S.progress)}</b><span className="text-emerald-300">{overall}% · {done}/{total} {t(S.completed)}</span></div>
        <ProgressBar value={overall} label={t(S.progress)} className="h-3" />
        <p className="mt-3 text-xs text-slate-400">{tr("A session counts as complete when you have read the lesson, finished all lab steps, passed the quiz (70%) and ticked every homework task.", "تُعدّ الجلسة مكتملة عند قراءة الدرس وإنهاء كل خطوات المختبر واجتياز الاختبار (70%) وإنجاز كل مهام الواجب.")}</p>
        {progress.exam && <p className="mt-2 text-sm text-slate-300">{t(S.exam)}: <b className={progress.exam.score / progress.exam.total >= PASS ? "text-emerald-400" : "text-amber-300"}>{progress.exam.score}/{progress.exam.total}</b></p>}
      </section>

      <SessionList />

      <section className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-800 p-4 text-xs text-slate-400">
        <span>{t(S.scopeNote)}</span>
        <button type="button" onClick={() => confirm(t(S.resetConfirm)) && reset()} className="min-h-11 rounded-lg border border-slate-700 px-3 py-2 hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-emerald-400">{t(S.reset)}</button>
      </section>
    </div>
  );
}

export function Glossary() {
  const { t, lang, tr } = useLang();
  const [q, setQ] = useState("");
  const all = useMemo(
    () => SESSIONS.flatMap((s) => s.terms.map((x) => ({ ...x, sid: s.id }))).sort((a, b) => a.term[lang].localeCompare(b.term[lang], lang)),
    [lang]
  );
  const rows = all.filter((x) => (t(x.term) + t(x.def) + x.term.en).toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="space-y-5">
      <h2 className="text-3xl font-extrabold text-white">{t(S.glossary)} <span className="text-base font-normal text-slate-400">({rows.length})</span></h2>
      <div>
        <label htmlFor="glossary-search" className="sr-only">{t(S.search)}</label>
        <input id="glossary-search" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t(S.search)} className="min-h-11 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus-visible:border-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950" />
      </div>
      {rows.length === 0 ? (
        <p className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-400" role="status">{t(S.noResults)}</p>
      ) : (
        <dl className="grid gap-3 md:grid-cols-2">
          {rows.map((x, i) => (
            <div key={`${x.sid}-${i}`} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <dt className="flex items-baseline justify-between gap-2 font-semibold text-cyan-300">
                <span>{t(x.term)}{lang === "ar" && <span className="ms-2 text-xs font-normal text-slate-400" dir="ltr" lang="en">{x.term.en}</span>}</span>
                <a href={href.session(x.sid)} className="shrink-0 text-xs font-normal text-slate-400 hover:text-emerald-300 focus-visible:ring-2 focus-visible:ring-emerald-400">{tr("S", "ج")}{x.sid}</a>
              </dt>
              <dd className="mt-1 text-sm text-slate-300">{t(x.def)}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}

export function Exam() {
  const { t, tr } = useLang();
  const { progress, saveExam } = useProgress();
  const [attempt, setAttempt] = useState<number | null>(null);
  const questions = useMemo(() => buildExam(SESSIONS, EXAM_QUESTIONS, attempt ?? 1), [attempt]);
  const previous = progress.exam;
  return (
    <div className="space-y-5">
      <h2 className="text-3xl font-extrabold text-white"><span aria-hidden="true">🎓</span> {t(S.exam)}</h2>
      {attempt === null ? (
        <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <p className="text-slate-300">{t(S.examIntro)}</p>
          <p className="text-sm text-emerald-300">{EXAM_QUESTIONS} {tr("questions", "سؤالًا")}</p>
          <p className="text-sm text-slate-400">
            {previous ? (
              <>
                {t(S.previousBest)}:{" "}
                <b className={previous.score / previous.total >= PASS ? "text-emerald-300" : "text-amber-300"}>
                  {previous.score}/{previous.total}
                </b>
              </>
            ) : (
              t(S.examNotTaken)
            )}
          </p>
          <button type="button" onClick={() => setAttempt(randomSeed())} className="min-h-11 rounded-xl bg-emerald-400 px-6 py-3 font-bold text-slate-950 hover:bg-emerald-300 focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">{t(S.startExam)}</button>
        </div>
      ) : (
        <QuizRunner
          key={attempt}
          questions={questions}
          showSessionTag
          onDone={(score, total) => saveExam(score, total)}
          onRetry={() => setAttempt(randomSeed())}
        />
      )}
    </div>
  );
}

export function NotFound() {
  const { t } = useLang();
  return (
    <div className="mx-auto max-w-xl space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 text-center">
      <p className="text-6xl font-black text-emerald-400" aria-hidden="true">404</p>
      <h1 className="text-2xl font-extrabold text-white">{t(S.notFoundTitle)}</h1>
      <p className="text-slate-300">{t(S.notFoundBody)}</p>
      <div className="flex flex-wrap justify-center gap-3 pt-2">
        <a href={href.home} className="min-h-11 rounded-lg bg-emerald-400 px-4 py-2 font-semibold text-slate-950 focus-visible:ring-2 focus-visible:ring-emerald-300">{t(S.backHome)}</a>
        <a href={href.sessions} className="min-h-11 rounded-lg border border-slate-600 px-4 py-2 font-semibold text-slate-200 hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-emerald-400">{t(S.browseSessions)}</a>
      </div>
    </div>
  );
}
