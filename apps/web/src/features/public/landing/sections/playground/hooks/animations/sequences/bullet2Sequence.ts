/* apps/web/src/features/landing/sections/Playground/animations/bullet2Sequence.ts */
import { Timeline, PlaygroundElements, PlaygroundColors } from "../types";
import { gsap } from "gsap";

export const bullet2Sequence = (
  tl: Timeline,
  el: PlaygroundElements,
  colors: PlaygroundColors
) => {
  // -------------------------------------------------------
  // Reveal bullet and cursor
  // -------------------------------------------------------
  tl.set(el.cursor1, { display: "none" });
  tl.to(el.user2Bullet2Li, { autoAlpha: 1 });
  tl.set(el.cursor2, { display: "inline-block" });

  // -------------------------------------------------------
  // Type draft
  // -------------------------------------------------------
  tl.to(el.user2Bullet2Draft, {
    duration: 2.0,
    text: "Created for both solo flow and team synergy",
    ease: "none",
  });

  // -------------------------------------------------------
  // Widget enters
  // -------------------------------------------------------
  tl.set(el.aiWidget, { display: "block" });

  tl.to(el.aiWidget, {
    autoAlpha: 1,
    y: 0,
    duration: 0.4,
    ease: "back.out(1.2)",
  });

  // -------------------------------------------------------
  // Mouse moves toward Accept button (ZOOM CORRECTED)
  // -------------------------------------------------------
  tl.to(el.genericMouse, { autoAlpha: 1, duration: 0.3 }, ">");

  tl.add(() => {
    if (!el.acceptBtn || !el.genericMouse) return;

    // 🚀 THE PARITY FIX:
    // We grab the zoom factor currently set on the document (0.85, 0.93, or 1)
    const zoom = parseFloat(getComputedStyle(document.documentElement).zoom) || 1;

    const btn = el.acceptBtn.getBoundingClientRect();
    const wrap = el.genericMouse.parentElement!.getBoundingClientRect();

    /* Why we divide by zoom: 
       getBoundingClientRect returns 'visual' pixels. 
       GSAP 'x/y' operates on 'logical' pixels. 
       Dividing 'visual' by 'zoom' gives us the 'logical' coordinates GSAP needs.
    */
    gsap.to(el.genericMouse, {
      x: (btn.left - wrap.left + btn.width / 2) / zoom,
      y: (btn.top - wrap.top + btn.height / 2) / zoom,
      duration: 0.8,
      ease: "power2.inOut",
    });
  });

  tl.to({}, { duration: 0.8 });

  // -------------------------------------------------------
  // Click animation
  // -------------------------------------------------------
  tl.to(el.genericMouse, { scale: 0.8, duration: 0.1 }, "-=0.1");
  tl.to(el.acceptBtn, { scale: 0.95, duration: 0.1 }, "<");
  tl.to(el.genericMouse, { scale: 1, duration: 0.1 });
  tl.to(el.acceptBtn, { scale: 1, duration: 0.1 }, "<");

  // -------------------------------------------------------
  // Swap draft → final
  // -------------------------------------------------------
  tl.set(el.user2Bullet2Draft, { display: "none" });

  tl.set(el.user2Bullet2Final, {
    display: "inline",
    opacity: 1,
    fontWeight: 400,
    color: "inherit"
  });

  let targetColor = "inherit";
  tl.add(() => {
    targetColor = window.getComputedStyle(el.user2Bullet2Final).color;
  });

  // -------------------------------------------------------
  // Accent flash
  // -------------------------------------------------------
  tl.fromTo(
    el.user2Bullet2Final,
    {
      backgroundColor: colors.accent + "66",
      color: colors.accentHover,
    },
    {
      backgroundColor: "transparent",
      duration: 0.6,
    }
  );

  tl.to(
    el.user2Bullet2Final,
    { color: targetColor, duration: 0.6 },
    "<0.3"
  );

  // -------------------------------------------------------
  // Widget + mouse exit
  // -------------------------------------------------------
  tl.to(el.aiWidget, { autoAlpha: 0, y: -5, duration: 0.3 });
  tl.to(el.genericMouse, { autoAlpha: 0, duration: 0.3 }, "<");
};