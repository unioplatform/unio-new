import React from "react";
import { FiSend } from "react-icons/fi";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Variant = "mark" | "wordmark" | "lockup";
type Size = "xs" | "sm" | "md" | "lg";

// 📐 Aligned with your UI typography scale for perfect vertical rhythm
const sizeMap: Record<Size, { icon: string; text: string; gap: string }> = {
  xs: { icon: "text-base", text: "text-lg", gap: "gap-1" },
  sm: { icon: "text-xl", text: "text-xl", gap: "gap-1.5" },
  md: { icon: "text-2xl", text: "text-2xl", gap: "gap-2" },
  lg: { icon: "text-3xl", text: "text-4xl", gap: "gap-2.5" },
};

export type LogoProps = {
  variant?: Variant;
  size?: Size;
  mono?: boolean;
  className?: string;
  iconClassName?: string;
  wordmarkClassName?: string;
  "aria-label"?: string;
};

export const Logo: React.FC<LogoProps> = ({
  variant = "lockup",
  size = "md",
  mono = false,
  className,
  iconClassName,
  wordmarkClassName,
  "aria-label": ariaLabel = "Unio",
  ...rest
}) => {
  const sizes = sizeMap[size];

  // Logic for color normalization
  const iconColor = mono ? "text-foreground" : "text-accent";
  const wordmarkColor = mono ? "text-foreground" : "text-text-primary";

  const Mark = (
    <FiSend
      className={cn(
        sizes.icon,
        "flex-shrink-0 transition-colors duration-200",
        iconColor,
        iconClassName
      )}
      aria-hidden="true"
    />
  );

  const Wordmark = (
    <span
      className={cn(
        "brand-font tracking-tight select-none antialiased",
        sizes.text,
        wordmarkColor,
        wordmarkClassName
      )}
    >
      unio
    </span>
  );

  return (
    <span
      role="img"
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center align-middle flex-shrink-0",
        sizes.gap,
        className
      )}
      {...rest}
    >
      {variant !== "wordmark" && Mark}
      {variant !== "mark" && Wordmark}
    </span>
  );
};

export default Logo;
