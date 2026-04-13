import React, { Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import type { AppRoute } from "./types";
import { layoutMap, type LayoutComponent } from "./layoutMap";

/**
 * 🛡️ Type Guard: isValidLayout
 * Proves to TypeScript that 'key' is a valid key of layoutMap 
 * without using 'as'.
 */
function isValidLayout(key: string | undefined): key is keyof typeof layoutMap {
  return !!key && key in layoutMap;
}

export const applyLayouts = (routes: AppRoute[]): RouteObject[] => {
  return routes.map((route): RouteObject => {
    const layoutKey = route.meta?.layout;

    // 🎯 No 'as' needed. The guard 'isValidLayout' handles the narrowing.
    const Layout: LayoutComponent | null = isValidLayout(layoutKey)
      ? layoutMap[layoutKey]
      : null;

    const wrappedElement = Layout ? (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>{route.element}</Layout>
      </Suspense>
    ) : (
      route.element
    );

    const children = route.children ? applyLayouts(route.children) : undefined;

    return {
      ...route,
      element: wrappedElement,
      children: children,
    } as RouteObject; // Note: 'as RouteObject' here is a return type requirement 
                      // of the react-router interface itself.
  });
};