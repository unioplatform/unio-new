// -----------------------------------------------------------------------------
// 📁 packages/ui/src/components/button/Button.tsx
// -----------------------------------------------------------------------------
// Unio DS v2 — Button Component (2025 Enterprise Edition)
// -----------------------------------------------------------------------------

import { forwardRef } from "react";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
} from "react";
import clsx from "clsx";

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------
type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline-accent"
  | "ghost"
  | "icon";

type BaseProps = {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disableFocusRing?: boolean;
  fullWidth?: boolean; // ✅ Added to support block-level layouts
};

type NativeProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type AnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as?: "a"; href: string };

type GenericLinkProps = BaseProps & { as?: React.ElementType; to?: string };

export type PolymorphicButtonProps =
  | NativeProps
  | AnchorProps
  | GenericLinkProps;

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------
export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  PolymorphicButtonProps
>(function Button(
  {
    children,
    variant = "primary",
    size = "md",
    className = "",
    disableFocusRing = true,
    fullWidth = false, // ✅ Defaulted to false
    as = "button",
    ...props
  },
  ref
) {
  // Base classes (applied to ALL buttons)
  // Changed "inline-flex" to a dynamic check based on fullWidth
  const base =
    "items-center justify-center rounded-md font-ui font-semibold leading-none " +
    "transition-all duration-200 whitespace-nowrap select-none";

  // Sizes — match DS2 scale
  const sizeClasses: Record<ButtonSize, string> = {
    sm: "h-9 px-4 text-small",
    md: "h-11 px-5 text-base",
    lg: "h-12 px-6 text-large",
  };

  // For icon-only buttons
  const iconSizeClasses: Record<ButtonSize, string> = {
    sm: "h-9 w-9 text-small",
    md: "h-11 w-11 text-base",
    lg: "h-12 w-12 text-large",
  };

  // Variants — DS2 official
  const variantStyles: Record<ButtonVariant, string> = {
    primary: [
      "bg-accent text-background",
      "hover:bg-accent-hover",
      "active:translate-y-[1px] active:shadow-sm",
      "shadow-sm hover:shadow-md",
      "border border-transparent",
    ].join(" "),

    secondary: [
      "border border-border-soft text-primary bg-transparent",
      "hover:bg-foreground-muted/10",
      "active:bg-foreground-muted/20",
    ].join(" "),

    "outline-accent": [
      "border border-accent text-accent bg-transparent",
      "hover:bg-accent/10",
      "active:bg-accent/20",
    ].join(" "),

    ghost: [
      "border border-transparent",
      "text-foreground-muted",
      "hover:bg-background-secondary/40",
      "active:bg-background-secondary/60",
    ].join(" "),

    icon: [
      "border border-transparent",
      "text-foreground-muted",
      "hover:bg-background-secondary/40",
      "active:bg-background-secondary/60",
    ].join(" "),
  };

  // Focus ring handling
  const focusStyles = disableFocusRing
    ? "focus:outline-none"
    : "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  // Final classes
  const classes = clsx(
    base,
    // Use flex vs inline-flex based on fullWidth
    fullWidth ? "flex w-full" : "inline-flex",
    variant === "icon" ? iconSizeClasses[size] : sizeClasses[size],
    variantStyles[variant],
    focusStyles,
    className
  );

  const Component = as as ElementType;

  return (
    <Component className={classes} ref={ref} {...(props as any)}>
      {children}
    </Component>
  );
});

Button.displayName = "Button";