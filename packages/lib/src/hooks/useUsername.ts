/* packages/lib/src/hooks/useUsername.ts */
import { useState } from "react";
import { authApi } from "@unio/api"; // Everything is in API now

export function useUsername(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const [status, setStatus] = useState<"idle" | "checking" | "available" | "taken">("idle");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  async function onChange(next: string) {
    setValue(next);

    if (next === initialValue && next !== "") {
      setStatus("available");
      setSuggestions([]);
      return;
    }

    if (!next || next.length < 3) {
      setStatus("idle");
      setSuggestions([]);
      return;
    }

    setStatus("checking");

    try {
      // Assuming checkUsername is exported from authApi or directly from @unio/api
      const res = await authApi.checkUsername(next); 
      if (res.available) {
        setStatus("available");
        setSuggestions([]);
      } else {
        setStatus("taken");
        setSuggestions(res.suggestions ?? []);
      }
    } catch {
      setStatus("idle");
    }
  }

  return { value, status, suggestions, setValue, onChange };
}