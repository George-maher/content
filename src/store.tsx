import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { L, Lang, Session } from "./content/types";
import { PASS, STORAGE_KEYS } from "./constants";
import {
  bestScore,
  clampFlags,
  completion,
  emptyProgress,
  loadProgress,
  parseProgress,
  type Progress,
  type QuizScore,
} from "./lib/progress";
import { safeGet, safeSet } from "./lib/storage";

export type { Progress } from "./lib/progress";
export { PASS } from "./constants";

const LKEY = STORAGE_KEYS.lang;
const KEY = STORAGE_KEYS.progress;
const LEGACY_KEY = STORAGE_KEYS.legacyProgress;
const MIGRATION_KEY = STORAGE_KEYS.migrationNotice;

function initialProgress(): Progress {
  const loaded = loadProgress(safeGet(KEY), safeGet(LEGACY_KEY));
  if (loaded.migrated) {
    safeSet(KEY, JSON.stringify(loaded.progress));
    safeSet(MIGRATION_KEY, "1");
  }
  return loaded.progress;
}

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (x: L) => string;
  tr: (en: string, ar: string) => string;
}

interface ProgressCtx {
  progress: Progress;
  migrationNotice: boolean;
  dismissMigrationNotice: () => void;
  setRead: (id: number, v: boolean) => void;
  toggleLab: (id: number, i: number, n: number) => void;
  toggleHw: (id: number, i: number, n: number) => void;
  saveQuiz: (id: number, score: number, total: number) => void;
  saveExam: (score: number, total: number) => void;
  reset: () => void;
  resetSession: (id: number) => void;
}

const LangContext = createContext<LangCtx | null>(null);
const ProgressContext = createContext<ProgressCtx | null>(null);

export function useLang(): LangCtx {
  const value = useContext(LangContext);
  if (!value) throw new Error("useLang must be used inside <Provider>");
  return value;
}

export function useProgress(): ProgressCtx {
  const value = useContext(ProgressContext);
  if (!value) throw new Error("useProgress must be used inside <Provider>");
  return value;
}

/** Convenience hook for the few components that genuinely need both slices. */
export function useApp(): LangCtx & ProgressCtx {
  const lang = useLang();
  const progress = useProgress();
  return useMemo(() => ({ ...lang, ...progress }), [lang, progress]);
}

function toggleAt(
  rec: Record<number, boolean[]>,
  id: number,
  i: number,
  n: number,
): Record<number, boolean[]> {
  const arr = clampFlags(rec[id], n);
  if (i >= 0 && i < n) arr[i] = !arr[i];
  return { ...rec, [id]: arr };
}

function initialLang(): Lang {
  // Arabic is the default learning language; an explicit stored choice wins.
  return safeGet(LKEY) === "en" ? "en" : "ar";
}

export function Provider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const [progress, setProgress] = useState<Progress>(initialProgress);
  const [migrationNotice, setMigrationNotice] = useState(() => safeGet(MIGRATION_KEY) === "1");
  const progressRef = useRef(progress);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    safeSet(LKEY, lang);
  }, [lang]);

  useEffect(() => {
    progressRef.current = progress;
    const timer = window.setTimeout(() => safeSet(KEY, JSON.stringify(progress)), 150);
    return () => window.clearTimeout(timer);
  }, [progress]);

  // Flush the pending write when the page is hidden/closed.
  useEffect(() => {
    const flush = () => safeSet(KEY, JSON.stringify(progressRef.current));
    window.addEventListener("pagehide", flush);
    return () => window.removeEventListener("pagehide", flush);
  }, []);

  // Keep tabs reasonably in sync instead of silently overwriting each other.
  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === KEY) setProgress(parseProgress(event.newValue));
      if (event.key === LKEY && (event.newValue === "en" || event.newValue === "ar")) {
        setLangState(event.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setLang = useCallback((value: Lang) => setLangState(value), []);

  const setRead = useCallback((id: number, value: boolean) => {
    setProgress((p) => ({ ...p, read: { ...p.read, [id]: value } }));
  }, []);

  const toggleLab = useCallback((id: number, i: number, n: number) => {
    setProgress((p) => ({ ...p, lab: toggleAt(p.lab, id, i, n) }));
  }, []);

  const toggleHw = useCallback((id: number, i: number, n: number) => {
    setProgress((p) => ({ ...p, hw: toggleAt(p.hw, id, i, n) }));
  }, []);

  const saveQuiz = useCallback((id: number, score: number, total: number) => {
    if (!Number.isFinite(score) || !Number.isFinite(total) || total <= 0) return;
    setProgress((p) => ({
      ...p,
      quiz: { ...p.quiz, [id]: bestScore(p.quiz[id], { score, total }) },
    }));
  }, []);

  const saveExam = useCallback((score: number, total: number) => {
    if (!Number.isFinite(score) || !Number.isFinite(total) || total <= 0) return;
    setProgress((p) => ({ ...p, exam: bestScore(p.exam, { score, total }) }));
  }, []);

  const dismissMigrationNotice = useCallback(() => {
    safeSet(MIGRATION_KEY, "0");
    setMigrationNotice(false);
  }, []);

  const reset = useCallback(() => {
    safeSet(MIGRATION_KEY, "0");
    setMigrationNotice(false);
    setProgress(emptyProgress());
  }, []);

  const resetSession = useCallback((id: number) => {
    setProgress((p) => {
      const read = { ...p.read };
      const lab = { ...p.lab };
      const hw = { ...p.hw };
      const quiz = { ...p.quiz };
      delete read[id];
      delete lab[id];
      delete hw[id];
      delete quiz[id];
      return { ...p, read, lab, hw, quiz };
    });
  }, []);

  const langValue = useMemo<LangCtx>(
    () => ({
      lang,
      setLang,
      t: (x) => x[lang],
      tr: (en, ar) => (lang === "ar" ? ar : en),
    }),
    [lang, setLang],
  );

  const progressValue = useMemo<ProgressCtx>(
    () => ({
      progress,
      migrationNotice,
      dismissMigrationNotice,
      setRead,
      toggleLab,
      toggleHw,
      saveQuiz,
      saveExam,
      reset,
      resetSession,
    }),
    [
      progress,
      migrationNotice,
      dismissMigrationNotice,
      setRead,
      toggleLab,
      toggleHw,
      saveQuiz,
      saveExam,
      reset,
      resetSession,
    ],
  );

  return (
    <LangContext.Provider value={langValue}>
      <ProgressContext.Provider value={progressValue}>{children}</ProgressContext.Provider>
    </LangContext.Provider>
  );
}

export function status(p: Progress, s: Session) {
  const lab = completion(p.lab[s.id], s.lab.steps.length);
  const hw = completion(p.hw[s.id], s.homework.tasks.length);
  const q: QuizScore | undefined = p.quiz[s.id];
  const quizPass = !!q && q.total > 0 && q.score / q.total >= PASS;
  const read = p.read[s.id] === true;
  const pct = Math.round(((read ? 1 : 0) + lab + hw + (quizPass ? 1 : 0)) * 25);
  return { read, lab, hw, quizPass, quizScore: q, pct };
}
