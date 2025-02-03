import { capitalize } from "./capitalize";
import { words } from "./words";

/**
 * Converts a string to Title Case.
 *
 * @param str - The string to convert.
 * @param asciiOnly - If `true`, only ASCII letters are considered.
 * @returns The Title Cased string.
 *
 * @example
 * titleCase("foo bar");
 * // => "Foo Bar"
 */
export function titleCase(str: string, asciiOnly = false): string {
  return words(str, asciiOnly)
    .map((word) => capitalize(word.toLowerCase()))
    .join(" ");
}
