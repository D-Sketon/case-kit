import { describe, expect, it } from "vitest";
import { snakeCase } from "../src/snakeCase";

describe("snakeCase", () => {
  it('should change camel case to snake case', () => {
    expect(snakeCase('camelCase')).toEqual('camel_case');
  });

  it('should change space to snake case', () => {
    expect(snakeCase('some whitespace')).toEqual('some_whitespace');
  });

  it('should change hyphen to snake case', () => {
    expect(snakeCase('hyphen-text')).toEqual('hyphen_text');
  });

  it('should change Acronyms to small letter', () => {
    expect(snakeCase('HTTPRequest')).toEqual('http_request');
  });

  it('should handle leading and trailing whitespace', () => {
    expect(snakeCase('    leading and trailing whitespace    ')).toEqual('leading_and_trailing_whitespace');
  });

  it('should handle special characters correctly', () => {
    expect(snakeCase('special@characters!')).toEqual('special_characters');
  });

  it('should work with an empty string', () => {
    expect(snakeCase('')).toEqual('');
  });

  it('should work with screaming camel case', () => {
    expect(snakeCase('FOO_BAR')).toEqual('foo_bar');
  });

  it('should support emojis', () => {
    expect(snakeCase('Keep unicode 😅')).toEqual('keep_unicode_😅');
  });

  it('should work with numbers', () => {
    expect(snakeCase('foo2bar')).toEqual('foo_2_bar');
  });

  it('should work with ordinal numbers', () => {
    expect(snakeCase('foo2ndBar')).toEqual('foo_2nd_bar');
  });

  it('should work with contractions', () => {
    expect(snakeCase("I'M A STRING")).toEqual("i'm_a_string");
  })
});