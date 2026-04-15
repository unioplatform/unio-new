import React from "react";
import { Link } from "react-router-dom";
import { Logo, Button } from "@unio/ui";
import { ROUTES } from "@unio/lib";
import { PublicHeaderShell } from "./PublicHeaderShell";

export type PublicHeaderProps = {
  className?: string;
  center?: React.ReactNode;
};

export const PublicHeader: React.FC<PublicHeaderProps> = ({
  className,
  center,
}) => {
  return (
    <PublicHeaderShell
      className={className}
      variant="marketing"
      left={
        <Link
          to={ROUTES.HOME}
          className="flex items-center gap-2 group"
        >
          <Logo
            variant="lockup"
            size="sm" // ✅ FIX: smaller, consistent sizing

            /* ✈️ ICON ANIMATION (no size override!) */
            iconClassName="
              text-accent
              transition-transform duration-300 ease-out
              group-hover:-translate-y-[2px]
            "

            /* 🔤 CLEAN WORDMARK (no manual scaling) */
            wordmarkClassName="
              text-text-primary font-semibold tracking-tight
            "
          />
        </Link>
      }
      center={center}
      right={
        <div className="flex items-center gap-3 sm:gap-4">
          {/* LOGIN */}
          <Button
            as={Link}
            to={ROUTES.LOGIN}
            variant="secondary"
            size="sm"
            className="px-4"
          >
            Log In
          </Button>

          {/* SIGNUP */}
          <Button
            as={Link}
            to={ROUTES.SIGNUP}
            variant="primary"
            size="sm"
            className="px-4"
          >
            Get Started
          </Button>
        </div>
      }
    />
  );
};

export default PublicHeader;