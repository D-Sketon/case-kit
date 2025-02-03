/**
 * Capitalizes the first character of a string.
 *
 * @param str - The string to convert.
 * @returns The string with the first character uppercased.
 *
 * @example
 * capitalize("foo bar");
 * // => "Foo bar"
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
