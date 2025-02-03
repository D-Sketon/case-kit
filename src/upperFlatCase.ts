import { words } from "./words";

/**
 * Converts a string to UPPERFLATCASE.
 *
 * @param str - The string to convert.
 * @param asciiOnly - If `true`, only ASCII letters are considered.
 * @returns The UPPERFLATCASED string.
 *
 * @example
 * upperFlatCase("foo bar");
 * // => "FOOBAR"
 */
export function upperFlatCase(str: string, asciiOnly = false): string {
  return words(str, asciiOnly).join("").toUpperCase();
}
