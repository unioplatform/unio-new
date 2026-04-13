import type { AppRoute } from "./types";

// PUBLIC FEATURE ROUTES
// import { authRoutes } from "@/features/public/auth/routes";
import { landingRoutes } from "@/features/public/landing/routes";

// PRIVATE FEATURE ROUTES
// import { feedRoutes } from "@/features/private/feed/routes";
// import { messagesRoutes } from "@/features/private/messages/routes";
// import { profileRoutes } from "@/features/private/profile/routes";

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
  // ...feedRoutes,
  // ...messagesRoutes,
  // ...profileRoutes,
];