import { capitalize } from "./capitalize";
import { words } from "./words";

/**
 * Converts a string to camel_Snake_Case.
 *
 * @param str - The string to convert.
 * @param asciiOnly - If `true`, only ASCII letters are considered.
 * @returns The camel_Snake_Cased string.
 *
 * @example
 * camelSnakeCase("foo bar");
 * // => "foo_Bar"
 */
export function camelSnakeCase(str: string, asciiOnly = false): string {
  return words(str, asciiOnly)
    .map((word, index) => {
      const lower = word.toLowerCase();
      return index === 0 ? lower : capitalize(lower);
    })
    .join("_");
}
