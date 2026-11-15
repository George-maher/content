# Lab 4 — Instructor Guide (IP Addressing & Subnetting)

**Course:** Cybersecurity Foundation (Level 1)
**Session:** 7 — Networking Fundamentals I: Models, Devices & IP Addressing
**Major lab:** `lab-04`
**Student title:** Lab 4 — IP Addressing & Subnetting
**Format:** Calculator-based and paper exercise on the companion `cidr` tool
**Suggested time:** 60–70 minutes inside a 90-minute session
**Bundle status:** Instructor-only. This file is intentionally outside `src/` and must not be imported by the LMS.

## Purpose

The lab turns IP addressing theory into a safe, repeatable calculation skill. Students calculate subnet masks, network and broadcast addresses and usable host ranges from CIDR notation, distinguish private from public addresses, split a network into equal-size subnets, assign roles to subnets, and verify address membership. The emphasis is correct arithmetic and the security reasoning behind segmentation, not speed.

## Learning outcomes

By the end of the lab, students can:

1. Calculate the subnet mask, network address, broadcast address and usable host range from a CIDR block.
2. Identify whether an address is private or public.
3. Split a `/24` network into four equal-size `/26` subnets.
4. Assign roles to subnets and verify address membership.
5. Build an allow/deny matrix between segments and explain the containment goal.

## Setup

- The companion `cidr` subnet calculator (browser tool) for every student.
- Paper, pencil and a calculator for manual practice and the segmentation plan.
- A projected display for the instructor demonstration.
- No VMs, no network scanning and no real networks are required.
- Timer visible to the room.

### Suggested lab area

- All practice uses fictional private addresses (`192.168.x.x`, `10.x.x.x`, `172.16.x.x`). Keep the work on paper and in the calculator.

## Authorization and safety checklist

Read this aloud before students start:

- This lab is calculation only, on paper and in the companion tool.
- Do not scan, probe or modify any real network, device or address.
- All addresses used are fictional private ranges (`192.168.x.x`).
- If you are asked to act on a real network, or you are unsure of the scope, stop and confirm authorization first.

## Step-by-step (instructor view)

1. **Calculate a /26 subnet** (10 min): Enter `192.168.10.77/26` in the calculator. Record mask, block size, network, broadcast and usable range.
2. **Identify private vs public** (8 min): Test `10.20.30.40/8` and `8.8.8.8/32`; classify each.
3. **Split a /24 into four equal subnets** (12 min): Calculate `192.168.10.0/26`, `.64/26`, `.128/26`, `.192/26`; confirm each has 62 usable hosts.
4. **Assign roles** (12 min): Staff `.0`, Servers `.64`, Guests `.128`, Cameras `.192`; note each segment's purpose.
5. **Verify address membership** (8 min): Confirm `192.168.10.77` falls in the `.64–.127` Servers block.
6. **Build the allow/deny matrix** (10 min): Define allowed flows (Staff→Servers, Cameras→Servers) and blocked flows (Guests to all internal segments).
7. **Write the segmentation note** (8 min): Summarize the plan and the containment goal.

## Expected results

- Correct mask, block size, network, broadcast and usable range for each CIDR block.
- Correct private/public classification for the test addresses.
- Four `/26` subnets (`.0`, `.64`, `.128`, `.192`), each with 62 usable hosts.
- A verified membership result for the sample address.
- An allow/deny matrix that blocks free lateral movement.

## Common student errors and how to redirect

- **Confusing usable hosts with block size:** Remind them the block size is `2^n` and usable hosts are `2^n − 2`; for `/26` that is 64 and 62.
- **Forgetting to subtract 2:** Walk through why the network and broadcast addresses cannot be assigned to a host.
- **Wrong block boundary:** Re-derive the block size from the prefix and round the address down to the nearest block size.
- **Mixing up private and public:** Have them memorize the RFC 1918 ranges `10/8`, `172.16/12`, `192.168/16`.

## Sample solution (instructor reference)

For `192.168.10.77/26`:

- Mask: `255.255.255.192`
- Block size: 64
- Network: `192.168.10.64`
- Broadcast: `192.168.10.127`
- Usable hosts: `192.168.10.65` – `192.168.10.126`

Four `/26` subnets of `192.168.10.0/24`:

| Subnet | Network | Broadcast | Usable range |
| --- | --- | --- | --- |
| 1 | `192.168.10.0/26` | `192.168.10.63` | `.1` – `.62` |
| 2 | `192.168.10.64/26` | `192.168.10.127` | `.65` – `.126` |
| 3 | `192.168.10.128/26` | `192.168.10.191` | `.129` – `.190` |
| 4 | `192.168.10.192/26` | `192.168.10.255` | `.193` – `.254` |

## Grading rubric

| Criterion | Weight |
| --- | --- |
| Correct subnet calculations | 30 |
| Correct private/public identification | 20 |
| Correct four-subnet segmentation plan | 25 |
| Sound allow/deny matrix limiting lateral movement | 15 |
| Clear segmentation note and safety awareness | 10 |

## Answer key (instructor only)

- `10.20.30.40` → private; `8.8.8.8` → public.
- `192.168.10.77` is in the Servers block (`.64`–`.127`), between network `.64` and broadcast `.127`.
- The allow/deny matrix should allow Staff→Servers and Cameras→Servers, and block Guests from all internal segments.

## Extension and cleanup

- **Extension:** Given `172.16.0.0/22`, calculate how many `/26` subnets it contains and list their network addresses (16 subnets: `172.16.0.0`, `.64`, …, `172.16.3.192`).
- **Cleanup:** No real systems were touched. Collect the worksheets and note that the calculator is a practice tool only.
