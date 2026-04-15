import type { AppRoute } from "./types";

// PUBLIC FEATURE ROUTES
// import { authRoutes } from "@/features/public/auth/routes";
import { landingRoutes } from "@/features/public/landing/routes";

// PRIVATE FEATURE ROUTES
// import { messagesRoutes } from "@/features/private/messages/routes";
// import { profileRoutes } from "@/features/private/profile/routes";
import { dashboardRoutes } from "@/features/private/dashboard/routes"; 
import { feedRoutes } from "@/features/private/feed/routes";
import { communityRoutes } from "@/features/private/communitites/routes";
import { networkingRoutes } from "@/features/private/networking/routes";
import { messagesRoutes } from "@/features/private/messages/routes";
import { eventsRoutes } from "@/features/private/events/routes";
import { playgroundRoutes } from "@/features/private/playground/routes";

/**
 * Publicly accessible routes (Landing, Login, Signup, etc.)
 */
export const publicRoutes: AppRoute[] = [
  ...landingRoutes, 
  // ...authRoutes,
]; 
 
/**
 * Authenticated routes (Feed, Profile, Chat, etc.)
 */
export const privateRoutes: AppRoute[] = [
  ...dashboardRoutes,
  ...feedRoutes,
  ...communityRoutes,
  ...networkingRoutes,
  ...messagesRoutes,
  ...eventsRoutes,
  ...playgroundRoutes
  // ...profileRoutes,
   
];

