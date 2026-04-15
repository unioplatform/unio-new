import React from "react";
import { Link } from "react-router-dom"; // ✅ Essential for SPA performance
import { DropdownItem, Text, cn } from "@unio/ui";
import type { LucideIcon } from "lucide-react";

interface MenuRowProps {
  /** 🔗 Internal route or external URL */
  href?: string;
  /** 🖱️ Action to trigger on click */
  onClick?: () => void;
  /** 🎨 Lucide Icon component */
  icon: LucideIcon;
  /** 📝 Primary label */
  label: string;
  /** 🔢 Right-aligned metadata (badges, hints, etc.) */
  meta?: string;
  /** ⚠️ Styles the row with destructive colors */
  danger?: boolean;
}

/**
 * 🎯 Unio Menu Row
 * A standardized row used within the User Menu dropdown.
 * Uses polymorphic DropdownItem to handle both Buttons and Links.
 */
export const MenuRow: React.FC<MenuRowProps> = ({
  href,
  onClick,
  icon: Icon,
  label,
  meta,
  danger,
}) => {
  // Determine if we should use a Link component or a standard button/anchor
  const isInternalLink = href && href.startsWith("/");

  return (
    <DropdownItem
      as={isInternalLink ? Link : href ? "a" : "button"}
      {...(isInternalLink ? { to: href } : { href })}
      onClick={onClick}
      variant={danger ? "destructive" : "default"}
      className={cn(
        "group flex items-center justify-between px-3 py-2 rounded-lg transition-all",
        // Custom background overrides for the branded user menu look
        !danger && "hover:bg-accent-bg/50"
      )}
    >
      {/* LEFT SIDE: Icon + Label */}
      <div className="flex items-center gap-3">
        <Icon 
          className={cn(
            "h-4 w-4 transition-colors",
            danger 
              ? "text-red-500" 
              : "text-text-tertiary group-hover:text-accent"
          )} 
        />
        <Text 
          size="small" 
          weight="semibold" 
          className={cn(
            "transition-colors",
            danger ? "text-red-500" : "group-hover:text-text-primary"
          )}
        >
          {label}
        </Text>
      </div>

      {/* RIGHT SIDE: Meta Badge */}
      {meta && (
        <span className="text-[10px] font-bold text-text-tertiary opacity-60 tracking-wider">
          {meta}
        </span>
      )}
    </DropdownItem>
  );
};