/* packages/ui/src/components/UsernameInput/UsernameField.tsx */
import React from "react";
import { InputBase } from "../InputBase";

interface UsernameFieldProps {
  id: string;
  value: string;
  onChange: (val: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  error?: string;
}

export const UsernameField: React.FC<UsernameFieldProps> = ({
  id,
  value,
  onChange,
  onFocus,
  onBlur,
  error,
}) => {
  return (
    <InputBase
      id={id}
      value={value}
      placeholder=" " // Required for CSS peer-placeholder-shown logic
      onChange={(e) => onChange(e.target.value)}
      onFocus={onFocus} // ✅ Propagates focus state up
      onBlur={onBlur}   // ✅ Propagates blur state up
      error={error}
    />
  );
};

UsernameField.displayName = "UsernameField";