import React from "react";
import { Text, Button } from "@unio/ui";

/**
 * @name ProfileCard
 * @description Professional 3D Glassmorphism Widget.
 * Utilizes the centralized .unio-glass utility for optical thickness.
 */
export default function ProfileCard() {
  return (
    <div className="unio-glass relative h-full w-full flex items-center justify-between p-6">
      
      {/* 👤 LEFT: IDENTITY */}
      <div className="relative z-10 flex items-center gap-5">
        {/* Saturated Avatar: Stays punchy with a 'satin' shadow to look embedded */}
        <div className="h-14 w-14 shrink-0 rounded-unio-md bg-accent flex items-center justify-center 
          shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_4px_12px_rgba(0,0,0,0.1)]">
          <Text weight="black" tone="brand" size="2xl" className="text-white drop-shadow-sm">
            C
          </Text>
        </div>

        <div className="flex flex-col">
          <Text weight="bold" size="large" tone="default" className="tracking-tight">
            Christy Mugomba
          </Text>
          <Text size="tiny" tone="tertiary" weight="bold" uppercase tracking="widest" className="opacity-80">
            Founder & CEO
          </Text>
        </div>
      </div>

      {/* 🛠️ RIGHT: ACTIONS */}
      <div className="relative z-10 flex items-center gap-4">
        {/* Subtle vertical divider using theme-aware opacity */}
        <div className="hidden md:flex flex-col items-end border-r border-text-tertiary/10 pr-4">
          <Text size="tiny" weight="bold" tone="brand">PRO MEMBER</Text>
          <Text size="tiny" tone="tertiary" className="text-[10px]">Renewal: May '26</Text>
        </div>

        <Button 
          size="sm" 
          variant="ghost" 
          /* Button uses backdrop-blur-sm to look like a smaller piece of glass on top */
          className="rounded-full bg-background/40 hover:bg-background/80 border border-white/10 backdrop-blur-sm transition-all"
        >
          Manage
        </Button>
      </div>

      {/* 💡 THE INNER RING
          This adds that final 1px 'rim' inside the card to catch light 
          without the 'pale' wash of a full overlay. */}
      <div className="absolute inset-0 pointer-events-none rounded-unio-lg ring-1 ring-inset ring-white/5" />
    </div>
  );
}