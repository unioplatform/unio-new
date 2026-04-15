/* AutocompleteSelect.tsx */

import React, { useRef, forwardRef, useEffect } from "react";
import FloatingFieldShell from "../FloatingFieldShell";
import { useAutocomplete } from "./useAutocomplete";
import { AutocompleteInput } from "./AutocompleteInput";
import { AutocompleteDropdown } from "./AutocompleteDropdown";

export const AutocompleteSelect = forwardRef<any, any>(
  (
    {
      label,
      value,
      options,
      onValueChange,
      onSearchChange,
      error,
      name,
      onChange: rhfOnChange,
      onBlur: rhfOnBlur,
    },
    ref
  ) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const {
      open,
      setOpen,
      query,
      setQuery,
      filtered,
      selected,
      hasValue,
    } = useAutocomplete({ value, options, onSearchChange });

    const id = label.toLowerCase().replace(/\s+/g, "-");

    // outside click
    useEffect(() => {
      const handler = (e: MouseEvent) => {
        if (!wrapperRef.current?.contains(e.target as Node)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }, [setOpen]);

    const fireRHF = (v: string) => {
      rhfOnChange?.({ target: { name, value: v } });
    };

    const handleSelect = (opt: any) => {
      onValueChange(opt.value);
      setQuery(opt.label);
      fireRHF(opt.value);
      setOpen(false);
    };

    return (
      <div ref={wrapperRef} className="relative w-full">
        <FloatingFieldShell
          id={id}
          label={label}
          error={error}
          hasValue={hasValue}
          isOpen={open}
        >
          <div className="relative flex items-center">
            <AutocompleteInput
              id={id}
              name={name}
              value={query}
              setOpen={setOpen}
              setQuery={setQuery}
              onBlur={rhfOnBlur}
              inputRef={ref}
            />
          </div>
        </FloatingFieldShell>

        <AutocompleteDropdown
          open={open}
          filtered={filtered}
          value={value}
          query={query}
          onSelect={handleSelect}
        />
      </div>
    );
  }
);

AutocompleteSelect.displayName = "AutocompleteSelect";