/* Select.tsx */

import React, { useRef, useEffect, forwardRef } from "react";
import clsx from "clsx";
import FloatingFieldShell from "../FloatingFieldShell";
import { useSelect } from "./useSelect";
import { SelectTrigger } from "./SelectTrigger";
import { SelectDropdown } from "./SelectDropdown";

export interface SelectOptionType {
  label: string;
  value: string;
}

export interface SelectProps {
  label: string;
  value?: string;
  options: SelectOptionType[];
  onValueChange: (v: string) => void;
  error?: string;
  name?: string;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  className?: string;
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      label,
      value,
      options,
      onValueChange,
      error,
      name,
      onChange,
      onBlur,
      className,
    },
    ref
  ) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const { open, setOpen, selected, hasValue } = useSelect({
      value,
      options,
    });

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
      onChange?.({ target: { name, value: v } });
    };

    const handleSelect = (opt: SelectOptionType) => {
      onValueChange(opt.value);
      fireRHF(opt.value);
      setOpen(false);
    };

    return (
      <div ref={wrapperRef} className={clsx("relative w-full", className)}>
        <FloatingFieldShell
          id={id}
          label={label}
          error={error}
          hasValue={hasValue}
          isOpen={open}
        >
          <div ref={ref}>
            <SelectTrigger
              selected={selected}
              open={open}
              setOpen={setOpen}
              onBlur={onBlur}
            />
          </div>
        </FloatingFieldShell>

        <SelectDropdown
          open={open}
          options={options}
          value={value}
          onSelect={handleSelect}
        />
      </div>
    );
  }
);

Select.displayName = "Select";