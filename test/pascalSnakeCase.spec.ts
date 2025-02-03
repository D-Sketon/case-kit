import { describe, expect, it } from "vitest";
import { pascalSnakeCase } from "../src/pascalSnakeCase";

describe("pascalSnakeCase", () => {
  it('should change camel case to pascal snake case', () => {
    expect(pascalSnakeCase('camelCase')).toEqual('Camel_Case');
  });

  it('should change space to pascal snake case', () => {
    expect(pascalSnakeCase('some whitespace')).toEqual('Some_Whitespace');
  });

  it('should change hyphen to pascal snake case', () => {
    expect(pascalSnakeCase('hyphen-text')).toEqual('Hyphen_Text');
  });

  it('should change Acronyms to small letter', () => {
    expect(pascalSnakeCase('HTTPRequest')).toEqual('Http_Request');
  });

  it('should handle leading and trailing whitespace', () => {
    expect(pascalSnakeCase('    leading and trailing whitespace    ')).toEqual('Leading_And_Trailing_Whitespace');
  });

  it('should handle special characters correctly', () => {
    expect(pascalSnakeCase('special@characters!')).toEqual('Special_Characters');
  });

  it('should work with an empty string', () => {
    expect(pascalSnakeCase('')).toEqual('');
  });

  it('should work with screaming camel case', () => {
    expect(pascalSnakeCase('FOO_BAR')).toEqual('Foo_Bar');
  });

  it('should support emojis', () => {
    expect(pascalSnakeCase('Keep unicode 😅')).toEqual('Keep_Unicode_😅');
  });

  it('should work with numbers', () => {
    expect(pascalSnakeCase('foo2bar')).toEqual('Foo_2_Bar');
  });

  it('should work with ordinal numbers', () => {
    expect(pascalSnakeCase('foo2ndBar')).toEqual('Foo_2nd_Bar');
  });

  it('should work with contractions', () => {
    expect(pascalSnakeCase("I'M A STRING")).toEqual("I'm_A_String");
  })
});