import React from "react";

export type PolymorphicProps<
  T extends React.ElementType,
  Props = {}
> = Props & {
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof Props | "as">;

export type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>["ref"];

/**
 * Polymorphic component type
 * - Preserves generics for `as`
 * - Supports proper ref typing
 */
export type PolymorphicComponent<P = {}> = {
  <T extends React.ElementType = "button">(
    props: PolymorphicProps<T, P> & {
      ref?: PolymorphicRef<T>;
    }
  ): React.ReactElement | null;
} & React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<any>
>;