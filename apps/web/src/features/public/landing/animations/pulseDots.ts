// -----------------------------------------------------------------------------
// pulseDots.ts — Reusable GSAP "breathing dots" animation
// -----------------------------------------------------------------------------
// - Positions each dot at a given marker { x, y }
// - Creates a randomized pulse animation (opacity breathing)
// - Fully safe: no animation runs if elements or markers are missing
// -----------------------------------------------------------------------------

import gsap from "gsap";

export interface PulseMarker {
  id: string;
  x: number;
  y: number;
}

export const pulseDots = (markers: PulseMarker[]) => {
  if (!markers || markers.length === 0) return;

  const dots = gsap.utils.toArray<SVGCircleElement>(".unio-user-dot");
  if (!dots.length) return;

  dots.forEach((dot, index) => {
    const m = markers[index];
    if (!m) return;

    // Initial placement + subtle random opacity
    gsap.set(dot, {
      attr: { cx: m.x, cy: m.y },
      opacity: gsap.utils.random(0.1, 0.45),
    });

    // Infinite breathing animation
    gsap.to(dot, {
      opacity: gsap.utils.random(0.2, 0.6),
      repeat: -1,
      yoyo: true,
      duration: gsap.utils.random(2.5, 5.5),
      delay: gsap.utils.random(0, 4),
      ease: "sine.inOut",
    });
  });
};
