import React from "react";
import { Text } from "@unio/ui";

const ITEMS = ["Plans", "Goals", "Tasks", "Metrics"];

export default function WorkspaceGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {ITEMS.map((item) => (
        <div key={item} className="space-y-2">
          <Text size="tiny" tone="tertiary" weight="bold" uppercase>
            {item}
          </Text>
          {/* 🕳️ Inset look using subtle transparency and shadow */}
          <div className="h-16 bg-black/5 dark:bg-white/[0.02] border border-white/5 rounded-unio-md border-dashed shadow-inner" />
        </div>
      ))}
    </div>
  );
}