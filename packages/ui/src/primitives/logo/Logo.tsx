
import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Variant = "mark" | "wordmark" | "lockup";
type Size = "xs" | "sm" | "md" | "lg";

// 📐 Typography + icon scale harmony
const sizeMap: Record<Size, { icon: string; text: string; gap: string }> = {
  xs: { icon: "h-4 w-4", text: "text-sm", gap: "gap-1" },
  sm: { icon: "h-5 w-5", text: "text-base", gap: "gap-1.5" },
  md: { icon: "h-6 w-6", text: "text-lg", gap: "gap-2" },
  lg: { icon: "h-8 w-8", text: "text-2xl", gap: "gap-2.5" },
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

  // 🎨 Color logic
  const iconColor = mono ? "text-foreground" : "text-accent";
  const wordmarkColor = mono ? "text-foreground" : "text-text-primary";

  const Mark = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        sizes.icon,
        iconColor,
        "flex-shrink-0",
        // ✨ Motion system
        "transition-all duration-500 ease-out",
        "group-hover:translate-x-[6px] group-hover:-translate-y-[6px] group-hover:rotate-12",
        "group-active:scale-95",
        iconClassName
      )}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Center line */}
      <path d="M22 2L11 13" />
      {/* Body */}
      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
    </svg>
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
        "inline-flex items-center align-middle flex-shrink-0 group",
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
