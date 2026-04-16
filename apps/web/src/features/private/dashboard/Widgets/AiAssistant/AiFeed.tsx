import React from "react";
import { Text } from "@unio/ui";

export default function AiFeed() {
  return (
    <div className="flex-1 overflow-y-auto p-5 space-y-5">
      {/* 🗨️ Chat Bubble: Elevated glass look */}
      <div className="bg-white/5 dark:bg-white/[0.03] backdrop-blur-md p-5 rounded-unio-lg border border-white/10 shadow-sm">
        <Text size="medium" className="leading-relaxed">
          Ready to optimize your workflow? I’ve cross-referenced your metrics.
          <br /><br />
          There’s a gap in your "Plans" progress. Want me to prioritize it at 2 PM?
        </Text>
      </div>
    </div>
  );
}