// -----------------------------------------------------------------------------
// 📁 types.ts — Shared Types for Animation Engine
// -----------------------------------------------------------------------------

import { gsap } from "gsap";

export type Timeline = gsap.core.Timeline;

export interface PlaygroundElements {
  headerTitle: HTMLElement;
  headerCursor: HTMLElement;

  highlightBg: HTMLElement;
  highlightTarget: HTMLElement;
  boldBtn: HTMLElement;

  user2Typo: HTMLElement;
  user2Suffix: HTMLElement;

  user2Bullet2Li: HTMLElement;
  user2Bullet2Draft: HTMLElement;
  user2Bullet2Final: HTMLElement;

  user2Bullet3Li: HTMLElement;
  user2Bullet3Text: HTMLElement;

  user1ParaCursor: HTMLElement;
  user1ParaText: HTMLElement;

  spellcheckTooltip: HTMLElement;
  aiWidget: HTMLElement;
  genericMouse: HTMLElement;
  acceptBtn: HTMLElement;

  cursor1: HTMLElement;
  cursor2: HTMLElement;
  cursor3: HTMLElement;

  user1Avatar: HTMLElement;
  user2Avatar: HTMLElement;
}

export interface PlaygroundColors {
  hsl: (token: string) => string;
  accent: string;
  accentHover: string;
  textTertiary: string;
  genericHighlight: string;
}
