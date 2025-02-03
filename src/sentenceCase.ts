import { words } from "./words";
import { capitalize } from "./capitalize";

/**
 * Converts a string to Sentence case.
 *
 * @param str - The string to convert.
 * @param asciiOnly - If `true`, only ASCII letters are considered.
 * @returns The Sentence cased string.
 *
 * @example
 * sentenceCase("foo bar");
 * // => "Foo bar"
 */
export function sentenceCase(str: string, asciiOnly = false): string {
  return words(str, asciiOnly)
    .map((word, index) => {
      const lower = word.toLowerCase();
      return index === 0 ? capitalize(lower) : lower;
    })
    .join(" ");
}
