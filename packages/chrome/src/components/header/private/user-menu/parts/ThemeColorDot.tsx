import React from "react";
import { Check } from "lucide-react";
import { cn } from "@unio/ui";

interface ThemeColorDotProps {
  color: string; // Tailwind class like bg-blue-500
  selected?: boolean;
  onClick?: () => void;
}

export const ThemeColorDot: React.FC<ThemeColorDotProps> = ({ color, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "h-4 w-4 rounded-full transition-all hover:scale-125 active:scale-95",
        color,
        selected ? "ring-2 ring-offset-2 ring-offset-background ring-accent" : "opacity-80"
      )}
    >
      {selected && <Check className="h-2.5 w-2.5 text-white mx-auto stroke-[3px]" />}
    </button>
  );
};