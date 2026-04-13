import React, { memo } from "react";
import clsx from "clsx";
import { LINKS, FOOTER_LINKS } from "@unio/lib";
import { PublicFooterProps } from "./types";
import { FooterColumn } from "./FooterColumn";
import { FooterBrand } from "./FooterBrand";
import { FooterBottom } from "./FooterBottom";

export const PublicFooter: React.FC<PublicFooterProps> = memo(({
  className,
  containerClassName,
  showTopBorder = true,
  brandVariant = "lockup",
  socialLinks,
}) => {
  const links = {
    twitter: socialLinks?.twitter ?? LINKS.TWITTER,
    instagram: socialLinks?.instagram ?? LINKS.INSTAGRAM,
    linkedin: socialLinks?.linkedin ?? LINKS.LINKEDIN,
  };

  return (
    <footer className={clsx("w-full shrink-0 bg-background relative", className)}>
      {/* SHARP 1PX TOP BORDER */}
      {showTopBorder && (
        <div className="absolute top-0 left-0 right-0 h-px bg-accent w-full" />
      )}

      {/* SCOOTED IN: Changed max-w-1600 to max-w-[1320px] 
          This brings the left and right sides closer to the center.
      */}
      <div className="max-w-[1320px] mx-auto px-[clamp(1rem,3vw,3rem)]">
        <div className={clsx("py-12 lg:py-16", containerClassName)}>
          <nav className="flex flex-col lg:flex-row justify-between items-start gap-12">
            
            {/* LEFT: BRANDING & CONTACT */}
            <div className="flex flex-col gap-6 max-w-[280px]">
              <FooterBrand variant={brandVariant} />
              
              <button className="flex items-center gap-2 w-fit px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all active:scale-95">
                <span className="text-accent text-xs">✎</span>
                <span className="text-sm font-semibold text-text-primary">Contact Us</span>
              </button>
            </div>

            {/* RIGHT: NAVIGATION - Adjusted gaps to feel tighter */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12 xl:gap-16">
              <FooterColumn title="Company" items={FOOTER_LINKS.company} />
              <FooterColumn title="Resources" items={FOOTER_LINKS.resources} />
              <FooterColumn title="Legal" items={FOOTER_LINKS.legal} />
              <FooterColumn title="Compliance" items={FOOTER_LINKS.compliance} />
            </div>
          </nav>

          <FooterBottom socialLinks={links} />
        </div>
      </div>
    </footer>
  );
});

PublicFooter.displayName = "PublicFooter";