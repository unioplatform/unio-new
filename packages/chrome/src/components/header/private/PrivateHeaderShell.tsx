import React from "react";
import { cn } from "@unio/ui";

interface PrivateHeaderShellProps {
  logo: React.ReactNode;
  search: React.ReactNode;
  navigation: React.ReactNode;
  actions: React.ReactNode;
  isSearchOpen?: boolean;
}

export const PrivateHeaderShell: React.FC<PrivateHeaderShellProps> = ({
  logo,
  search,
  navigation,
  actions,
  isSearchOpen = false,
}) => {
  return (
    <div className="sticky top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 pb-2 px-4 bg-background">
      <header
        className={cn(
          "pointer-events-auto w-full max-w-[88rem] h-[72px]",
          "flex items-center justify-between px-4",
          "rounded-2xl border backdrop-blur-xl transition-all duration-300",
          /* Default State: Strengthened accent border */
          "border-accent/30 bg-background/70 shadow-lg shadow-black/5",
          /* Open Search State: High visibility accent border */
          isSearchOpen && "bg-background/95 border-accent/50 shadow-accent/10"
        )}
      >
        {/* LEFT: Brand + Search */}
        <div className="flex items-center gap-4 min-w-0 flex-shrink">
          {logo}
          <div className="relative">
            {search}
          </div>
        </div>

        {/* CENTER: Nav */}
        <nav
          className={cn(
            "flex items-center ml-4 overflow-x-auto no-scrollbar transition-all duration-300",
            isSearchOpen
              ? "opacity-0 invisible max-w-0"
              : "opacity-100 max-w-[45vw] sm:max-w-[55vw] lg:max-w-none"
          )}
        >
          {navigation}
        </nav>

        {/* RIGHT: User Actions */}
        <div
          className={cn(
            "flex items-center gap-2 pl-2 transition-opacity duration-300",
            isSearchOpen && "opacity-40 pointer-events-none"
          )}
        >
          {actions}
        </div>
      </header>
    </div>
  );
};