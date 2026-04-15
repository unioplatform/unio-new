import React, { createContext, useContext, useRef, useEffect } from "react";
import { cn } from "../../utils/cn";

const DropdownContext = createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
} | null>(null);

export const Dropdown = ({ open, onOpenChange, children }: { 
  open: boolean; 
  onOpenChange: (open: boolean) => void; 
  children: React.ReactNode 
}) => {
  return (
    <DropdownContext.Provider value={{ open, setOpen: onOpenChange }}>
      <div className="relative inline-block text-left">{children}</div>
    </DropdownContext.Provider>
  );
};

// 💡 TOP COMPANY MOVE: Use a simple wrapper or "asChild" pattern instead of cloneElement
Dropdown.Trigger = ({ children }: { children: React.ReactNode }) => {
  const ctx = useContext(DropdownContext);
  if (!ctx) throw new Error("Dropdown.Trigger needs a context");
  
  return (
    <div 
      onClick={() => ctx.setOpen(!ctx.open)} 
      className="cursor-pointer contents" // 'contents' makes the div invisible to layout
    >
      {children}
    </div>
  );
};

Dropdown.Content = ({ align = "start", className, children }: any) => {
  const ctx = useContext(DropdownContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ctx?.open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        ctx.setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [ctx]);

  if (!ctx?.open) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "absolute z-50 mt-2 min-w-[15rem] rounded-xl border border-border/40 bg-background shadow-xl",
        align === "end" ? "right-0" : "left-0",
        "animate-in fade-in zoom-in-95 duration-150",
        className
      )}
    >
      {children}
    </div>
  );
};