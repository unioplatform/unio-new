import { lazy } from "react";
import type { AppRoute } from "@/system/router/types";
import { ROUTES } from "@unio/lib";

// Lazy load for performance
const SignupPage = lazy(() => import("./SignupPage"));

export const signupRoutes: AppRoute[] = [
  {
    path: ROUTES.SIGNUP, 
    element: <SignupPage />,
    meta: {
      layout: "auth", // 🎯 The Router uses this to wrap the MarketingShell
      requiresAuth: false,
      title: "Unio | Signup",
    },
  },
];