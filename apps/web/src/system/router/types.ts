import type { RouteObject } from "react-router-dom";
import type { AccountRole } from "@unio/types";

export type AppRoute = Omit<RouteObject, "children"> & {
  meta?: {
    layout?: "private" | "marketing" | "auth" | "help" | "main";
    requiresAuth?: boolean;
    roles?: AccountRole[];
    title?: string;
  };
  children?: AppRoute[];
};