import { useEffect, useId, useRef, useState } from "react";
import type { QuizQ } from "../content/types";
import { PASS, useLang } from "../store";
import { S } from "../strings";

export default function QuizRunner({
  questions,
  onDone,
  onRetry,
  showSessionTag,
}: {
  questions: (QuizQ & { tag?: string })[];
  onDone: (score: number, total: number) => void;
  onRetry?: () => void;
  showSessionTag?: boolean;
}) {
  const { t, tr } = useLang();
  const baseId = useId();
  const [ans, setAns] = useState<(number | null)[]>(() => questions.map(() => null));
  const [done, setDone] = useState(false);
  const resultRef = useRef<HTMLSpanElement>(null);
  const firstRadioRef = useRef<HTMLInputElement>(null);
  const wasDone = useRef(false);

  useEffect(() => {
    if (done) resultRef.current?.focus();
    else if (wasDone.current) firstRadioRef.current?.focus();
    wasDone.current = done;
  }, [done]);

  const score = ans.filter((a, i) => a === questions[i].answer).length;
  const total = questions.length;
  const answered = ans.filter((a) => a !== null).length;
  const ok = total > 0 && score / total >= PASS;

  const submit = () => {
    setDone(true);
    onDone(score, total);
  };
  const retry = () => {
    if (onRetry) {
      onRetry();
      return;
    }
    setAns(questions.map(() => null));
    setDone(false);
  };

  return (
    <div className="space-y-5">
      {questions.map((q, qi) => {
        const groupName = `${baseId}-q${qi}`;
        return (
          <fieldset key={qi} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <legend className="mb-3 w-full font-medium text-slate-100">
              <span className="me-2 text-emerald-400">{qi + 1}.</span>
              {t(q.q)}
              {showSessionTag && q.tag && (
                <span className="ms-2 rounded bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-400">
                  <span className="sr-only">{tr("Session", "الجلسة")} </span>
                  {q.tag}
                </span>
              )}
            </legend>
            <div className="grid gap-2">
              {q.options.map((o, oi) => {
                const sel = ans[qi] === oi;
                const right = done && oi === q.answer;
                const wrong = done && sel && oi !== q.answer;
                const id = `${groupName}-o${oi}`;
                return (
                  <label
                    key={oi}
                    htmlFor={id}
                    className={`flex min-h-11 cursor-pointer items-start gap-2 rounded-lg border px-3 py-2 text-start text-sm transition focus-within:ring-2 focus-within:ring-cyan-400 focus-within:ring-offset-2 focus-within:ring-offset-slate-950 ${
                      right
                        ? "border-emerald-500 bg-emerald-500/15 text-emerald-200"
                        : wrong
                          ? "border-red-500 bg-red-500/15 text-red-200"
                          : sel
                            ? "border-cyan-400 bg-cyan-400/10 text-cyan-100"
                            : "border-slate-700 bg-slate-950/50 text-slate-300 hover:border-slate-500"
                    } ${done ? "cursor-default" : ""}`}
                  >
                    <input
                      id={id}
                      ref={qi === 0 && oi === 0 ? firstRadioRef : undefined}
                      type="radio"
                      name={groupName}
                      value={oi}
                      checked={sel}
                      disabled={done}
                      onChange={() => setAns((a) => a.map((v, i) => (i === qi ? oi : v)))}
                      className="sr-only"
                    />
                    <span aria-hidden="true" className="font-mono text-xs text-slate-400">
                      {String.fromCharCode(65 + oi)}
                    </span>
                    <span>{t(o)}</span>
                    {right && <span className="ms-auto font-bold text-emerald-300">✓</span>}
                    {wrong && <span className="ms-auto font-bold text-red-300">✗</span>}
                  </label>
                );
              })}
            </div>
            {done && (
              <p className="mt-3 rounded-lg bg-slate-950/70 p-3 text-sm text-slate-300">
                <b className={ans[qi] === q.answer ? "text-emerald-400" : "text-red-400"}>
                  {ans[qi] === q.answer ? t(S.correct) : t(S.incorrect)}.
                </b>{" "}
                <b>{t(S.why)}:</b> {t(q.why)}
              </p>
            )}
          </fieldset>
        );
      })}
      <div className="flex flex-wrap items-center gap-3">
        {!done ? (
          <>
            <button
              type="button"
              onClick={submit}
              disabled={answered < total}
              className="min-h-11 rounded-lg bg-emerald-500 px-5 py-2 font-semibold text-slate-950 focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {t(S.submit)}
            </button>
            <span className="text-xs text-slate-400" aria-live="polite">
              {answered}/{total} {tr("answered", "تمت الإجابة")}
            </span>
          </>
        ) : (
          <>
            <span
              ref={resultRef}
              role="status"
              aria-live="polite"
              tabIndex={-1}
              className={`rounded-lg px-4 py-2 font-semibold focus:outline-none ${ok ? "bg-emerald-500/20 text-emerald-300" : "bg-amber-500/20 text-amber-300"}`}
            >
              {t(S.score)}: {score}/{total} · {ok ? t(S.passed) : t(S.notPassed)}
            </span>
            <button
              type="button"
              onClick={retry}
              className="min-h-11 rounded-lg border border-slate-600 px-4 py-2 text-slate-200 hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              {t(S.retry)}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
