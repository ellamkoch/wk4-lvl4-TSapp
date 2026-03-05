export interface PaginationResult {
  limit: number;
  offset: number;
}

/**
 * Parses and validates pagination values.
 *
 * Defaults:
 * - limit = 20
 * - offset = 0
 *
 * Rules:
 * - limit must be 1..100
 * - offset must be >= 0
 */
export function parsePagination(
  limitRaw: unknown,
  offsetRaw: unknown
): PaginationResult {
    //setting defaults
    const limit = limitRaw ?? 20; //if limit is missing, default to 20
    const offset = offsetRaw ?? 0; // if page is missing, default to 0
    //define the limit and offset have to be numbers
    const limitNum = Number(limit);
    const offsetNum = Number(offset);
    // now guards to validate if it's a number or not
    if (!Number.isFinite(limitNum) || !Number.isFinite(offsetNum)) throw new Error ("Limit or offset must be a number");
    //now range validation
    if (limitNum > 100 || limitNum < 1) throw new Error ("Limit must be between 1 and 100");
    if (offsetNum < 0) throw new Error ("Offset must be 0 or greater");

    return { limit: limitNum, offset: offsetNum };
}


