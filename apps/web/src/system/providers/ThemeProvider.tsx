/* apps/web/src/system/providers/ThemeProvider.tsx */
import React, { 
  createContext, 
  useContext, 
  useEffect, 
  useMemo, 
  useState,
  useCallback
} from "react";

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

interface ThemeContextValue {
  mode: Theme;
  active: ResolvedTheme;
  setMode: (theme: Theme) => void;
  switchTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
const STORAGE_KEY = "unio-theme-preference";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize from localStorage immediately
  const [mode, setModeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";
    return (localStorage.getItem(STORAGE_KEY) as Theme) || "system";
  });

  // Helper to check system preference
  const getSystemTheme = useCallback((): ResolvedTheme => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }, []);

  // Determine what is actually showing on screen
  const active = useMemo<ResolvedTheme>(() => {
    return mode === "system" ? getSystemTheme() : mode;
  }, [mode, getSystemTheme]);

  const setMode = useCallback((newMode: Theme) => {
    setModeState(newMode);
    localStorage.setItem(STORAGE_KEY, newMode);
  }, []);

  const switchTheme = useCallback(() => {
    setMode(active === "dark" ? "light" : "dark");
  }, [active, setMode]);

  // Sync Class & Meta Data
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(active);
    
    // 🔥 Elite Touch: Syncs the browser UI (address bar/scrollbars)
    root.style.colorScheme = active; 
  }, [active]);

  // Listen for System Changes
  useEffect(() => {
    if (mode !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(mediaQuery.matches ? "dark" : "light");
      root.style.colorScheme = mediaQuery.matches ? "dark" : "light";
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [mode]);

  const value = useMemo(() => ({
    mode,
    active,
    setMode,
    switchTheme
  }), [mode, active, setMode, switchTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};