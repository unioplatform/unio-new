import { Text } from "../../text";

export const UsernameStatus = ({
  status,
  hasValue,
}: {
  status: "idle" | "checking" | "available" | "taken";
  hasValue: boolean;
}) => {
  // Only show if the user has actually entered text
  if (!hasValue || status === "idle") return null;

  if (status === "checking") {
    return <Text size="tiny" tone="tertiary">Checking…</Text>;
  }

  if (status === "available") {
    return <Text size="tiny" weight="bold" className="text-accent">Username available ✓</Text>;
  }

  if (status === "taken") {
    return <Text size="tiny" weight="bold" className="text-red-500">Username not available.</Text>;
  }

  return null;
};