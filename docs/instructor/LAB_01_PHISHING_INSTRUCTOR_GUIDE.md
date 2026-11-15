# Lab 1 — Instructor Guide (Threat Identification & Phishing Analysis)

**Course:** Cybersecurity Foundation (Level 1)
**Session:** 3 — Malware and Social Engineering: From Phishing to Ransomware
**Major lab:** `lab-01`
**Student title:** Lab 1 — Threat Identification & Phishing Analysis
**Format:** Scenario analysis and classification using a fictional message sample and a companion matching tool
**Suggested time:** 60–70 minutes inside a 90-minute session
**Bundle status:** Instructor-only. This file is intentionally outside `src/` and must not be imported by the LMS.

## Purpose

The lab turns the session's social-engineering and malware theory into a defensible triage skill. Students must identify assets and threats, analyze a simulated phishing message, extract malicious indicators, classify attack techniques and recommend preventive controls. The emphasis is careful observation and structured reasoning, not tool familiarity. A student who classifies quickly with invented facts has not met the objective.

## Learning outcomes

By the end of the lab, students can:

1. Identify assets and the threats that face them in a realistic scenario.
2. Analyze a simulated phishing message and extract observable indicators without guessing.
3. Classify attack techniques using the matching tool and the STOP-LOOK-VERIFY-REPORT checklist.
4. Distinguish social-engineering techniques (phishing, spear phishing, pretexting, baiting) from malware indicators.
5. Recommend layered preventive and detective controls with justification.
6. Write a handoff note that separates facts, hypotheses and recommended actions.

## Setup

- One fictional incident scenario per student or pair (clinic or small business).
- The companion `phish` and `match` tools for formative classification practice.
- A printed or digital triage worksheet.
- Timer visible to the room.
- No network access, real mailboxes or real organizational data are required.

### Suggested worksheet sections

| Section | Columns |
|---|---|
| Facts | Observable indicator, where seen, confidence |
| Classification | Technique / malware family, confidence, evidence |
| Response | First response, owner, justification |
| Controls | Control, type (preventive/detective), maps to which risk |

## Authorization and safety checklist

Read this aloud before students start:

- The scenario, message sample and organizations are fictional.
- Do not open links, scan real systems, contact any organization or forward live phishing messages.
- Do not download, execute or analyze real malware.
- Do not use real credentials or real patient/customer data in the exercise.
- If a real incident appears, stop and follow your organization's official procedure.

## Step-by-step (instructor view)

1. **Brief the scenario** (5 min): Present the fictional clinic scenario and the six incident reports or the single phishing message sample.
2. **Prepare the triage worksheet** (5 min): Students set up columns for facts, classification, confidence, first action and evidence.
3. **Extract evidence without guessing** (10 min): Students underline only observable facts in the message (sender, links, urgent wording, unexpected attachment, mismatched domain).
4. **Classify with the matching tool** (10 min): Students use the `match` tool to classify each indicator, then reconcile with their own reasoning.
5. **Complete the message checklist** (10 min): Students apply STOP-LOOK-VERIFY-REPORT to the sample message.
6. **Choose the first response** (10 min): For each case, students choose and justify the first protective action.
7. **Write the handoff note** (10 min): Students separate facts, hypotheses and recommended actions for a supervisor.

## Expected results

- A triage worksheet with evidence drawn only from the sample, classified correctly.
- Correct identification of phishing indicators (spoofed sender, urgent wording, suspicious link or attachment, mismatched domain).
- Correct classification of at least four attack techniques or malware families.
- A justified first response for each case that protects people before systems.
- A handoff note that clearly separates what is known from what is assumed.

## Common student errors and how to redirect

- **Jumping to conclusions:** Students classify before extracting evidence. Redirect: ask "what exactly did you observe, and where?"
- **Confusing technique with malware:** Students label everything "phishing." Redirect: separate the human technique from the technical payload or indicator.
- **Inventing facts:** Students add details not in the sample. Redirect: strike any statement that is not directly observable.
- **Recommending only technical controls:** Students ignore awareness and process controls. Redirect: ask what changes the human behavior that let the attack succeed.
- **Over-confident classification:** Students state high confidence with weak evidence. Redirect: require the evidence column before accepting a confidence score.

## Sample solution (instructor reference)

For a sample message that uses an urgent "verify your account" wording, a display name that does not match the real sender domain, a link that points to a look-alike domain and an unexpected attachment:

- **Facts:** urgent wording, display-name mismatch, look-alike link domain, unexpected attachment.
- **Classification:** phishing (with possible spear-phishing if the message references the specific recipient's role); the attachment, if any, would be flagged as a suspected malware vector.
- **First response:** do not click, do not open the attachment, report to the security team, then verify through an independent channel.
- **Controls:** email filtering (preventive), user awareness training (preventive), message reporting (detective), multi-factor authentication (preventive against credential capture).

## Grading rubric

| Criterion | Weight |
|---|---:|
| Evidence extracted only from the sample, no invented facts | 25 |
| Correct classification of techniques and malware families | 25 |
| Correct and justified first responses | 20 |
| Appropriate, layered preventive and detective controls | 20 |
| Clear handoff note separating facts, hypotheses and actions | 10 |

## Answer key (instructor only)

- Phishing indicators: spoofed/look-alike sender, urgency or fear wording, unexpected attachment, credential request, mismatched link domain.
- Social-engineering variants: spear phishing (targeted), pretexting (false identity/scenario), baiting (tempting offer), smishing/vishing (SMS/voice).
- Malware indicators (if present): unexpected executable, macro-enabled document, known-bad attachment type.
- Correct first response priority: protect the person and the system, then report, then verify through an independent channel, then preserve evidence.

## Extension and cleanup

- **Extension:** have students compare a phishing email with a spear-phishing email and explain the difference in targeting and defense.
- **Cleanup:** confirm no real credentials or live incidents were used; collect worksheets for review.
