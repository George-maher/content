import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { __resetStorageMemory, safeGet, safeRemove, safeSet } from "../../src/lib/storage";

const original = Object.getOwnPropertyDescriptor(globalThis, "localStorage");

function installStorage(storage: Partial<Storage> | undefined) {
  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    value: storage,
  });
}

beforeEach(() => __resetStorageMemory());

afterEach(() => {
  if (original) Object.defineProperty(globalThis, "localStorage", original);
  else delete (globalThis as { localStorage?: unknown }).localStorage;
  __resetStorageMemory();
});

describe("safe storage", () => {
  it("reads and writes normally when storage works", () => {
    const data = new Map<string, string>();
    installStorage({
      getItem: (k) => data.get(k) ?? null,
      setItem: (k, v) => void data.set(k, v),
      removeItem: (k) => void data.delete(k),
    });
    safeSet("a", "1");
    expect(safeGet("a")).toBe("1");
    expect(data.get("a")).toBe("1");
    safeRemove("a");
    expect(safeGet("a")).toBeNull();
  });

  it("falls back to memory when storage throws", () => {
    installStorage({
      getItem: () => {
        throw new Error("SecurityError");
      },
      setItem: () => {
        throw new Error("QuotaExceededError");
      },
      removeItem: () => {
        throw new Error("SecurityError");
      },
    });
    expect(() => safeSet("a", "1")).not.toThrow();
    expect(safeGet("a")).toBe("1");
    expect(() => safeRemove("a")).not.toThrow();
    expect(safeGet("a")).toBeNull();
  });

  it("works when localStorage is absent", () => {
    installStorage(undefined);
    expect(safeGet("missing")).toBeNull();
    safeSet("x", "y");
    expect(safeGet("x")).toBe("y");
  });
});
