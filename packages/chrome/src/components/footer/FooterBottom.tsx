import React from "react";
import { Text } from "@unio/ui";

const YEAR = new Date().getFullYear();

export const FooterBottom = () => (
  <div className="mt-16 pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-6">
    {/* ✅ Pure Text (Span) wrapping a Time element */}
    <Text size="tiny" className="text-text-tertiary font-medium">
      © <time dateTime={YEAR.toString()}>{YEAR}</time> Unio Technologies Inc. All rights reserved.
    </Text>

    <div className="flex items-center gap-6">
      <button 
        type="button"
        className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary hover:text-accent transition outline-none focus-visible:text-accent"
      >
        English (UK)
      </button>

      {/* ✅ Pure Text (Span) with custom tabular classes */}
      <Text size="tiny" className="text-text-tertiary opacity-40 tabular-nums">
        v2.0.26
      </Text>
    </div>
  </div>
);
