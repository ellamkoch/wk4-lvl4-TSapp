/**
 * Goal
 *   - Group items by a computed key using generics.
 * Acceptance Criteria
 *  - Accepts an array of items of generic type T
 *  - Accepts a callback that returns a grouping key of type string or number
 *  - Returns an object where each key maps to an array of matching items
 *  - Items with the same computed key are grouped together
 *  - Original items are preserved in their grouped arrays

Signature
/**
 * Groups items into an object keyed by K.
 */
export function groupBy<T, K extends string | number>(
  items: T[],
  keyFn: (item: T) => K
): Record<K, T[]> {
    //need to have this this way so TS knows what to expect. think of it like the blueprint for the variable and what we're trying to do.
    const grouped: Record<K, T[]> = {} as Record<K, T[]>;

    //go through the array and identify the key
    items.forEach((item) => {
        const key = keyFn(item);

        if (!grouped[key]) {
            grouped[key] = [];
        }
        //pushing the grouped items into the new, empty array
        grouped[key].push(item);
        });

        return grouped;
}
