import { useMemo, useState } from "react";
import type { CareerQuizData } from "../content/types";
import { useLang } from "../store";
import { Btn } from "./ui";

/**
 * Interactive career interest quiz (Session 1 career module).
 * Educational self-assessment: maps answers to interest categories and suggests
 * tracks to EXPLORE. Not scored, not an aptitude test, not persisted.
 */
export default function CareerInterestQuiz({ data }: { data: CareerQuizData }) {
  const { t, tr } = useLang();
  const [answers, setAnswers] = useState<(number | null)[]>(() => data.questions.map(() => null));
  const answered = answers.filter((a) => a !== null).length;
  const done = answered === data.questions.length;

  const ranked = useMemo(() => {
    const score = new Map<string, number>();
    for (const c of data.cats) score.set(c.cat, 0);
    answers.forEach((a, i) => {
      if (a !== null) {
        const cat = data.questions[i].options[a].cat;
        score.set(cat, (score.get(cat) ?? 0) + 1);
      }
    });
    return data.cats
      .map((c) => ({ ...c, n: score.get(c.cat) ?? 0 }))
      .filter((c) => c.n > 0)
      .sort((x, y) => y.n - x.n);
  }, [answers, data]);

  const pick = (qi: number, oi: number) =>
    setAnswers((p) => p.map((v, j) => (j === qi ? oi : v)));

  return (
    <section className="space-y-4" aria-label={t(data.title)}>
      <h3 className="border-s-4 border-emerald-400 ps-3 text-xl font-bold text-white">
        {t(data.title)}
      </h3>
      <p className="text-slate-300">{t(data.intro)}</p>
      <div className="rounded-xl border border-amber-500/50 bg-amber-500/10 px-4 py-3 text-sm leading-relaxed text-amber-100">
        <span aria-hidden="true">⚠</span> {t(data.disclaimer)}
      </div>

      <div className="space-y-3">
        {data.questions.map((q, qi) => (
          <fieldset key={qi} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <legend className="px-1 text-sm font-semibold text-cyan-300">
              {qi + 1}. {t(q.q)}
            </legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {q.options.map((o, oi) => (
                <Btn
                  key={oi}
                  active={answers[qi] === oi}
                  onClick={() => pick(qi, oi)}
                >
                  {t(o.text)}
                </Btn>
              ))}
            </div>
          </fieldset>
        ))}
      </div>

      <p className="text-sm text-slate-400" role="status" aria-live="polite">
        {tr("Answered", "تمت الإجابة")}: {answered}/{data.questions.length}
      </p>

      <div className="flex gap-2">
        <Btn onClick={() => setAnswers(data.questions.map(() => null))}>
          {tr("Reset quiz", "إعادة الاختبار")}
        </Btn>
      </div>

      {done && (
        <div className="space-y-3 rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-5" role="status" aria-live="polite">
          <h4 className="font-bold text-emerald-300">{tr("Your leaning so far", "ميلك حتى الآن")}</h4>
          {ranked.length === 0 && <p className="text-slate-300">{tr("Answer the questions to see suggestions.", "أجب عن الأسئلة لرؤية الاقتراحات.")}</p>}
          <ol className="space-y-3">
            {ranked.slice(0, 3).map((c, i) => (
              <li key={c.cat} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="font-semibold text-white">
                  <span className="me-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-slate-950" aria-hidden="true">
                    {i + 1}
                  </span>
                  {t(c.name)} <span className="text-xs text-slate-400">({c.n}/{data.questions.length})</span>
                </p>
                <p className="mt-1 text-sm text-slate-300">{t(c.desc)}</p>
                <p className="mt-2 text-sm leading-relaxed text-cyan-200">{t(c.tracks)}</p>
              </li>
            ))}
          </ol>
          <p className="text-sm text-slate-400">
            {tr("High scores in several areas are normal — explore more than one track, and revisit your choices as you learn.", "النتيجة العالية في عدة مجالات أمر طبيعي — فاستكشف أكثر من مسار وأعد النظر في اختياراتك كلما تعلمت.")}
          </p>
        </div>
      )}
    </section>
  );
}
