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

// import { parseCsvIncludes } from "./backend/parseCsvIncludes.js";

// console.log(parseCsvIncludes("comments,author", ["comments","author"]));

// console.log(parseCsvIncludes("comments,likes,author", ["comments","author"]));

// console.log(parseCsvIncludes("  AUTHOR , comments  ", ["comments","author"]));

// console.log(parseCsvIncludes(undefined, ["comments","author"]));

// import { isUuidV4 } from "./backend/isUuidV4.js";

// console.log(isUuidV4("3d594650-3436-4f56-ae0b-8fcd5aa5c2d4"));

// console.log(isUuidV4("not-a-uuid"));

// console.log(isUuidV4("3d594650-3436-4f56-ae0b-8fcd5aa5c2d4-xyz"));

// console.log(isUuidV4(undefined));

// const value: unknown = "3d594650-3436-4f56-ae0b-8fcd5aa5c2d4";

// if (isUuidV4(value)) {
//   console.log("Valid UUID:", value);
//   console.log("Length:", value.length);
// }

// import { twoSum } from "./algorithm/twoSum.js";

// console.log(twoSum([2,7,11,15], 9));

// console.log(twoSum([3,3], 6));

// console.log(twoSum([1,2,3], 999));

// import { isPalindrome } from "./algorithm/isPalindrome.js";

// console.log(isPalindrome('racecar'));

// console.log(isPalindrome('a man, a plan, a canal, panama'));

// console.log(isPalindrome('tacocat'));

// console.log(isPalindrome('hello'));

// import { groupBy } from './algorithm/groupBy.js';

// console.log(groupBy(["a", "bb", "ccc", "dd"], (s) => s.length));

import { topKFrequent } from "./algorithm/topKFrequent.js";

console.log(topKFrequent(["i", "love", "ts", "i", "love", "coding", "ts", "ts"],2));

console.log(topKFrequent(["a", "b", "b"],1));

console.log(topKFrequent(["cat","dog","cat","dog"], 2));

console.log(topKFrequent(["a","b","c","a","b","c"], 3));

console.log(topKFrequent(["x"], 1));
