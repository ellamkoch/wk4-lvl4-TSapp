/**
 * Parses an Authorization header in the format "Bearer <token>".
 *
 * @param header Unknown input (could be undefined, string, etc.)
 * @returns The token if valid; otherwise null.
 */
export function parseBearerToken(header: unknown): string | null {
    if (typeof header !== "string") return null;

    const trimmedHeader = header.trim();

    const parts = trimmedHeader.split(/\s+/);
    if (parts.length !== 2) return null;

    const [scheme, token] = parts;

    if (scheme.toLowerCase() !== "bearer") return null;
    if (!token) return null;

    return token;
}
