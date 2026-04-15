import React, { forwardRef } from "react";
import { cn } from "../../utils/cn";
import {
  PolymorphicProps,
  PolymorphicRef,
  PolymorphicComponent,
} from "../../utils/polymorphic";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "xs" | "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: React.ReactNode;
}

type ButtonComponent = PolymorphicComponent<ButtonBaseProps>;

export const Button = forwardRef(
  <T extends React.ElementType = "button">(
    {
      as,
      variant = "primary",
      size = "md",
      className,
      children,
      ...props
    }: PolymorphicProps<T, ButtonBaseProps>,
    ref: PolymorphicRef<T>
  ) => {
    const Component = as || "button";

    const base =
      "inline-flex items-center justify-center rounded-md font-semibold transition-all duration-200 select-none active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:opacity-50 disabled:pointer-events-none";

    const sizeClasses: Record<ButtonSize, string> = {
      xs: "h-7 px-2.5 text-xs",
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-5 text-base",
      lg: "h-12 px-6 text-lg",
    };

    const variantStyles: Record<ButtonVariant, string> = {
      primary:
        "bg-accent text-white hover:bg-accent-hover shadow-sm hover:shadow-md",
      secondary:
        "border border-accent text-accent bg-transparent hover:bg-accent/10 hover:border-accent-hover hover:text-accent-hover",
      ghost:
        "bg-transparent text-text-secondary hover:text-text-primary hover:bg-accent-bg/10",
    };

    return (
      <Component
        ref={ref}
        className={cn(
          base,
          sizeClasses[size],
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
) as ButtonComponent;

Button.displayName = "Button";

export default Button;