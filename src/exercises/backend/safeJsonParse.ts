/**
 * Goal
 *  - Safely parse JSON. Return unknown | null.
 *
 * Signature
 *  - Safely parses JSON; returns null if parsing fails.
 */
export function safeJsonParse(input: string): unknown | null {
    try {
        return JSON.parse(input);
    } catch {
        return null;
    }
}
