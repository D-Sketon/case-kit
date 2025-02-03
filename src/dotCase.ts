import { words } from "./words";

/**
 * Converts a string to dot.case.
 *
 * @param str - The string to convert.
 * @param asciiOnly - If `true`, only ASCII letters are considered.
 * @returns The dot.cased string.
 *
 * @example
 * dotCase("foo bar");
 * // => "foo.bar"
 */
export function dotCase(str: string, asciiOnly = false): string {
  return words(str, asciiOnly).join(".").toLowerCase();
}
