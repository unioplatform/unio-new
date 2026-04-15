// packages/chrome/src/header/PrivateHeader.tsx
import React, { useState } from "react";
import { PrivateHeaderShell } from "./PrivateHeaderShell";
import { AnimatedLogo } from "../shared/AnimatedLogo";
import { HeaderNav } from "./HeaderNav"; 
import { HeaderSearch } from "../search";
import { UserMenuDropdown } from "./user-menu/UserMenuDropdown";
import { UserMenuTrigger } from "./user-menu/UserMenuTrigger";
import { NotificationBell } from "./notifications/NotificationBell";

import type { NavItem } from "@unio/types"; 

export interface PrivateHeaderProps {
  navItems: NavItem[];
  currentPath: string;
  
  user?: {
    name?: string;
    image?: string | null;
    status?: any;
    careerName?: string;
  };

  isSearchOpen?: boolean;
  notificationCount?: number;
  
  searchSlot?: React.ReactNode;
  userMenuContent?: React.ReactNode;
  onNotificationClick?: () => void;
}

export const PrivateHeader: React.FC<PrivateHeaderProps> = ({
  navItems,
  currentPath,
  user,
  isSearchOpen = false,
  notificationCount = 0,
  searchSlot,
  userMenuContent,
  onNotificationClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <PrivateHeaderShell
      isSearchOpen={isSearchOpen}
      logo={
        <div className="flex-shrink-0 scale-[0.85] origin-left">
          <AnimatedLogo />
        </div>
      }
      search={searchSlot || <HeaderSearch />} 
      navigation={
        <HeaderNav 
          items={navItems} 
          currentPath={currentPath} 
        />
      }
      actions={
        <div className="flex items-center gap-2">
          <NotificationBell 
            unreadCount={notificationCount} 
            onClick={onNotificationClick} 
          />

          <div className="h-6 w-px bg-border/40 mx-1" />

          <UserMenuDropdown
            open={isMenuOpen}
            onOpenChange={setIsMenuOpen}
            trigger={
              <UserMenuTrigger 
                open={isMenuOpen}
                user={{
                  fullName: user?.name || "User",
                  avatarUrl: user?.image,
                  initials: user?.name?.charAt(0).toUpperCase() || "U",
                  careerName: user?.careerName || "Member",
                  status: user?.status || "online"
                }} 
              />
            }
          >
            {userMenuContent}
          </UserMenuDropdown>
        </div>
      }
    />
  );
};