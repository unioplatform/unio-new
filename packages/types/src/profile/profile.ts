import { SubscriptionTier, UserStatus } from "../shared/constants";
import { ConnectionStatus } from "./connection";

export interface ProfileExperience {
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

export interface ProfileEducation {
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
export interface ProfileDTO {
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

  // Professional Sections
  experiences: ProfileExperience[];
  education: ProfileEducation[];
  certifications: any[]; // We can expand this later
  
  // Dynamic UI States
  connectionStatus: ConnectionStatus;
  isConnection: boolean;
  hasPendingRequest: boolean;
}