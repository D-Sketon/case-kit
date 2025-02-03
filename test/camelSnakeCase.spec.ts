import { describe, expect, it } from "vitest";
import { camelSnakeCase } from "../src/camelSnakeCase";

describe("camelSnakeCase", () => {
 it('should change camel case to camel snake case', () => {
    expect(camelSnakeCase('camelCase')).toEqual('camel_Case');
  });

  it('should change space to camel snake case', () => {
    expect(camelSnakeCase('some whitespace')).toEqual('some_Whitespace');
  });

  it('should change hyphen to camel snake case', () => {
    expect(camelSnakeCase('hyphen-text')).toEqual('hyphen_Text');
  });

  it('should change Acronyms to small letter', () => {
    expect(camelSnakeCase('HTTPRequest')).toEqual('http_Request');
  });

  it('should handle leading and trailing whitespace', () => {
    expect(camelSnakeCase('    leading and trailing whitespace    ')).toEqual('leading_And_Trailing_Whitespace');
  });

  it('should handle special characters correctly', () => {
    expect(camelSnakeCase('special@characters!')).toEqual('special_Characters');
  });

  it('should work with an empty string', () => {
    expect(camelSnakeCase('')).toEqual('');
  });

  it('should work with screaming camel case', () => {
    expect(camelSnakeCase('FOO_BAR')).toEqual('foo_Bar');
  });

  it('should support emojis', () => {
    expect(camelSnakeCase('Keep unicode 😅')).toEqual('keep_Unicode_😅');
  });

  it('should work with numbers', () => {
    expect(camelSnakeCase('foo2bar')).toEqual('foo_2_Bar');
  });

  it('should work with ordinal numbers', () => {
    expect(camelSnakeCase('foo2ndBar')).toEqual('foo_2nd_Bar');
  });

  it('should work with contractions', () => {
    expect(camelSnakeCase("I'M A STRING")).toEqual("i'm_A_String");
  })
});