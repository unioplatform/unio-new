import { Timeline, PlaygroundElements, PlaygroundColors } from "../types";

export const headerSequence = (
  tl: Timeline,
  el: PlaygroundElements,
  colors: PlaygroundColors
) => {
  tl.to(el.headerTitle, {
    duration: 1.0,
    text: "The Unio Playground",
    ease: "none",
  });
};
