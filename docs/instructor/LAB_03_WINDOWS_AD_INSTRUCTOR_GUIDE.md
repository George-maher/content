# Lab 3 — Instructor Guide (Windows Administration & Active Directory)

**Course:** Cybersecurity Foundation (Level 1)
**Session:** 6 — Windows Administration & Active Directory Fundamentals
**Major lab:** `lab-03`
**Student title:** Lab 3 — Windows Administration & Active Directory
**Format:** Hands-on lab on an isolated Windows workstation and, where available, a Windows Server lab domain
**Suggested time:** 60–70 minutes inside a 90-minute session
**Bundle status:** Instructor-only. This file is intentionally outside `src/` and must not be imported by the LMS.

## Purpose

The lab turns Windows and Active Directory theory into a safe inspection and planning baseline. Students must inspect a running machine, review the security log, examine local accounts and permissions, map an Active Directory structure, and plan a least-privilege setup for a new team. The emphasis is correct use of the core tools and sound least-privilege reasoning, not advanced administration.

## Learning outcomes

By the end of the lab, students can:

1. Inspect a Windows machine with Task Manager, Services and Event Viewer.
2. Identify local users, groups and account types.
3. Interpret file permissions and apply least privilege.
4. Describe Active Directory domains, Organizational Units and Group Policy.
5. Plan a least-privilege identity setup for a new team.

## Setup

- One isolated Windows 10/11 workstation per student or pair.
- Where possible, a Windows Server lab domain with Active Directory for the structure and planning steps.
- Administrative rights for the account and OU inspection steps.
- The companion `rbac` least-privilege access matrix tool for formative practice.
- Timer visible to the room.
- No connection to a real production domain or network.

## Authorization and safety checklist

Read this aloud before students start:

- The workstation and any server are isolated lab systems, not production.
- Do not perform any action against a real production domain, a public host, or a machine you do not control.
- Create test users and Organizational Units only in a lab domain.
- Never change or disable security controls, do not modify production passwords, and do not disable services or the firewall outside the lab.
- If a step produces unexpected output or you are unsure of the effect, stop and record what you see.

## Step-by-step (instructor view)

1. **Inspect running processes** (5 min): Open Task Manager (Ctrl+Shift+Esc), switch to Processes, record three processes with owning users.
2. **Inspect services** (5 min): Open `services.msc`, note the status and start type of two services.
3. **Review the security log** (10 min): Open `eventvwr.msc` > Windows Logs > Security, filter for authentication events, locate a 4624 (successful) and a 4625 (failed) logon.
4. **Inspect local users and groups** (10 min): Open `lusrmgr.msc`, identify standard vs administrative accounts, note the built-in Administrator status.
5. **Inspect file permissions** (5 min): Right-click a file > Properties > Security, read the access-control list.
6. **Map an Active Directory structure** (10 min): Open `dsa.msc`, examine the domain, containers and Organizational Units.
7. **Plan a least-privilege setup** (15 min): On paper, design the OU, group membership and Group Policy for a new team, and justify each choice.

## Expected results

- A recorded process inspection with owning users.
- The status and start type of at least two services.
- At least one successful (4624) and one failed (4625) logon event located and interpreted.
- A review of local users, groups and account types, including the built-in Administrator status.
- A read of a file's access-control list.
- A mapped Active Directory structure with Organizational Units.
- A documented least-privilege plan for a new team with justification.

## Common student errors and how to redirect

- **Unexpected high-resource process:** redirect to note the name, owner and location, end it if non-essential, and investigate the source rather than deleting unrecognized files.
- **Empty or missing Security log:** redirect to confirm logging is enabled and that they are viewing Windows Logs > Security with elevated rights.
- **Cannot open Active Directory Users and Computers:** redirect to a properly provisioned lab server; AD tools need a domain controller or admin tools installed.
- **Unsure of a change's scope:** redirect to test on a single account or isolated OU first; Group Policy and permission changes can cascade.
- **Over-broad group membership:** redirect to ask what the role truly requires and grant only that access.
- **Ignoring the Security log:** redirect to the failed/successful logon pattern as the first evidence of a password attack.

## Sample solution (instructor reference)

- Task Manager Processes shows processes with owning users (for example, a browser process under the user account).
- `services.msc` shows each service's status (Running/Stopped) and start type (Automatic/Manual/Disabled).
- Event Viewer Security log: event ID 4624 = successful logon, 4625 = failed logon. A burst of 4625 followed by a 4625-to-4624 transition from an unusual location indicates a possible password attack.
- `lusrmgr.msc` distinguishes standard users from administrators; the built-in Administrator should normally be disabled or renamed.
- The Security tab shows the ACL with users/groups and their allowed actions.
- `dsa.msc` shows the domain, default containers and any OUs; Group Policy is linked to an OU.
- A least-privilege plan: create the user, place it in the team OU, add it to the group granting exactly the required access, link the team Group Policy.

## Grading rubric

| Criterion | Weight |
|---|---:|
| Correct use of Task Manager, Services and Event Viewer | 25 |
| Accurate interpretation of logon events and permissions | 20 |
| Correct understanding of Active Directory, OUs and Group Policy | 25 |
| A sound least-privilege plan with justification | 20 |
| Clear documentation and safety awareness | 10 |

## Answer key (instructor only)

- Task Manager = process inspection; Services = service status/start type; Event Viewer = security events.
- 4624 = successful logon; 4625 = failed logon.
- Organizational Unit = container for users, groups and computers that provides a place for Group Policy.
- Group Policy (GPO) = applies and enforces configuration across objects in an OU.
- Kerberos = default domain authentication protocol; NTLM = older fallback.
- Built-in Administrator should be renamed or disabled; grant administrator rights only when needed.
- Least-privilege plan: user account → team OU → group with exactly the required access → team Group Policy.

## Extension and cleanup

- **Extension:** have students design a least-privilege setup and specify how they would verify that a user gets exactly the intended access.
- **Cleanup:** remove any test users or OUs created in the lab domain, or restore the lab server from its snapshot.
