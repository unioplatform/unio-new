import React from 'react';

type FooterLinkItem = {
    href: string;
    label: string;
};
type PublicFooterProps = {
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

declare const PublicFooter: React.FC<PublicFooterProps>;

type MarketingShellProps = {
    children: React.ReactNode;
    className?: string;
    showFooter?: boolean;
    showHeader?: boolean;
};
declare const MarketingShell: React.FC<MarketingShellProps>;

export { type FooterLinkItem, MarketingShell, type MarketingShellProps, PublicFooter, type PublicFooterProps };
