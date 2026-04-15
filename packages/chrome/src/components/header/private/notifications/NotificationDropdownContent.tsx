import React from "react";
import { Text } from "@unio/ui";

interface NotificationDropdownContentProps {
  unreadCount: number;
  onMarkAllRead: () => void;
  onViewAll: () => void;
  children: React.ReactNode; // This is where the list of NotificationRows goes
  loading?: boolean;
}

export const NotificationDropdownContent: React.FC<NotificationDropdownContentProps> = ({
  unreadCount,
  onMarkAllRead,
  onViewAll,
  children,
  loading
}) => {
  return (
    <div className="flex flex-col h-[540px] w-[380px] bg-background rounded-3xl border border-border/40 shadow-2xl overflow-hidden">
      <div className="px-6 pt-7 pb-5 bg-gradient-to-b from-accent-bg/10 to-transparent">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-2xl font-black tracking-tight text-text-primary leading-none">Activity</h2>
            {!loading && unreadCount > 0 && (
              <Text className="mt-2 text-[11px] font-bold uppercase tracking-wide text-accent">
                {unreadCount} new items
              </Text>
            )}
          </div>
          {unreadCount > 0 && (
            <button onClick={onMarkAllRead} className="text-[11px] font-bold uppercase text-text-tertiary hover:text-accent transition-colors">
              Mark all
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-2 custom-scrollbar">
        {children}
      </div>

      <div className="px-6 py-4 border-t border-border/40 bg-background/50">
        <button onClick={onViewAll} className="text-xs font-bold text-text-tertiary hover:text-accent transition-all">
          View all activity →
        </button>
      </div>
    </div>
  );
};