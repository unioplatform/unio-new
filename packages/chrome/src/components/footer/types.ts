export type FooterLinkItem = {
  href: string;
  label: string;
};

export type PublicFooterProps = {
  className?: string;
  containerClassName?: string;
  showTopBorder?: boolean;
  brandVariant?: "lockup" | "mark" | "wordmark";
  socialLinks?: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
};