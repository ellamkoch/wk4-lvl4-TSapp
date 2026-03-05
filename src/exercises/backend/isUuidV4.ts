/**Goal
Validate UUID v4 strings using a regex.

Acceptance criteria
*   - Returns true for valid UUID v4
*   - Returns false otherwise
*   - Uses a type predicate (value is string) to enable narrowing in other code
*/

/**
 * Signature
 * Checks whether a value is a UUID v4 string.
 */
//regex string patterns must start with ^ and end with $ to help js know the start and end and be wrapped in / / so its read as a pattern. variable normally is all caps as well to help identify its a pattern
let UUID_V4_VALUE = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

export function isUuidV4(value: unknown): value is string {
    if (typeof value !== "string") return false;

    return UUID_V4_VALUE.test(value);

}


