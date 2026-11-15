export type Lang = "en" | "ar";
export type L = { en: string; ar: string };
export const l = (en: string, ar: string): L => ({ en, ar });

/** Level 1 is organised into seven sections. Session ids stay 1–20. */
export type PhaseId = 1 | 2 | 3 | 4 | 5 | 6 | 7;

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

/** One detailed step in a major lab guide. */
export interface LabStep {
  title: L;
  /** Commands are always displayed LTR, even on Arabic pages. */
  command?: string;
  explanation: L;
  expected?: L;
}

export interface LabIssue {
  problem: L;
  fix: L;
}

export interface LabRubric {
  criterion: L;
  /** Relative weight, 0–100. Rubric weights should sum to 100. */
  weight: number;
}

export interface Lab {
  title: L;
  scenario: L;
  safety: L;
  /** Short tick-off checklist shown above the detailed guide. */
  steps: L[];
  expected: L;
  tool: ToolId;
  match?: MatchData;
  order?: OrderData;
  /** Full major-lab metadata. New chapters populate these fields. */
  objectives?: L[];
  prerequisites?: L[];
  environment?: L;
  tools?: L[];
  authorization?: L;
  detailedSteps?: LabStep[];
  troubleshooting?: LabIssue[];
  deliverables?: L[];
  rubric?: LabRubric[];
}

export interface QuizQ {
  q: L;
  options: L[];
  answer: number;
  why: L;
}

export interface TrueFalseQ {
  q: L;
  answer: boolean;
  why: L;
}

export interface ClassificationQ {
  prompt: L;
  categories: L[];
  items: { text: L; answer: number }[];
  why?: L;
}

export interface ScenarioQ {
  scenario: L;
  question: L;
  options: L[];
  answer: number;
  why: L;
}

export interface PracticalCheck {
  task: L;
  expected: L;
  hint?: L;
}

export interface Homework {
  title: L;
  tasks: L[];
  deliverable: L;
  criteria?: L[];
  challenge?: L;
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
  /** A short example or usage note. */
  example?: L;
}

export interface AgendaItem {
  label: L;
  minutes: number;
}

export interface Exercise {
  title: L;
  instructions: L;
  expected?: L;
}

export interface Session {
  id: number;
  phase: PhaseId;
  /** 1 = original compact chapter; 2 = full 24-component chapter. */
  schemaVersion?: 1 | 2;
  title: L;
  summary: L;
  minutes: number;
  /** Session overview (section 2 of the required chapter structure). */
  overview?: L;
  /** Why this session matters (section 3). */
  whyItMatters?: L;
  /** Prerequisites (section 4). */
  prerequisites?: L[];
  objectives: L[];
  /** 90-minute teaching plan (section 6/7 context). */
  agenda?: AgendaItem[];
  /** Introduction (section 8). */
  introduction?: L;
  sections: Section[];
  /** Session-level diagram (section 13). */
  diagram: Diagram;
  /** Technical examples (section 11). */
  examples?: L[];
  /** Real-world scenarios (section 12). */
  realWorldScenarios?: L[];
  /** Instructor demonstration (section 14). */
  instructorDemo?: L;
  /** Practical exercises (section 15). */
  exercises?: Exercise[];
  /** Expected results (section 17). */
  expectedResults?: L;
  /** Common mistakes (section 18). */
  commonMistakes?: L[];
  /** Security best practices (section 19). */
  bestPractices?: L[];
  /** Key takeaways (section 20). */
  keyTakeaways?: L[];
  lab: Lab;
  /** Identifier of the linked major lab, e.g. "lab-01". */
  majorLabId?: string;
  quiz: QuizQ[];
  trueFalse?: TrueFalseQ[];
  classification?: ClassificationQ[];
  scenarios?: ScenarioQ[];
  practicalChecks?: PracticalCheck[];
  homework: Homework;
  refs: Ref[];
  terms: Term[];
  /** Optional interactive career interest quiz (used by Session 19). */
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

export const PHASES: { id: PhaseId; title: L }[] = [
  { id: 1, title: l("Cybersecurity Fundamentals", "أساسيات الأمن السيبراني") },
  { id: 2, title: l("Operating Systems & System Administration", "أنظمة التشغيل وإدارة الأنظمة") },
  { id: 3, title: l("Networking & Network Security", "الشبكات وأمن الشبكات") },
  { id: 4, title: l("Web & Application Security", "أمن الويب والتطبيقات") },
  { id: 5, title: l("Cryptography & Identity Management", "التشفير وإدارة الهوية") },
  { id: 6, title: l("Security Operations & Risk Management", "عمليات الأمن وإدارة المخاطر") },
  { id: 7, title: l("Modern Environments & Professional Practice", "البيئات الحديثة والممارسة المهنية") },
];
