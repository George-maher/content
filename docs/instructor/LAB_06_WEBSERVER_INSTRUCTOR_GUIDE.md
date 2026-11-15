# Lab 6 — Instructor Guide (Web Server, Document Root & HTTP)

**Course:** Cybersecurity Foundation (Level 1)
**Session:** 10 — Web Fundamentals & Web Infrastructure: HTTP, Servers & the Document Root
**Major lab:** `lab-06`
**Student title:** Lab 6 — Web Server, Document Root & HTTP
**Format:** Simulator-based lab on the companion `webserver` tool
**Suggested time:** 60–70 minutes inside a 90-minute session
**Bundle status:** Instructor-only. This file is intentionally outside `src/` and must not be imported by the LMS.

## Purpose

The lab turns web-infrastructure theory into a safe, repeatable configuration exercise. Students set up a simulated web server with a public document root and a private folder outside it, map a URL to the document root, serve static content, toggle directory listing, reject a directory-traversal attempt, verify status codes, and apply hardening. The emphasis is correct configuration reasoning and the security implications of each setting, not speed.

## Learning outcomes

By the end of the lab, students can:

1. Map a URL to the document root and identify the served file.
2. Serve static content and read the request/response.
3. Disable directory listing to prevent file enumeration.
4. Reject directory traversal and unauthorized requests.
5. Verify status codes and apply web-server hardening.

## Setup

- The companion `webserver` simulator (browser tool) for every student.
- A projected display for the instructor demonstration.
- Paper for the hardening configuration note.
- No real or third-party web servers are involved; all files are fictional and contained in the simulator.
- Timer visible to the room.

### Suggested lab area

- All practice happens inside the simulator. The document root is a fictional public folder with a fictional private folder outside it.

## Authorization and safety checklist

Read this aloud before students start:

- Configure and test only in the companion simulator or on a local lab server you own or are authorized to administer.
- Do not configure, scan or test any real or third-party web server without explicit authorization.
- Do not attempt to read or traverse files on any system you do not control.
- If a task touches a server outside your authorized scope, stop and confirm authorization first.

## Step-by-step (instructor view)

1. **Identify the document root** (10 min): Review the configured root; map a URL path such as `/docs/page.html` to a file within it.
2. **Serve static content** (10 min): Request `/index.html`; observe the request line and the `200` response with the file content.
3. **Enable and disable directory listing** (12 min): Request a directory with listing enabled (file listing appears), then disable listing and request it again (`403`).
4. **Reject a directory traversal attempt** (12 min): Request `/../../etc/passwd`; confirm the server rejects it with `400`/`403`.
5. **Verify status codes** (10 min): Request a missing file (`404`) and an unauthorized resource (`403`).
6. **Apply hardening and write the note** (10 min): With listing disabled and traversal rejected, write a short hardening note.

## Expected results

- Correct document root and a URL mapped to a served file.
- Static content served with a `200` response.
- Directory listing disabled with `403` confirmed.
- A traversal attempt rejected.
- Correct status codes for missing (`404`) and forbidden (`403`) resources.
- A hardening note covering the controls applied.

## Common student errors and how to redirect

- **A requested file returns `404` even though it seems to exist:** Confirm the path is correct relative to the document root and the file is inside it.
- **Directory listing still appears after disabling it:** Confirm the setting was applied and saved to the correct directory; some servers also need an explicit index file.
- **A traversal attempt seems to succeed:** Stop, do not read any real files, and re-apply the configuration to reject paths that escape the document root.
- **Unsure whether a target is in scope:** Stop and confirm authorization before testing or configuring.

## Sample solution (instructor reference)

- `/` with listing enabled → `200` file listing; with listing disabled → `403`.
- `/index.html` → `200` with the file content.
- `/docs/page.html` → `200`.
- `/private/secrets.txt` → `404` (outside the document root, never served).
- `/missing.html` → `404`.
- `/../../etc/passwd` → `403` (traversal rejected).

Hardening note: disable directory listing, reject paths that escape the document root, serve only the public folder, hide version details, keep the software updated, and serve over HTTPS.

## Grading rubric

| Criterion | Weight |
| --- | --- |
| Correct document root and URL mapping | 20 |
| Correct static content serving and response | 20 |
| Directory listing correctly disabled | 20 |
| Traversal rejected and status codes verified | 20 |
| Clear hardening note and safety awareness | 20 |

## Answer key (instructor only)

- `200` = success (file served or listing shown); `403` = forbidden (listing disabled or traversal/unauthorized); `404` = not found (missing or outside the document root).
- The private folder is never served because it sits outside the document root.
- Traversal is rejected by refusing any path component that escapes the document root.

## Extension and cleanup

- **Extension:** Ask students to add a rule redirecting plaintext HTTP to HTTPS and to explain why HTTPS matters for a sensitive site, then verify a `301`-style redirect concept.
- **Cleanup:** No real systems were touched. Collect the hardening notes and note that the simulator is a practice tool only.
