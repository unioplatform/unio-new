// packages/ui/src/components/Button.tsx
import React, { forwardRef, ElementType } from "react";
import clsx from "clsx";

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "primary" | "secondary";

export type PolymorphicButtonProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  to?: string; // For React Router Link
  href?: string; // For Anchor
} & React.HTMLAttributes<HTMLElement>;

export const Button = forwardRef<HTMLElement, PolymorphicButtonProps>(
  ({ children, variant = "primary", size = "md", className = "", as = "button", ...props }, ref) => {
    
    const base = "inline-flex items-center justify-center rounded-md font-semibold transition-all duration-200 select-none active:scale-[0.98]";

    const sizeClasses: Record<ButtonSize, string> = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-5 text-base",
      lg: "h-12 px-6 text-lg",
    };

    const variantStyles: Record<ButtonVariant, string> = {
      primary: [
        "bg-accent text-background", 
        "hover:bg-accent-hover", 
        "shadow-sm hover:shadow-md"
      ].join(" "),

      secondary: [
        "border border-accent text-accent bg-transparent",
        "hover:bg-accent/10 hover:border-accent-hover hover:text-accent-hover"
      ].join(" "),
    };

    const classes = clsx(base, sizeClasses[size], variantStyles[variant], className);
    const Component = as as ElementType;

    return (
      <Component className={classes} ref={ref} {...(props as any)}>
        {children}
      </Component>
    );
  }
);

Button.displayName = "Button";