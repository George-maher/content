# Bilingual Content Guidelines

## Language model

- Arabic is the default learning language.
- English technical terminology is preserved. On first use, write the Arabic explanation followed by the English term in parentheses, for example: الثغرة (Vulnerability).
- Arabic and English must be equivalent in educational depth. Do not shorten examples, scenarios, tables, or explanations in Arabic.

## Terminology

Use one consistent Arabic term per concept. Keep the English term visible.

| English | Arabic | Note |
|---|---|---|
| Asset | أصل | Something of value |
| Threat | تهديد | Potential cause of harm |
| Vulnerability | ثغرة | Weakness |
| Exploit | استغلال | Code or technique that abuses a weakness |
| Risk | خطر | Likelihood × impact |
| Control | ضابط | Safeguard |
| Mitigation | تخفيف | Reduce risk |
| Confidentiality | السرية | CIA |
| Integrity | السلامة | CIA |
| Availability | التوافر | CIA |
| Authentication | المصادقة | Identity proof |
| Authorization | التصريح | Permission |
| Least privilege | أقل امتياز | Access principle |
| Incident | حادث | Security event |
| Evidence | دليل | Forensic material |
| Chain of custody | سلسلة الحيازة | Evidence handling |

## Rendering rules

- Commands, code, IP addresses, paths, URLs, hashes and file names use `dir="ltr"`.
- Arabic paragraphs use RTL; do not force LTR on the whole page.
- Tables must remain readable in both directions.
- Avoid mixing an English command inside an Arabic sentence without a code span or block.
- Test both languages on every session tab.

## Quality checks

- Every `L` object has non-empty `en` and `ar`.
- Arabic longer than 25 characters contains Arabic script.
- No machine-translation artifacts or unexplained English paragraphs in Arabic fields.
- Technical terms are consistent across sessions and the glossary.
- Arabic examples are culturally appropriate and technically identical to the English examples.
