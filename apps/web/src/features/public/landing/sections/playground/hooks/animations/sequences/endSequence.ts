import { Timeline, PlaygroundElements, PlaygroundColors } from "../types";

export const endSequence = (
  tl: Timeline,
  el: PlaygroundElements,
  colors: PlaygroundColors
) => {
  tl.to([el.cursor3, el.user1ParaCursor], {
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
  });
};
