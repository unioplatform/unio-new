/* apps/web/src/features/public/layout/PublicFooter.tsx */
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
      {/* 🟢 TOP BORDER: Thin accent line consistent with the branding */}
      {showTopBorder && (
        <div className="absolute top-0 left-0 right-0 h-px bg-accent w-full" />
      )}
      
      {/* 📏 CONTAINER: max-w-[1128px] for a tighter, more professional alignment */}
      <div className="max-w-[1128px] mx-auto px-6">
        <div className={clsx("py-8 lg:py-10", containerClassName)}>
          <nav className="flex flex-col lg:flex-row justify-between items-start gap-10">
            
            {/* 🏷️ BRANDING & CONTACT */}
            <div className="flex flex-col gap-4 max-w-[240px]">
              <FooterBrand variant={brandVariant} />
              
              {/* CONTACT BUTTON: 
                  - border-text-tertiary/30: Dull tertiary border matching input styles
                  - hover:border-accent: Consistent brand interaction
                  - py-1.5 / text-xs: Micro-scale for a compact footprint
              */}
              <button className="flex items-center gap-2 w-fit px-3 py-1.5 rounded-unio-sm border border-text-tertiary/30 bg-transparent hover:border-accent hover:bg-accent-bg/10 transition-all duration-200 active:scale-95 group">
                <span className="text-text-tertiary group-hover:text-accent text-[10px] transition-colors">
                  ✎
                </span>
                <span className="text-xs font-semibold text-text-primary">
                  Contact Us
                </span>
              </button>
            </div>

            {/* 🧭 NAVIGATION: Condensed grid spacing */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 xl:gap-12">
              <FooterColumn title="Company" items={FOOTER_LINKS.company} />
              <FooterColumn title="Resources" items={FOOTER_LINKS.resources} />
              <FooterColumn title="Legal" items={FOOTER_LINKS.legal} />
              <FooterColumn title="Compliance" items={FOOTER_LINKS.compliance} />
            </div>
          </nav>

          {/* 🔗 BOTTOM SECTION: Copyright and Socials */}
          <FooterBottom socialLinks={links} />
        </div>
      </div>
    </footer>
  );
});

PublicFooter.displayName = "PublicFooter";