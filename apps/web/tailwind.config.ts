// apps/web/tailwind.config.ts

import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",

    // 🧩 MONOREPO PACKAGES
    "../../packages/ui/src/**/*.{ts,tsx}",
    "../../packages/chrome/src/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      /* ---------------- LAYOUT ---------------- */
      maxWidth: {
        "unio-max": "1128px",
        "unio-marketing": "1320px",
      },

      padding: {
        "unio-padding": "24px",
      },

      gap: {
        "unio-gap": "24px",
      },

      spacing: {
        "section-lg": "120px",
        "section-md": "96px",
        "section-sm": "72px",
      },

      /* ---------------- COLORS ---------------- */
      colors: {
        background: "hsl(var(--bg-0))",
        "text-primary": "hsl(var(--text-1))",
        "text-secondary": "hsl(var(--text-2))",
        "text-tertiary": "hsl(var(--text-3))",

        accent: "hsl(var(--accent-1))",
        "accent-hover": "hsl(var(--accent-2))",
        "accent-bg": "hsl(var(--accent-bg))",

        border: "hsl(var(--border-raw))",
        "border-subtle": "hsl(var(--border-subtle-raw))",
        "border-faint": "hsl(var(--border-faint-raw))",
      },

      /* ---------------- RADIUS ---------------- */
      borderRadius: {
        "unio-sm": "4px",
        "unio-md": "8px",
        "unio-lg": "12px",
      },
    },
  },

  plugins: [],
} satisfies Config;