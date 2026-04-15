import { lazy, type ComponentType, type ReactNode } from "react";

/**
 * 🛡️ LayoutComponent
 * A strict definition for a Shell: must be a component and must take children.
 */
export type LayoutComponent = ComponentType<{ children: ReactNode }>;

/**
 * 🗺️ layoutMap
 * Strictly typed Record. Every key in our AppRoute meta must exist here.
 */
export const layoutMap: Record<string, LayoutComponent> = {
  marketing: lazy(() => import("@/system/layouts/MarketingLayout")),
  private: lazy(() => import("@/system/layouts/PrivateLayout")),
  auth: lazy(() => import("@/system/layouts/AuthLayout")),
};

// Extract valid keys for our type guard
export type LayoutKey = keyof typeof layoutMap;