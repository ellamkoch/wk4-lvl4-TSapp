import { describe, it, expect } from "vitest";
import { parseCsvIncludes } from "../../src/exercises/backend/parseCsvIncludes";

describe("parseCsvIncludes", () => {
  const allowed = ["comments", "author"] as const;

  it("parses and filters includes", () => {
    const s = parseCsvIncludes("comments,author,unknown", allowed);
    expect(Array.from(s).sort()).toEqual(["author", "comments"]);
  });

  it("handles casing and whitespace", () => {
    const s = parseCsvIncludes("  AUTHOR ,  comments  ", allowed);
    expect(Array.from(s).sort()).toEqual(["author", "comments"]);
  });

  it("returns empty set for non-string", () => {
    expect(parseCsvIncludes(undefined, allowed).size).toBe(0);
    expect(parseCsvIncludes(1, allowed).size).toBe(0);
  });
});
