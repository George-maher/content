# Lab 10 — Instructor Guide (Incident Response & Capstone)

**Course:** Cybersecurity Foundation (Level 1)
**Sessions:** 16 — Incident Response: Preparation, Detection and the First Hours · 20 — Career Paths & Capstone: Secure a Small Business
**Major lab:** `lab-10` (shared across two sessions)
**Student titles:** Lab 10 — Incident Response: Ordering the First Hour of a Ransomware Incident · Lab 10 — Capstone: Score and Prioritise Nova Accounting's Risks
**Format:** Simulator-based labs on the companion `order` and `risk` tools (display only)
**Suggested time:** 60–70 minutes per session lab (run one per session)
**Bundle status:** Instructor-only. This file is intentionally outside `src/` and must not be imported by the LMS.

## Purpose

`lab-10` is a two-part major lab. Part A (Session 16) turns incident response into a safe, repeatable tabletop exercise: students act as the on-call analyst for a ransomware incident, order the first-hour response actions along the incident-response lifecycle, justify each placement, and explain contain-before-eradicate-before-recover reasoning and what evidence to preserve first. Part B (Session 20) applies risk thinking to a small business: students act as the security consultant for Nova Accounting, score each risk as Likelihood × Impact, read the rating, choose a treatment, re-score after imagining a control, and use the sorted register to decide what to treat first — the core of the capstone roadmap. Both parts emphasise correct reasoning, authorisation and safety.

## Learning outcomes

By the end of the labs, students can:

1. Order first-hour incident-response actions along the incident-response lifecycle.
2. Justify each placement against the goal of its phase.
3. Explain contain-before-eradicate-before-recover reasoning and what evidence to preserve first.
4. Score business risks as Likelihood × Impact and read the rating.
5. Choose and justify risk treatments and re-score after an imagined control.
6. Prioritise risks using the register's sort order and link the prioritisation to the roadmap.

## Setup

- The companion `order` incident-response simulator (Session 16) and the `risk` register simulator (Session 20), one per student.
- A projected display for each instructor demonstration.
- The NIST SP 800-61 lifecycle reference (Session 16) and the capstone brief and risk-treatment reference (Session 20).
- No real or third-party systems are involved; the incident scenario and risk data are fictional and contained in the simulators.
- Timer visible to the room.

### Suggested lab area

- All practice happens inside the display-only simulators. Nothing is executed, connected, scanned, patched or changed on any real system.

## Authorization and safety checklist

Read this aloud before students start:

- Configure and test only in the companion simulators or a deliberately vulnerable lab you own or are authorised to use.
- This is a tabletop simulation using display-only tools; nothing is executed, connected or changed on any real system.
- In real incidents, follow your organisation's plan, involve management and legal counsel, and never contact the attackers or pay a ransom on your own authority.
- In real engagements, any assessment of a business needs a signed agreement defining scope and confidentiality; the business's weaknesses are highly confidential.
- If a task touches a system outside your authorized scope, stop and confirm authorization first.

## Part A — Session 16: Incident Response step-by-step (instructor view)

1. **Read the six response actions** (10 min): Read the six actions offered in the ordering simulator and identify which incident-response phase each belongs to.
2. **Place the actions in order** (18 min): Order the six actions along the incident-response lifecycle (detect and confirm → contain → eradicate → recover → learn).
3. **Justify each placement** (12 min): Explain why each action belongs in its phase, against the goal of that phase.
4. **Explain the lifecycle reasoning** (12 min): Explain contain-before-eradicate-before-recover and why containment happens before removal.
5. **Identify evidence to preserve first** (10 min): List the evidence to preserve first and the reasoning for its priority.
6. **Write the management message** (8 min): Draft a factual, calm message to management and the lessons-learned questions.

## Part A expected results

- All six actions ordered correctly along the incident-response lifecycle.
- Each placement justified against the phase goal.
- Correct contain-before-eradicate-before-recover reasoning.
- An accurate first-evidence list and power-off reasoning.
- A factual management message and lessons-learned questions.

## Part A common student errors and how to redirect

- **Eradicating before containing:** Redirect to contain first — stopping the spread limits damage before you remove the cause.
- **Recovering before eradication:** Confirm the cause is removed before restoring, so the incident does not recur.
- **Preserving the wrong evidence first:** Push for the volatile and time-sensitive evidence (memory, logs, disk images) before cleaning up.
- **Contacting the attackers or paying a ransom:** Stop and restate the rule — never contact attackers or pay a ransom on your own authority; involve management and legal counsel.
- **Unclear ordering logic:** Re-anchor each action to the lifecycle phase and its goal.

## Part A sample solution (instructor reference)

- Recommended order (first hour): detect and confirm the incident → contain (isolate affected systems, preserve evidence) → eradicate (remove the ransomware/cause) → recover (restore from tested backups) → learn (capture lessons).
- Justification: each phase has a goal — confirm before acting, contain to limit spread, eradicate to remove the cause, recover to restore service, learn to improve.
- Contain-before-eradicate-before-recover: containment limits damage first, removal follows, and restoration comes last so the incident does not recur.
- Evidence to preserve first: volatile memory, logs, and disk images, before any cleanup that would destroy them.
- Management message: factual, calm, states what is known, what is being done, and the next update time; lessons-learned questions probe detection, response and prevention.

## Part B — Session 20: Capstone step-by-step (instructor view)

1. **Read Nova's risks** (10 min): Read the preset risks in the register for Nova Accounting (phishing, unpatched public-facing system, ransomware, lost laptop, power outage) and note the asset each threatens.
2. **Score each risk** (15 min): Set Likelihood (1–5) and Impact (1–5) for each risk and read the computed score and rating.
3. **Observe the rating** (10 min): Read the rating badge — Critical (17+), High (10–16), Medium (5–9), Low (1–4) — and confirm high scores map to Critical.
4. **Choose a treatment** (12 min): For each risk, choose Mitigate, Transfer, Accept or Avoid and justify the choice.
5. **Re-score after a control** (12 min): Imagine a control (e.g. MFA lowers phishing impact; offline backups lower ransomware impact), lower the Impact, and observe the score and rating drop.
6. **Prioritise with the sort order** (11 min): Use the register's sorted list to decide what to treat first and link the prioritisation to the 30-60-90-day roadmap.

## Part B expected results

- Correct Likelihood × Impact scoring and ratings for each risk.
- Appropriate, justified treatments for each risk.
- Correct re-scoring showing the effect of an imagined control.
- Sound prioritisation linked to the 30-60-90-day roadmap.
- A clear link to the capstone and a confidentiality/safety note.

## Part B common student errors and how to redirect

- **Score does not match the rating:** Check the thresholds (Critical 17+, High 10–16, Medium 5–9, Low 1–4) and that the score is Likelihood multiplied by Impact, not added.
- **Unsure how to choose a treatment:** Ask whether a control can reduce likelihood or impact (Mitigate), whether the risk can be shifted (Transfer), whether it is small enough to accept knowingly (Accept), or whether the activity should stop (Avoid).
- **Forgetting to re-score after a control:** A control is only real if it changes the score. After imagining one, lower the slider and re-read the rating.
- **Prioritising without linking to the roadmap:** Push students to name the first action of the roadmap and connect it to the highest-scoring risk.
- **Treating a client's weaknesses casually:** Remind students that the business's weaknesses are highly confidential and require a signed scope and confidentiality agreement.

## Part B sample solution (instructor reference)

- Risk score = Likelihood × Impact; Critical ≥ 17, High 10–16, Medium 5–9, Low 1–4.
- Treatments: Mitigate (reduce likelihood or impact with a control); Transfer (shift, e.g. insurance); Accept (take knowingly); Avoid (stop the activity).
- Re-scoring: MFA lowers the phishing risk's impact; offline 3-2-1 backups lower the ransomware risk's impact — the score and rating drop.
- Prioritisation: the register sorts by score, highest first, so the highest-scoring risks are treated first — the start of the 30-60-90-day roadmap (quick wins first: inventory, MFA, updates, backups).
- The prioritisation feeds the roadmap: treat the highest-scoring risks first, with justified, owned actions.

## Grading rubric

Part A (Session 16):

| Criterion | Weight |
| --- | --- |
| All six actions ordered correctly along the incident-response lifecycle | 30 |
| Each placement justified against the phase goal | 20 |
| Correct contain-before-eradicate-before-recover reasoning | 20 |
| Accurate first-evidence list and power-off reasoning | 15 |
| Factual management message and lessons-learned questions | 15 |

Part B (Session 20):

| Criterion | Weight |
| --- | --- |
| Correct Likelihood × Impact scoring and ratings | 25 |
| Appropriate, justified treatments | 20 |
| Correct re-scoring after a control | 20 |
| Sound prioritisation linked to the roadmap | 20 |
| Clear link to the capstone and confidentiality awareness | 15 |

## Answer key (instructor only)

**Part A:**

- Order: detect/confirm → contain → eradicate → recover → learn.
- Contain before eradicate before recover: limit damage, remove the cause, restore last.
- Evidence to preserve first: volatile memory, logs, disk images — before cleanup.

**Part B:**

- Score = Likelihood × Impact; Critical ≥ 17, High 10–16, Medium 5–9, Low 1–4.
- Treatments: Mitigate, Transfer, Accept, Avoid.
- A control lowers the score; prioritise highest-score first, feeding the 30-60-90-day roadmap.

## Extension and cleanup

- **Extension:** For Part A, add a second simultaneous incident and ask students to triage and sequence actions across both. For Part B, add a sixth risk and ask students to re-score and re-prioritise, then draft the one-page owner summary.
- **Cleanup:** No real systems were touched. Collect the ordering justifications, risk registers and management messages and note that the simulators are practice tools only.
