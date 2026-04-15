/* AutocompleteInput.tsx */

import { InputBase } from "../InputBase";

export const AutocompleteInput = ({
  id,
  name,
  value,
  setOpen,
  setQuery,
  onBlur,
  inputRef,
}: any) => {
  return (
    <InputBase
      id={id}
      name={name}
      ref={inputRef}
      autoComplete="off"
      placeholder=" "
      value={value}
      onClick={() => setOpen(true)}
      onFocus={() => setOpen(true)}
      onChange={(e) => {
        setQuery(e.target.value);
        setOpen(true);
      }}
      onBlur={onBlur}
      className="pr-6"
    />
  );
};