# Major Lab Template

Every major lab is legal, ethical, isolated and authorized. Use local virtual machines, intentionally vulnerable applications, and isolated virtual networks only.

## Required fields

| Field | Requirement |
|---|---|
| `title` | Descriptive bilingual title |
| `objectives` | 4–6 measurable outcomes |
| `prerequisites` | Sessions/concepts the student must already know |
| `environment` | VM specifications, network isolation, snapshots, OS versions |
| `tools` | Exact tools and versions where relevant |
| `authorization` | Scope, written permission, prohibited targets, stop conditions |
| `scenario` | Realistic business context |
| `safety` | Legal, ethical and operational safety note |
| `steps` | 5–10 short tick-off items |
| `detailedSteps` | 5–12 steps, each with title, command, explanation and expected output |
| `expected` | Overall expected result |
| `troubleshooting` | At least 3 problem/fix pairs |
| `deliverables` | Evidence, screenshots, notes, report, answers |
| `rubric` | Criteria with weights summing to 100 |
| `tool` | Companion browser practice tool, if one exists |
| `majorLabId` | Stable lab identifier, e.g. `lab-01` |

## Command rules

- Show one command or one short command block per step.
- Explain every command in both languages.
- State the expected output or observation.
- Never instruct students to scan or test public systems.
- Use private ranges (for example `192.168.56.0/24`) and isolated host-only networks.
- Include a stop condition and a recovery snapshot.

## Instructor solution

Instructor solutions, answer guides and expected screenshots are stored outside the student bundle under `docs/instructor/`. They are not imported by `src/`.

## Rubric example

| Criterion | Weight |
|---|---:|
| Correct setup and scope confirmation | 15 |
| Accurate commands and observations | 25 |
| Analysis and security interpretation | 25 |
| Evidence and deliverables | 20 |
| Clear report and recommendations | 15 |
| **Total** | **100** |
