import { describe, expect, it } from "vitest";
import { dotCase } from "../src/dotCase";

describe("dotCase", () => {
  it('should change camel case to dot case', () => {
    expect(dotCase('camelCase')).toEqual('camel.case');
  });

  it('should change space to dot case', () => {
    expect(dotCase('some whitespace')).toEqual('some.whitespace');
  });

  it('should change hyphen to dot case', () => {
    expect(dotCase('hyphen-text')).toEqual('hyphen.text');
  });

  it('should change Acronyms to small letter', () => {
    expect(dotCase('HTTPRequest')).toEqual('http.request');
  });

  it('should handle leading and trailing whitespace', () => {
    expect(dotCase('    leading and trailing whitespace    ')).toEqual('leading.and.trailing.whitespace');
  });

  it('should handle special characters correctly', () => {
    expect(dotCase('special@characters!')).toEqual('special.characters');
  });

  it('should work with an empty string', () => {
    expect(dotCase('')).toEqual('');
  });

  it('should work with screaming camel case', () => {
    expect(dotCase('FOO_BAR')).toEqual('foo.bar');
  });

  it('should support emojis', () => {
    expect(dotCase('Keep unicode 😅')).toEqual('keep.unicode.😅');
  });

  it('should work with numbers', () => {
    expect(dotCase('foo2bar')).toEqual('foo.2.bar');
  });

  it('should work with ordinal numbers', () => {
    expect(dotCase('foo2ndBar')).toEqual('foo.2nd.bar');
  });

  it('should work with contractions', () => {
    expect(dotCase("I'M A STRING")).toEqual("i'm.a.string");
  })
});