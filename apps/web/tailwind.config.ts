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

        "unio-widget": "linear-gradient(to bottom right, hsl(var(--widget-bg)), transparent)",
        "widget-raw": "hsl(var(--widget-bg))",

        border: "hsl(var(--border-raw))",
        "border-subtle": "hsl(var(--border-subtle-raw))",
        "border-faint": "hsl(var(--border-faint-raw))",
        
        /* Glass Borders (Specular Highlights) */
        "glass-edge-light": "rgba(255, 255, 255, 0.15)",
        "glass-edge-dark": "rgba(0, 0, 0, 0.2)",
      },

      /* ---------------- EFFECTS ---------------- */
      boxShadow: {
        /* The 3D "Wow" stack: Sharp contact shadow + soft ambient blur */
        "unio-glass": "0 1px 1px rgba(0,0,0,0.05), 0 10px 20px -5px rgba(0,0,0,0.1)",
        "unio-glass-dark": "0 20px 40px -12px rgba(0, 0, 0, 0.4)",
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