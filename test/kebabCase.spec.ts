import { describe, expect, it } from "vitest";
import { kebabCase } from "../src/kebabCase";

describe("kebabCase", () => {
  it('should change camel case to kebab case', () => {
    expect(kebabCase('camelCase')).toEqual('camel-case');
  });

  it('should change space to kebab case', () => {
    expect(kebabCase('some whitespace')).toEqual('some-whitespace');
  });

  it('should change hyphen to kebab case', () => {
    expect(kebabCase('hyphen-text')).toEqual('hyphen-text');
  });

  it('should change Acronyms to small letter', () => {
    expect(kebabCase('HTTPRequest')).toEqual('http-request');
  });

  it('should handle leading and trailing whitespace', () => {
    expect(kebabCase('    leading and trailing whitespace    ')).toEqual('leading-and-trailing-whitespace');
  });

  it('should handle special characters correctly', () => {
    expect(kebabCase('special@characters!')).toEqual('special-characters');
  });

  it('should work with an empty string', () => {
    expect(kebabCase('')).toEqual('');
  });

  it('should work with screaming camel case', () => {
    expect(kebabCase('FOO_BAR')).toEqual('foo-bar');
  });

  it('should support emojis', () => {
    expect(kebabCase('Keep unicode 😅')).toEqual('keep-unicode-😅');
  });

  it('should work with numbers', () => {
    expect(kebabCase('foo2bar')).toEqual('foo-2-bar');
  });

  it('should work with ordinal numbers', () => {
    expect(kebabCase('foo2ndBar')).toEqual('foo-2nd-bar');
  });

  it('should work with contractions', () => {
    expect(kebabCase("I'M A STRING")).toEqual("i'm-a-string");
  })
});