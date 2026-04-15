import React from "react";
import { ChevronDown } from "lucide-react";
import { Avatar, Text, cn } from "@unio/ui";

interface UserMenuTriggerProps {
  user: {
    fullName: string;
    avatarUrl?: string | null;
    initials: string;
    careerName?: string;
    status: any; // Using your UserStatus type
  };
  open: boolean;
}

export const UserMenuTrigger: React.FC<UserMenuTriggerProps> = ({ user, open }) => {
  return (
    <button
      type="button"
      className={cn(
        "group flex items-center gap-3 rounded-full py-1 pl-1 pr-3",
        "transition-colors outline-none select-none",
        open ? "bg-accent-bg/50" : "hover:bg-accent-bg/30"
      )}
    >
      <Avatar
        photo={user.avatarUrl}
        initials={user.initials}
        size="sm"
        status={user.status}
      />

      <div className="hidden min-w-0 max-w-[140px] flex-col items-start text-left md:flex">
        <Text size="small" weight="semibold" truncate>
          {user.fullName}
        </Text>
        {user.careerName && (
          <Text size="tiny" tone="tertiary" truncate>
            {user.careerName}
          </Text>
        )}
      </div>

      <ChevronDown
        className={cn(
          "ml-1 h-4 w-4 text-text-tertiary transition-transform duration-200",
          open ? "rotate-180 text-accent" : ""
        )}
      />
    </button>
  );
};