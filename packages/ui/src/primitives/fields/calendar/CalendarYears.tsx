/* packages/ui/src/components/CalendarInput/CalendarYears.tsx */
import React from "react";
import { cn } from "../../../utils";

export const CalendarYears = ({ years, year, onSelect }: any) => {
  const currentYear = new Date().getFullYear();

  // ✨ Logic: Only show years up to the current year
  const validYears = years.filter((y: number) => y <= currentYear);

  return (
    /* ✨ Shrunk: Tightened gap and added max-height for density */
    <div className="grid grid-cols-4 gap-1.5 max-h-[200px] overflow-y-auto pr-1 scrollbar-hide">
      {validYears.map((y: number) => {
        const isSelected = y === year;

        return (
          <button
            key={y}
            type="button"
            onClick={() => onSelect(y)}
            className={cn(
              "py-2 text-xs rounded-md transition-all duration-200",
              isSelected
                ? "bg-accent text-white font-bold"
                : "text-text-secondary hover:bg-accent-bg hover:text-accent"
            )}
          >
            {y}
          </button>
        );
      })}
    </div>
  );
};