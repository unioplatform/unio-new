/* packages/ui/src/primitives/fields/PasswordInput.tsx */
import React, { useState, useEffect, forwardRef } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "../../utils/cn";
import FloatingFieldShell from "./FloatingFieldShell";

export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, error, value, onChange, onBlur, onFocus, className, ...rest }, ref) => {
    const id = rest.id || label.replace(/\s+/g, "-").toLowerCase();

    const [visible, setVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    // Sync label state
    useEffect(() => {
      if (value !== undefined) {
        setHasValue(String(value).trim() !== "");
      }
    }, [value]);

    return (
      <div className="relative w-full">
        <FloatingFieldShell
          id={id}
          label={label}
          error={error}
          hasValue={hasValue}
          isOpen={isFocused}
        >
          <input
            id={id}
            ref={ref}
            type={visible ? "text" : "password"}
            placeholder=" "
            autoComplete="current-password"
            {...(value !== undefined ? { value } : {})}
            {...rest}
            className={cn(
              "peer w-full bg-transparent",
              /* Matches the FloatingInput and Divider style */
              "border-b border-text-tertiary/30 focus:border-accent",
              "text-[0.95rem] font-ui text-text-primary",
              "h-[48px] pt-5 pb-1 pr-10 outline-none transition-colors duration-200",
              className
            )}
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
        </FloatingFieldShell>

        {/* 👁️ Eye Toggle */}
        <button
          type="button"
          tabIndex={-1}
          onClick={() => setVisible((prev) => !prev)}
          /* text-text-tertiary/60 makes the icon slightly more visible than the line, 
             but still quiet until hovered or focused */
          className="absolute right-0 top-[22px] text-text-tertiary/60 hover:text-accent transition-colors"
        >
          {visible ? <EyeOff size={18} strokeWidth={2} /> : <Eye size={18} strokeWidth={2} />}
        </button>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";