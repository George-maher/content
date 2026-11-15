# Level 1 — Implementation Tracker

**Project:** Cybersecurity Foundation (20 sessions, 90 minutes each, 30 hours, 7 sections, 10 major labs)
**Current phase:** Phase 4 — Content migration & sessions (Batch 1)
**Phase status:** IN PROGRESS
**Last updated:** 2026-11-15

## Baseline

- Git repository initialized and baseline commit created before any restructuring.
- Baseline validation: `npm run typecheck`, `npm run typecheck:test`, `npm run lint` passed; `npm test` passed 182 tests across 9 files.
- No backend, API, authentication, image pipeline, or network calls exist in the LMS.
- Content is compiled TypeScript under `src/content/`.

## Phase status

| Phase | Status | Notes |
|---|---|---|
| 0 — Discovery & LMS audit | COMPLETED | Architecture, inventory, constraints and risks recorded |
| 1 — Curriculum audit & gap analysis | COMPLETED | 20-session audit, topic mapping, accuracy review |
| 2 — Blueprint & implementation plan | COMPLETED | 7 sections, 20 sessions, 10 labs, migration plan, approval requested |
| 3 — Foundation & shared components | COMPLETED | Schema, rendering, assessment, labs, progress migration, templates |
| 4 — Content migration & sessions | IN PROGRESS | Batch 1 complete (Sessions 1–5 + Labs 1–2); Batch 2 pending |
| 5 — Labs & assessment integration | IN PROGRESS | Labs 1–2 integrated with instructor guides; 8 major labs remain |
| 6 — Consistency & technical validation | NOT STARTED | Full educational and technical audit |
| 7 — Final review & delivery | NOT STARTED | Final report and checklist |

## Phase 3 completed tasks

- [x] Extended the content schema for full chapters, assessments, labs, homework and examples.
- [x] Expanded the phase model from 5 phases to 7 sections without changing session IDs.
- [x] Added `ChapterView` for the 24-component lesson structure.
- [x] Added `AssessmentRunner` for MCQ, true/false, classification, scenario and practical checks.
- [x] Added `MajorLab` for structured lab guides, commands, expected outputs, troubleshooting, deliverables and rubrics.
- [x] Added backward-compatible rendering for existing compact sessions.
- [x] Added progress storage v2 with a v1 migration policy and one-time notice.
- [x] Added strict v2 content invariants and progress-migration tests.
- [x] Preserved the existing 5 tabs, routes, session IDs and glossary.
- [x] Wrote the session template, lab template, quality checklist and bilingual guidelines.
- [x] Validated the first full v2 chapter (Session 1) as a vertical slice.
- [x] Set Arabic as the default language with an explicit stored English choice taking priority.
- [x] Removed the remaining lint warnings in `AssessmentRunner`.

## Batch 1 progress

| Session | Topic | Status | Notes |
|---|---|---|---|
| 1 | Introduction to Cybersecurity & the CIA Triad | COMPLETE | Full v2 chapter; `majorLabId: lab-01`; career module trimmed and moved to S19 |
| 2 | Threat Landscape: Actors, Motives and Attack Lifecycles | COMPLETE | Full v2 chapter; seven-stage Cyber Kill Chain; no major lab |
| 3 | Malware and Social Engineering: From Phishing to Ransomware | COMPLETE | Full v2 chapter merging old S3 malware and old S4 social engineering; 10 sections, 28 terms, 13 MCQs, structured lab |
| 4 | Operating System Foundations | COMPLETE | Full v2 chapter split from old S5; 9 sections, 25 terms, 12 MCQs, 6 T/F, 4 classification, 3 scenarios, 2 practical checks; read-only baseline lab with `tool: "logs"`; no major lab |
| 5 | Files, Accounts and Permissions | COMPLETE | Full v2 chapter; 9 sections, 25 terms, 12 MCQs, 6 T/F, 4 classification, 3 scenarios, 2 practical checks; permission-design lab with `tool: "perm"`; no major lab |
| Lab 1 | CIA triad and risk register | COMPLETE | Major lab `lab-01` in Session 1; full guide, sample solution, rubric anchors and safety notes in `docs/instructor/LAB_01_INSTRUCTOR_GUIDE.md` |
| Lab 2 | Threat profile and Kill Chain map | COMPLETE | Major lab `lab-02` in Session 2; full guide, sample analysis, rubric anchors and uncertainty guidance in `docs/instructor/LAB_02_INSTRUCTOR_GUIDE.md` |

## Topic migration record

- Old S3 (malware fundamentals) and old S4 (social engineering and phishing) are merged into new Session 3.
- The old S3 export in `src/content/s03_04.ts` is no longer imported.
- The old S4 export is no longer imported; the temporary duplication has been removed.
- Old S5 (operating systems) is split across new Sessions 4, 5 and 6: OS foundations, file/account permissions, and hardening/administration.
- The old S5 export in `src/content/s05_06.ts` is no longer imported; only the old S6 export remains in use until its batch.
- The large career module from old Session 1 now belongs to Session 19; Session 1 keeps only a brief career overview.

## Files modified or added

- `src/content/types.ts`
- `src/constants.ts`
- `src/lib/progress.ts`
- `src/store.tsx`
- `src/strings.ts`
- `src/App.tsx`
- `src/components/ui.tsx`
- `src/components/SessionView.tsx`
- `src/components/Pages.tsx`
- `src/components/SectionBlock.tsx` (new)
- `src/components/ChapterView.tsx` (new)
- `src/components/AssessmentRunner.tsx` (new)
- `src/components/MajorLab.tsx` (new)
- `src/content/chapters/s01.ts` (new)
- `src/content/chapters/s02.ts` (new)
- `src/content/chapters/s03.ts` (new)
- `src/content/chapters/s04.ts` (new)
- `src/content/chapters/s05.ts` (new)
- `src/content/index.ts`
- `tests/content.test.ts`
- `tests/render.test.tsx`
- `tests/unit/progress.test.ts`
- `tests/unit/quiz.test.tsx`
- `tests/unit/permissions-tool.test.tsx`
- `docs/curriculum/SESSION_TEMPLATE.md` (new)
- `docs/curriculum/LAB_TEMPLATE.md` (new)
- `docs/curriculum/CONTENT_QUALITY_CHECKLIST.md` (new)
- `docs/curriculum/BILINGUAL_GUIDELINES.md` (new)
- `docs/instructor/LAB_01_INSTRUCTOR_GUIDE.md` (new)
- `docs/instructor/LAB_02_INSTRUCTOR_GUIDE.md` (new)

## Source verification

The following references were checked live on 2026-11-15 and returned HTTP 200.

Session 3:

- CISA Stop Ransomware
- No More Ransom
- MITRE ATT&CK Software
- NCSC mitigating malware and ransomware attacks
- NCSC phishing guidance
- CISA avoiding social engineering and phishing attacks
- CISA phishing guidance (stopping the attack cycle at phase one)
- NIST SP 800-83 Rev. 1

Sessions 4 and 5:

- Microsoft Windows security documentation
- Microsoft NTFS overview and access-control reference
- Microsoft Sysinternals
- The Linux Kernel documentation
- systemd documentation
- GNU Coreutils `chmod` invocation
- NIST SP 800-123
- CIS Benchmarks
- NCSC device security guidance

No screenshots or tool output were fabricated. Sessions 3–5 use fictional messages, hosts and incident descriptions only.

## Bilingual quality checks

- Automated tests verify that Arabic text is present and that every v2 L-string has both languages, but they cannot detect a stray Latin word inside an Arabic sentence.
- Manual extraction of Latin tokens from Arabic strings was run for Sessions 3–5. Real technical terms, commands, file paths and product names were kept; stray tokens were replaced:
  - Session 4: `whether` → `ما إذا`; `even if` → `حتى لو`.
  - Session 5: `name -o` → `getfacl`; `workloads` → `أحمال العمل`; `任何` → `أي`; the lab step now says `ملفات عينة` rather than a placeholder term.

## Validation results

| Command | Result |
|---|---|
| `npm run typecheck` | PASS — after Batch 1 (Sessions 1–5 + Labs 1–2) |
| `npm run typecheck:test` | PASS — after Batch 1 and the render/major-lab assertions |
| `npm run lint` | PASS — 0 errors, 0 warnings |
| `npm test` | PASS — 193 tests, 9 files |
| `npm run build` | NOT RUN (writes `dist/`) |
| `npm run build:web` | NOT RUN (writes `dist-web/`) |

## Bundle-size notes

- Session content remains compiled TypeScript imported through `src/content/index.ts`.
- Instructor guides live under `docs/instructor/` and are not imported by `src/`, so they do not enter the student bundle.
- No bundle-size measurement has been taken after Batch 1; `npm run build` and `npm run build:web` remain unrun because they write to `dist/` and `dist-web/`.
- Sessions 4 and 5 add substantial prose and assessment data. Measure both builds after Batch 1 is committed and compare with the baseline before deciding whether any content should be lazy-loaded.

## Blockers

- None.

## Next planned action

Begin Batch 2 with Sessions 6–10 (operating-system hardening and administration, then networking foundations and network security). Preserve session IDs and the v2 chapter contract, and add the next designated major labs with instructor guides under `docs/instructor/`.
