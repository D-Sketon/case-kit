import { words } from "./words";

/**
 * Converts a string to lower case.
 *
 * @param str - The string to convert.
 * @param asciiOnly - If `true`, only ASCII letters are considered.
 * @returns The lower cased string.
 *
 * @example
 * lowerCase("foo bar");
 * // => "foo bar"
 */
export function lowerCase(str: string, asciiOnly = false): string {
  return words(str, asciiOnly).join(" ").toLowerCase();
}