/* AutocompleteDropdown.tsx */

import { motion, AnimatePresence } from "framer-motion";
import { AutocompleteOption } from "./AutocompleteOption";

export const AutocompleteDropdown = ({
  open,
  filtered,
  value,
  query,
  onSelect,
}: any) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15 }}
          className="absolute top-full left-0 right-0 mt-3 z-50"
        >
          <div className="rounded-2xl bg-background-glass/80 backdrop-blur-3xl border border-white/10 shadow-xl p-1.5 overflow-hidden">
            <ul className="max-h-[260px] overflow-y-auto scrollbar-hide">
              {filtered.length === 0 && (
                <li className="py-6 text-center text-muted-foreground text-sm">
                  No matches found
                </li>
              )}

              {filtered.map((opt: any) => (
                <AutocompleteOption
                  key={opt.value}
                  opt={opt}
                  query={query}
                  isSelected={opt.value === value}
                  onSelect={() => onSelect(opt)}
                />
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};