import { words } from "./words";

/**
 * Converts a string to kebab-case, which is also called lisp-case or spinal-case.
 *
 * @param str - The string to convert.
 * @param asciiOnly - If `true`, only ASCII letters are considered.
 * @returns The kebab-cased string.
 *
 * @example
 * kebabCase("foo bar");
 * // => "foo-bar"
 */
export function kebabCase(str: string, asciiOnly = false): string {
  return words(str, asciiOnly).join("-").toLowerCase();
}
