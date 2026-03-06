import { describe, it, expect } from "vitest";
import { topKFrequent } from "../../src/exercises/algorithm/topKFrequent";

describe("topKFrequent", () => {
  it("returns k most frequent with alphabetical tie-break", () => {
    const words = ["i", "love", "ts", "i", "love", "coding", "ts", "ts"];
    expect(topKFrequent(words, 2)).toEqual(["ts", "i"]);
  });

  it("handles k=1", () => {
    expect(topKFrequent(["a", "b", "b"], 1)).toEqual(["b"]);
  });
});
