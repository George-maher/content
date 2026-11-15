# Lab 7 — Instructor Guide (Web Application Security: SQL Injection)

**Course:** Cybersecurity Foundation (Level 1)
**Session:** 11 — Web Application Security: The OWASP Top 10, Injection and Secure Coding
**Major lab:** `lab-07`
**Student title:** Lab 7 — Web Application Security: SQL Injection
**Format:** Simulator-based lab on the companion `sqli` tool (display only)
**Suggested time:** 60–70 minutes inside a 90-minute session
**Bundle status:** Instructor-only. This file is intentionally outside `src/` and must not be imported by the LMS.

## Purpose

The lab turns injection theory into a safe, repeatable comparison exercise. Students compare a vulnerable query that concatenates user input into a text string with a safe, parameterised query, observe how a single quote changes query logic, explain why parameterisation blocks injection, and match defences to attacks. The emphasis is on understanding the mechanism and the security reasoning — not on running anything against a real database.

## Learning outcomes

By the end of the lab, students can:

1. Compare a string-built query with a parameterised query and identify the difference.
2. Explain how an attacker-supplied quote changes the query logic.
3. Explain why parameterisation prevents injection.
4. Match common injection defences to the attacks they stop.
5. Apply safe-practice and scope discipline when reasoning about vulnerable code.

## Setup

- The companion `sqli` simulator (browser tool) for every student.
- A projected display for the instructor demonstration.
- The OWASP Top 10 reference for the defence discussion.
- No real or third-party databases or websites are involved; all queries are fictional and contained in the simulator.
- Timer visible to the room.

### Suggested lab area

- All practice happens inside the display-only simulator. The query strings are fictional and nothing is executed against any database.

## Authorization and safety checklist

Read this aloud before students start:

- Configure and test only in the companion simulator or on a deliberately vulnerable lab you own or are authorised to use (e.g. OWASP Juice Shop, WebGoat).
- Do **not** try injection strings against real websites or databases — even "just to see" — without written permission.
- Do not connect the simulator to any real database.
- If a task would touch a system outside your authorized scope, stop and confirm authorization first.

## Step-by-step (instructor view)

1. **Compare the two queries** (12 min): Open the simulator and compare the vulnerable, string-built query with the safe, parameterised query. Note where user input is joined into the string versus passed as a value.
2. **Observe how a quote changes logic** (12 min): Append a single quote to the username input in the string-built query and observe how the query structure breaks or is altered — the core of the injection mechanism.
3. **Explain why parameterisation prevents injection** (12 min): Run the same input against the parameterised query and observe that it is treated strictly as data, never as query text.
4. **Match defences to attacks** (12 min): Match each injection defence (parameterised queries/prepared statements, input validation, least-privilege DB accounts, least privilege, WAF) to the attack it stops.
5. **Write the checklist and safety note** (10 min): Summarise the safe-coding checklist and the scope/safety rules.

## Expected results

- A correct comparison showing the vulnerable string-built query versus the safe parameterised query.
- A clear explanation of how a quote alters query logic in the vulnerable version.
- A correct explanation that parameterisation treats input as data, not code.
- Defences correctly matched to the attacks they stop.
- A safe-coding checklist with an explicit safety and scope note.

## Common student errors and how to redirect

- **"The quote does nothing":** Ensure the student is running the input in the string-built query and reading the resulting query text, not just the output. Show how the quote closes the string literal.
- **Confusing parameterisation with encryption:** Parameterisation is not encryption; it separates code from data. Clarify the mechanism.
- **Listing defences without matching them:** Push for the specific attack each defence stops, not a generic list.
- **Wanting to test a real site:** Stop the attempt, restate the authorization boundary, and redirect to the simulator or an authorised vulnerable lab.

## Sample solution (instructor reference)

- Vulnerable query: `SELECT * FROM users WHERE username = '<input>' AND password = '<input>'` — input is concatenated into the string, so a quote closes the literal and changes the logic.
- Safe query: the same lookup with the username and password passed as bound parameters; a quote is treated as ordinary data.
- Injection effect: an input like `' OR '1'='1` in the vulnerable query changes the `WHERE` clause, altering which rows are returned — the injection mechanism.
- Parameterisation defence: bound parameters ensure input is never interpreted as query text, blocking this class of attack.
- Matched defences: parameterised/prepared statements (primary defence); input validation (defence in depth); least-privilege database accounts (limits damage); WAF (detects some patterns); secure error handling (avoids leaking query details).

## Grading rubric

| Criterion | Weight |
| --- | --- |
| Correct comparison of vulnerable and safe queries | 25 |
| Correct explanation of how injection changes query logic | 25 |
| Correct explanation of why parameterisation prevents injection | 20 |
| Correct defences listed and matched to attacks | 20 |
| Clear checklist and safety awareness | 10 |

## Answer key (instructor only)

- String-built query: user input is concatenated into the SQL text, so attacker-controlled characters can alter the query structure.
- Parameterised query: input is bound as a value; it can never change the query structure.
- A quote (`'`) closes a string literal in the vulnerable query, enabling logic-changing injection.
- The primary defence is parameterised queries / prepared statements; the others are defence in depth.

## Extension and cleanup

- **Extension:** Ask students to extend the checklist to cover stored-procedure and ORM injection risks, and to explain why least-privilege DB accounts limit the blast radius of a successful injection.
- **Cleanup:** No real systems were touched. Collect the checklists and note that the simulator is a practice tool only.
