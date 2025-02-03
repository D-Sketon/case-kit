import { describe, expect, it } from "vitest";
import { alternatingCase } from "../src/alternatingCase";

describe("alternatingCase", () => {
  it('should change camel case to alternating case', () => {
    expect(alternatingCase('camelCase')).toEqual('cAmEl cAsE');
  });

  it('should change space to alternating case', () => {
    expect(alternatingCase('some whitespace')).toEqual('sOmE wHiTeSpAcE');
  });

  it('should change hyphen to alternating case', () => {
    expect(alternatingCase('hyphen-text')).toEqual('hYpHeN tExT');
  });

  it('should change Acronyms to small letter', () => {
    expect(alternatingCase('HTTPRequest')).toEqual('hTtP rEqUeSt');
  });

  it('should handle leading and trailing whitespace', () => {
    expect(alternatingCase('    leading and trailing whitespace    ')).toEqual('lEaDiNg aNd tRaIlInG wHiTeSpAcE');
  });

  it('should handle special characters correctly', () => {
    expect(alternatingCase('special@characters!')).toEqual('sPeCiAl cHaRaCtErS');
  });

  it('should work with an empty string', () => {
    expect(alternatingCase('')).toEqual('');
  });

  it('should work with screaming camel case', () => {
    expect(alternatingCase('FOO_BAR')).toEqual('fOo bAr');
  });

  it('should support emojis', () => {
    expect(alternatingCase('Keep unicode 😅')).toEqual('kEeP uNiCoDe 😅');
  });

  it('should work with numbers', () => {
    expect(alternatingCase('foo2bar')).toEqual('fOo 2 bAr');
  });

  it('should work with ordinal numbers', () => {
    expect(alternatingCase('foo2ndBar')).toEqual('fOo 2Nd bAr');
  });

  it('should work with contractions', () => {
    expect(alternatingCase("I'M A STRING")).toEqual("i'm a sTrInG");
  })
});