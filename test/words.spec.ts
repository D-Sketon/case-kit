import { describe, expect, it } from "vitest";
import { words } from "../src/words";

// https://github.com/toss/es-toolkit/blob/main/src/string/words.spec.ts
describe("words-unicode", () => {
  it("splits a simple ASCII comma-separated string into words", () => {
    const result = words("fred, barney, & pebbles");
    expect(result).toEqual(["fred", "barney", "pebbles"]);
  });

  it("returns an empty array when input is an empty string", () => {
    const result = words("");
    expect(result).toEqual([]);
  });

  it("splits a space-separated string into individual words", () => {
    const result = words("split these words");
    expect(result).toEqual(["split", "these", "words"]);
  });

  it("splits Unicode emojis and special characters as separate words", () => {
    const result = words("example🚀with✨emojis💡and🔍special🌟characters");
    expect(result).toEqual([
      "example",
      "🚀",
      "with",
      "✨",
      "emojis",
      "💡",
      "and",
      "🔍",
      "special",
      "🌟",
      "characters",
    ]);
  });

  it("should match camelCase", () => {
    const str = "camelCase";
    const matches = words(str);
    expect(matches).toEqual(["camel", "Case"]);
  });

  it("should match snake_case", () => {
    const str = "snake_case";
    const matches = words(str);
    expect(matches).toEqual(["snake", "case"]);
  });

  it("should match kebab-case", () => {
    const str = "kebab-case";
    const matches = words(str);
    expect(matches).toEqual(["kebab", "case"]);
  });

  it("should handle mixed formats", () => {
    const str = "camelCase_snake_case-kebabCase";
    const matches = words(str);
    expect(matches).toEqual([
      "camel",
      "Case",
      "snake",
      "case",
      "kebab",
      "Case",
    ]);
  });

  it("should match acronyms", () => {
    const str = "HTTPRequest";
    const matches = words(str);
    expect(matches).toEqual(["HTTP", "Request"]);
  });

  it("should match special characters", () => {
    const str = "special_characters@123";
    const matches = words(str);
    expect(matches).toEqual(["special", "characters", "123"]);
  });

  it("should handle leading and trailing whitespace", () => {
    const str = "  leading_and_trailing_whitespace  ";
    const matches = words(str);
    expect(matches).toEqual(["leading", "and", "trailing", "whitespace"]);
  });

  it("should handle underscores", () => {
    const str = "underscore_case_example";
    const matches = words(str);
    expect(matches).toEqual(["underscore", "case", "example"]);
  });

  it("should handle single character words", () => {
    const str = "aB";
    const matches = words(str);
    expect(matches).toEqual(["a", "B"]);
  });

  it("should work with hyphens", () => {
    expect(words("--FOO-BAR--")).toEqual(["FOO", "BAR"]);
  });

  it("should work with numbers", () => {
    expect(words("foo2bar")).toEqual(["foo", "2", "bar"]);
  });

  it("should match emojis", () => {
    expect(words("camelCaseHTTPRequest🚀")).toEqual([
      "camel",
      "Case",
      "HTTP",
      "Request",
      "🚀",
    ]);
  });

  it("should match accented letters", () => {
    expect(words("Lunedì 18 Set")).toEqual(["Lunedì", "18", "Set"]);
  });

  it("should match Hindi characters", () => {
    expect(words("नमस्ते नमस्ते")).toEqual(["नमस्ते", "नमस्ते"]);
  });

  it("should match ordinal numbers", () => {
    expect(words("1st 2nd+3rd--4th@1ST*2ND-3RD_4TH")).toEqual([
      "1st",
      "2nd",
      "3rd",
      "4th",
      "1ST",
      "2ND",
      "3RD",
      "4TH",
    ]);
  });

  it("should match contractions", () => {
    expect(words("I don't+can't-won't")).toEqual([
      "I",
      "don't",
      "can't",
      "won't",
    ]);
  });
});

describe("words-ascii", () => {
  const asciiWords = (str: string) => words(str, true);
  it("splits a simple ASCII comma-separated string into words", () => {
    const result = asciiWords("fred, barney, & pebbles");
    expect(result).toEqual(["fred", "barney", "pebbles"]);
  });

  it("returns an empty array when input is an empty string", () => {
    const result = asciiWords("");
    expect(result).toEqual([]);
  });

  it("splits a space-separated string into individual words", () => {
    const result = asciiWords("split these words");
    expect(result).toEqual(["split", "these", "words"]);
  });

  it("should match camelCase", () => {
    const str = "camelCase";
    const matches = asciiWords(str);
    expect(matches).toEqual(["camel", "Case"]);
  });

  it("should match snake_case", () => {
    const str = "snake_case";
    const matches = asciiWords(str);
    expect(matches).toEqual(["snake", "case"]);
  });

  it("should match kebab-case", () => {
    const str = "kebab-case";
    const matches = asciiWords(str);
    expect(matches).toEqual(["kebab", "case"]);
  });

  it("should handle mixed formats", () => {
    const str = "camelCase_snake_case-kebabCase";
    const matches = asciiWords(str);
    expect(matches).toEqual([
      "camel",
      "Case",
      "snake",
      "case",
      "kebab",
      "Case",
    ]);
  });

  it("should match acronyms", () => {
    const str = "HTTPRequest";
    const matches = words(str);
    expect(matches).toEqual(["HTTP", "Request"]);
  });

  it("should match special characters", () => {
    const str = "special_characters@123";
    const matches = asciiWords(str);
    expect(matches).toEqual(["special", "characters", "123"]);
  });

  it("should handle leading and trailing whitespace", () => {
    const str = "  leading_and_trailing_whitespace  ";
    const matches = asciiWords(str);
    expect(matches).toEqual(["leading", "and", "trailing", "whitespace"]);
  });

  it("should handle underscores", () => {
    const str = "underscore_case_example";
    const matches = asciiWords(str);
    expect(matches).toEqual(["underscore", "case", "example"]);
  });

  it("should handle single character words", () => {
    const str = "aB";
    const matches = asciiWords(str);
    expect(matches).toEqual(["a", "B"]);
  });

  it("should work with hyphens", () => {
    expect(asciiWords("--FOO-BAR--")).toEqual(["FOO", "BAR"]);
  });

  it("should work with numbers", () => {
    expect(asciiWords("foo2bar")).toEqual(["foo", "2", "bar"]);
  });

  it("should match ordinal numbers", () => {
    expect(asciiWords("1st 2nd+3rd--4th@1ST*2ND-3RD_4TH")).toEqual([
      "1st",
      "2nd",
      "3rd",
      "4th",
      "1ST",
      "2ND",
      "3RD",
      "4TH",
    ]);
  });

  it("should match contractions", () => {
    expect(asciiWords("I don't+can't-won't")).toEqual([
      "I",
      "don't",
      "can't",
      "won't",
    ]);
  });
});
