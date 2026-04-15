import type { ReactNode, ButtonHTMLAttributes } from "react";

export type IconButtonSize = "xs" | "sm" | "md" | "lg";

export type IconButtonVariant = "ghost" | "danger" | "tonal";

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  // Add this line to fix the red error
  icon?: ReactNode; 
  
  // Ensure these match what you are using
  size?: IconButtonSize;
  variant?: IconButtonVariant;
  children?: ReactNode;
}