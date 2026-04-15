import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes without style conflicts.
 * Use this for all dynamic class mapping in the UI.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}