/* CalendarMonths.tsx */

export const MONTH_NAMES = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

export const CalendarMonths = ({ year, month, setViewDate, onSelect }: any) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {MONTH_NAMES.map((m, i) => (
        <button
          key={m}
          onClick={() => {
            setViewDate(new Date(year, i, 1));
            onSelect(i);
          }}
        >
          {m.substring(0, 3)}
        </button>
      ))}
    </div>
  );
};