import React from "react";
import { clsx } from "clsx"; 

type CheckIconProps = {
  className?: string;
};

/**
 * 🎯 CheckIcon
 * A non-interactive SVG primitive. 
 * Strictly follows the 'accent' token and avoids 'any' types.
 */
export const CheckIcon: React.FC<CheckIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3" /* Slightly thicker for better visibility in the high-res 1680px frame */
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx(
        "w-5 h-5 shrink-0 transition-colors duration-200", 
        "text-accent", 
        className
      )}
      aria-hidden="true"
      role="presentation"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
};

export default React.memo(CheckIcon);