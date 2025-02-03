import { words } from "./words";

/**
 * Converts a string to SCREAMING_SNAKE_CASE, which is also known as CONSTANT_CASE, MACRO_CASE, or UPPER_SNAKE_CASE.
 *
 * @param str - The string to convert.
 * @param asciiOnly - If `true`, only ASCII letters are considered.
 * @returns The SCREAMING_SNAKE_CASED string.
 *
 * @example
 * screamingSnakeCase("foo bar");
 * // => "FOO_BAR"
 */
export function screamingSnakeCase(str: string, asciiOnly = false): string {
  return words(str, asciiOnly).join("_").toUpperCase();
}