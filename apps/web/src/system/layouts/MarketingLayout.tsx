
import React from "react";
import { MarketingShell } from "@unio/chrome";

type MarketingLayoutProps = {
  children: React.ReactNode;
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return <MarketingShell>{children}</MarketingShell>;
}

