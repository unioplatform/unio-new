// -----------------------------------------------------------------------------
// 📁 AiSuggestionWidget.tsx — Unio AI Smart Suggestion Bubble
// -----------------------------------------------------------------------------
// - Accepts className override from parent
// - DS2 themed (background-secondary, accent colors, borders)
// - Positioned absolutely relative to the bullet line
// - Animation hooks: .js-ai-widget, .js-accept-btn
// -----------------------------------------------------------------------------

import React from "react";
import { Zap } from "lucide-react";
import clsx from "clsx";

interface AiSuggestionWidgetProps {
  className?: string;
}

const AiSuggestionWidget: React.FC<AiSuggestionWidgetProps> = ({ className = "" }) => {
  return (
    <div
      className={clsx(
        "js-ai-widget absolute left-40 -top-6 z-40 w-[240px] hidden",
        className
      )}
    >
      <div
        className="
          bg-background-secondary
          border border-accent/40
          rounded-lg shadow-[0_10px_35px_-6px_rgba(0,0,0,0.45)]
          p-3 backdrop-blur-xl
        "
      >
        <div className="flex gap-3">
          {/* Icon Bubble */}
          <div
            className="
              p-1.5 h-fit rounded
              bg-accent text-background
              shadow-md flex items-center justify-center
            "
          >
            <Zap className="w-3.5 h-3.5" />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-foreground">Unio AI</span>
              <span className="text-[9px] text-foreground-muted">Suggestion</span>
            </div>

            <p className="text-[10px] text-foreground-muted leading-relaxed">
              Better phrasing: <br />
              <span className="text-accent font-medium">
                "Made for seamless collaboration."
              </span>
            </p>

            {/* Accept Button */}
            <div className="relative pt-1">
              <button
                className="
                  js-accept-btn w-full py-1.5 text-[9px]
                  font-bold rounded bg-accent text-background
                  hover:bg-accent-hover transition-colors
                "
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiSuggestionWidget;
