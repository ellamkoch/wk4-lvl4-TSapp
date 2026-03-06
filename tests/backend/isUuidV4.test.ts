import { describe, it, expect } from "vitest";
import { isUuidV4 } from "../../src/exercises/backend/isUuidV4";

describe("isUuidV4", () => {
  it("accepts valid UUID v4", () => {
    expect(isUuidV4("3d594650-3436-4f56-ae0b-8fcd5aa5c2d4")).toBe(true);
  });

  it("rejects invalid UUIDs", () => {
    expect(isUuidV4("not-a-uuid")).toBe(false);
    expect(isUuidV4("3d594650-3436-4f56-ae0b-8fcd5aa5c2d4-xyz")).toBe(false);
    expect(isUuidV4(undefined)).toBe(false);
  });

  it("acts as a type guard", () => {
    const value: unknown = "3d594650-3436-4f56-ae0b-8fcd5aa5c2d4";
    if (isUuidV4(value)) {
      // Here, TypeScript should treat `value` as string.
      expect(value.length).toBeGreaterThan(0);
    }
  });
});
