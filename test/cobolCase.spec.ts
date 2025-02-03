import { describe, expect, it } from "vitest";
import { cobolCase } from "../src/cobolCase";

describe("cobolCase", () => {
  it('should change camel case to cobol case', () => {
    expect(cobolCase('camelCase')).toEqual('CAMEL-CASE');
  });

  it('should change space to cobol case', () => {
    expect(cobolCase('some whitespace')).toEqual('SOME-WHITESPACE');
  });

  it('should change hyphen to cobol case', () => {
    expect(cobolCase('hyphen-text')).toEqual('HYPHEN-TEXT');
  });

  it('should change Acronyms to small letter', () => {
    expect(cobolCase('HTTPRequest')).toEqual('HTTP-REQUEST');
  });

  it('should handle leading and trailing whitespace', () => {
    expect(cobolCase('    leading and trailing whitespace    ')).toEqual('LEADING-AND-TRAILING-WHITESPACE');
  });

  it('should handle special characters correctly', () => {
    expect(cobolCase('special@characters!')).toEqual('SPECIAL-CHARACTERS');
  });

  it('should work with an empty string', () => {
    expect(cobolCase('')).toEqual('');
  });

  it('should work with screaming camel case', () => {
    expect(cobolCase('FOO_BAR')).toEqual('FOO-BAR');
  });

  it('should support emojis', () => {
    expect(cobolCase('Keep unicode 😅')).toEqual('KEEP-UNICODE-😅');
  });

  it('should work with numbers', () => {
    expect(cobolCase('foo2bar')).toEqual('FOO-2-BAR');
  });

  it('should work with ordinal numbers', () => {
    expect(cobolCase('foo2ndBar')).toEqual('FOO-2ND-BAR');
  });

  it('should work with contractions', () => {
    expect(cobolCase("I'M A STRING")).toEqual("I'M-A-STRING");
  })
});

