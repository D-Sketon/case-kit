import { describe, expect, it } from "vitest";
import { sentenceCase } from "../src/sentenceCase";

describe("sentenceCase", () => {
  it('should change camel case to sentence case', () => {
    expect(sentenceCase('camelCase')).toEqual('Camel case');
  });

  it('should change space to sentence case', () => {
    expect(sentenceCase('some whitespace')).toEqual('Some whitespace');
  });

  it('should change hyphen to sentence case', () => {
    expect(sentenceCase('hyphen-text')).toEqual('Hyphen text');
  });

  it('should change Acronyms to small letter', () => {
    expect(sentenceCase('HTTPRequest')).toEqual('Http request');
  });

  it('should handle leading and trailing whitespace', () => {
    expect(sentenceCase('    leading and trailing whitespace    ')).toEqual('Leading and trailing whitespace');
  });

  it('should handle special characters correctly', () => {
    expect(sentenceCase('special@characters!')).toEqual('Special characters');
  });

  it('should work with an empty string', () => {
    expect(sentenceCase('')).toEqual('');
  });

  it('should work with screaming camel case', () => {
    expect(sentenceCase('FOO_BAR')).toEqual('Foo bar');
  });

  it('should support emojis', () => {
    expect(sentenceCase('Keep unicode 😅')).toEqual('Keep unicode 😅');
  });

  it('should work with numbers', () => {
    expect(sentenceCase('foo2bar')).toEqual('Foo 2 bar');
  });

  it('should work with ordinal numbers', () => {
    expect(sentenceCase('foo2ndBar')).toEqual('Foo 2nd bar');
  });

  it('should work with contractions', () => {
    expect(sentenceCase("I'M A STRING")).toEqual("I'm a string");
  })
});