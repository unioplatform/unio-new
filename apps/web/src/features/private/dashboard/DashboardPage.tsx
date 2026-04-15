import React from "react";
import { Text, Button } from "@unio/ui";

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full pb-12 overflow-hidden">
      
      {/* 🔥 FLEX LAYOUT INSTEAD OF GRID */}
      <div className="flex gap-6 flex-1 min-h-0">
        
        {/* ⬅️ LEFT: MAIN CONTENT (stretches naturally) */}
        <div className="flex-1 flex flex-col gap-6 min-h-0">
          
          {/* Top Row */}
          <div className="grid grid-cols-3 gap-6 h-[110px] shrink-0">
            <div className="col-span-2 bg-white/5 dark:bg-black/20 rounded-unio-lg border border-border-subtle p-5 flex items-center">
              <Text weight="bold" size="large">Profile Card</Text>
            </div>
            <div className="col-span-1 bg-white/5 dark:bg-black/20 rounded-unio-lg border border-border-subtle p-5 flex items-center">
              <Text weight="bold">Weather</Text>
            </div>
          </div>

          {/* Middle Row */}
          <div className="grid grid-cols-3 gap-6 h-[360px] shrink-0">
            {["Calendar", "Events & News", "Activity"].map((title) => (
              <div
                key={title}
                className="bg-white dark:bg-black/20 rounded-unio-lg border border-border-subtle p-5 flex flex-col"
              >
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
                <div className="flex-1" />
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <section className="flex-1 min-h-0 bg-white dark:bg-black/20 rounded-unio-lg border border-border-subtle flex flex-col shadow-sm">
            <div className="px-6 py-3 border-b border-border-faint flex justify-between items-center bg-background/30">
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Plans", "Goals", "Tasks", "Metrics"].map((item) => (
                  <div key={item} className="space-y-2">
                    <Text
                      size="tiny"
                      tone="tertiary"
                      weight="bold"
                      uppercase
                    >
                      {item}
                    </Text>
                    <div className="h-16 bg-accent-bg/5 border border-border-faint rounded-unio-md border-dashed" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* ➡️ RIGHT: AI SIDEBAR (slimmer, controlled width) */}
        <aside className="w-[380px] xl:w-[420px] 2xl:w-[460px] shrink-0 min-h-0">
          <div className="flex flex-col h-full bg-accent-bg/10 border border-accent/20 rounded-unio-lg overflow-hidden shadow-2xl max-w-full">
            
            {/* Header */}
            <div className="p-5 border-b border-accent/20 bg-accent/5 flex items-center justify-between">
              <Text weight="bold" tone="brand" size="medium">
                Unio AI Assistant
              </Text>
              <div className="px-2 py-1 rounded bg-accent/10 border border-accent/20">
                <Text size="tiny" weight="bold" tone="brand">
                  PRO
                </Text>
              </div>
            </div>

            {/* Feed */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5">
              <div className="bg-white/60 dark:bg-black/40 p-5 rounded-unio-lg border border-accent/10 shadow-sm">
                <Text size="medium" className="leading-relaxed">
                  Ready to optimize your workflow? I’ve cross-referenced your metrics.
                  <br /><br />
                  There’s a gap in your "Plans" progress. Want me to prioritize it at 2 PM?
                </Text>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 bg-background/80 border-t border-border-faint backdrop-blur-md">
              <div className="relative">
                <textarea
                  rows={3}
                  placeholder="Ask Unio to build, plan, or analyze..."
                  className="w-full p-3 pr-12 rounded-unio-lg border border-border-subtle bg-background text-sm outline-none focus:border-accent transition-all resize-none shadow-inner"
                />
                <div className="absolute right-3 bottom-3">
                  <Button size="sm" className="rounded-full h-9 w-9">
                    ↑
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </aside>

      </div>
    </div>
  );
}