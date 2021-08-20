/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';

export default function useDebounce<Params extends any[]>(
  fn: (...args: Params) => any,
  delay = 500
): (...args: Params) => void {
  const timeoutRef = useRef(null);

  function debounceFn(...args: Params) {
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      fn(...args);
    }, delay);
  }

  return debounceFn;
}
