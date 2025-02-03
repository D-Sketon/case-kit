const rNonCharLatin = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\xd7\\xf7";

const rUnicodeUpper = "\\p{Lu}";
const rUnicodeLower = "\\p{Ll}";

const rMisc = "(?:[\\p{Lm}\\p{Lo}]\\p{M}*)";
const rNumber = "\\d";
const rUnicodeOptContrLower = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?";
const rUnicodeOptContrUpper = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?";
const rUnicodeBreak = `[\\p{Z}\\p{P}${rNonCharLatin}]`;

const rUnicodeMiscUpper = `(?:${rUnicodeUpper}|${rMisc})`;
const rUnicodeMiscLower = `(?:${rUnicodeLower}|${rMisc})`;

const rUnicodeWord = RegExp(
  [
    `${rUnicodeUpper}?${rUnicodeLower}+${rUnicodeOptContrLower}(?=${rUnicodeBreak}|${rUnicodeUpper}|$)`,

    `${rUnicodeMiscUpper}+${rUnicodeOptContrUpper}(?=${rUnicodeBreak}|${rUnicodeUpper}${rUnicodeMiscLower}|$)`,

    `${rUnicodeUpper}?${rUnicodeMiscLower}+${rUnicodeOptContrLower}`,

    `${rUnicodeUpper}+${rUnicodeOptContrUpper}`,

    `${rNumber}*(?:1ST|2ND|3RD|(?![123])${rNumber}TH)(?=\\b|[a-z_])`,

    `${rNumber}*(?:1st|2nd|3rd|(?![123])${rNumber}th)(?=\\b|[A-Z_])`,

    `${rNumber}+`,

    "\\p{Emoji_Presentation}",

    "\\p{Extended_Pictographic}",
  ].join("|"),
  "gu"
);

const rAsciiUpper = "[A-Z]";
const rAsciiLower = "[a-z]";
const rAsciiOptContrLower = "(?:'(?:d|ll|m|re|s|t|ve))?";
const rAsciiOptContrUpper = "(?:'(?:D|LL|M|RE|S|T|VE))?";
const rAsciiBreak = `[\\s${rNonCharLatin}]`;

const rAsciiWord = RegExp(
  [
    `${rAsciiUpper}?${rAsciiLower}+${rAsciiOptContrLower}(?=${rAsciiBreak}|${rAsciiUpper}|$)`,

    `${rAsciiUpper}+${rAsciiOptContrUpper}(?=${rAsciiBreak}|${rAsciiUpper}${rAsciiLower}|$)`,

    `${rAsciiUpper}?${rAsciiLower}+${rAsciiOptContrLower}`,

    `${rAsciiUpper}+${rAsciiOptContrUpper}`,

    `${rNumber}*(?:1ST|2ND|3RD|(?![123])${rNumber}TH)(?=\\b|[a-z_])`,

    `${rNumber}*(?:1st|2nd|3rd|(?![123])${rNumber}th)(?=\\b|[A-Z_])`,

    `${rNumber}+`,
  ].join("|"),
  "g"
);

/**
 * Splits a string into words.
 *
 * @param str - The string to split.
 * @param asciiOnly - If `true`, only ASCII letters are considered.
 * @returns The words.
 *
 * @example
 * words("foo bar-baz");
 * // => ["foo", "bar", "baz"]
 */
export function words(str: string, asciiOnly = false): string[] {
  if (asciiOnly) {
    return Array.from(str.match(rAsciiWord) || []);
  }

  return Array.from(str.match(rUnicodeWord) || []);
}
