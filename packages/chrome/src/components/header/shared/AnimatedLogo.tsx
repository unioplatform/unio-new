import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "@unio/ui";
import { cn } from "@unio/ui";

export const AnimatedLogo: React.FC = () => {
  return (
    <Link
      to="/"
      aria-label="Unio Home"
      className="group relative flex items-center justify-center p-1 outline-none"
    >
      <Logo
        variant="mark"
        size="md"
        className="transition-all duration-500 ease-out"
        iconClassName={cn(
          // The "Flight" Animation Logic
          "group-hover:translate-x-[6px] group-hover:-translate-y-[6px] group-hover:rotate-12",
          "group-active:scale-95"
        )}
      />
    </Link>
  );
};