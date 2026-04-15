// 📁 apps/web/src/features/landing/sections/playground/hooks/usePlaygroundAnimation.ts
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import type { RefObject } from "react";
import { 
  queryElements,
  tokenHelpers,
  createTimeline,
  resetStates,
  headerSequence,
  highlightSequence,
  user2EnterSequence,
  bullet1Sequence,
  bullet2Sequence,
  bullet3Sequence,
  user1ParagraphSequence,
  endSequence,
} from "./animations";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

/**
 * 🎯 usePlaygroundAnimation
 * Now explicitly allows RefObject to contain null to satisfy TypeScript.
 */
export const usePlaygroundAnimation = (
  containerRef: RefObject<HTMLDivElement | null> 
) => {
  useGSAP(
    (context) => {
      // Safety check: GSAP won't run until the ref is attached
      if (!containerRef.current) return;

      const q = context.selector!;
      const el = queryElements(q);
      const colors = tokenHelpers();
      const tl = createTimeline(containerRef as RefObject<HTMLDivElement>);

      resetStates(tl, el, colors);

      headerSequence(tl, el, colors);
      highlightSequence(tl, el, colors);
      user2EnterSequence(tl, el, colors);

      bullet1Sequence(tl, el, colors);
      tl.add("start_collab");
      bullet2Sequence(tl, el, colors);
      bullet3Sequence(tl, el, colors);

      user1ParagraphSequence(tl, el, colors);

      endSequence(tl, el, colors);
    },
    { scope: containerRef }
  );
};