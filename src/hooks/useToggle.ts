// eslint-disable @typescript-eslint/explicit-module-boundary-types
import { useState, useCallback } from 'react';

// TODO: Uses in Pagination to set page
export default function useToggle(
  initialValue = false
): (boolean | (() => void))[] {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);

  return [value, toggle];
}
