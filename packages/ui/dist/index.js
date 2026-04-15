import clsx11, { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx, jsxs } from 'react/jsx-runtime';
import React10, { forwardRef, createContext, useState, useEffect, useRef, useMemo, isValidElement, cloneElement, useContext } from 'react';
import { EyeOff, Eye, ChevronDown, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

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
      className: clsx11(
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
var FloatingFieldShell = ({
  id,
  label,
  error,
  hasValue,
  isOpen,
  children
}) => {
  const isFloating = hasValue || isOpen;
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full group", children: [
    children,
    /* @__PURE__ */ jsx(
      "label",
      {
        htmlFor: id,
        className: cn3(
          "absolute left-0 top-4 transition-all duration-200 pointer-events-none select-none",
          "text-text-tertiary",
          isFloating ? "-translate-y-5 text-xs text-accent font-medium" : "translate-y-0 text-sm"
        ),
        children: label
      }
    ),
    error && /* @__PURE__ */ jsx("div", { className: "mt-1.5", children: /* @__PURE__ */ jsx(
      Text,
      {
        size: "tiny",
        tone: "danger",
        className: "animate-in slide-in-from-top-1 duration-200 block",
        children: error
      }
    ) })
  ] });
};
var FloatingFieldShell_default = FloatingFieldShell;
var InputBase = forwardRef(
  ({ className, error, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        ref,
        ...props,
        "aria-invalid": !!error,
        className: cn3(
          "peer w-full bg-transparent",
          "border-b transition-colors duration-200 outline-none",
          // 🎯 THE IMPORTANT PART
          error ? "border-red-500 focus:border-red-500" : "border-text-tertiary/30 focus:border-accent",
          "text-[0.95rem] font-ui text-text-primary",
          "h-[48px] pt-5 pb-1",
          className
        )
      }
    );
  }
);
InputBase.displayName = "InputBase";
var FloatingInput = forwardRef(
  ({ label, error, icon, className, value, onChange, onFocus, onBlur, ...rest }, ref) => {
    const id = rest.id || label.replace(/\s+/g, "-").toLowerCase();
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);
    useEffect(() => {
      if (value !== void 0) {
        setHasValue(String(value).trim() !== "");
      }
    }, [value]);
    return /* @__PURE__ */ jsx(
      FloatingFieldShell_default,
      {
        id,
        label,
        error,
        hasValue,
        isOpen: isFocused,
        children: /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
          icon && /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-1/2 -translate-y-1/2 flex items-center pointer-events-none text-text-tertiary", children: icon }),
          /* @__PURE__ */ jsx(
            InputBase,
            {
              id,
              ref,
              placeholder: " ",
              ...value !== void 0 ? { value } : {},
              ...rest,
              className: cn3(icon && "pl-6", className),
              onFocus: (e) => {
                setIsFocused(true);
                onFocus?.(e);
              },
              onBlur: (e) => {
                setIsFocused(false);
                onBlur?.(e);
              },
              onChange: (e) => {
                setHasValue(e.target.value.trim() !== "");
                onChange?.(e);
              }
            }
          )
        ] })
      }
    );
  }
);
FloatingInput.displayName = "FloatingInput";
var PasswordInput = forwardRef(
  ({ label, error, value, onChange, onBlur, onFocus, className, ...rest }, ref) => {
    const id = rest.id || label.replace(/\s+/g, "-").toLowerCase();
    const [visible, setVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);
    useEffect(() => {
      if (value !== void 0) {
        setHasValue(String(value).trim() !== "");
      }
    }, [value]);
    return /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
      /* @__PURE__ */ jsx(
        FloatingFieldShell_default,
        {
          id,
          label,
          error,
          hasValue,
          isOpen: isFocused,
          children: /* @__PURE__ */ jsx(
            "input",
            {
              id,
              ref,
              type: visible ? "text" : "password",
              placeholder: " ",
              autoComplete: "current-password",
              ...value !== void 0 ? { value } : {},
              ...rest,
              className: cn3(
                "peer w-full bg-transparent",
                /* Matches the FloatingInput and Divider style */
                "border-b border-text-tertiary/30 focus:border-accent",
                "text-[0.95rem] font-ui text-text-primary",
                "h-[48px] pt-5 pb-1 pr-10 outline-none transition-colors duration-200",
                className
              ),
              onFocus: (e) => {
                setIsFocused(true);
                onFocus?.(e);
              },
              onBlur: (e) => {
                setIsFocused(false);
                onBlur?.(e);
              },
              onChange: (e) => {
                setHasValue(e.target.value.trim() !== "");
                onChange?.(e);
              }
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          tabIndex: -1,
          onClick: () => setVisible((prev) => !prev),
          className: "absolute right-0 top-[22px] text-text-tertiary/60 hover:text-accent transition-colors",
          children: visible ? /* @__PURE__ */ jsx(EyeOff, { size: 18, strokeWidth: 2 }) : /* @__PURE__ */ jsx(Eye, { size: 18, strokeWidth: 2 })
        }
      )
    ] });
  }
);
PasswordInput.displayName = "PasswordInput";
function useAutocomplete({
  value,
  options,
  onSearchChange
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const selected = useMemo(
    () => options.find((o) => o.value === value) || null,
    [options, value]
  );
  const hasValue = selected !== null || (query ?? "").trim() !== "" || open;
  useEffect(() => {
    onSearchChange?.(query);
  }, [query, onSearchChange]);
  useEffect(() => {
    if (selected && !open) {
      setQuery(selected.label ?? "");
    } else if (!value && !open) {
      setQuery("");
    }
  }, [selected, value, open]);
  const filtered = useMemo(() => {
    const safeQuery = (query ?? "").toLowerCase().trim();
    if (open && selected && safeQuery === (selected.label ?? "").toLowerCase().trim()) {
      return options;
    }
    if (!safeQuery) return options;
    return options.filter((o) => {
      const label = (o.label ?? "").toLowerCase();
      return label.includes(safeQuery);
    }).sort((a, b) => {
      const aLabel = (a.label ?? "").toLowerCase();
      const bLabel = (b.label ?? "").toLowerCase();
      const aStarts = aLabel.startsWith(safeQuery);
      const bStarts = bLabel.startsWith(safeQuery);
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;
      return 0;
    });
  }, [query, options, selected, open]);
  return {
    open,
    setOpen,
    query,
    setQuery,
    selected,
    filtered,
    hasValue
  };
}
var AutocompleteInput = ({
  id,
  name,
  value,
  setOpen,
  setQuery,
  onBlur,
  inputRef
}) => {
  return /* @__PURE__ */ jsx(
    InputBase,
    {
      id,
      name,
      ref: inputRef,
      autoComplete: "off",
      placeholder: " ",
      value,
      onClick: () => setOpen(true),
      onFocus: () => setOpen(true),
      onChange: (e) => {
        setQuery(e.target.value);
        setOpen(true);
      },
      onBlur,
      className: "pr-6"
    }
  );
};
var HighlightMatch = ({
  text,
  match,
  isSelected
}) => {
  if (!match) return /* @__PURE__ */ jsx("span", { children: text });
  const parts = text.split(new RegExp(`(${match})`, "gi"));
  return /* @__PURE__ */ jsx("span", { children: parts.map(
    (part, i) => part.toLowerCase() === match.toLowerCase() ? /* @__PURE__ */ jsx(
      "span",
      {
        className: isSelected ? "font-bold" : "text-foreground font-semibold",
        children: part
      },
      i
    ) : /* @__PURE__ */ jsx("span", { children: part }, i)
  ) });
};
var AutocompleteOption = ({
  opt,
  isSelected,
  query,
  onSelect
}) => {
  return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: clsx11(
        "w-full px-3 py-2.5 rounded-xl text-left flex items-center gap-3 transition-colors",
        isSelected ? "text-accent font-medium bg-accent/10" : "text-foreground/80 hover:bg-white/10"
      ),
      onClick: onSelect,
      children: /* @__PURE__ */ jsx(
        HighlightMatch,
        {
          text: opt.label,
          match: query,
          isSelected
        }
      )
    }
  ) });
};
var AutocompleteDropdown = ({
  open,
  filtered,
  value,
  query,
  onSelect
}) => {
  return /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: -4 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -4 },
      transition: { duration: 0.15 },
      className: "absolute top-full left-0 right-0 mt-3 z-50",
      children: /* @__PURE__ */ jsx("div", { className: "rounded-2xl bg-background-glass/80 backdrop-blur-3xl border border-white/10 shadow-xl p-1.5 overflow-hidden", children: /* @__PURE__ */ jsxs("ul", { className: "max-h-[260px] overflow-y-auto scrollbar-hide", children: [
        filtered.length === 0 && /* @__PURE__ */ jsx("li", { className: "py-6 text-center text-muted-foreground text-sm", children: "No matches found" }),
        filtered.map((opt) => /* @__PURE__ */ jsx(
          AutocompleteOption,
          {
            opt,
            query,
            isSelected: opt.value === value,
            onSelect: () => onSelect(opt)
          },
          opt.value
        ))
      ] }) })
    }
  ) });
};
var AutocompleteSelect = forwardRef(
  ({
    label,
    value,
    options,
    onValueChange,
    onSearchChange,
    error,
    name,
    onChange: rhfOnChange,
    onBlur: rhfOnBlur
  }, ref) => {
    const wrapperRef = useRef(null);
    const {
      open,
      setOpen,
      query,
      setQuery,
      filtered,
      hasValue
    } = useAutocomplete({ value, options, onSearchChange });
    const id = label.toLowerCase().replace(/\s+/g, "-");
    useEffect(() => {
      const handler = (e) => {
        if (!wrapperRef.current?.contains(e.target)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }, [setOpen]);
    const fireRHF = (v) => {
      rhfOnChange?.({ target: { name, value: v } });
    };
    const handleSelect = (opt) => {
      onValueChange(opt.value);
      setQuery(opt.label);
      fireRHF(opt.value);
      setOpen(false);
    };
    return /* @__PURE__ */ jsxs("div", { ref: wrapperRef, className: "relative w-full", children: [
      /* @__PURE__ */ jsx(
        FloatingFieldShell_default,
        {
          id,
          label,
          error,
          hasValue,
          isOpen: open,
          children: /* @__PURE__ */ jsx("div", { className: "relative flex items-center", children: /* @__PURE__ */ jsx(
            AutocompleteInput,
            {
              id,
              name,
              value: query,
              setOpen,
              setQuery,
              onBlur: rhfOnBlur,
              inputRef: ref
            }
          ) })
        }
      ),
      /* @__PURE__ */ jsx(
        AutocompleteDropdown,
        {
          open,
          filtered,
          value,
          query,
          onSelect: handleSelect
        }
      )
    ] });
  }
);
AutocompleteSelect.displayName = "AutocompleteSelect";
var Checkbox = React10.forwardRef(
  ({
    label,
    checked,
    onChange,
    disabled,
    name,
    onBlur,
    className,
    error
  }, ref) => {
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ jsxs(
        "label",
        {
          className: clsx11(
            "flex items-center gap-2.5 select-none group",
            // group helps with hover states
            disabled ? "cursor-not-allowed opacity-30" : "cursor-pointer",
            className
          ),
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "checkbox",
                ref,
                name,
                checked,
                onChange,
                onBlur,
                disabled,
                className: "sr-only peer"
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: clsx11(
                  `
              w-[18px] h-[18px]
              rounded-[4px]
              flex items-center justify-center
              border
              bg-transparent
              transition-all duration-200
              peer-checked:[&_svg]:opacity-100
              peer-focus-visible:ring-2 peer-focus-visible:ring-accent/40
              `,
                  /* ✨ THEME FIX: Swapped border-border-soft for tertiary with alpha */
                  error ? "border-red-500" : "border-text-tertiary/30 group-hover:border-text-tertiary/50 peer-checked:border-accent"
                ),
                children: /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "w-3 h-3 text-accent opacity-0 transition-opacity duration-200",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: /* @__PURE__ */ jsx("path", { d: "M5 13l4 4L19 7" })
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-[13px] text-text-primary leading-tight font-ui", children: label })
          ]
        }
      ),
      error && /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-red-500 px-1", children: error })
    ] });
  }
);
Checkbox.displayName = "Checkbox";
function useSelect({
  value,
  options
}) {
  const [open, setOpen] = useState(false);
  const selected = useMemo(
    () => options.find((o) => o.value === value) || null,
    [options, value]
  );
  const hasValue = selected !== null || open;
  return {
    open,
    setOpen,
    selected,
    hasValue
  };
}
var SelectTrigger = ({
  selected,
  open,
  setOpen,
  onBlur
}) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      tabIndex: 0,
      onClick: () => setOpen((v) => !v),
      onBlur,
      className: clsx11(
        "w-full bg-transparent text-left",
        /* MATCHED BUSINESS LOGIC:
           - border-text-tertiary/30: Idle state matches 'OR' divider and other inputs.
           - border-accent: Active/Open state matches focus.
        */
        "border-b transition-colors duration-200",
        open ? "border-accent" : "border-text-tertiary/30",
        "font-ui text-[0.95rem] h-[46px] pt-6 pb-2",
        "cursor-pointer flex items-center justify-between focus:outline-none"
      ),
      children: [
        /* @__PURE__ */ jsx("span", { className: selected ? "text-text-primary" : "text-text-tertiary", children: selected?.label || "" }),
        /* @__PURE__ */ jsx(
          "svg",
          {
            className: clsx11(
              "w-3.5 h-3.5 text-text-tertiary transition-transform duration-300",
              open && "rotate-180 text-accent"
            ),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 2.5,
            children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" })
          }
        )
      ]
    }
  );
};
var SelectOption = ({
  opt,
  isSelected,
  onSelect
}) => {
  return /* @__PURE__ */ jsx("li", { className: "mb-1 last:mb-0", children: /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      className: clsx11(
        `
          relative w-full px-3 py-2.5
          text-left text-sm rounded-xl
          flex items-center gap-3
          transition-all duration-150
          `,
        isSelected ? "text-accent font-medium" : "text-foreground/80 hover:bg-white/10 hover:text-foreground"
      ),
      onClick: onSelect,
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-2", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: clsx11(
              "w-1.5 h-1.5 rounded-full transition-all duration-200",
              isSelected ? "bg-accent scale-100" : "bg-transparent scale-0"
            )
          }
        ) }),
        /* @__PURE__ */ jsx("span", { children: opt.label })
      ]
    }
  ) });
};
var SelectDropdown = ({
  open,
  options,
  value,
  onSelect
}) => {
  return /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: -4 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -4 },
      transition: { duration: 0.15, ease: "easeOut" },
      className: "absolute top-full left-0 w-full mt-2 z-50",
      children: /* @__PURE__ */ jsx("div", { className: "rounded-xl bg-background/95 backdrop-blur-xl border border-text-tertiary/20 shadow-2xl p-1", children: /* @__PURE__ */ jsx("ul", { className: "max-h-48 overflow-y-auto scrollbar-hide py-1", children: options.map((opt) => /* @__PURE__ */ jsx(
        SelectOption,
        {
          opt,
          isSelected: opt.value === value,
          onSelect: () => onSelect(opt)
        },
        opt.value
      )) }) })
    }
  ) });
};
var Select = forwardRef(
  ({
    label,
    value,
    options,
    onValueChange,
    error,
    name,
    onChange,
    onBlur,
    className
  }, ref) => {
    const wrapperRef = useRef(null);
    const { open, setOpen, selected, hasValue } = useSelect({
      value,
      options
    });
    const id = label.toLowerCase().replace(/\s+/g, "-");
    useEffect(() => {
      const handler = (e) => {
        if (!wrapperRef.current?.contains(e.target)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }, [setOpen]);
    const fireRHF = (v) => {
      onChange?.({ target: { name, value: v } });
    };
    const handleSelect = (opt) => {
      onValueChange(opt.value);
      fireRHF(opt.value);
      setOpen(false);
    };
    return /* @__PURE__ */ jsxs("div", { ref: wrapperRef, className: clsx11("relative w-full", className), children: [
      /* @__PURE__ */ jsx(
        FloatingFieldShell_default,
        {
          id,
          label,
          error,
          hasValue,
          isOpen: open,
          children: /* @__PURE__ */ jsx("div", { ref, children: /* @__PURE__ */ jsx(
            SelectTrigger,
            {
              selected,
              open,
              setOpen,
              onBlur
            }
          ) })
        }
      ),
      /* @__PURE__ */ jsx(
        SelectDropdown,
        {
          open,
          options,
          value,
          onSelect: handleSelect
        }
      )
    ] });
  }
);
Select.displayName = "Select";
var UsernameField = ({
  id,
  value,
  onChange,
  onFocus,
  onBlur,
  error
}) => {
  return /* @__PURE__ */ jsx(
    InputBase,
    {
      id,
      value,
      placeholder: " ",
      onChange: (e) => onChange(e.target.value),
      onFocus,
      onBlur,
      error
    }
  );
};
UsernameField.displayName = "UsernameField";
var UsernameStatus = ({
  status,
  hasValue
}) => {
  if (!hasValue || status === "idle") return null;
  if (status === "checking") {
    return /* @__PURE__ */ jsx(Text, { size: "tiny", tone: "tertiary", children: "Checking\u2026" });
  }
  if (status === "available") {
    return /* @__PURE__ */ jsx(Text, { size: "tiny", weight: "bold", className: "text-accent", children: "Username available \u2713" });
  }
  if (status === "taken") {
    return /* @__PURE__ */ jsx(Text, { size: "tiny", weight: "bold", className: "text-red-500", children: "Username not available." });
  }
  return null;
};
var UsernameSuggestions = ({
  suggestions,
  onSelect
}) => {
  if (!suggestions.length) return null;
  return /* @__PURE__ */ jsx("div", { className: "w-full flex justify-center mt-[1px]", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-3", children: [
    /* @__PURE__ */ jsx("span", { className: "text-accent font-medium", children: "Suggestions:" }),
    suggestions.slice(0, 3).map((s) => /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => onSelect(s),
        className: "\n              text-foreground-muted\n              text-[11px] tracking-wide font-medium\n              hover:text-foreground transition-colors\n            ",
        children: s
      },
      s
    ))
  ] }) });
};
var UsernameInput = ({
  label,
  value,
  status,
  suggestions,
  error,
  isSubmitted,
  onChange,
  onSelectSuggestion,
  onFocus,
  onBlur
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const id = label.replace(/\s+/g, "-").toLowerCase();
  const safeValue = value ?? "";
  const trimmed = safeValue.trim();
  const hasValue = trimmed !== "";
  const isTaken = status === "taken" && hasValue;
  const shouldShowZodError = !!error && isSubmitted && trimmed === "" && status !== "taken" && status !== "checking";
  const visualError = shouldShowZodError ? error : void 0;
  return (
    // ✨ Removed h-[96px] -> Use a tight container
    /* @__PURE__ */ jsxs("div", { className: "relative w-full flex flex-col", children: [
      /* @__PURE__ */ jsx(
        FloatingFieldShell_default,
        {
          id,
          label,
          hasValue,
          error: visualError,
          isOpen: isFocused,
          children: /* @__PURE__ */ jsx(
            UsernameField,
            {
              id,
              value: safeValue,
              onChange,
              error: visualError,
              onFocus: () => {
                setIsFocused(true);
                onFocus?.();
              },
              onBlur: () => {
                setIsFocused(false);
                onBlur?.();
              }
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: clsx11(
            "w-full pt-1 transition-all duration-200 min-h-[1.25rem]",
            isTaken || shouldShowZodError || status !== "idle" && hasValue ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
          ),
          children: shouldShowZodError ? /* @__PURE__ */ jsx(Text, { size: "tiny", weight: "bold", className: "text-red-500", children: error }) : /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-0.5", children: [
            /* @__PURE__ */ jsx(UsernameStatus, { status, hasValue }),
            isTaken && suggestions.length > 0 && /* @__PURE__ */ jsx(
              UsernameSuggestions,
              {
                suggestions,
                onSelect: onSelectSuggestion
              }
            )
          ] })
        }
      )
    ] })
  );
};
UsernameInput.displayName = "UsernameInput";
function useCalendar(value, minYear = 1920, maxYear = (/* @__PURE__ */ new Date()).getFullYear() + 10) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState("days");
  const dateValue = value ? new Date(value) : /* @__PURE__ */ new Date();
  const [viewDate, setViewDate] = useState(new Date(dateValue));
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const days = useMemo(() => {
    const arr = [];
    for (let i = 0; i < firstDayOfMonth; i++) arr.push(null);
    for (let d = 1; d <= daysInMonth; d++) arr.push(d);
    return arr;
  }, [year, month, daysInMonth, firstDayOfMonth]);
  const years = useMemo(() => {
    const arr = [];
    for (let y = maxYear; y >= minYear; y--) arr.push(y);
    return arr;
  }, [minYear, maxYear]);
  return {
    open,
    setOpen,
    view,
    setView,
    viewDate,
    setViewDate,
    year,
    month,
    days,
    years
  };
}
var CalendarTrigger = ({
  open,
  value,
  displayDate,
  onClick,
  error,
  disabled
}) => {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      disabled,
      onClick,
      className: clsx11(
        "flex items-center justify-between w-full text-left",
        /* 🛠️ FIX: Match SelectTrigger border logic */
        "border-b transition-colors duration-200",
        // Use the exact same tokens as SelectTrigger
        error ? "border-red-500" : open ? "border-accent" : "border-text-tertiary/30",
        "h-[46px] pt-6 pb-2 outline-none",
        disabled && "opacity-50 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ jsx("span", { className: clsx11(
          "text-[0.95rem] font-ui",
          value ? "text-text-primary" : "text-transparent"
        ), children: displayDate }),
        /* @__PURE__ */ jsx(
          Calendar,
          {
            className: clsx11(
              "w-4 h-4 transition-colors duration-200",
              open ? "text-accent" : "text-text-tertiary"
            )
          }
        )
      ]
    }
  );
};
var DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
var CalendarGrid = ({
  days,
  year,
  month,
  value,
  onSelectDay
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-7 gap-1", children: [
    DAYS.map((d) => /* @__PURE__ */ jsx("div", { className: "h-8 flex items-center justify-center text-[10px] font-bold text-text-tertiary", children: d }, d)),
    days.map((day, i) => /* @__PURE__ */ jsx("div", { className: "aspect-square flex items-center justify-center", children: day && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => onSelectDay(day),
        className: clsx11(
          "w-8 h-8 rounded-full text-sm",
          new Date(value || "").toDateString() === new Date(year, month, day).toDateString() ? "bg-accent text-white" : "hover:bg-surface-2"
        ),
        children: day
      }
    ) }, i))
  ] });
};
var MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var CalendarMonths = ({ year, month, setViewDate, onSelect }) => {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-2", children: MONTH_NAMES.map((m, i) => /* @__PURE__ */ jsx(
    "button",
    {
      onClick: () => {
        setViewDate(new Date(year, i, 1));
        onSelect(i);
      },
      children: m.substring(0, 3)
    },
    m
  )) });
};
var CalendarYears = ({ years, year, onSelect }) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const validYears = years.filter((y) => y <= currentYear);
  return (
    /* ✨ Shrunk: Tightened gap and added max-height for density */
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-1.5 max-h-[200px] overflow-y-auto pr-1 scrollbar-hide", children: validYears.map((y) => {
      const isSelected = y === year;
      return /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => onSelect(y),
          className: cn3(
            "py-2 text-xs rounded-md transition-all duration-200",
            isSelected ? "bg-accent text-white font-bold" : "text-text-secondary hover:bg-accent-bg hover:text-accent"
          ),
          children: y
        },
        y
      );
    }) })
  );
};
var CalendarInput = ({
  label,
  value,
  onChange,
  error,
  disabled,
  minYear,
  maxYear
}) => {
  const ref = useRef(null);
  const {
    open,
    setOpen,
    view,
    setView,
    year,
    month,
    days,
    years,
    setViewDate
  } = useCalendar(value, minYear, maxYear);
  useEffect(() => {
    const handler = (e) => {
      if (!ref.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [setOpen]);
  const displayDate = useMemo(() => {
    if (!value) return "";
    return new Date(value).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }, [value]);
  const changeMonth = (offset) => {
    setViewDate(new Date(year, month + offset, 1));
  };
  return /* @__PURE__ */ jsxs("div", { ref, className: "relative w-full", children: [
    /* @__PURE__ */ jsx(
      FloatingFieldShell_default,
      {
        id: label,
        label,
        hasValue: !!value,
        isOpen: open,
        error,
        children: /* @__PURE__ */ jsx(
          CalendarTrigger,
          {
            open,
            value,
            displayDate,
            onClick: () => setOpen(!open),
            error,
            disabled
          }
        )
      }
    ),
    open && /* ✨ Fixed Colors: bg-background, border-border-subtle, shadow-sm */
    /* @__PURE__ */ jsxs("div", { className: "absolute z-50 mt-2 w-[280px] bg-background border border-border-subtle rounded-unio-lg shadow-lg p-3 animate-in fade-in zoom-in-95 duration-200", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => setView(view === "years" ? "days" : "years"),
            className: "flex flex-col items-start group outline-none",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-accent uppercase tracking-widest", children: year }),
                /* @__PURE__ */ jsx(
                  ChevronDown,
                  {
                    size: 10,
                    className: clsx11(
                      "text-accent transition-transform",
                      view === "years" && "rotate-180"
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                "span",
                {
                  onClick: (e) => {
                    e.stopPropagation();
                    setView("months");
                  },
                  className: "text-base font-bold text-text-primary leading-tight group-hover:text-accent transition-colors",
                  children: MONTH_NAMES[month]
                }
              )
            ]
          }
        ),
        view === "days" && /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
          /* @__PURE__ */ jsx(NavBtn, { onClick: () => changeMonth(-1), icon: /* @__PURE__ */ jsx(ChevronLeft, { size: 14 }) }),
          /* @__PURE__ */ jsx(NavBtn, { onClick: () => changeMonth(1), icon: /* @__PURE__ */ jsx(ChevronRight, { size: 14 }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "min-h-[200px]", children: [
        view === "years" && /* @__PURE__ */ jsx(
          CalendarYears,
          {
            years,
            year,
            onSelect: (y) => {
              setViewDate(new Date(y, month, 1));
              setView("months");
            }
          }
        ),
        view === "months" && /* @__PURE__ */ jsx(
          CalendarMonths,
          {
            year,
            month,
            setViewDate,
            onSelect: (i) => {
              setViewDate(new Date(year, i, 1));
              setView("days");
            }
          }
        ),
        view === "days" && /* @__PURE__ */ jsx(
          CalendarGrid,
          {
            days,
            year,
            month,
            value,
            onSelectDay: (d) => {
              const date = new Date(year, month, d);
              onChange(date.toISOString().split("T")[0]);
              setOpen(false);
            }
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-3 pt-2 border-t border-border-faint flex justify-end", children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => setOpen(false),
          className: "text-[10px] font-bold text-text-tertiary hover:text-text-primary px-2 py-1 transition-colors",
          children: "CLOSE"
        }
      ) })
    ] })
  ] });
};
var NavBtn = ({
  onClick,
  icon
}) => /* @__PURE__ */ jsx(
  "button",
  {
    type: "button",
    onClick: (e) => {
      e.stopPropagation();
      onClick();
    },
    className: "w-7 h-7 flex items-center justify-center rounded-md border border-border-faint hover:bg-accent-bg text-text-secondary transition-colors",
    children: icon
  }
);

export { AutocompleteSelect, Avatar, Button, CalendarInput, Checkbox, Dropdown, DropdownItem, FloatingInput, IconButton, Logo, PasswordInput, Select, Text, UsernameInput, cn3 as cn };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map