// -----------------------------------------------------------------------------
// 📁 Avatar.types.ts
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// 📁 packages/ui/src/components/avatar/Avatar.types.ts
// -----------------------------------------------------------------------------

import { UserStatus } from "@unio/types";

/**
 * Standardized Avatar Sizes
 * lg (48px) - Optimized for Notification Dropdowns
 * 2xl (112px) - Optimized for Profile Headers
 */
export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl"; 

export type AvatarProps = {
  initials: string;
  color?: string;
  size?: AvatarSize;
  className?: string;
  photo?: string | null;
  status?: UserStatus;
}; 