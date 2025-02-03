import { describe, expect, it } from "vitest";
import { capitalize } from "../src/capitalize";

describe("capitalize", () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalize('foo')).toEqual('Foo');
  });

  it('should work with an empty string', () => {
    expect(capitalize('')).toEqual('');
  });

  it('should work with numbers', () => {
    expect(capitalize('2foo')).toEqual('2foo');
  });
});