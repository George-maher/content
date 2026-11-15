# Content Quality Checklist (Level 1)

## Educational quality

- [ ] The session explains what, why, how, components, usage, examples, security implications, mistakes and defenses.
- [ ] The content assumes no prior programming or cybersecurity knowledge.
- [ ] Technical terms are defined before they are used.
- [ ] Every topic connects to a realistic security situation.
- [ ] The progression respects prerequisites and does not jump ahead.
- [ ] The session stays at Foundation depth; advanced exploitation, Python, and full SIEM/forensics administration are excluded.
- [ ] Learning outcomes match the content and the assessment.

## Structure

- [ ] `schemaVersion: 2`.
- [ ] 90 minutes; agenda totals exactly 90.
- [ ] 24 required components are present.
- [ ] 8–12 substantial theory sections, not bullet-point summaries.
- [ ] 20–30 vocabulary terms with definitions and examples.
- [ ] 10–15 MCQs, 5 true/false, 3–5 classification prompts, 2–3 scenarios, 1–2 practical checks.
- [ ] Homework has instructions, deliverables, criteria and a challenge.
- [ ] 5–8 references, official sources preferred.
- [ ] Major lab includes objectives, prerequisites, environment, tools, authorization, detailed steps, expected outputs, troubleshooting, deliverables, rubric and safety.

## Bilingual

- [ ] Arabic is the default and is not a shortened translation.
- [ ] English technical terms are preserved and explained.
- [ ] Every `L` value has non-empty English and Arabic text.
- [ ] Arabic uses real Arabic script, not transliteration.
- [ ] Commands, code, paths, IPs and URLs render LTR.
- [ ] Tables, examples, scenarios and assessment items exist in both languages.
- [ ] Terminology is consistent with the glossary.

## Accuracy and safety

- [ ] Official documentation is cited and the URL works.
- [ ] Version-sensitive claims are pinned (for example OWASP Top 10 2025, CIS Controls v8.1, NIST CSF 2.0).
- [ ] Digital signatures are described as sign-with-private-key and verify-with-public-key.
- [ ] The Cyber Kill Chain has seven stages.
- [ ] No fabricated screenshots or tool outputs.
- [ ] All labs are isolated, legal, ethical and authorized.
- [ ] No public targets, no real unauthorized testing.
- [ ] No Python in Foundation.

## Technical

- [ ] `npm run typecheck` passes.
- [ ] `npm run typecheck:test` passes.
- [ ] `npm run lint` passes.
- [ ] `npm test` passes.
- [ ] Every session renders in English and Arabic on every tab.
- [ ] No broken routes, missing content, duplicate IDs, or empty components.
- [ ] Progress migration and reset behavior are tested.
- [ ] Bundle size is measured after each batch.
