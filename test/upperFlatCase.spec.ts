import { describe, expect, it } from "vitest";
import { upperFlatCase } from "../src/upperFlatCase";

describe("upperFlatCase", () => {
  it('should change camel case to upper flat case', () => {
    expect(upperFlatCase('camelCase')).toEqual('CAMELCASE');
  });

  it('should change space to upper flat case', () => {
    expect(upperFlatCase('some whitespace')).toEqual('SOMEWHITESPACE');
  });

  it('should change hyphen to upper flat case', () => {
    expect(upperFlatCase('hyphen-text')).toEqual('HYPHENTEXT');
  });

  it('should change Acronyms to upper flat case', () => {
    expect(upperFlatCase('HTTPRequest')).toEqual('HTTPREQUEST');
  });

  it('should handle leading and trailing whitespace', () => {
    expect(upperFlatCase('    leading and trailing whitespace    ')).toEqual('LEADINGANDTRAILINGWHITESPACE');
  });

  it('should handle special characters correctly', () => {
    expect(upperFlatCase('special@characters!')).toEqual('SPECIALCHARACTERS');
  });

  it('should work with an empty string', () => {
    expect(upperFlatCase('')).toEqual('');
  });

  it('should work with screaming camel case', () => {
    expect(upperFlatCase('FOO_BAR')).toEqual('FOOBAR');
  });

  it('should support emojis', () => {
    expect(upperFlatCase('Keep unicode 😅')).toEqual('KEEPUNICODE😅');
  });

  it('should work with numbers', () => {
    expect(upperFlatCase('foo2bar')).toEqual('FOO2BAR');
  });

  it('should work with ordinal numbers', () => {
    expect(upperFlatCase('foo2ndBar')).toEqual('FOO2NDBAR');
  });

  it('should work with contractions', () => {
    expect(upperFlatCase("I'M A STRING")).toEqual("I'MASTRING");
  })
});