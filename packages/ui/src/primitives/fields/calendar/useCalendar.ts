/* useCalendar.ts */

import { useState, useMemo } from "react";

export type CalendarView = "days" | "months" | "years";

export function useCalendar(
  value?: string,
  minYear = 1920,
  maxYear = new Date().getFullYear() + 10
) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<CalendarView>("days");

  const dateValue = value ? new Date(value) : new Date();
  const [viewDate, setViewDate] = useState(new Date(dateValue));

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const days = useMemo(() => {
    const arr: (number | null)[] = [];
    for (let i = 0; i < firstDayOfMonth; i++) arr.push(null);
    for (let d = 1; d <= daysInMonth; d++) arr.push(d);
    return arr;
  }, [year, month, daysInMonth, firstDayOfMonth]);

  const years = useMemo(() => {
    const arr: number[] = [];
    for (let y = maxYear; y >= minYear; y--) arr.push(y);
    return arr;
  }, [minYear, maxYear]);

  return {
    open,
    setOpen,
    view,
    setView,
    viewDate,
    setViewDate,
    year,
    month,
    days,
    years,
  };
}