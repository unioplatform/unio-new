import React from "react";
import { Text } from "@unio/ui";
import AiFeed from "./AiFeed";
import AiInput from "./AiInput";

export default function AiSidebar() {
  return (
    <aside className="w-[380px] xl:w-[420px] 2xl:w-[460px] shrink-0 min-h-0">
      {/* 🧊 Container now uses the shared glass utility */}
      <div className="flex flex-col h-full unio-glass overflow-hidden max-w-full">
        
        {/* Header: Subtle tint instead of heavy accent border */}
        <div className="p-5 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
          <Text weight="bold" tone="brand" size="medium">
            Unio AI Assistant
          </Text>
          <div className="px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20">
            <Text size="tiny" weight="bold" tone="brand" className="tracking-tighter">
              PRO
            </Text>
          </div>
        </div>

        <AiFeed />
        <AiInput />
      </div>
    </aside>
  );
}