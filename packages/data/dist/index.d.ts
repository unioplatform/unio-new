import { SubscriptionPackage } from '@unio/types';

/**
 * Get all subscription packages
 * (future: API call)
 */
declare const getSubscriptionPackages: () => SubscriptionPackage[];
/**
 * Get single package
 */
declare const getSubscriptionByTier: (tier: SubscriptionPackage["tier"]) => SubscriptionPackage | undefined;

declare const subscriptionData: SubscriptionPackage[];

/**
 * ✅ Canonical Gender Options
 * Aligned with backend enums and UI Select requirements.
 */
declare const genders: {
    label: string;
    value: string;
}[];

export { genders, getSubscriptionByTier, getSubscriptionPackages, subscriptionData };
