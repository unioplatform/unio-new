import React from "react";

export default function NetworkPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Networking</h1>
        <p className="text-text-secondary mt-2">
          Welcome to Unio. Your private layout is now active!
        </p>
      </header>

      {/* Test Grid to see the layout container in action */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div 
            key={i} 
            className="h-32 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm flex items-center justify-center"
          >
            <span className="text-text-tertiary">Stat Card {i}</span>
          </div>
        ))}
      </div>

      <div className="h-96 rounded-2xl border border-dashed border-border/60 flex items-center justify-center">
        <p className="text-text-tertiary">Main Content Area (Check padding & header height)</p>
      </div>
    </div>
  );
}