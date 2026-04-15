/* apps/web/src/features/public/auth/components/OAuthButton.tsx */
import React from "react";
import { Button, Text } from "@unio/ui";
import { FcGoogle } from "react-icons/fc";

export const OAuthButton: React.FC<{ onClick?: () => void; disabled?: boolean }> = ({ onClick, disabled }) => (
  <Button
    variant="secondary"
    size="md"
    disabled={disabled}
    onClick={onClick}
    /* - border-text-tertiary/30: Quiet, dull border for idle state.
       - hover:border-accent: Sharp transition to the brand color on interaction.
       - hover:bg-accent-bg/10: Optional subtle tint to make the hover feel more 'active'.
    */
    className="w-full flex items-center justify-center gap-3 bg-background border border-text-tertiary/30 hover:border-accent hover:bg-accent-bg/10 transition-all duration-200"
  >
    <FcGoogle className="text-xl" />
    <Text weight="semibold" size="small" tone="secondary">
      Continue with Google
    </Text>
  </Button>
);