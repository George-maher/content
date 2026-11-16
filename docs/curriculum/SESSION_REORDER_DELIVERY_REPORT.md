# Level 1 — Session Reordering Delivery Report

**Task:** Reorder Level 1 sessions (from Session 4) per the specified sequence. Strictly a reordering + renumbering task; no educational content changes.
**Date:** 2026-11-15
**Status:** COMPLETE

---

## 1. Original session order

| # | Session (file) | Title | Major lab |
|---:|---|---|---|
| 1 | s01 | Introduction to Cybersecurity & Security Principles | — |
| 2 | s02 | The Threat Landscape: Actors, Motives and Attack Lifecycles | — |
| 3 | s03 | Malware and Social Engineering: From Phishing to Ransomware | lab-01 |
| 4 | s04 | Operating System Foundations: Kernel, Processes and Services | — |
| 5 | s05 | Linux Fundamentals & Administration | lab-02 |
| 6 | s06 | Windows Administration & Active Directory Fundamentals | lab-03 |
| 7 | s07 | Networking Fundamentals I: Models, Devices & IP Addressing | lab-04 |
| 8 | s08 | Networking Fundamentals II: Protocols, Services & Traffic | — |
| 9 | s09 | Network Security: Firewalls, IDS/IPS, Segmentation & VPNs | lab-05 |
| 10 | s10 | Web Fundamentals & Web Infrastructure: HTTP, Servers & the Document Root | lab-06 |
| 11 | s11 | Web Application Security: SQL Injection, XSS, CSRF and the OWASP Top 10 | lab-07 |
| 12 | s12 | Cryptography Fundamentals | lab-08 |
| 13 | s13 | Identity and Access Management | lab-08 |
| 14 | s14 | Vulnerability Management | lab-09 |
| 15 | s15 | Security Monitoring and SIEM | lab-09 |
| 16 | s16 | Incident Response Foundations | lab-10 |
| 17 | s17 | Digital Forensics Essentials | — |
| 18 | s18 | Risk Management and Privacy | — |
| 19 | s19 | Cloud, Mobile and IoT Security | — |
| 20 | s20 | Capstone | lab-10 |

## 2. New session order

Sessions 1–5 are unchanged. From position 6, the new order is: Networking I → Networking II → Network Security → Cryptography → Windows AD → Web Fundamentals → Web App Security. Sessions 13–20 keep their relative order.

| # | Session (file) | Title | Major lab |
|---:|---|---|---|
| 1 | s01 | Introduction to Cybersecurity & Security Principles | — |
| 2 | s02 | The Threat Landscape: Actors, Motives and Attack Lifecycles | — |
| 3 | s03 | Malware and Social Engineering: From Phishing to Ransomware | lab-01 |
| 4 | s04 | Operating System Foundations: Kernel, Processes and Services | — |
| 5 | s05 | Linux Fundamentals & Administration | lab-02 |
| 6 | s07 | Networking Fundamentals I: Models, Devices & IP Addressing | lab-04 |
| 7 | s08 | Networking Fundamentals II: Protocols, Services & Traffic | — |
| 8 | s09 | Network Security: Firewalls, IDS/IPS, Segmentation & VPNs | lab-05 |
| 9 | s12 | Cryptography Fundamentals | lab-08 |
| 10 | s06 | Windows Administration & Active Directory Fundamentals | lab-03 |
| 11 | s10 | Web Fundamentals & Web Infrastructure: HTTP, Servers & the Document Root | lab-06 |
| 12 | s11 | Web Application Security: SQL Injection, XSS, CSRF and the OWASP Top 10 | lab-07 |
| 13 | s13 | Identity and Access Management | lab-08 |
| 14 | s14 | Vulnerability Management | lab-09 |
| 15 | s15 | Security Monitoring and SIEM | lab-09 |
| 16 | s16 | Incident Response Foundations | lab-10 |
| 17 | s17 | Digital Forensics Essentials | — |
| 18 | s18 | Risk Management and Privacy | — |
| 19 | s19 | Cloud, Mobile and IoT Security | — |
| 20 | s20 | Capstone | lab-10 |

**Required learning sequence verified:** Operating Systems (4) → Linux (5) → Networking I (6) → Networking II (7) → Network Security (8) → Cryptography (9) → Windows AD (10) → Web Fundamentals (11) → Web App Security (12). All three Networking sessions and Cryptography appear **before** Windows AD; Web Fundamentals and Web App Security appear **after** Windows AD. ✅

## 3. Old-to-new numbering mapping

| Old id | New id | Session |
|---:|---:|---|
| 1 | 1 | Introduction (unchanged) |
| 2 | 2 | Threat Landscape (unchanged) |
| 3 | 3 | Malware/Phishing (unchanged) |
| 4 | 4 | Operating Systems (unchanged) |
| 5 | 5 | Linux (unchanged) |
| 6 | **10** | Windows Administration & AD |
| 7 | **6** | Networking Fundamentals I |
| 8 | **7** | Networking Fundamentals II |
| 9 | **8** | Network Security |
| 10 | **11** | Web Fundamentals |
| 11 | **12** | Web Application Security |
| 12 | **9** | Cryptography |
| 13–20 | 13–20 | unchanged |

Only sessions 6–12 changed numbers (a permutation within that range). The chapter **filenames** (`s06.ts` … `s12.ts`) are the stable identifiers and were **not** changed — only the `id` (display number) field inside each file.

## 4. Files / records modified

**Ordering & numbering:**
- `src/content/index.ts` — reordered the `SESSIONS` array.
- `src/content/chapters/s06.ts, s07.ts, s08.ts, s09.ts, s10.ts, s11.ts, s12.ts` — updated the `id` field to the new number; `s06.ts` and `s10.ts` also had their `phase` adjusted (see §8) to keep phases non-decreasing.

**Internal references (session-number labels only):**
- `src/content/chapters/s01.ts, s07.ts, s08.ts, s09.ts, s10.ts, s11.ts, s12.ts, s13.ts, s14.ts, s17.ts, s20.ts` — updated `Session N` / `الجلسة N` references (prerequisites, recaps, narrative) and the S20 capstone "Course session" table cells to the new numbering. No prose was reworded.

**Progress preservation:**
- `src/lib/progress.ts` — added `SESSION_ID_REMAP` + `remapSessionIds()` (re-keys current v2 progress with its educational session); updated the v1→v2 `READ_SOURCES` map so its keys follow the new session ids.
- `src/store.tsx` — one-time remap of existing progress on load (gated by a marker so it runs exactly once).
- `src/constants.ts` — added the `reorder` storage marker key.

**Tests:**
- `tests/content.test.ts` — updated the hard-coded major-lab → session-id assertions to the new ids (lab-03→10, lab-04→6, lab-05→8, lab-06→11, lab-07→12, lab-08→{9,13}).

## 5. Session content preserved — confirmation

A normalization check (removing `id`/`phase` fields and collapsing all `Session N`/`الجلسة N` references and the S20 table cells to placeholders) compared every modified chapter before and after: **all chapter content is identical apart from session-number references and the `id`/`phase` metadata fields.** No titles, descriptions, outcomes, topics, explanations, examples, labs, commands, diagrams, quizzes, homework, vocabulary, resources, durations, or translations were altered. No sessions were merged, split, or rewritten. ✅

## 6. Student progress preserved — confirmation

- Progress is stored keyed by session `id` (`csf.progress.v2`). The reorder renumbered sessions 6–12, so a naive load would attach a student's progress to a different session.
- `remapSessionIds()` re-keys each record from the old id to the new id of the **same educational session**, so read/lab/homework/quiz records stay attached to the correct session.
- The remap runs **once** (gated by the `csf.progress.reorder` marker) and writes the re-keyed progress back, mirroring the existing v1→v2 migration pattern.
- The v1→v2 `READ_SOURCES` map was re-keyed to the new ids so the historical migration remains correct.
- Verified by an executed test (4/4 passing): a progress record for old ids 6/7/12 correctly moves to new ids 10/6/9 respectively; the no-op path is confirmed; `READ_SOURCES` entries move with their sessions; the remap map covers exactly 6–12. ✅

## 7. Navigation & routing validation

- **Session list / curriculum index:** rendered from the `SESSIONS` array order → automatically reflects the new order. ✅
- **Prev/Next navigation:** `SessionView` computes prev/next as `SESSIONS.find(x => x.id === s.id ± 1)`. Because ids are now 1–20 in order, prev/next resolve to the correct adjacent sessions. ✅
- **Routing:** hash routes `#/session/{id}` are validated against the set of current session ids (1–20). All current routes resolve; the router unit tests pass. ✅
- **Internal links:** all `href.session(id)` links and in-content session references were renumbered consistently. ✅

**URL note (accepted consequence):** the route space for sessions 6–12 is permuted, so an old bookmarked URL such as `#/session/6` (which previously opened Windows AD) now opens the session currently numbered 6 (Networking I). Because old and new ids overlap in 6–12, a clean redirect cannot distinguish them without ambiguity. This is the documented, accepted URL change permitted by the task ("Existing lesson URLs, unless the current routing system explicitly requires a safe route update"). **Student progress — the substantive data — is fully preserved** via the remap above.

## 8. Tests executed and actual results

| Command | Result |
|---|---|
| `npm install` | PASS — 393 packages, 0 vulnerabilities |
| `npm run typecheck` | PASS — `tsc --noEmit`, no errors |
| `npm run lint` | PASS — 0 errors, 0 warnings |
| `npm test` | PASS — **193 tests, 9 files** |
| `npm run build` | PASS — single-file build, 2.21 MB / 636.95 kB gzip |
| `npm run verify` | PASS — typecheck, lint, tests, build, audit (0 vulns) |
| `npx vitest run` (progress remap, temp) | PASS — 4/4 (temp test removed after run) |

Structural audit confirmed: `SESSIONS.map(s => s.id)` equals 1–20 in order; phases are non-decreasing; lab→id mapping is lab-01→3, lab-02→5, lab-03→10, lab-04→6, lab-05→8, lab-06→11, lab-07→12, lab-08→{9,13}, lab-09→{14,15}, lab-10→{16,20}.

**Phase note:** the required order places Windows AD (originally a phase-2 "Operating Systems" session) after Cryptography (phase 4). To keep the course structurally valid (the test requires non-decreasing phases), the `phase` metadata of `s06` (Windows AD) was changed 2→4 and `s10` (Web Fundamentals) 3→4. This is ordering metadata only — it does not alter any educational content or the section groupings' meaning beyond accommodating the requested sequence. These two sessions now sit within the phase-4 block in the new order.

## 9. Remaining issues

- **Documentation references (not part of the LMS):** the instructor guides under `docs/instructor/` and the implementation tracker still reference the **old** session numbers in their `Session:` headers and body text (e.g., a guide labelled "Session 10 — Web Fundamentals"). These are separate documentation artifacts, not LMS content/navigation/progress. Updating them is a documentation follow-up and was intentionally left out of scope to honour the "no content rewrite / no curriculum audit" restriction. They do not affect the running app, tests, or student data.
- **Old session URLs** for the reordered sessions resolve to the session now at that number (see §7). This is the accepted, unavoidable consequence of permuting the id space and does not affect progress.

No blocking issues remain for the reordering task itself.
