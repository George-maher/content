import { describe, expect, it } from "vitest";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { SESSIONS } from "../src/content";
import { PHASES } from "../src/content/types";
import { caesar, passwordStats, sha256 } from "../src/lib/sha256";
import { parse } from "../src/router";

const ARABIC = /[\u0600-\u06FF]/;
const EXPECTED_SESSIONS = 20;

function walkL(o: unknown, path: string, out: { path: string; en: string; ar: string }[]) {
  if (o && typeof o === "object") {
    const r = o as Record<string, unknown>;
    if (typeof r.en === "string" && typeof r.ar === "string" && Object.keys(r).length === 2) {
      out.push({ path, en: r.en, ar: r.ar });
      return;
    }
    for (const k of Object.keys(r)) walkL(r[k], `${path}.${k}`, out);
  }
}

describe("curriculum completeness", () => {
  it(`has all ${EXPECTED_SESSIONS} sessions with sequential ids`, () => {
    expect(SESSIONS.map((s) => s.id)).toEqual(Array.from({ length: EXPECTED_SESSIONS }, (_, i) => i + 1));
  });
  it("uses only declared phases and keeps phases in order", () => {
    const ids = PHASES.map((p) => p.id);
    let last = 0;
    for (const s of SESSIONS) {
      expect(ids).toContain(s.phase);
      expect(s.phase).toBeGreaterThanOrEqual(last);
      last = s.phase;
    }
  });
  it("has unique titles", () => {
    const t = SESSIONS.map((s) => s.title.en);
    expect(new Set(t).size).toBe(t.length);
  });
});

describe("full v2 chapters", () => {
  const chapters = SESSIONS.filter((s) => s.schemaVersion === 2);

  it("declares the required 24-component structure", () => {
    for (const s of chapters) {
      expect(s.overview, `S${s.id} overview`).toBeTruthy();
      expect(s.whyItMatters, `S${s.id} whyItMatters`).toBeTruthy();
      expect(s.prerequisites?.length, `S${s.id} prerequisites`).toBeGreaterThan(0);
      expect(s.agenda?.length, `S${s.id} agenda`).toBeGreaterThan(0);
      expect(s.introduction, `S${s.id} introduction`).toBeTruthy();
      expect(s.examples?.length, `S${s.id} examples`).toBeGreaterThan(0);
      expect(s.realWorldScenarios?.length, `S${s.id} scenarios`).toBeGreaterThan(0);
      expect(s.instructorDemo, `S${s.id} instructor demo`).toBeTruthy();
      expect(s.exercises?.length, `S${s.id} exercises`).toBeGreaterThan(0);
      expect(s.expectedResults, `S${s.id} expected results`).toBeTruthy();
      expect(s.commonMistakes?.length, `S${s.id} common mistakes`).toBeGreaterThan(0);
      expect(s.bestPractices?.length, `S${s.id} best practices`).toBeGreaterThan(0);
      expect(s.keyTakeaways?.length, `S${s.id} key takeaways`).toBeGreaterThan(0);
      expect(s.homework.criteria?.length, `S${s.id} homework criteria`).toBeGreaterThan(0);
      expect(s.homework.challenge, `S${s.id} homework challenge`).toBeTruthy();
    }
  });

  it("teaches for exactly 90 minutes", () => {
    for (const s of chapters) {
      expect(s.minutes, `S${s.id} minutes`).toBe(90);
      expect(s.agenda!.reduce((n, a) => n + a.minutes, 0), `S${s.id} agenda total`).toBe(90);
      for (const a of s.agenda!) expect(a.minutes).toBeGreaterThan(0);
    }
  });

  it("meets the depth, vocabulary and assessment targets", () => {
    for (const s of chapters) {
      expect(s.objectives.length, `S${s.id} objectives`).toBeGreaterThanOrEqual(5);
      expect(s.sections.length, `S${s.id} sections`).toBeGreaterThanOrEqual(8);
      expect(s.terms.length, `S${s.id} terms`).toBeGreaterThanOrEqual(20);
      expect(s.quiz.length, `S${s.id} mcq`).toBeGreaterThanOrEqual(10);
      expect(s.trueFalse?.length, `S${s.id} true/false`).toBeGreaterThanOrEqual(5);
      expect(s.classification?.length, `S${s.id} classification`).toBeGreaterThanOrEqual(3);
      expect(s.scenarios?.length, `S${s.id} scenarios`).toBeGreaterThanOrEqual(2);
      expect(s.practicalChecks?.length, `S${s.id} practical checks`).toBeGreaterThanOrEqual(1);
      expect(s.refs.length, `S${s.id} refs`).toBeGreaterThanOrEqual(5);
    }
  });

  it("ships a complete major lab", () => {
    for (const s of chapters) {
      const lab = s.lab;
      expect(lab.objectives?.length, `S${s.id} lab objectives`).toBeGreaterThan(0);
      expect(lab.prerequisites?.length, `S${s.id} lab prerequisites`).toBeGreaterThan(0);
      expect(lab.environment, `S${s.id} lab environment`).toBeTruthy();
      expect(lab.tools?.length, `S${s.id} lab tools`).toBeGreaterThan(0);
      expect(lab.authorization, `S${s.id} lab authorization`).toBeTruthy();
      expect(lab.detailedSteps?.length, `S${s.id} lab steps`).toBeGreaterThanOrEqual(5);
      expect(lab.troubleshooting?.length, `S${s.id} lab troubleshooting`).toBeGreaterThan(0);
      expect(lab.deliverables?.length, `S${s.id} lab deliverables`).toBeGreaterThan(0);
      expect(lab.rubric?.length, `S${s.id} lab rubric`).toBeGreaterThan(0);
      expect(lab.rubric!.reduce((n, r) => n + r.weight, 0), `S${s.id} rubric total`).toBe(100);
      expect(lab.steps.length).toBeGreaterThanOrEqual(5);
    }
  });
});

describe.each(SESSIONS.map((s) => [s.id, s] as const))("session %i", (_id, s) => {
  it("has a full lesson", () => {
    expect(s.objectives.length).toBeGreaterThanOrEqual(4);
    expect(s.sections.length).toBeGreaterThanOrEqual(4);
    const words = s.sections.flatMap((x) => x.p.map((q) => q.en)).join(" ").split(/\s+/).length;
    expect(words).toBeGreaterThan(200);
    expect(s.terms.length).toBeGreaterThanOrEqual(6);
    expect(s.minutes).toBeGreaterThanOrEqual(45);
  });
  it("has a diagram", () => {
    expect(s.diagram.nodes.length).toBeGreaterThanOrEqual(4);
    expect(["flow", "layers", "cycle", "grid"]).toContain(s.diagram.kind);
  });
  it("has a complete lab", () => {
    expect(s.lab.steps.length).toBeGreaterThanOrEqual(5);
    expect(s.lab.safety.en.length).toBeGreaterThan(30);
    expect(s.lab.expected.en.length).toBeGreaterThan(30);
    if (s.lab.tool === "match") {
      expect(s.lab.match).toBeTruthy();
      expect(s.lab.match!.items.length).toBeGreaterThanOrEqual(5);
      for (const it of s.lab.match!.items) expect(it.answer).toBeLessThan(s.lab.match!.options.length);
    }
    if (s.lab.tool === "order") {
      expect(s.lab.order).toBeTruthy();
      expect(s.lab.order!.items.length).toBeGreaterThanOrEqual(5);
    }
  });
  it("has a valid quiz (>=6 questions, 4 options each)", () => {
    expect(s.quiz.length).toBeGreaterThanOrEqual(6);
    for (const q of s.quiz) {
      expect(q.options.length).toBe(4);
      expect(q.answer).toBeGreaterThanOrEqual(0);
      expect(q.answer).toBeLessThan(4);
      expect(q.why.en.length).toBeGreaterThan(15);
    }
    expect(new Set(s.quiz.map((q) => q.answer)).size).toBeGreaterThan(1);
  });
  it("has homework and references", () => {
    expect(s.homework.tasks.length).toBeGreaterThanOrEqual(3);
    expect(s.homework.deliverable.en.length).toBeGreaterThan(20);
    expect(s.refs.length).toBeGreaterThanOrEqual(3);
    for (const r of s.refs) expect(r.url).toMatch(/^https:\/\//);
  });
  it("is fully bilingual (English + real Arabic)", () => {
    const all: { path: string; en: string; ar: string }[] = [];
    walkL(s, `s${s.id}`, all);
    expect(all.length).toBeGreaterThan(100);
    for (const x of all) {
      expect(x.en.trim().length, x.path).toBeGreaterThan(0);
      expect(x.ar.trim().length, x.path).toBeGreaterThan(0);
      if (x.en.length > 25) expect(ARABIC.test(x.ar), `Arabic missing at ${x.path}`).toBe(true);
    }
  });
  it("contains no placeholder text and no Python", () => {
    const j = JSON.stringify(s);
    expect(j).not.toMatch(/lorem|todo|tbd|placeholder|coming soon|to be added/i);
    expect(j).not.toMatch(/python|\.py\b|pip install|django|flask|pandas/i);
  });
});

describe("major lab identity", () => {
  it("uses unique, well-formed major lab ids and links labs to the correct sessions", () => {
    const labs = SESSIONS.filter((s) => s.majorLabId);
    const ids = labs.map((s) => s.majorLabId!);
    for (const id of ids) expect(id).toMatch(/^lab-\d{2}$/);
    // Blueprint labs 8-10 are split across two sessions each (D-4 merges), so a
    // lab id may appear on at most two sessions.
    const counts = ids.reduce<Record<string, number>>((acc, id) => {
      acc[id] = (acc[id] || 0) + 1;
      return acc;
    }, {});
    for (const n of Object.values(counts)) expect(n).toBeLessThanOrEqual(2);
    // Lab 1 = threat identification & phishing analysis (Session 3)
    expect(SESSIONS.find((s) => s.majorLabId === "lab-01")?.id).toBe(3);
    // Lab 2 = Linux command line & permissions (Session 5)
    expect(SESSIONS.find((s) => s.majorLabId === "lab-02")?.id).toBe(5);
    // Lab 3 = Windows administration & Active Directory (Session 10)
    expect(SESSIONS.find((s) => s.majorLabId === "lab-03")?.id).toBe(10);
    // Lab 4 = IP addressing & subnetting (Session 6)
    expect(SESSIONS.find((s) => s.majorLabId === "lab-04")?.id).toBe(6);
    // Lab 5 = network discovery & firewall rules (Session 8)
    expect(SESSIONS.find((s) => s.majorLabId === "lab-05")?.id).toBe(8);
    // Lab 6 = web server, document root & HTTP (Session 11)
    expect(SESSIONS.find((s) => s.majorLabId === "lab-06")?.id).toBe(11);
    // Lab 7 = web application security & SQL injection (Session 12)
    expect(SESSIONS.find((s) => s.majorLabId === "lab-07")?.id).toBe(12);
    // Lab 8 = cryptography & access control, split across Sessions 9 and 13
    expect(SESSIONS.filter((s) => s.majorLabId === "lab-08").map((s) => s.id).sort((a, b) => a - b)).toEqual([9, 13]);
  });
});

describe("Python is excluded from the whole source tree", () => {
  const files: string[] = [];
  const walk = (d: string) => {
    for (const f of readdirSync(d)) {
      const p = join(d, f);
      if (statSync(p).isDirectory()) walk(p);
      else files.push(p);
    }
  };
  walk("src");
  it("no source file mentions it", () => {
    for (const f of files) expect(readFileSync(f, "utf8"), f).not.toMatch(/python/i);
  });
});

describe("lab tool helpers", () => {
  it("sha256 matches FIPS vectors", () => {
    expect(sha256("")).toBe("e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855");
    expect(sha256("abc")).toBe("ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad");
    expect(sha256("abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq")).toBe("248d6a61d20638b8e5c026930c3e6039a33ce45964ff2167f6ecedd419db06c1");
  });
  it("caesar round-trips", () => {
    expect(caesar("Hello, World", 3)).toBe("Khoor, Zruog");
    expect(caesar(caesar("Attack at Dawn", 7), -7)).toBe("Attack at Dawn");
  });
  it("password stats", () => {
    expect(passwordStats("").bits).toBe(0);
    expect(passwordStats("abcdefgh").pool).toBe(26);
    expect(passwordStats("aA1!").pool).toBe(95);
  });
  it("router parses hashes", () => {
    expect(parse("#/session/5/lab")).toEqual({ page: "session", id: 5, tab: "lab" });
    expect(parse("#/session/99")).toEqual({ page: "notFound" });
    expect(parse("#/session/5.5")).toEqual({ page: "notFound" });
    expect(parse("#/exam")).toEqual({ page: "exam" });
    expect(parse("#/unknown")).toEqual({ page: "notFound" });
  });
});
