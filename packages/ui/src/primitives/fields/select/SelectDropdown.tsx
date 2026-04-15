/* packages/ui/src/primitives/fields/select/SelectDropdown.tsx */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SelectOption } from "./SelectOption";

export const SelectDropdown = ({
  open,
  options,
  value,
  onSelect,
}: any) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="absolute top-full left-0 w-full mt-2 z-50"
        >
          {/* backdrop-blur-3xl and border-text-tertiary/20 for a premium feel */}
          <div className="rounded-xl bg-background/95 backdrop-blur-xl border border-text-tertiary/20 shadow-2xl p-1">
            <ul className="max-h-48 overflow-y-auto scrollbar-hide py-1">
              {options.map((opt: any) => (
                <SelectOption
                  key={opt.value}
                  opt={opt}
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