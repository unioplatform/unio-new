import React, { forwardRef, ComponentPropsWithRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Types ---
type TextSize = "tiny" | "small" | "medium" | "large" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
type TextWeight = "normal" | "semibold" | "bold" | "black";
type TextTone = "default" | "secondary" | "muted" | "tertiary" | "brand" | "danger";
type TextTracking = "tight" | "normal" | "wide" | "widest";

/**
 * 🎯 Pure Text Props
 * We extend React.ComponentPropsWithRef<"span"> so it behaves 
 * exactly like a span, but with our design tokens.
 */
export interface TextProps extends ComponentPropsWithRef<"span"> {
  size?: TextSize;
  weight?: TextWeight;
  tone?: TextTone;
  tracking?: TextTracking;
  uppercase?: boolean;
  italic?: boolean;
  truncate?: boolean;
}

const sizeClasses: Record<TextSize, string> = {
  tiny: "text-xs leading-4",
  small: "text-sm leading-5",
  medium: "text-base leading-6",
  large: "text-lg leading-7",
  xl: "text-xl leading-7",
  "2xl": "text-2xl leading-8",
  "3xl": "text-3xl leading-9",
  "4xl": "text-4xl leading-10",
  "5xl": "text-5xl leading-[3rem]",
  "6xl": "text-6xl leading-[3.5rem]",
};

const weightClasses: Record<TextWeight, string> = {
  normal: "font-normal",
  semibold: "font-semibold",
  bold: "font-bold",
  black: "font-black",
};

const toneClasses: Record<TextTone, string> = {
  default: "text-foreground font-ui",
  secondary: "text-text-secondary font-ui",
  muted: "text-foreground-muted font-ui",
  tertiary: "text-text-tertiary font-ui",
  brand: "text-accent font-ui",
  danger: "text-danger font-ui",
};

const trackingClasses: Record<TextTracking, string> = {
  tight: "tracking-tight",
  normal: "tracking-normal",
  wide: "tracking-wide",
  widest: "tracking-widest",
};

/**
 * 🎨 Pure Unio Text
 * A strict span-based primitive. No 'as' prop, no 'any'.
 */
export const Text = forwardRef<HTMLSpanElement, TextProps>(
  (
    {
      size = "medium",
      weight = "normal",
      tone = "default",
      tracking,
      uppercase = false,
      italic = false,
      truncate = false,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          "min-w-0 antialiased inline-block", // inline-block helps with layout stability
          toneClasses[tone],
          sizeClasses[size],
          weightClasses[weight],
          tracking ? trackingClasses[tracking] : uppercase && "tracking-wide",
          uppercase && "uppercase",
          italic && "italic",
          truncate && "truncate",
          className
        )}
        {...rest}
      >
        {children}
      </span>
    );
  }
);

Text.displayName = "Text";

export default Text;