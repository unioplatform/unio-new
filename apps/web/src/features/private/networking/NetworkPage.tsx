import React from "react";
import { Text, Button } from "@unio/ui";

export default function NetworkingPage() {
  return (
    /* pb-8 ensures the entire 'tray' of widgets floats off the bottom */
    <div className="flex gap-4 h-[calc(100vh-140px)] w-full overflow-hidden pb-8">
      
      {/* ⬅️ LEFT COLUMN */}
      <aside className="w-72 shrink-0 hidden lg:flex flex-col gap-4 min-h-0">
        
        {/* Profile Card */}
        <div className="unio-glass p-6 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center shadow-lg shadow-accent/20 border border-white/10">
              <Text weight="black" size="xl" className="text-white">DM</Text>
            </div>
            <div className="flex flex-col">
              <Text weight="bold" size="medium">Dean Mugs</Text>
              <Text size="tiny" tone="tertiary" uppercase tracking="widest">Painter • Global</Text>
            </div>
            <div className="w-full grid grid-cols-3 gap-1 py-4 mt-2 border-y border-white/5">
               {[["4","Conn"], ["24","Ping"], ["+0","Velo"]].map(([val, label]) => (
                 <div key={label} className="flex flex-col">
                    <Text weight="bold" size="small">{val}</Text>
                    <Text size="tiny" tone="tertiary" uppercase className="text-[9px]">{label}</Text>
                 </div>
               ))}
            </div>
            <Button variant="ghost" size="xs" className="w-full mt-2 uppercase tracking-widest text-[10px] opacity-70">
              Boost Profile
            </Button>
          </div>
        </div>

        {/* 🛠️ ENGINE STACK (Fixed Reference Height) */}
        <div className="h-[320px] unio-glass p-4 flex flex-col">
          <div className="mb-3 flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-1 h-1 bg-accent rounded-full" />
            </div>
            <Text size="tiny" weight="bold" uppercase tracking="widest" tone="tertiary">Engine</Text>
          </div>

          <div className="space-y-3 flex-1 overflow-y-auto custom-scrollbar pr-1">
            {[
              { label: "Exp", val: "2-4 YRS" },
              { label: "Loc", val: "50 MILES" },
              { label: "Edu", val: "MASTERS" }
            ].map(f => (
              <div key={f.label} className="flex justify-between items-end border-b border-white/5 pb-1">
                <Text size="tiny" tone="tertiary" uppercase className="text-[9px]">{f.label}</Text>
                <Text weight="bold" size="tiny">{f.val}</Text>
              </div>
            ))}
          </div>

          <Button size="xs" variant="ghost" className="w-full uppercase tracking-tighter text-[9px] mt-3 border border-white/10">
            Rebuild Stack
          </Button>
        </div>
      </aside>

      {/* 🃏 CENTER: DISCOVERY STACK */}
      <section className="flex-1 flex flex-col items-center justify-between py-4 min-h-0">
        <div className="text-center shrink-0">
          <Text size="2xl" weight="bold" italic uppercase tracking="tight">
            Discover Your <Text tone="brand">Network</Text>
          </Text>
        </div>

        <div className="relative w-full max-w-[360px] flex-1 my-6 max-h-[480px]">
          <div className="absolute inset-0 translate-y-[-12px] scale-95 opacity-40 unio-glass rotate-[-1.5deg]" />
          <div className="absolute inset-0 bg-text-primary dark:bg-black rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col p-8">
            <div className="flex-1 border border-white/10 rounded-[2rem] p-6 relative flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
              <Text weight="black" size="4xl" className="text-white uppercase leading-none mb-3">ALEX<br/>RIVERA</Text>
              <Text size="small" className="text-white/60 leading-snug">Building design systems for over 2 billion people.</Text>
            </div>
          </div>
        </div>

        <div className="flex gap-6 shrink-0 pb-4">
           <button className="w-14 h-12 rounded-xl unio-glass flex items-center justify-center hover:bg-red-500/10 transition-all border-none">
              <Text size="large" tone="tertiary">✕</Text>
           </button>
           <button className="w-20 h-12 rounded-xl bg-accent flex items-center justify-center shadow-lg shadow-accent/20 active:scale-95 transition-all">
              <Text size="large" className="text-white">✓</Text>
           </button>
        </div>
      </section>

      {/* 📥 RIGHT COLUMN */}
      <aside className="w-72 hidden xl:flex flex-col shrink-0 min-h-0">
        {/* 📥 INTERACTION HUB (Symmetrical Height) 
            Set to match the bottom edge of the Engine Filter stack on the left.
        */}
        <div className="h-[650px] unio-glass p-5 flex flex-col items-center">
          <div className="w-full mb-6">
            <Text size="tiny" weight="bold" tone="tertiary" uppercase tracking="widest" className="block opacity-60">Interaction Hub</Text>
            <Text weight="bold" size="small" italic uppercase>Your <Text tone="brand">Requests</Text></Text>
          </div>

          <div className="flex w-full bg-black/5 dark:bg-white/5 border border-white/5 rounded-lg p-1 mb-8">
            <button className="flex-1 py-1.5 rounded-md bg-white/10 dark:bg-white/10 shadow-sm">
              <Text size="tiny" weight="bold" uppercase className="text-[9px]">Discovery</Text>
            </button>
            <button className="flex-1 py-1.5 rounded-md opacity-50">
              <Text size="tiny" weight="bold" uppercase tone="tertiary" className="text-[9px]">Connect</Text>
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center opacity-30">
            <div className="w-12 h-12 border border-white/20 rounded-full mb-4 flex items-center justify-center bg-white/5">
               <Text size="2xl">🔍</Text>
            </div>
            <Text size="tiny" weight="bold" uppercase tracking="widest" className="text-[10px]">End of Stack</Text>
          </div>
          
          <div className="w-full mt-auto pt-4 border-t border-white/5">
             <Text size="tiny" tone="tertiary" className="text-center block italic opacity-50 text-[10px]">Swipe to refresh</Text>
          </div>
        </div>
      </aside>

    </div>
  );
}