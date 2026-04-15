import { PlaygroundColors } from "./types";

export const tokenHelpers = (): PlaygroundColors => {
  const css = getComputedStyle(document.documentElement);

  const hsl = (token: string) => {
    const val = css.getPropertyValue(token).trim();
    return val ? `hsl(${val})` : "hsl(0 0% 50%)";
  };

  return {
    hsl,
    accent: hsl("--color-accent"),
    accentHover: hsl("--color-accent-hover"),
    textTertiary: hsl("--color-text-tertiary"),
    genericHighlight: "rgba(59,130,246,0.2)",
  };
};
