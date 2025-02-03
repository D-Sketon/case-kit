import { describe, expect, it } from "vitest";
import { pipeCase } from "../src/pipeCase";

describe("pipeCase", () => {
  it('should change camel case to pipe case', () => {
    expect(pipeCase('camelCase')).toEqual('camel|case');
  });

  it('should change space to pipe case', () => {
    expect(pipeCase('some whitespace')).toEqual('some|whitespace');
  });

  it('should change hyphen to pipe case', () => {
    expect(pipeCase('hyphen-text')).toEqual('hyphen|text');
  });

  it('should change Acronyms to small letter', () => {
    expect(pipeCase('HTTPRequest')).toEqual('http|request');
  });

  it('should handle leading and trailing whitespace', () => {
    expect(pipeCase('    leading and trailing whitespace    ')).toEqual('leading|and|trailing|whitespace');
  });

  it('should handle special characters correctly', () => {
    expect(pipeCase('special@characters!')).toEqual('special|characters');
  });

  it('should work with an empty string', () => {
    expect(pipeCase('')).toEqual('');
  });

  it('should work with screaming camel case', () => {
    expect(pipeCase('FOO_BAR')).toEqual('foo|bar');
  });

  it('should support emojis', () => {
    expect(pipeCase('Keep unicode 😅')).toEqual('keep|unicode|😅');
  });

  it('should work with numbers', () => {
    expect(pipeCase('foo2bar')).toEqual('foo|2|bar');
  });

  it('should work with ordinal numbers', () => {
    expect(pipeCase('foo2ndBar')).toEqual('foo|2nd|bar');
  });

  it('should work with contractions', () => {
    expect(pipeCase("I'M A STRING")).toEqual("i'm|a|string");
  })
});