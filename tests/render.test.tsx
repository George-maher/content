import { beforeAll, describe, expect, it } from "vitest";
import type { ReactElement } from "react";
import { renderToString } from "react-dom/server";
import { SESSIONS } from "../src/content";
import { EXAM_QUESTIONS } from "../src/constants";
import { buildExam } from "../src/lib/exam";
import SessionView from "../src/components/SessionView";
import { Exam, Glossary, Home, SessionList } from "../src/components/Pages";
import { Provider } from "../src/store";
import type { Tab } from "../src/router";

const store: Record<string, string> = {};
beforeAll(() => {
  (globalThis as any).localStorage = {
    getItem: (k: string) => store[k] ?? null,
    setItem: (k: string, v: string) => void (store[k] = v),
    removeItem: (k: string) => void delete store[k],
  };
});

const TABS: Tab[] = ["lesson", "lab", "quiz", "homework", "refs"];
const html = (el: ReactElement) => renderToString(<Provider>{el}</Provider>);

describe.each(["en", "ar"])("render in %s", (lang) => {
  beforeAll(() => {
    store["csf.lang"] = lang;
  });

  it(
    "renders every session on every tab without errors",
    () => {
      for (const s of SESSIONS) {
        for (const tab of TABS) {
          const out = html(<SessionView s={s} tab={tab} />);
          expect(out.length, `S${s.id}/${tab}`).toBeGreaterThan(500);
          if (tab === "lesson") expect(out).toContain(lang === "ar" ? s.title.ar.replace(/&/g, "&amp;") : s.title.en.replace(/&/g, "&amp;"));
          if (lang === "ar" && tab === "lesson") expect(/[\u0600-\u06FF]/.test(out)).toBe(true);
        }
      }
    },
    20_000,
  );

  it("renders home, session list, glossary and exam", () => {
    expect(html(<Home />)).toContain("20");
    expect(html(<SessionList />).match(/href="#\/session\//g)?.length).toBe(20);
    expect(html(<Glossary />).length).toBeGreaterThan(2000);
    expect(html(<Exam />).length).toBeGreaterThan(200);
  });
});

describe("exam pool", () => {
  it("draws 40 distinct questions from the full pool", () => {
    const all = SESSIONS.flatMap((s) => s.quiz);
    expect(all.length).toBeGreaterThanOrEqual(EXAM_QUESTIONS);
    const exam = buildExam(SESSIONS, EXAM_QUESTIONS, 12345);
    expect(exam.length).toBe(EXAM_QUESTIONS);
    expect(new Set(exam.map((q) => q.q.en)).size).toBe(EXAM_QUESTIONS);
    for (const q of exam) expect(all.some((x) => x.q.en === q.q.en)).toBe(true);
  });
  it("varies questions and options, and remaps the correct answer", () => {
    const a = buildExam(SESSIONS, 10, 1);
    const b = buildExam(SESSIONS, 10, 2);
    expect(a.map((q) => q.q.en)).not.toEqual(b.map((q) => q.q.en));
    const all = SESSIONS.flatMap((s) => s.quiz);
    for (const q of [...a, ...b]) {
      const original = all.find((x) => x.q.en === q.q.en);
      expect(original).toBeTruthy();
      expect(q.options[q.answer]).toEqual(original!.options[original!.answer]);
    }
  });
  it("every lab tool id in use renders a component (no empty lab)", () => {
    const tools = new Set(SESSIONS.map((s) => s.lab.tool));
    expect(tools.size).toBeGreaterThanOrEqual(12);
    for (const s of SESSIONS) {
      if (s.lab.tool === "match") expect(s.lab.match).toBeTruthy();
      if (s.lab.tool === "order") expect(s.lab.order).toBeTruthy();
    }
  });
});
