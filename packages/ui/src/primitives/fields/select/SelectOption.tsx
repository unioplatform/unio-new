/* SelectOption.tsx */

import clsx from "clsx";

export const SelectOption = ({
  opt,
  isSelected,
  onSelect,
}: any) => {
  return (
    <li className="mb-1 last:mb-0">
      <button
        type="button"
        className={clsx(
          `
          relative w-full px-3 py-2.5
          text-left text-sm rounded-xl
          flex items-center gap-3
          transition-all duration-150
          `,
          isSelected
            ? "text-accent font-medium"
            : "text-foreground/80 hover:bg-white/10 hover:text-foreground"
        )}
        onClick={onSelect}
      >
        <div className="flex items-center justify-center w-2">
          <div
            className={clsx(
              "w-1.5 h-1.5 rounded-full transition-all duration-200",
              isSelected ? "bg-accent scale-100" : "bg-transparent scale-0"
            )}
          />
        </div>

        <span>{opt.label}</span>
      </button>
    </li>
  );
};