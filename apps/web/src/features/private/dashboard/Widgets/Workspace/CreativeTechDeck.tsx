import React from "react";
import { Text, Button } from "@unio/ui";
import WorkspaceGrid from "./WorkspaceGrid";

export default function CreativeTechDeck() {
  return (
    /* 🧊 Added unio-glass, removed flat bg and border classes */
    <section className="unio-glass flex-1 min-h-0 flex flex-col">
      <div className="px-6 py-3 border-b border-white/5 flex justify-between items-center bg-background/30">
        <Text weight="bold" size="small">
          Creative Technologist
        </Text>
        <Button
          size="xs"
          variant="ghost"
          className="text-[10px] tracking-widest uppercase"
        >
          Deck View
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-5">
        <WorkspaceGrid />
      </div>
    </section>
  );
}