
import React from "react";
import { PrivateShell } from "@unio/chrome";

type PrivateLayoutProps = {
  children: React.ReactNode;
};

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  return <PrivateShell>{children}</PrivateShell>;
}

 