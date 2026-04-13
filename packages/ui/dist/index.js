import { FiSend } from 'react-icons/fi';
import clsx3, { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef } from 'react';

// src/primitives/Logo.tsx
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var sizeMap = {
  xs: { icon: "text-base", text: "text-lg", gap: "gap-1" },
  sm: { icon: "text-xl", text: "text-xl", gap: "gap-1.5" },
  md: { icon: "text-2xl", text: "text-2xl", gap: "gap-2" },
  lg: { icon: "text-3xl", text: "text-4xl", gap: "gap-2.5" }
};
var Logo = ({
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
  const iconColor = mono ? "text-foreground" : "text-accent";
  const wordmarkColor = mono ? "text-foreground" : "text-text-primary";
  const Mark = /* @__PURE__ */ jsx(
    FiSend,
    {
      className: cn(
        sizes.icon,
        "flex-shrink-0 transition-colors duration-200",
        iconColor,
        iconClassName
      ),
      "aria-hidden": "true"
    }
  );
  const Wordmark = /* @__PURE__ */ jsx(
    "span",
    {
      className: cn(
        "brand-font tracking-tight select-none antialiased",
        sizes.text,
        wordmarkColor,
        wordmarkClassName
      ),
      children: "unio"
    }
  );
  return /* @__PURE__ */ jsxs(
    "span",
    {
      role: "img",
      "aria-label": ariaLabel,
      className: cn(
        "inline-flex items-center align-middle flex-shrink-0",
        sizes.gap,
        className
      ),
      ...rest,
      children: [
        variant !== "wordmark" && Mark,
        variant !== "mark" && Wordmark
      ]
    }
  );
};
function cn2(...inputs) {
  return twMerge(clsx(inputs));
}
var sizeClasses = {
  tiny: "text-xs leading-4",
  small: "text-sm leading-5",
  medium: "text-base leading-6",
  large: "text-lg leading-7",
  xl: "text-xl leading-7",
  "2xl": "text-2xl leading-8",
  "3xl": "text-3xl leading-9",
  "4xl": "text-4xl leading-10",
  "5xl": "text-5xl leading-[3rem]",
  "6xl": "text-6xl leading-[3.5rem]"
};
var weightClasses = {
  normal: "font-normal",
  semibold: "font-semibold",
  bold: "font-bold",
  black: "font-black"
};
var toneClasses = {
  default: "text-foreground font-ui",
  secondary: "text-text-secondary font-ui",
  muted: "text-foreground-muted font-ui",
  tertiary: "text-text-tertiary font-ui",
  brand: "text-accent font-ui",
  danger: "text-danger font-ui"
};
var trackingClasses = {
  tight: "tracking-tight",
  normal: "tracking-normal",
  wide: "tracking-wide",
  widest: "tracking-widest"
};
var Text = forwardRef(
  ({
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
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "span",
      {
        ref,
        className: cn2(
          "min-w-0 antialiased inline-block",
          // inline-block helps with layout stability
          toneClasses[tone],
          sizeClasses[size],
          weightClasses[weight],
          tracking ? trackingClasses[tracking] : uppercase && "tracking-wide",
          uppercase && "uppercase",
          italic && "italic",
          truncate && "truncate",
          className
        ),
        ...rest,
        children
      }
    );
  }
);
Text.displayName = "Text";
var Button = forwardRef(
  ({ children, variant = "primary", size = "md", className = "", as = "button", ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-md font-semibold transition-all duration-200 select-none active:scale-[0.98]";
    const sizeClasses2 = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-5 text-base",
      lg: "h-12 px-6 text-lg"
    };
    const variantStyles = {
      primary: [
        "bg-accent text-background",
        "hover:bg-accent-hover",
        "shadow-sm hover:shadow-md"
      ].join(" "),
      secondary: [
        "border border-accent text-accent bg-transparent",
        "hover:bg-accent/10 hover:border-accent-hover hover:text-accent-hover"
      ].join(" ")
    };
    const classes = clsx3(base, sizeClasses2[size], variantStyles[variant], className);
    const Component = as;
    return /* @__PURE__ */ jsx(Component, { className: classes, ref, ...props, children });
  }
);
Button.displayName = "Button";

export { Button, Logo, Text };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map