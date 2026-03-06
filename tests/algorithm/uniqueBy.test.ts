import { describe, it, expect } from "vitest";
import { uniqueBy } from "../../src/exercises/algorithm/uniqueBy.js";

 describe("uniqueBy", () => {
    it("removes duplicate primitive values", () => {
    const result = uniqueBy(["a", "b", "a", "c", "b"], x => x);

    expect(result).toEqual(["a", "b", "c"]);
  });

  it("keeps the first occurrence of each key", () => {
    const result = uniqueBy([1, 2, 2, 3, 1], n => n);

    expect(result).toEqual([1, 2, 3]);
  });

  it("works with objects using a key function", () => {
    const pets = [
      { id: 1, name: "Milo" },
      { id: 2, name: "Rex" },
      { id: 1, name: "Duplicate Milo" }
    ];

    const result = uniqueBy(pets, pet => pet.id);

    expect(result).toEqual([
      { id: 1, name: "Milo" },
      { id: 2, name: "Rex" }
    ]);
  });

  it("returns empty array when input is empty", () => {
    const result = uniqueBy([], x => x);

    expect(result).toEqual([]);
  });

});

