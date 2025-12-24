import { useEffect, useState } from "react";

export function usePersistentState<T>(key: string, defaultValue: T) {
  const [state, setState] = useState<T>(() => {
    if (typeof window === "undefined") return defaultValue;
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState] as const;
}
