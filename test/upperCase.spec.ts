import { describe, expect, it } from "vitest";
import { upperCase } from "../src/upperCase";

describe("upperCase", () => {
  it('should change camel case to upper case', () => {
    expect(upperCase('camelCase')).toEqual('CAMEL CASE');
  });

  it('should change space to upper case', () => {
    expect(upperCase('some whitespace')).toEqual('SOME WHITESPACE');
  });

  it('should change hyphen to upper case', () => {
    expect(upperCase('hyphen-text')).toEqual('HYPHEN TEXT');
  });

  it('should change Acronyms to upper case', () => {
    expect(upperCase('HTTPRequest')).toEqual('HTTP REQUEST');
  });

  it('should handle leading and trailing whitespace', () => {
    expect(upperCase('    leading and trailing whitespace    ')).toEqual('LEADING AND TRAILING WHITESPACE');
  });

  it('should handle special characters correctly', () => {
    expect(upperCase('special@characters!')).toEqual('SPECIAL CHARACTERS');
  });

  it('should work with an empty string', () => {
    expect(upperCase('')).toEqual('');
  });

  it('should work with screaming camel case', () => {
    expect(upperCase('FOO_BAR')).toEqual('FOO BAR');
  });

  it('should support emojis', () => {
    expect(upperCase('Keep unicode 😅')).toEqual('KEEP UNICODE 😅');
  });

  it('should work with numbers', () => {
    expect(upperCase('foo2bar')).toEqual('FOO 2 BAR');
  });

  it('should work with ordinal numbers', () => {
    expect(upperCase('foo2ndBar')).toEqual('FOO 2ND BAR');
  });

  it('should work with contractions', () => {
    expect(upperCase("I'M A STRING")).toEqual("I'M A STRING");
  })
});