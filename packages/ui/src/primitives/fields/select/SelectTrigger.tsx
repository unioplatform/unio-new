/* packages/ui/src/primitives/fields/select/SelectTrigger.tsx */
import React from "react";
import clsx from "clsx";

export const SelectTrigger = ({
  selected,
  open,
  setOpen,
  onBlur,
}: any) => {
  return (
    <div
      tabIndex={0}
      onClick={() => setOpen((v: boolean) => !v)}
      onBlur={onBlur}
      className={clsx(
        "w-full bg-transparent text-left",
        /* MATCHED BUSINESS LOGIC:
           - border-text-tertiary/30: Idle state matches 'OR' divider and other inputs.
           - border-accent: Active/Open state matches focus.
        */
        "border-b transition-colors duration-200",
        open ? "border-accent" : "border-text-tertiary/30",
        "font-ui text-[0.95rem] h-[46px] pt-6 pb-2",
        "cursor-pointer flex items-center justify-between focus:outline-none"
      )}
    >
      <span className={selected ? "text-text-primary" : "text-text-tertiary"}>
        {selected?.label || ""}
      </span>

      <svg
        className={clsx(
          "w-3.5 h-3.5 text-text-tertiary transition-transform duration-300",
          open && "rotate-180 text-accent"
        )}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
};