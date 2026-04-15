import { Timeline, PlaygroundElements, PlaygroundColors } from "../types";

export const bullet3Sequence = (
  tl: Timeline,
  el: PlaygroundElements,
  colors: PlaygroundColors
) => {
  // Hide previous cursor and show the next
  tl.set(el.cursor2, { display: "none" });
  tl.to(el.user2Bullet3Li, { autoAlpha: 1 });
  tl.set(el.cursor3, { display: "inline-block" });

  // Safety reset — ensures GSAP can't leave stale inline styles after a repeat
  tl.set(el.user2Bullet3Text, {
    color: "inherit",
    fontWeight: "inherit",
    opacity: 1,
  });

  // Final typing animation (inherits parent color)
  tl.to(el.user2Bullet3Text, {
    duration: 2.0,
    text: "Uni helps refine your ideas at the moment you need it.",
    ease: "none",
  });
};
