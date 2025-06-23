import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines Tailwind classes with conditional logic and removes duplicates.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
