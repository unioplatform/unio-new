/* HighlightMatch.tsx */

export const HighlightMatch = ({
  text,
  match,
  isSelected,
}: {
  text: string;
  match: string;
  isSelected: boolean;
}) => {
  if (!match) return <span>{text}</span>;

  const parts = text.split(new RegExp(`(${match})`, "gi"));

  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === match.toLowerCase() ? (
          <span
            key={i}
            className={
              isSelected ? "font-bold" : "text-foreground font-semibold"
            }
          >
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
};