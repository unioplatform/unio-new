// 📁 apps/web/src/features/landing/hooks/useSubscriptionPackages.ts
import { useMemo } from "react";
// Assuming you have a mock or real data fetcher
import { getSubscriptionPackages } from "@unio/data"; 
import { transformToSubscriptionVM } from "../view-models";

export const useSubscriptionPackages = () => {
  // In a production app, you'd wrap this in a 'useQuery' from TanStack Query
  // For now, we'll process the static data through our VM logic
  const rawData = getSubscriptionPackages();

  const packages = useMemo(() => {
    return transformToSubscriptionVM(rawData);
  }, [rawData]);

  return {
    packages,
    // Add these for future-proofing your UI
    isLoading: false, 
    error: null,
  };
};