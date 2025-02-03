import { describe, expect, it } from "vitest";
import { screamingSnakeCase } from "../src/screamingSnakeCase";

describe("screamingSnakeCase", () => {
  it('should change camel case to screaming snake case', () => {
    expect(screamingSnakeCase('camelCase')).toEqual('CAMEL_CASE');
  });

  it('should change space to screaming snake case', () => {
    expect(screamingSnakeCase('some whitespace')).toEqual('SOME_WHITESPACE');
  });

  it('should change hyphen to screaming snake case', () => {
    expect(screamingSnakeCase('hyphen-text')).toEqual('HYPHEN_TEXT');
  });

  it('should change Acronyms to small letter', () => {
    expect(screamingSnakeCase('HTTPRequest')).toEqual('HTTP_REQUEST');
  });

  it('should handle leading and trailing whitespace', () => {
    expect(screamingSnakeCase('    leading and trailing whitespace    ')).toEqual('LEADING_AND_TRAILING_WHITESPACE');
  });

  it('should handle special characters correctly', () => {
    expect(screamingSnakeCase('special@characters!')).toEqual('SPECIAL_CHARACTERS');
  });

  it('should work with an empty string', () => {
    expect(screamingSnakeCase('')).toEqual('');
  });

  it('should work with screaming camel case', () => {
    expect(screamingSnakeCase('FOO_BAR')).toEqual('FOO_BAR');
  });

  it('should support emojis', () => {
    expect(screamingSnakeCase('Keep unicode 😅')).toEqual('KEEP_UNICODE_😅');
  });

  it('should work with numbers', () => {
    expect(screamingSnakeCase('foo2bar')).toEqual('FOO_2_BAR');
  });

  it('should work with ordinal numbers', () => {
    expect(screamingSnakeCase('foo2ndBar')).toEqual('FOO_2ND_BAR');
  });

  it('should work with contractions', () => {
    expect(screamingSnakeCase("I'M A STRING")).toEqual("I'M_A_STRING");
  })
});