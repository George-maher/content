import { useId, useRef, useState } from "react";
import type { Session } from "../content/types";
import { PASS, useLang } from "../store";
import { S } from "../strings";

type BoolAnswer = boolean | null;

function Result({ score, total }: { score: number; total: number }) {
  const { t } = useLang();
  const ok = total > 0 && score / total >= PASS;
  return (
    <span
      role="status"
      aria-live="polite"
      className={`rounded-lg px-4 py-2 font-semibold ${ok ? "bg-emerald-500/20 text-emerald-300" : "bg-amber-500/20 text-amber-300"}`}
    >
      {t(S.score)}: {score}/{total} · {ok ? t(S.passed) : t(S.notPassed)}
    </span>
  );
}

export default function AssessmentRunner({
  session,
  onDone,
}: {
  session: Session;
  onDone: (score: number, total: number) => void;
}) {
  const { t, tr } = useLang();
  const baseId = useId();
  const resultRef = useRef<HTMLDivElement>(null);
  const mcq = session.quiz;
  const tf = session.trueFalse ?? [];
  const classification = session.classification ?? [];
  const scenarios = session.scenarios ?? [];
  const practical = session.practicalChecks ?? [];

  const [mcqAns, setMcqAns] = useState<(number | null)[]>(() => mcq.map(() => null));
  const [tfAns, setTfAns] = useState<BoolAnswer[]>(() => tf.map(() => null));
  const [clsAns, setClsAns] = useState<number[][]>(() =>
    classification.map((q) => q.items.map(() => -1)),
  );
  const [scAns, setScAns] = useState<(number | null)[]>(() => scenarios.map(() => null));
  const [openPractical, setOpenPractical] = useState<boolean[]>(() => practical.map(() => false));
  const [done, setDone] = useState(false);

  const classificationTotal = classification.reduce((n, q) => n + q.items.length, 0);
  const total = mcq.length + tf.length + classificationTotal + scenarios.length;
  const answered =
    mcqAns.filter((x) => x !== null).length +
    tfAns.filter((x) => x !== null).length +
    clsAns.reduce((n, row) => n + row.filter((x) => x >= 0).length, 0) +
    scAns.filter((x) => x !== null).length;

  const score = (() => {
    let n = mcqAns.filter((a, i) => a === mcq[i]?.answer).length;
    n += tfAns.filter((a, i) => a === tf[i]?.answer).length;
    n += clsAns.reduce(
      (sum, row, qi) => sum + row.filter((a, ii) => a === classification[qi]?.items[ii]?.answer).length,
      0,
    );
    n += scAns.filter((a, i) => a === scenarios[i]?.answer).length;
    return n;
  })();

  const submit = () => {
    setDone(true);
    onDone(score, total);
    requestAnimationFrame(() => resultRef.current?.focus());
  };

  const retry = () => {
    setMcqAns(mcq.map(() => null));
    setTfAns(tf.map(() => null));
    setClsAns(classification.map((q) => q.items.map(() => -1)));
    setScAns(scenarios.map(() => null));
    setDone(false);
  };

  return (
    <div className="space-y-6">
      <section>
        <h3 className="mb-3 text-lg font-bold text-white">{t(S.quiz)}</h3>
        <div className="space-y-3">
          {mcq.map((q, qi) => (
            <fieldset key={qi} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <legend className="mb-3 w-full font-medium text-slate-100">
                <span className="me-2 text-emerald-400">{qi + 1}.</span>
                {t(q.q)}
              </legend>
              <div className="grid gap-2">
                {q.options.map((o, oi) => {
                  const selected = mcqAns[qi] === oi;
                  const right = done && oi === q.answer;
                  const wrong = done && selected && oi !== q.answer;
                  const id = `${baseId}-mcq${qi}-${oi}`;
                  return (
                    <label
                      key={oi}
                      htmlFor={id}
                      className={`flex min-h-11 cursor-pointer items-start gap-2 rounded-lg border px-3 py-2 text-sm ${
                        right
                          ? "border-emerald-500 bg-emerald-500/15 text-emerald-200"
                          : wrong
                            ? "border-red-500 bg-red-500/15 text-red-200"
                            : selected
                              ? "border-cyan-400 bg-cyan-400/10 text-cyan-100"
                              : "border-slate-700 bg-slate-950/50 text-slate-300"
                      } ${done ? "cursor-default" : ""}`}
                    >
                      <input
                        id={id}
                        type="radio"
                        name={`${baseId}-mcq${qi}`}
                        checked={selected}
                        disabled={done}
                        onChange={() => setMcqAns((a) => a.map((x, i) => (i === qi ? oi : x)))}
                        className="sr-only"
                      />
                      <span className="font-mono text-xs text-slate-400">{String.fromCharCode(65 + oi)}</span>
                      <span>{t(o)}</span>
                    </label>
                  );
                })}
              </div>
              {done && (
                <p className="mt-3 rounded-lg bg-slate-950/70 p-3 text-sm text-slate-300">
                  <b className={mcqAns[qi] === q.answer ? "text-emerald-400" : "text-red-400"}>
                    {mcqAns[qi] === q.answer ? t(S.correct) : t(S.incorrect)}.
                  </b>{" "}
                  <b>{t(S.why)}:</b> {t(q.why)}
                </p>
              )}
            </fieldset>
          ))}
        </div>
      </section>

      <section>
        <h3 className="mb-3 text-lg font-bold text-white">{t(S.trueFalse)}</h3>
        <div className="space-y-3">
          {tf.map((q, qi) => (
            <fieldset key={qi} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <legend className="mb-3 w-full font-medium text-slate-100">
                <span className="me-2 text-emerald-400">{qi + 1}.</span>
                {t(q.q)}
              </legend>
              <div className="flex flex-wrap gap-2">
                {[true, false].map((value) => {
                  const selected = tfAns[qi] === value;
                  const right = done && q.answer === value;
                  const wrong = done && selected && q.answer !== value;
                  const id = `${baseId}-tf${qi}-${value}`;
                  return (
                    <label
                      key={id}
                      htmlFor={id}
                      className={`flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border px-4 py-2 text-sm ${
                        right
                          ? "border-emerald-500 bg-emerald-500/15 text-emerald-200"
                          : wrong
                            ? "border-red-500 bg-red-500/15 text-red-200"
                            : selected
                              ? "border-cyan-400 bg-cyan-400/10 text-cyan-100"
                              : "border-slate-700 bg-slate-950/50 text-slate-300"
                      } ${done ? "cursor-default" : ""}`}
                    >
                      <input
                        id={id}
                        type="radio"
                        name={`${baseId}-tf${qi}`}
                        checked={selected}
                        disabled={done}
                        onChange={() => setTfAns((a) => a.map((x, i) => (i === qi ? value : x)))}
                        className="sr-only"
                      />
                      {value ? tr("True", "صح") : tr("False", "خطأ")}
                    </label>
                  );
                })}
              </div>
              {done && (
                <p className="mt-3 rounded-lg bg-slate-950/70 p-3 text-sm text-slate-300">
                  <b className={tfAns[qi] === q.answer ? "text-emerald-400" : "text-red-400"}>
                    {tfAns[qi] === q.answer ? t(S.correct) : t(S.incorrect)}.
                  </b>{" "}
                  <b>{t(S.why)}:</b> {t(q.why)}
                </p>
              )}
            </fieldset>
          ))}
        </div>
      </section>

      {classification.length > 0 && (
        <section>
          <h3 className="mb-3 text-lg font-bold text-white">{t(S.classification)}</h3>
          <div className="space-y-3">
            {classification.map((q, qi) => (
              <fieldset key={qi} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <legend className="mb-3 w-full font-medium text-slate-100">{t(q.prompt)}</legend>
                <div className="space-y-3">
                  {q.items.map((item, ii) => {
                    const selected = clsAns[qi]?.[ii] ?? -1;
                    const right = done && selected === item.answer;
                    const wrong = done && selected >= 0 && selected !== item.answer;
                    const id = `${baseId}-cls${qi}-${ii}`;
                    return (
                      <div key={ii} className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-center">
                        <label htmlFor={id} className="text-sm text-slate-300">
                          {t(item.text)}
                        </label>
                        <select
                          id={id}
                          value={selected}
                          disabled={done}
                          onChange={(e) => {
                            const value = Number(e.target.value);
                            setClsAns((rows) =>
                              rows.map((row, ri) =>
                                ri === qi ? row.map((x, ci) => (ci === ii ? value : x)) : row,
                              ),
                            );
                          }}
                          className={`min-h-11 rounded-lg border bg-slate-950 px-3 py-2 text-sm text-slate-100 ${
                            right ? "border-emerald-500" : wrong ? "border-red-500" : "border-slate-700"
                          }`}
                        >
                          <option value={-1}>{tr("Choose a category", "اختر تصنيفًا")}</option>
                          {q.categories.map((c, ci) => (
                            <option key={ci} value={ci}>
                              {t(c)}
                            </option>
                          ))}
                        </select>
                        {done && (
                          <span className={right ? "text-emerald-400" : "text-red-400"}>
                            {right ? "✓" : "✗"}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
                {done && q.why && (
                  <p className="mt-3 rounded-lg bg-slate-950/70 p-3 text-sm text-slate-300">
                    <b>{t(S.why)}:</b> {t(q.why)}
                  </p>
                )}
              </fieldset>
            ))}
          </div>
        </section>
      )}

      <section>
        <h3 className="mb-3 text-lg font-bold text-white">{t(S.scenarioQuestions)}</h3>
        <div className="space-y-3">
          {scenarios.map((q, qi) => (
            <fieldset key={qi} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <legend className="mb-2 w-full font-medium text-slate-100">
                <span className="me-2 text-emerald-400">{qi + 1}.</span>
                {t(q.question)}
              </legend>
              <p className="mb-3 rounded-lg bg-slate-950/60 p-3 text-sm text-slate-400">{t(q.scenario)}</p>
              <div className="grid gap-2">
                {q.options.map((o, oi) => {
                  const selected = scAns[qi] === oi;
                  const right = done && oi === q.answer;
                  const wrong = done && selected && oi !== q.answer;
                  const id = `${baseId}-sc${qi}-${oi}`;
                  return (
                    <label
                      key={oi}
                      htmlFor={id}
                      className={`flex min-h-11 cursor-pointer items-start gap-2 rounded-lg border px-3 py-2 text-sm ${
                        right
                          ? "border-emerald-500 bg-emerald-500/15 text-emerald-200"
                          : wrong
                            ? "border-red-500 bg-red-500/15 text-red-200"
                            : selected
                              ? "border-cyan-400 bg-cyan-400/10 text-cyan-100"
                              : "border-slate-700 bg-slate-950/50 text-slate-300"
                      } ${done ? "cursor-default" : ""}`}
                    >
                      <input
                        id={id}
                        type="radio"
                        name={`${baseId}-sc${qi}`}
                        checked={selected}
                        disabled={done}
                        onChange={() => setScAns((a) => a.map((x, i) => (i === qi ? oi : x)))}
                        className="sr-only"
                      />
                      <span className="font-mono text-xs text-slate-400">{String.fromCharCode(65 + oi)}</span>
                      <span>{t(o)}</span>
                    </label>
                  );
                })}
              </div>
              {done && (
                <p className="mt-3 rounded-lg bg-slate-950/70 p-3 text-sm text-slate-300">
                  <b className={scAns[qi] === q.answer ? "text-emerald-400" : "text-red-400"}>
                    {scAns[qi] === q.answer ? t(S.correct) : t(S.incorrect)}.
                  </b>{" "}
                  <b>{t(S.why)}:</b> {t(q.why)}
                </p>
              )}
            </fieldset>
          ))}
        </div>
      </section>

      {practical.length > 0 && (
        <section>
          <h3 className="mb-3 text-lg font-bold text-white">{t(S.practicalChecks)}</h3>
          <div className="space-y-3">
            {practical.map((p, i) => (
              <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <p className="font-medium text-slate-100">{t(p.task)}</p>
                {p.hint && <p className="mt-1 text-sm text-slate-400">{t(p.hint)}</p>}
                <button
                  type="button"
                  onClick={() => setOpenPractical((x) => x.map((v, j) => (j === i ? !v : v)))}
                  className="mt-3 min-h-11 rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-200 hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  {openPractical[i] ? t(S.hideAnswer) : t(S.revealAnswer)}
                </button>
                {openPractical[i] && (
                  <p className="mt-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-100">
                    {t(p.expected)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      <div ref={resultRef} tabIndex={-1} className="flex flex-wrap items-center gap-3 focus:outline-none">
        {!done ? (
          <>
            <button
              type="button"
              onClick={submit}
              disabled={answered < total}
              className="min-h-11 rounded-lg bg-emerald-500 px-5 py-2 font-semibold text-slate-950 focus-visible:ring-2 focus-visible:ring-emerald-300 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {t(S.submit)}
            </button>
            <span className="text-xs text-slate-400" aria-live="polite">
              {answered}/{total} {tr("answered", "تمت الإجابة")}
            </span>
          </>
        ) : (
          <>
            <Result score={score} total={total} />
            <button
              type="button"
              onClick={retry}
              className="min-h-11 rounded-lg border border-slate-600 px-4 py-2 text-slate-200 hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              {t(S.retry)}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
