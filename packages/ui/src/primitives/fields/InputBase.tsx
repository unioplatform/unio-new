// -----------------------------------------------------------------------------
// 📁 packages/ui/src/primitives/fields/InputBase.tsx
// -----------------------------------------------------------------------------

import React, { forwardRef } from "react";
import { cn } from "../../utils/cn";

export interface InputBaseProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string; // ✅ NEW
}

export const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        aria-invalid={!!error} // ✅ accessibility + control
        className={cn(
          "peer w-full bg-transparent",
          "border-b transition-colors duration-200 outline-none",

          // 🎯 THE IMPORTANT PART
          error
            ? "border-red-500 focus:border-red-500"
            : "border-text-tertiary/30 focus:border-accent",

          "text-[0.95rem] font-ui text-text-primary",
          "h-[48px] pt-5 pb-1",

          className
        )}
      />
    );
  }
);

InputBase.displayName = "InputBase";