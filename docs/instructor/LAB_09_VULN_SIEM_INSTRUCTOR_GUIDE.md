# Lab 9 — Instructor Guide (Vulnerability Management & Security Monitoring)

**Course:** Cybersecurity Foundation (Level 1)
**Sessions:** 14 — Vulnerability Management: Scanning, Scoring and Prioritisation · 15 — Security Monitoring & SIEM: Logs, Alerts and the Analyst Workflow
**Major lab:** `lab-09` (shared across two sessions)
**Student titles:** Lab 9 — Vulnerability Management: Risk-Based Prioritisation · Lab 9 — Security Monitoring: Investigate an SSH Brute-Force Attempt
**Format:** Simulator-based labs on the companion `risk` and `logs` tools (display only)
**Suggested time:** 60–70 minutes per session lab (run one per session)
**Bundle status:** Instructor-only. This file is intentionally outside `src/` and must not be imported by the LMS.

## Purpose

`lab-09` is a two-part major lab. Part A (Session 14) turns vulnerability management into a safe, repeatable prioritisation exercise: students read a risk register of five risks, score each as Likelihood × Impact, observe the rating, choose a treatment, re-score after imagining a control, and decide what to treat first. Part B (Session 15) turns security monitoring into a safe investigation: students open a fabricated SSH authentication log in the analyzer, run it, classify the source IPs, identify the critical success-after-failures event, edit the log to remove the attacker's success, re-analyse, and write the containment and prevention steps. Both parts emphasise correct reasoning and the security implications of each decision.

## Learning outcomes

By the end of the labs, students can:

1. Score risks as Likelihood × Impact (1–5) and read the resulting rating.
2. Choose and justify risk treatments (mitigate, transfer, accept, avoid).
3. Re-score a risk to show the effect of an imagined control.
4. Prioritise risks using the register's sort order.
5. Identify and classify source IPs from an authentication log.
6. Interpret a critical success-after-failures event and write an ordered containment plan.

## Setup

- The companion `risk` register simulator (Session 14) and the `logs` authentication-log analyzer (Session 15), one per student.
- A projected display for each instructor demonstration.
- The CVE/CVSS reference (Session 14) and the fabricated sample SSH log (Session 15) for the discussion steps.
- No real or third-party systems are involved; the risk data and logs are fictional and contained in the simulators.
- Timer visible to the room.

### Suggested lab area

- All practice happens inside the display-only simulators. Nothing is scanned, patched, or analysed on a real system.

## Authorization and safety checklist

Read this aloud before students start:

- Configure and test only in the companion simulators or on a deliberately vulnerable lab you own or are authorised to use.
- Do not run vulnerability scanners on assets you do not own or are not authorised to scan, and only at agreed times — scans can disrupt fragile systems.
- Do not analyse real logs you are not authorised to access; treat logs as sensitive (they contain usernames, IPs and sometimes personal data).
- Handle scan reports as sensitive — they are a roadmap for attackers.
- If a task touches a system outside your authorized scope, stop and confirm authorization first.

## Part A — Session 14: Vulnerability Management step-by-step (instructor view)

1. **Read the five risks** (10 min): Read the risk register of five security risks facing a small organisation and note which asset each threatens.
2. **Score each risk** (15 min): Set Likelihood (1–5) and Impact (1–5) for each risk and read the computed score, Likelihood × Impact.
3. **Observe the rating** (10 min): Read the rating badge — Critical (17+), High (10–16), Medium (5–9), Low (1–4) — and confirm high scores map to Critical.
4. **Choose a treatment** (12 min): For each risk, choose Mitigate, Transfer, Accept or Avoid, and justify the choice.
5. **Re-score after a control** (12 min): Imagine a control (e.g. MFA lowers phishing impact; offline backups lower ransomware impact), lower the Impact, and observe the score and rating drop.
6. **Prioritise with the sort order** (11 min): Use the register's sort order (highest score first) to decide what to treat first and explain the reasoning.

## Part A expected results

- Correct Likelihood × Impact scoring and ratings for each risk.
- Appropriate, justified treatments for each risk.
- Correct re-scoring showing the effect of an imagined control.
- Sound prioritisation using the sort order, with reasoning.
- A clear link to vulnerability management and a safety note.

## Part A common student errors and how to redirect

- **Score does not match the rating:** Check the thresholds (Critical 17+, High 10–16, Medium 5–9, Low 1–4) and that the score is Likelihood multiplied by Impact, not added.
- **Unsure how to choose a treatment:** Ask whether a control can reduce likelihood or impact (Mitigate), whether the risk can be shifted (Transfer), whether it is small enough to accept knowingly (Accept), or whether the activity should stop (Avoid).
- **Forgetting to re-score after a control:** A control is only real if it changes the score. After imagining one, lower the slider and re-read the rating.
- **Prioritising without justification:** Push for a reason for each position tied to the score, not a guess.

## Part A sample solution (instructor reference)

- Risk score = Likelihood × Impact (1–5 each).
- Ratings: Critical ≥ 17; High 10–16; Medium 5–9; Low 1–4.
- Treatments: Mitigate (reduce likelihood or impact with a control); Transfer (shift, e.g. insurance); Accept (take knowingly); Avoid (stop the activity).
- Re-scoring: MFA lowers the phishing risk's impact; offline 3-2-1 backups lower the ransomware risk's impact — the score and rating drop.
- Prioritisation: the register sorts by score, highest first, so the highest-scoring risks are treated first — the start of the roadmap.

## Part B — Session 15: Security Monitoring step-by-step (instructor view)

1. **Read the sample log** (10 min): Open the fabricated SSH authentication log and identify the source IPs and the events.
2. **Run the analyzer** (12 min): Run the analyzer and read the per-IP findings (failed attempts, successes, sources).
3. **Classify each source IP** (12 min): Classify each source IP as a compromise, a brute-force pattern, or normal traffic.
4. **Identify the critical event** (12 min): Identify the critical event — a successful login from a source that had many failed attempts, indicating a likely compromise.
5. **Edit the log and re-analyse** (12 min): Remove the attacker's successful login from the log and re-run the analyzer to observe the changed finding.
6. **Write containment and prevention** (12 min): Write an ordered containment plan and the prevention steps that would have stopped the attack.

## Part B expected results

- Correct identification and classification of the source IPs.
- Correct interpretation of the critical success-after-failures event.
- Correct edit and re-analysis showing the changed finding.
- A sound, ordered containment plan.
- Appropriate preventive fixes and a safety note.

## Part B common student errors and how to redirect

- **Missing the critical event:** Point students to the source IP that has many failed attempts followed by a success — the success-after-failures pattern is the compromise signal.
- **Confusing a failed-only source with a compromise:** A source with only failures is a brute-force pattern; the compromise signal is a success from that source.
- **Unclear containment order:** Push for a logical sequence — isolate/contain first, then eradicate, then recover, then learn.
- **Ignoring log sensitivity:** Remind students that real logs are sensitive and only analyse logs they are authorised to access.

## Part B sample solution (instructor reference)

- Source IPs: the fabricated log uses documentation-reserved IPs (203.0.113.x, 198.51.100.x, 192.0.2.x).
- Classification: a source with repeated failures is a brute-force pattern; a source with a success after failures is a compromise.
- Critical event: the successful login from a source that had many failed attempts — the signal that the account was likely compromised.
- Edit and re-analyse: removing the attacker's success changes the finding, demonstrating how the event drives the response.
- Containment (ordered): confirm the compromise, isolate the affected host/account, revoke the attacker's access, preserve evidence, then eradicate and recover.
- Prevention: disable password authentication for SSH / use keys, enforce MFA, rate-limit and block the offending source, monitor for repeat patterns, and keep the log analyser tuned.

## Grading rubric

Part A (Session 14):

| Criterion | Weight |
| --- | --- |
| Correct Likelihood × Impact scoring and ratings | 25 |
| Appropriate, justified treatments | 20 |
| Correct re-scoring after a control | 20 |
| Sound prioritisation using the sort order | 20 |
| Clear link to vulnerability management and safety awareness | 15 |

Part B (Session 15):

| Criterion | Weight |
| --- | --- |
| Correct identification and classification of source IPs | 25 |
| Correct interpretation of the critical success-after-failures event | 20 |
| Correct edit and re-analysis showing the changed finding | 20 |
| Sound, ordered containment plan | 20 |
| Appropriate preventive fixes and safety awareness | 15 |

## Answer key (instructor only)

**Part A:**

- Score = Likelihood × Impact; Critical ≥ 17, High 10–16, Medium 5–9, Low 1–4.
- Treatments: Mitigate, Transfer, Accept, Avoid.
- A control lowers the score; prioritise highest-score first.

**Part B:**

- The fabricated log uses reserved IPs; a success-after-failures source is the compromise.
- Containment order: confirm → isolate → revoke access → preserve evidence → eradicate → recover.
- Prevention: key-only SSH, MFA, rate-limiting/blocking, tuned monitoring.

## Extension and cleanup

- **Extension:** For Part A, add a sixth risk and ask students to re-score and re-prioritise. For Part B, introduce a second compromised source and ask students to triage and produce a prioritised response for both.
- **Cleanup:** No real systems were touched. Collect the containment plans and note that the simulators are practice tools only.
