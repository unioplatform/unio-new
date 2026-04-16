import React from "react";
import { Button } from "@unio/ui";

export default function AiInput() {
  return (
    /* 🧼 Sleek bottom bar with a subtle top etch */
    <div className="p-4 bg-white/[0.02] border-t border-white/5 backdrop-blur-md">
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Ask Unio..."
          /* Reduced height and used shadow-inner to look recessed into the glass */
          className="w-full h-11 pl-4 pr-12 rounded-full border border-white/10 
            bg-black/5 dark:bg-white/[0.02] text-sm outline-none 
            focus:border-accent/40 transition-all shadow-inner 
            placeholder:text-text-tertiary/50"
        />
        
        {/* Positioned the button to feel integrated into the line */}
        <div className="absolute right-1">
          <Button 
            size="sm" 
            className="rounded-full h-9 w-9 bg-accent hover:bg-accent-hover shadow-lg shadow-accent/10 border-none transition-transform active:scale-95"
          >
            ↑
          </Button>
        </div>
      </div>
    </div>
  );
}