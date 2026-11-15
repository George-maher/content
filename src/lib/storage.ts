/**
 * A tiny, failure-tolerant wrapper around Web Storage.
 *
 * Browsers can throw on *any* access to `localStorage` (private mode, disabled
 * storage, quota errors, sandboxed iframes). Persistence is a nice-to-have,
 * so every operation falls back to an in-memory map and never throws.
 */

const memory = new Map<string, string>();

function storage(): Storage | null {
  try {
    if (typeof localStorage === "undefined") return null;
    // Touching the object itself can throw a SecurityError in some contexts.
    return localStorage;
  } catch {
    return null;
  }
}

export function safeGet(key: string): string | null {
  const s = storage();
  if (!s) return memory.get(key) ?? null;
  try {
    return s.getItem(key);
  } catch {
    return memory.get(key) ?? null;
  }
}

export function safeSet(key: string, value: string): void {
  // Keep the memory copy in sync even when persistent storage is unavailable.
  memory.set(key, value);
  const s = storage();
  if (!s) return;
  try {
    s.setItem(key, value);
  } catch {
    /* quota exceeded, private mode, blocked storage … */
  }
}

export function safeRemove(key: string): void {
  memory.delete(key);
  const s = storage();
  if (!s) return;
  try {
    s.removeItem(key);
  } catch {
    /* ignore */
  }
}

/** Test helper: clear the in-memory fallback between cases. */
export function __resetStorageMemory(): void {
  memory.clear();
}
