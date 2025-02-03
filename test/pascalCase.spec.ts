import { describe, expect, it } from "vitest";
import { pascalCase } from "../src/pascalCase";

describe("pascalCase", () => {
  it('should change camel case to pascal case', () => {
    expect(pascalCase('camelCase')).toEqual('CamelCase');
  });

  it('should change space to pascal case', () => {
    expect(pascalCase('some whitespace')).toEqual('SomeWhitespace');
  });

  it('should change hyphen to pascal case', () => {
    expect(pascalCase('hyphen-text')).toEqual('HyphenText');
  });

  it('should change Acronyms to small letter', () => {
    expect(pascalCase('HTTPRequest')).toEqual('HttpRequest');
  });

  it('should handle leading and trailing whitespace', () => {
    expect(pascalCase('    leading and trailing whitespace    ')).toEqual('LeadingAndTrailingWhitespace');
  });

  it('should handle special characters correctly', () => {
    expect(pascalCase('special@characters!')).toEqual('SpecialCharacters');
  });

  it('should work with an empty string', () => {
    expect(pascalCase('')).toEqual('');
  });

  it('should work with screaming camel case', () => {
    expect(pascalCase('FOO_BAR')).toEqual('FooBar');
  });

  it('should support emojis', () => {
    expect(pascalCase('Keep unicode 😅')).toEqual('KeepUnicode😅');
  });

  it('should work with numbers', () => {
    expect(pascalCase('foo2bar')).toEqual('Foo2Bar');
  });

  it('should work with ordinal numbers', () => {
    expect(pascalCase('foo2ndBar')).toEqual('Foo2ndBar');
  });

  it('should work with contractions', () => {
    expect(pascalCase("I'M A STRING")).toEqual("I'mAString");
  })
});