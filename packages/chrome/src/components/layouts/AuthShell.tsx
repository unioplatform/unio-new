/* packages/chrome/src/shell/AuthShell.tsx */
import React from "react";
import { cn } from "@unio/ui";
import { AuthHeader } from "../header";
import { PublicFooter } from "../footer/PublicFooter";

export type AuthShellProps = {
  children: React.ReactNode;
  className?: string;
  tagline?: string;
};

export const AuthShell: React.FC<AuthShellProps> = ({
  children,
  className,
  tagline,
}) => {
  return (
    <div className={cn(
      "min-h-screen flex flex-col bg-background text-text-primary antialiased",
      className
    )}>
      <AuthHeader tagline={tagline} />

      <main className="flex-1 flex flex-col pt-8 lg:pt-0 justify-center">
        {/* 🏗️ Now using the design system container instead of hardcoded 400px */}
        <div className="unio-container-auth">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {children}
          </div>
        </div>
      </main>

        <PublicFooter />
    </div>
  );
};