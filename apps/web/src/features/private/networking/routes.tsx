import { lazy } from "react";
import type { AppRoute } from "@/system/router/types";
import { ROUTES } from "@unio/lib";

// 🚀 Lazy load for performance, consistent with LandingPage
const NetworkPage = lazy(() => import("./NetworkPage"));

export const networkingRoutes: AppRoute[] = [
  {
    path: ROUTES.NETWORKING, 
    element: <NetworkPage />,
    meta: {
      layout: "private", // 🎯 Tells your router to use PrivateLayout/PrivateShell
      requiresAuth: false, // Set to false for now so you can test without a login screen
      title: "Network",
    },
  },
];