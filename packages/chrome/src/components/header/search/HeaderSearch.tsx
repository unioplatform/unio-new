import React, { useState } from "react";
import { Search, Send } from "lucide-react";
import { cn } from "@unio/ui";

export const HeaderSearch = () => {
  const [query, setQuery] = useState("");

  const hasQuery = query.length > 0;

  return (
    <div className="group relative flex items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className={cn(
          "h-9 w-48 lg:w-64 rounded-xl text-sm outline-none transition-all duration-200",
          /* Default State */
          "bg-background/40 border border-border/20 pl-4 pr-10 text-text-primary placeholder:text-text-tertiary",
          /* Focus State - Subtle glow instead of harsh white */
          "focus:bg-background/80 focus:border-accent/30 focus:ring-4 focus:ring-accent/5"
          /* Hover removed as requested to keep the dark aesthetic clean */
        )}
      />

      <div className="absolute right-3 flex items-center justify-center pointer-events-none">
        {hasQuery ? (
          /* Active State: Paper plane "Send" icon */
          <div className="flex items-center justify-center animate-in fade-in slide-in-from-right-2 duration-300">
            <Send className="h-3.5 w-3.5 text-accent" />
          </div>
        ) : (
          /* Default State: Static Search icon */
          <Search className="h-4 w-4 text-text-tertiary group-focus-within:text-accent transition-colors duration-300" />
        )}
      </div>
    </div>
  );
};