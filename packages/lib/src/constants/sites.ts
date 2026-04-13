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
export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  ABOUT: "/about",
  TERMS: "/legal/terms",
  PRIVACY: "/legal/privacy",
  DASHBOARD: "/app/dashboard",
  FEED: "/app/feed",
  MESSAGES: "/app/messages",
  NETWORKING: "/app/networking",
  SETTINGS: "/app/settings",
  PROFILE: (username: string) => `/app/profile/${username}`,
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