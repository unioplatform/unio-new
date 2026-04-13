import React from "react";
import { Link } from "react-router-dom";
import { Logo, Button } from "@unio/ui";
import { ROUTES } from "@unio/lib";
import { PublicHeaderShell } from "./PublicHeaderShell";
<<<<<<< HEAD
=======
// import { ThemeToggle } from "@/components/ThemeToggle"; // optional
>>>>>>> 9606bfe728f0728e4a01299924ecccb4bcad0167

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
<<<<<<< HEAD
      left={
        <Link
          to={ROUTES.HOME}
          className="flex items-center gap-2 group"
=======

      /* ---------------- LEFT ---------------- */
      left={
        <Link
          to={ROUTES.HOME}
          className="flex items-center gap-2 hover:opacity-90 transition"
>>>>>>> 9606bfe728f0728e4a01299924ecccb4bcad0167
        >
          <Logo
            variant="lockup"
            size="md"
<<<<<<< HEAD

            /* 🔥 ICON ANIMATION */
            iconClassName="
              text-accent text-[1.1rem]
              transition-transform duration-300 ease-out
              group-hover:-translate-y-[2px]
            "

            /* ❌ NO HOVER EFFECT ON TEXT */
            wordmarkClassName="
              text-text-primary font-semibold tracking-tight text-[1.5rem]
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
            className="rounded-full px-5"
          >
            Get Started
          </Button>
=======
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

>>>>>>> 9606bfe728f0728e4a01299924ecccb4bcad0167
        </div>
      }
    />
  );
};

export default PublicHeader;