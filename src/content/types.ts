export type Lang = "en" | "ar";
export type L = { en: string; ar: string };
export const l = (en: string, ar: string): L => ({ en, ar });

export interface Section {
  h: L;
  p: L[];
  bullets?: L[];
  callout?: { kind: "tip" | "warn" | "key"; text: L };
  table?: { head: L[]; rows: L[][] };
  /** Optional per-section diagram (e.g. a career workflow or track overview). */
  diagram?: Diagram;
  /** Optional data-driven matching activities rendered with the reusable MatchTool. */
  matches?: MatchData[];
}

export interface DiagramNode {
  label: L;
  desc?: L;
}
export interface Diagram {
  kind: "flow" | "layers" | "cycle" | "grid";
  title: L;
  caption: L;
  nodes: DiagramNode[];
}

export type ToolId =
  | "cia"
  | "phish"
  | "perm"
  | "cidr"
  | "port"
  | "firewall"
  | "cipher"
  | "hash"
  | "password"
  | "rbac"
  | "sqli"
  | "risk"
  | "logs"
  | "match"
  | "order";

export interface MatchData {
  prompt: L;
  options: L[];
  items: { text: L; answer: number }[];
}
export interface OrderData {
  prompt: L;
  /** items listed in the CORRECT order */
  items: { text: L; hint?: L }[];
}

export interface Lab {
  title: L;
  scenario: L;
  safety: L;
  steps: L[];
  expected: L;
  tool: ToolId;
  match?: MatchData;
  order?: OrderData;
}

export interface QuizQ {
  q: L;
  options: L[];
  answer: number;
  why: L;
}
export interface Homework {
  title: L;
  tasks: L[];
  deliverable: L;
}
export interface Ref {
  title: string;
  org: string;
  url: string;
  /** Optional bilingual explanation of what the student can learn and for which track. */
  desc?: L;
}
export interface Term {
  term: L;
  def: L;
}

export interface Session {
  id: number;
  phase: 1 | 2 | 3 | 4 | 5;
  title: L;
  summary: L;
  minutes: number;
  objectives: L[];
  sections: Section[];
  diagram: Diagram;
  lab: Lab;
  quiz: QuizQ[];
  homework: Homework;
  refs: Ref[];
  terms: Term[];
  /** Optional interactive career interest quiz (used by Session 1's career module). */
  careerQuiz?: CareerQuizData;
}

export type CareerCat = "soc" | "pentest" | "appsec" | "cloud" | "dfir" | "ti" | "net" | "grc";

export interface CareerQuizOption {
  text: L;
  cat: CareerCat;
}
export interface CareerQuizQ {
  q: L;
  options: CareerQuizOption[];
}
export interface CareerQuizData {
  /** Heading shown above the quiz. */
  title: L;
  intro: L;
  disclaimer: L;
  /** Interest categories with the tracks they suggest. */
  cats: { cat: CareerCat; name: L; desc: L; tracks: L }[];
  questions: CareerQuizQ[];
}

export const PHASES: { id: 1 | 2 | 3 | 4 | 5; title: L }[] = [
  { id: 1, title: l("Security Fundamentals", "أساسيات الأمن السيبراني") },
  { id: 2, title: l("Systems & Networks", "الأنظمة والشبكات") },
  { id: 3, title: l("Cryptography & Identity", "التشفير والهوية") },
  { id: 4, title: l("Applications & Defense Operations", "التطبيقات وعمليات الدفاع") },
  { id: 5, title: l("Modern Environments & Professional Practice", "البيئات الحديثة والممارسة المهنية") },
];
