// 📁 routes.ts

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
  // 🌍 Public / Marketing
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  ABOUT: "/about",
  TERMS: "/legal/terms",
  PRIVACY: "/legal/privacy",

  // 🚀 Core App (CLEAN URLS)
  DASHBOARD: "/dashboard",
  FEED: "/feed",
  COMMUNITY: "/communities",
  NETWORKING: "/networking",
  MESSAGES: "/messages",
  EVENTS: "/events",
  PLAYGROUND: "/playground",
  SETTINGS: "/settings",

  // 👤 Vanity Profile (LinkedIn style)
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