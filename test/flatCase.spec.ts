import { describe, expect, it } from "vitest";
import { flatCase } from "../src/flatCase";

describe("flatCase", () => {
  it('should change camel case to flat case', () => {
    expect(flatCase('camelCase')).toEqual('camelcase');
  });

  it('should change space to flat case', () => {
    expect(flatCase('some whitespace')).toEqual('somewhitespace');
  });

  it('should change hyphen to flat case', () => {
    expect(flatCase('hyphen-text')).toEqual('hyphentext');
  });

  it('should change Acronyms to small letter', () => {
    expect(flatCase('HTTPRequest')).toEqual('httprequest');
  });

  it('should handle leading and trailing whitespace', () => {
    expect(flatCase('    leading and trailing whitespace    ')).toEqual('leadingandtrailingwhitespace');
  });

  it('should handle special characters correctly', () => {
    expect(flatCase('special@characters!')).toEqual('specialcharacters');
  });

  it('should work with an empty string', () => {
    expect(flatCase('')).toEqual('');
  });

  it('should work with screaming camel case', () => {
    expect(flatCase('FOO_BAR')).toEqual('foobar');
  });

  it('should support emojis', () => {
    expect(flatCase('Keep unicode 😅')).toEqual('keepunicode😅');
  });

  it('should work with numbers', () => {
    expect(flatCase('foo2bar')).toEqual('foo2bar');
  });

  it('should work with ordinal numbers', () => {
    expect(flatCase('foo2ndBar')).toEqual('foo2ndbar');
  });

  it('should work with contractions', () => {
    expect(flatCase("I'M A STRING")).toEqual("i'mastring");
  })
});