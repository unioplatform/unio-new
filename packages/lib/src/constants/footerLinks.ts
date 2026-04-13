/**
 * 📚 Shared Footer Links
 * Standardized marketing and legal links for the Unio ecosystem.
 */
export const FOOTER_LINKS = {
  company: [
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Help Center", href: "/help" },
    { label: "Developers", href: "/developers" },
    { label: "System Status", href: "/status" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Cookie Policy", href: "/legal/cookies" },
  ],
  compliance: [
    { label: "Security", href: "/security" },
    { label: "Accessibility", href: "/accessibility" },
    { label: "Data Protection", href: "/data-protection" },
  ],
} as const;

export type FooterSectionKey = keyof typeof FOOTER_LINKS;