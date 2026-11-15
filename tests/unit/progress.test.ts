import { describe, expect, it } from "vitest";
import {
  bestScore,
  clampFlags,
  completion,
  emptyProgress,
  parseProgress,
  validScore,
} from "../../src/lib/progress";

describe("parseProgress", () => {
  it("returns empty progress for missing or corrupt input", () => {
    expect(parseProgress(null)).toEqual(emptyProgress());
    expect(parseProgress("")).toEqual(emptyProgress());
    expect(parseProgress("not json")).toEqual(emptyProgress());
    expect(parseProgress("null")).toEqual(emptyProgress());
    expect(parseProgress("[]")).toEqual(emptyProgress());
    expect(parseProgress('"hello"')).toEqual(emptyProgress());
  });

  it("drops invalid sections instead of crashing", () => {
    const p = parseProgress(
      JSON.stringify({
        read: null,
        lab: { 1: [true, false], 2: "nope", x: [true] },
        hw: { 1: [true, "false"] },
        quiz: { 1: { score: -1, total: 5 }, 2: { score: 5, total: 0 }, 3: { score: 3, total: 5 } },
        exam: { score: 99, total: 40 },
        unknown: true,
      }),
    );
    expect(p.read).toEqual({});
    expect(p.lab).toEqual({ 1: [true, false] });
    expect(p.hw).toEqual({});
    expect(p.quiz).toEqual({ 3: { score: 3, total: 5 } });
    expect(p.exam).toBeUndefined();
  });

  it("accepts and round-trips valid data", () => {
    const raw = JSON.stringify({
      read: { 1: true, 20: false },
      lab: { 1: [true, false, true] },
      hw: { 1: [false] },
      quiz: { 1: { score: 4, total: 5 } },
      exam: { score: 28, total: 40 },
    });
    expect(parseProgress(raw)).toEqual({
      read: { 1: true, 20: false },
      lab: { 1: [true, false, true] },
      hw: { 1: [false] },
      quiz: { 1: { score: 4, total: 5 } },
      exam: { score: 28, total: 40 },
    });
  });

  it("ignores non-positive or fractional session keys", () => {
    const p = parseProgress(
      JSON.stringify({ read: { 0: true, "-1": true, "1.5": true, 2: true } }),
    );
    expect(p.read).toEqual({ 2: true });
  });
});

describe("score helpers", () => {
  it("validates scores", () => {
    expect(validScore({ score: 0, total: 1 })).toBe(true);
    expect(validScore({ score: 1, total: 1 })).toBe(true);
    expect(validScore({ score: -1, total: 1 })).toBe(false);
    expect(validScore({ score: 2, total: 1 })).toBe(false);
    expect(validScore({ score: 1, total: 0 })).toBe(false);
    expect(validScore({ score: 1.5, total: 2 })).toBe(false);
    expect(validScore(null)).toBe(false);
  });

  it("keeps the best score", () => {
    expect(bestScore(undefined, { score: 3, total: 5 })).toEqual({ score: 3, total: 5 });
    expect(bestScore({ score: 4, total: 5 }, { score: 3, total: 5 })).toEqual({ score: 4, total: 5 });
    expect(bestScore({ score: 3, total: 5 }, { score: 4, total: 5 })).toEqual({ score: 4, total: 5 });
    expect(bestScore({ score: 3, total: 5 }, { score: 6, total: 10 })).toEqual({ score: 3, total: 5 });
  });
});

describe("completion", () => {
  it("clamps stored arrays to current content length", () => {
    expect(clampFlags([true, true, true], 2)).toEqual([true, true]);
    expect(clampFlags([true], 3)).toEqual([true, false, false]);
    expect(clampFlags(undefined, 2)).toEqual([false, false]);
  });

  it("handles zero-length denominators", () => {
    expect(completion([true], 0)).toBe(0);
    expect(completion(undefined, 0)).toBe(0);
    expect(completion([true, false], 2)).toBe(0.5);
  });
});
