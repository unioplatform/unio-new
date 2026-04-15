/* packages/data/src/auth/gender.data.ts */

/**
 * ✅ Canonical Gender Options
 * Aligned with backend enums and UI Select requirements.
 */
export const genders = [
  { label: "Female", value: "FEMALE" },
  { label: "Male", value: "MALE" },
  { label: "Non-binary", value: "NON_BINARY" },
  { label: "Prefer not to say", value: "PREFER_NOT_TO_SAY" },
]

// "as const" ensures TypeScript treats the values as literal strings, 
// which is safer for your Zod schemas.