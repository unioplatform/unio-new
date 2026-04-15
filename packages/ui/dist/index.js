import clsx4, { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef, createContext, isValidElement, cloneElement, useContext, useRef, useEffect } from 'react';

// src/primitives/logo/Logo.tsx
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var sizeMap = {
  xs: { icon: "h-4 w-4", text: "text-sm", gap: "gap-1" },
  sm: { icon: "h-5 w-5", text: "text-base", gap: "gap-1.5" },
  md: { icon: "h-6 w-6", text: "text-lg", gap: "gap-2" },
  lg: { icon: "h-8 w-8", text: "text-2xl", gap: "gap-2.5" }
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
  const Mark = /* @__PURE__ */ jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: cn(
        sizes.icon,
        iconColor,
        "flex-shrink-0",
        // ✨ Motion system
        "transition-all duration-500 ease-out",
        "group-hover:translate-x-[6px] group-hover:-translate-y-[6px] group-hover:rotate-12",
        "group-active:scale-95",
        iconClassName
      ),
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsx("path", { d: "M22 2L11 13" }),
        /* @__PURE__ */ jsx("path", { d: "M22 2L15 22L11 13L2 9L22 2Z" })
      ]
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
        "inline-flex items-center align-middle flex-shrink-0 group",
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
function cn3(...inputs) {
  return twMerge(clsx(inputs));
}
var Button = forwardRef(
  ({
    as,
    variant = "primary",
    size = "md",
    className,
    children,
    ...props
  }, ref) => {
    const Component = as || "button";
    const base = "inline-flex items-center justify-center rounded-md font-semibold transition-all duration-200 select-none active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:opacity-50 disabled:pointer-events-none";
    const sizeClasses3 = {
      xs: "h-7 px-2.5 text-xs",
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-5 text-base",
      lg: "h-12 px-6 text-lg"
    };
    const variantStyles = {
      primary: "bg-accent text-white hover:bg-accent-hover shadow-sm hover:shadow-md",
      secondary: "border border-accent text-accent bg-transparent hover:bg-accent/10 hover:border-accent-hover hover:text-accent-hover",
      ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-accent-bg/10"
    };
    return /* @__PURE__ */ jsx(
      Component,
      {
        ref,
        className: cn3(
          base,
          sizeClasses3[size],
          variantStyles[variant],
          className
        ),
        ...props,
        children
      }
    );
  }
);
Button.displayName = "Button";
var sizeMap2 = {
  xs: "h-7 w-7",
  sm: "h-8 w-8",
  md: "h-9 w-9",
  lg: "h-10 w-10"
};
var iconSizeMap = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20
};
var variantMap = {
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
  `
};
var IconButton = ({
  icon,
  children,
  size = "sm",
  variant = "ghost",
  className = "",
  onClick,
  ...props
}) => {
  const elementToRender = icon || children;
  const renderedIcon = isValidElement(elementToRender) ? cloneElement(elementToRender, {
    size: iconSizeMap[size],
    strokeWidth: 2
  }) : elementToRender;
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      onClick,
      className: clsx4(
        `
        inline-flex items-center justify-center
        rounded-md
        transition-colors
        border
        shrink-0
      `,
        sizeMap2[size],
        variantMap[variant],
        className
      ),
      ...props,
      children: renderedIcon
    }
  );
};
var sizeClasses2 = {
  xs: "h-6 w-6 text-[10px]",
  // 24px
  sm: "h-8 w-8 text-xs",
  // 32px
  md: "h-9 w-9 text-sm",
  // 40px
  lg: "h-10 w-10 text-base",
  // 44px (Bridge the gap)
  xl: "h-12 w-12 text-base",
  // 48px (Used to be lg)
  "2xl": "h-28 w-28 text-xl",
  // 64px (Used to be xl)
  "3xl": "h-24 w-24 text-2xl"
  // 96px (Cleaner than the old 112px)
};
var radiusClasses = {
  xs: "rounded-md",
  sm: "rounded-md",
  md: "rounded-lg",
  lg: "rounded-xl",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl"
};
var statusColor = {
  ONLINE: "bg-emerald-500",
  AWAY: "bg-amber-400",
  OFFLINE: "bg-zinc-400",
  BUSY: "bg-red-500"
};
var Avatar = ({
  initials,
  color = "bg-accent",
  size = "sm",
  className,
  photo = null,
  status
}) => {
  const hasExternalSize = className?.includes("h-") || className?.includes("w-");
  const hasExternalRadius = className?.includes("rounded-");
  return /* @__PURE__ */ jsxs("div", { className: cn3("relative inline-block", hasExternalSize && className), children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn3(
          "relative flex shrink-0 items-center justify-center overflow-hidden transition-all duration-200 shadow-sm",
          !hasExternalSize && sizeClasses2[size],
          !hasExternalRadius && radiusClasses[size],
          !photo && color,
          className
        ),
        children: photo ? /* @__PURE__ */ jsx(
          "img",
          {
            src: photo,
            alt: "avatar",
            className: cn3(
              "h-full w-full object-cover",
              !hasExternalRadius && radiusClasses[size],
              hasExternalRadius && className
            )
          }
        ) : /* @__PURE__ */ jsx("span", { className: "font-semibold text-white/90 leading-none", children: initials.slice(0, 2).toUpperCase() })
      }
    ),
    status && /* @__PURE__ */ jsx(
      "span",
      {
        className: cn3(
          "absolute bottom-0 right-0 block shadow-sm ring-2 ring-background rotate-45",
          statusColor[status],
          "h-2 w-2 md:h-2.5 md:w-2.5 rounded-sm"
        )
      }
    )
  ] });
};
var DropdownContext = createContext(null);
var Dropdown = ({ open, onOpenChange, children }) => {
  return /* @__PURE__ */ jsx(DropdownContext.Provider, { value: { open, setOpen: onOpenChange }, children: /* @__PURE__ */ jsx("div", { className: "relative inline-block text-left", children }) });
};
Dropdown.Trigger = ({ children }) => {
  const ctx = useContext(DropdownContext);
  if (!ctx) throw new Error("Dropdown.Trigger needs a context");
  return /* @__PURE__ */ jsx(
    "div",
    {
      onClick: () => ctx.setOpen(!ctx.open),
      className: "cursor-pointer contents",
      children
    }
  );
};
Dropdown.Content = ({ align = "start", className, children }) => {
  const ctx = useContext(DropdownContext);
  const ref = useRef(null);
  useEffect(() => {
    if (!ctx?.open) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        ctx.setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [ctx]);
  if (!ctx?.open) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn3(
        "absolute z-50 mt-2 min-w-[15rem] rounded-xl border border-border/40 bg-background shadow-xl",
        align === "end" ? "right-0" : "left-0",
        "animate-in fade-in zoom-in-95 duration-150",
        className
      ),
      children
    }
  );
};
var DropdownItem = forwardRef(
  ({
    as,
    variant = "default",
    className,
    children,
    ...props
  }, ref) => {
    const Component = as || (props.href ? "a" : "button");
    const base = "flex w-full cursor-pointer items-center rounded-md px-3 py-2 text-sm transition-all outline-none select-none active:scale-[0.98]";
    const variants = {
      default: "text-text-primary hover:bg-accent-bg/50 focus:bg-accent-bg/50",
      destructive: "text-red-500 hover:bg-red-500/10 focus:bg-red-500/10"
    };
    return /* @__PURE__ */ jsx(
      Component,
      {
        ref,
        className: cn3(base, variants[variant], className),
        ...props,
        children
      }
    );
  }
);
DropdownItem.displayName = "DropdownItem";

export { Avatar, Button, Dropdown, DropdownItem, IconButton, Logo, Text, cn3 as cn };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map