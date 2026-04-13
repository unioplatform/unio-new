import React, { memo } from "react";
import { clsx } from "clsx";

export interface HeaderShellProps {
left?: React.ReactNode;
center?: React.ReactNode;
right?: React.ReactNode;
className?: string;
variant?: "default" | "marketing" | "full";
}

const containerVariants = {
default: "max-w-[1128px] mx-auto",

/* 🔥 KEY CHANGE: MUCH WIDER */
marketing: "max-w-[1600px] mx-auto",

full: "w-full",
};

export const PublicHeaderShell: React.FC<HeaderShellProps> = ({
left,
center,
right,
className,
variant = "marketing",
}) => {
return (
<header
role="banner"
className={clsx(
"fixed top-0 left-0 right-0 z-50 w-full",
"backdrop-blur-xl",
"bg-[hsl(var(--bg-0)/0.65)]",
className
)}
>
<nav
className={clsx(
containerVariants[variant],

      /* light padding so it doesn't hit edges */
      "px-[clamp(0.75rem,2vw,2rem)]",

      "flex h-16 items-center justify-between"
    )}
    aria-label="Primary"
  >
    {/* LEFT */}
    <div className="flex items-center min-w-[120px]">
      {left}
    </div>

    {/* CENTER */}
    <div className="hidden md:flex flex-1 items-center justify-center">
      {center}
    </div>

    {/* RIGHT */}
    <div className="flex items-center justify-end gap-3 sm:gap-4 min-w-[120px]">
      {right}
    </div>
  </nav>

  {/* 🔥 CORRECT FADE ACCENT DIVIDER */}
  <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex justify-center">
    <div
      className="
        h-px
        w-[92%]
        bg-gradient-to-r
        from-transparent
        via-[hsl(var(--accent-1))]
        to-transparent
      "
    />
  </div>
</header>


);
};

export default memo(PublicHeaderShell);
