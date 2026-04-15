import React from "react";
import { Avatar, Text, cn } from "@unio/ui";

interface NotificationRowProps {
  displayName: string;
  description: string | React.ReactNode;
  avatarUrl?: string | null;
  initials: string;
  timeAgo: string;
  read: boolean;
  status?: any; // e.g., "ONLINE"
  careerName?: string;
  actions?: React.ReactNode; // Inject Accept/Decline buttons here
  onClick?: () => void;
}

export const NotificationRow: React.FC<NotificationRowProps> = ({
  displayName,
  description,
  avatarUrl,
  initials,
  timeAgo,
  read,
  status,
  careerName,
  actions,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative flex gap-4 px-4 py-3 cursor-pointer transition-colors duration-200",
        "border-b border-border/10 last:border-0 hover:bg-accent-bg/10",
        !read && "bg-accent-bg/5"
      )}
    >
      {/* 👤 AVATAR */}
      <div className="relative mt-0.5 shrink-0">
        <Avatar
          size="md"
          photo={avatarUrl}
          initials={initials}
          status={status}
          className="rounded-xl"
        />
      </div>

      {/* 📝 CONTENT */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Text weight="bold" className="truncate text-[15px] leading-tight">
              {displayName}
            </Text>
            {careerName && (
              <Text size="tiny" tone="tertiary" truncate className="mt-0.5">
                {careerName}
              </Text>
            )}
          </div>

          {/* Unread dot and Time */}
          <div className="flex items-center gap-2 shrink-0 pt-0.5">
            {!read && <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />}
            <Text size="tiny" className="font-bold opacity-40 uppercase">
              {timeAgo}
            </Text>
          </div>
        </div>

        <div className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-text-secondary">
          {description}
        </div>

        {/* ⚡ ACTIONS (Injected from apps/web) */}
        {actions && (
          <div 
            className="mt-3 flex items-center gap-2" 
            onClick={(e) => e.stopPropagation()}
          >
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};