import { memo } from 'react';
import clsx2, { clsx } from 'clsx';
import { LINKS, FOOTER_LINKS, ROUTES } from '@unio/lib';
import { Logo, Text, Button } from '@unio/ui';
import { jsxs, jsx } from 'react/jsx-runtime';
import { FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';

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
              size: "md",
              iconClassName: "\n              text-accent text-[1.1rem]\n              transition-transform duration-300 ease-out\n              group-hover:-translate-y-[2px]\n            ",
              wordmarkClassName: "\n              text-text-primary font-semibold tracking-tight text-[1.5rem]\n            "
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
            className: "rounded-full px-5",
            children: "Get Started"
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

export { MarketingShell, PublicFooter };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map