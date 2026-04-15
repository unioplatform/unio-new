// -----------------------------------------------------------------------------
// 📁 IconButton.tsx — Updated with Tonal Variant
// -----------------------------------------------------------------------------

import React, { cloneElement, isValidElement } from "react";
import clsx from "clsx";
import type { IconButtonProps, IconButtonSize } from "./IconButton.types";

const sizeMap: Record<IconButtonSize, string> = {
  xs: "h-7 w-7",
  sm: "h-8 w-8",
  md: "h-9 w-9",
  lg: "h-10 w-10",
};

const iconSizeMap: Record<IconButtonSize, number> = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
};

const variantMap = {
  ghost: `
    text-foreground-muted
    hover:text-foreground
    hover:bg-background-secondary/40
    active:bg-background-secondary/60
    border-transparent
  `,
  // 🟢 Added Tonal: Subtle background, solid text
  tonal: `
    bg-background-tertiary
    text-foreground
    hover:bg-background-tertiary/80
    border-transparent
  `,
  danger: `
    text-danger
    hover:bg-danger/10
    active:bg-danger/20
    border-transparent
  `,
};

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  children,
  size = "sm",
  variant = "ghost",
  className = "",
  onClick,
  ...props
}) => {
  const elementToRender = icon || children;

  const renderedIcon = isValidElement(elementToRender)
    ? cloneElement(elementToRender as React.ReactElement<any>, {
        size: iconSizeMap[size],
        strokeWidth: 2,
      })
    : elementToRender;

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        `
        inline-flex items-center justify-center
        rounded-md
        transition-colors
        border
        shrink-0
      `,
        sizeMap[size],
        variantMap[variant],
        className
      )}
      {...props}
    >
      {renderedIcon}
    </button>
  );
};