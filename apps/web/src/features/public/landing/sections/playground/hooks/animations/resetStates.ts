/* apps/web/src/features/landing/sections/Playground/animations/resetStates.ts */
import { Timeline, PlaygroundElements, PlaygroundColors } from "./types";

export const resetStates = (
  tl: Timeline,
  el: PlaygroundElements,
  colors: PlaygroundColors
) => {
  // 🚀 Get current zoom
  const zoom = parseFloat(getComputedStyle(document.documentElement).zoom) || 1;

  tl.set(el.user1Avatar, { autoAlpha: 1, scale: 1 });
  tl.set(el.user2Avatar, { autoAlpha: 0, scale: 0.75 });

  tl.set(el.headerTitle, { text: "" });
  tl.set(el.headerCursor, { autoAlpha: 1 });

  tl.set(el.highlightBg, { scaleX: 0, transformOrigin: "left center" });
  tl.set(el.highlightTarget, { fontWeight: 400 });
  tl.set(el.boldBtn, { clearProps: "all" });

  tl.set([el.cursor1, el.cursor2, el.cursor3], { display: "none" });

  tl.set(el.user2Typo, {
    text: "",
    className: "js-user2-typo text-text-tertiary",
    display: "inline",
  });
  tl.set(el.user2Suffix, { text: "", display: "inline" });

  tl.set(el.user2Bullet2Li, { autoAlpha: 0 });
  tl.set(el.user2Bullet2Draft, { text: "", display: "inline" });
  tl.set(el.user2Bullet2Final, {
    display: "none",
    opacity: 0,
    text: "Made for effortless collaboration.",
  });

  tl.set(el.user2Bullet3Li, { autoAlpha: 0 });
  tl.set(el.user2Bullet3Text, { text: "" });

  tl.set(el.user1ParaCursor, { display: "none" });
  tl.set(el.user1ParaText, { text: "" });

  tl.set(el.spellcheckTooltip, { autoAlpha: 0, y: 5 });
  tl.set(el.aiWidget, { autoAlpha: 0, y: 8, display: "none" });
  
  // 🚀 ZOOM CORRECTED STARTING POSITION
  tl.set(el.genericMouse, { 
    autoAlpha: 0, 
    x: 300 / zoom, 
    y: 450 / zoom 
  });
};