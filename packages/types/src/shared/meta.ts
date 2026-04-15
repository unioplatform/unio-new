/* packages/types/src/shared/meta.ts */

/**
 * Career Option (Lightweight Reference)
 * Used in: Dropdowns, Messaging, Profile Editing, and Search filters.
 */
export interface CareerOption {
  id: string;
  name: string;
}

/**
 * Lightweight reference used across domains
 */
export type CareerRef = CareerOption;