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

/**
 * Which legacy session(s) feed each new session's reading progress.
 * Merged sessions require every source to have been read. An empty list means
 * the new session is treated as new content and starts unread.
 */
const READ_SOURCES: Record<number, number[]> = {
  1: [1],
  2: [2],
  3: [3, 4],
  4: [5],
  5: [],
  6: [6],
  7: [7],
  8: [8],
  9: [9, 10],
  10: [],
  11: [],
  12: [13],
  13: [11, 12],
  14: [14],
  15: [16],
  16: [17],
  17: [18],
  18: [15, 19],
  19: [1, 20],
  20: [],
};

/**
 * Session reorder map: old session id -> new session id (Level 1 reorder of
 * sessions 6–12). Only these ids changed; 1–5 and 13–20 keep their numbers.
 * Used to carry existing (v2-format) student progress with its educational
 * session when the displayed session number changes.
 */
export const SESSION_ID_REMAP: Record<number, number> = {
  6: 10,
  7: 6,
  8: 7,
  9: 8,
  10: 11,
  11: 12,
  12: 9,
};

/**
 * Re-key a progress object from old session ids to new session ids so a
 * student's records stay attached to the same educational session. Returns the
 * re-keyed progress and whether any key actually moved.
 */
export function remapSessionIds(
  progress: Progress,
): { progress: Progress; changed: boolean } {
  const move = (map: Record<number, unknown>): { out: Record<number, unknown>; changed: boolean } => {
    const out: Record<number, unknown> = {};
    let changed = false;
    for (const [k, v] of Object.entries(map)) {
      const oldId = Number(k);
      const newId = SESSION_ID_REMAP[oldId] ?? oldId;
      if (newId !== oldId) changed = true;
      out[newId] = v;
    }
    return { out, changed };
  };
  const read = move(progress.read);
  const lab = move(progress.lab);
  const hw = move(progress.hw);
  const quiz = move(progress.quiz);
  const changed = read.changed || lab.changed || hw.changed || quiz.changed;
  return {
    progress: {
      read: read.out as Record<number, boolean>,
      lab: lab.out as Record<number, boolean[]>,
      hw: hw.out as Record<number, boolean[]>,
      quiz: quiz.out as Record<number, QuizScore>,
      exam: progress.exam,
    },
    changed,
  };
}

/**
 * Migrate the original v1 progress shape to the restructured course.
 *
 * Reading progress survives where the topic survives. Quiz, lab and homework
 * results are reset because the questions, steps and deliverables change in
 * every rewritten session. The final exam is reset because the question bank
 * changes. The caller keeps the v1 key untouched so a rollback is possible.
 */
export function migrateV1ToV2(previous: Progress): Progress {
  const read: Record<number, boolean> = {};
  for (const [key, sources] of Object.entries(READ_SOURCES)) {
    const id = Number(key);
    if (sources.length > 0 && sources.every((source) => previous.read[source] === true)) {
      read[id] = true;
    }
  }
  return { read, lab: {}, hw: {}, quiz: {} };
}

export interface LoadedProgress {
  progress: Progress;
  migrated: boolean;
}

/**
 * Load the current progress key, falling back to the v1 key and migrating it.
 * The legacy value is never deleted by this function.
 */
export function loadProgress(currentRaw: string | null, legacyRaw: string | null): LoadedProgress {
  if (currentRaw) return { progress: parseProgress(currentRaw), migrated: false };
  if (legacyRaw) {
    return { progress: migrateV1ToV2(parseProgress(legacyRaw)), migrated: true };
  }
  return { progress: emptyProgress(), migrated: false };
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
