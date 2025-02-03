import { words } from "./words";

/**
 * Converts a string to flatcase.
 *
 * @param str - The string to convert.
 * @param asciiOnly - If `true`, only ASCII letters are considered.
 * @returns The flatcased string.
 *
 * @example
 * flatCase("foo bar");
 * // => "foobar"
 */
export function flatCase(str: string, asciiOnly = false): string {
  return words(str, asciiOnly).join("").toLowerCase();
}
