/* AutocompleteOption.tsx */

import clsx from "clsx";
import { HighlightMatch } from "./HighlightMatch";

export const AutocompleteOption = ({
  opt,
  isSelected,
  query,
  onSelect,
}: any) => {
  return (
    <li>
      <button
        type="button"
        className={clsx(
          "w-full px-3 py-2.5 rounded-xl text-left flex items-center gap-3 transition-colors",
          isSelected
            ? "text-accent font-medium bg-accent/10"
            : "text-foreground/80 hover:bg-white/10"
        )}
        onClick={onSelect}
      >
        <HighlightMatch
          text={opt.label}
          match={query}
          isSelected={isSelected}
        />
      </button>
    </li>
  );
};