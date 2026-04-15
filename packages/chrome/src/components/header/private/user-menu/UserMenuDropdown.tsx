import React from "react";
import { Dropdown } from "@unio/ui";

interface UserMenuDropdownProps {
  /**
   * The Trigger element (The button/avatar)
   * Note: Our @unio/ui Dropdown.Trigger uses cloneElement, 
   * so this MUST be a single valid React element.
   */
  trigger: React.ReactElement;
  
  /**
   * The Dropdown Content (UserMenuContent)
   */
  children: React.ReactNode;

  /**
   * Controlled open state from the parent app (web)
   */
  open: boolean;

  /**
   * Callback to sync state back to the parent app
   */
  onOpenChange: (open: boolean) => void;
}

/**
 * 🎯 The Shell for the User Menu
 * This resides in Chrome to lock in the layout/z-index.
 */
export const UserMenuDropdown: React.FC<UserMenuDropdownProps> = ({
  trigger,
  children,
  open,
  onOpenChange,
}) => {
  return (
    <div className="relative z-[9999]">
      <Dropdown open={open} onOpenChange={onOpenChange}>
        {/* We wrap the trigger in Dropdown.Trigger. 
          Since your UI package uses cloneElement, we pass the trigger directly.
        */}
        <Dropdown.Trigger>
          {trigger}
        </Dropdown.Trigger>

        {children}
      </Dropdown>
    </div>
  );
};

export default UserMenuDropdown;