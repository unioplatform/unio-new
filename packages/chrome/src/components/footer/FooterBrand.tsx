import React from "react";
import { Text, Logo } from "@unio/ui";
import { ROUTES } from "@unio/lib";

export const FooterBrand: React.FC<{ variant: "lockup" | "mark" | "wordmark" }> = ({ variant }) => (
  <div className="flex flex-col gap-5 max-w-[280px]">
    <a href={ROUTES.HOME} className="inline-block w-fit focus-visible:outline-accent">
      <Logo variant={variant} size="sm" />
    </a>
    <Text size="medium" tone="muted" className="opacity-80 leading-relaxed">
      Building the future of professional connection through spatial intelligence.
    </Text>
  </div>
);
