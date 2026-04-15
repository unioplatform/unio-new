/* packages/chrome/src/header/AuthHeader.tsx */
import React from "react";
import { Link } from "react-router-dom";
import { Logo, Text } from "@unio/ui";
import { ROUTES } from "@unio/lib";

export interface AuthHeaderProps {
  tagline?: string;
}

export const AuthHeader: React.FC<AuthHeaderProps> = ({ 
  tagline = "Build your future, your way." 
}) => {
  return (
    /* Increased pb-4 to pb-8 to give the login card more breathing room */
    <header className="w-full flex justify-center pt-2 pb-8 shrink-0">
      <Link to={ROUTES.HOME} className="flex flex-col items-center group select-none">
        <Logo
          variant="wordmark"
          size="md"
          wordmarkClassName="text-accent transition-colors group-hover:opacity-80"
          className="mb-0.5"
        />
        <Text 
          size="tiny" 
          tone="tertiary" 
          className="opacity-80"
        >
          {tagline}
        </Text>
      </Link>
    </header>
  );
};