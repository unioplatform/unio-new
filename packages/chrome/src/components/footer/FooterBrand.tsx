import React from "react";
import { Text, Logo } from "@unio/ui";
import { ROUTES } from "@unio/lib";

export const FooterBrand: React.FC<{ variant: "lockup" | "mark" | "wordmark" }> = ({ variant }) => (
<<<<<<< HEAD
  <div className="flex flex-col gap-4">
    <a href={ROUTES.HOME} className="inline-block w-fit group">
      <Logo 
        variant={variant} 
        size="sm" 
        /* Smaller icon: set to roughly 0.9rem or 1rem 
        */
        iconClassName="text-[1rem] text-accent" 
        /* Bolder and larger name: 
           - font-bold/font-semibold for the bold look
           - text-[1.2rem] to make it larger than the icon
        */
        wordmarkClassName="text-[1.2rem] font-bold text-text-primary tracking-tight"
      />
    </a>
    <Text className="text-[13px] text-text-secondary leading-relaxed max-w-[280px]">
      Redefining connection — powered by intelligence, inspired by people.
    </Text>
  </div>
);
=======
  <div className="flex flex-col gap-5 max-w-[280px]">
    <a href={ROUTES.HOME} className="inline-block w-fit focus-visible:outline-accent">
      <Logo variant={variant} size="sm" />
    </a>
    <Text size="medium" tone="muted" className="opacity-80 leading-relaxed">
      Building the future of professional connection through spatial intelligence.
    </Text>
  </div>
);
>>>>>>> 9606bfe728f0728e4a01299924ecccb4bcad0167
