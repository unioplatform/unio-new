// -----------------------------------------------------------------------------
// 📁 subscription.service.ts — Subscription Access Layer
// -----------------------------------------------------------------------------

import { subscriptionData } from "./subscription.data";
import type { SubscriptionPackage } from "@unio/types";

/**
 * Get all subscription packages
 * (future: API call)
 */
export const getSubscriptionPackages = (): SubscriptionPackage[] => {
  return subscriptionData;
};

/**
 * Get single package
 */
export const getSubscriptionByTier = (
  tier: SubscriptionPackage["tier"]
): SubscriptionPackage | undefined => {
  return subscriptionData.find((p) => p.tier === tier);
};