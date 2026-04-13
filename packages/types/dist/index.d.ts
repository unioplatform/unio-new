/**
 * 🛡️ Account Roles
 * Defines the permission levels across the Unio ecosystem.
 */
type AccountRole = "USER" | "BUSINESS" | "ADMIN";
/**
 * 💎 Subscription Tiers
 * Controlled by the billing engine.
 */
type SubscriptionTier = "BASE" | "PREMIUM" | "ELITE";
/**
 * 🟢 User Presence
 * Real-time status indicators.
 */
type UserStatus = "ONLINE" | "AWAY" | "OFFLINE" | "BUSY";

interface AuthUser {
    id: string;
    email: string;
    username: string;
    slug: string | null;
    firstName?: string | null;
    lastName?: string | null;
    profilePicUrl?: string | null;
    status: UserStatus;
    isVerified: boolean;
    accountRole: AccountRole;
    tier: SubscriptionTier;
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
interface AuthReturn {
    user: AuthUser;
    accessToken: string;
}

interface LoginPayload {
    emailOrUsername: string;
    password: string;
}
interface SignupPayload {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    birthday: string;
    gender?: string;
    careerId?: string;
    termsAccepted: boolean;
}

interface User {
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

/**
 * ✅ CANONICAL CONNECTION STATUS
 * Defines the relationship state between the viewer and the profile owner.
 */
type ConnectionStatus = "NONE" | "PENDING" | "CONNECTED" | "BLOCKED";
interface ConnectionStats {
    connectionsCount: number;
    mutualConnections: number;
    engagementRate: string;
    discussionsCount: number;
    sharesCount: number;
}

interface ProfileExperience {
    id: string;
    company: string;
    role: string;
    employmentType: string;
    location?: string | null;
    locationType?: string;
    startDate: string;
    endDate?: string;
    isCurrent: boolean;
    description?: string;
    skills?: string[];
}
interface ProfileEducation {
    id: string;
    schoolName: string;
    degree?: string | null;
    fieldOfStudy?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    description?: string | null;
    skills?: string[];
}
/**
 * ✅ ProfileDTO
 * The standardized object for any public or private profile view.
 */
interface ProfileDTO {
    id: string;
    username: string;
    firstName?: string;
    lastName?: string;
    displayName: string;
    headline: string | null;
    bio: string | null;
    location?: string | null;
    avatarUrl: string;
    coverUrl?: string | null;
    tier: SubscriptionTier;
    status: UserStatus;
    verified: boolean;
    experiences: ProfileExperience[];
    education: ProfileEducation[];
    certifications: any[];
    connectionStatus: ConnectionStatus;
    isConnection: boolean;
    hasPendingRequest: boolean;
}

<<<<<<< HEAD
interface SubscriptionPackage {
    tier: SubscriptionTier;
    description: string;
    currency: "$" | "£" | "€";
    amount: number;
    period: string;
    displayPrice?: string;
    features: string[];
    highlight?: boolean;
    badge?: string;
}

export type { AccountRole, AuthReturn, AuthUser, ConnectionStats, ConnectionStatus, LoginPayload, ProfileDTO, ProfileEducation, ProfileExperience, SignupPayload, SubscriptionPackage, SubscriptionTier, User, UserStatus };
=======
export type { AccountRole, AuthReturn, AuthUser, ConnectionStats, ConnectionStatus, LoginPayload, ProfileDTO, ProfileEducation, ProfileExperience, SignupPayload, SubscriptionTier, User, UserStatus };
>>>>>>> 9606bfe728f0728e4a01299924ecccb4bcad0167
