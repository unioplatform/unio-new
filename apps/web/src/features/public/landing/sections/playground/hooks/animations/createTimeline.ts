// -----------------------------------------------------------------------------
// 📁 createTimeline.ts — GSAP Timeline Factory
// -----------------------------------------------------------------------------

import { gsap } from "gsap";
import type { RefObject } from "react";

export const createTimeline = (
  containerRef: RefObject<HTMLDivElement>
) =>
  gsap.timeline({
    repeat: -1,
    repeatDelay: 5,
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 60%",
    },
  });
