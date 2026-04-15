/* apps/web/src/features/landing/sections/Playground/animations/bullet1Sequence.ts */
import { Timeline, PlaygroundElements, PlaygroundColors } from "../types";

export const bullet1Sequence = (
  tl: Timeline,
  el: PlaygroundElements,
  colors: PlaygroundColors
) => {
  // Show cursor with a slight delay for realism
  tl.set(el.cursor1, { display: "inline-block" }, "+=0.2");

  // Typo typing phase
  tl.to(el.user2Typo, {
    duration: 0.8,
    text: "Bilt",
    ease: "none",
  });

  // Remainder of the sentence
  tl.to(el.user2Suffix, {
    duration: 1.2,
    text: "\u00A0 on a foundation meant to scale with your ideas.",
    ease: "none",
  });

  // Red underline (using Tailwind 'danger' color from your config)
  tl.set(
    el.user2Typo,
    {
      className: "js-user2-typo border-b-2 border-danger/80 decoration-wavy",
    },
    "<0.5"
  );

  // Tooltip appears with a smooth "Spatial" float
  tl.to(el.spellcheckTooltip, { 
    autoAlpha: 1, 
    y: 0, 
    duration: 0.4,
    ease: "power2.out"
  });

  tl.to({}, { duration: 0.5 }); // Pause for user to read

  // Instant Correction
  tl.to(el.user2Typo, {
    duration: 0.1,
    text: "Built",
    className: "js-user2-typo", // Remove underline
  });

  // Tooltip exit
  tl.to(el.spellcheckTooltip, { 
    autoAlpha: 0, 
    y: 4, 
    duration: 0.3,
    ease: "power2.in"
  });
};