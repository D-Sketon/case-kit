import { capitalize } from "./capitalize";
import { words } from "./words";

/**
 * Converts a string to camelCase, which is also called dromedaryCase.
 *
 * @param str - The string to convert.
 * @param asciiOnly - If `true`, only ASCII letters are considered.
 * @returns The camelCased string.
 *
 * @example
 * camelCase("foo bar");
 * // => "fooBar"
 */
export function camelCase(str: string, asciiOnly = false): string {
  return words(str, asciiOnly)
    .map((word, index) => {
      const lower = word.toLowerCase();
      return index === 0 ? lower : capitalize(lower);
    })
    .join("");
}
