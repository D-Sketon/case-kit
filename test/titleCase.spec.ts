import { describe, expect, it } from "vitest";
import { titleCase } from "../src/titleCase";

describe("titleCase", () => {
  it('should change camel case to title case', () => {
    expect(titleCase('camelCase')).toEqual('Camel Case');
  });

  it('should change space to title case', () => {
    expect(titleCase('some whitespace')).toEqual('Some Whitespace');
  });

  it('should change hyphen to title case', () => {
    expect(titleCase('hyphen-text')).toEqual('Hyphen Text');
  });

  it('should change Acronyms to small letter', () => {
    expect(titleCase('HTTPRequest')).toEqual('Http Request');
  });

  it('should handle leading and trailing whitespace', () => {
    expect(titleCase('    leading and trailing whitespace    ')).toEqual('Leading And Trailing Whitespace');
  });

  it('should handle special characters correctly', () => {
    expect(titleCase('special@characters!')).toEqual('Special Characters');
  });

  it('should work with an empty string', () => {
    expect(titleCase('')).toEqual('');
  });

  it('should work with screaming camel case', () => {
    expect(titleCase('FOO_BAR')).toEqual('Foo Bar');
  });

  it('should support emojis', () => {
    expect(titleCase('Keep unicode 😅')).toEqual('Keep Unicode 😅');
  });

  it('should work with numbers', () => {
    expect(titleCase('foo2bar')).toEqual('Foo 2 Bar');
  });

  it('should work with ordinal numbers', () => {
    expect(titleCase('foo2ndBar')).toEqual('Foo 2nd Bar');
  });

  it('should work with contractions', () => {
    expect(titleCase("I'M A STRING")).toEqual("I'm A String");
  })
});