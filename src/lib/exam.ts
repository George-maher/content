import type { QuizQ, Session } from "../content/types";
import { EXAM_QUESTIONS } from "../constants";

export type ExamQuestion = QuizQ & { tag?: string };

/** Deterministic PRNG so an attempt can be reproduced from its seed. */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function shuffle<T>(items: readonly T[], rand: () => number): T[] {
  const out = items.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Draw `count` questions from the full pool and shuffle each question's
 * options. The stored `answer` is remapped to the new option order so scoring
 * stays correct.
 */
export function buildExam(
  sessions: readonly Session[],
  count = EXAM_QUESTIONS,
  seed = 1,
): ExamQuestion[] {
  const pool: ExamQuestion[] = sessions.flatMap((s) =>
    s.quiz.map((q) => ({ ...q, tag: `S${s.id}` })),
  );
  if (pool.length === 0 || count <= 0) return [];

  const rand = mulberry32(seed);
  const picked = shuffle(pool, rand).slice(0, Math.min(count, pool.length));

  return picked.map((q) => {
    const order = shuffle(
      q.options.map((_, i) => i),
      rand,
    );
    return {
      q: q.q,
      why: q.why,
      tag: q.tag,
      options: order.map((i) => q.options[i]),
      answer: order.indexOf(q.answer),
    };
  });
}

/** Non-deterministic seed for a fresh attempt, using Web Crypto when available. */
export function randomSeed(): number {
  try {
    if (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function") {
      const values = new Uint32Array(1);
      crypto.getRandomValues(values);
      return values[0] || 1;
    }
  } catch {
    /* fall through */
  }
  return (Date.now() ^ Math.floor(Math.random() * 0xffffffff)) >>> 0 || 1;
}
