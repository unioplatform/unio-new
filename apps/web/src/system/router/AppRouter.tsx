import React, { useEffect, Suspense, lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { publicRoutes, privateRoutes } from "./routeRegistry";
import { applyLayouts } from "./applyLayouts";
import type { AppRoute } from "./types";
import { useAuth } from "@/system/providers/AuthProvider";
import type { AccountRole } from "@unio/types";

const Error404 = lazy(() => import("../layouts/Error404"));

/* -------------------------------------------------------------------------- */
function ProtectedRoute({
  children,
  roles,
}: {
  children: React.ReactNode;
  roles?: AccountRole[];
}) {
  const { user, isRestoring, isAuthenticated } = useAuth();

  if (isRestoring) return null; 

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: window.location.pathname }}
      />
    );
  }

  if (roles && user && !roles.includes(user.accountRole)) {
    return <Navigate to="/app/dashboard" replace />;
  }

  return <>{children}</>;
}

/* -------------------------------------------------------------------------- */
const applyGuards = (routes: AppRoute[]): AppRoute[] =>
  routes.map((r): AppRoute => ({
    ...r,
    element: r.meta?.requiresAuth ? (
      <ProtectedRoute roles={r.meta?.roles}>
        {r.element}
      </ProtectedRoute>
    ) : (
      r.element
    ),
    // Fixed recursion: ensure the children match the new AppRoute type
    children: r.children ? applyGuards(r.children) : undefined,
  }));

/* -------------------------------------------------------------------------- */
const router = createBrowserRouter([
  {
    // Apply layouts first, then wrap them in auth guards
    children: applyGuards(
      applyLayouts([...publicRoutes, ...privateRoutes])
    ) as any, // Cast to any here only because createBrowserRouter expects standard RouteObject
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<div />}>
        <Error404 />
      </Suspense>
    ),
  },
]);

/* -------------------------------------------------------------------------- */
export default function AppRouter() {
  useEffect(() => {
    const unsubscribe = router.subscribe(({ location }) => {
      const allRoutes = [...publicRoutes, ...privateRoutes];
      const match = allRoutes.find((r) => r.path === location.pathname);

      if (match?.meta?.title) {
        document.title = `Unio | ${match.meta.title}`;
      }
    });

    return () => unsubscribe();
  }, []);

  return <RouterProvider router={router} />;
}