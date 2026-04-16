import React from "react";
import { Text } from "@unio/ui";

export default function CalendarWidget() {
  return (
    <div className="unio-glass p-5 flex flex-col">
      <Text
        size="tiny"
        weight="bold"
        tone="tertiary"
        uppercase
        tracking="widest"
        className="mb-4 border-b border-white/5 pb-2"
      >
        Calendar
      </Text>
      <div className="flex-1" />
    </div>
  );
}