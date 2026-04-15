import { PlaygroundElements } from "./types";

export const queryElements = (q: any): PlaygroundElements => ({
  headerTitle: q(".js-header-title")[0],
  headerCursor: q(".js-header-cursor")[0],

  highlightBg: q(".js-highlight-bg")[0],
  highlightTarget: q(".js-highlight-target")[0],
  boldBtn: q(".js-bold-btn")[0],

  user2Typo: q(".js-user2-typo")[0],
  user2Suffix: q(".js-user2-suffix")[0],

  user2Bullet2Li: q(".js-user2-bullet-2-li")[0],
  user2Bullet2Draft: q(".js-user2-bullet-2-draft")[0],
  user2Bullet2Final: q(".js-user2-bullet-2-final")[0],

  user2Bullet3Li: q(".js-user2-bullet-3-li")[0],
  user2Bullet3Text: q(".js-user2-bullet-3-text")[0],

  user1ParaCursor: q(".js-user1-para-cursor")[0],
  user1ParaText: q(".js-user1-para-text")[0],

  spellcheckTooltip: q(".js-spellcheck-tooltip")[0],
  aiWidget: q(".js-ai-widget")[0],
  genericMouse: q(".js-generic-mouse")[0],
  acceptBtn: q(".js-accept-btn")[0],

  cursor1: q(".js-cursor-1")[0],
  cursor2: q(".js-cursor-2")[0],
  cursor3: q(".js-cursor-3")[0],

  user1Avatar: q(".js-user1-avatar")[0],
  user2Avatar: q(".js-user2-avatar")[0],
});
