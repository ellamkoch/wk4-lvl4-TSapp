/**
 * Entry point (optional).
 * You can use this file to manually run small demos while developing.
 */
console.log("Week 4 Day 3 exercises. Run `npm test` and `npm run typecheck`.");

// import { parseBearerToken } from "./backend/parseBearerToken.js";

// // console.log(parseBearerToken("Basic xyz"));

// // const result = parseBearerToken("Bearer abc");
// // console.log(result);

// const result = parseBearerToken("Basic xyz");

// if (result) {
//     console.log("Token found:", result);
// } else {
//     console.log("Invalid header");
// }

// import { parsePagination } from "./backend/parsePagination.js";

// console.log(parsePagination(10,5));

// console.log(parsePagination(undefined,undefined));

// console.log(parsePagination("5", 10))

// // console.log(parsePagination("nope",5));

// console.log(parsePagination(0,5));

import { parseCsvIncludes } from "./backend/parseCsvIncludes.js";

console.log(parseCsvIncludes("comments,author", ["comments","author"]));

console.log(parseCsvIncludes("comments,likes,author", ["comments","author"]));

console.log(parseCsvIncludes("  AUTHOR , comments  ", ["comments","author"]));

console.log(parseCsvIncludes(undefined, ["comments","author"]));
