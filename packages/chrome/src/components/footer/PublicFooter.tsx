import React, { memo } from "react";
import clsx from "clsx";
import { LINKS, FOOTER_LINKS } from "@unio/lib";
import { PublicFooterProps } from "./types";
import { FooterColumn } from "./FooterColumn";
import { FooterBrand } from "./FooterBrand";
import { FooterSocials } from "./FooterSocials";
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
    <footer className={clsx("w-full shrink-0 bg-background", showTopBorder && "border-t border-border-faint", className)}>
      <div className="unio-layout">
        <div className={clsx("unio-container-marketing py-16 lg:py-24 footer-normalize", containerClassName)}>
          <nav className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
            {/* LEFT: BRANDING */}
            <div className="flex flex-col gap-8">
              <FooterBrand variant={brandVariant} />
              <FooterSocials links={links} />
            </div>

            {/* RIGHT: NAVIGATION */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 lg:gap-16 xl:gap-24">
              <FooterColumn title="Company" items={FOOTER_LINKS.company} />
              <FooterColumn title="Platform" items={FOOTER_LINKS.resources} />
              <FooterColumn title="Legal" items={FOOTER_LINKS.legal} />
              <FooterColumn title="Standards" items={FOOTER_LINKS.compliance} />
            </div>
          </nav>

          <FooterBottom />
        </div>
      </div>
    </footer>
  );
});

PublicFooter.displayName = "PublicFooter";
