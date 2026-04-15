import { Timeline, PlaygroundElements, PlaygroundColors } from "../types";

export const user2EnterSequence = (
  tl: Timeline,
  el: PlaygroundElements,
  colors: PlaygroundColors
) => {
  tl.to(
    el.user2Avatar,
    {
      autoAlpha: 1,
      scale: 1,
      duration: 0.45,
      ease: "back.out(1.6)",
    },
    "+=0.3"
  );
};
