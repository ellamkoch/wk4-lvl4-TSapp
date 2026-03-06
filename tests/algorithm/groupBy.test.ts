import { describe, it, expect } from "vitest";
import { groupBy } from "../../src/exercises/algorithm/groupBy";

describe("groupBy", () => {
  it("groups items by a computed key", () => {
    const items = ["a", "bb", "ccc", "dd"];
    const grouped = groupBy(items, (s) => s.length);

    expect(grouped[1]).toEqual(["a"]);
    expect(grouped[2]).toEqual(["bb", "dd"]);
    expect(grouped[3]).toEqual(["ccc"]);
  });
});
