/* packages/ui/src/primitives/fields/FloatingInput.tsx */

import React, { useState, useEffect, forwardRef } from "react";
import { cn } from "../../utils/cn";
import FloatingFieldShell from "./FloatingFieldShell";
import { InputBase } from "./InputBase";

export interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
}

export const FloatingInput = forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ label, error, icon, className, value, onChange, onFocus, onBlur, ...rest }, ref) => {
    const id = rest.id || label.replace(/\s+/g, "-").toLowerCase();
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    useEffect(() => {
      if (value !== undefined) {
        setHasValue(String(value).trim() !== "");
      }
    }, [value]);

    return (
      <FloatingFieldShell
        id={id}
        label={label}
        error={error}
        hasValue={hasValue}
        isOpen={isFocused}
      >
        <div className="relative w-full">
          {icon && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center pointer-events-none text-text-tertiary">
              {icon}
            </div>
          )}

          <InputBase
            id={id}
            ref={ref}
            placeholder=" "
            {...(value !== undefined ? { value } : {})}
            {...rest}
            className={cn(icon && "pl-6", className)}
            onFocus={(e) => {
              setIsFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              onBlur?.(e);
            }}
            onChange={(e) => {
              setHasValue(e.target.value.trim() !== "");
              onChange?.(e);
            }}
          />
        </div>
      </FloatingFieldShell>
    );
  }
);

FloatingInput.displayName = "FloatingInput";