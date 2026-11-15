# Lab 5 — Instructor Guide (Network Discovery & Firewall Rules)

**Course:** Cybersecurity Foundation (Level 1)
**Session:** 9 — Network Security: Firewalls, IDS/IPS, Segmentation & VPNs
**Major lab:** `lab-05`
**Student title:** Lab 5 — Network Discovery & Firewall Rules
**Format:** Simulator-based lab on the companion `firewall` tool
**Suggested time:** 60–70 minutes inside a 90-minute session
**Bundle status:** Instructor-only. This file is intentionally outside `src/` and must not be imported by the LMS.

## Purpose

The lab turns firewall theory into a safe, repeatable rule-repair exercise. Students inherit a mis-configured firewall rule set that exposes HTTP and Remote Desktop to the Internet, identify the wrongly allowed and wrongly denied packets, correct the rules so only intended traffic passes, experiment with rule order, and document the final rule set and logging. The emphasis is first-match logic, default deny and least privilege, not speed.

## Learning outcomes

By the end of the lab, students can:

1. Explain how firewall rules are evaluated and why order matters.
2. Apply default-deny and least-privilege principles to a rule set.
3. Identify over-exposed rules and correct them.
4. Design a final rule set and enable logging.
5. Connect firewall rules to segmentation and containment goals.

## Setup

- The companion `firewall` rule simulator (browser tool) for every student.
- A projected display for the instructor demonstration.
- Paper for the final rule table and logging plan.
- No real firewall, router or network is involved.
- Timer visible to the room.

### Suggested lab area

- All practice uses the simulated rule set and fictional addresses inside the tool.

## Authorization and safety checklist

Read this aloud before students start:

- Rule changes on production firewalls need change approval, a backup of the old configuration and a rollback plan.
- Practise only in the simulator or a lab firewall you own or are authorized to manage.
- Do not modify any real firewall, router or network without explicit authorization.
- Never test rules against third-party systems.
- If you are asked to modify a real or shared production system, stop and confirm authorization and change approval first.

## Step-by-step (instructor view)

1. **Read the packet results** (10 min): Review the six test packets; identify wrongly allowed and wrongly denied ones.
2. **Deny the exposed HTTP rule** (8 min): Switch rule 1 (HTTP) from ALLOW to DENY.
3. **Deny the exposed Remote Desktop rule** (8 min): Switch rule 4 (RDP 3389) from ALLOW to DENY.
4. **Experiment with rule order** (12 min): Move the final `deny any` rule to the top and observe every packet becoming blocked.
5. **Restore a correct order** (12 min): Place specific allow rules first and `deny any` last; confirm the policy-goal message.
6. **Write the final rule set and logging plan** (10 min): Produce the rule table and the logging to enable.

## Expected results

- All test packets behave correctly and the policy-goal message appears.
- Students can explain first-match logic and the role of the final default-deny rule.
- A final rule table ending with default deny.
- A logging plan for denied and sensitive traffic.

## Common student errors and how to redirect

- **A packet is still allowed after a change:** Check for an earlier, broader rule that matches first — first match wins.
- **A packet that should pass is denied:** Confirm the rule's source, destination and port match exactly; a mismatch falls to the default deny.
- **Forgetting the final default-deny rule:** Without it, anything not explicitly matched may be allowed.
- **Unsure whether a rule is still needed:** Apply least privilege and default deny; remove rules no service needs and review periodically.

## Sample solution (instructor reference)

Corrected rule set (specific rules first, default deny last):

| # | Source | Port | Action |
| --- | --- | --- | --- |
| 1 | Internet | 443 (HTTPS) | ALLOW |
| 2 | Admin network | 22 (SSH) | ALLOW |
| 3 | Any | any | DENY (default) |

- HTTP (80) and RDP (3389) from the Internet are denied.
- SSH (22) is allowed only from the admin network.
- Logging should capture denied packets and sensitive traffic.

## Grading rubric

| Criterion | Weight |
| --- | --- |
| Correct identification of wrongly allowed/denied packets | 25 |
| Correct corrective actions on HTTP and RDP rules | 25 |
| Correct understanding of first-match and rule order | 20 |
| Final rule set ends with default deny | 15 |
| Logging plan and safety awareness | 15 |

## Answer key (instructor only)

- Wrongly allowed: HTTP and RDP from the Internet. Wrongly denied: none intended to be allowed from the Internet beyond HTTPS.
- Moving `deny any` to the top blocks every packet, demonstrating first-match logic.
- The policy goal is: Internet→443 ALLOW, Admin→22 ALLOW, everything else DENY and logged.

## Extension and cleanup

- **Extension:** Ask students to add a rule allowing HTTPS from the Internet to a DMZ web server and a rule blocking the DMZ from initiating connections into the internal network, then evaluate the new packet results.
- **Cleanup:** No real systems were touched. Collect the rule tables and note that the simulator is a practice tool only.
