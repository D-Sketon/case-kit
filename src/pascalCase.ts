import { capitalize } from "./capitalize";
import { words } from "./words";

/**
 * Converts a string to PascalCase, which is also called UpperCamelCase.
 *
 * @param str - The string to convert.
 * @param asciiOnly - If `true`, only ASCII letters are considered.
 * @returns The PascalCased string.
 *
 * @example
 * pascalCase("foo bar");
 * // => "FooBar"
 */
export function pascalCase(str: string, asciiOnly = false): string {
  return words(str, asciiOnly)
    .map((word) => capitalize(word.toLowerCase()))
    .join("");
}
