# Lab 2 — Instructor Guide

**Course:** Cybersecurity Foundation (Level 1)  
**Session:** 2 — Threat Landscape: Actors, Motives and Attack Lifecycles  
**Major lab:** `lab-02`  
**Student title:** Lab 2 — Threat profile and Kill Chain map  
**Format:** Paper or spreadsheet analysis of six fictional incident summaries  
**Suggested time:** 60–75 minutes inside a 90-minute session  
**Bundle status:** Instructor-only. This file is intentionally outside `src/` and must not be imported by the LMS.

## Purpose

The lab teaches disciplined threat analysis. Students must separate observation from inference, propose an actor hypothesis with a confidence level, map only the Kill Chain stages supported by evidence, choose an early interruption point and propose a proportionate control.

The most important outcome is not a correct actor label. It is the ability to say what is known, what is suspected and what evidence would change the hypothesis.

## Learning outcomes

By the end of the lab, students can:

1. Extract observable facts from a short incident summary.
2. Propose an actor hypothesis without treating it as an accusation.
3. Map observed activity to Cyber Kill Chain stages and mark gaps explicitly.
4. Select an early, practical interruption point.
5. Propose a control that fits the organization and the stage.
6. Write an observation–inference–attribution note.

## Setup

- Six fictional summaries, available through the session lab and companion matching tool.
- A spreadsheet or text file with the evidence table.
- The seven-stage Cyber Kill Chain visible in the room.
- No malware, scanning tools, live targets or external research are required.

### Required table columns

| Column | Purpose |
|---|---|
| Case | Stable case label |
| Observable evidence | Facts stated in the summary, quoted or paraphrased |
| Actor hypothesis | Most likely actor type |
| Confidence | High, medium or low, with a reason |
| Initial vector | Observed or “not stated” |
| Kill Chain stages | Only stages supported by evidence |
| Earliest interruption | Earliest stage with enough information and authority to act |
| Control | Specific preventive or detective control |
| Evidence gap | What is missing and what would change the hypothesis |

## Authorization and safety checklist

Read this aloud before students start:

- All six summaries are fictional.
- Do not scan, contact, test or research any real organization named or implied by the cases.
- Do not search for stolen data, malware samples, leaked credentials or victim identities.
- Treat every actor label as a hypothesis, not an accusation against a person, group or country.
- Do not invent facts to complete a Kill Chain stage. “Not observed” is a valid and expected entry.
- Stop if an action would require access you do not have or would affect a real system.

## Facilitation plan

| Time | Activity | Instructor action |
|---:|---|---|
| 0–8 min | Read the safety note and define evidence | Give one example of an observation and one inference |
| 8–18 min | Read all six cases once | Enforce “underline only stated facts” |
| 18–30 min | Actor hypotheses and confidence | Challenge labels with no supporting evidence |
| 30–48 min | Kill Chain mapping | Check that gaps remain gaps |
| 48–60 min | Earliest interruption and control | Reject controls that do not match the stage |
| 60–70 min | Uncertainty note and peer review | Ask what evidence would change the hypothesis |
| 70–75 min | Debrief | Compare two cases with different confidence levels |

## The six fictional cases

These are the cases used by the Session 2 companion matching tool. They are fictional and deliberately incomplete. The wording below is a teaching paraphrase; use the student-facing text as the authoritative version.

| Case | Summary | Most likely actor type |
|---|---|---|
| C1 | A clinic's files are encrypted and a payment is demanded within 72 hours. | Cybercriminal |
| C2 | For 18 months a group quietly copies design documents from a supplier using custom tools. | Nation-state APT |
| C3 | A company homepage is replaced with a political slogan after a controversial announcement. | Hacktivist |
| C4 | A dismissed sales manager downloads the customer list the night before leaving. | Insider |
| C5 | A teenager runs a downloaded scanner against random websites and posts screenshots. | Opportunistic attacker |
| C6 | Thousands of payment cards are sold after a small shop's web server is compromised. | Cybercriminal |

## Sample analysis

The table below is a calibration example. Confidence and stage entries are intentionally conservative. Students may disagree with a hypothesis if they justify it from the evidence.

| Case | Observable evidence | Hypothesis | Confidence | Initial vector | Kill Chain stages supported | Earliest interruption | Control | Evidence gap |
|---|---|---|---|---|---|---|---|---|
| C1 | Files encrypted; payment demanded within 72 hours | Cybercriminal, financially motivated | High | Not stated; phishing or exposed remote access are plausible but unconfirmed | Exploitation, installation, actions on objectives; delivery not stated | Exploitation, if remote access is exposed and monitored | Remove public remote access, enforce MFA, alert on unusual remote logons and mass file changes | Initial access log, mailbox rules, remote logon history |
| C2 | 18 months; design documents; supplier; custom tools | Nation-state or sophisticated espionage group | Medium | Not stated; supplier trust relationship is the likely path | Reconnaissance, weaponization, delivery, exploitation, installation, command and control, actions on objectives | Delivery, through supplier access review and segmentation | Supplier security requirements, least-privilege supplier access, egress monitoring, document access alerts | Which supplier account was used, what data left, how tools were delivered |
| C3 | Homepage replaced; political slogan; after a controversial announcement | Hacktivist | High | Not stated; web application compromise or stolen publishing credentials | Reconnaissance, exploitation, installation or persistence, actions on objectives | Exploitation, through web hardening and change control | Patch the public application, require MFA for publishing, integrity monitoring and rapid rollback | Web logs, account used, upload path, timing |
| C4 | Dismissed manager; customer list; night before leaving | Insider | High | Authorized access | Reconnaissance or access, actions on objectives; malware stages not observed | Actions on objectives, through egress and download monitoring | Immediate account disablement, device return, egress controls, legal hold and data-loss prevention | Device logs, cloud download records, whether data was shared |
| C5 | Teenager; downloaded scanner; random websites; screenshots | Opportunistic attacker | High | Internet scanning | Reconnaissance; later stages only if a target responded | Reconnaissance, through exposure reduction and rate limiting | Remove unnecessary public services, patch, rate-limit and alert on scanning patterns | Whether any target was exploited, what the screenshots show |
| C6 | Thousands of cards sold; small shop web server compromised | Cybercriminal | High | Web server compromise | Reconnaissance, weaponization, delivery, exploitation, installation, command and control, actions on objectives | Exploitation, through web hardening and payment segmentation | Patch and isolate the storefront, tokenize payments, monitor for web shells and card-data access | How the server was breached, dwell time, data scope |

## Notes on each case

### C1 — Clinic ransomware

The summary states the outcome, not the entry path. A student who writes “phishing” as a fact has invented evidence. The defensible statement is: “Initial access is not stated; phishing and exposed remote access are plausible hypotheses that require log evidence.”

The earliest practical interruption depends on the environment. If remote access is exposed, exploitation is a strong candidate. If email filtering is the only visible control, delivery may be earlier but the summary does not prove it.

### C2 — Long-term design theft

The duration, targeting and custom tooling support a sophisticated espionage hypothesis. They do not prove a specific country. The supplier relationship is a plausible path because the summary names the supplier, but the exact account and delivery method are unknown.

This case is useful for discussing supply-chain risk, least privilege for third parties and egress monitoring. “Buy a bigger firewall” is not a proportionate answer.

### C3 — Defacement

The political slogan and the timing after a controversial announcement support a hacktivist hypothesis. The motive is expressive, not primarily financial. The entry path may be a vulnerable content management system or stolen publishing credentials; the summary does not decide between them.

The earliest interruption is usually exploitation or the publishing path. Integrity monitoring and change control can detect or prevent the final step even when exploitation is not visible.

### C4 — Departing insider

The person had authorized access, so malware stages may be absent. The key controls are administrative and detective: prompt account disablement, device return, egress monitoring and legal hold. The case is also a reminder that “insider” is a role in the incident, not a moral diagnosis.

### C5 — Opportunistic scanner

The summary supports reconnaissance and low sophistication. It does not prove that any site was exploited. Students should resist inflating this into an APT case. The control is exposure reduction and monitoring, not an enterprise incident-response programme.

### C6 — Card theft

The summary states that the web server was compromised and cards were sold. It does not state the vulnerability, the dwell time or the number of records. Payment segmentation and tokenization reduce impact even when the storefront is compromised.

## Sample uncertainty note

For C1:

> **Observed:** The clinic's files were encrypted and a payment was demanded within 72 hours.  
> **Inferred:** The most likely actor is a financially motivated cybercriminal group, because encryption and a short payment deadline are consistent with ransomware extortion. The initial vector is not stated.  
> **What would change the hypothesis:** Mail logs showing a malicious attachment, remote-access logs showing an unknown logon, or a ransom note with a known family marker would raise or lower confidence and identify the earliest defensible interruption point.

A strong note uses three clearly labelled parts. A weak note blends observation, speculation and attribution into one paragraph.

## Confidence guidance

| Confidence | Use when |
|---|---|
| High | Multiple independent observations support the hypothesis and alternatives are weak |
| Medium | The pattern fits but important evidence is missing or an alternative remains plausible |
| Low | The label is a working guess and the evidence is thin or ambiguous |

Confidence is about the strength of the evidence, not the severity of the incident. A severe incident can still have a low-confidence attribution.

## Rubric guidance

| Criterion | Weight | Strong (full credit) | Adequate (partial credit) | Weak (little credit) |
|---|---:|---|---|---|
| Evidence quality and avoidance of invented facts | 20 | Every row cites stated facts and marks gaps | Most rows cite facts, a few inferences slip in | Facts invented to fill the story |
| Actor hypotheses and confidence reasoning | 20 | Plausible hypothesis, confidence and alternative considered | Hypothesis present, confidence thin | Label asserted without evidence |
| Kill Chain mapping accuracy and explicit gaps | 25 | Only supported stages marked, gaps explicit | Mapping mostly accurate, gaps incomplete | Every stage filled for every case |
| Earliest interruption and control feasibility | 20 | Early, practical point with a proportionate control | Control plausible but generic | Control unrelated to the stage or organization |
| Clarity of uncertainty note and presentation | 15 | Observation, inference and attribution clearly separated | Note present but mixes categories | No uncertainty note or pure speculation |

Do not award full credit for a correct actor label with no evidence trail. Do not penalize a different but defensible label when the student states confidence and alternative hypotheses.

## Common student errors and coaching

| Error | Coaching question |
|---|---|
| “It is obviously a nation-state.” | “Which observations rule out a criminal group, and what would raise your confidence?” |
| Filling all seven stages for every case | “Which stage is supported by a quoted fact, and which is ‘not observed’?” |
| Treating a victim sector as an actor indicator | “Does the sector prove who did it, or only who was targeted?” |
| Naming a country or group as fact | “Is that an attribution or a hypothesis? What evidence would you need?” |
| Proposing an enterprise tool for a small clinic | “What can this organization actually operate and maintain?” |
| Ignoring the insider case because there is no malware | “Which stages still apply when the person has authorized access?” |
| Writing a control that acts too late | “Could the defender act earlier with the information available?” |

## Peer-review checklist

- [ ] Every row contains at least two observable facts.
- [ ] No fact appears that is not in the summary.
- [ ] Each hypothesis has a confidence level and a reason.
- [ ] At least one alternative hypothesis is considered for one case.
- [ ] Kill Chain entries are supported by evidence; gaps are marked.
- [ ] The earliest interruption is earlier than “after data is stolen”.
- [ ] The control is specific and feasible for the organization.
- [ ] The uncertainty note separates observation, inference and attribution.

## Debrief questions

1. Which case had the widest gap between what was observed and what students wanted to conclude?
2. Which actor label would change if one additional log source were available?
3. Where is the earliest point at which a defender could act without guessing?
4. Which control reduces impact even if prevention fails?
5. Why is “not observed” more useful than a fabricated stage?
6. How would you explain a low-confidence attribution to a non-technical manager?

## Assessment notes

- Collect the evidence table, the Kill Chain map and the uncertainty note.
- Ask one student to defend a confidence rating without using the actor label.
- Check at least two cases for invented facts.
- Require one control that is feasible for a small organization.
- Record whether the student respected the authorization boundary and avoided external research.

## Ethical and legal note

Threat attribution can harm real people and organizations when it is stated carelessly. The instructor should correct any statement that presents a hypothesis as proven, names a real person or group without evidence, or encourages retaliation. The lab is an analytic exercise about fictional cases, not an intelligence assessment about a real entity.

## Version

- v1.0 — Batch 1, 2026-11-15.
- Aligned with `docs/curriculum/LAB_TEMPLATE.md` and Session 2 v2 content.
