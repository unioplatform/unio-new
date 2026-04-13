import { lazy } from "react";
import type { AppRoute } from "@/system/router/types";
import { ROUTES } from "@unio/lib";

// Lazy load for performance
const LandingPage = lazy(() => import("./LandingPage"));

export const landingRoutes: AppRoute[] = [
  {
    path: ROUTES.HOME, 
    element: <LandingPage />,
    meta: {
      layout: "marketing", // 🎯 The Router uses this to wrap the MarketingShell
      requiresAuth: false,
      title: "Unio — Professional Networking Reimagined",
    },
  },
];