import { lazy } from "react";
import type { AppRoute } from "@/system/router/types";
import { ROUTES } from "@unio/lib";

// 🚀 Lazy load for performance, consistent with LandingPage
const CommunityPage = lazy(() => import("./CommunityPage"));

export const communityRoutes: AppRoute[] = [
  {
    path: ROUTES.COMMUNITY, 
    element: <CommunityPage />,
    meta: {
      layout: "private", // 🎯 Tells your router to use PrivateLayout/PrivateShell
      requiresAuth: false, // Set to false for now so you can test without a login screen
      title: "Community",
    },
  },
];