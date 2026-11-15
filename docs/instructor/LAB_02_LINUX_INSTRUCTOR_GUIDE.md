# Lab 2 — Instructor Guide (Linux Command Line & Permissions)

**Course:** Cybersecurity Foundation (Level 1)
**Session:** 5 — Linux Fundamentals & Administration
**Major lab:** `lab-02`
**Student title:** Lab 2 — Linux Command Line & Permissions
**Format:** Hands-on terminal lab on an isolated Linux VM or container
**Suggested time:** 60–70 minutes inside a 90-minute session
**Bundle status:** Instructor-only. This file is intentionally outside `src/` and must not be imported by the LMS.

## Purpose

The lab turns Linux theory into a safe, repeatable working baseline. Students must navigate the filesystem, create and manage files, create users and groups, apply and verify permissions with chmod and chown, inspect processes and services, read logs, and document what they find. The emphasis is correct command execution and permission reasoning, not speed.

## Learning outcomes

By the end of the lab, students can:

1. Use the terminal to navigate directories and manage files and directories.
2. Create and manage users and groups following least privilege.
3. Apply and interpret file permissions with chmod and chown.
4. Inspect processes, services and logs using core commands.
5. Apply first-step hardening habits and document a system baseline.

## Setup

- One isolated Linux VM (for example Ubuntu Server 24.04) or container per student or pair.
- A snapshot taken before the lab begins, for safe rollback.
- Administrative (sudo) access for the account-creation steps.
- The companion `perm` permission calculator for formative practice.
- Timer visible to the room.
- No connection to a real production network.

### Suggested lab area

- Create all practice files under `~/lab-permissions/` so changes are contained and easy to clean up.

## Authorization and safety checklist

Read this aloud before students start:

- The VM or container is isolated and belongs to the lab, not a production system.
- Do not run commands against any real production server, public host or machine you do not control.
- Create all practice files in your own lab directory; do not modify system files or other users' accounts.
- Never disable security controls, delete system files, or disable the firewall in the lab.
- If a command fails or produces unexpected output, stop and record what you see rather than retrying blindly.

## Step-by-step (instructor view)

1. **Orient in the terminal** (5 min): `pwd` and `ls -la` to confirm location and contents.
2. **Explore the filesystem hierarchy** (5 min): `ls -la /` and note the standard top-level directories.
3. **Create a practice directory and files** (5 min): `mkdir -p ~/lab-permissions`, `cd` into it, `touch report.txt`.
4. **Create a user and a group** (10 min): `sudo groupadd labteam`, `sudo useradd -m -G labteam labuser`.
5. **Apply least-privilege permissions** (10 min): `chmod 640 report.txt`, `chown labuser:labteam report.txt`, verify with `ls -l`.
6. **Inspect a running service** (10 min): `systemctl status ssh` and interpret the state and recent logs.
7. **Read recent logs** (5 min): `journalctl -u ssh --no-pager | tail -n 20`.
8. **Check listening ports** (5 min): `ss -tlnp` and note which services are reachable.
9. **Write the baseline note** (10 min): Document what runs, the permissions applied, and any unexpected findings.

## Expected results

- A recorded filesystem map of the standard top-level directories.
- A practice directory with correctly permissioned files (owner read/write, group read, others none for mode 640).
- A created user and group with verified group membership.
- An inspection of at least one running service and its recent logs.
- A list of listening TCP ports and the processes that own them.
- A short baseline note describing what runs on the machine and any unexpected findings.

## Common student errors and how to redirect

- **`command not found`:** wrong spelling or the program is not installed. Redirect: use `which`/`command -v` and install via the package manager if needed.
- **Permission denied on chmod/chown:** not the owner and not root. Redirect: use `sudo` if authorized, or ask the owner; do not escalate without reason.
- **Service shows `failed` unexpectedly:** redirect to read `journalctl -u <service>` to find the cause rather than restarting repeatedly.
- **Misreading permission strings:** students confuse owner/group/others columns. Redirect: re-derive the octal value from the string.
- **Over-broad permissions:** students use `777` for convenience. Redirect: ask what each bit allows and who is in each group; apply the minimum.
- **Destructive mistakes:** students run `rm` on an unchecked path. Redirect: stop, list first, and restore from the snapshot if needed.

## Sample solution (instructor reference)

- `pwd` prints the absolute path of the current directory.
- `ls -la /` shows the top-level structure including `/home`, `/etc`, `/var`, `/usr`, `/tmp`, `/root`.
- After `chmod 640 report.txt`, the listing shows `-rw-r-----`: owner read/write, group read, others no access.
- `systemctl status ssh` shows the service state (active/inactive) with recent log lines.
- `ss -tlnp` shows listening TCP ports (for example 22 for SSH) with the owning process.
- `journalctl -u ssh` returns recent SSH service log lines.

## Grading rubric

| Criterion | Weight |
|---|---:|
| Correct and complete command execution | 30 |
| Correct permission values and clear before/after reasoning | 25 |
| Safe user and group setup following least privilege | 20 |
| Accurate service and log inspection with interpretation | 15 |
| Clear baseline note and clean documentation | 10 |

## Answer key (instructor only)

- Mode 640 = owner read+write (6), group read (4), others none (0) → `-rw-r-----`.
- Mode 750 = owner full (7), group read+execute (5), others none (0).
- `chown user:group file` changes both owner and group; `chmod` changes only permissions.
- `/etc` holds configuration, `/var/log` holds logs, `/usr/bin` holds executable programs.
- `systemctl status` is the command for service state; `journalctl` is the command for service logs.

## Extension and cleanup

- **Extension:** have students create a shared group directory where the group can read and write but others cannot, and verify with a second user.
- **Cleanup:** remove the practice directory and any test users created, or restore the VM from the snapshot.
