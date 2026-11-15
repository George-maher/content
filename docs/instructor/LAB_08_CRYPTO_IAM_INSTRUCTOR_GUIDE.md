# Lab 8 — Instructor Guide (Cryptography & Identity/Access Management)

**Course:** Cybersecurity Foundation (Level 1)
**Sessions:** 12 — Cryptography: Ciphers, Hashing and Integrity · 13 — Identity & Access Management: RBAC and Least Privilege
**Major lab:** `lab-08` (shared across two sessions)
**Student titles:** Lab 8 — Cryptography: Ciphers, Hashing and Integrity · Lab 8 — Identity & Access Management: Least-Privilege Access Matrix
**Format:** Simulator-based labs on the companion `cipher`/`hash` and `rbac` tools (display only)
**Suggested time:** 60–70 minutes per session lab (run one per session)
**Bundle status:** Instructor-only. This file is intentionally outside `src/` and must not be imported by the LMS.

## Purpose

`lab-08` is a two-part major lab. Part A (Session 12) turns cryptography theory into a safe, repeatable exercise: students encode and decode text with the Caesar cipher, break it by brute force, observe the avalanche effect of a hash, verify integrity with a hash comparison, and match mechanisms to the properties they provide. Part B (Session 13) applies least privilege and separation of duties to a real-world access matrix: students read role job descriptions, cycle each cell of an access matrix, run a policy check, fix violations, and explain the resulting least-privilege design. Both parts emphasise correct reasoning and the security implications of each mechanism.

## Learning outcomes

By the end of the labs, students can:

1. Encode and decode text with the Caesar cipher and break it by trying all shifts.
2. Demonstrate the avalanche effect of a hash and verify integrity with a hash comparison.
3. Match cryptographic mechanisms to the security properties they provide.
4. Build a least-privilege access matrix with zero policy violations.
5. Explain separation of duties and apply a just-in-time access procedure.
6. Identify appropriate access-review triggers.

## Setup

- The companion `cipher` and `hash` simulators (Session 12) and the `rbac` access-matrix simulator (Session 13), one per student.
- A projected display for each instructor demonstration.
- The cryptographic-properties reference and the access-control policy reference for the matching/check steps.
- No real or third-party systems are involved; all text, hashes and matrix data are fictional and contained in the simulators.
- Timer visible to the room.

### Suggested lab area

- All practice happens inside the display-only simulators. Nothing is encrypted, transmitted or changed on any real system.

## Authorization and safety checklist

Read this aloud before students start:

- Configure and test only in the companion simulators or on a deliberately vulnerable lab you own or are authorised to use.
- Do not attempt to break encryption or alter access on systems you do not own or are not authorised to test.
- Cryptographic and IAM practice belongs in controlled, authorised environments.
- In real environments, never remove or change access in bulk without testing and communicating the change; keep at least two break-glass administrator accounts under strong control.
- If a task touches a system outside your authorized scope, stop and confirm authorization first.

## Part A — Session 12: Cryptography step-by-step (instructor view)

1. **Encode and decode with the Caesar cipher** (12 min): Encode a plaintext message with a chosen shift and decode it back, observing that the cipher is symmetric and reversible.
2. **Break the cipher by trying all shifts** (12 min): With the shift unknown, try all 26 (or all relevant) shifts to recover the plaintext — the brute-force attack that shows why a single Caesar shift is weak.
3. **Observe the avalanche effect** (12 min): Change one character in the input and observe that the hash output changes completely.
4. **Verify integrity with a hash comparison** (12 min): Compare a hash of an original message with a hash of a received message to confirm the data is unchanged.
5. **Match mechanisms to properties** (12 min): Match each mechanism (Caesar cipher, hash, salted hash, digital signature, TLS) to the property it provides (confidentiality, integrity, authentication, non-repudiation).
6. **Design password storage** (10 min): Summarise the recommended password-storage design (salted, slow hashing) and the safety rules.

## Part A expected results

- Correct encode/decode round-trip with the Caesar cipher.
- Correct brute-force break across all shifts.
- Correct demonstration of the avalanche effect and integrity verification.
- Mechanisms correctly matched to the properties they provide.
- A sound password-storage design and a clear safety note.

## Part A common student errors and how to redirect

- **"The cipher is secure":** Show the brute-force break across all shifts to demonstrate the weakness of a single Caesar shift.
- **Confusing confidentiality with integrity:** A cipher provides confidentiality; a hash provides integrity. Clarify the property each mechanism serves.
- **Using a fast hash for passwords:** Push toward salted, slow, adaptive hashing for password storage, and explain why.
- **Mis-matching properties:** Re-check each mechanism against the property it actually provides before accepting the match.

## Part A sample solution (instructor reference)

- Caesar cipher: shift each letter by a fixed amount; symmetric, so encode and decode both need the shift.
- Brute force: try every shift; the plaintext is the readable result.
- Avalanche: a one-character change produces a completely different hash.
- Integrity: matching hashes confirm the data is unchanged; mismatching hashes confirm it changed.
- Matching: Caesar cipher → confidentiality (reversible); hash → integrity; salted hash → password storage; digital signature → integrity + authentication + non-repudiation; TLS → confidentiality + integrity + authentication in transit.
- Password storage: salted, slow, adaptive one-way hashing (e.g. a slow KDF), never plaintext or fast unsalted hashes.

## Part B — Session 13: Identity & Access Management step-by-step (instructor view)

1. **Read the job description under each role** (10 min): Read the four roles' responsibilities to understand what each actually needs to do its work.
2. **Cycle each matrix cell** (15 min): Cycle each cell between none, read-only (R) and read/write (R/W), building a candidate access matrix.
3. **Run "check against policy"** (15 min): Run the policy check and identify every highlighted red cell that violates least privilege or separation of duties.
4. **Fix the violations** (15 min): Adjust the matrix until the policy check passes with zero violations, without blocking anyone's real work.
5. **Explain separation of duties** (10 min): Explain which cells illustrate separation of duties and why they matter.
6. **Apply just-in-time access and access reviews** (10 min): Describe a just-in-time access procedure and the triggers that should prompt an access review.

## Part B expected results

- A correct least-privilege access matrix with zero policy violations.
- Every policy violation correctly identified and fixed.
- A clear separation-of-duties explanation tied to specific cells.
- A sound just-in-time access procedure.
- Appropriate access-review triggers and a clear safety note.

## Part B common student errors and how to redirect

- **Granting broad access "to be safe":** Redirect to least privilege — grant the minimum each role needs to do its actual job, based on the job description.
- **Removing access that blocks real work:** Re-read the job description and keep the access each role genuinely requires.
- **Missing separation-of-duties violations:** Point to the red cells the policy check highlights and ask which role should not hold that combination.
- **Forgetting break-glass accounts:** Remind students to keep at least two break-glass admin accounts under strong control rather than relying on everyday admin access.

## Part B sample solution (instructor reference)

- Build the matrix from the job descriptions: each role receives only the access its duties require.
- Run the policy check; every red cell is a least-privilege or separation-of-duties violation.
- Fix by reducing over-privileged cells to the minimum needed, preserving legitimate access.
- Separation of duties: no single role should hold a combination of rights that would let it, alone, commit and conceal a harmful action (e.g. creating a payment and approving it).
- Just-in-time: grant elevated access only for the duration of a specific task, then revoke it.
- Access reviews: trigger reviews on role changes, periodic schedules, termination, or after any incident.

## Grading rubric

Part A (Session 12):

| Criterion | Weight |
| --- | --- |
| Correct encode/decode with the Caesar cipher | 20 |
| Correct brute-force break across all shifts | 20 |
| Correct demonstration of avalanche and integrity | 20 |
| Correct mechanism-to-property matching | 20 |
| Sound password-storage design and safety awareness | 20 |

Part B (Session 13):

| Criterion | Weight |
| --- | --- |
| Correct least-privilege matrix with zero violations | 30 |
| Correct identification and fix of policy violations | 20 |
| Clear separation-of-duties explanation | 20 |
| Sound just-in-time access procedure | 20 |
| Appropriate access-review triggers and safety awareness | 10 |

## Answer key (instructor only)

**Part A:**

- Caesar cipher is symmetric and reversible → confidentiality.
- Brute force recovers plaintext by trying all shifts.
- Hashes show the avalanche effect and provide integrity.
- Mechanisms map to properties: cipher → confidentiality; hash → integrity; salted slow hash → password storage; signature → integrity + authentication + non-repudiation; TLS → confidentiality + integrity + authentication.
- Passwords: salted, slow, adaptive hashing.

**Part B:**

- The correct matrix grants each role only the access its job requires.
- The policy check highlights every least-privilege and separation-of-duties violation.
- Separation of duties prevents one role from both committing and concealing a harmful action.
- Just-in-time grants elevate access only for a specific task and revoke it afterward.
- Access reviews are triggered by role changes, periodic schedules, termination and incidents.

## Extension and cleanup

- **Extension:** For Part A, extend the mechanism matching to include key exchange and symmetric vs asymmetric trade-offs. For Part B, add a fifth role and ask students to re-run the policy check and explain the new violations.
- **Cleanup:** No real systems were touched. Collect the checklists and matrix explanations and note that the simulators are practice tools only.
