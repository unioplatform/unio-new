import React, { useRef, useEffect, useMemo } from "react";
import FloatingFieldShell from "../FloatingFieldShell";
import { useCalendar } from "./useCalendar";
import { CalendarTrigger } from "./CalendarTrigger";
import { CalendarGrid } from "./CalendarGrid";
import { CalendarMonths } from "./CalendarMonths";
import { CalendarYears } from "./CalendarYears";
import { MONTH_NAMES } from "./CalendarMonths";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import clsx from "clsx";

export interface CalendarInputProps {
  label: string;
  value?: string;
  onChange: (v: string) => void;
  error?: string;
  disabled?: boolean;
  minYear?: number;
  maxYear?: number;
}

export const CalendarInput: React.FC<CalendarInputProps> = ({
  label,
  value,
  onChange,
  error,
  disabled,
  minYear,
  maxYear,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const {
    open,
    setOpen,
    view,
    setView,
    year,
    month,
    days,
    years,
    viewDate,
    setViewDate,
  } = useCalendar(value, minYear, maxYear);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [setOpen]);

  const displayDate = useMemo(() => {
    if (!value) return "";
    return new Date(value).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }, [value]);

  const changeMonth = (offset: number) => {
    setViewDate(new Date(year, month + offset, 1));
  };

  return (
    <div ref={ref} className="relative w-full">
      <FloatingFieldShell
        id={label}
        label={label}
        hasValue={!!value}
        isOpen={open}
        error={error}
      >
        <CalendarTrigger
          open={open}
          value={value}
          displayDate={displayDate}
          onClick={() => setOpen(!open)}
          error={error}
          disabled={disabled}
        />
      </FloatingFieldShell>

      {open && (
        /* ✨ Fixed Colors: bg-background, border-border-subtle, shadow-sm */
        <div className="absolute z-50 mt-2 w-[280px] bg-background border border-border-subtle rounded-unio-lg shadow-lg p-3 animate-in fade-in zoom-in-95 duration-200">
          
          {/* HEADER */}
          <div className="flex items-center justify-between mb-3">
            <button
              type="button"
              onClick={() => setView(view === "years" ? "days" : "years")}
              className="flex flex-col items-start group outline-none"
            >
              <div className="flex items-center gap-1">
                {/* ✨ Fixed: text-accent */}
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest">
                  {year}
                </span>
                <ChevronDown
                  size={10}
                  className={clsx(
                    "text-accent transition-transform",
                    view === "years" && "rotate-180"
                  )}
                />
              </div>

              {/* ✨ Fixed: text-text-primary */}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  setView("months");
                }}
                className="text-base font-bold text-text-primary leading-tight group-hover:text-accent transition-colors"
              >
                {MONTH_NAMES[month]}
              </span>
            </button>

            {view === "days" && (
              <div className="flex gap-1">
                <NavBtn onClick={() => changeMonth(-1)} icon={<ChevronLeft size={14} />} />
                <NavBtn onClick={() => changeMonth(1)} icon={<ChevronRight size={14} />} />
              </div>
            )}
          </div>

          {/* BODY */}
          <div className="min-h-[200px]">
            {view === "years" && (
              <CalendarYears
                years={years}
                year={year}
                onSelect={(y: number) => {
                  setViewDate(new Date(y, month, 1));
                  setView("months");
                }}
              />
            )}

            {view === "months" && (
              <CalendarMonths
                year={year}
                month={month}
                setViewDate={setViewDate}
                onSelect={(i: number) => {
                  setViewDate(new Date(year, i, 1));
                  setView("days");
                }}
              />
            )}

            {view === "days" && (
              <CalendarGrid
                days={days}
                year={year}
                month={month}
                value={value}
                onSelectDay={(d: number) => {
                  const date = new Date(year, month, d);
                  onChange(date.toISOString().split("T")[0]);
                  setOpen(false);
                }}
              />
            )}
          </div>

          {/* FOOTER */}
          {/* ✨ Fixed: border-border-faint */}
          <div className="mt-3 pt-2 border-t border-border-faint flex justify-end">
            <button
              type="button"
              onClick={() => setOpen(false)}
              /* ✨ Fixed: text-text-tertiary */
              className="text-[10px] font-bold text-text-tertiary hover:text-text-primary px-2 py-1 transition-colors"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const NavBtn = ({
  onClick,
  icon,
}: {
  onClick: () => void;
  icon: React.ReactNode;
}) => (
  <button
    type="button"
    onClick={(e) => {
      e.stopPropagation();
      onClick();
    }}
    /* ✨ Fixed: border-border-faint, hover:bg-accent-bg, text-text-secondary */
    className="w-7 h-7 flex items-center justify-center rounded-md border border-border-faint hover:bg-accent-bg text-text-secondary transition-colors"
  >
    {icon}
  </button>
);