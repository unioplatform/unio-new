import { Home, FileText, Users, Compass, MessageCircle, Calendar, PanelsTopLeft } from 'lucide-react';
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { authApi } from '@unio/api';

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
  PROFILE: (username) => `/${username}`
};
var APP = {
  NAME: "Unio",
  TAGLINE: "Professional Social Networking, Reimagined",
  VERSION: "1.0.0",
  AUTHOR: "Unio Labs"
};

// src/constants/geo/mapCoordinates.ts
var mapCoordinates = [
  // North America
  [-122.4194, 37.7749],
  // San Francisco
  [-118.2437, 34.0522],
  // Los Angeles
  [-95.3698, 29.7604],
  // Houston
  [-87.6298, 41.8781],
  // Chicago
  [-74.006, 40.7128],
  // New York
  [-79.3832, 43.6532],
  // Toronto
  [-113.4909, 53.5444],
  // Edmonton
  [-103.3496, 20.6597],
  // Guadalajara
  [-123.1207, 49.2827],
  // Vancouver
  [-99.1332, 19.4326],
  // Mexico City
  [-112.074, 33.4484],
  // Phoenix (New)
  [-104.9903, 39.7392],
  // Denver (New)
  [-84.388, 33.749],
  // Atlanta (New)
  [-71.0589, 42.3601],
  // Boston (New)
  [-122.3321, 47.6062],
  // Seattle (New)
  [-73.5673, 45.5017],
  // Montreal (New)
  // South America
  [-70.6693, -33.4489],
  // Santiago
  [-58.3816, -34.6037],
  // Buenos Aires
  [-46.6333, -23.5505],
  // São Paulo
  [-74.0721, 4.711],
  // Bogotá
  [-77.0428, -12.0464],
  // Lima
  [-43.1729, -22.9068],
  // Rio de Janeiro
  [-66.9036, 10.4806],
  // Caracas (New)
  [-68.1193, -16.4897],
  // La Paz (New)
  [-78.4678, -0.1807],
  // Quito (New)
  // Europe
  [-0.1278, 51.5074],
  // London
  [2.3522, 48.8566],
  // Paris
  [12.4964, 41.9028],
  // Rome
  [13.405, 52.52],
  // Berlin
  [28.9784, 41.0082],
  // Istanbul
  [37.6173, 55.7558],
  // Moscow
  [-9.1393, 38.7223],
  // Lisbon
  [18.0686, 59.3293],
  // Stockholm
  [4.8952, 52.3702],
  // Amsterdam
  [23.7275, 37.9838],
  // Athens
  [-3.7038, 40.4168],
  // Madrid (New)
  [21.0122, 52.2297],
  // Warsaw (New)
  [14.4378, 50.0755],
  // Prague (New)
  [30.5234, 50.4501],
  // Kyiv (New)
  [5.3698, 60.3913],
  // Bergen (New)
  [24.9384, 60.1699],
  // Helsinki (New)
  // Africa
  [31.2357, 30.0444],
  // Cairo
  [36.8219, -1.2921],
  // Nairobi
  [3.3792, 6.5244],
  // Lagos
  [28.0473, -26.2041],
  // Johannesburg
  [18.4241, -33.9249],
  // Cape Town
  [-17.4677, 14.7167],
  // Dakar
  [-7.981, 31.6295],
  // Marrakesh
  [15.5527, 6.8493],
  // Kinshasa
  [38.7578, 8.9806],
  // Addis Ababa (New)
  [-0.2057, 5.6148],
  // Accra (New)
  [32.5599, 15.5007],
  // Khartoum (New)
  // Asia
  [139.6917, 35.6895],
  // Tokyo
  [121.4737, 31.2304],
  // Shanghai
  [114.1694, 22.3193],
  // Hong Kong
  [103.8198, 1.3521],
  // Singapore
  [72.8777, 19.076],
  // Mumbai
  [77.209, 28.6139],
  // New Delhi
  [126.978, 37.5665],
  // Seoul
  [55.2708, 25.2048],
  // Dubai
  [100.5018, 13.7563],
  // Bangkok
  [116.4074, 39.9042],
  // Beijing
  [106.8456, -6.2088],
  // Jakarta
  [101.6869, 3.139],
  // Kuala Lumpur
  [120.9842, 14.5995],
  // Manila
  [67.0011, 24.8607],
  // Karachi
  [46.6753, 24.7136],
  // Riyadh
  [131.8851, 43.1332],
  // Vladivostok
  [82.9204, 55.0301],
  // Novosibirsk
  [88.3639, 22.5726],
  // Kolkata (New)
  [80.2707, 13.0827],
  // Chennai (New)
  [77.5946, 12.9716],
  // Bangalore (New)
  [113.2644, 23.1291],
  // Guangzhou (New)
  [104.0668, 30.5728],
  // Chengdu (New)
  [51.389, 35.6892],
  // Tehran (New)
  [69.2401, 41.2995],
  // Tashkent (New)
  [34.7818, 32.0853],
  // Tel Aviv (New)
  [39.5694, 32.8597],
  // Ankara (New)
  [106.6297, 10.8231],
  // Ho Chi Minh City (New)
  [90.4125, 23.8103],
  // Dhaka (New)
  // Oceania
  [151.2093, -33.8688],
  // Sydney
  [144.9631, -37.8136],
  // Melbourne
  [174.7762, -41.2865],
  // Wellington
  [115.8605, -31.9505],
  // Perth
  [174.7645, -36.8509]
  // Auckland (New)
];
var PRIVATE_NAV_ITEMS = [
  {
    name: "Dashboard",
    href: ROUTES.DASHBOARD,
    icon: Home
  },
  {
    name: "Feed",
    href: ROUTES.FEED,
    icon: FileText
  },
  {
    name: "Communities",
    href: ROUTES.COMMUNITY,
    icon: Users
  },
  {
    name: "Network",
    href: ROUTES.NETWORKING,
    icon: Compass
  },
  {
    name: "Messages",
    href: ROUTES.MESSAGES,
    icon: MessageCircle
  },
  {
    name: "Events",
    href: ROUTES.EVENTS,
    icon: Calendar
  },
  {
    name: "Playground",
    href: ROUTES.PLAYGROUND,
    icon: PanelsTopLeft
  }
];

// src/constants/auth/loginMessages.ts
var LOGIN_MESSAGES = [
  "Your world is moving. Let\u2019s move with it.",
  "Every return is a step forward.",
  "Good things grow when you show up.",
  "Your presence matters here.",
  "There\u2019s momentum in the choices you make.",
  "Your next opportunity is already in motion.",
  "Small steps create powerful outcomes.",
  "Your network evolves when you do.",
  "Everything you build here moves you forward.",
  "Show up ready for what\u2019s next.",
  "Your community is here for you.",
  "You are part of something growing.",
  "Every connection starts with a moment like this.",
  "Your path is unfolding. Take the next step.",
  "You\u2019re here for a reason. Trust your pace.",
  "Lead with intention. Connect with purpose.",
  "Confidence looks good on you.",
  "Your network is active. So are your opportunities."
];
var getDailyLoginMessage = () => {
  if (typeof window === "undefined") return LOGIN_MESSAGES[0];
  try {
    const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    const stored = localStorage.getItem("unio_login_message");
    const parsed = stored ? JSON.parse(stored) : null;
    if (parsed?.date === today && parsed?.message) {
      return parsed.message;
    }
    const newMessage = LOGIN_MESSAGES[Math.floor(Math.random() * LOGIN_MESSAGES.length)];
    localStorage.setItem("unio_login_message", JSON.stringify({ date: today, message: newMessage }));
    return newMessage;
  } catch {
    return LOGIN_MESSAGES[0];
  }
};

// src/utils/generatePath.ts
var generatePath = (pathGenerator, feature) => {
  if (!pathGenerator || !feature) return "";
  try {
    return pathGenerator(feature) || "";
  } catch {
    return "";
  }
};

// src/utils/auth/toAuthUser.ts
var ROLE_MAP = {
  USER: "USER",
  BUSINESS: "BUSINESS",
  ADMIN: "ADMIN"
};
var TIER_MAP = {
  BASE: "BASE",
  BASIC: "BASE",
  PREMIUM: "PREMIUM",
  ELITE: "ELITE"
};
var STATUS_MAP = {
  ONLINE: "ONLINE",
  AWAY: "AWAY",
  OFFLINE: "OFFLINE",
  BUSY: "BUSY"
};
function toAuthUser(user) {
  if (!user) return null;
  const profileData = user.profile || {};
  const normalizedRole = user.accountRole ? ROLE_MAP[user.accountRole.toUpperCase()] : "USER";
  const rawTierKey = (user.tier || user.subscription || profileData.tier || "BASE").toUpperCase();
  const normalizedTier = TIER_MAP[rawTierKey] ?? "BASE";
  const normalizedStatus = user.status ? STATUS_MAP[user.status.toUpperCase()] : "ONLINE";
  return {
    id: user.id,
    email: user.email,
    username: user.username,
    slug: user.slug ?? user.username,
    isVerified: user.isVerified ?? profileData.verified ?? false,
    // Resolve Identity
    firstName: user.firstName ?? profileData.firstName ?? user.first_name ?? null,
    lastName: user.lastName ?? profileData.lastName ?? user.last_name ?? null,
    // Professional Context
    profile: {
      bio: profileData.bio ?? null,
      headline: profileData.headline ?? null,
      location: profileData.location ?? null
    },
    // Strict Types
    accountRole: normalizedRole ?? "USER",
    tier: normalizedTier,
    status: normalizedStatus ?? "ONLINE",
    // Media
    profilePicUrl: user.profilePicUrl ?? profileData.avatarUrl ?? profileData.profilePicUrl ?? null,
    // Settings (Critical for Theme Engine)
    userSettings: user.userSettings ?? null
  };
}
function useUsername(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const [status, setStatus] = useState("idle");
  const [suggestions, setSuggestions] = useState([]);
  async function onChange(next) {
    setValue(next);
    if (next === initialValue && next !== "") {
      setStatus("available");
      setSuggestions([]);
      return;
    }
    if (!next || next.length < 3) {
      setStatus("idle");
      setSuggestions([]);
      return;
    }
    setStatus("checking");
    try {
      const res = await authApi.checkUsername(next);
      if (res.available) {
        setStatus("available");
        setSuggestions([]);
      } else {
        setStatus("taken");
        setSuggestions(res.suggestions ?? []);
      }
    } catch {
      setStatus("idle");
    }
  }
  return { value, status, suggestions, setValue, onChange };
}
function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      setDebounced(value);
      return;
    }
    const id = window.setTimeout(() => setDebounced(value), delay);
    return () => window.clearTimeout(id);
  }, [value, delay]);
  return debounced;
}
function useDebouncedCallback(fn, delay = 300) {
  const fnRef = useRef(fn);
  const timerRef = useRef(null);
  useEffect(() => {
    fnRef.current = fn;
  }, [fn]);
  const cancel = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);
  const debounced = useMemo(() => {
    const handler = (...args) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        fnRef.current(...args);
        timerRef.current = null;
      }, delay);
    };
    return handler;
  }, [delay]);
  useEffect(() => cancel, [cancel]);
  return { callback: debounced, cancel };
}

export { APP, ENV, FOOTER_LINKS, LINKS, LOGIN_MESSAGES, PRIVATE_NAV_ITEMS, ROUTES, generatePath, getDailyLoginMessage, mapCoordinates, toAuthUser, useDebounce, useDebouncedCallback, useUsername };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map