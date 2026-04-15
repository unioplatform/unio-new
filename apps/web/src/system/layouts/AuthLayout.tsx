
import React from "react";
import { AuthShell } from "@unio/chrome";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <AuthShell>{children}</AuthShell>;
}

 