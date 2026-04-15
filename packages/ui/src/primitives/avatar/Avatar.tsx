// -----------------------------------------------------------------------------
// 📁 packages/ui/src/components/Avatar.tsx — Refined Sizing Scale
// -----------------------------------------------------------------------------

import React from "react";
import { cn } from "../../utils/cn";
import type { AvatarProps } from "./Avatar.types";

const sizeClasses = {
  xs: "h-6 w-6 text-[10px]",    // 24px
  sm: "h-8 w-8 text-xs",        // 32px
  md: "h-9 w-9 text-sm",     // 40px
  lg: "h-10 w-10 text-base",     // 44px (Bridge the gap)
  xl: "h-12 w-12 text-base",    // 48px (Used to be lg)
  "2xl": "h-28 w-28 text-xl",   // 64px (Used to be xl)
  "3xl": "h-24 w-24 text-2xl",  // 96px (Cleaner than the old 112px)
};

const radiusClasses = {
  xs: "rounded-md",
  sm: "rounded-md",
  md: "rounded-lg",
  lg: "rounded-xl",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
};

const statusColor = {
  ONLINE: "bg-emerald-500",
  AWAY: "bg-amber-400",
  OFFLINE: "bg-zinc-400",
  BUSY: "bg-red-500",
};

export const Avatar: React.FC<AvatarProps> = ({
  initials,
  color = "bg-accent",
  size = "sm",
  className,
  photo = null,
  status,
}) => {
  const hasExternalSize = className?.includes("h-") || className?.includes("w-");
  const hasExternalRadius = className?.includes("rounded-");

  return (
    <div className={cn("relative inline-block", hasExternalSize && className)}>
      <div
        className={cn(
          "relative flex shrink-0 items-center justify-center overflow-hidden transition-all duration-200 shadow-sm",
          !hasExternalSize && sizeClasses[size as keyof typeof sizeClasses],
          !hasExternalRadius && radiusClasses[size as keyof typeof radiusClasses],
          !photo && color,
          className
        )}
      >
        {photo ? (
          <img
            src={photo}
            alt="avatar"
            className={cn(
              "h-full w-full object-cover",
              !hasExternalRadius && radiusClasses[size as keyof typeof radiusClasses],
              hasExternalRadius && className
            )}
          />
        ) : (
          <span className="font-semibold text-white/90 leading-none">
            {initials.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>

      {status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 block shadow-sm ring-2 ring-background rotate-45",
            statusColor[status as keyof typeof statusColor],
            "h-2 w-2 md:h-2.5 md:w-2.5 rounded-sm"
          )}
        />
      )}
    </div>
  );
};