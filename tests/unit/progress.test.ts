import { describe, expect, it } from "vitest";
import {
  bestScore,
  clampFlags,
  completion,
  emptyProgress,
  loadProgress,
  migrateV1ToV2,
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

describe("v1 to v2 progress migration", () => {
  const legacy = {
    read: { 1: true, 3: true, 4: true, 20: true },
    lab: { 1: [true, true] },
    hw: { 1: [true] },
    quiz: { 1: { score: 4, total: 6 } },
    exam: { score: 30, total: 40 },
  };

  it("preserves surviving reading progress and resets changed work", () => {
    const migrated = migrateV1ToV2(legacy);
    expect(migrated.read).toEqual({ 1: true, 3: true, 19: true });
    expect(migrated.lab).toEqual({});
    expect(migrated.hw).toEqual({});
    expect(migrated.quiz).toEqual({});
    expect(migrated.exam).toBeUndefined();
  });

  it("requires every source session for a merged chapter", () => {
    expect(migrateV1ToV2({ ...emptyProgress(), read: { 3: true } }).read[3]).toBeUndefined();
    expect(
      migrateV1ToV2({ ...emptyProgress(), read: { 3: true, 4: true } }).read[3],
    ).toBe(true);
  });

  it("does not credit secondary chapters created by a split", () => {
    const migrated = migrateV1ToV2({ ...emptyProgress(), read: { 5: true } });
    expect(migrated.read[4]).toBe(true);
    expect(migrated.read[5]).toBeUndefined();
    expect(migrated.read[6]).toBeUndefined();
  });

  it("prefers current progress and only migrates when it is absent", () => {
    const current = JSON.stringify({ read: { 2: true }, lab: {}, hw: {}, quiz: {} });
    expect(loadProgress(current, JSON.stringify(legacy)).migrated).toBe(false);
    expect(loadProgress(current, JSON.stringify(legacy)).progress.read).toEqual({ 2: true });
    const loaded = loadProgress(null, JSON.stringify(legacy));
    expect(loaded.migrated).toBe(true);
    expect(loaded.progress.read[1]).toBe(true);
  });
});
