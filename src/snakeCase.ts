import { words } from "./words";

/**
 * Converts a string to snake_case, which is also called pothole_case.
 *
 * @param str - The string to convert.
 * @param asciiOnly - If `true`, only ASCII letters are considered.
 * @returns The snake_cased string.
 *
 * @example
 * snakeCase("foo bar");
 * // => "foo_bar"
 */
export function snakeCase(str: string, asciiOnly = false): string {
  return words(str, asciiOnly).join("_").toLowerCase();
}
