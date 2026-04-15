/* CalendarGrid.tsx */

import clsx from "clsx";

export const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export const CalendarGrid = ({
  days,
  year,
  month,
  value,
  onSelectDay,
}: any) => {
  return (
    <div className="grid grid-cols-7 gap-1">
      {DAYS.map((d) => (
        <div key={d} className="h-8 flex items-center justify-center text-[10px] font-bold text-text-tertiary">
          {d}
        </div>
      ))}

      {days.map((day: any, i: number) => (
        <div key={i} className="aspect-square flex items-center justify-center">
          {day && (
            <button
              onClick={() => onSelectDay(day)}
              className={clsx(
                "w-8 h-8 rounded-full text-sm",
                new Date(value || "").toDateString() ===
                  new Date(year, month, day).toDateString()
                  ? "bg-accent text-white"
                  : "hover:bg-surface-2"
              )}
            >
              {day}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};