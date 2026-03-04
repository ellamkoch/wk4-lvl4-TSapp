/**
 * Entry point (optional).
 * You can use this file to manually run small demos while developing.
 */
console.log("Week 4 Day 3 exercises. Run `npm test` and `npm run typecheck`.");

import { parseBearerToken } from "./backend/parseBearerToken.js";

// console.log(parseBearerToken("Basic xyz"));

// const result = parseBearerToken("Bearer abc");
// console.log(result);

const result = parseBearerToken("Basic xyz");

if (result) {
    console.log("Token found:", result);
} else {
    console.log("Invalid header");
}
