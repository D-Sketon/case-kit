import { describe, expect, it } from "vitest";
import { pathCase } from "../src/pathCase";

describe("pathCase", () => {
  it('should change camel case to path case', () => {
    expect(pathCase('camelCase')).toEqual('camel/case');
  });

  it('should change space to path case', () => {
    expect(pathCase('some whitespace')).toEqual('some/whitespace');
  });

  it('should change hyphen to path case', () => {
    expect(pathCase('hyphen-text')).toEqual('hyphen/text');
  });

  it('should change Acronyms to small letter', () => {
    expect(pathCase('HTTPRequest')).toEqual('http/request');
  });

  it('should handle leading and trailing whitespace', () => {
    expect(pathCase('    leading and trailing whitespace    ')).toEqual('leading/and/trailing/whitespace');
  });

  it('should handle special characters correctly', () => {
    expect(pathCase('special@characters!')).toEqual('special/characters');
  });

  it('should work with an empty string', () => {
    expect(pathCase('')).toEqual('');
  });

  it('should work with screaming camel case', () => {
    expect(pathCase('FOO_BAR')).toEqual('foo/bar');
  });

  it('should support emojis', () => {
    expect(pathCase('Keep unicode 😅')).toEqual('keep/unicode/😅');
  });

  it('should work with numbers', () => {
    expect(pathCase('foo2bar')).toEqual('foo/2/bar');
  });

  it('should work with ordinal numbers', () => {
    expect(pathCase('foo2ndBar')).toEqual('foo/2nd/bar');
  });

  it('should work with contractions', () => {
    expect(pathCase("I'M A STRING")).toEqual("i'm/a/string");
  })
});