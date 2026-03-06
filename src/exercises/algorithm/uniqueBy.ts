 /**
  * Goal
  *  - Return unique items by key.
  *
  * Signature
  */
 export function uniqueBy<T, K extends string | number>(
   items: T[],
   keyFn: (item: T) => K
 ): T[] {

  //1. create an empty set for seen keys
  const seenKeys = new Set<K>();

  //2. create result array
  const result: T[] = [];
  //for each item
  items.forEach(item => {
  //get key using keyFn
    const key = keyFn(item);
  //if key not in seen
    if (!seenKeys.has(key)) {
      seenKeys.add(key); // add to seen
      result.push(item);
    }
//push item to the result

  });

  return result;
 }
