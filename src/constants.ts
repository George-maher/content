import { SESSIONS } from "./content";

/** Number of sessions in the course. Kept in one place so UI copy never drifts. */
export const TOTAL_SESSIONS = SESSIONS.length;

/** Passing mark for session quizzes and the final exam. */
export const PASS = 0.7;

/** Number of questions drawn for a final-exam attempt. */
export const EXAM_QUESTIONS = 40;

/** Number of major practical labs in Level 1. */
export const MAJOR_LABS = 10;

/** Versioned storage keys. Bump the version when the persisted shape changes. */
export const STORAGE_KEYS = {
  progress: "csf.progress.v2",
  legacyProgress: "csf.progress.v1",
  migrationNotice: "csf.progress.migration",
  lang: "csf.lang",
} as const;
