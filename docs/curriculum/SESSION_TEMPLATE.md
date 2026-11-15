# Full Session Template (v2)

Use this structure for every Level 1 session. The order matches the 24 required chapter components. Commands and code are always LTR; explanations are bilingual and equivalent in depth.

| # | Component | Content field / rendering |
|---:|---|---|
| 1 | Session title | `title`, `id`, `phase` |
| 2 | Session overview | `overview` |
| 3 | Why this session matters | `whyItMatters` |
| 4 | Prerequisites | `prerequisites` |
| 5 | Learning outcomes | `objectives` (5–8) |
| 6 | Estimated duration | `minutes` = 90, `agenda` |
| 7 | Detailed table of contents | Generated from headings |
| 8 | Introduction | `introduction` |
| 9 | Detailed theoretical explanations | `sections` (8–12, paragraphs not bullet lists) |
| 10 | Core concepts and terminology | `terms` names + definitions |
| 11 | Technical examples | `examples` |
| 12 | Real-world scenarios | `realWorldScenarios` |
| 13 | Diagrams and visual explanations | `diagram` + section `diagram` |
| 14 | Instructor demonstrations | `instructorDemo` |
| 15 | Practical exercises | `exercises` |
| 16 | Major lab or lab reference | `majorLabId`, `lab` |
| 17 | Expected results | `expectedResults` |
| 18 | Common mistakes | `commonMistakes` |
| 19 | Security best practices | `bestPractices` |
| 20 | Key takeaways | `keyTakeaways` |
| 21 | Vocabulary | `terms` (20–30, with examples) |
| 22 | Knowledge assessment | `quiz`, `trueFalse`, `classification`, `scenarios`, `practicalChecks` |
| 23 | Homework | `homework` with criteria and challenge |
| 24 | Additional learning resources | `refs` (5–8 official/quality sources) |

## Minimal TypeScript shape

```ts
export const sXX: Session = {
  id: XX,
  phase: 1,
  schemaVersion: 2,
  minutes: 90,
  title: l("...", "..."),
  summary: l("...", "..."),
  overview: l("...", "..."),
  whyItMatters: l("...", "..."),
  prerequisites: [l("...", "...")],
  objectives: [l("...", "...")],
  agenda: [{ label: l("...", "..."), minutes: 5 }],
  introduction: l("...", "..."),
  sections: [{ h: l("...", "..."), p: [l("...", "...")] }],
  examples: [l("...", "...")],
  realWorldScenarios: [l("...", "...")],
  diagram: { kind: "layers", title: l("...", "..."), caption: l("...", "..."), nodes: [] },
  instructorDemo: l("...", "..."),
  exercises: [{ title: l("...", "..."), instructions: l("...", "..."), expected: l("...", "...") }],
  expectedResults: l("...", "..."),
  commonMistakes: [l("...", "...")],
  bestPractices: [l("...", "...")],
  keyTakeaways: [l("...", "...")],
  lab: { /* see LAB_TEMPLATE.md */ },
  majorLabId: "lab-XX",
  quiz: [{ q: l("...", "..."), options: [l("...", "...")], answer: 0, why: l("...", "...") }],
  trueFalse: [{ q: l("...", "..."), answer: true, why: l("...", "...") }],
  classification: [{ prompt: l("...", "..."), categories: [l("...", "...")], items: [{ text: l("...", "..."), answer: 0 }], why: l("...", "...") }],
  scenarios: [{ scenario: l("...", "..."), question: l("...", "..."), options: [l("...", "...")], answer: 0, why: l("...", "...") }],
  practicalChecks: [{ task: l("...", "..."), expected: l("...", "..."), hint: l("...", "...") }],
  homework: { title: l("...", "..."), tasks: [l("...", "...")], deliverable: l("...", "..."), criteria: [l("...", "...")], challenge: l("...", "...") },
  refs: [{ title: "...", org: "...", url: "https://...", desc: l("...", "...") }],
  terms: [{ term: l("...", "..."), def: l("...", "..."), example: l("...", "...") }],
};
```

## Depth checklist

- Theory explains what, why, how, components, where used, examples, security implications, mistakes, defenses.
- At least 8 substantial sections, each with 2–4 developed paragraphs.
- 20–30 vocabulary terms with definitions and examples.
- 10–15 MCQs, 5 true/false, 3–5 classification prompts, 2–3 scenarios, 1–2 practical checks.
- 5–8 verified references, official sources preferred.
- All Arabic text is a full explanation, not a shortened translation.
- No placeholders, no fabricated screenshots, no Python, no advanced exploitation.
