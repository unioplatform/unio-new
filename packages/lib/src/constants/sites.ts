/**
 * 🔗 External Social & Support Links
 */
export const LINKS = {
  TWITTER: "https://twitter.com/uniohq",
  LINKEDIN: "https://linkedin.com/company/uniohq",
  INSTAGRAM: "https://www.instagram.com/uniohq/",
  GITHUB: "https://github.com/uniohq",
  SUPPORT: "mailto:support@uniohq.com",
} as const;

/**
 * 🧭 Canonical App Routes
 */
/**
 * 🧭 Canonical App Routes
 */
export const ROUTES = {
  // Public / Marketing
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  ABOUT: "/about",
  TERMS: "/legal/terms",
  PRIVACY: "/legal/privacy",

  // Application Workspace (Internal Logic)
  DASHBOARD: "/app/dashboard",
  FEED: "/app/feed",
  COMMUNITY: "/app/communities",
  NETWORKING: "/app/networking",
  MESSAGES: "/app/messages",
  EVENTS: "/app/events",
  PLAYGROUND: "/app/playground",
  SETTINGS: "/app/settings",

  // 🎯 Vanity Profile (LinkedIn Style)
  // This results in unio.com/alexsterling instead of unio.com/app/profile/alexsterling
  PROFILE: (username: string) => `/${username}`,
} as const;

/**
 * 🧠 App Metadata
 */
export const APP = {
  NAME: "Unio",
  TAGLINE: "Professional Social Networking, Reimagined",
  VERSION: "1.0.0",
  AUTHOR: "Unio Labs",
} as const;