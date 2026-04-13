import React from "react";
import { Text } from "@unio/ui";
import { FooterLinkItem } from "./types";

export const FooterColumn: React.FC<{ title: string; items: readonly FooterLinkItem[] }> = ({ title, items }) => {
  if (!items?.length) return null;
  return (
<<<<<<< HEAD
    <div className="flex flex-col gap-4 min-w-[120px]">
      <Text className="text-sm font-semibold text-text-primary">
        {title}
      </Text>
      <ul className="flex flex-col gap-2">
        {items.map(({ href, label }) => (
          <li key={label}>
            <a href={href} className="text-sm text-text-secondary hover:text-accent transition-colors">
=======
    <div className="flex flex-col gap-5 min-w-[140px]">
      <Text className="text-caption text-text-primary">
        {title}
      </Text>
      <ul className="flex flex-col gap-3">
        {items.map(({ href, label }) => (
          <li key={label}>
            <a href={href} className="text-sm text-text-secondary hover:text-accent transition-colors font-medium">
>>>>>>> 9606bfe728f0728e4a01299924ecccb4bcad0167
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> 9606bfe728f0728e4a01299924ecccb4bcad0167
