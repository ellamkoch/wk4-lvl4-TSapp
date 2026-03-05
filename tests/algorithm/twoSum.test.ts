import { describe, it, expect } from "vitest";
import { twoSum } from "../../src/exercises/algorithm/twoSum";

describe("twoSum", () => {
  it("returns indices of a valid pair", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("returns null when no pair exists", () => {
    expect(twoSum([1, 2, 3], 999)).toBeNull();
  });

  it("does not reuse the same index", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
