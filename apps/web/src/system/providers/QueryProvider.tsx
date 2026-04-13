/* apps/web/src/system/providers/QueryProvider.tsx */
import React, { Suspense, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const isDev = import.meta.env?.DEV;

/**
 * 🛠️ THE "NO-AS" FIX: 
 * We define this outside the component. 
 * TypeScript now correctly infers this as a LazyExoticComponent.
 */
const ReactQueryDevtools = isDev
  ? React.lazy(() =>
      import("@tanstack/react-query-devtools").then((res) => ({
        default: res.ReactQueryDevtools,
      }))
    )
  : null;

export const QueryProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 3,
        gcTime: 1000 * 60 * 5,
      },
      mutations: {
        retry: 1,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      {children}

      {/* 🚀 Clean, Type-Safe Rendering */}
      {isDev && ReactQueryDevtools && (
        <Suspense fallback={null}>
          <ReactQueryDevtools />
        </Suspense>
      )}
    </QueryClientProvider>
  );
};