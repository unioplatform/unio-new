// -----------------------------------------------------------------------------
// 📁 subscription.data.ts — Raw Subscription Data
// -----------------------------------------------------------------------------

import { SubscriptionPackage } from "@unio/types";

export const subscriptionData: SubscriptionPackage[] = [
  {
    tier: "BASE",
    description:
      "Everything you need to start building, connecting, and expressing yourself.",

    currency: "$",
    amount: 0,
    period: "/mo",

    features: [
      "10 Uni prompts per day",
      "Swipe through up to 30 Uni-recommended profiles daily",
      "Switch between light & dark mode",
    ],
  },

  {
    tier: "PREMIUM",
    description:
      "Unlock more insight, personalization, and daily power.",

    currency: "$",
    amount: 9.99,
    period: "/mo",

    highlight: true,
    badge: "Recommended",

    features: [
      "50 Uni prompts per day",
      "Unlock profile viewer insights (see who viewed you)",
      "Choose from curated dashboard themes and color palettes",
    ],
  },

  {
    tier: "ELITE",
    description:
      "Limitless Uni, deep insights, and full personalization.",

    currency: "$",
    amount: 15.99,
    period: "/mo",

    features: [
      "Unlimited Uni prompts — no limits, no cooldowns",
      "Advanced analytics & trend insights",
      "Full layout + theme customization suite",
      "Deep profile insights & heatmaps",
    ],
  },
];