import { words } from "./words";

/**
 * Converts a string to path/case.
 *
 * @param str - The string to convert.
 * @param asciiOnly - If `true`, only ASCII letters are considered.
 * @returns The path/cased string.
 *
 * @example
 * pathCase("foo bar");
 * // => "foo/bar"
 */
export function pathCase(str: string, asciiOnly = false): string {
  return words(str, asciiOnly).join("/").toLowerCase();
}