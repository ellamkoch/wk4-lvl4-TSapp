/**
 * Goal
 *  Check if a string is a palindrome ignoring case and non-alphanumeric characters.
 * Acceptance Criteria
 *  - can handle simple or complex palindromes
 *  - must return a true/false
 *  - ignores punctuation and spaces, and case
 * /


/**
 * Signature
 *  - Returns true if `input` is a palindrome.
 *  - Ignore punctuation, spaces, and casing.
 */
export function isPalindrome(input: string): boolean {
    //first clean the input
    const allowedInput = input.toLowerCase().replace(/[^a-z0-9]/g, "");
    //make cleaned = allowed input
    const cleaned = allowedInput;
    //split the cleaned input, reverse it and join it
    const reversed = cleaned.split("").reverse().join("");
    //compares the 2. if they're not = it'll return false
    return reversed === cleaned;

}

