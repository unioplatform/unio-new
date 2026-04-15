/* UsernameSuggestions.tsx */

export const UsernameSuggestions = ({
  suggestions,
  onSelect,
}: {
  suggestions: string[];
  onSelect: (v: string) => void;
}) => {
  if (!suggestions.length) return null;

  return (
    <div className="w-full flex justify-center mt-[1px]">
      <div className="flex flex-row items-center gap-3">
        <span className="text-accent font-medium">
          Suggestions:
        </span>

        {suggestions.slice(0, 3).map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => onSelect(s)}
            className="
              text-foreground-muted
              text-[11px] tracking-wide font-medium
              hover:text-foreground transition-colors
            "
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
};