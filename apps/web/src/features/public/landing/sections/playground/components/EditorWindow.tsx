/* 📁 apps/web/src/features/landing/sections/playground/components/EditorWindow.tsx */

import React from "react";
import EditorHeader from "./EditorHeader";
import EditorToolbar from "./EditorToolbar";
import EditorCanvas from "./EditorCanvas";
import GenericMouse from "./GenericMouse";

const EditorWindow: React.FC = () => {
  return (
    <div
      style={{
        transform: "perspective(2000px) rotateX(4deg) rotateY(-4deg)",
        transformStyle: "preserve-3d",
      }}
      className="
        relative w-full

        /* 🔥 LOCKED HEIGHT (prevents ALL jumping) */
        h-[600px] min-h-[600px] max-h-[600px]
      "
    >
      {/* 🔥 OUTER DEPTH SHADOW */}
      <div className="absolute inset-0 rounded-unio-lg shadow-[0_60px_120px_-20px_rgba(0,0,0,0.65)]" />

      {/* 🔥 MAIN WINDOW */}
      <div
        className="
          relative flex flex-col w-full h-full
          overflow-hidden
          rounded-unio-lg
          bg-background

          /* 💎 3D BORDER */
          border border-white/10

          /* ✨ TOP LIGHT */
          before:absolute before:inset-0 before:rounded-unio-lg
          before:pointer-events-none
          before:shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]

          /* 🌑 BOTTOM DEPTH */
          after:absolute after:inset-0 after:rounded-unio-lg
          after:pointer-events-none
          after:shadow-[inset_0_-2px_6px_rgba(0,0,0,0.4)]
        "
      >
        {/* ✨ LIGHT GRADIENT */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-[120px] bg-gradient-to-b from-white/10 to-transparent opacity-60" />

        <EditorHeader />
        <EditorToolbar />

        {/* 🔥 CONTENT AREA */}
        <div className="relative flex-1 overflow-hidden">
          <EditorCanvas />
        </div>

        <GenericMouse />
      </div>
    </div>
  );
};

export default EditorWindow;