import { capitalize } from "./capitalize";
import { words } from "./words";

/**
 * Converts a string to Pascal_Snake_Case.
 *
 * @param str - The string to convert.
 * @param asciiOnly - If `true`, only ASCII letters are considered.
 * @returns The Pascal_Snake_Cased string.
 *
 * @example
 * pascalSnakeCase("foo bar");
 * // => "Foo_Bar"
 */
export function pascalSnakeCase(str: string, asciiOnly = false): string {
  return words(str, asciiOnly)
    .map((word) => capitalize(word.toLowerCase()))
    .join("_");
}
