import { words } from "./words";

/**
 * Converts a string to aLtErNaTiNg cAsE, which is also called StUdLyCaPs or sPoNgEcAsE.
 *
 * @param str - The string to convert.
 * @param asciiOnly - If `true`, only ASCII letters are considered.
 * @returns The alternating cased string.
 *
 * @example
 * alternatingCase("foo bar");
 * // => "fOo bAr"
 */
export function alternatingCase(str: string, asciiOnly = false): string {
  return words(str, asciiOnly)
    .map((word) =>
      word
        .split("")
        .map((char, i) =>
          i % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
        )
        .join("")
    )
    .join(" ");
}
