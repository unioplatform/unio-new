/* useSelect.ts */

import { useState, useMemo } from "react";

export function useSelect({
  value,
  options,
}: {
  value?: string;
  options: { label: string; value: string }[];
}) {
  const [open, setOpen] = useState(false);

  const selected = useMemo(
    () => options.find((o) => o.value === value) || null,
    [options, value]
  );

  const hasValue = selected !== null || open;

  return {
    open,
    setOpen,
    selected,
    hasValue,
  };
}