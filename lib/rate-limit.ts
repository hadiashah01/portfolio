type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type RateLimitStore = {
  __rateLimitStore?: Map<string, RateLimitEntry>;
};

const globalStore = globalThis as unknown as RateLimitStore;
const store = globalStore.__rateLimitStore ?? new Map<string, RateLimitEntry>();
globalStore.__rateLimitStore = store;

export type RateLimitResult = {
  success: boolean;
  remaining: number;
  resetAt: number;
};

export function rateLimit(
  key: string,
  limit: number,
  windowMs: number,
): RateLimitResult {
  const now = Date.now();

  if (store.size > 5000) {
    for (const [entryKey, entryValue] of store) {
      if (entryValue.resetAt <= now) store.delete(entryKey);
    }
  }

  const entry = store.get(key);

  if (!entry || entry.resetAt <= now) {
    const resetAt = now + windowMs;
    store.set(key, { count: 1, resetAt });
    return { success: true, remaining: limit - 1, resetAt };
  }

  entry.count += 1;

  if (entry.count > limit) {
    return { success: false, remaining: 0, resetAt: entry.resetAt };
  }

  return {
    success: true,
    remaining: limit - entry.count,
    resetAt: entry.resetAt,
  };
}
