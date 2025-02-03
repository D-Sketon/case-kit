import { describe, expect, it } from "vitest";
import { headerCase } from "../src/headerCase";

describe("headerCase", () => {
  it('should change camel case to header case', () => {
    expect(headerCase('camelCase')).toEqual('Camel-Case');
  });

  it('should change space to header case', () => {
    expect(headerCase('some whitespace')).toEqual('Some-Whitespace');
  });

  it('should change hyphen to header case', () => {
    expect(headerCase('hyphen-text')).toEqual('Hyphen-Text');
  });

  it('should change Acronyms to small letter', () => {
    expect(headerCase('HTTPRequest')).toEqual('Http-Request');
  });

  it('should handle leading and trailing whitespace', () => {
    expect(headerCase('    leading and trailing whitespace    ')).toEqual('Leading-And-Trailing-Whitespace');
  });

  it('should handle special characters correctly', () => {
    expect(headerCase('special@characters!')).toEqual('Special-Characters');
  });

  it('should work with an empty string', () => {
    expect(headerCase('')).toEqual('');
  });

  it('should work with screaming camel case', () => {
    expect(headerCase('FOO_BAR')).toEqual('Foo-Bar');
  });

  it('should support emojis', () => {
    expect(headerCase('Keep unicode 😅')).toEqual('Keep-Unicode-😅');
  });

  it('should work with numbers', () => {
    expect(headerCase('foo2bar')).toEqual('Foo-2-Bar');
  });

  it('should work with ordinal numbers', () => {
    expect(headerCase('foo2ndBar')).toEqual('Foo-2nd-Bar');
  });

  it('should work with contractions', () => {
    expect(headerCase("I'M A STRING")).toEqual("I'm-A-String");
  })
});