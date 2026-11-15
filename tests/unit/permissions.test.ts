import { describe, expect, it } from "vitest";
import { bitsFromOctal, summarizePermissions } from "../../src/lib/permissions";

describe("permission calculator", () => {
  it("flags world-writable files", () => {
    const p = summarizePermissions(bitsFromOctal("777"));
    expect(p.octal).toBe("777");
    expect(p.symbolic).toBe("rwxrwxrwx");
    expect(p.worldWritable).toBe(true);
    expect(p.warning).toBe("worldWritable");
  });

  it("does not flag 770 as world-writable", () => {
    const p = summarizePermissions(bitsFromOctal("770"));
    expect(p.octal).toBe("770");
    expect(p.worldWritable).toBe(false);
    expect(p.everyoneReadable).toBe(false);
  });

  it("detects everyone-can-read only when owner, group and others can read", () => {
    expect(summarizePermissions(bitsFromOctal("444")).everyoneReadable).toBe(true);
    expect(summarizePermissions(bitsFromOctal("444")).warning).toBe("everyoneReadable");
    expect(summarizePermissions(bitsFromOctal("640")).everyoneReadable).toBe(false);
    expect(summarizePermissions(bitsFromOctal("640")).warning).toBe("reasonable");
    // Regression: 604 used to claim "everyone can read" while group could not.
    expect(summarizePermissions(bitsFromOctal("604")).everyoneReadable).toBe(false);
  });

  it("flags group-writable separately", () => {
    expect(summarizePermissions(bitsFromOctal("660")).groupWritable).toBe(true);
    expect(summarizePermissions(bitsFromOctal("640")).groupWritable).toBe(false);
  });

  it("produces correct octal/symbolic output for all 512 combinations", () => {
    for (let n = 0; n < 512; n++) {
      const octal = n.toString(8).padStart(3, "0");
      const p = summarizePermissions(bitsFromOctal(octal));
      expect(p.octal, octal).toBe(octal);
      expect(p.symbolic, octal).toHaveLength(9);
      expect(p.symbolic[0] === "r", octal).toBe((n & 0o400) !== 0);
      expect(p.symbolic[3] === "r", octal).toBe((n & 0o040) !== 0);
      expect(p.symbolic[6] === "r", octal).toBe((n & 0o004) !== 0);
      expect(p.worldWritable, octal).toBe((n & 0o002) !== 0);
      expect(p.everyoneReadable, octal).toBe((n & 0o444) === 0o444);
    }
  });

  it("treats malformed octal as no permissions", () => {
    expect(bitsFromOctal("abc").every((b) => b === false)).toBe(true);
  });
});
