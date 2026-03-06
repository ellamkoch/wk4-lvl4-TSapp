import { describe, it, expect } from "vitest";
import { parsePagination } from "../../src/exercises/backend/parsePagination";

describe("parsePagination", () => {
  it("uses defaults when missing", () => {
    expect(parsePagination(undefined, undefined)).toEqual({ limit: 20, offset: 0 });
  });

  it("parses numeric strings", () => {
    expect(parsePagination("10", "5")).toEqual({ limit: 10, offset: 5 });
  });

  it("enforces max limit 100", () => {
    expect(() => parsePagination("101", "0")).toThrow();
  });

  it("rejects invalid values", () => {
    expect(() => parsePagination("-1", "0")).toThrow();
    expect(() => parsePagination("10", "-3")).toThrow();
    expect(() => parsePagination("nope", "0")).toThrow();
  });
});
