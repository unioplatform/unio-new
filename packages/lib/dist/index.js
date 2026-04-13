// src/constants/footerLinks.ts
var FOOTER_LINKS = {
  company: [
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
    { label: "Contact", href: "/contact" }
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Help Center", href: "/help" },
    { label: "Developers", href: "/developers" },
    { label: "System Status", href: "/status" }
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Cookie Policy", href: "/legal/cookies" }
  ],
  compliance: [
    { label: "Security", href: "/security" },
    { label: "Accessibility", href: "/accessibility" },
    { label: "Data Protection", href: "/data-protection" }
  ]
};

// src/constants/env.ts
var isNode = typeof process !== "undefined" && process.env;
var isVite = typeof import.meta !== "undefined" && "env" in import.meta;
function getEnvVar(key, fallback) {
  if (isVite) {
    const env = import.meta.env;
    if (env[key]) return env[key];
  }
  if (isNode) {
    const val = process.env[key];
    if (val) return val;
  }
  return fallback;
}
var ENV = {
  MODE: getEnvVar("MODE", "development"),
  API_URL: getEnvVar("VITE_API_URL", "http://localhost:3001/api"),
  isDev: getEnvVar("MODE", "development") === "development",
  isProd: getEnvVar("MODE", "development") === "production"
};

// src/constants/sites.ts
var LINKS = {
  TWITTER: "https://twitter.com/uniohq",
  LINKEDIN: "https://linkedin.com/company/uniohq",
  INSTAGRAM: "https://www.instagram.com/uniohq/",
  GITHUB: "https://github.com/uniohq",
  SUPPORT: "mailto:support@uniohq.com"
};
var ROUTES = {
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
  PROFILE: (username) => `/app/profile/${username}`
};
var APP = {
  NAME: "Unio",
  TAGLINE: "Professional Social Networking, Reimagined",
  VERSION: "1.0.0",
  AUTHOR: "Unio Labs"
};

export { APP, ENV, FOOTER_LINKS, LINKS, ROUTES };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map