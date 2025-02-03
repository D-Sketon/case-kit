import { words } from "./words";
import { capitalize } from "./capitalize";

/**
 * Converts a string to (HTTP-)Header-Case, which is also called Train-Case.
 *
 * @param str - The string to convert.
 * @param asciiOnly - If `true`, only ASCII letters are considered.
 * @returns The Header-Cased string.
 *
 * @example
 * headerCase("foo bar");
 * // => "Foo-Bar"
 */
export function headerCase(str: string, asciiOnly = false): string {
  return words(str, asciiOnly)
    .map((word) => capitalize(word.toLowerCase()))
    .join("-");
}
