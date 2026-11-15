# Level 1 — Implementation Tracker

**Project:** Cybersecurity Foundation (20 sessions, 90 minutes each, 30 hours, 7 sections, 10 major labs)
**Current phase:** Phase 4 — Content migration & sessions (Batch 3 in progress; Sessions 1–18 + Labs 1–9 done)
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
| 0 — Discovery & LMS audit | COMPLETED | Architecture, inventory, constraints and risks recorded in `PHASE_0_ARCHITECTURE_REPORT.md` |
| 1 — Curriculum audit & gap analysis | COMPLETED | 20-session audit, topic mapping, lab mapping, boundary check in `PHASE_1_CURRICULUM_AUDIT.md` |
| 2 — Blueprint & implementation plan | COMPLETED — APPROVED | 7 sections, 20 sessions, 10 labs, migration plan in `PHASE_2_CURRICULUM_BLUEPRINT.md`; decisions D-1..D-4 approved (all recommended options) |
| 3 — Foundation & shared components | COMPLETED | Schema, rendering, assessment, labs, progress migration, templates |
| 4 — Content migration & sessions | IN PROGRESS | Sessions 1–18 + Labs 1–9 done (Batch 3); Sessions 19–20 + Lab 10 remain |
| 5 — Labs & assessment integration | IN PROGRESS | Major labs 1–9 integrated with instructor guides; 1 major lab remains (10) |
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
| 1 | Introduction to Cybersecurity & Security Principles | COMPLETE | Full v2 chapter; career module trimmed and moved to S19; CIA/risk lab is now a structured lab (D-3) |
| 2 | Threat Landscape: Actors, Motives and Attack Lifecycles | COMPLETE | Full v2 chapter; seven-stage Cyber Kill Chain; threat/Kill-Chain lab is now a structured lab (D-3) |
| 3 | Malware and Social Engineering: From Phishing to Ransomware | COMPLETE | Full v2 chapter merging old S3 malware and old S4 social engineering; 10 sections, 28 terms, 13 MCQs; now hosts major lab `lab-01` (D-3) |
| 4 | Operating System Foundations | COMPLETE | Full v2 chapter split from old S5; 9 sections, 25 terms, 12 MCQs, 6 T/F, 4 classification, 3 scenarios, 2 practical checks; read-only baseline lab with `tool: "logs"`; no major lab |
| 5 | Linux Fundamentals & Administration | COMPLETE | Full v2 chapter re-scoped from cross-OS access control to Linux admin (D-1); 10 sections, 30 terms, 12 MCQs, 6 T/F, 4 classification, 3 scenarios, 2 practical checks; hosts major lab `lab-02` |

## Batch 2 progress (Sessions 5–10 + Labs 1–6) — COMPLETE

| Session | Topic | Status | Notes |
|---|---|---|---|
| 6 | Windows Administration & Active Directory Fundamentals | COMPLETE | NEW session authored (D-1); 9 sections, 30 terms, 12 MCQs, 6 T/F, 4 classification, 3 scenarios, 2 practical checks; hosts major lab `lab-03` |
| 7 | Networking Fundamentals I: Models, Devices & IP Addressing | COMPLETE | v1 → v2 conversion; 8 sections, 28 terms, 12 MCQs, 6 T/F, 4 classification, 3 scenarios, 2 practical checks; hosts major lab `lab-04` (reuses `cidr` tool) |
| 8 | Networking Fundamentals II: Protocols, Services & Traffic | COMPLETE | v1 → v2 conversion; 8 sections, 25 terms, 11 MCQs, 6 T/F, 4 classification, 3 scenarios, 2 practical checks; structured lab with `port` tool |
| 9 | Network Security: Firewalls, IDS/IPS, Segmentation & VPNs | COMPLETE | v1 → v2 conversion + expansion; 8 sections, 25 terms, 11 MCQs, 6 T/F, 4 classification, 3 scenarios, 2 practical checks; hosts major lab `lab-05` (`firewall` tool) |
| 10 | Web Fundamentals & Web Infrastructure | COMPLETE | NEW session authored (D-2); 8 sections, 25 terms, 11 MCQs, 6 T/F, 4 classification, 3 scenarios, 2 practical checks; hosts major lab `lab-06` (new `webserver` tool) |
| Lab 1 | Threat Identification & Phishing Analysis | COMPLETE | Major lab `lab-01` in Session 3 (D-3 renumbering); instructor guide in `docs/instructor/LAB_01_PHISHING_INSTRUCTOR_GUIDE.md` |
| Lab 2 | Linux Command Line & Permissions | COMPLETE | Major lab `lab-02` in Session 5 (D-3 renumbering); instructor guide in `docs/instructor/LAB_02_LINUX_INSTRUCTOR_GUIDE.md` |
| Lab 3 | Windows Administration & Active Directory | COMPLETE | Major lab `lab-03` in Session 6 (D-3 renumbering); instructor guide in `docs/instructor/LAB_03_WINDOWS_AD_INSTRUCTOR_GUIDE.md` |
| Lab 4 | IP Addressing & Subnetting | COMPLETE | Major lab `lab-04` in Session 7; instructor guide in `docs/instructor/LAB_04_SUBNETTING_INSTRUCTOR_GUIDE.md` |
| Lab 5 | Network Discovery & Firewall Rules | COMPLETE | Major lab `lab-05` in Session 9; instructor guide in `docs/instructor/LAB_05_FIREWALL_INSTRUCTOR_GUIDE.md` |
| Lab 6 | Web Server, Document Root & HTTP | COMPLETE | Major lab `lab-06` in Session 10; instructor guide in `docs/instructor/LAB_06_WEBSERVER_INSTRUCTOR_GUIDE.md` |

## Batch 3 progress (Sessions 11–20 + Labs 7–10) — IN PROGRESS

| Session | Topic | Status | Notes |
|---|---|---|---|
| 11 | Web Application Security (SQL Injection, XSS, CSRF) | ✅ COMPLETE | v2 `chapters/s11.ts` authored; hosts major lab `lab-07` (`sqli` tool); wired into `SESSIONS`; 193 tests pass |
| 12 | Cryptography Fundamentals & Access Control | ✅ COMPLETE | v2 `chapters/s12.ts` authored (D-4 merge: old S9+S10 crypto → S12); hosts part of major lab `lab-08` (`cipher` tool); wired into `SESSIONS`; 193 tests pass |
| 13 | Identity & Access Management (IAM) | ✅ COMPLETE | v2 `chapters/s13.ts` authored (D-4 merge: old S11 auth + old S12 IAM → S13); hosts part of major lab `lab-08` (`rbac` tool); wired into `SESSIONS`; 193 tests pass |
| 14 | Vulnerability Management | ✅ COMPLETE | v2 `chapters/s14.ts` authored; hosts part of major lab `lab-09` (`risk` tool); wired into `SESSIONS`; 193 tests pass |
| 15 | Security Monitoring & SIEM Basics | ✅ COMPLETE | v2 `chapters/s15.ts` authored (from old S16 SIEM/Logging/SOC); hosts part of major lab `lab-09` (`logs` tool); wired into `SESSIONS`; 193 tests pass |
| 16 | Incident Response (IR) Foundations | ✅ COMPLETE | v2 `chapters/s16.ts` authored (from old S17 IR content); hosts part of major lab `lab-10` (`order` tool); wired into `SESSIONS`; 193 tests pass |
| 17 | Digital Forensics Essentials | ✅ COMPLETE | v2 `chapters/s17.ts` authored (forensics expanded from old S17); structured lab with `hash` tool (no major lab); wired into `SESSIONS`; 193 tests pass |
| 18 | Risk Management & Privacy | ✅ COMPLETE | v2 `chapters/s18.ts` authored (D-4 merge: old S15 risk + old S19 privacy); structured lab with `match` tool (ethical decision drill); wired into `SESSIONS`; legacy Cloud renumbered to S19; 193 tests pass |
| 19 | Cloud Security Basics | NOT STARTED | v1 → v2 conversion |
| 20 | Career Paths & Capstone Review | NOT STARTED | v1 → v2 conversion; hosts part of major lab `lab-10` (`risk` tool) |

## Decisions log (Phase 2 checkpoint)

All four decisions approved (recommended options):

- **D-1:** Session 5 re-scoped to Linux Fundamentals & Administration; new Session 6 (Windows Administration & Active Directory) authored. ✅ Implemented.
- **D-2:** New Session 10 (Web Fundamentals & Web Infrastructure) inserted. ✅ Implemented (Session 10 authored; hosts major lab `lab-06`; new `webserver` tool added).
- **D-3:** Major labs renumbered to match the brief. Lab 1 (phishing analysis) → Session 3; Lab 2 (Linux) → Session 5; Lab 3 (Windows/AD) → Session 6. Old Session 1 CIA/risk and Session 2 threat/Kill-Chain labs converted to structured labs (content preserved). ✅ Implemented.
- **D-4:** Merges approved: Crypto (S9+S10→S12), IAM (S11+S12→S13), Risk+Privacy (S15+S19→S18). ⏳ Sessions not yet authored (Batch 3).

## Topic migration record

- Old S3 (malware fundamentals) and old S4 (social engineering and phishing) are merged into new Session 3.
- Old S5 (operating systems) is split across new Sessions 4, 5 and 6: OS foundations, Linux administration, and Windows/AD administration.
- The old S5 and S6 exports in `src/content/s05_06.ts` are no longer imported; the file has been removed.
- Old networking content (old S6/S7 networking, old S8 network security, old S10 web) is superseded by new Sessions 7–10; the legacy `src/content/s07_08.ts` and `src/content/s09_10.ts` modules are no longer imported and have been removed.
- Orphaned modules `src/content/s01_02.ts` and `src/content/s03_04.ts` have been removed (no longer imported).
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

### Batch 2 (Sessions 5–6 + Labs 1–3) files modified or added

- `src/content/chapters/s05.ts` — re-scoped to Linux Fundamentals & Administration (D-1); hosts major lab `lab-02`
- `src/content/chapters/s06.ts` (new) — Windows Administration & Active Directory Fundamentals (D-1); hosts major lab `lab-03`
- `src/content/index.ts` — import `s06` from `./chapters/s06`
- `src/content/chapters/s01.ts` — removed `majorLabId: lab-01` (structured lab, D-3)
- `src/content/chapters/s02.ts` — removed `majorLabId: lab-02` (structured lab, D-3)
- `src/content/chapters/s03.ts` — lab retitled to "Lab 1 — Threat Identification & Phishing Analysis"; `majorLabId: lab-01` (D-3)
- `src/content/s01_02.ts` — removed (orphaned, superseded by chapters)
- `src/content/s03_04.ts` — removed (orphaned, superseded by chapters)
- `src/content/s05_06.ts` — removed (orphaned, superseded by chapters)
- `tests/content.test.ts` — updated major-lab identity assertions to new D-3 mapping (lab-01→S3, lab-02→S5, lab-03→S6)
- `docs/instructor/STRUCTURED_LAB_S1_CIA_RISK_GUIDE.md` (renamed from LAB_01_INSTRUCTOR_GUIDE.md)
- `docs/instructor/STRUCTURED_LAB_S2_THREAT_GUIDE.md` (renamed from LAB_02_INSTRUCTOR_GUIDE.md)
- `docs/instructor/LAB_01_PHISHING_INSTRUCTOR_GUIDE.md` (new)
- `docs/instructor/LAB_02_LINUX_INSTRUCTOR_GUIDE.md` (new)
- `docs/instructor/LAB_03_WINDOWS_AD_INSTRUCTOR_GUIDE.md` (new)

### Batch 2 extension (Sessions 7–10 + Labs 4–6) files modified or added

- `src/content/chapters/s07.ts` (new) — Networking Fundamentals I; hosts major lab `lab-04`; reuses the existing `cidr` tool
- `src/content/chapters/s08.ts` (new) — Networking Fundamentals II; structured lab with `port` tool
- `src/content/chapters/s09.ts` (new) — Network Security (firewalls, IDS/IPS, segmentation, VPNs); hosts major lab `lab-05` (`firewall` tool)
- `src/content/chapters/s10.ts` (new) — Web Fundamentals & Web Infrastructure (D-2); hosts major lab `lab-06`
- `src/content/index.ts` — import `s07`, `s08`, `s09`, `s10` from `./chapters/`; legacy `s07_08` and `s09_10` modules no longer imported (superseded by the new chapters)
- `src/content/s07_08.ts` — removed (orphaned, superseded by `chapters/s07.ts` + `chapters/s08.ts`)
- `src/content/s09_10.ts` — removed (orphaned, superseded by `chapters/s09.ts` + `chapters/s10.ts`)
- `src/content/types.ts` — added `"webserver"` to the `ToolId` union
- `src/components/LabToolsA.tsx` — added the `WebserverTool` (document-root / status-code / directory-listing / traversal simulator)
- `src/components/MajorLab.tsx` — wired `"webserver"` → `WebserverTool`
- `tests/content.test.ts` — extended major-lab identity assertions to the D-3 mapping for `lab-04`→S7, `lab-05`→S9, `lab-06`→S10
- `docs/instructor/LAB_04_SUBNETTING_INSTRUCTOR_GUIDE.md` (new)
- `docs/instructor/LAB_05_FIREWALL_INSTRUCTOR_GUIDE.md` (new)
- `docs/instructor/LAB_06_WEBSERVER_INSTRUCTOR_GUIDE.md` (new)

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
  - Sessions 7–10: Latin-token sweep run over the new chapters; stray tokens found and replaced (for example `you` inside Arabic sentences → `نا`, and a stray non-Arabic token in the S8 lab environment → `خارجية`, `ي列出` → `يسرد`). Real technical terms, commands, IPs, paths and product names were kept.

## Validation results

| Command | Result |
|---|---|
| `npm run typecheck` | PASS — after Batch 2 extension (Sessions 7–10 + Labs 4–6) |
| `npm run typecheck:test` | PASS — after Batch 2 extension and the render/major-lab assertions |
| `npm run lint` | PASS — 0 errors, 0 warnings |
| `npm test` | PASS — 193 tests, 9 files |
| `npm run build` | PASS — single-file build (~1.37 MB) |
| `npm run build:web` | PASS — web multi-file build |
| `npm run verify` | PASS — typecheck, lint, tests, both builds, `npm audit` (0 vulns) |

## Bundle-size notes

- Session content remains compiled TypeScript imported through `src/content/index.ts`.
- Instructor guides live under `docs/instructor/` and are not imported by `src/`, so they do not enter the student bundle.
- Both builds were run after the Batch 2 extension; `dist/` and `dist-web/` are gitignored.
- Sessions 7–10 add substantial prose and assessment data. If the bundle grows beyond acceptable size in later batches, consider lazy-loading session content by route.

## Blockers

- None blocking. Phase 2 decisions (D-1..D-4) approved; Batch 1–2 (Sessions 1–10 + Labs 1–6) implemented and validated.

## Next planned action

Continue Phase 4 Batch 3 with Sessions 11–20: Web Application Security (S11), Cryptography + Access Control (S12, D-4 merge), Identity & Access Management (S13, D-4 merge), Vulnerability Management (S14), Security Monitoring & SIEM (S15), Incident Response (S16), Digital Forensics (S17), Risk + Privacy (S18, D-4 merge), Cloud Security (S19), and Career Paths & Capstone (S20), plus major labs 7–10. Preserve session IDs and the v2 chapter contract, and add major labs with instructor guides under `docs/instructor/`.

## Phase 0–2 deliverables produced

- `docs/curriculum/PHASE_0_ARCHITECTURE_REPORT.md` — existing architecture, content inventory, constraints, risk register.
- `docs/curriculum/PHASE_1_CURRICULUM_AUDIT.md` — 20-session audit, topic mapping table, lab mapping, Level 1/2/3 boundary check, missing-sections list.
- `docs/curriculum/PHASE_2_CURRICULUM_BLUEPRINT.md` — final 7-section/20-session blueprint, 90-minute plans, dependency graph, migration plan, scope, decisions D-1..D-4.

## Baseline re-validation (executed 2026-11-15, after `npm install`)

| Command | Result |
|---|---|
| `npm install` | PASS — 393 packages, 0 vulnerabilities |
| `npm run typecheck` | PASS (exit 0) |
| `npm run lint` | PASS (exit 0, 0 errors) |
| `npm test` | PASS — 193 tests, 9 files |
