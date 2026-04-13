import { AccountRole, SubscriptionTier, UserStatus } from "../shared/constants";

export interface User {
  id: string;
  username: string;
  slug: string | null;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  profilePicUrl?: string | null;
  coverImageUrl?: string | null;
  status: UserStatus;
  subscription?: SubscriptionTier;
  accountRole?: AccountRole;
}