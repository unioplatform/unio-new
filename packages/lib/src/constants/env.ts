/**
 * 🛡️ Environment Resolver
 * Safely extracts variables from Vite (import.meta.env) or Node (process.env)
 */

// Helper to check if we are in a Node environment
const isNode = typeof process !== "undefined" && process.env;

// Helper to check if we are in a Vite/ESM environment
const isVite = typeof import.meta !== "undefined" && "env" in import.meta;

function getEnvVar(key: string, fallback: string): string {
  // Check Vite first (Frontend)
  if (isVite) {
    const env = (import.meta as unknown as { env: Record<string, string> }).env;
    if (env[key]) return env[key];
  }

  // Check Node second (Backend/SSR)
  if (isNode) {
    const val = process.env[key];
    if (val) return val;
  }

  return fallback;
}

export const ENV = {
  MODE: getEnvVar("MODE", "development"),
  API_URL: getEnvVar("VITE_API_URL", "http://localhost:3001/api"),
  isDev: getEnvVar("MODE", "development") === "development",
  isProd: getEnvVar("MODE", "development") === "production",
} as const;