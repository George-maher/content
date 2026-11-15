# PHASE 2 — Final Curriculum Blueprint & Implementation Plan

**Project:** Cybersecurity Foundation (20 sessions, 90 minutes each, 30 hours, 7 sections, 10 major labs)
**Phase:** 2 — Final Curriculum Blueprint & Implementation Plan
**Status:** COMPLETE — **AWAITING APPROVAL** (mandatory planning checkpoint)
**Date:** 2026-11-15

> **This document is the planning checkpoint.** Per the project rules, implementation (Phase 3+ content rewriting) must NOT begin until this blueprint is reviewed and explicitly approved.

---

## 1. Final 7-section structure

Sections follow the target curriculum and match the existing `PHASES` array in `src/content/types.ts` (already correct, no change needed).

| # | Section | Sessions |
|---:|---|---|
| 1 | Cybersecurity Fundamentals | 1–3 |
| 2 | Operating Systems & System Administration | 4–6 |
| 3 | Networking & Network Security | 7–9 |
| 4 | Web & Application Security | 10–11 |
| 5 | Cryptography & Identity Management | 12–13 |
| 6 | Security Operations & Risk Management | 14–16 |
| 7 | Modern Environments & Professional Practice | 17–20 |

## 2. Final 20-session list (target)

| # | Session title | Major lab | Notes |
|---:|---|---|---|
| 1 | Introduction to Cybersecurity & Security Principles | Lab 1* | v2 done |
| 2 | Threat Landscape: Actors, Attacks & Risk | Lab 2* | v2 done |
| 3 | Malware & Social Engineering | (structured lab) | v2 done; merge |
| 4 | Operating Systems Fundamentals | (structured lab) | v2 done |
| 5 | Linux Fundamentals & Administration | **Lab 2** | **re-scope of current S5** |
| 6 | Windows Administration & Active Directory Fundamentals | **Lab 3** | **NEW session** |
| 7 | Networking Fundamentals I: Models, Devices & IP Addressing | **Lab 4** | v1 → v2 |
| 8 | Networking Fundamentals II: Protocols, Ports & Services | (tool) | v1 → v2 |
| 9 | Network Security, Scanning & Defense | **Lab 5** | v1 → v2 + expand |
| 10 | **Web Fundamentals & Web Infrastructure** | **Lab 6** | **NEW session (gap)** |
| 11 | Web Application Security Fundamentals | **Lab 7** | v1 → v2 + expand |
| 12 | Cryptography Fundamentals | **Lab 8 (part A)** | merge S9+S10 → v2 |
| 13 | Authentication, IAM & Access Control | **Lab 8 (part B)** | merge S11+S12 → v2 |
| 14 | Vulnerability Management & Endpoint Security | (tool) | v1 → v2 |
| 15 | Security Monitoring, Logging & SIEM | **Lab 9 (part A)** | v1 → v2 + Wazuh |
| 16 | Incident Response & Digital Forensics Fundamentals | **Lab 10 (part A)** | v1 → v2 |
| 17 | Cloud, Mobile & IoT Security | (tool) | v1 → v2 |
| 18 | Risk Management, Governance, Privacy & Ethics | (tool) | merge S15+S19 → v2 |
| 19 | Security Assessment & Professional Career Paths | (career quiz) | split from old S20 |
| 20 | Final Capstone: Secure a Small Business | **Lab 10 (part B)** | split from old S20 |

\* **Lab 1/Lab 2 naming conflict — see Decision D-3 below.** The brief's Lab 1 is "Threat Identification & Phishing Analysis", but the already-implemented `lab-01`/`lab-02` are CIA/risk and threat/Kill-Chain. Resolution required before Phase 3.

## 3. Decisions requiring approval (BLOCKING)

### D-1 — How to resolve the Session 5 / Session 6 split (the F-2 decision)
The current v2 Session 5 is a **cross-OS access-control chapter**. The target wants Session 5 = Linux Fundamentals and Session 6 = Windows/AD.

**Option A (recommended):** Re-purpose current Session 5 into **Linux Fundamentals & Administration** (keep the strong Linux permissions content as its core, add filesystem hierarchy, navigation, services/systemd, package mgmt, networking, logs, hardening). Add a **new Session 6: Windows Administration & Active Directory**. The cross-OS access-control *vocabulary* moves into Session 5's intro and into the IAM session (S13).
- *Pros:* Clean OS-by-OS progression; matches target exactly; Linux permissions content preserved.
- *Cons:* Windows/AD is entirely new authoring; requires a new major lab (Lab 3).

**Option B:** Keep current Session 5 as-is (access control), and add **two** new sessions (Linux Fundamentals + Windows/AD), absorbing them by merging elsewhere.
- *Cons:* Forces extra merges elsewhere to stay at 20; more disruptive to the already-approved Batch 1; deviates from target ordering.

**Recommendation: Option A.** It matches the target structure exactly, preserves existing Batch 1 Linux permissions work, and keeps a clean progression.

### D-2 — Where the new Web Fundamentals session (S10) fits
The target inserts **Session 10 Web Fundamentals & Web Infrastructure** before Web App Security. The existing layout has no slot for it.
- **Recommendation:** Insert it as Session 10 exactly as the target specifies (it fits Section 4 "Web & Application Security" with S11). Because Sessions 9→10→11 are already the networking/web block, inserting S10 requires **no renumbering of later sessions** — the target numbering already accounts for it. The existing old S13 (Web App Security) simply becomes target S11.

### D-3 — Major-lab numbering conflict (brief vs existing)
- The **brief** defines Lab 1 = "Threat Identification & Phishing Analysis", Lab 2 = "Linux Command Line & Permissions", etc.
- The **existing** code already has `lab-01` (CIA/risk, in S1) and `lab-02` (threat profile/Kill Chain, in S2), with instructor guides written for them.

**Two coherent options:**
- **Option A (recommended):** Renumber the labs to match the **brief** exactly (Lab 1 = phishing analysis → move to Session 3; Lab 2 = Linux → Session 5; … Lab 10 = IR/business assessment → Sessions 16/20). The existing `lab-01`/`lab-02` content is **relocated/merged** (CIA/risk stays as a structured lab in S1; threat/Kill-Chain stays as a structured lab in S2; phishing analysis becomes the new Lab 1 in S3). Update instructor guides.
- **Option B:** Keep existing `lab-01`/`lab-02` numbering and treat the brief's lab list as "10 required labs, names flexible". Less clean; diverges from the brief's explicit lab names.

**Recommendation: Option A** — align to the brief's lab names and numbering for traceability, and relocate the existing CIA/risk and threat/Kill-Chain material into structured (non-major) labs.

### D-4 — Cryptography & IAM merge (S9+S10→S12; S11+S12→S13)
Merging two compact sessions into one full v2 session each is a **content-volume** decision. The merged sessions must stay **introductory** (no advanced crypto/IAM).
- **Recommendation:** Approve the merge. The existing v1 sessions are compact; merging and expanding to one full 90-minute chapter each keeps the total at 20 sessions and matches the target.

## 4. Session-by-session blueprint (topic hierarchy + 90-minute plan)

Every session totals **exactly 90 minutes** and follows the 24-component structure (see `SESSION_TEMPLATE.md`). Timings below are the standard skeleton; each session adjusts within the 90-minute total.

### Session 1 — Introduction to Cybersecurity & Security Principles (v2, DONE)
**90-min plan:** Welcome/overview 5 · Core theory (CIA, assets, risk) 25 · Controls & defense in depth 20 · Demo: map a small business 10 · Practical: asset/threat/control worksheet 20 · Assessment & recap 10.
**Lab:** relocate existing CIA/risk material → structured lab (per D-3).

### Session 2 — Threat Landscape: Actors, Attacks & Risk (v2, DONE)
**90-min plan:** Review 5 · Actors & motives 20 · Attack types & Kill Chain 20 · Risk assessment & treatment 15 · Demo: attack-lifecycle map 10 · Practical: threat classification 15 · Assessment & recap 5.
**Lab:** relocate existing threat/Kill-Chain material → structured lab (per D-3).

### Session 3 — Malware & Social Engineering (v2, DONE)
**90-min plan:** Review 5 · Social engineering & psychology 15 · Phishing variants & inspection 15 · Malware families & behavior 15 · Infection/persistence/ransomware 15 · Detection & defenses 10 · Practical: incident triage 15 · Assessment & recap 5.
**Lab:** **Lab 1 — Threat Identification & Phishing Analysis** (per D-3).

### Session 4 — Operating Systems Fundamentals (v2, DONE)
**90-min plan:** Review 5 · OS responsibilities & kernel/user space 20 · Processes/threads/memory 15 · File systems & users/groups 15 · Services & Windows-vs-Linux 10 · Demo: safe inspection workflow 10 · Practical 15 · Assessment & recap 10.
**Lab:** structured read-only baseline lab.

### Session 5 — Linux Fundamentals & Administration (re-scope of current S5, per D-1)
**90-min plan:** Review 5 · Linux history/distros/architecture 10 · Filesystem hierarchy & navigation 15 · Users, groups, permissions (chmod/chown) 15 · Processes, services & systemd 10 · Package mgmt, networking, logs 15 · Demo: terminal walkthrough 10 · Practical: permission lab 10 · Assessment & recap 10.
**Lab:** **Lab 2 — Linux Command Line & Permissions**.

### Session 6 — Windows Administration & Active Directory Fundamentals (NEW, per D-1)
**90-min plan:** Review 5 · Windows architecture & NTFS 15 · Local users/groups, Task Manager, Services, Event Viewer 15 · Defender & Firewall 10 · AD DS: domain, DC, users, OUs 15 · GPO, authentication (Kerberos/NTLM) 10 · Demo: AD walkthrough 10 · Practical 15 · Assessment & recap 10.
**Lab:** **Lab 3 — Windows Administration & Active Directory**.

### Session 7 — Networking Fundamentals I (v1 → v2)
**90-min plan:** Review 5 · LAN/WAN/WLAN, topologies, OSI/TCP-IP 20 · Devices (switch/router/AP/modem) 15 · MAC, IPv4, private/public, NAT 15 · Subnet masks, CIDR, gateway, subnetting 15 · Demo: CIDR calculator 10 · Practical: subnet exercises 10 · Assessment & recap 10.
**Lab:** **Lab 4 — IP Addressing & Subnetting**.

### Session 8 — Networking Fundamentals II (v1 → v2)
**90-min plan:** Review 5 · TCP/UDP & 3-way handshake 15 · Ports & services 15 · DNS, DHCP, ARP 15 · HTTP/HTTPS, FTP/SFTP, SSH, Telnet, SMTP, POP3/IMAP, RDP 20 · Secure vs insecure, troubleshooting 10 · Practical: port/protocol triage 10 · Assessment & recap 10.
**Lab:** port/protocol tool (structured).

### Session 9 — Network Security, Scanning & Defense (v1 → v2, EXPAND)
**90-min plan:** Review 5 · Firewalls (stateful/stateless), IDS/IPS 20 · Segmentation, DMZ, VPN, secure Wi-Fi 15 · Network discovery & authorized Nmap 15 · Traffic monitoring & Zero Trust 15 · Demo: firewall rules / scanning 10 · Practical 15 · Assessment & recap 10.
**Lab:** **Lab 5 — Network Discovery & Traffic Analysis**.

### Session 10 — Web Fundamentals & Web Infrastructure (NEW gap fill, per D-2)
**90-min plan:** Review 5 · How the Internet/Web works, client-server 15 · DNS resolution, domains, URLs 15 · HTTP requests/responses, methods, status codes, headers, cookies, sessions 20 · Web servers (Apache/Nginx/IIS), hosting, document root, directory structures 15 · Static/dynamic, frontend/backend, databases, deployment 10 · Practical: HTTP inspection 10 · Assessment & recap 10.
**Lab:** **Lab 6 — Web Server, Directories & HTTP Inspection**.

### Session 11 — Web Application Security Fundamentals (v1 → v2, EXPAND)
**90-min plan:** Review 5 · Web app architecture & attack surface 15 · Authn vs authz, input validation, access control 15 · SQLi, XSS, directory traversal, file inclusion/upload 20 · Session weaknesses, misconfig, data exposure 15 · OWASP Top 10, secure coding, defenses 10 · Practical: safe SQLi/XSS concepts 10 · Assessment & recap 10.
**Lab:** **Lab 7 — Web Application Security Assessment** (vulnerable training app; concepts only).

### Session 12 — Cryptography Fundamentals (merge S9+S10 → v2, per D-4)
**90-min plan:** Review 5 · Why crypto, plaintext/ciphertext, classical ciphers 15 · Symmetric (AES), asymmetric (RSA, ECC) 20 · Public/private keys, key exchange, hybrid 15 · Hashing, password hashing, signatures 15 · Certificates, PKI, CA, TLS handshake 15 · Practical: cipher/hash tools 10 · Assessment & recap 10.
**Lab:** **Lab 8 (part A) — Cryptography exercises**.

### Session 13 — Authentication, IAM & Access Control (merge S11+S12 → v2, per D-4)
**90-min plan:** Review 5 · AAA, authentication vs authorization, passwords 15 · MFA, passkeys, password managers 15 · Access control: DAC/MAC/RBAC/ABAC, least privilege 20 · SSO, PAM, identity lifecycle (joiner/mover/leaver) 15 · AD-IAM relationship 10 · Practical: RBAC matrix 10 · Assessment & recap 10.
**Lab:** **Lab 8 (part B) — Access control exercises**.

### Session 14 — Vulnerability Management & Endpoint Security (v1 → v2)
**90-min plan:** Review 5 · Lifecycle, asset inventory, vuln vs threat vs risk 20 · Assessment & scanning concepts, CVE/CVSS 15 · Prioritization, patch management, hardening, baselines 15 · AV, endpoint protection, EDR intro 15 · Remediation & verification 10 · Practical: finding prioritization 10 · Assessment & recap 10.
**Lab:** finding-prioritization tool (structured).

### Session 15 — Security Monitoring, Logging & SIEM (v1 → v2, EXPAND)
**90-min plan:** Review 5 · Security monitoring, logs & events 15 · Windows & Linux logs, auth logs 15 · Log collection & correlation 10 · SIEM architecture, detection rules, alerts 15 · SOC workflow, Wazuh intro 15 · Brute-force scenario & triage 15 · Assessment & recap 5.
**Lab:** **Lab 9 (part A) — SIEM monitoring**.

### Session 16 — Incident Response & Digital Forensics Fundamentals (v1 → v2)
**90-min plan:** Review 5 · Incidents, classification, severity 10 · NIST IR lifecycle (prep→lessons) 20 · Containment, eradication, recovery 15 · Evidence collection/preservation, chain of custody 15 · Forensics intro, documentation, reporting 15 · Practical: IR phase ordering 10 · Assessment & recap 10.
**Lab:** **Lab 10 (part A) — Incident response**.

### Session 17 — Cloud, Mobile & IoT Security (v1 → v2)
**90-min plan:** Review 5 · Cloud models (IaaS/PaaS/SaaS), shared responsibility 20 · Cloud IAM, misconfig, storage/network security 15 · Mobile security, BYOD, MDM 15 · IoT architecture, risks, controls 15 · Demo: responsibility matching 10 · Practical 15 · Assessment & recap 10.
**Lab:** shared-responsibility tool (structured).

### Session 18 — Risk Management, Governance, Privacy & Ethics (merge S15+S19 → v2)
**90-min plan:** Review 5 · Risk identification/analysis/evaluation/treatment 20 · Security policies, standards, governance 15 · NIST CSF, ISO 27001, CIS Controls 15 · Privacy, data protection, GDPR principles 10 · Compliance vs security, legal/ethical, continuity 15 · Practical: risk register 10 · Assessment & recap 10.
**Lab:** risk-register tool (structured).

### Session 19 — Security Assessment & Professional Career Paths (split from old S20)
**90-min plan:** Review 5 · Assessment methodology, assets, attack-surface mapping 20 · Identifying weaknesses, risk prioritization 15 · Findings, remediation, professional reports 15 · Career paths: SOC, pentest, AppSec, cloud, DevSecOps, DFIR, GRC, TI 15 · Skills/tools/roadmaps 10 · Career quiz 10 · Assessment & recap 10.
**Lab:** career-interest quiz (existing component).

### Session 20 — Final Capstone: Secure a Small Business (split from old S20)
**90-min plan:** Brief & assets 10 · Network architecture & OS review 15 · Linux permissions/services review 10 · Windows & AD review 15 · Network security & web app assessment 15 · Risk evaluation & controls 15 · 90-day roadmap & report 10 · Present findings 10 · Recap 10.
**Lab:** **Lab 10 (part B) — Business security assessment**.

## 5. Prerequisite relationships & dependency graph

```
S1 (CIA, fundamentals)
 └─→ S2 (threats) ─→ S3 (malware/SE)
S1 ─→ S4 (OS fundamentals) ─→ S5 (Linux) ─→ S6 (Windows/AD)
S4 ─→ S7 (Networking I) ─→ S8 (Networking II) ─→ S9 (Network security)
S8 ─→ S10 (Web infrastructure) ─→ S11 (Web app security)
S1 ─→ S12 (Cryptography) ─→ S13 (IAM/access control)   [S6 AD feeds S13]
S5/S6 ─→ S14 (Vulnerability mgmt / endpoint)
S7/S8 ─→ S15 (Monitoring/SIEM)
S14/S15 ─→ S16 (Incident response)
S4/S5/S7/S12 ─→ S17 (Cloud/Mobile/IoT)
S2/S14 ─→ S18 (Risk/governance/ethics)
S1..S18 ─→ S19 (Assessment & careers) ─→ S20 (Capstone)
```

**Key ordering constraints:**
- S7/S8 before S9 (networking before network defense).
- S8/S10 before S11 (protocols & web infrastructure before web app security).
- S12 before S13 (crypto before identity/access).
- S6 before S13 (AD before IAM relationship).
- S14/S15 before S16 (monitoring before response).
- Everything before S20 capstone.

## 6. Major lab & assessment mapping

| Lab | Session(s) | Tool (existing/new) |
|---|---|---|
| Lab 1 — Threat ID & Phishing Analysis | 3 | `phish` + `match` (existing) |
| Lab 2 — Linux CLI & Permissions | 5 | `perm` (existing) + new Linux terminal walkthrough guide |
| Lab 3 — Windows Admin & AD | 6 | NEW — AD/OU builder guide (tool optional) |
| Lab 4 — IP Addressing & Subnetting | 7 | `cidr` (existing) |
| Lab 5 — Network Discovery & Traffic Analysis | 9 | NEW — Nmap/Wireshark-observation guide (tool optional) |
| Lab 6 — Web Server, Directories & HTTP | 10 | NEW — document-root/HTTP inspection guide (tool optional) |
| Lab 7 — Web App Security Assessment | 11 | `sqli` (existing) + concept lab |
| Lab 8 — Crypto & Access Control | 12 + 13 | `cipher`/`hash`/`rbac` (existing) |
| Lab 9 — Vuln Assessment & SIEM | 14 + 15 | `risk`/`logs` (existing) |
| Lab 10 — IR & Business Assessment | 16 + 20 | `order`/`risk` (existing) |

**New interactive tools needed (minimum):** AD/OU builder (S6), web document-root inspector (S10), network-scan/traffic observation simulator (S9). Reuse the other 12 existing tools. All tools stay local/simulated.

## 7. Existing content migration plan

| Migration | From | To | Mechanism |
|---|---|---|---|
| Merge malware + social engineering | old S3, old S4 | S3 | ✅ Done in v2. |
| Split OS fundamentals | old S5 | S4 (+ S5, S6) | ✅ S4 done; S5 re-scope (D-1); S6 new. |
| Career module relocation | old S1 | S1 (overview) + S19 | ✅ Done. |
| Networking I/II | old S6, old S7 | S7, S8 | Convert v1 → v2. |
| Network security | old S8 | S9 | Convert v1 → v2 + expand. |
| Crypto merge | old S9, old S10 | S12 | Merge → v2. |
| Auth + IAM merge | old S11, old S12 | S13 | Merge → v2. |
| Web app security | old S13 | S11 | Convert v1 → v2 + expand. |
| Endpoint/vuln | old S14 | S14 | Convert v1 → v2. |
| Risk + privacy/ethics merge | old S15, old S19 | S18 | Merge → v2. |
| Monitoring/SIEM | old S16 | S15 | Convert v1 → v2 + Wazuh. |
| Incident response | old S17 | S16 | Convert v1 → v2. |
| Cloud/Mobile/IoT | old S18 | S17 | Convert v1 → v2. |
| Capstone split | old S20 | S19 + S20 | Split → v2. |
| **NEW Web Infrastructure** | — | S10 | New authoring. |
| **NEW Windows/AD** | — | S6 | New authoring (per D-1). |

**Session-id stability:** ids 1–20 remain stable (no renumbering). Old v1 modules are superseded module-by-module and their dead exports removed as each batch lands.

## 8. Estimated scope of changes

| Scope item | Volume |
|---|---|
| Sessions to convert v1 → v2 (rewrite/expand) | 15 (S6–S20) |
| Sessions to merge then write v2 | 2 merges (S12 from S9+S10; S13 from S11+S12; S18 from S15+S19) |
| New sessions to author | 2 (S6 Windows/AD, S10 Web Infrastructure) |
| Re-scope sessions | 1 (S5 Linux) |
| New major labs to author | 8 (Labs 2–10) |
| New instructor guides to author | 8 |
| New interactive tools to build | ~3 (AD builder, web inspector, scan/traffic simulator) |
| Orphaned files to clean up | 3 dead exports (`s01_02`, `s03_04`, dead `s05`) |

## 9. Technical risks (reaffirmed from Phase 0)

- **R-1 structural mismatch** → mitigated by this blueprint's explicit mapping and id stability.
- **R-2 S5 re-scope / S6 new** → needs approval (D-1).
- **R-3 authoring volume (15+ sessions bilingual)** → batched execution with per-batch validation.
- **R-4 new tools** → build minimum; reuse existing 15.
- **R-6 bundle growth** → measure builds after each batch.
- **R-7 bilingual drift** → Latin-token sweep + render tests.

## 10. Execution sequence (Phases 3–7, after approval)

1. **Phase 3 (Foundation):** content schema is already done; confirm templates/guidelines; build the 3 new tools; finalize lab schema.
2. **Phase 4 Batch 1:** Sessions 1–5 + Labs 1–2 — **already done** (verify, fix the S5 re-scope per D-1).
3. **Phase 4 Batch 2:** Sessions 6–10 (Windows/AD, Networking I, Networking II, Network Security, Web Infrastructure) + Labs 3–6.
4. **Phase 4 Batch 3:** Sessions 11–15 (Web App Sec, Crypto, IAM, Vuln Mgmt, SIEM) + Labs 7–9(A).
5. **Phase 4 Batch 4:** Sessions 16–20 (IR, Cloud/IoT, Risk/Ethics, Careers, Capstone) + Labs 10.
6. **Phase 5:** labs & assessment integration; prerequisite/link checks.
7. **Phase 6:** full educational + technical audit; run `npm run verify`.
8. **Phase 7:** final report + delivery checklist.

## 11. Mandatory Planning Checkpoint — STOP

The following are presented for review and explicit approval:

1. ✅ **Complete audit** — `PHASE_1_CURRICULUM_AUDIT.md` (20-session audit, topic mapping, lab mapping, boundary check).
2. ✅ **Proposed final curriculum** — this document (7 sections, 20 sessions, 90-minute plans, dependency graph).
3. ✅ **Implementation sequence** — Phases 3–7 batched plan above.
4. ✅ **Technical risks** — R-1 through R-8 with mitigations.
5. ✅ **Content migration strategy** — old→new mapping, id stability, orphan cleanup.
6. ✅ **Estimated scope** — 15 conversions, 2 merges, 2 new sessions, 8 labs, ~3 tools.

**Decisions awaiting explicit approval:**
- **D-1** Session 5 re-scope + new Session 6 (Windows/AD).
- **D-2** Insert new Session 10 (Web Infrastructure).
- **D-3** Renumber major labs to match the brief (relocate existing `lab-01`/`lab-02`).
- **D-4** Merge Crypto (S9+S10→S12) and IAM (S11+S12→S13), Risk+Privacy (S15+S19→S18).

**No content rewriting or destructive changes will begin until these are approved.**
