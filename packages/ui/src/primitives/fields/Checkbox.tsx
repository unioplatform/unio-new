/* packages/ui/src/primitives/fields/Checkbox.tsx */
import React from "react";
import clsx from "clsx";

export interface CheckboxProps {
  label: React.ReactNode;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  name?: string;
  onBlur?: (e: any) => void;
  className?: string;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      checked,
      onChange,
      disabled,
      name,
      onBlur,
      className,
      error,
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-1">
        <label
          className={clsx(
            "flex items-center gap-2.5 select-none group", // group helps with hover states
            disabled ? "cursor-not-allowed opacity-30" : "cursor-pointer",
            className
          )}
        >
          {/* Hidden native input */}
          <input
            type="checkbox"
            ref={ref}
            name={name}
            checked={checked}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            className="sr-only peer"
          />

          {/* Custom checkbox UI */}
          <div
            className={clsx(
              `
              w-[18px] h-[18px]
              rounded-[4px]
              flex items-center justify-center
              border
              bg-transparent
              transition-all duration-200
              peer-checked:[&_svg]:opacity-100
              peer-focus-visible:ring-2 peer-focus-visible:ring-accent/40
              `,
              /* ✨ THEME FIX: Swapped border-border-soft for tertiary with alpha */
              error
                ? "border-red-500"
                : "border-text-tertiary/30 group-hover:border-text-tertiary/50 peer-checked:border-accent"
            )}
          >
            <svg
              className="w-3 h-3 text-accent opacity-0 transition-opacity duration-200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4" // Slightly thicker stroke for the checkmark
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Label: ✨ Shrunk to match your tiny text rhythm */}
          <span className="text-[13px] text-text-primary leading-tight font-ui">
            {label}
          </span>
        </label>

        {/* Error message */}
        {error && (
          <span className="text-[10px] font-bold text-red-500 px-1">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";