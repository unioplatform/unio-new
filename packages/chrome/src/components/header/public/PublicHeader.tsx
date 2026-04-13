import React from "react";
import { Link } from "react-router-dom";
import { Logo, Button } from "@unio/ui";
import { ROUTES } from "@unio/lib";
import { PublicHeaderShell } from "./PublicHeaderShell";
// import { ThemeToggle } from "@/components/ThemeToggle"; // optional

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

      /* ---------------- LEFT ---------------- */
      left={
        <Link
          to={ROUTES.HOME}
          className="flex items-center gap-2 hover:opacity-90 transition"
        >
          <Logo
            variant="lockup"
            size="md"
            iconClassName="text-accent"
            wordmarkClassName="text-text-primary font-semibold"
          />
        </Link>
      }

      /* ---------------- CENTER ---------------- */
      center={center}

      /* ---------------- RIGHT ---------------- */
      right={
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* 🌙 Theme toggle (plug-and-play) */}
          {/* <ThemeToggle /> */}

          {/* LOGIN */}
          <Link to={ROUTES.LOGIN}>
            <Button variant="secondary" size="sm">
              Log In
            </Button>
          </Link>

          {/* CTA */}
          <Link to={ROUTES.SIGNUP}>
            <Button variant="primary" size="sm" className="rounded-full">
              Get Started
            </Button>
          </Link>

        </div>
      }
    />
  );
};

export default PublicHeader;