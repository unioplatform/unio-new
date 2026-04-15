// packages/chrome/src/shell/PrivateShell.tsx
import React from "react";
import { cn } from "@unio/ui";
import { PrivateHeader } from "../header"; 
import { PRIVATE_NAV_ITEMS } from "@unio/lib";

export type PrivateShellProps = {
  children: React.ReactNode;
  className?: string;
  isSearchOpen?: boolean;
  currentPath?: string;
};

export const PrivateShell: React.FC<PrivateShellProps> = ({
  children,
  className,
  isSearchOpen = false,
  currentPath = "/",
}) => {
  return (
    <div
      className={cn(
        "min-h-screen flex flex-col bg-background text-text-primary antialiased",
        "selection:bg-accent/20 selection:text-accent",
        className
      )}
    >
      {/* Because PrivateHeader is now 'sticky', it sits at the top 
          and pushes the <main> tag down automatically.
      */}
      <PrivateHeader 
        navItems={PRIVATE_NAV_ITEMS} 
        currentPath={currentPath}
        isSearchOpen={isSearchOpen}
      />

      {/* We no longer need 'pt-header-safe' because the header is in the flow.
          We use 'pt-8' just to give the content some nice whitespace.
      */}
      <main className="flex-1 flex flex-col pt-8">
        <div className="unio-layout w-full">
          <div className="unio-container w-full h-full">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};