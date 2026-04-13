import { memo } from 'react';
import clsx2, { clsx } from 'clsx';
import { LINKS, FOOTER_LINKS, ROUTES } from '@unio/lib';
import { Logo, Text, Button } from '@unio/ui';
<<<<<<< HEAD
import { jsxs, jsx } from 'react/jsx-runtime';
=======
import { jsx, jsxs } from 'react/jsx-runtime';
>>>>>>> 9606bfe728f0728e4a01299924ecccb4bcad0167
import { FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';

// src/components/footer/PublicFooter.tsx
var FooterColumn = ({ title, items }) => {
  if (!items?.length) return null;
<<<<<<< HEAD
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
=======
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5 min-w-[140px]", children: [
    /* @__PURE__ */ jsx(Text, { className: "text-caption text-text-primary", children: title }),
    /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-3", children: items.map(({ href, label }) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href, className: "text-sm text-text-secondary hover:text-accent transition-colors font-medium", children: label }) }, label)) })
  ] });
};
var FooterBrand = ({ variant }) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5 max-w-[280px]", children: [
  /* @__PURE__ */ jsx("a", { href: ROUTES.HOME, className: "inline-block w-fit focus-visible:outline-accent", children: /* @__PURE__ */ jsx(Logo, { variant, size: "sm" }) }),
  /* @__PURE__ */ jsx(Text, { size: "medium", tone: "muted", className: "opacity-80 leading-relaxed", children: "Building the future of professional connection through spatial intelligence." })
>>>>>>> 9606bfe728f0728e4a01299924ecccb4bcad0167
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
<<<<<<< HEAD
  return /* @__PURE__ */ jsx("div", { className: cn("flex items-center gap-2", className), children: socialItems.map((social) => /* @__PURE__ */ jsx(
=======
  return /* @__PURE__ */ jsx("div", { className: cn("flex items-center gap-1", className), children: socialItems.map((social) => /* @__PURE__ */ jsx(
>>>>>>> 9606bfe728f0728e4a01299924ecccb4bcad0167
    "a",
    {
      href: social.href,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": social.label,
<<<<<<< HEAD
      className: "text-text-secondary hover:text-accent transition-colors p-1",
      children: /* @__PURE__ */ jsx("span", { className: "text-lg flex items-center justify-center", children: social.icon })
=======
      className: cn(
        "p-2 rounded-lg transition-all duration-200",
        "text-text-secondary hover:text-accent hover:bg-accent/5",
        "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 outline-none",
        "active:scale-95"
        // Subtle "press" effect used by top companies
      ),
      children: /* @__PURE__ */ jsx("span", { className: "text-xl flex items-center justify-center", children: social.icon })
>>>>>>> 9606bfe728f0728e4a01299924ecccb4bcad0167
    },
    social.label
  )) });
};
var YEAR = (/* @__PURE__ */ new Date()).getFullYear();
<<<<<<< HEAD
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
=======
var FooterBottom = () => /* @__PURE__ */ jsxs("div", { className: "mt-16 pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-6", children: [
  /* @__PURE__ */ jsxs(Text, { size: "tiny", className: "text-text-tertiary font-medium", children: [
    "\xA9 ",
    /* @__PURE__ */ jsx("time", { dateTime: YEAR.toString(), children: YEAR }),
    " Unio Technologies Inc. All rights reserved."
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "text-[10px] font-bold uppercase tracking-widest text-text-tertiary hover:text-accent transition outline-none focus-visible:text-accent",
        children: "English (UK)"
      }
    ),
    /* @__PURE__ */ jsx(Text, { size: "tiny", className: "text-text-tertiary opacity-40 tabular-nums", children: "v2.0.26" })
>>>>>>> 9606bfe728f0728e4a01299924ecccb4bcad0167
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
<<<<<<< HEAD
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
=======
  return /* @__PURE__ */ jsx("footer", { className: clsx2("w-full shrink-0 bg-background", showTopBorder && "border-t border-border-faint", className), children: /* @__PURE__ */ jsx("div", { className: "unio-layout", children: /* @__PURE__ */ jsxs("div", { className: clsx2("unio-container-marketing py-16 lg:py-24 footer-normalize", containerClassName), children: [
    /* @__PURE__ */ jsxs("nav", { className: "flex flex-col lg:flex-row justify-between gap-16 lg:gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8", children: [
        /* @__PURE__ */ jsx(FooterBrand, { variant: brandVariant }),
        /* @__PURE__ */ jsx(FooterSocials, { links })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-12 lg:gap-16 xl:gap-24", children: [
        /* @__PURE__ */ jsx(FooterColumn, { title: "Company", items: FOOTER_LINKS.company }),
        /* @__PURE__ */ jsx(FooterColumn, { title: "Platform", items: FOOTER_LINKS.resources }),
        /* @__PURE__ */ jsx(FooterColumn, { title: "Legal", items: FOOTER_LINKS.legal }),
        /* @__PURE__ */ jsx(FooterColumn, { title: "Standards", items: FOOTER_LINKS.compliance })
      ] })
    ] }),
    /* @__PURE__ */ jsx(FooterBottom, {})
  ] }) }) });
});
PublicFooter.displayName = "PublicFooter";
var containerVariants = {
  default: "unio-container",
  marketing: "unio-container-marketing",
  full: "w-full px-[var(--container-padding-fluid)]"
>>>>>>> 9606bfe728f0728e4a01299924ecccb4bcad0167
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
<<<<<<< HEAD
        "bg-[hsl(var(--bg-0)/0.65)]",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs(
=======
        "bg-[hsl(var(--bg-0)/0.7)]",
        "border-b border-[hsl(var(--accent-1)/0.25)]",
        className
      ),
      children: [
        /* @__PURE__ */ jsx("div", { className: "unio-layout", children: /* @__PURE__ */ jsxs(
>>>>>>> 9606bfe728f0728e4a01299924ecccb4bcad0167
          "nav",
          {
            className: clsx(
              containerVariants[variant],
<<<<<<< HEAD
              /* light padding so it doesn't hit edges */
              "px-[clamp(0.75rem,2vw,2rem)]",
=======
>>>>>>> 9606bfe728f0728e4a01299924ecccb4bcad0167
              "flex h-16 items-center justify-between"
            ),
            "aria-label": "Primary",
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center min-w-[120px]", children: left }),
              /* @__PURE__ */ jsx("div", { className: "hidden md:flex flex-1 items-center justify-center", children: center }),
<<<<<<< HEAD
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
=======
              /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end gap-3 min-w-[120px]", children: right })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute bottom-0 left-0 right-0 flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "h-px w-[85%] bg-gradient-to-r from-transparent via-[hsl(var(--accent-1))] to-transparent" }) })
>>>>>>> 9606bfe728f0728e4a01299924ecccb4bcad0167
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
<<<<<<< HEAD
          className: "flex items-center gap-2 group",
=======
          className: "flex items-center gap-2 hover:opacity-90 transition",
>>>>>>> 9606bfe728f0728e4a01299924ecccb4bcad0167
          children: /* @__PURE__ */ jsx(
            Logo,
            {
              variant: "lockup",
              size: "md",
<<<<<<< HEAD
              iconClassName: "\n              text-accent text-[1.1rem]\n              transition-transform duration-300 ease-out\n              group-hover:-translate-y-[2px]\n            ",
              wordmarkClassName: "\n              text-text-primary font-semibold tracking-tight text-[1.5rem]\n            "
=======
              iconClassName: "text-accent",
              wordmarkClassName: "text-text-primary font-semibold"
>>>>>>> 9606bfe728f0728e4a01299924ecccb4bcad0167
            }
          )
        }
      ),
      center,
      right: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 sm:gap-4", children: [
<<<<<<< HEAD
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
            className: "rounded-full px-5",
            children: "Get Started"
          }
        )
=======
        /* @__PURE__ */ jsx(Link, { to: ROUTES.LOGIN, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Log In" }) }),
        /* @__PURE__ */ jsx(Link, { to: ROUTES.SIGNUP, children: /* @__PURE__ */ jsx(Button, { variant: "primary", size: "sm", className: "rounded-full", children: "Get Started" }) })
>>>>>>> 9606bfe728f0728e4a01299924ecccb4bcad0167
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

export { MarketingShell, PublicFooter };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map