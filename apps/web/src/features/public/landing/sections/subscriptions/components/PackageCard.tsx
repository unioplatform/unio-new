import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Text, Button } from "@unio/ui";
import { CheckIcon } from "./CheckIcon";
import { SubscriptionPackageVM } from "../view-models";
import { clsx } from "clsx";

type Props = SubscriptionPackageVM & {
  delay?: number;
  isFeatured?: boolean;
  className?: string;
};

export const PackageCard: React.FC<Props> = ({
  displayTier,
  description,
  currency,
  amount,
  period,
  features,
  buttonLabel,
  href,
  variant,
  badge,
  delay = 0,
  isFeatured = false,
  className,
}) => {
  const formattedPrice =
    amount === 0
      ? "Free"
      : `${currency}${amount.toFixed(amount % 1 === 0 ? 0 : 2)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      className={clsx(
        "relative flex flex-col rounded-2xl p-8 bg-background border-2 border-accent transition-all duration-500",
        "group cursor-default",

        // ✨ Featured glow (main card)
        isFeatured
          ? "shadow-[0_0_25px_hsl(var(--accent-1)/0.35),0_0_60px_hsl(var(--accent-1)/0.15)]"
          : "",

        // 🚀 Lift
        "hover:-translate-y-3 hover:z-20",

        // ✨ Glow on hover (side cards)
        !isFeatured &&
          "hover:shadow-[0_0_20px_hsl(var(--accent-1)/0.25)]",

        // 🧠 Visual hierarchy
        isFeatured
          ? "z-10"
          : "opacity-90 hover:opacity-100",

        className
      )}
    >
      {/* 🏷️ BADGE */}
      {badge && (
        <div className="absolute top-0 right-0 -mt-3 -mr-1 rotate-2 z-20">
          <span className="px-3 py-1 rounded-full bg-accent shadow-lg border border-white/20">
            <Text size="tiny" weight="bold" uppercase className="text-white">
              {badge}
            </Text>
          </span>
        </div>
      )}

      {/* ✍️ HEADER */}
      <div className="mb-4">
        <Text
          size="xl"
          weight="bold"
        >
          {displayTier}
        </Text>

        <Text size="small" tone="muted" className="mt-1 block">
          {description}
        </Text>
      </div>

      {/* 💰 PRICE */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <Text size="4xl" weight="bold">
            {formattedPrice}
          </Text>

          {amount !== 0 && (
            <Text size="small" tone="muted">
              / {period}
            </Text>
          )}
        </div>
      </div>

      {/* ✅ FEATURES */}
      <ul className="space-y-3 flex-grow list-none p-0 m-0">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <CheckIcon className="mr-3 mt-1 text-accent w-4 h-4 shrink-0" />
            <Text size="small" className="leading-tight">
              {feature}
            </Text>
          </li>
        ))}
      </ul>

      {/* 🚀 CTA */}
      <div className="mt-8">
        <Link to={href} className="block w-full no-underline">
          <Button
            variant={isFeatured ? "primary" : "secondary"}
            className="w-full transition-transform duration-300 group-hover:scale-[1.02]"
          >
            {buttonLabel}
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default React.memo(PackageCard);