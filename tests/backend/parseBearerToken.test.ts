/**
 *Acceptance criteria
Accepts "Bearer abc" and "bearer abc"
Rejects missing token ("Bearer", "Bearer   ")
Rejects other schemes ("Basic xyz")
Trims extra spaces safely
*/

import { describe, it, expect } from 'vitest';
import { parseBearerToken } from '../../src/exercises/backend/parseBearerToken';


describe("parseBearerToken tests", () => {
    it("Accepts 'Bearer abc' and 'bearer abc' ", () => {
        expect(parseBearerToken("Bearer abc")).toBe("abc");
        expect(parseBearerToken("bearer abc")).toBe("abc");
    });

    it("rejects missing token and other schemes", () => {
        expect(parseBearerToken("Basic xyz")).toBeNull();//other scheme here
        expect(parseBearerToken("Bearer")).toBeNull();
        expect(parseBearerToken("Bearer   ")).toBeNull();
        expect(parseBearerToken(undefined)).toBeNull();
        expect(parseBearerToken(123)).toBeNull();
    });

    it("trims extra spaces safely", () => {
        expect(parseBearerToken("Bearer  token123   ")).toBe("token123");
    });
});
