export type PermissionWarning = "worldWritable" | "everyoneReadable" | "reasonable";

export interface PermissionSummary {
  octal: string;
  symbolic: string;
  worldWritable: boolean;
  groupWritable: boolean;
  everyoneReadable: boolean;
  warning: PermissionWarning;
}

/**
 * Convert a row-major permission matrix
 * `[owner r,w,x, group r,w,x, others r,w,x]` into octal, symbolic and
 * human-readable warnings.
 */
export function summarizePermissions(bits: readonly boolean[]): PermissionSummary {
  const b = Array.from({ length: 9 }, (_, i) => bits[i] === true);
  const octal = [0, 1, 2]
    .map((g) => (b[g * 3] ? 4 : 0) + (b[g * 3 + 1] ? 2 : 0) + (b[g * 3 + 2] ? 1 : 0))
    .join("");
  const symbolic = b.map((v, i) => (v ? "rwx"[i % 3] : "-")).join("");

  const everyoneReadable = b[0] && b[3] && b[6];
  const worldWritable = b[7];
  const groupWritable = b[4];

  const warning: PermissionWarning = worldWritable
    ? "worldWritable"
    : everyoneReadable
      ? "everyoneReadable"
      : "reasonable";

  return { octal, symbolic, worldWritable, groupWritable, everyoneReadable, warning };
}

/** Build the 9-bit matrix from an octal string such as "640". */
export function bitsFromOctal(octal: string): boolean[] {
  const digits = octal.padStart(3, "0").slice(-3);
  if (!/^[0-7]{3}$/.test(digits)) return Array(9).fill(false);
  return digits.split("").flatMap((d) => {
    const n = Number(d);
    return [(n & 4) !== 0, (n & 2) !== 0, (n & 1) !== 0];
  });
}
