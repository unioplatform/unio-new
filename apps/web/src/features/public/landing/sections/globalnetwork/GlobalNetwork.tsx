/* -----------------------------------------------------------------------------
   File: apps/web/src/features/landing/sections/GlobalNetwork/GlobalNetwork.tsx
----------------------------------------------------------------------------- */
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { pulseDots } from "../../animations";
import { useAnimatedMap } from "./useAnimatedMap";
import { generatePath } from "@unio/lib";
import { SectionHeader } from "../../shared"; 

export const GlobalNetwork: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { land, markers, pathGenerator } = useAnimatedMap();

  useGSAP(
    () => {
      if (!markers.length) return;
      pulseDots(markers);
    },
    { scope: containerRef, dependencies: [markers] }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[80vh] md:h-screen flex flex-col items-center justify-center overflow-hidden"
    >

      <SectionHeader
        title="A Network Built for the Entire World"
        subtitle="Unio connects professionals, creators, and innovators across continents. Your people are everywhere—now so are you."
        className="mb-8" 
      />

      {/* 🌍 World Map Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
        <svg
          viewBox="0 0 800 400"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full scale-110 translate-y-12" 
        >
          {land && (
            <path
              d={generatePath(pathGenerator, land)}
              className="text-text-tertiary opacity-30"
              fill="currentColor"
              stroke="hsla(var(--border-subtle-raw), 0.15)"
              strokeWidth="0.5"
            />
          )}

          <g className="text-accent">
            {markers.map((m) => (
              <circle
                key={m.id}
                className="unio-user-dot"
                cx={m.x}
                cy={m.y}
                r={1.2}
                fill="currentColor"
                style={{
                  filter: "drop-shadow(0 0 4px hsla(var(--accent-1), 0.8))"
                }}
              />
            ))}
          </g>
        </svg>
      </div>
    </section>
  );
};

export default React.memo(GlobalNetwork);