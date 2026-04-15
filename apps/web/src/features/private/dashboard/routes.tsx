import { lazy } from "react";
import type { AppRoute } from "@/system/router/types";
import { ROUTES } from "@unio/lib";

// 🚀 Lazy load for performance, consistent with LandingPage
const DashboardPage = lazy(() => import("./DashboardPage"));

export const dashboardRoutes: AppRoute[] = [
  {
    path: ROUTES.DASHBOARD, 
    element: <DashboardPage />,
    meta: {
      layout: "private", // 🎯 Tells your router to use PrivateLayout/PrivateShell
      requiresAuth: false, // Set to false for now so you can test without a login screen
      title: "Dashboard",
    },
  },
];