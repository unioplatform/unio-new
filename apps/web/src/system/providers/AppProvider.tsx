/* apps/web/src/system/providers/AppProvider.tsx */
import React, { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "./AuthProvider"; 
import { QueryProvider } from "./QueryProvider";
import { ToastProvider } from "./ToastProvider";
import { ThemeProvider } from "./ThemeProvider";

const AppRouter = React.lazy(() => import("../router/AppRouter"));

export function AppProviders() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <AuthProvider>
          <QueryProvider>
            <ToastProvider>
              <Suspense fallback={<div className="h-screen bg-background-primary" />}>
                <AppRouter />
              </Suspense>
            </ToastProvider>
          </QueryProvider>
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
