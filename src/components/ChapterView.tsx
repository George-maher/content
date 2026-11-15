import type { ReactNode } from "react";
import type { Session } from "../content/types";
import { href } from "../router";
import { status, useLang, useProgress } from "../store";
import { S } from "../strings";
import CareerInterestQuiz from "./CareerInterestQuiz";
import Diagram from "./Diagram";
import SectionBlock from "./SectionBlock";

function Panel({
  title,
  children,
  tone = "slate",
}: {
  title: string;
  children: ReactNode;
  tone?: "slate" | "emerald" | "cyan" | "amber";
}) {
  const tones = {
    slate: "border-slate-800 bg-slate-900/60",
    emerald: "border-emerald-500/30 bg-emerald-500/5",
    cyan: "border-cyan-500/30 bg-cyan-500/5",
    amber: "border-amber-500/30 bg-amber-500/5",
  };
  return (
    <section className={`rounded-2xl border p-5 ${tones[tone]}`}>
      <h3 className="mb-3 text-lg font-bold text-white">{title}</h3>
      {children}
    </section>
  );
}

function List({ items, marker = "•" }: { items: { en: string; ar: string }[]; marker?: string }) {
  const { t } = useLang();
  return (
    <ul className="space-y-2 text-sm leading-relaxed text-slate-300">
      {items.map((x, i) => (
        <li key={i} className="flex gap-2">
          <span aria-hidden="true" className="text-emerald-400">
            {marker}
          </span>
          <span>{t(x)}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ChapterView({ s }: { s: Session }) {
  const { t } = useLang();
  const { progress, setRead } = useProgress();
  const st = status(progress, s);
  const overview = s.overview ?? s.summary;

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel title={t(S.overview)} tone="emerald">
          <p className="leading-relaxed text-slate-300">{t(overview)}</p>
        </Panel>
        {s.whyItMatters && (
          <Panel title={t(S.whyItMatters)} tone="cyan">
            <p className="leading-relaxed text-slate-300">{t(s.whyItMatters)}</p>
          </Panel>
        )}
      </div>

      {s.prerequisites && s.prerequisites.length > 0 && (
        <Panel title={t(S.prerequisites)}>
          <List items={s.prerequisites} marker="✓" />
        </Panel>
      )}

      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-bold text-emerald-300">{t(S.objectives)}</h3>
          <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
            ⏱ {s.minutes} {t(S.minutes)}
          </span>
        </div>
        <ul className="list-disc space-y-1 ps-6 text-sm text-slate-300 marker:text-emerald-400">
          {s.objectives.map((o, i) => (
            <li key={i}>{t(o)}</li>
          ))}
        </ul>
      </div>

      {s.agenda && s.agenda.length > 0 && (
        <Panel title={t(S.agenda)}>
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-start text-sm">
              <thead className="bg-slate-800/70 text-slate-200">
                <tr>
                  <th className="px-3 py-2 text-start font-semibold">{t(S.agenda)}</th>
                  <th className="px-3 py-2 text-end font-semibold">{t(S.minutes)}</th>
                </tr>
              </thead>
              <tbody>
                {s.agenda.map((a, i) => (
                  <tr key={i} className="border-t border-slate-800 text-slate-300">
                    <td className="px-3 py-2">{t(a.label)}</td>
                    <td className="px-3 py-2 text-end font-mono">{a.minutes}</td>
                  </tr>
                ))}
                <tr className="border-t border-emerald-500/30 bg-emerald-500/5 font-semibold text-emerald-200">
                  <td className="px-3 py-2">{t(S.agenda)}</td>
                  <td className="px-3 py-2 text-end font-mono">{s.agenda.reduce((n, a) => n + a.minutes, 0)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Panel>
      )}

      <Panel title={t(S.tableOfContents)}>
        <ol className="grid gap-1.5 text-sm text-slate-300 md:grid-cols-2">
          <li>1. {t(S.overview)}</li>
          <li>2. {t(S.whyItMatters)}</li>
          <li>3. {t(S.prerequisites)}</li>
          <li>4. {t(S.objectives)}</li>
          <li>5. {t(S.agenda)}</li>
          <li>6. {t(S.introduction)}</li>
          {s.sections.map((x, i) => (
            <li key={i}>
              {i + 7}. {t(x.h)}
            </li>
          ))}
          <li>{t(S.technicalExamples)}</li>
          <li>{t(S.realWorldScenarios)}</li>
          <li>{t(S.diagram)}</li>
          <li>{t(S.instructorDemo)}</li>
          <li>{t(S.practicalExercises)}</li>
          <li>{t(S.majorLabReference)}</li>
          <li>{t(S.expectedResults)}</li>
          <li>{t(S.commonMistakes)}</li>
          <li>{t(S.securityBestPractices)}</li>
          <li>{t(S.keyTakeaways)}</li>
          <li>{t(S.vocabulary)}</li>
          <li>{t(S.assessment)}</li>
          <li>{t(S.homework)}</li>
          <li>{t(S.references)}</li>
        </ol>
      </Panel>

      {s.introduction && (
        <Panel title={t(S.introduction)}>
          <p className="leading-relaxed text-slate-300">{t(s.introduction)}</p>
        </Panel>
      )}

      <div className="space-y-8">
        {s.sections.map((x, i) => (
          <SectionBlock key={i} s={x} />
        ))}
      </div>

      {s.terms.length > 0 && (
        <Panel title={t(S.coreConcepts)}>
          <p className="mb-3 text-sm text-slate-400">
            {t({
              en: "The vocabulary section at the end of this chapter defines each of these terms in both languages.",
              ar: "يُعرّف قسم المفردات في نهاية هذا الفصل كل مصطلح من هذه المصطلحات باللغتين.",
            })}
          </p>
          <div className="flex flex-wrap gap-2">
            {s.terms.map((x, i) => (
              <span key={i} className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200">
                {t(x.term)}
              </span>
            ))}
          </div>
        </Panel>
      )}

      {s.examples && s.examples.length > 0 && (
        <Panel title={t(S.technicalExamples)} tone="cyan">
          <ol className="list-decimal space-y-3 ps-6 text-sm leading-relaxed text-slate-300 marker:text-cyan-400">
            {s.examples.map((x, i) => (
              <li key={i}>{t(x)}</li>
            ))}
          </ol>
        </Panel>
      )}

      {s.realWorldScenarios && s.realWorldScenarios.length > 0 && (
        <Panel title={t(S.realWorldScenarios)} tone="amber">
          <div className="space-y-3">
            {s.realWorldScenarios.map((x, i) => (
              <p key={i} className="rounded-xl bg-slate-950/60 p-4 text-sm leading-relaxed text-slate-300">
                <span className="me-2 font-bold text-amber-300">{i + 1}.</span>
                {t(x)}
              </p>
            ))}
          </div>
        </Panel>
      )}

      <div>
        <h3 className="mb-3 text-lg font-bold text-white">{t(S.diagram)}</h3>
        <Diagram d={s.diagram} />
      </div>

      {s.instructorDemo && (
        <Panel title={t(S.instructorDemo)} tone="emerald">
          <p className="leading-relaxed text-slate-300">{t(s.instructorDemo)}</p>
        </Panel>
      )}

      {s.exercises && s.exercises.length > 0 && (
        <Panel title={t(S.practicalExercises)}>
          <div className="space-y-4">
            {s.exercises.map((x, i) => (
              <div key={i} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <h4 className="font-semibold text-emerald-300">
                  {i + 1}. {t(x.title)}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{t(x.instructions)}</p>
                {x.expected && (
                  <p className="mt-2 text-sm text-slate-400">
                    <b className="text-cyan-300">{t(S.expectedResults)}:</b> {t(x.expected)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Panel>
      )}

      <Panel title={t(S.majorLabReference)}>
        <p className="mb-3 text-sm text-slate-300">
          {s.majorLabId
            ? t({
                en: `This chapter is linked to major lab ${s.majorLabId}. Complete the lab after the theory and before the assessment.`,
                ar: `يرتبط هذا الفصل بالمختبر الرئيسي ${s.majorLabId}. أكمل المختبر بعد الشرح النظري وقبل التقييم.`,
              })
            : t({
                en: "Complete the lab for this session after the theory and before the assessment.",
                ar: "أكمل مختبر هذه الجلسة بعد الشرح النظري وقبل التقييم.",
              })}
        </p>
        <a
          href={href.session(s.id, "lab")}
          className="inline-flex min-h-11 items-center rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-slate-950 focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          {t(S.openMajorLab)} <span aria-hidden="true" className="ms-2">→</span>
        </a>
      </Panel>

      <Panel title={t(S.expectedResults)}>
        <p className="leading-relaxed text-slate-300">{t(s.expectedResults ?? s.lab.expected)}</p>
      </Panel>

      {s.commonMistakes && s.commonMistakes.length > 0 && (
        <Panel title={t(S.commonMistakes)} tone="amber">
          <List items={s.commonMistakes} marker="✗" />
        </Panel>
      )}

      {s.bestPractices && s.bestPractices.length > 0 && (
        <Panel title={t(S.securityBestPractices)} tone="emerald">
          <List items={s.bestPractices} marker="✓" />
        </Panel>
      )}

      {s.keyTakeaways && s.keyTakeaways.length > 0 && (
        <Panel title={t(S.keyTakeaways)} tone="cyan">
          <List items={s.keyTakeaways} marker="→" />
        </Panel>
      )}

      {s.careerQuiz && <CareerInterestQuiz data={s.careerQuiz} />}

      <div>
        <h3 className="mb-3 text-lg font-bold text-white">{t(S.vocabulary)}</h3>
        <dl className="grid gap-3 md:grid-cols-2">
          {s.terms.map((x, i) => (
            <div key={i} className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
              <dt className="font-semibold text-cyan-300">{t(x.term)}</dt>
              <dd className="mt-1 text-sm text-slate-300">{t(x.def)}</dd>
              {x.example && (
                <dd className="mt-2 text-xs text-slate-400">
                  <b className="text-emerald-300">{t(S.example)}:</b> {t(x.example)}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>

      <button
        type="button"
        onClick={() => setRead(s.id, !st.read)}
        className={`min-h-11 rounded-lg px-5 py-2.5 font-semibold focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
          st.read ? "bg-emerald-500/20 text-emerald-300" : "bg-emerald-500 text-slate-950"
        }`}
      >
        {st.read ? t(S.readDone) : t(S.markRead)}
      </button>
    </div>
  );
}
