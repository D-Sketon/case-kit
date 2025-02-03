import { words } from "./words";

/**
 * Converts a string to pipe|case.
 *
 * @param str - The string to convert.
 * @param asciiOnly - If `true`, only ASCII letters are considered.
 * @returns The pipe|cased string.
 *
 * @example
 * pipeCase("foo bar");
 * // => "foo|bar"
 */
export function pipeCase(str: string, asciiOnly = false): string {
  return words(str, asciiOnly).join("|").toLowerCase();
}
