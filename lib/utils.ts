import { type ClassValue, clsx } from "clsx";

/**
 * Tiny helper for joining classNames.
 * (Kept minimal on purpose.)
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
