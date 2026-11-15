# Cybersecurity Foundation – 20-Session Course (EN / AR)

A complete, bilingual (English + Arabic with RTL layout) interactive course. The Foundation level is concept- and tool-based and contains **no programming of any kind**.

## Run / build / test

```bash
npm install
npm run dev            # local development
npm run build          # produces a single-file site at dist/index.html
npm run build:web      # produces a cacheable multi-file build at dist-web/
npm run typecheck      # type-check app sources
npm run typecheck:test # type-check tests
npm run lint           # ESLint + jsx-a11y
npm test               # content, render and unit/component tests (182)
npm run verify         # typecheck + lint + tests + both builds + audit
```

## What every session contains

| Part | Details |
|---|---|
| Lesson | 4–5 learning objectives, 4–5 sections (paragraphs, tables, bullets, call-outs) |
| Diagram | One of: flow, layers, cycle, grid – rendered natively, bilingual, RTL-aware |
| Lab | Scenario, safety & ethics note, 5–6 tick-off steps, expected outcome, plus an interactive tool |
| Quiz | 6–7 multiple-choice questions with explanations (70 % to pass) |
| Homework | 3–5 tasks with a concrete deliverable (tick-off tracking) |
| References | 3–5 official sources (NIST, CISA, NCSC, OWASP, IETF, ISO …), link-checked |
| Key terms | 6–8 bilingual definitions that feed the global glossary |

Extra features: dashboard with progress, glossary search, 40-question final exam (drawn from the full question pool, with questions and options reshuffled each attempt), language switch with RTL, progress saved in `localStorage` (best scores retained, cross-tab synced), per-session reset, and a 404 page.

## Curriculum

| # | Session | Lab tool |
|---|---|---|
| 1 | Introduction to Cybersecurity & the CIA Triad | CIA classifier |
| 2 | The Threat Landscape | Threat-actor matching |
| 3 | Malware Fundamentals | Malware-family matching |
| 4 | Social Engineering and Phishing | Phishing e-mail dissector |
| 5 | Operating Systems for Security (Windows & Linux) | chmod permission calculator |
| 6 | Networking I: Models, Devices, IP Addressing | IPv4/CIDR subnet calculator |
| 7 | Networking II: Protocols, Ports, DNS, Web | Port & protocol reference |
| 8 | Network Security: Firewalls, IDS/IPS, VPN | Firewall rule simulator |
| 9 | Cryptography Basics | Caesar cipher + brute force |
| 10 | Hashing, Signatures, PKI and TLS | SHA-256 avalanche & integrity check |
| 11 | Authentication: Passwords, MFA, Passkeys | Password entropy estimator |
| 12 | Access Control and IAM | Least-privilege access matrix |
| 13 | Web Application Security Basics | SQL-injection simulation (display only) |
| 14 | Endpoint, Patching & Vulnerability Management | Finding-prioritisation ordering |
| 15 | Risk Management, Governance, Frameworks | Risk register |
| 16 | Security Monitoring, Logging, SIEM | Authentication-log analyzer |
| 17 | Incident Response & Forensics Basics | IR phase ordering |
| 18 | Cloud, Mobile and IoT Security | Shared-responsibility matching |
| 19 | Privacy, Law, Compliance and Ethics | Legal / ethical decision drill |
| 20 | Capstone & Career Paths | 90-day roadmap prioritisation |

## Architecture

```
src/
  constants.ts            course size, pass mark, exam size, storage keys
  content/types.ts        data model (L = {en, ar}), phases
  content/sNN_MM.ts       two sessions per file
  content/index.ts        SESSIONS array
  components/             SessionView, Diagram, QuizRunner, LabToolsA/B, Pages, ui, ErrorBoundary
  lib/sha256.ts           dependency-free SHA-256, Caesar, entropy helpers
  lib/storage.ts          failure-tolerant Web Storage wrapper
  lib/progress.ts         progress schema, validation and scoring helpers
  lib/permissions.ts      chmod calculation and warnings
  lib/exam.ts             full-pool exam sampling and option shuffling
  store.tsx / router.ts   split language + progress stores, validated hash router
  strings.ts              UI strings (EN/AR)
tests/                    content, render, router, store, exam, storage, quiz and tool tests
```

The tests enforce: 20 sequential sessions, minimum content volume, 4 options per quiz question, valid answers, real Arabic text for every English string, https references, no placeholder text, **no mention of Python anywhere in `src/`**, SHA-256 test vectors, and a server-side render of every session × tab × language. Unit tests cover storage failures, malformed progress, router validation, exam sampling/answer remapping, best-score retention, and the chmod “everyone can read” regression.

## Safety

All lab tools run locally in the browser. Nothing is scanned, attacked or sent anywhere; the SQL-injection lab is a text simulation. Every lab states legal and ethical limits.
