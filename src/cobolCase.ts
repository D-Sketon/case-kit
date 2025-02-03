import { words } from "./words";

/**
 * Converts a string to COBOL_CASE, which is also known as SCREAMING-KEBAB-CASE.
 *
 * @param str - The string to convert.
 * @param asciiOnly - If `true`, only ASCII letters are considered.
 * @returns The COBOL_CASED string.
 *
 * @example
 * cobolCase("foo bar");
 * // => "FOO-BAR"
 */
export function cobolCase(str: string, asciiOnly = false): string {
  return words(str, asciiOnly).join("-").toUpperCase();
}
