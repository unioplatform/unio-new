/* packages/ui/src/components/CalendarInput/CalendarTrigger.tsx */
import clsx from "clsx";
import { Calendar } from "lucide-react";

export const CalendarTrigger = ({
  open,
  value,
  displayDate,
  onClick,
  error,
  disabled,
}: any) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "flex items-center justify-between w-full text-left",
        /* 🛠️ FIX: Match SelectTrigger border logic */
        "border-b transition-colors duration-200",
        
        // Use the exact same tokens as SelectTrigger
        error 
          ? "border-red-500" 
          : open 
            ? "border-accent" 
            : "border-text-tertiary/30", 
        
        "h-[46px] pt-6 pb-2 outline-none",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      <span className={clsx(
        "text-[0.95rem] font-ui", 
        value ? "text-text-primary" : "text-transparent"
      )}>
        {displayDate}
      </span>
      
      <Calendar 
        className={clsx(
          "w-4 h-4 transition-colors duration-200", 
          open ? "text-accent" : "text-text-tertiary"
        )} 
      />
    </button>
  );
};