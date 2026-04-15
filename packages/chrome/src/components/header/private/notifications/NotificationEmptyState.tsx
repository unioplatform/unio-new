import React from "react";
import { BellOff } from "lucide-react";
import { Text } from "@unio/ui";

export const NotificationEmptyState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in zoom-in-95 duration-500">
      {/* Decorative Icon Wrapper */}
      <div className="mb-6 relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-accent/10 rounded-2xl blur-2xl opacity-40 animate-pulse" />
        
        <div className="relative h-16 w-16 rounded-2xl bg-accent-bg/30 border border-accent/20 flex items-center justify-center shadow-inner">
          <BellOff className="w-7 h-7 text-text-tertiary/60" />
        </div>
      </div>

      <Text
        size="medium"
        weight="bold"
        uppercase
        tracking="tight"
        className="mb-2"
      >
        All caught up
      </Text>

      <Text
        size="tiny"
        tone="tertiary"
        weight="semibold"
        uppercase
        tracking="widest"
        className="opacity-70 max-w-[220px]"
      >
        New connections and alerts will appear here
      </Text>
    </div>
  );
};