import * as React$1 from 'react';
import React__default, { ComponentPropsWithRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type Variant = "mark" | "wordmark" | "lockup";
type Size = "xs" | "sm" | "md" | "lg";
type LogoProps = {
    variant?: Variant;
    size?: Size;
    mono?: boolean;
    className?: string;
    iconClassName?: string;
    wordmarkClassName?: string;
    "aria-label"?: string;
};
declare const Logo: React__default.FC<LogoProps>;

type TextSize = "tiny" | "small" | "medium" | "large" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
type TextWeight = "normal" | "semibold" | "bold" | "black";
type TextTone = "default" | "secondary" | "muted" | "tertiary" | "brand" | "danger";
type TextTracking = "tight" | "normal" | "wide" | "widest";
/**
 * 🎯 Pure Text Props
 * We extend React.ComponentPropsWithRef<"span"> so it behaves
 * exactly like a span, but with our design tokens.
 */
interface TextProps extends ComponentPropsWithRef<"span"> {
    size?: TextSize;
    weight?: TextWeight;
    tone?: TextTone;
    tracking?: TextTracking;
    uppercase?: boolean;
    italic?: boolean;
    truncate?: boolean;
}
/**
 * 🎨 Pure Unio Text
 * A strict span-based primitive. No 'as' prop, no 'any'.
 */
declare const Text: React__default.ForwardRefExoticComponent<Omit<TextProps, "ref"> & React__default.RefAttributes<HTMLSpanElement>>;

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "primary" | "secondary" | "outline-accent" | "ghost" | "icon";
type BaseProps = {
    children?: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    disableFocusRing?: boolean;
    fullWidth?: boolean;
};
type NativeProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
};
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: "a";
    href: string;
};
type GenericLinkProps = BaseProps & {
    as?: React.ElementType;
    to?: string;
};
type PolymorphicButtonProps = NativeProps | AnchorProps | GenericLinkProps;
declare const Button: React$1.ForwardRefExoticComponent<PolymorphicButtonProps & React$1.RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;

export { Button, Logo, type LogoProps, type PolymorphicButtonProps, Text, type TextProps };
