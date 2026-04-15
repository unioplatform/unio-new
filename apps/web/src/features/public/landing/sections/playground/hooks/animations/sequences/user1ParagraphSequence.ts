import { Timeline, PlaygroundElements, PlaygroundColors } from "../types";

export const user1ParagraphSequence = (
  tl: Timeline,
  el: PlaygroundElements,
  colors: PlaygroundColors
) => {
  tl.set(el.user1ParaCursor, { display: "inline-block" }, "start_collab");

  tl.to(
    el.user1ParaText,
    {
      duration: 7.0,
      text:
        "Whether you're drafting alone or building together, the Playground keeps every interaction fluid, connected, and ready for what comes next.",
      ease: "none",
    },
    "start_collab"
  );
};
