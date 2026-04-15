import React, { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { 
  PolymorphicProps, 
  PolymorphicRef, 
  PolymorphicComponent 
} from "../../utils/polymorphic";

type DropdownItemVariant = "default" | "destructive";

interface DropdownItemBaseProps {
  variant?: DropdownItemVariant;
  className?: string;
  children?: React.ReactNode;
}

type DropdownItemComponent = PolymorphicComponent<DropdownItemBaseProps>;

export const DropdownItem = forwardRef(
  <T extends React.ElementType = "button">(
    {
      as,
      variant = "default",
      className,
      children,
      ...props
    }: PolymorphicProps<T, DropdownItemBaseProps>,
    ref: PolymorphicRef<T>
  ) => {
    // Default to 'a' if href is present, otherwise 'button'
    const Component = as || (props.href ? "a" : "button");

    const base = "flex w-full cursor-pointer items-center rounded-md px-3 py-2 text-sm transition-all outline-none select-none active:scale-[0.98]";

    const variants: Record<DropdownItemVariant, string> = {
      default: "text-text-primary hover:bg-accent-bg/50 focus:bg-accent-bg/50",
      destructive: "text-red-500 hover:bg-red-500/10 focus:bg-red-500/10",
    };

    return (
      <Component
        ref={ref}
        className={cn(base, variants[variant], className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
) as DropdownItemComponent;

DropdownItem.displayName = "DropdownItem";

export default DropdownItem;