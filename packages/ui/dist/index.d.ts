<<<<<<< HEAD
import React, { ComponentPropsWithRef } from 'react';
=======
import * as React$1 from 'react';
import React__default, { ComponentPropsWithRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
>>>>>>> 9606bfe728f0728e4a01299924ecccb4bcad0167

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
<<<<<<< HEAD
declare const Logo: React.FC<LogoProps>;
=======
declare const Logo: React__default.FC<LogoProps>;
>>>>>>> 9606bfe728f0728e4a01299924ecccb4bcad0167

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
<<<<<<< HEAD
declare const Text: React.ForwardRefExoticComponent<Omit<TextProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "primary" | "secondary";
type PolymorphicButtonProps = {
    as?: React.ElementType;
    children: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    to?: string;
    href?: string;
} & React.HTMLAttributes<HTMLElement>;
declare const Button: React.ForwardRefExoticComponent<{
    as?: React.ElementType;
    children: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    to?: string;
    href?: string;
} & React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>;
=======
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
>>>>>>> 9606bfe728f0728e4a01299924ecccb4bcad0167

export { Button, Logo, type LogoProps, type PolymorphicButtonProps, Text, type TextProps };
