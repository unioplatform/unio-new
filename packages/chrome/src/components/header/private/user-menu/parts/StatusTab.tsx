import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Text, cn } from "@unio/ui";

interface StatusTabProps {
  isSelected: boolean;
  label: string;
  color: string;
  onClick: () => void;
  className?: string;
}

export const StatusTab: React.FC<StatusTabProps> = ({ 
  isSelected, 
  label, 
  color, 
  onClick,
  className 
}) => {
  return (
    <Button
      variant="ghost"
      size="xs" // ✅ Matches our professional Button's size scale
      onClick={onClick}
      type="button" // ✅ Best practice: explicit type for buttons in forms/menus
      className={cn(
        "relative min-w-[32px] !px-3 rounded-full border-none hover:bg-transparent",
        isSelected ? "cursor-default" : "cursor-pointer",
        className
      )}
    >
      {/* 🟢 ACTIVE PILL ANIMATION */}
      {isSelected && (
        <motion.div
          layoutId="status-active-pill"
          className="absolute inset-0 rounded-full border border-border/60 bg-background shadow-sm"
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 30 
          }}
        />
      )}

      {/* 🔵 CONTENT */}
      <div className={cn("relative z-10 flex items-center justify-center gap-1.5")}>
        {/* Status Dot */}
        <div 
          className={cn(
            "h-2 w-2 rounded-full transition-transform duration-200", 
            color, 
            isSelected ? "scale-100" : "scale-75 opacity-50"
          )} 
        />
        
        {/* Label Animation */}
        <AnimatePresence initial={false}>
          {isSelected && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2, ease: "circOut" }}
              className="overflow-hidden"
            >
              <Text 
                size="tiny" 
                weight="bold" 
                className="whitespace-nowrap leading-none tracking-wide"
              >
                {label}
              </Text>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Button>
  );
};