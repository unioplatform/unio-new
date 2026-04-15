/* packages/lib/src/utils/auth/toAuthUser.ts */
import type { 
  AuthUser, 
  SubscriptionTier, 
  AccountRole, 
  UserStatus, 
  UserSettings 
} from "@unio/types";

/**
 * 🗺️ MAPPING OBJECTS
 * Used for safe normalization without 'as' assertions.
 */
const ROLE_MAP: Record<string, AccountRole> = {
  USER: "USER",
  BUSINESS: "BUSINESS",
  ADMIN: "ADMIN",
};

const TIER_MAP: Record<string, SubscriptionTier> = {
  BASE: "BASE",
  BASIC: "BASE", 
  PREMIUM: "PREMIUM",
  ELITE: "ELITE",
};

const STATUS_MAP: Record<string, UserStatus> = {
  ONLINE: "ONLINE",
  AWAY: "AWAY",
  OFFLINE: "OFFLINE",
  BUSY: "BUSY",
};

interface RawApiUser {
  id: string;
  email: string;
  username: string;
  slug?: string;
  isVerified?: boolean;
  firstName?: string;
  lastName?: string;
  first_name?: string; 
  last_name?: string;  
  tier?: string;
  subscription?: string;
  accountRole?: string;
  status?: string;
  profilePicUrl?: string;
  userSettings?: UserSettings | null;
  profile?: {
    firstName?: string;
    lastName?: string;
    verified?: boolean;
    tier?: string;
    bio?: string | null;
    headline?: string | null;
    location?: string | null;
    avatarUrl?: string;
    profilePicUrl?: string;
  };
}

/**
 * 🛡️ toAuthUser
 * The Single Source of Truth for transforming API users into session users.
 */
export function toAuthUser(user: RawApiUser | null | undefined): AuthUser | null {
  if (!user) return null;

  const profileData = user.profile || {};

  // 1. Safe Enum Normalization
  const normalizedRole = user.accountRole 
    ? ROLE_MAP[user.accountRole.toUpperCase()] 
    : "USER";
  
  const rawTierKey = (user.tier || user.subscription || profileData.tier || "BASE").toUpperCase();
  const normalizedTier = TIER_MAP[rawTierKey] ?? "BASE";

  const normalizedStatus = user.status 
    ? STATUS_MAP[user.status.toUpperCase()] 
    : "ONLINE";

  return {
    id: user.id,
    email: user.email,
    username: user.username,
    slug: user.slug ?? user.username,
    isVerified: user.isVerified ?? profileData.verified ?? false,

    // Resolve Identity
    firstName: user.firstName ?? profileData.firstName ?? user.first_name ?? null,
    lastName: user.lastName ?? profileData.lastName ?? user.last_name ?? null,

    // Professional Context
    profile: {
      bio: profileData.bio ?? null,
      headline: profileData.headline ?? null,
      location: profileData.location ?? null,
    },

    // Strict Types
    accountRole: normalizedRole ?? "USER",
    tier: normalizedTier,
    status: normalizedStatus ?? "ONLINE",

    // Media
    profilePicUrl: user.profilePicUrl ?? profileData.avatarUrl ?? profileData.profilePicUrl ?? null,

    // Settings (Critical for Theme Engine)
    userSettings: user.userSettings ?? null,
  };
}