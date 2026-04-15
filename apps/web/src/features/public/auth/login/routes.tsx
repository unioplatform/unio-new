import { lazy } from "react";
import type { AppRoute } from "@/system/router/types";
import { ROUTES } from "@unio/lib";

// Lazy load for performance
const LoginPage = lazy(() => import("./LoginPage"));

export const loginRoutes: AppRoute[] = [
  {
    path: ROUTES.LOGIN, 
    element: <LoginPage />,
    meta: {
      layout: "auth", // 🎯 The Router uses this to wrap the MarketingShell
      requiresAuth: false,
      title: "Unio — Professional Networking Reimagined",
    },
  },
];