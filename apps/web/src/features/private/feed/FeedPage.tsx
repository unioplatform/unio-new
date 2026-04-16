import React from "react";
import { Text, Button } from "@unio/ui";

export default function FeedPage() {
  return (
    <div className="flex gap-unio-gap h-full w-full">
      
      {/* ⬅️ LEFT: PROFILE & NAV (Fixed width) */}
      <aside className="w-64 shrink-0 hidden lg:flex flex-col gap-6">
        {/* Profile Card */}
        <div className="unio-glass p-6 text-center">
          <div className="w-16 h-16 bg-accent rounded-unio-md mx-auto mb-4 shadow-lg shadow-accent/20 flex items-center justify-center">
             <Text weight="black" className="text-white text-2xl">C</Text>
          </div>
          <Text weight="bold" size="large">christy mugs</Text>
          <Text size="tiny" uppercase tracking="widest" tone="tertiary">Software Developer</Text>
          <Text italic size="small" tone="secondary" className="mt-2 block">a hard and tired worker</Text>
        </div>

        {/* Momentum Stats */}
        <div className="unio-glass p-5">
          <Text size="tiny" weight="bold" uppercase tracking="widest" tone="tertiary" className="mb-4 block border-b border-white/5 pb-2">Momentum</Text>
          <div className="flex justify-between">
            {["Views", "Network", "Syncs"].map((stat) => (
              <div key={stat} className="text-center">
                <Text weight="bold" size="medium">00</Text>
                <Text size="tiny" uppercase tone="tertiary" className="block text-[8px]">{stat}</Text>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation List */}
        <div className="unio-glass p-5 flex flex-col gap-4">
          <Text size="tiny" weight="bold" uppercase tracking="widest" tone="tertiary" className="border-b border-white/5 pb-2">Personal</Text>
          <nav className="flex flex-col gap-3">
             <div className="flex justify-between items-center group cursor-pointer"><Text size="small" className="group-hover:text-accent transition-colors">Drafts</Text><Text size="tiny" tone="tertiary">1</Text></div>
             <Text size="small" className="hover:text-accent cursor-pointer transition-colors">Your Connections</Text>
             <Text size="small" className="hover:text-accent cursor-pointer transition-colors">Your Communities</Text>
             <Text size="small" className="hover:text-accent cursor-pointer transition-colors">Bookmarks</Text>
          </nav>
        </div>

        {/* Segmented Switcher */}
        <div className="unio-glass h-11 p-1 flex">
          <button className="flex-1 flex items-center justify-center bg-white/10 dark:bg-white/5 shadow-sm rounded-unio-sm">
            <Text size="tiny" weight="bold" uppercase tracking="widest">Focus</Text>
          </button>
          <button className="flex-1 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
            <Text size="tiny" weight="bold" uppercase tracking="widest">Discovery</Text>
          </button>
        </div>
      </aside>

      {/* 📝 CENTER: MAIN FEED (Stretches) */}
      <section className="flex-1 flex flex-col gap-6 min-w-0">
        {/* Brainstorm Input */}
        <div className="unio-glass !rounded-[24px] p-8">
          <Text size="large" className="text-xl lg:text-2xl mb-8 block opacity-80">Capture an insight or launch a brainstorm...</Text>
          <div className="flex items-center justify-between">
            <div className="flex gap-4 opacity-40">
              <div className="w-5 h-5 bg-text-primary rounded-sm" />
              <div className="w-5 h-5 bg-text-primary rounded-sm" />
              <div className="w-5 h-5 bg-text-primary rounded-sm" />
            </div>
            <Button size="sm" className="rounded-full px-6 uppercase tracking-widest text-[10px] shadow-lg shadow-accent/10">
              Public
            </Button>
          </div>
        </div>

        {/* Small Signal Blocks */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-accent/10 backdrop-blur-md rounded-unio-lg border border-accent/20 h-32 flex items-center justify-center">
             <Text size="tiny" weight="bold" tone="brand" uppercase tracking="widest">Priority Sync</Text>
          </div>
          <div className="unio-glass h-32" />
        </div>

        {/* Feed Item */}
        <div className="unio-glass p-6">
          <div className="flex gap-3 mb-4">
            <div className="w-10 h-10 bg-accent rounded-unio-md shrink-0 flex items-center justify-center shadow-sm">
               <Text weight="bold" className="text-white">C</Text>
            </div>
            <div className="flex-1">
              <Text weight="bold" size="small">Christy Mugs</Text>
              <Text size="tiny" uppercase tone="tertiary" className="block">Software Developer</Text>
            </div>
            <Text size="tiny" tone="tertiary" className="opacity-50">1 MONTH AGO</Text>
          </div>
          <Text className="mb-6 block text-lg">hiiii</Text>
          <div className="pt-4 border-t border-white/5 flex gap-6 opacity-40">
             <span className="cursor-pointer hover:text-accent transition-colors">♡</span>
             <span className="cursor-pointer hover:text-accent transition-colors">💬</span>
             <span className="cursor-pointer hover:text-accent transition-colors">🔄</span>
          </div>
        </div>
      </section>

      {/* 📡 RIGHT: SIGNALS (Fixed width) */}
      <aside className="w-[320px] hidden xl:flex flex-col gap-6 shrink-0">
        {/* Signals List */}
        <div className="unio-glass !rounded-[24px] p-8">
          <div className="space-y-6">
            {[
              { id: "01", title: "Neural Rendering 2026" },
              { id: "02", title: "UNIO" },
              { id: "03", title: "Vision 2026" }
            ].map((signal) => (
              <div key={signal.id} className="group cursor-pointer">
                <Text size="tiny" weight="bold" tone="tertiary" uppercase tracking="widest" className="block mb-1 opacity-40 group-hover:opacity-100 transition-opacity">
                  Signal // {signal.id}
                </Text>
                <Text weight="bold" size="medium" className="uppercase tracking-tight group-hover:text-accent transition-colors">{signal.title}</Text>
              </div>
            ))}
          </div>
          <Button variant="ghost" className="w-full mt-10 uppercase tracking-widest text-[10px] text-text-tertiary hover:bg-white/5 transition-all">
            Sync Intelligence
          </Button>
        </div>

        {/* Labs Grid */}
        <div className="unio-glass !rounded-[24px] p-8">
          <Text size="tiny" weight="bold" uppercase tracking="widest" tone="tertiary" className="block mb-6 border-b border-white/5 pb-2">Cognitive Labs</Text>
          <div className="grid grid-cols-2 gap-6">
            {["Synthesis", "Ethics", "Systems", "Foresight"].map((lab) => (
              <div key={lab} className="group cursor-pointer">
                <div className="w-8 h-8 bg-accent/20 rounded-unio-md mb-2 flex items-center justify-center group-hover:bg-accent transition-all">
                   <div className="w-1 h-1 bg-accent group-hover:bg-white rounded-full" />
                </div>
                <Text size="tiny" weight="bold" uppercase className="block group-hover:text-accent transition-colors">{lab}</Text>
                <div className="h-px w-4 bg-white/10 mt-1" />
              </div>
            ))}
          </div>
          <Button variant="ghost" className="w-full mt-8 uppercase tracking-widest text-[10px] opacity-30 hover:opacity-100">
            Access All Labs
          </Button>
        </div>
      </aside>

    </div>
  );
}