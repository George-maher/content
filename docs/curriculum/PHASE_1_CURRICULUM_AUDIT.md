# PHASE 1 — Curriculum Audit & Gap Analysis

**Project:** Cybersecurity Foundation (20 sessions, 90 minutes each, 30 hours, 7 sections, 10 major labs)
**Phase:** 1 — Curriculum Audit & Gap Analysis
**Status:** COMPLETED
**Date:** 2026-11-15
**Scope:** Read-only. No content modified.

---

## 1. Method

1. Extracted the **live** 20-session content (via `src/content/index.ts`) and the **orphaned** v1 modules.
2. For each live session, captured: title, schema version, minutes, section headings, objectives, term count, quiz count, references, and lab tool.
3. Compared every existing session against the **target** curriculum in the project brief.
4. For each existing topic, assigned an action from the allowed set: **KEEP, IMPROVE, EXPAND, MERGE, MOVE, REWRITE, ADD, REMOVE**.
5. Checked overlap with Level 2 (ethical hacking / pentest) and Level 3 (SOC / blue team) to keep Foundation introductory.

## 2. Headline findings

- **5 of 20 sessions** are already full v2 chapters (Sessions 1–5, Batch 1).
- **15 of 20 sessions** are still compact v1 (4 sections, ~6–8 terms, 6 quiz) and must be converted to full v2.
- **The current 20-session layout is structurally different from the target 20-session layout.** It is not a simple retitle. The differences are:
  - **One session is entirely new:** target Session 10 *Web Fundamentals & Web Infrastructure* has no dedicated counterpart in the existing layout (web is only touched incidentally in Networking II and Web App Security).
  - **Two existing sessions merge into one:** old S3 (Malware) + old S4 (Social Engineering) → target S3 (already done in v2).
  - **One existing session splits into two target sessions:** old S5 (OS, combined Windows+Linux) → target S4 (OS Fundamentals) + S5 (Linux) + S6 (Windows/AD). Batch 1 implemented S4 and a cross-OS permissions chapter as S5; the full Linux-administration and Windows/AD depth still needs resolution (see finding F-2).
  - **Two pairs merge:** old S9+S10 (Crypto split in two) → target S12 (one Cryptography session); old S11+S12 (Auth + Access Control) → target S13 (one IAM session); old S15 (Risk) + old S19 (Privacy/Ethics) → target S18.
  - **One existing session splits:** old S20 (Capstone + Career) → target S19 (Assessment & Careers) + S20 (Capstone).
- **Major-lab mapping differs from the brief's "Lab 1–10".** The brief's Lab 1 is "Threat Identification & Phishing Analysis", but the existing (and already-implemented) Session 1 major lab is the **CIA Triad & risk register**. The brief's lab list and the existing lab numbering do not align. **This must be reconciled in the Phase 2 blueprint** — see decision point D-3.

## 3. Per-session audit (existing → target)

### Session 1 — Introduction to Cybersecurity & CIA Triad (v2, COMPLETE)
- **Existing topics:** cybersecurity, CIA Triad, assets/threats/vulns/risk, controls, defense in depth, security architecture, domains & careers.
- **Quality:** Full 24-component chapter. Matches target S1 well.
- **Gaps vs target S1:** target lists "Information Security vs Cybersecurity", "Cybersecurity Domains and Specializations" with 8 named career paths. Existing covers careers briefly and moved the large career module to S19 — **acceptable**, but the 8 named specializations should be explicitly enumerated here at overview level.
- **Action:** KEEP (minor IMPROVE on career-path enumeration).

### Session 2 — Threat Landscape (v2, COMPLETE)
- **Existing topics:** threat actors & motives, Cyber Kill Chain (7-stage), attack surface/vectors, attack families, vulnerability/exposure, MITRE ATT&CK, defending across the chain.
- **Quality:** Full chapter. Matches target S2.
- **Gaps:** target explicitly lists threat-actor categories (cybercriminals, nation-state, hacktivists, insider, script kiddies, organized crime), DoS/DDoS, MitM, spoofing, password attacks, session hijacking, likelihood/impact, risk assessment & treatment. Most are covered; the named attack-type list should be made explicit.
- **Action:** KEEP (IMPROVE — ensure every named attack type and actor category appears explicitly).

### Session 3 — Malware and Social Engineering (v2, COMPLETE — merge already done)
- **Existing topics:** merges old malware + social engineering. Psychology of SE, phishing variants, infection paths, persistence, ransomware anatomy, detection/response, organizational defenses.
- **Quality:** Full chapter. Good merge.
- **Gaps:** target lists malware families (virus, worm, trojan, ransomware, spyware, rootkit, keylogger, botnet) and SE techniques (phishing, spear, whaling, smishing, vishing, pretexting, baiting, tailgating, email/URL inspection). Verify all named families/techniques appear explicitly.
- **Action:** KEEP (IMPROVE — explicit family/technique enumeration). **This session is a model for the merge pattern.**

### Session 4 — Operating System Foundations (v2, COMPLETE)
- **Existing topics:** OS role for security, kernel/user mode, system calls, processes/threads, services/daemons/drivers, identity context, boot chain, logs/time, safe inspection workflow.
- **Quality:** Full chapter. Matches target S4.
- **Gaps:** target S4 also wants memory management, file systems, file/directory, users/groups, permissions, Windows vs Linux architecture. Partially covered (permissions deferred to S5, Windows/Linux architecture to S5/S6). Acceptable as OS-fundamentals, with OS specifics handled in S5/S6.
- **Action:** KEEP.

### Session 5 — Files, Accounts and Permissions (v2, COMPLETE — but re-scope needed)
- **Existing topics:** access-control vocabulary, Linux ownership/mode bits/umask, special bits/ACLs, Windows NTFS permissions/inheritance, accounts/groups, privileged access, shared-data design, auditing, common mistakes.
- **Quality:** Full chapter, technically strong.
- **Gaps vs target:** **The target Session 5 is "Linux Fundamentals & Administration"** (filesystem hierarchy, navigation, users/groups, chmod/chown, processes, services/systemd, package management, networking, logs, hardening) **and target Session 6 is "Windows Administration & Active Directory"** (NTFS, Task Manager, Event Viewer, Defender/Firewall, AD DS, domain/DC, OUs, GPO, Kerberos/NTLM, hardening).
- **Finding F-2 (critical decision):** The current v2 S5 is a **cross-OS access-control chapter**, not a Linux-administration chapter. The Linux filesystem-hierarchy/navigation/services depth and the entire Windows/AD content are **not yet delivered** in v2. Batch 1 stopped at permissions.
- **Action:** **RE-SCOPE / SPLIT.** Decide whether to (a) keep S5 as access-control and add a dedicated Linux session + Windows/AD session by re-using freed slots, or (b) re-purpose S5 to full Linux Fundamentals and add S6 Windows/AD. This is the single biggest structural decision in the blueprint.

### Session 6 — Networking Fundamentals I (v1, needs conversion)
- **Existing topics:** OSI/TCP-IP layers, network devices, MAC/IPv4/IPv6/NAT, subnets/CIDR.
- **Quality:** Compact. Matches target S7 well.
- **Gaps:** target S7 wants LAN/WAN/WLAN, topologies, switches/routers/APs/modems, private vs public, subnet masks, CIDR, default gateway, NAT, basic subnetting. Mostly present.
- **Action:** REWRITE to v2 (IMPROVE/EXPAND). This is target **S7**.

### Session 7 — Networking Fundamentals II (v1, needs conversion)
- **Existing topics:** TCP/UDP/ports, DHCP/DNS, HTTP/HTTPS/TLS, email protocols.
- **Quality:** Compact. Matches target S8.
- **Gaps:** target S8 wants TCP 3-way handshake, ports/services, DNS, DHCP, ARP, HTTP/HTTPS, FTP/SFTP, SSH, Telnet, SMTP, POP3/IMAP, RDP, common ports, secure vs insecure, troubleshooting. **ARP and RDP are missing**; secure/insecure protocol comparison and troubleshooting should be made explicit.
- **Action:** REWRITE to v2. This is target **S8**.

### Session 8 — Network Security (v1, needs conversion)
- **Existing topics:** firewalls, DMZ/segmentation, IDS/IPS, VPN/Wi-Fi.
- **Quality:** Compact. Matches target S9.
- **Gaps:** target S9 adds **network discovery, authorized Nmap fundamentals, basic traffic monitoring, and Zero Trust**. Nmap/monitoring/Zero-Trust are new. Zero Trust is mentioned as a term but needs a dedicated explanation.
- **Action:** REWRITE to v2 (EXPAND). This is target **S9**. Needs a major lab (target Lab 5: Network Discovery & Traffic Analysis).

### Session 9 — Cryptography Basics (v1, needs conversion)
- **Existing topics:** core ideas, symmetric, asymmetric, hybrid + key management.
- **Quality:** Compact.
- **Gaps:** target S12 (single Cryptography session) wants classical ciphers, AES, RSA, ECC intro, key exchange, hashing, password hashing, signatures, certificates, PKI, CA, TLS handshake. **Existing splits crypto into S9+S10; target merges to one session S12.**
- **Action:** **MERGE with Session 10 → target S12**, then REWRITE to v2 (heavy EXPAND to fit the merged scope at introductory depth).

### Session 10 — Hashing, Signatures, PKI, TLS (v1, needs conversion)
- **Existing topics:** hashes, password storage, signatures, certificates/PKI/TLS handshake.
- **Quality:** Compact, technically strong.
- **Action:** **MERGE into target S12** with Session 9.

### Session 11 — Authentication: Passwords, MFA, Passkeys (v1, needs conversion)
- **Existing topics:** identity/auth/authz, password attacks, strong passwords, MFA/passkeys.
- **Quality:** Compact. Matches first half of target S13.
- **Action:** **MERGE with Session 12 → target S13**, then REWRITE to v2.

### Session 12 — Access Control and IAM (v1, needs conversion)
- **Existing topics:** access control models, principles, identity lifecycle, SSO/PAM.
- **Quality:** Compact. Matches second half of target S13.
- **Gaps:** target S13 explicitly wants AAA, DAC/MAC/RBAC/ABAC, least privilege, separation of duties, SSO, PAM, identity lifecycle (joiner/mover/leaver), AD-IAM relationship. Mostly present.
- **Action:** **MERGE into target S13** with Session 11.

### Session 13 — Web Application Security Basics (v1, needs conversion)
- **Existing topics:** untrusted input, injection/SQLi, XSS/CSRF/broken access control, secure building/operating.
- **Quality:** Compact. Matches target S11.
- **Gaps:** target S11 wants authn vs authz, input validation, broken access control, SQLi, XSS, directory traversal, file inclusion, file upload, session mgmt, misconfiguration, sensitive data exposure, OWASP Top 10, secure coding, defenses. **Directory traversal, file inclusion, file upload, session weaknesses are missing or thin.**
- **Important:** target **S10 Web Fundamentals & Web Infrastructure** is a **separate, new session** that must precede this. Existing has no dedicated web-infrastructure session.
- **Action:** REWRITE to v2 (EXPAND). This is target **S11**.

### Session 14 — Endpoint, Patching, Vuln Management (v1, needs conversion)
- **Existing topics:** vuln mgmt, CVE/CVSS, patching cycle, endpoint protection.
- **Quality:** Compact. Matches target S14.
- **Gaps:** target S14 wants asset inventory, assessment, scanning concepts, CVE/CVSS, prioritization, patch management, hardening, baselines, AV, EDR intro, remediation/verification. Mostly present; **EDR intro and configuration baselines should be strengthened**.
- **Action:** REWRITE to v2. This is target **S14**.

### Session 15 — Risk Management, Governance, Frameworks (v1, needs conversion)
- **Existing topics:** risk process, measuring risk, treatment, governance/frameworks.
- **Quality:** Compact. Matches first half of target S18.
- **Gaps:** target S18 wants NIST CSF, ISO 27001, CIS Controls, privacy, GDPR principles, compliance vs security, legal/ethical, BIA/continuity. **Merges with old S19 (privacy/ethics).**
- **Action:** **MERGE with Session 19 → target S18**, then REWRITE to v2.

### Session 16 — Security Monitoring, Logging, SIEM (v1, needs conversion)
- **Existing topics:** monitoring, what to log, SIEM/SOC, reading a log / brute-force.
- **Quality:** Compact. Matches target S15.
- **Gaps:** target S15 wants Windows Event Logs, Linux logs, auth logs, log collection/correlation, SIEM architecture, detection rules, alerts, SOC workflow, **Wazuh intro**, brute-force scenario, alert triage. **Wazuh intro and detection-rule concepts should be added at introductory level.**
- **Action:** REWRITE to v2 (EXPAND). This is target **S15**. Needs a major lab (target Lab 9: Vulnerability Assessment & SIEM Monitoring).

### Session 17 — Incident Response & Forensics (v1, needs conversion)
- **Existing topics:** events/incidents/preparation, NIST IR lifecycle, containment, forensics/evidence.
- **Quality:** Compact. Matches target S16.
- **Gaps:** target S16 wants incident classification/severity, IR lifecycle (prep, detect/analyze, contain, eradicate, recover, lessons learned), evidence collection/preservation, chain of custody, documentation, reporting. Mostly present.
- **Action:** REWRITE to v2. This is target **S16**. Needs a major lab (target Lab 10: Incident Response & Business Security Assessment).

### Session 18 — Cloud, Mobile, IoT Security (v1, needs conversion)
- **Existing topics:** cloud models/shared responsibility, cloud failures, mobile/BYOD, IoT.
- **Quality:** Compact. Matches target S17.
- **Gaps:** target S17 wants IaaS/PaaS/SaaS, shared responsibility, cloud IAM, misconfigurations, storage/network security, mobile, BYOD/MDM, IoT architecture/risks/controls. Mostly present.
- **Action:** REWRITE to v2. This is target **S17**.

### Session 19 — Privacy, Law, Compliance, Ethics (v1, needs conversion)
- **Existing topics:** privacy vs security, data-protection principles, compliance/standards, misuse law/ethics.
- **Quality:** Compact. Matches second half of target S18.
- **Action:** **MERGE into target S18** with Session 15.

### Session 20 — Capstone & Career Paths (v1, needs conversion)
- **Existing topics:** capstone brief (Nova Accounting), mapping course to controls, 30-60-90 roadmap, career paths.
- **Quality:** Compact. **Merges two target sessions.**
- **Gaps:** target **S19 = Security Assessment & Professional Career Paths** (methodology, attack-surface mapping, findings, professional reports, career paths, skills/tools, roadmaps) and target **S20 = Final Capstone: Secure a Small Business** (14 required activities). The existing session mixes assessment method, careers, and capstone.
- **Action:** **SPLIT into target S19 + S20**, then REWRITE both to v2.

## 4. Topic mapping table (existing → target)

| Existing topic | Current session | Target session | Action | Reason |
|---|---|---|---|---|
| Intro to Cybersecurity, CIA Triad, controls, defense in depth | 1 | 1 | KEEP | Full v2 already; matches target. |
| Threat actors, motives, Kill Chain, attack surface | 2 | 2 | KEEP | Full v2 already; matches target. |
| Malware families, infection, persistence, ransomware | 3 | 3 | KEEP (IMPROVE) | Merged already; ensure all 8 families explicit. |
| Social engineering, phishing variants, inspection | 4 | 3 | MERGE | Merged into target S3 in v2. |
| OS fundamentals (kernel, processes, services) | 5 | 4 | KEEP | Full v2 already; matches target S4. |
| Linux ownership/modes, NTFS, accounts, permissions | 5 | 5 / 6 | SPLIT / RE-SCOPE | **F-2:** access-control chapter vs target Linux (S5) + Windows/AD (S6). |
| Networking models, devices, IP addressing, CIDR | 6 | 7 | REWRITE | Compact → full v2. |
| TCP/UDP, ports, DNS, HTTP | 7 | 8 | REWRITE | Compact → full v2; add ARP/RDP. |
| Firewalls, IDS/IPS, DMZ, VPN | 8 | 9 | REWRITE (EXPAND) | Add Nmap/discovery/Zero Trust. |
| Symmetric/asymmetric encryption, key management | 9 | 12 | MERGE | Merges with S10 into target S12. |
| Hashing, signatures, PKI, TLS | 10 | 12 | MERGE | Merges with S9 into target S12. |
| Authentication, passwords, MFA, passkeys | 11 | 13 | MERGE | Merges with S12 into target S13. |
| Access control, IAM, SSO, PAM | 12 | 13 | MERGE | Merges with S11 into target S13. |
| Web app security (SQLi, XSS, CSRF, OWASP) | 13 | 11 | REWRITE (EXPAND) | Add traversal/upload/session; target S11. |
| **(no dedicated web-infrastructure session)** | — | 10 | **ADD** | **New target session**: web servers, document root, HTTP, hosting. |
| Endpoint, patching, vuln management, CVE/CVSS | 14 | 14 | REWRITE | Compact → full v2. |
| Risk management, governance, frameworks | 15 | 18 | MERGE | Merges with S19 into target S18. |
| Monitoring, logging, SIEM, brute-force | 16 | 15 | REWRITE (EXPAND) | Add Wazuh intro, detection rules. |
| Incident response, forensics, evidence | 17 | 16 | REWRITE | Compact → full v2. |
| Cloud, mobile, IoT | 18 | 17 | REWRITE | Compact → full v2. |
| Privacy, law, compliance, ethics | 19 | 18 | MERGE | Merges with S15 into target S18. |
| Capstone brief + career paths (combined) | 20 | 19 + 20 | SPLIT | Split into assessment/careers (S19) + capstone (S20). |

## 5. Major lab mapping (existing → target labs)

The brief defines 10 specific major labs. The existing implementation has only `lab-01` (Session 1) and `lab-02` (Session 2), and their content differs from the brief's lab names. Reconciliation is required in Phase 2.

| Target lab (from brief) | Best-fit existing/target session | Action |
|---|---|---|
| Lab 1 — Threat Identification & Phishing Analysis | Session 3 (Malware & SE) | **Reconcile** — existing `lab-01` is CIA/risk; brief's Lab 1 is phishing analysis. See D-3. |
| Lab 2 — Linux Command Line & Permissions | Session 5 (Linux) | ADD — no v2 major lab yet. |
| Lab 3 — Windows Administration & Active Directory | Session 6 (Windows/AD) | ADD — new session, new lab. |
| Lab 4 — IP Addressing & Subnetting | Session 7 (Networking I) | ADD — existing has a CIDR tool; formalize as major lab. |
| Lab 5 — Network Discovery & Traffic Analysis | Session 9 (Network Security) | ADD — needs Nmap/Wireshark-observation lab. |
| Lab 6 — Web Server, Directories & HTTP Inspection | Session 10 (Web Infrastructure) | ADD — new session, new lab. |
| Lab 7 — Web Application Security Assessment | Session 11 (Web App Security) | ADD — existing `sqli` tool; expand. |
| Lab 8 — Cryptography & Access Control Exercises | Session 12 + 13 | ADD — existing `cipher`/`hash`/`rbac` tools. |
| Lab 9 — Vulnerability Assessment & SIEM Monitoring | Session 14 + 15 | ADD — existing `logs` tool; expand. |
| Lab 10 — Incident Response & Business Security Assessment | Session 16 + 20 | ADD — existing `order` tool; expand. |

## 6. Overlap with Level 2 / Level 3 (boundary check)

| Topic | Foundation (Level 1) treatment | Keep in Level 2/3 |
|---|---|---|
| Nmap | Introductory, authorized, local lab only | Advanced Nmap, service enumeration (L2) |
| Web testing | Concepts only; SQLi display simulation | Advanced Burp, full web pentest (L2) |
| Python | **Banned** (test-enforced) | Python for testing/SOC (L2/L3) |
| SIEM / Wazuh | Intro concepts + small guided exercise | Advanced SIEM, detection engineering, threat hunting (L3) |
| EDR | Intro concept | EDR operations (L3) |
| Forensics | Intro, evidence/chain of custody | Full digital forensics (L3) |
| Incident response | First steps, lifecycle, containment | Advanced IR, investigation (L3) |
| Bash scripting | Basic shell usage only | Bash scripting (L2) |

**No Level 1 topic currently crosses into advanced Level 2/3 territory.** The v2 chapters correctly keep the level introductory.

## 7. Missing educational sections (summary)

1. **Dedicated Web Fundamentals & Web Infrastructure session (target S10)** — the single biggest structural gap.
2. **Full Linux administration depth (target S5)** — filesystem hierarchy, navigation, users, services/systemd, package mgmt, networking, logs, hardening.
3. **Windows Administration & Active Directory session (target S6)** — entirely absent as a dedicated v2 chapter (AD DS, OUs, GPO, Kerberos/NTLM).
4. **Explicit attack-type and actor-category enumeration** in S2 and S3.
5. **Wazuh introduction + detection-rule concepts** in S15.
6. **Directory traversal / file upload / session weaknesses** in S11.
7. **ARP and RDP** in S8; **Zero Trust** deeper treatment in S9.
8. **8 major labs** not yet implemented as full v2 major labs.

## 8. Deliverable status

✅ Complete Curriculum Audit and Gap Analysis Report (this document).
✅ Topic mapping table with actions.
✅ Lab mapping table.
✅ Level 1/2/3 boundary check.
✅ Missing-sections list.

**Next phase:** Phase 2 — Final Curriculum Blueprint & Implementation Plan.
