import React from "react";
import clsx from "clsx";
import { PublicFooter } from "../footer";
import { PublicHeader } from "../header";

export type MarketingShellProps = {
  children: React.ReactNode;
  className?: string;
  showFooter?: boolean;
  showHeader?: boolean;
};

export const MarketingShell: React.FC<MarketingShellProps> = ({
  children,
  className,
  showFooter = true,
  showHeader = true,
}) => {
  return (
    <div
      className={clsx(
        "min-h-screen flex flex-col bg-background text-text-primary antialiased",
        "selection:bg-accent/20 selection:text-accent",
        className
      )}
    >
      {/* 🔝 HEADER */}
      {showHeader && <PublicHeader />}

      {/* 🧠 MAIN CONTENT */}
      <main className="flex-1 flex flex-col pt-16">
        {/* 👆 this padding fixes content hiding under fixed header */}

        <div className="unio-layout w-full">
          <div className="unio-container-marketing w-full">
            {children}
          </div>
        </div>
      </main>

      {/* 🔻 FOOTER */}
      {showFooter && (
        <div className="shrink-0">
          <PublicFooter />
        </div>
      )}
    </div>
  );
};
