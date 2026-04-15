// -----------------------------------------------------------------------------
// 📁 SpellcheckTooltip.tsx — Floating Spellcheck Suggestion Bubble (DS2)
// -----------------------------------------------------------------------------

import React from "react";

interface SpellcheckTooltipProps {
  suggestion?: string; 
  className?: string;
}

const SpellcheckTooltip: React.FC<SpellcheckTooltipProps> = ({
  suggestion = "Built",
  className = "",
}) => {
  return (
    <div
      className={`
        js-spellcheck-tooltip
        absolute bottom-full left-1/2 -translate-x-1/2 mb-1 z-40
        
        bg-background-secondary
        border border-border-subtle
        rounded-md shadow-lg
        px-2 py-1.5
        backdrop-blur-sm
        
        whitespace-nowrap
        ${className}
      `}
    >
      {/* Tooltip Label */}
      <div className="text-[10px] text-foreground-muted mb-1 tracking-tight">
        Did you mean:
      </div>

      {/* Correction Option */}
      <button
        className="
          js-spellcheck-option
          text-[11px] font-semibold tracking-tight
          w-full text-center px-2 py-0.5 rounded-sm
          
          text-accent
          bg-accent-bg
          hover:bg-accent-bg/80
          border border-accent/30

          transition-all
        "
      >
        {suggestion}
      </button>
    </div>
  );
};

export default SpellcheckTooltip;
