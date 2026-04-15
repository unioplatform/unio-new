/* packages/ui/src/primitives/fields/autocomplete/useAutocomplete.ts */

import { useState, useMemo, useEffect } from "react";

export function useAutocomplete({
  value,
  options,
  onSearchChange,
}: {
  value?: string;
  options: { label: string; value: string }[];
  onSearchChange?: (q: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const selected = useMemo(
    () => options.find((o) => o.value === value) || null,
    [options, value]
  );

  // ✅ Defensive check: query is always a string, but hasValue needs to be robust
  const hasValue = selected !== null || (query ?? "").trim() !== "" || open;

  useEffect(() => {
    onSearchChange?.(query);
  }, [query, onSearchChange]);

  useEffect(() => {
    // ✅ Use optional chaining and nullish coalescing
    if (selected && !open) {
      setQuery(selected.label ?? "");
    } else if (!value && !open) {
      setQuery("");
    }
  }, [selected, value, open]);

  const filtered = useMemo(() => {
    // ✅ DEFENSIVE: Ensure query exists before manipulation
    const safeQuery = (query ?? "").toLowerCase().trim();

    // If user has exactly matched the selected label, show all options (business preference)
    if (open && selected && safeQuery === (selected.label ?? "").toLowerCase().trim()) {
      return options;
    }

    if (!safeQuery) return options;

    return options
      .filter((o) => {
        const label = (o.label ?? "").toLowerCase();
        return label.includes(safeQuery);
      })
      .sort((a, b) => {
        const aLabel = (a.label ?? "").toLowerCase();
        const bLabel = (b.label ?? "").toLowerCase();
        
        const aStarts = aLabel.startsWith(safeQuery);
        const bStarts = bLabel.startsWith(safeQuery);
        
        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;
        return 0;
      });
  }, [query, options, selected, open]);

  return {
    open,
    setOpen,
    query,
    setQuery,
    selected,
    filtered,
    hasValue,
  };
}