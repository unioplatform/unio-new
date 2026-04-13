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

export { getSubscriptionByTier, getSubscriptionPackages, subscriptionData };
