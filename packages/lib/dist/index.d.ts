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
    readonly DASHBOARD: "/app/dashboard";
    readonly FEED: "/app/feed";
    readonly MESSAGES: "/app/messages";
    readonly NETWORKING: "/app/networking";
    readonly SETTINGS: "/app/settings";
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

export { APP, ENV, FOOTER_LINKS, type FooterSectionKey, LINKS, ROUTES };
