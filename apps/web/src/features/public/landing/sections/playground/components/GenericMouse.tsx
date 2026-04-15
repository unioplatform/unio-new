// -----------------------------------------------------------------------------
// 📁 GenericMouse.tsx — Floating Cursor for GSAP Interactions
// -----------------------------------------------------------------------------
// - Absolutely positioned container
// - GSAP targets `.js-generic-mouse` and animates x/y/opacity/scale
// - Keeps the SVG identical for animation consistency
// -----------------------------------------------------------------------------

import React from "react";

const GenericMouse: React.FC = () => {
  return (
    <div
      className="
        js-generic-mouse
        absolute z-50 pointer-events-none
        opacity-0  /* GSAP will fade this in/out */
      "
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path
          d="M5.5 3.5L19 17L11.5 17.5L15 23L12.5 24.5L9 19L3.5 24.5V3.5Z"
          fill="currentColor"
          className="text-foreground"
        />
        <path
          d="M5.5 3.5L19 17L11.5 17.5L15 23L12.5 24.5L9 19L3.5 24.5V3.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-background"
        />
      </svg>
    </div>
  );
};

export default GenericMouse;
