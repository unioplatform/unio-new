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

type PrivateShellProps = {
    children: React.ReactNode;
    className?: string;
    isSearchOpen?: boolean;
    currentPath?: string;
};
declare const PrivateShell: React.FC<PrivateShellProps>;

export { type FooterLinkItem, MarketingShell, type MarketingShellProps, PrivateShell, type PrivateShellProps, PublicFooter, type PublicFooterProps };
