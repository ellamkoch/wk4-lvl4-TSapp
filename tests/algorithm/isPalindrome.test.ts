import { describe, it, expect } from "vitest";
import { isPalindrome } from "../../src/exercises/algorithm/isPalindrome";

describe("isPalindrome", () => {
  it("handles simple palindromes", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  it("ignores punctuation and spaces", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  it("returns false for non-palindromes", () => {
    expect(isPalindrome("hello")).toBe(false);
  });
});
