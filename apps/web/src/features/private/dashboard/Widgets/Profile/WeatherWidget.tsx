import React from "react";
import { Text } from "@unio/ui";

/**
 * @name WeatherWidget
 * @description Integrated 3D Glass variant.
 * Matches the optical thickness and bezel of the dashboard system.
 */
export default function WeatherWidget() {
  return (
    <div className="unio-glass h-full p-5 flex items-center">
      <div className="flex items-center gap-3">
        {/* Subtle glass-etched icon placeholder */}
        <div className="w-8 h-8 rounded-full bg-accent/10 border border-white/10 flex items-center justify-center">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
        </div>
        <Text weight="bold" size="small" tone="default">
          Weather
        </Text>
      </div>
    </div>
  );
}