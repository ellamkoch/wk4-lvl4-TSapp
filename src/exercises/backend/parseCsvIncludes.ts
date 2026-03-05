/**
 * Parses a CSV list and filters by allowed tokens.
 *
 * @param value unknown (usually req.query.include)
 * @param allowed allowed tokens, e.g. ["comments", "author"]
 */
export function parseCsvIncludes(
  value: unknown,
  allowed: readonly string[]
): Set<string> {
    //guard to return an empty set if its not a string
    if (typeof value !== "string") return new Set();
    //normalizes the allowed values
    const allowedSet = new Set(allowed.map(a => a.trim().toLowerCase()));
    //splits the csv
    const parts = value.split(",");
    //creates the result container
    const result = new Set<string>();
    //goes through the array and trims any extra space and converts its all to lower case.
    parts.forEach((part) => {
        const token = part.trim().toLowerCase();
        //filters the allowed values
        if (allowedSet.has(token)) {
            result.add(token);
        }
    });

    return result;
}
