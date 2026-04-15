import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn, Text } from "@unio/ui"; 
import type { NavItem } from "@unio/types"; 

interface HeaderNavProps {
  items: NavItem[];
  currentPath?: string; 
  unreadCount?: number; 
  messagesPath?: string; 
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  items,
  unreadCount = 0,
  messagesPath = "/messages",
}) => {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const location = useLocation();
  
  const normalize = (p: string) => p.replace(/\/+$/, "").toLowerCase();
  const activePath = normalize(location.pathname);

  return (
    <ul 
      className="relative flex items-center gap-1"
      onMouseLeave={() => setHoveredPath(null)}
    >
      {items.map((item) => {
        const itemHref = normalize(item.href);
        const isActive = activePath === itemHref || 
                        (itemHref !== "/app" && activePath.startsWith(itemHref + "/"));
        
        const isHovered = hoveredPath === item.href;
        const Icon = item.icon;
        const isMessages = item.href.includes(messagesPath);

        return (
          <li key={item.href} className="relative">
            <Link
              to={item.href}
              onMouseEnter={() => setHoveredPath(item.href)}
              className={cn(
                "relative flex items-center gap-3 rounded-full transition-all duration-500 group",
                "px-4 py-2",
                isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
              )}
            >
              {/* 🖱️ GHOST HOVER PILL */}
              <AnimatePresence>
                {isHovered && !isActive && (
                  <motion.div
                    layoutId="hover-nav-pill"
                    className="absolute inset-0 bg-white/[0.03] border border-white/[0.05] rounded-full z-0"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </AnimatePresence>

              {/* ✨ ACTIVE PILL */}
              {isActive && (
                <motion.div
                  layoutId="active-nav-pill"
                  className={cn(
                    "absolute inset-0 rounded-full z-0",
                    "bg-gradient-to-b from-accent/[0.12] to-accent/[0.04]",
                    "border border-accent/20 shadow-[0_2px_10px_-3px_rgba(var(--accent-rgb),0.2)]"
                  )}
                  transition={{ type: "spring", stiffness: 180, damping: 24, mass: 0.8 }}
                />
              )}

              <span className="relative z-10 flex items-center gap-2">
                <Icon 
                  className={cn(
                    "h-4 w-4 transition-all duration-500", 
                    /* Removed scaling to keep it "normal" and precise */
                    isActive ? "text-accent" : "text-text-tertiary group-hover:text-accent/80" 
                  )} 
                />

                <Text
                  size="small"
                  /* Strictly normal weight for a lighter, premium feel */
                  weight="normal"
                  className={cn(
                    "hidden lg:inline-block transition-all duration-500 brand-font tracking-wide",
                    isActive ? "text-accent" : "text-text-tertiary group-hover:text-text-primary"
                  )}
                >
                  {item.name}
                </Text>

                {/* Optional Message Badge logic can go here if needed */}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};