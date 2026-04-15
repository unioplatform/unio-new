import React, { useState } from "react";
import clsx from "clsx";
import FloatingFieldShell from "../FloatingFieldShell";
import { UsernameField } from "./UsernameField";
import { UsernameStatus } from "./UsernameStatus";
import { UsernameSuggestions } from "./UsernameSuggestions";
import { Text } from "../../text"; // Import your Text primitive

export interface UsernameInputProps {
  label: string;
  value?: string;
  status: "idle" | "checking" | "available" | "taken";
  suggestions: string[];
  error?: string;
  isSubmitted: boolean;
  onChange: (value: string) => void;
  onSelectSuggestion: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const UsernameInput: React.FC<UsernameInputProps> = ({
  label,
  value,
  status,
  suggestions,
  error,
  isSubmitted,
  onChange,
  onSelectSuggestion,
  onFocus,
  onBlur,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const id = label.replace(/\s+/g, "-").toLowerCase();
  const safeValue = value ?? "";
  const trimmed = safeValue.trim();
  const hasValue = trimmed !== "";
  
  // Logic fix: Only show taken state if there is actual input
  const isTaken = status === "taken" && hasValue;

  const shouldShowZodError =
    !!error &&
    isSubmitted &&
    trimmed === "" &&
    status !== "taken" &&
    status !== "checking";

  const visualError = shouldShowZodError ? error : undefined;

  return (
    // ✨ Removed h-[96px] -> Use a tight container
    <div className="relative w-full flex flex-col">
      <FloatingFieldShell
        id={id}
        label={label}
        hasValue={hasValue}
        error={visualError}
        isOpen={isFocused}
      >
        <UsernameField
          id={id}
          value={safeValue}
          onChange={onChange}
          error={visualError}
          onFocus={() => {
            setIsFocused(true);
            onFocus?.();
          }}
          onBlur={() => {
            setIsFocused(false);
            onBlur?.();
          }}
        />
      </FloatingFieldShell>

      {/* ✨ Sub-input area: Reduced padding and tightened vertical space */}
      <div
        className={clsx(
          "w-full pt-1 transition-all duration-200 min-h-[1.25rem]",
          (isTaken || shouldShowZodError || (status !== "idle" && hasValue)) 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-1"
        )}
      >
        {shouldShowZodError ? (
          <Text size="tiny" weight="bold" className="text-red-500">{error}</Text>
        ) : (
          <div className="flex flex-col gap-0.5">
            <UsernameStatus status={status} hasValue={hasValue} />
            
            {isTaken && suggestions.length > 0 && (
              <UsernameSuggestions
                suggestions={suggestions}
                onSelect={onSelectSuggestion}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

UsernameInput.displayName = "UsernameInput";