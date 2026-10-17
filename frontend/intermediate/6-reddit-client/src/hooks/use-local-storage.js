import { useCallback, useEffect, useState } from 'react';

/**
 * State persisted to localStorage. Reads lazily on first render,
 * writes back on every change and stays in sync across tabs.
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw !== null) {
        return JSON.parse(raw);
      }
    } catch {
      // corrupted or unavailable storage - fall through to initial value
    }
    return initialValue;
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // storage full / unavailable - state still works in-memory
    }
  }, [key, value]);

  const remove = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
    } catch {
      // ignore
    }
    setValue(initialValue);
  }, [key, initialValue]);

  return [value, setValue, remove];
}
