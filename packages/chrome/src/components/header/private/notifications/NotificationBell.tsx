import React from "react";
import { Bell } from "lucide-react";
import { cn } from "@unio/ui";

export interface NotificationBellProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  unreadCount: number;
}

export const NotificationBell = React.forwardRef<HTMLButtonElement, NotificationBellProps>(
  ({ unreadCount, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "relative flex h-11 w-11 items-center justify-center rounded-full transition-all",
          "hover:bg-accent-bg/40 text-text-tertiary hover:text-accent group active:scale-90",
          className
        )}
        {...props}
      >
        <Bell className="w-5 h-5 transition-transform group-hover:rotate-12" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 px-1 border-2 border-background shadow-sm">
            <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20" />
            <span className="relative text-[10px] font-black text-white leading-none">
              {unreadCount > 9 ? "9+" : unreadCount}
            </span>
          </span>
        )}
      </button>
    );
  }
);