/* apps/web/src/system/providers/AuthProvider.tsx */
import { createContext, useContext, useState, useEffect, useMemo, useCallback, useRef } from "react";
import { authApi, client, setupInterceptors } from "@unio/api"; 
import type { AuthUser } from "@unio/types";

interface AuthContextValue {
  user: AuthUser | null;
  isRestoring: boolean;
  isAuthenticated: boolean; 
  login: (userData: AuthUser) => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isRestoring, setIsRestoring] = useState(true);
  const hasInitialized = useRef(false);

  // 1. Define Logout first so it's available for the Interceptor
  const logout = useCallback(async () => {
    try {
      await authApi.logout();
    } catch (err) {
      console.warn("[Auth] Logout cleanup on server failed, clearing local anyway.");
    } finally {
      setUser(null);
      // Optional: window.location.href = "/login";
    }
  }, []);

  const login = useCallback((userData: AuthUser) => {
    setUser(userData);
  }, []);

  // 2. 🔥 THE INTERCEPTOR HANDSHAKE
  // This connects your UI state (React) to your API logic (Axios)
  useEffect(() => {
    setupInterceptors(client, () => {
      // If ANY API call returns a 401, this runs instantly.
      setUser(null);
    });
  }, []);

  // 3. INITIALIZATION LOGIC
  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    let isMounted = true;

    async function initAuth() {
      try {
        // Step A: Check for existing session
        const { user: userData } = await authApi.getMe();
        if (isMounted) setUser(userData);
      } catch (err) {
        // Step B: Attempt silent refresh if session check fails
        try {
          const { user: refreshedUser } = await authApi.refresh();
          if (isMounted) setUser(refreshedUser);
        } catch {
          if (isMounted) setUser(null);
        }
      } finally {
        if (isMounted) setIsRestoring(false);
      }
    }

    initAuth();
    return () => { isMounted = false; };
  }, []);

  const value = useMemo(() => ({
    user,
    isRestoring,
    isAuthenticated: !!user,
    login,
    logout,
  }), [user, isRestoring, login, logout]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}