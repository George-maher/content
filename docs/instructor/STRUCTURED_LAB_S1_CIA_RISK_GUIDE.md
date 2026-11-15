# Lab 1 — Instructor Guide

**Course:** Cybersecurity Foundation (Level 1)  
**Session:** 1 — Introduction to Cybersecurity and the CIA Triad  
**Major lab:** `lab-01`  
**Student title:** Lab 1 — CIA triad and risk register  
**Format:** Paper or spreadsheet exercise using a fictional dental clinic  
**Suggested time:** 60–75 minutes inside a 90-minute session  
**Bundle status:** Instructor-only. This file is intentionally outside `src/` and must not be imported by the LMS.

## Purpose

The lab turns the session vocabulary into a defensible work product. Students must identify assets, separate threats from vulnerabilities, score risks consistently, choose a treatment, name a control, record residual risk and write a short recommendation for a non-technical owner.

The emphasis is reasoning, not tool familiarity. A student who writes a neat table with invented facts or contradictory scores has not met the objective.

## Learning outcomes

By the end of the lab, students can:

1. Build an asset inventory with owners, CIA goals and criticality.
2. Write threat and vulnerability statements that are not confused with each other.
3. Populate a risk register with likelihood, impact and a reproducible score.
4. Choose mitigate, avoid, transfer or accept and justify the choice.
5. Select controls that map to a risk and a CIA goal.
6. State residual risk, an owner and a review date.

## Setup

- One fictional clinic scenario per student or pair.
- Spreadsheet, text editor or printed worksheet.
- Optional companion CIA classifier for quick formative practice.
- Timer visible to the room.
- No network access, virtual machines or real organizational data are required.

### Suggested worksheet tabs

| Tab | Columns |
|---|---|
| Assets | Asset ID, asset, type, owner, primary CIA goal, criticality, notes |
| Risks | Risk ID, asset, threat, vulnerability, likelihood 1–5, impact 1–5, score, treatment, control, residual risk, owner, review date |
| Recommendation | Five sentences for the owner |

## Authorization and safety checklist

Read this aloud before students start:

- The clinic, staff, systems and data are fictional.
- Do not inspect, scan, contact or test any real clinic, network or account.
- Do not copy real patient, employee or customer data into the exercise.
- Do not use real organization names, domains, IP addresses or credentials.
- The lab is complete when the written artefacts are submitted; no live system is touched.
- If a student believes they have found a real security issue, they must stop and report it through the course channel rather than investigating it.

## Facilitation plan

| Time | Activity | Instructor action |
|---:|---|---|
| 0–8 min | Frame the task and read the safety note | Show the required columns and one weak versus strong example |
| 8–20 min | Asset inventory | Check that assets are specific and have owners |
| 20–35 min | Threats, vulnerabilities and first scores | Ask “who or what causes harm?” and “what weakness makes it easier?” |
| 35–52 min | Complete the risk register | Check scoring consistency and assumptions |
| 52–65 min | Treatments, controls and residual risk | Reject generic controls and ownerless risks |
| 65–75 min | Recommendation and peer review | Use the checklist below |
| 75–80 min | Debrief | Ask two groups to defend one score |

## Sample solution

All names, systems and values below are fictional and are provided as a calibration example, not as the only correct answer. Students may choose different scores if their assumptions are explicit and internally consistent.

### Asset inventory

| ID | Asset | Type | Owner | Primary CIA goal | Criticality |
|---|---|---|---|---|---|
| A1 | Appointment server | Service and data | Practice manager | Availability | High |
| A2 | Patient records | Data | Clinical lead | Confidentiality | High |
| A3 | Payment terminal | Device and service | Practice manager | Integrity | High |
| A4 | Reception laptop | Device | Reception lead | Confidentiality | Medium |
| A5 | Wi-Fi router | Network device | External IT support | Availability | Medium |
| A6 | Staff email accounts | Account and service | Practice manager | Confidentiality | Medium |
| A7 | Cloud backup | Service and data | External IT support | Availability | High |
| A8 | Staff knowledge and procedures | People and process | Clinical lead | Integrity | Medium |

A strong answer explains why the appointment server and patient records are high criticality. A weak answer labels everything “high” without a reason.

### Threat and vulnerability pairs

| Pair | Threat | Vulnerability | Why they are different |
|---|---|---|---|
| 1 | Ransomware criminal group | Staff open unexpected attachments; no tested restore drill | The group is the actor; the behaviour and untested recovery are weaknesses |
| 2 | Opportunistic attacker | Remote access service exposed without MFA | The attacker exists independently; the exposure is the weakness |
| 3 | Insider or careless employee | Broad access to patient records with no review | The person is the threat; excessive access is the vulnerability |
| 4 | Thief | Unencrypted laptop and no screen lock | The thief is the threat; missing encryption and lock are weaknesses |
| 5 | Phishing sender | No reporting habit and no mail authentication checks | The sender is the threat; the missing controls are vulnerabilities |

### Risk register calibration

Scores use likelihood × impact, each from 1 to 5. The score is a communication device, not a measurement with decimal precision.

| ID | Risk statement | L | I | Score | Treatment | Control | Residual risk | Owner | Review |
|---|---|---:|---:|---:|---|---|---|---|---|
| R1 | If a criminal group phishes staff, ransomware may encrypt the appointment server and stop bookings. | 4 | 5 | 20 | Mitigate | Phishing-resistant MFA for remote access, attachment filtering, tested offline backup | Short downtime and lost same-day bookings | Practice manager | 30 days |
| R2 | If an attacker reaches remote access without MFA, patient records may be copied. | 3 | 5 | 15 | Mitigate | Remove public remote access, require VPN with MFA, log and alert on logons | Credential theft of a single account with limited role | External IT support | 30 days |
| R3 | If a reception laptop is stolen, patient data may be exposed. | 3 | 4 | 12 | Mitigate | Full-disk encryption, screen lock, cable lock, inventory check | Loss of the device and temporary disruption | Reception lead | 90 days |
| R4 | If a staff member has unnecessary record access, they may view or copy data. | 3 | 4 | 12 | Mitigate | Role-based access, quarterly review, audit logging | Misuse by a legitimately authorized user | Clinical lead | 90 days |
| R5 | If the cloud backup is unreachable during an incident, recovery may take days. | 2 | 5 | 10 | Transfer and mitigate | Contracted recovery support, tested restore, documented RTO | Provider outage beyond the agreed service level | Practice manager | 90 days |
| R6 | If the payment terminal is tampered with, transactions may be altered. | 2 | 4 | 8 | Mitigate | Tamper checks, reconciliation, staff reporting | Fraud not detected until reconciliation | Practice manager | 90 days |

### Why this scoring is defensible

- R1 is high because the threat is common, the impact stops clinical work and the current recovery is untested.
- R2 is high because records are sensitive and public remote access is a known entry path.
- R5 has lower likelihood but severe impact, so it is not dismissed.
- R6 is lower because the terminal is managed and reconciliation provides a detective control, but it is not zero.

A student may reasonably score R1 as 16 or R2 as 20. Credit the reasoning when the assumptions, scale and comparison are consistent across rows.

### Recommendation sample

> The two most important assets are the appointment server, because bookings stop when it is unavailable, and patient records, because exposure harms patients and the clinic. The two priority risks are ransomware through staff phishing and unauthorized access to patient records through remote access without MFA. In the next 30 days, remove direct public remote access, require MFA for every remote logon and test one full restore from the offline backup. We will accept the remaining risk of a short booking outage while recovery is improved and review it with the practice manager in 30 days.

A strong recommendation is five sentences, non-technical, prioritized and explicit about residual risk. A weak recommendation is a shopping list or a promise that “the clinic will be secure”.

## Rubric guidance

| Criterion | Weight | Strong (full credit) | Adequate (partial credit) | Weak (little credit) |
|---|---:|---|---|---|
| Asset identification and classification | 20 | Specific assets, named owners, justified CIA goal and criticality | Most assets specific, some owners generic | “All data” or a device list without owners |
| Risk register completeness and consistent scoring | 25 | Five or more risks, all columns complete, scores consistent | Register present but missing owners or review dates | Scores contradicted by the narrative |
| Threat, vulnerability and impact reasoning | 20 | Threat, vulnerability and impact clearly separated | One or two conflated rows | Threats described as vulnerabilities or vice versa |
| Control selection, treatment and CIA mapping | 20 | Specific controls, justified treatment, correct CIA mapping | Controls plausible but generic | “Buy a firewall” or no treatment decision |
| Residual risk, recommendation and clarity | 15 | Explicit residual risk, owner, review date and readable recommendation | Residual risk mentioned but not owned | Claims no risk remains |

Do not award full credit for a visually attractive table that contains invented facts or missing assumptions. Do not penalize a different risk score when the student explains it consistently.

## Common student errors and coaching

| Error | Coaching question |
|---|---|
| Listing “all data” as one asset | “Which store, who owns it, and what happens if it is unavailable?” |
| Calling a missing patch a threat | “Who or what could exploit that weakness?” |
| Calling a criminal group a vulnerability | “What weakness does the group need in order to succeed?” |
| Scoring every risk 25 | “Which assumption makes this almost certain and severe?” |
| Choosing “accept” for every high risk | “Who accepts it, and why is that defensible?” |
| Writing a tool list as the recommendation | “Which risk does this tool reduce, and how will you know it worked?” |
| No owner or review date | “Who is accountable, and when will we check?” |

## Peer-review checklist

Ask each pair to exchange registers and tick:

- [ ] Every asset has a named owner and a primary CIA goal.
- [ ] Every risk has a threat, a vulnerability and an impact.
- [ ] Likelihood and impact are within 1–5 and the score is the product.
- [ ] The treatment is one of mitigate, avoid, transfer or accept.
- [ ] At least one control is specific and mapped to CIA.
- [ ] Residual risk is stated, not denied.
- [ ] Every risk has an owner and a review date.
- [ ] The recommendation is understandable without technical background.

## Debrief questions

1. Which risk would you fix first if the clinic had only one day of staff time, and why?
2. Which risk score changed when you made your assumption explicit?
3. Where could a control create a new risk or a new failure mode?
4. Which residual risk would you ask the owner to accept in writing?
5. What evidence would prove that the chosen control works?

## Assessment notes

- Collect the register and the recommendation, not only the asset table.
- Sample two rows and ask the student to defend the score without reading the sheet.
- Require one limitation statement: what the student did not know about the clinic.
- Record whether the student used only fictional data and respected the authorization boundary.

## Ethical and legal note

This lab does not authorize any interaction with a real organization. The instructor should stop any attempt to map the fictional clinic to a real practice, scan a real network or use real patient information. The value of the exercise is the reasoning discipline, not access to systems.

## Version

- v1.0 — Batch 1, 2026-11-15.
- Aligned with `docs/curriculum/LAB_TEMPLATE.md` and Session 1 v2 content.
