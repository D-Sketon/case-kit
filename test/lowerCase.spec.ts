import { describe, expect, it } from "vitest";
import { lowerCase } from "../src/lowerCase";

describe("lowerCase", () => {
  it('should change camel case to lower case', () => {
    expect(lowerCase('camelCase')).toEqual('camel case');
  });

  it('should change space to lower case', () => {
    expect(lowerCase('some whitespace')).toEqual('some whitespace');
  });

  it('should change hyphen to lower case', () => {
    expect(lowerCase('hyphen-text')).toEqual('hyphen text');
  });

  it('should change Acronyms to small letter', () => {
    expect(lowerCase('HTTPRequest')).toEqual('http request');
  });

  it('should handle leading and trailing whitespace', () => {
    expect(lowerCase('    leading and trailing whitespace    ')).toEqual('leading and trailing whitespace');
  });

  it('should handle special characters correctly', () => {
    expect(lowerCase('special@characters!')).toEqual('special characters');
  });

  it('should work with an empty string', () => {
    expect(lowerCase('')).toEqual('');
  });

  it('should work with screaming camel case', () => {
    expect(lowerCase('FOO_BAR')).toEqual('foo bar');
  });

  it('should support emojis', () => {
    expect(lowerCase('Keep unicode 😅')).toEqual('keep unicode 😅');
  });

  it('should work with numbers', () => {
    expect(lowerCase('foo2bar')).toEqual('foo 2 bar');
  });

  it('should work with ordinal numbers', () => {
    expect(lowerCase('foo2ndBar')).toEqual('foo 2nd bar');
  });

  it('should work with contractions', () => {
    expect(lowerCase("I'M A STRING")).toEqual("i'm a string");
  })
});