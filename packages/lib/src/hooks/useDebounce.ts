/* packages/lib/src/hooks/useDebounce.ts */
import { useEffect, useRef, useState, useCallback, useMemo } from "react";

/**
 * ✅ useDebounce
 * Returns a delayed version of a changing value.
 * Renamed from useDebouncedValue for cleaner API consumption.
 */
export function useDebounce<T>(value: T, delay = 300): T {
  const [debounced, setDebounced] = useState<T>(value);
  const first = useRef(true);

  useEffect(() => {
    // Skip initial delay for first render to keep UI snappy
    if (first.current) {
      first.current = false;
      setDebounced(value);
      return;
    }

    const id = window.setTimeout(() => setDebounced(value), delay);
    return () => window.clearTimeout(id);
  }, [value, delay]);

  return debounced;
}

/**
 * ✅ useDebouncedCallback
 * Returns a function that waits before invoking `fn`.
 */
type AnyFn = (...args: any[]) => any;

export function useDebouncedCallback<F extends AnyFn>(fn: F, delay = 300) {
  const fnRef = useRef(fn);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  const cancel = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const debounced = useMemo(() => {
    const handler = (...args: Parameters<F>): void => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      
      timerRef.current = setTimeout(() => {
        fnRef.current(...args);
        timerRef.current = null;
      }, delay);
    };

    return handler as unknown as F;
  }, [delay]);

  useEffect(() => cancel, [cancel]);

  return { callback: debounced, cancel };
}

// ✅ Default export is now useDebounce
export default useDebounce;