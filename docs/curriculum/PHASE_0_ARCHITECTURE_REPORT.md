# PHASE 0 — Existing Architecture Report & LMS Audit

**Project:** Cybersecurity Foundation (20 sessions, 90 minutes each, 30 hours, 7 sections, 10 major labs)
**Phase:** 0 — Project Discovery & Existing LMS Audit
**Status:** COMPLETED
**Date:** 2026-11-15
**Scope:** Read-only inspection. No content or code was modified in this phase.

---

## 1. Executive summary

The existing LMS is a **single-page, fully client-side bilingual (EN/AR, RTL-aware) React 19 + Vite 7 + TypeScript application**. It is a **static course**: there is **no backend, no API, no authentication, no database, and no network calls**. All course content is compiled TypeScript, all interactive labs run in the browser, and all progress is stored in `localStorage`.

The architecture is already well-suited to a 20-session bilingual foundation course and already contains a **two-schema content model** that was specifically built to support the full 24-component chapter structure required by this project:

- **`schemaVersion: 1`** — the original "compact" session (4 sections, ~6–8 terms, 6 quiz questions). Used by Sessions 6–20.
- **`schemaVersion: 2`** — the full "chapter" session (24 components: overview, whyItMatters, prerequisites, objectives, 90-minute agenda, introduction, 8–12 detailed sections, examples, real-world scenarios, diagram, instructor demo, exercises, full lab, expected results, common mistakes, best practices, key takeaways, 20–30 terms, 10+ MCQs, T/F, classification, scenario, practical checks, homework, references). Used by Sessions 1–5.

This means the project does **not** need a new LMS, a backend, or a content API. It needs to **extend the existing `schemaVersion: 2` content model to Sessions 6–20**, resolving the structural differences between the current 20-session layout and the target 20-session layout (see Phase 1).

## 2. Technology stack

| Concern | Choice |
|---|---|
| Framework | React 19.2, TypeScript 5.9 (strict) |
| Build tool | Vite 7.3, Tailwind CSS 4.1 |
| Deliverable A | Single self-contained `dist/index.html` (offline, via `vite-plugin-singlefile`) |
| Deliverable B | Cacheable multi-file `dist-web/` |
| State | React Context (split language + progress stores), no state library |
| Routing | Custom hash router with validation (`#/session/5/lab`) |
| Persistence | `localStorage` with versioned keys + v1 migration |
| Testing | Vitest, React Testing Library, jsdom, SSR render tests |

## 3. Repository structure

```
src/
  App.tsx                     app shell, nav, route titles, ErrorBoundary
  main.tsx                    React mount, StrictMode
  router.ts                   validated hash router + href helpers
  store.tsx                   language + progress Context providers/hooks
  constants.ts                TOTAL_SESSIONS, PASS, EXAM_QUESTIONS, MAJOR_LABS, storage keys
  strings.ts                  UI chrome strings (EN/AR)
  index.css                   Tailwind + design tokens
  content/
    types.ts                  data model: L, Session, Section, Diagram, Lab, assessments, PhaseId
    index.ts                  SESSIONS array (imports one module per session)
    chapters/s01..s05.ts      full v2 chapters (Batch 1)
    s05_06.ts ... s19_20.ts   legacy compact sessions (two per file), v1
  components/
    SessionView.tsx           session shell + 5 tabs (lesson/lab/quiz/homework/refs)
    ChapterView.tsx           renders the 24-component lesson for v2 sessions
    SectionBlock.tsx          paragraph/bullets/callout/table/diagram/match renderer
    MajorLab.tsx              structured lab guide + tick-off + companion tool
    AssessmentRunner.tsx      MCQ + T/F + classification + scenario + practical checks
    QuizRunner.tsx            compact quiz runner (v1 sessions)
    Diagram.tsx               flow/layers/cycle/grid renderer (RTL-aware)
    LabToolsA.tsx / LabToolsB.tsx  15 interactive browser lab tools
    Pages.tsx                 Home, SessionList, Glossary, Exam, NotFound
    ui.tsx                    Check, ProgressBar primitives
    ErrorBoundary.tsx
    CareerInterestQuiz.tsx    interactive career-path quiz (Session 19)
  lib/
    sha256.ts                 dependency-free SHA-256, Caesar, password-entropy helpers
    storage.ts                failure-tolerant Web Storage wrapper
    progress.ts               progress schema, v1→v2 migration, scoring helpers
    permissions.ts            chmod calculation + "everyone can read" warning
    exam.ts                   full-pool 40-question exam sampling + option shuffling
tests/
  content.test.ts             curriculum completeness + v2 invariants + no-Python guard
  render.test.tsx             SSR render of every session × tab × language
  unit/                       router, storage, progress, permissions, quiz, store, exam
docs/
  curriculum/                 templates, guidelines, tracker
  instructor/                 LAB_01, LAB_02 instructor guides (not in student bundle)
frontend-audit/FRONTEND_AUDIT.md   read-only frontend audit (architecture/quality/a11y)
```

## 4. Content source of truth

- **`src/content/index.ts` → `SESSIONS`** is the single source of truth. It imports one module per session and exports a flat ordered array of 20 `Session` objects.
- **`src/content/types.ts`** defines the schema and the `PHASES` array (7 sections).
- Content is **compiled TypeScript**, not Markdown or JSON. There is no separate CMS, no API, no database.
- Instructor-only material (answer keys, rubrics, expected screenshots) lives under **`docs/instructor/`** and is **not imported by `src/`**, so it never enters the student bundle. This satisfies the student/instructor separation requirement.

## 5. Current content inventory

### 5.1 Session status (live, imported via `SESSIONS`)

| ID | Current title | schema | Minutes | Sections | Terms | Quiz | Major lab |
|---:|---|---:|---:|---:|---:|---:|---|
| 1 | Introduction to Cybersecurity & Security Principles | **v2** | 90 | 10 | 30 | 10+ | `lab-01` |
| 2 | The Threat Landscape: Actors, Motives and Attack Lifecycles | **v2** | 90 | 9 | 24 | 10+ | `lab-02` |
| 3 | Malware and Social Engineering: From Phishing to Ransomware | **v2** | 90 | 10 | 28 | 10+ | (structured lab) |
| 4 | Operating System Foundations: Kernel, Processes and Services | **v2** | 90 | 9 | 26 | 10+ | (structured lab) |
| 5 | Files, Accounts and Permissions: Access Control in Practice | **v2** | 90 | 9 | 25 | 10+ | (structured lab) |
| 6 | Networking Fundamentals I: Models, Devices, IP Addressing | v1 | 70 | 4 | 8 | 6 | — |
| 7 | Networking Fundamentals II: Protocols, Ports, DNS, Web | v1 | 65 | 4 | 7 | 6 | — |
| 8 | Network Security: Firewalls, IDS/IPS, Segmentation, VPNs | v1 | 70 | 4 | 8 | 6 | — |
| 9 | Cryptography Basics: Symmetric & Asymmetric Encryption | v1 | 65 | 4 | 8 | 6 | — |
| 10 | Hashing, Digital Signatures, PKI and TLS | v1 | 65 | 4 | 8 | 6 | — |
| 11 | Authentication: Passwords, MFA and Passkeys | v1 | 60 | 4 | 7 | 6 | — |
| 12 | Access Control and IAM | v1 | 60 | 4 | 8 | 6 | — |
| 13 | Web Application Security Basics: OWASP, Injection, XSS | v1 | 65 | 4 | 8 | 6 | — |
| 14 | Endpoint Protection, Patching & Vulnerability Management | v1 | 60 | 4 | 8 | 6 | — |
| 15 | Risk Management, Governance and Security Frameworks | v1 | 65 | 4 | 8 | 6 | — |
| 16 | Security Monitoring, Logging and SIEM | v1 | 65 | 4 | 7 | 6 | — |
| 17 | Incident Response and Digital Forensics Basics | v1 | 65 | 4 | 7 | 6 | — |
| 18 | Cloud, Mobile and IoT Security Basics | v1 | 60 | 4 | 7 | 6 | — |
| 19 | Privacy, Law, Compliance and Ethics | v1 | 60 | 4 | 8 | 6 | — |
| 20 | Capstone: Secure a Small Business, and Your Next Steps | v1 | 90 | 4 | 7 | 6 | — |

### 5.2 Orphaned / dead content

- **`src/content/s01_02.ts`** (old Sessions 1–2) and **`src/content/s03_04.ts`** (old Sessions 3–4) are **no longer imported**. They are dead files left in the tree. Sessions 1–4 now come from `src/content/chapters/s01..s04.ts`.
- **`src/content/s05_06.ts`** is still imported, but **only the `s06` export is used** — the `s05` export in that file is dead (Session 5 now comes from `chapters/s05.ts`).

These orphaned exports must be cleaned up during implementation (recorded as a relocation/removal action, not silently deleted).

## 6. How the LMS features work

### 6.1 Session navigation & structure
- `SessionView` renders a header (id, section, title, summary, minutes, progress %) and a 5-tab nav: **Lesson / Lab / Quiz / Homework / Refs**.
- Tab bodies stay mounted (via `hidden`) so quiz and tool state survive tab switches.
- Prev/next session links exist in the shell.
- Hash routes: `#/session/<id>/<tab>`; invalid ids or tabs fall through to the 404 page.

### 6.2 Lesson rendering
- **v2 sessions** → `ChapterView` renders the 24-component structure through `SectionBlock` (paragraphs, bullets, callouts, tables, diagrams, matching activities).
- **v1 sessions** → `ChapterView` falls back to a compact rendering of `sections` (backward-compatible rendering added in Phase 3).
- Commands/paths/URLs render LTR even on Arabic pages (verified in render tests).

### 6.3 Quiz / assessment
- **v1 sessions** → `QuizRunner` (MCQ only, 70% pass).
- **v2 sessions** → `AssessmentRunner`: MCQ + True/False + classification (matching) + scenario + practical checks, combined into one scored attempt, 70% pass, best score retained.

### 6.4 Labs
- **`MajorLab`** renders the structured lab: objectives, scenario, safety note, tick-off steps, detailed step-by-step guide with per-command explanation and expected output, troubleshooting, deliverables, rubric, and a companion interactive browser tool.
- **15 interactive tools** exist across `LabToolsA`/`LabToolsB`: `cia, phish, perm, cidr, port, firewall, cipher, hash, password, rbac, sqli, risk, logs, match, order`.
- All tools run locally in the browser. Nothing is scanned, attacked, or sent anywhere. The SQLi tool is a display-only text simulation.

### 6.5 Progress tracking
- `localStorage` key `csf.progress.v2`; legacy `csf.progress.v1` is auto-migrated on load with a one-time notice.
- Tracks: read state, lab tick-offs, homework tick-offs, quiz best scores, exam score.
- Per-session reset, best-score retention, cross-tab `storage` sync, debounced writes.
- Session ids are preserved across the v1→v2 migration, so **existing student progress is preserved** as long as session ids stay stable.

### 6.6 Bilingual / RTL
- Every string is `L = { en, ar }`. Arabic is the **default** learning language; an explicit stored English choice wins.
- `<html dir>` flips to `rtl` for Arabic. Diagrams and tables are RTL-aware.
- Tests enforce that every English string has real Arabic (not a copy) and that Arabic strings contain Arabic characters.

## 7. Existing reusable components (Phase 3 assets already present)

- `ChapterView` + `SectionBlock` — full 24-component lesson rendering.
- `AssessmentRunner` — full assessment (MCQ/T-F/classification/scenario/practical).
- `MajorLab` — full lab guide + rubric + tick-off + companion tool.
- `Diagram` — flow/layers/cycle/grid, bilingual, RTL-aware.
- `LabToolsA/B` — 15 ready-to-reuse interactive tools.
- Templates and guidelines under `docs/curriculum/`: `SESSION_TEMPLATE.md`, `LAB_TEMPLATE.md`, `CONTENT_QUALITY_CHECKLIST.md`, `BILINGUAL_GUIDELINES.md`.

**Conclusion:** Phase 3 (shared components) is already implemented. The remaining work is content migration (Phase 4) and resolving the structural delta (Phase 1/2).

## 8. Technical constraints

| # | Constraint | Impact |
|---|---|---|
| C1 | No backend / no API / no DB. | Content must stay compiled TS in `src/content/`. Do not invent a content API. |
| C2 | Single-file + web builds must both keep working. | Do not break `viteSingleFile` or the `dist-web` chunking. |
| C3 | Session ids 1–20 must stay stable. | Progress migration depends on id stability. Do not renumber. |
| C4 | `tests/content.test.ts` enforces v2 invariants (90 min, 20+ terms, 10+ MCQ, 5+ T/F, 3+ classification, 2+ scenarios, 1+ practical, 5+ refs, rubric sums to 100) **only for `schemaVersion: 2` sessions**. | Converting a session to v2 automatically subjects it to the full contract. |
| C5 | **No Python anywhere in `src/`** (test-enforced). | Foundation must not introduce Python. Bash/shell usage and command execution are allowed. |
| C6 | All external refs must be `https://` and link-checked. | No fabricated URLs. |
| C7 | No placeholder text (`lorem/todo/tbd/placeholder/coming soon/to be added`) — test-enforced. | Every delivered session must be genuinely complete. |
| C8 | Arabic default; every `L` string needs both languages at equal depth. | Bilingual authoring burden per session. |
| C9 | Instructor material must stay out of the student bundle (`docs/instructor/`). | Answer keys/rubrics live outside `src/`. |
| C10 | The `frontend-audit` recommends keeping the escaped-text rendering model. | No `dangerouslySetInnerHTML` / HTML-markdown pipeline. |

## 9. Technical risks register

| # | Risk | Severity | Likelihood | Mitigation |
|---|---|---|---|---|
| R-1 | Structural mismatch: the existing 20-session layout does not match the target 20-session layout (merges, splits, one brand-new Web session). Renumbering/regrouping risks confusion and broken links. | HIGH | Certain | Phase 1 topic mapping + Phase 2 blueprint with an explicit old→new id map; keep ids 1–20 stable where possible; update internal `majorLabId` links. |
| R-2 | Batch 1 Session 5 (`Files, Accounts and Permissions`) was implemented as a cross-OS access-control chapter, but the target Session 5 is `Linux Fundamentals & Administration` and Session 6 is `Windows Administration & Active Directory`. Depth and sequencing differ. | HIGH | Certain | Decide in Phase 2 whether to re-scope S5 / add S6; flag as a content-migration decision for approval. |
| R-3 | Converting Sessions 6–20 from v1 to v2 is a large authoring volume (15 sessions × full 24-component bilingual chapter). | HIGH | Certain | Execute in Phase 4 batches (5/5/5/5) with per-batch validation; leave a consistent state if limits are hit. |
| R-4 | New interactive tools needed for target labs (e.g., web-server/document-root inspection, AD/OU builder, Nmap/Wireshark-observation simulator) don't yet exist. | MEDIUM | Likely | Reuse existing 15 tools where possible; add only the minimum new tools needed; keep tools local/simulated. |
| R-5 | Orphaned v1 modules (`s01_02.ts`, `s03_04.ts`, dead `s05` export) may confuse future editors or inflate confusion. | LOW | Certain | Remove dead exports during the batch that supersedes them; record the removal. |
| R-6 | Bundle size grows with 15 full bilingual chapters. | MEDIUM | Likely | Measure both builds after each batch; lazy-load only if a real size problem appears. |
| R-7 | Bilingual depth drift — Arabic could become a shallow translation. | MEDIUM | Likely | BILINGUAL_GUIDELINES + Latin-token sweep (as done for Sessions 3–5) + render tests. |
| R-8 | No backend means no real authorization for answer keys. Instructor material must stay out of `src/`. | LOW | Low | Keep rubrics/answers in `docs/instructor/`; never import into `src/`. |

## 10. Baseline validation (executed 2026-11-15)

| Command | Result |
|---|---|
| `npm install` | PASS — 393 packages, 0 vulnerabilities |
| `npm run typecheck` | PASS (exit 0) |
| `npm run lint` | PASS (exit 0, 0 errors / 0 warnings) |
| `npm test` | **PASS — 193 tests, 9 files** |
| `npm run build` / `npm run build:web` | Not run in Phase 0 (writes artifacts) — will run in Phase 6 |

No source, test, or config files were modified during Phase 0.
