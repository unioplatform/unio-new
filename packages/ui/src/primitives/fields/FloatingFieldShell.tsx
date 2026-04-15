// -----------------------------------------------------------------------------
// 📁 packages/ui/src/primitives/fields/FloatingFieldShell.tsx
// -----------------------------------------------------------------------------

import React from "react";
import { cn } from "../../utils/cn";
import { Text } from "../text";

interface FloatingFieldShellProps {
  id: string;
  label: string;
  error?: string;
  hasValue: boolean;
  isOpen?: boolean;
  children: React.ReactNode;
}

const FloatingFieldShell: React.FC<FloatingFieldShellProps> = ({
  id,
  label,
  error,
  hasValue,
  isOpen,
  children,
}) => {
  const isFloating = hasValue || isOpen;

  return (
    <div className="relative w-full group">
      {/* 🧱 INPUT */}
      {children}

      {/* 🏷️ FLOATING LABEL */}
      <label
        htmlFor={id}
        className={cn(
          "absolute left-0 top-4 transition-all duration-200 pointer-events-none select-none",
          "text-text-tertiary",
          isFloating
            ? "-translate-y-5 text-xs text-accent font-medium"
            : "translate-y-0 text-sm"
        )}
      >
        {label}
      </label>

      {/* ⚠️ ERROR MESSAGE */}
      {error && (
        <div className="mt-1.5">
          <Text
            size="tiny"
            tone="danger"
            className="animate-in slide-in-from-top-1 duration-200 block"
          >
            {error}
          </Text>
        </div>
      )}
    </div>
  );
};

export default FloatingFieldShell;