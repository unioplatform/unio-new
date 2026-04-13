/* apps/web/src/system/providers/ToastProvider.tsx */
import React, { createContext, useContext, useCallback } from "react";
import { Toaster, toast } from "sonner";

interface ToastContextValue {
  notify: (msg: string, type?: "success" | "error" | "info" | "loading") => string | number;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const ToastProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  
  // Using useCallback ensures this function reference stays stable
  const notify = useCallback((msg: string, type: "success" | "error" | "info" | "loading" = "info") => {
    switch (type) {
      case "success": return toast.success(msg);
      case "error": return toast.error(msg);
      case "loading": return toast.loading(msg);
      default: return toast(msg);
    }
  }, []);

  return (
    <ToastContext.Provider value={{ notify }}>
      {children}
      <Toaster
        richColors
        position="top-center"
        closeButton
        // 🎨 Linking Sonner directly to your Design System
        toastOptions={{
          style: {
            borderRadius: "var(--radius-lg)", // Uses your globals.css variable
            fontFamily: "var(--font-ui)",     // Uses your elite font stack
            border: "1px solid var(--color-border-subtle)",
          },
          className: "unio-toast",
        }}
      />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};