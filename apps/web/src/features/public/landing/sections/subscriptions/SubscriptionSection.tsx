// 📁 apps/web/src/features/landing/SubscriptionSection.tsx
import React from "react";
import { PackageCard } from "./components";
import { useSubscriptionPackages } from "./hooks";
import { SectionHeader } from "../../shared"; 

export const SubscriptionSection: React.FC = () => {
  const { packages, isLoading } = useSubscriptionPackages();

  if (isLoading) return null;

  return (
    <section id="subscriptions" className="unio-section-lg relative">
      <SectionHeader
        title="Unlock Your Full Potential"
        subtitle="Find the perfect tier of power, personalization, and insight tailored for your journey with Unio."
        /* 🎯 SPACING FIX: Swapped lg gap for smaller mb-16 to bring cards closer */
        className="mb-16" 
      />

      <div className="unio-container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {packages.map((plan, index) => (
            <PackageCard
              key={plan.tier}
              {...plan}
              delay={index * 0.1}
              isFeatured={index === 1}
              className="min-h-[540px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(SubscriptionSection);