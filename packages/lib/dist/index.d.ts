import { NavItem, UserSettings, AuthUser } from '@unio/types';
import * as react from 'react';

/**
 * 📚 Shared Footer Links
 * Standardized marketing and legal links for the Unio ecosystem.
 */
declare const FOOTER_LINKS: {
    readonly company: readonly [{
        readonly label: "Careers";
        readonly href: "/careers";
    }, {
        readonly label: "Press";
        readonly href: "/press";
    }, {
        readonly label: "Contact";
        readonly href: "/contact";
    }];
    readonly resources: readonly [{
        readonly label: "Blog";
        readonly href: "/blog";
    }, {
        readonly label: "Help Center";
        readonly href: "/help";
    }, {
        readonly label: "Developers";
        readonly href: "/developers";
    }, {
        readonly label: "System Status";
        readonly href: "/status";
    }];
    readonly legal: readonly [{
        readonly label: "Privacy Policy";
        readonly href: "/legal/privacy";
    }, {
        readonly label: "Terms of Service";
        readonly href: "/legal/terms";
    }, {
        readonly label: "Cookie Policy";
        readonly href: "/legal/cookies";
    }];
    readonly compliance: readonly [{
        readonly label: "Security";
        readonly href: "/security";
    }, {
        readonly label: "Accessibility";
        readonly href: "/accessibility";
    }, {
        readonly label: "Data Protection";
        readonly href: "/data-protection";
    }];
};
type FooterSectionKey = keyof typeof FOOTER_LINKS;

/**
 * 🛡️ Environment Resolver
 * Safely extracts variables from Vite (import.meta.env) or Node (process.env)
 */
declare const ENV: {
    readonly MODE: string;
    readonly API_URL: string;
    readonly isDev: boolean;
    readonly isProd: boolean;
};

/**
 * 🔗 External Social & Support Links
 */
declare const LINKS: {
    readonly TWITTER: "https://twitter.com/uniohq";
    readonly LINKEDIN: "https://linkedin.com/company/uniohq";
    readonly INSTAGRAM: "https://www.instagram.com/uniohq/";
    readonly GITHUB: "https://github.com/uniohq";
    readonly SUPPORT: "mailto:support@uniohq.com";
};
/**
 * 🧭 Canonical App Routes
 */
declare const ROUTES: {
    readonly HOME: "/";
    readonly LOGIN: "/login";
    readonly SIGNUP: "/signup";
    readonly ABOUT: "/about";
    readonly TERMS: "/legal/terms";
    readonly PRIVACY: "/legal/privacy";
    readonly DASHBOARD: "/dashboard";
    readonly FEED: "/feed";
    readonly COMMUNITY: "/communities";
    readonly NETWORKING: "/networking";
    readonly MESSAGES: "/messages";
    readonly EVENTS: "/events";
    readonly PLAYGROUND: "/playground";
    readonly SETTINGS: "/settings";
    readonly PROFILE: (username: string) => string;
};
/**
 * 🧠 App Metadata
 */
declare const APP: {
    readonly NAME: "Unio";
    readonly TAGLINE: "Professional Social Networking, Reimagined";
    readonly VERSION: "1.0.0";
    readonly AUTHOR: "Unio Labs";
};

declare const mapCoordinates: [number, number][];

declare const PRIVATE_NAV_ITEMS: NavItem[];

declare const LOGIN_MESSAGES: readonly string[];
declare const getDailyLoginMessage: () => string;

declare const generatePath: (pathGenerator: ((feature: any) => string | undefined) | null | undefined, feature: any) => string;

interface RawApiUser {
    id: string;
    email: string;
    username: string;
    slug?: string;
    isVerified?: boolean;
    firstName?: string;
    lastName?: string;
    first_name?: string;
    last_name?: string;
    tier?: string;
    subscription?: string;
    accountRole?: string;
    status?: string;
    profilePicUrl?: string;
    userSettings?: UserSettings | null;
    profile?: {
        firstName?: string;
        lastName?: string;
        verified?: boolean;
        tier?: string;
        bio?: string | null;
        headline?: string | null;
        location?: string | null;
        avatarUrl?: string;
        profilePicUrl?: string;
    };
}
/**
 * 🛡️ toAuthUser
 * The Single Source of Truth for transforming API users into session users.
 */
declare function toAuthUser(user: RawApiUser | null | undefined): AuthUser | null;

declare function useUsername(initialValue?: string): {
    value: string;
    status: "idle" | "checking" | "available" | "taken";
    suggestions: string[];
    setValue: react.Dispatch<react.SetStateAction<string>>;
    onChange: (next: string) => Promise<void>;
};

/**
 * ✅ useDebounce
 * Returns a delayed version of a changing value.
 * Renamed from useDebouncedValue for cleaner API consumption.
 */
declare function useDebounce<T>(value: T, delay?: number): T;
/**
 * ✅ useDebouncedCallback
 * Returns a function that waits before invoking `fn`.
 */
type AnyFn = (...args: any[]) => any;
declare function useDebouncedCallback<F extends AnyFn>(fn: F, delay?: number): {
    callback: F;
    cancel: () => void;
};

export { APP, ENV, FOOTER_LINKS, type FooterSectionKey, LINKS, LOGIN_MESSAGES, PRIVATE_NAV_ITEMS, ROUTES, generatePath, getDailyLoginMessage, mapCoordinates, toAuthUser, useDebounce, useDebouncedCallback, useUsername };
