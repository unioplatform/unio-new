import React, { ComponentPropsWithRef, ButtonHTMLAttributes, ReactNode } from 'react';
import { UserStatus } from '@unio/types';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { ClassValue } from 'clsx';

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
declare const Logo: React.FC<LogoProps>;

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
declare const Text: React.ForwardRefExoticComponent<Omit<TextProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;

type PolymorphicProps<T extends React.ElementType, Props = {}> = Props & {
    as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof Props | "as">;
type PolymorphicRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>["ref"];
/**
 * Polymorphic component type
 * - Preserves generics for `as`
 * - Supports proper ref typing
 */
type PolymorphicComponent<P = {}> = {
    <T extends React.ElementType = "button">(props: PolymorphicProps<T, P> & {
        ref?: PolymorphicRef<T>;
    }): React.ReactElement | null;
} & React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<any>>;

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "xs" | "sm" | "md" | "lg";
interface ButtonBaseProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    children?: React.ReactNode;
}
type ButtonComponent = PolymorphicComponent<ButtonBaseProps>;
declare const Button: ButtonComponent;

type IconButtonSize = "xs" | "sm" | "md" | "lg";
type IconButtonVariant = "ghost" | "danger" | "tonal";
type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: ReactNode;
    size?: IconButtonSize;
    variant?: IconButtonVariant;
    children?: ReactNode;
};

declare const IconButton: React.FC<IconButtonProps>;

/**
 * Standardized Avatar Sizes
 * lg (48px) - Optimized for Notification Dropdowns
 * 2xl (112px) - Optimized for Profile Headers
 */
type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
type AvatarProps = {
    initials: string;
    color?: string;
    size?: AvatarSize;
    className?: string;
    photo?: string | null;
    status?: UserStatus;
};

declare const Avatar: React.FC<AvatarProps>;

declare const Dropdown: {
    ({ open, onOpenChange, children }: {
        open: boolean;
        onOpenChange: (open: boolean) => void;
        children: React.ReactNode;
    }): react_jsx_runtime.JSX.Element;
    Trigger({ children }: {
        children: React.ReactNode;
    }): react_jsx_runtime.JSX.Element;
    Content({ align, className, children }: any): react_jsx_runtime.JSX.Element | null;
};

type DropdownItemVariant = "default" | "destructive";
interface DropdownItemBaseProps {
    variant?: DropdownItemVariant;
    className?: string;
    children?: React.ReactNode;
}
type DropdownItemComponent = PolymorphicComponent<DropdownItemBaseProps>;
declare const DropdownItem: DropdownItemComponent;

/**
 * Merges Tailwind classes without style conflicts.
 * Use this for all dynamic class mapping in the UI.
 */
declare function cn(...inputs: ClassValue[]): string;

export { Avatar, Button, Dropdown, DropdownItem, IconButton, Logo, type LogoProps, type PolymorphicComponent, type PolymorphicProps, type PolymorphicRef, Text, type TextProps, cn };
