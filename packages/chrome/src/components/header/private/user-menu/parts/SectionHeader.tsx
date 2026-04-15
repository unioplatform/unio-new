import React from "react";
import { Text } from "@unio/ui";

export const SectionHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="px-3 py-1 mt-2 mb-0.5">
    <Text size="tiny" weight="bold" tone="tertiary" uppercase tracking="widest" className="opacity-70">
      {children}
    </Text>
  </div>
);