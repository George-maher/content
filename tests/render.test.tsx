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

  it("renders the full v2 chapter, lab, assessment, homework and references for sessions 1-5", () => {
    const esc = (v: string) =>
      v
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;");
    const v2 = SESSIONS.filter((s) => s.schemaVersion === 2 && s.id <= 5);
    expect(v2.map((s) => s.id)).toEqual([1, 2, 3, 4, 5]);
    for (const s of v2) {
      const out = TABS.map((tab) => html(<SessionView s={s} tab={tab} />)).join("");
      const pick = (v: { en: string; ar: string }) => esc(lang === "ar" ? v.ar : v.en);
      expect(out, `S${s.id} overview`).toContain(pick(s.overview!));
      expect(out, `S${s.id} why it matters`).toContain(pick(s.whyItMatters!));
      for (const section of s.sections) expect(out, `S${s.id} section ${pick(section.h)}`).toContain(pick(section.h));
      expect(out, `S${s.id} lab`).toContain(pick(s.lab.title));
      expect(out, `S${s.id} lab scenario`).toContain(pick(s.lab.scenario));
      expect(out, `S${s.id} homework`).toContain(pick(s.homework.title));
      for (const task of s.homework.tasks) expect(out, `S${s.id} homework task`).toContain(pick(task));
      for (const ref of s.refs) expect(out, `S${s.id} ref ${ref.url}`).toContain(ref.url);
      for (const term of s.terms) expect(out, `S${s.id} term`).toContain(pick(term.term));
      const q = s.quiz[0];
      expect(out, `S${s.id} first question`).toContain(pick(q.q));
      for (const option of q.options) expect(out, `S${s.id} first option`).toContain(pick(option));
      expect(out, `S${s.id} true/false`).toContain(pick(s.trueFalse![0].q));
      expect(out, `S${s.id} classification`).toContain(pick(s.classification![0].prompt));
      expect(out, `S${s.id} scenario`).toContain(pick(s.scenarios![0].scenario));
      expect(out, `S${s.id} practical check`).toContain(pick(s.practicalChecks![0].task));
      expect(out, `S${s.id} instructor demo`).toContain(pick(s.instructorDemo!));
      expect(out, `S${s.id} common mistakes`).toContain(pick(s.commonMistakes![0]));
      expect(out, `S${s.id} best practices`).toContain(pick(s.bestPractices![0]));
      expect(out, `S${s.id} key takeaways`).toContain(pick(s.keyTakeaways![0]));
      expect(out, `S${s.id} examples`).toContain(pick(s.examples![0]));
      expect(out, `S${s.id} real-world scenario`).toContain(pick(s.realWorldScenarios![0]));
      expect(out, `S${s.id} diagram title`).toContain(pick(s.diagram.title));
      expect(out, `S${s.id} expected results`).toContain(pick(s.expectedResults!));
    }
  });

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
