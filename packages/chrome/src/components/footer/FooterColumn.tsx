import React from "react";
import { Text } from "@unio/ui";
import { FooterLinkItem } from "./types";

export const FooterColumn: React.FC<{ title: string; items: readonly FooterLinkItem[] }> = ({ title, items }) => {
  if (!items?.length) return null;
  return (
    <div className="flex flex-col gap-5 min-w-[140px]">
      <Text className="text-caption text-text-primary">
        {title}
      </Text>
      <ul className="flex flex-col gap-3">
        {items.map(({ href, label }) => (
          <li key={label}>
            <a href={href} className="text-sm text-text-secondary hover:text-accent transition-colors font-medium">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
