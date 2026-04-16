import React from "react";
import { Text } from "@unio/ui";

interface SectionWrapperProps {
  title: string;
  children?: React.ReactNode;
}

export default function SectionWrapper({ title, children }: SectionWrapperProps) {
  return (
    <div className="bg-white dark:bg-black/20 rounded-unio-lg border border-border-subtle p-5 flex flex-col">
      <Text
        size="tiny"
        weight="bold"
        tone="tertiary"
        uppercase
        tracking="widest"
        className="mb-4 border-b border-border-faint pb-2"
      >
        {title}
      </Text>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}