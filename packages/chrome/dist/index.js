import React5, { memo, useState } from 'react';
import clsx2, { clsx } from 'clsx';
import { LINKS, FOOTER_LINKS, ROUTES, PRIVATE_NAV_ITEMS } from '@unio/lib';
import { cn as cn$1, Logo, Text, Button, Dropdown, Avatar } from '@unio/ui';
import { jsxs, jsx } from 'react/jsx-runtime';
import { FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Bell, ChevronDown, Send, Search } from 'lucide-react';

// src/components/footer/PublicFooter.tsx
var FooterColumn = ({ title, items }) => {
  if (!items?.length) return null;
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 min-w-[120px]", children: [
    /* @__PURE__ */ jsx(Text, { className: "text-sm font-semibold text-text-primary", children: title }),
    /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-2", children: items.map(({ href, label }) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href, className: "text-sm text-text-secondary hover:text-accent transition-colors", children: label }) }, label)) })
  ] });
};
var FooterBrand = ({ variant }) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
  /* @__PURE__ */ jsx("a", { href: ROUTES.HOME, className: "inline-block w-fit group", children: /* @__PURE__ */ jsx(
    Logo,
    {
      variant,
      size: "sm",
      iconClassName: "text-[1rem] text-accent",
      wordmarkClassName: "text-[1.2rem] font-bold text-text-primary tracking-tight"
    }
  ) }),
  /* @__PURE__ */ jsx(Text, { className: "text-[13px] text-text-secondary leading-relaxed max-w-[280px]", children: "Redefining connection \u2014 powered by intelligence, inspired by people." })
] });
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var FooterSocials = ({ links, className }) => {
  const socialItems = [
    { icon: /* @__PURE__ */ jsx(FiTwitter, {}), href: links.twitter, label: "Twitter" },
    { icon: /* @__PURE__ */ jsx(FiInstagram, {}), href: links.instagram, label: "Instagram" },
    { icon: /* @__PURE__ */ jsx(FiLinkedin, {}), href: links.linkedin, label: "LinkedIn" }
  ];
  return /* @__PURE__ */ jsx("div", { className: cn("flex items-center gap-2", className), children: socialItems.map((social) => /* @__PURE__ */ jsx(
    "a",
    {
      href: social.href,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": social.label,
      className: "text-text-secondary hover:text-accent transition-colors p-1",
      children: /* @__PURE__ */ jsx("span", { className: "text-lg flex items-center justify-center", children: social.icon })
    },
    social.label
  )) });
};
var YEAR = (/* @__PURE__ */ new Date()).getFullYear();
var FooterBottom = ({ socialLinks }) => /* @__PURE__ */ jsxs("div", { className: "mt-12", children: [
  /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsx("div", { className: "h-px w-[94%] bg-accent" }) }),
  /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-6", children: [
    /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxs(Text, { size: "tiny", className: "text-text-tertiary font-medium opacity-80", children: [
      "\xA9 ",
      YEAR,
      " Unio Technologies Inc. All rights reserved."
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ jsx("button", { className: "text-[10px] font-bold uppercase tracking-[0.2em] text-text-tertiary hover:text-accent transition-colors", children: "English (UK)" }) }),
    /* @__PURE__ */ jsx("div", { className: "flex-1 flex justify-end", children: /* @__PURE__ */ jsx(FooterSocials, { links: socialLinks }) })
  ] })
] });
var PublicFooter = memo(({
  className,
  containerClassName,
  showTopBorder = true,
  brandVariant = "lockup",
  socialLinks
}) => {
  const links = {
    twitter: socialLinks?.twitter ?? LINKS.TWITTER,
    instagram: socialLinks?.instagram ?? LINKS.INSTAGRAM,
    linkedin: socialLinks?.linkedin ?? LINKS.LINKEDIN
  };
  return /* @__PURE__ */ jsxs("footer", { className: clsx2("w-full shrink-0 bg-background relative", className), children: [
    showTopBorder && /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-px bg-accent w-full" }),
    /* @__PURE__ */ jsx("div", { className: "max-w-[1320px] mx-auto px-[clamp(1rem,3vw,3rem)]", children: /* @__PURE__ */ jsxs("div", { className: clsx2("py-12 lg:py-16", containerClassName), children: [
      /* @__PURE__ */ jsxs("nav", { className: "flex flex-col lg:flex-row justify-between items-start gap-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 max-w-[280px]", children: [
          /* @__PURE__ */ jsx(FooterBrand, { variant: brandVariant }),
          /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-2 w-fit px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all active:scale-95", children: [
            /* @__PURE__ */ jsx("span", { className: "text-accent text-xs", children: "\u270E" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-text-primary", children: "Contact Us" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12 xl:gap-16", children: [
          /* @__PURE__ */ jsx(FooterColumn, { title: "Company", items: FOOTER_LINKS.company }),
          /* @__PURE__ */ jsx(FooterColumn, { title: "Resources", items: FOOTER_LINKS.resources }),
          /* @__PURE__ */ jsx(FooterColumn, { title: "Legal", items: FOOTER_LINKS.legal }),
          /* @__PURE__ */ jsx(FooterColumn, { title: "Compliance", items: FOOTER_LINKS.compliance })
        ] })
      ] }),
      /* @__PURE__ */ jsx(FooterBottom, { socialLinks: links })
    ] }) })
  ] });
});
PublicFooter.displayName = "PublicFooter";
var containerVariants = {
  default: "max-w-[1128px] mx-auto",
  /* 🔥 KEY CHANGE: MUCH WIDER */
  marketing: "max-w-[1600px] mx-auto",
  full: "w-full"
};
var PublicHeaderShell = ({
  left,
  center,
  right,
  className,
  variant = "marketing"
}) => {
  return /* @__PURE__ */ jsxs(
    "header",
    {
      role: "banner",
      className: clsx(
        "fixed top-0 left-0 right-0 z-50 w-full",
        "backdrop-blur-xl",
        "bg-[hsl(var(--bg-0)/0.65)]",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs(
          "nav",
          {
            className: clsx(
              containerVariants[variant],
              /* light padding so it doesn't hit edges */
              "px-[clamp(0.75rem,2vw,2rem)]",
              "flex h-16 items-center justify-between"
            ),
            "aria-label": "Primary",
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center min-w-[120px]", children: left }),
              /* @__PURE__ */ jsx("div", { className: "hidden md:flex flex-1 items-center justify-center", children: center }),
              /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end gap-3 sm:gap-4 min-w-[120px]", children: right })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute bottom-0 left-0 right-0 flex justify-center", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "\n        h-px\n        w-[92%]\n        bg-gradient-to-r\n        from-transparent\n        via-[hsl(var(--accent-1))]\n        to-transparent\n      "
          }
        ) })
      ]
    }
  );
};
memo(PublicHeaderShell);
var PublicHeader = ({
  className,
  center
}) => {
  return /* @__PURE__ */ jsx(
    PublicHeaderShell,
    {
      className,
      variant: "marketing",
      left: /* @__PURE__ */ jsx(
        Link,
        {
          to: ROUTES.HOME,
          className: "flex items-center gap-2 group",
          children: /* @__PURE__ */ jsx(
            Logo,
            {
              variant: "lockup",
              size: "sm",
              iconClassName: "\n              text-accent\n              transition-transform duration-300 ease-out\n              group-hover:-translate-y-[2px]\n            ",
              wordmarkClassName: "\n              text-text-primary font-semibold tracking-tight\n            "
            }
          )
        }
      ),
      center,
      right: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 sm:gap-4", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            as: Link,
            to: ROUTES.LOGIN,
            variant: "secondary",
            size: "sm",
            className: "px-4",
            children: "Log In"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            as: Link,
            to: ROUTES.SIGNUP,
            variant: "primary",
            size: "sm",
            className: "px-4",
            children: "Get Started"
          }
        )
      ] })
    }
  );
};
var PrivateHeaderShell = ({
  logo,
  search,
  navigation,
  actions,
  isSearchOpen = false
}) => {
  return /* @__PURE__ */ jsx("div", { className: "sticky top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 pb-2 px-4 bg-background", children: /* @__PURE__ */ jsxs(
    "header",
    {
      className: cn$1(
        "pointer-events-auto w-full max-w-[88rem] h-[72px]",
        "flex items-center justify-between px-4",
        "rounded-2xl border backdrop-blur-xl transition-all duration-300",
        /* Default State: Strengthened accent border */
        "border-accent/30 bg-background/70 shadow-lg shadow-black/5",
        /* Open Search State: High visibility accent border */
        isSearchOpen && "bg-background/95 border-accent/50 shadow-accent/10"
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 min-w-0 flex-shrink", children: [
          logo,
          /* @__PURE__ */ jsx("div", { className: "relative", children: search })
        ] }),
        /* @__PURE__ */ jsx(
          "nav",
          {
            className: cn$1(
              "flex items-center ml-4 overflow-x-auto no-scrollbar transition-all duration-300",
              isSearchOpen ? "opacity-0 invisible max-w-0" : "opacity-100 max-w-[45vw] sm:max-w-[55vw] lg:max-w-none"
            ),
            children: navigation
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn$1(
              "flex items-center gap-2 pl-2 transition-opacity duration-300",
              isSearchOpen && "opacity-40 pointer-events-none"
            ),
            children: actions
          }
        )
      ]
    }
  ) });
};
var AnimatedLogo = () => {
  return /* @__PURE__ */ jsx(
    Link,
    {
      to: "/",
      "aria-label": "Unio Home",
      className: "group relative flex items-center justify-center p-1 outline-none",
      children: /* @__PURE__ */ jsx(
        Logo,
        {
          variant: "mark",
          size: "md",
          className: "transition-all duration-500 ease-out",
          iconClassName: cn$1(
            // The "Flight" Animation Logic
            "group-hover:translate-x-[6px] group-hover:-translate-y-[6px] group-hover:rotate-12",
            "group-active:scale-95"
          )
        }
      )
    }
  );
};
var HeaderNav = ({
  items,
  unreadCount = 0,
  messagesPath = "/messages"
}) => {
  const [hoveredPath, setHoveredPath] = useState(null);
  const location = useLocation();
  const normalize = (p) => p.replace(/\/+$/, "").toLowerCase();
  const activePath = normalize(location.pathname);
  return /* @__PURE__ */ jsx(
    "ul",
    {
      className: "relative flex items-center gap-1",
      onMouseLeave: () => setHoveredPath(null),
      children: items.map((item) => {
        const itemHref = normalize(item.href);
        const isActive = activePath === itemHref || itemHref !== "/app" && activePath.startsWith(itemHref + "/");
        const isHovered = hoveredPath === item.href;
        const Icon = item.icon;
        item.href.includes(messagesPath);
        return /* @__PURE__ */ jsx("li", { className: "relative", children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: item.href,
            onMouseEnter: () => setHoveredPath(item.href),
            className: cn$1(
              "relative flex items-center gap-3 rounded-full transition-all duration-500 group",
              "px-4 py-2",
              isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
            ),
            children: [
              /* @__PURE__ */ jsx(AnimatePresence, { children: isHovered && !isActive && /* @__PURE__ */ jsx(
                motion.div,
                {
                  layoutId: "hover-nav-pill",
                  className: "absolute inset-0 bg-white/[0.03] border border-white/[0.05] rounded-full z-0",
                  initial: { opacity: 0, scale: 0.95 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.95 },
                  transition: { type: "spring", stiffness: 400, damping: 30 }
                }
              ) }),
              isActive && /* @__PURE__ */ jsx(
                motion.div,
                {
                  layoutId: "active-nav-pill",
                  className: cn$1(
                    "absolute inset-0 rounded-full z-0",
                    "bg-gradient-to-b from-accent/[0.12] to-accent/[0.04]",
                    "border border-accent/20 shadow-[0_2px_10px_-3px_rgba(var(--accent-rgb),0.2)]"
                  ),
                  transition: { type: "spring", stiffness: 180, damping: 24, mass: 0.8 }
                }
              ),
              /* @__PURE__ */ jsxs("span", { className: "relative z-10 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(
                  Icon,
                  {
                    className: cn$1(
                      "h-4 w-4 transition-all duration-500",
                      /* Removed scaling to keep it "normal" and precise */
                      isActive ? "text-accent" : "text-text-tertiary group-hover:text-accent/80"
                    )
                  }
                ),
                /* @__PURE__ */ jsx(
                  Text,
                  {
                    size: "small",
                    weight: "normal",
                    className: cn$1(
                      "hidden lg:inline-block transition-all duration-500 brand-font tracking-wide",
                      isActive ? "text-accent" : "text-text-tertiary group-hover:text-text-primary"
                    ),
                    children: item.name
                  }
                )
              ] })
            ]
          }
        ) }, item.href);
      })
    }
  );
};
var HeaderSearch = () => {
  const [query, setQuery] = useState("");
  const hasQuery = query.length > 0;
  return /* @__PURE__ */ jsxs("div", { className: "group relative flex items-center", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        value: query,
        onChange: (e) => setQuery(e.target.value),
        placeholder: "Search...",
        className: cn$1(
          "h-9 w-48 lg:w-64 rounded-xl text-sm outline-none transition-all duration-200",
          /* Default State */
          "bg-background/40 border border-border/20 pl-4 pr-10 text-text-primary placeholder:text-text-tertiary",
          /* Focus State - Subtle glow instead of harsh white */
          "focus:bg-background/80 focus:border-accent/30 focus:ring-4 focus:ring-accent/5"
          /* Hover removed as requested to keep the dark aesthetic clean */
        )
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute right-3 flex items-center justify-center pointer-events-none", children: hasQuery ? (
      /* Active State: Paper plane "Send" icon */
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center animate-in fade-in slide-in-from-right-2 duration-300", children: /* @__PURE__ */ jsx(Send, { className: "h-3.5 w-3.5 text-accent" }) })
    ) : (
      /* Default State: Static Search icon */
      /* @__PURE__ */ jsx(Search, { className: "h-4 w-4 text-text-tertiary group-focus-within:text-accent transition-colors duration-300" })
    ) })
  ] });
};
var UserMenuDropdown = ({
  trigger,
  children,
  open,
  onOpenChange
}) => {
  return /* @__PURE__ */ jsx("div", { className: "relative z-[9999]", children: /* @__PURE__ */ jsxs(Dropdown, { open, onOpenChange, children: [
    /* @__PURE__ */ jsx(Dropdown.Trigger, { children: trigger }),
    children
  ] }) });
};
var UserMenuTrigger = ({ user, open }) => {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      className: cn$1(
        "group flex items-center gap-3 rounded-full py-1 pl-1 pr-3",
        "transition-colors outline-none select-none",
        open ? "bg-accent-bg/50" : "hover:bg-accent-bg/30"
      ),
      children: [
        /* @__PURE__ */ jsx(
          Avatar,
          {
            photo: user.avatarUrl,
            initials: user.initials,
            size: "sm",
            status: user.status
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "hidden min-w-0 max-w-[140px] flex-col items-start text-left md:flex", children: [
          /* @__PURE__ */ jsx(Text, { size: "small", weight: "semibold", truncate: true, children: user.fullName }),
          user.careerName && /* @__PURE__ */ jsx(Text, { size: "tiny", tone: "tertiary", truncate: true, children: user.careerName })
        ] }),
        /* @__PURE__ */ jsx(
          ChevronDown,
          {
            className: cn$1(
              "ml-1 h-4 w-4 text-text-tertiary transition-transform duration-200",
              open ? "rotate-180 text-accent" : ""
            )
          }
        )
      ]
    }
  );
};
var NotificationBell = React5.forwardRef(
  ({ unreadCount, className, ...props }, ref) => {
    return /* @__PURE__ */ jsxs(
      "button",
      {
        ref,
        type: "button",
        className: cn$1(
          "relative flex h-11 w-11 items-center justify-center rounded-full transition-all",
          "hover:bg-accent-bg/40 text-text-tertiary hover:text-accent group active:scale-90",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsx(Bell, { className: "w-5 h-5 transition-transform group-hover:rotate-12" }),
          unreadCount > 0 && /* @__PURE__ */ jsxs("span", { className: "absolute -top-1 -right-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 px-1 border-2 border-background shadow-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20" }),
            /* @__PURE__ */ jsx("span", { className: "relative text-[10px] font-black text-white leading-none", children: unreadCount > 9 ? "9+" : unreadCount })
          ] })
        ]
      }
    );
  }
);
var PrivateHeader = ({
  navItems,
  currentPath,
  user,
  isSearchOpen = false,
  notificationCount = 0,
  searchSlot,
  userMenuContent,
  onNotificationClick
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return /* @__PURE__ */ jsx(
    PrivateHeaderShell,
    {
      isSearchOpen,
      logo: /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 scale-[0.85] origin-left", children: /* @__PURE__ */ jsx(AnimatedLogo, {}) }),
      search: searchSlot || /* @__PURE__ */ jsx(HeaderSearch, {}),
      navigation: /* @__PURE__ */ jsx(
        HeaderNav,
        {
          items: navItems,
          currentPath
        }
      ),
      actions: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(
          NotificationBell,
          {
            unreadCount: notificationCount,
            onClick: onNotificationClick
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "h-6 w-px bg-border/40 mx-1" }),
        /* @__PURE__ */ jsx(
          UserMenuDropdown,
          {
            open: isMenuOpen,
            onOpenChange: setIsMenuOpen,
            trigger: /* @__PURE__ */ jsx(
              UserMenuTrigger,
              {
                open: isMenuOpen,
                user: {
                  fullName: user?.name || "User",
                  avatarUrl: user?.image,
                  initials: user?.name?.charAt(0).toUpperCase() || "U",
                  careerName: user?.careerName || "Member",
                  status: user?.status || "online"
                }
              }
            ),
            children: userMenuContent
          }
        )
      ] })
    }
  );
};
var MarketingShell = ({
  children,
  className,
  showFooter = true,
  showHeader = true
}) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: clsx2(
        "min-h-screen flex flex-col bg-background text-text-primary antialiased",
        "selection:bg-accent/20 selection:text-accent",
        className
      ),
      children: [
        showHeader && /* @__PURE__ */ jsx(PublicHeader, {}),
        /* @__PURE__ */ jsx("main", { className: "flex-1 flex flex-col pt-16", children: /* @__PURE__ */ jsx("div", { className: "unio-layout w-full", children: /* @__PURE__ */ jsx("div", { className: "unio-container-marketing w-full", children }) }) }),
        showFooter && /* @__PURE__ */ jsx("div", { className: "shrink-0", children: /* @__PURE__ */ jsx(PublicFooter, {}) })
      ]
    }
  );
};
var PrivateShell = ({
  children,
  className,
  isSearchOpen = false,
  currentPath = "/"
}) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn$1(
        "min-h-screen flex flex-col bg-background text-text-primary antialiased",
        "selection:bg-accent/20 selection:text-accent",
        className
      ),
      children: [
        /* @__PURE__ */ jsx(
          PrivateHeader,
          {
            navItems: PRIVATE_NAV_ITEMS,
            currentPath,
            isSearchOpen
          }
        ),
        /* @__PURE__ */ jsx("main", { className: "flex-1 flex flex-col pt-8", children: /* @__PURE__ */ jsx("div", { className: "unio-layout-private", children: /* @__PURE__ */ jsx("div", { className: "unio-container-private w-full h-full", children }) }) })
      ]
    }
  );
};

export { MarketingShell, PrivateShell, PublicFooter };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map