/* 📁 apps/web/src/features/landing/sections/playground/components/EditorCanvas.tsx */

import React from "react";
import SpellcheckTooltip from "./SpellcheckTooltip";
import AiSuggestionWidget from "./AiSuggestionWidget";

const EditorCanvas: React.FC = () => {
  return (
    <div
      className="
        w-full h-full
        flex justify-center items-start   /* 👈 top align */
        overflow-hidden
        bg-background-secondary
        pt-12 px-4
      "
    >
      {/* PAPER */}
      <div
        className="
          js-editor-paper
          w-full max-w-[816px]

          /* 🔥 THIS IS THE FIX */
          self-start shrink-0

          /* fixed visual height */
          h-[600px]

          overflow-y-auto

          bg-background-primary
          shadow-[0_0_50px_rgba(0,0,0,0.08)]
          px-10 md:px-16 py-12
          relative rounded-t-md
        "
      >
        {/* =============================== */}
        {/* Title */}
        {/* =============================== */}
        <h1 className="text-4xl font-bold tracking-tight text-text-primary mb-8 h-12 flex items-center">
          <span className="js-header-title">
            Introducing the Unio Playground
          </span>
          <span
            data-cursor="user1"
            className="js-header-cursor w-[3px] h-9 ml-1 inline-block bg-accent"
          />
        </h1>

        {/* =============================== */}
        {/* Body */}
        {/* =============================== */}
        <div className="space-y-6 text-[16px] leading-[1.6] font-normal text-text-tertiary">
          <div className="relative">
            <p className="mb-4">
              The Unio Playground is the heart of our collaborative world.{" "}
              <span className="relative inline-block">
                <span className="js-highlight-bg absolute inset-0 -mx-1 -my-0.5 rounded-sm bg-blue-500/20" />
                <span className="js-highlight-target relative z-10">
                  It’s where ideas take shape
                </span>
              </span>{" "}
              through shared documents, live editing, and a foundation built for
              teams and solo creators alike.
            </p>

            <p className="relative min-h-[1.5em]">
              <span className="js-user1-para-text">
                Designed as a next generation workspace, the Playground blends
                productivity with social presence so every interaction feels
                connected and intentional.
              </span>
              <span
                data-cursor="user1"
                className="js-user1-para-cursor w-[2px] h-5 ml-0.5 inline-block"
              />
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-text-primary mt-10 mb-4">
            The Foundation
          </h2>

          <ul className="list-disc pl-5 space-y-5 marker:text-text-tertiary">
            <li className="relative pl-2">
              <span className="inline-flex items-baseline flex-wrap">
                <div className="relative inline-block group">
                  <span className="js-user2-typo border-b-[2px] border-dotted border-danger/60 pb-[1px]" />
                  <SpellcheckTooltip />
                </div>
                <span className="js-user2-suffix ml-1">
                  Built on a clean and reliable editor core that ensures your
                  work stays structured and readable.
                </span>
                <span
                  data-cursor="user2"
                  className="js-cursor-1 w-[2px] h-4 ml-0.5 inline-block"
                />
              </span>
            </li>

            <li className="relative js-user2-bullet-2-li pl-2">
              <span className="inline-flex items-baseline flex-wrap">
                <span className="js-user2-bullet-2-draft">
                  The Playground adapts naturally to different workflows
                </span>
                <span className="js-user2-bullet-2-final font-medium px-1.5 rounded bg-background-secondary ml-1">
                  whether alone or collaborating live.
                </span>
                <span
                  data-cursor="user2"
                  className="js-cursor-2 w-[2px] h-4 ml-0.5 inline-block"
                />
              </span>

              <AiSuggestionWidget className="absolute left-32 top-10 z-50 shadow-2xl" />
            </li>

            <li className="relative js-user2-bullet-3-li pl-2">
              <span className="inline-flex items-baseline flex-wrap">
                <span className="js-user2-bullet-3-text">
                  Every part of the experience is intentionally crafted to feel
                  intuitive, social, and powerful.
                </span>
                <span
                  data-cursor="user2"
                  className="js-cursor-3 w-[2px] h-4 ml-0.5 inline-block"
                />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EditorCanvas;