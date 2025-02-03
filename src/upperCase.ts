import { words } from "./words";

/**
 * Converts a string to UPPER CASE.
 *
 * @param str - The string to convert.
 * @param asciiOnly - If `true`, only ASCII letters are considered.
 * @returns The UPPER CASED string.
 *
 * @example
 * upperCase("foo bar");
 * // => "FOO BAR"
 */
export function upperCase(str: string, asciiOnly = false): string {
  return words(str, asciiOnly).join(" ").toUpperCase();
}
