// -----------------------------------------------------------------------------
// 📁 subscription.ts — Billing Domain Types
// -----------------------------------------------------------------------------

import { SubscriptionTier } from "../shared"; // or correct path

export interface SubscriptionPackage {
  tier: SubscriptionTier;

  description: string;

  currency: "$" | "£" | "€";
  amount: number;
  period: string;

  displayPrice?: string;

  features: string[];

  highlight?: boolean;
  badge?: string;
}