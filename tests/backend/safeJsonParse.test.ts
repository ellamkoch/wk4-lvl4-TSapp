import { describe, it, expect } from "vitest";
import { safeJsonParse } from '../../src/exercises/backend/safeJsonParse';

describe("safeJsonParse", () => {
    it("safely parses JSON", () => {
        expect(safeJsonParse('{"message":"good json"}')).toEqual({ message: "good json" });
        expect(safeJsonParse("10")).toBe(10);
        expect(safeJsonParse("[10,11,12]")).toEqual([10,11,12]);
    });

    it("returns null if parsing fails", () => {
        expect(safeJsonParse("")).toBeNull;
        expect(safeJsonParse("bad json")).toBeNull;
    });
})
