export interface QuizScore {
  score: number;
  total: number;
}

export interface Progress {
  read: Record<number, boolean>;
  lab: Record<number, boolean[]>;
  hw: Record<number, boolean[]>;
  quiz: Record<number, QuizScore>;
  exam?: QuizScore;
}

export const EMPTY_PROGRESS: Progress = { read: {}, lab: {}, hw: {}, quiz: {} };

export function emptyProgress(): Progress {
  return { read: {}, lab: {}, hw: {}, quiz: {} };
}

const isRecord = (x: unknown): x is Record<string, unknown> =>
  typeof x === "object" && x !== null && !Array.isArray(x);

/** Session ids are positive integers serialized as object keys. */
function sessionKey(key: string): number | null {
  if (!/^\d+$/.test(key)) return null;
  const id = Number(key);
  return Number.isSafeInteger(id) && id > 0 ? id : null;
}

export function validScore(x: unknown): x is QuizScore {
  if (!isRecord(x)) return false;
  const { score, total } = x;
  return (
    typeof score === "number" &&
    typeof total === "number" &&
    Number.isFinite(score) &&
    Number.isFinite(total) &&
    Number.isInteger(score) &&
    Number.isInteger(total) &&
    total > 0 &&
    score >= 0 &&
    score <= total
  );
}

function sanitizeBooleanMap(x: unknown): Record<number, boolean> {
  const out: Record<number, boolean> = {};
  if (!isRecord(x)) return out;
  for (const [k, v] of Object.entries(x)) {
    const id = sessionKey(k);
    if (id !== null && typeof v === "boolean") out[id] = v;
  }
  return out;
}

function sanitizeBoolArrays(x: unknown): Record<number, boolean[]> {
  const out: Record<number, boolean[]> = {};
  if (!isRecord(x)) return out;
  for (const [k, v] of Object.entries(x)) {
    const id = sessionKey(k);
    if (id === null || !Array.isArray(v)) continue;
    if (v.every((b) => typeof b === "boolean")) out[id] = [...v];
  }
  return out;
}

function sanitizeScores(x: unknown): Record<number, QuizScore> {
  const out: Record<number, QuizScore> = {};
  if (!isRecord(x)) return out;
  for (const [k, v] of Object.entries(x)) {
    const id = sessionKey(k);
    if (id !== null && validScore(v)) out[id] = { score: v.score, total: v.total };
  }
  return out;
}

/**
 * Parse and validate persisted progress. Unknown keys are dropped and any
 * invalid section falls back to empty rather than crashing the UI.
 */
export function parseProgress(raw: string | null): Progress {
  if (!raw) return emptyProgress();
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return emptyProgress();
  }
  if (!isRecord(data)) return emptyProgress();

  const progress: Progress = {
    read: sanitizeBooleanMap(data.read),
    lab: sanitizeBoolArrays(data.lab),
    hw: sanitizeBoolArrays(data.hw),
    quiz: sanitizeScores(data.quiz),
  };
  if (validScore(data.exam)) progress.exam = { score: data.exam.score, total: data.exam.total };
  return progress;
}

/** Clamp a persisted boolean array to the current number of steps. */
export function clampFlags(flags: boolean[] | undefined, length: number): boolean[] {
  if (!Number.isInteger(length) || length <= 0) return [];
  return Array.from({ length }, (_, i) => flags?.[i] === true);
}

/** Fraction (0–1) of completed flags, safe against missing/zero denominators. */
export function completion(flags: boolean[] | undefined, length: number): number {
  if (!Number.isInteger(length) || length <= 0) return 0;
  return clampFlags(flags, length).filter(Boolean).length / length;
}

export function bestScore(prev: QuizScore | undefined, next: QuizScore): QuizScore {
  if (!validScore(next)) return prev ?? next;
  if (!prev || !validScore(prev)) return next;
  return prev.score / prev.total >= next.score / next.total ? prev : next;
}
