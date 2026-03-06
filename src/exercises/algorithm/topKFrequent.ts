/**
 * Goal
 *  - Return the k most frequent strings. Tie-break by alphabetical order.
 *  - k is just a name for the number of objects we're returning from the array in this case.
 *
 * Example Input:
 *  ["i", "love", "ts", "i", "love", "coding", "ts", "ts"]
 *
 * Example Output with a frequency of 2:
 * ["ts", "i"]
 *
/**
 * Signature
 *  - Returns the k most frequent words.
    - * If counts tie, sort alphabetically.
 */
export function topKFrequent(words: string[], k: number): string[] {

    //1. count frequencies
    const counts: Record<string, number> = {}

    //2. convert counts into something sortable
    words.forEach(word => {
        if (!counts[word]) {
            counts[word] = 1;
        } else {
            counts[word] += 1;
        }
    });
    //turn the objects into entries so we can sort them
    const entries = Object.entries(counts);
    //3 sort by rules, frequency and the alphabetical if tied
    entries.sort((a, b) => {
        if(a[1] === b[1]) {
            return a[0].localeCompare(b[0]);
        }

        return b[1] - a[1];
    })

    //4 slice out the top k, aka frequency listed. 2 in our example above.
    const top = entries.slice(0,k);
    //5. return just the words in the object
    return top.map(entry => entry[0]);
}
