// 📁 apps/web/src/features/landing/view-models/subscription.vm.ts
import type { SubscriptionPackage, SubscriptionTier } from "@unio/types";

export type SubscriptionPackageVM = SubscriptionPackage & {
  buttonLabel: string;
  href: string;
  variant: "primary" | "secondary";
  displayTier: string;
};

const tierDisplayMap: Record<SubscriptionTier, string> = {
  BASE: "Base",
  PREMIUM: "Premium",
  ELITE: "Elite",
};

const tierCTA: Record<SubscriptionTier, string> = {
  BASE: "Start Exploring",
  PREMIUM: "Choose Premium",
  ELITE: "Upgrade to Elite",
};

const tierVariant: Record<SubscriptionTier, "primary" | "secondary"> = {
  BASE: "secondary",
  PREMIUM: "primary",
  ELITE: "secondary",
};

/**
 * Transforms domain data into UI-ready View Models.
 * Clean and easily unit-testable.
 */
export const transformToSubscriptionVM = (
  data: SubscriptionPackage[]
): SubscriptionPackageVM[] => {
  return data.map((pkg) => ({
    ...pkg,
    displayTier: tierDisplayMap[pkg.tier],
    buttonLabel: tierCTA[pkg.tier],
    href: `/signup?tier=${pkg.tier.toLowerCase()}`,
    variant: tierVariant[pkg.tier],
  }));
};