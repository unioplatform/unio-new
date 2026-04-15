import { Timeline, PlaygroundElements, PlaygroundColors } from "../types";

export const highlightSequence = (
  tl: Timeline,
  el: PlaygroundElements,
  colors: PlaygroundColors
) => {
  tl.set(el.headerCursor, { autoAlpha: 0, delay: 0.3 });

  tl.to(el.highlightBg, {
    scaleX: 1,
    duration: 0.6,
    ease: "power2.inOut",
    backgroundColor: colors.genericHighlight,
  });

  tl.to({}, { duration: 0.2 });

  tl.to(el.boldBtn, {
    scale: 0.9,
    backgroundColor: colors.accent + "33",
    color: colors.accent,
    duration: 0.1,
  });

  tl.to(
    el.highlightTarget,
    { fontWeight: 700, duration: 0.05 },
    "<"
  );

  tl.to(el.boldBtn, { scale: 1, clearProps: "backgroundColor,color" });
  tl.to(el.highlightBg, { opacity: 0, duration: 0.4 });
};
