// apps/web/tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
    "../../packages/chrome/src/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      maxWidth: {
        "unio-max": "1128px",
        "unio-marketing": "1320px",
      },
      padding: {
        "unio-padding": "24px",
      },
      spacing: {
        "section-lg": "120px",
        "section-md": "96px",
        "section-sm": "72px",
        // This is the "Magic" value that pushes content down
        "header-safe": "calc(var(--header-margin-top) + var(--header-height) + var(--header-inner-gap))",
      },
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
      borderRadius: {
        "unio-sm": "4px",
        "unio-md": "8px",
        "unio-lg": "12px",
      },
    },
  },
  plugins: [],
} satisfies Config;