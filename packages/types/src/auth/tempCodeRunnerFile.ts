import { AccountRole, SubscriptionTier, UserStatus } from "../shared/constants";

export interface UserSettings {
  theme?: "light" | "dark" | "system";
  notificationsEnabled?: boolean;
}

export interface AuthUser {
  id: string;
  email: string;
  username: string;
  slug: string | null;
  firstName?: string | null;
  lastName?: string | null;
  profilePicUrl?: string | null;
  status: UserStatus; // ✅ Changed from any to UserStatus
  isVerified: boolean;
  accountRole: AccountRole;
  tier: SubscriptionTier;
  userSettings: UserSettings | null;
  
  profile?: {
    bio?: string | null;
    headline?: string | null;
    location?: string | null;
  } | null;
}

/**
 * 🔐 AuthReturn
 * The standard response from /login, /signup, and /refresh.
 * Includes the user session data and the access token.
 */
export interface AuthReturn {
  user: AuthUser;
  accessToken: string;
}