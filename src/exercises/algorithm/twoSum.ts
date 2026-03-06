/**Goal
Return indices of two numbers that sum to target.

Acceptance criteria
*   - Runs in O(n)
*   - Does not reuse the same index twice
*   - Returns the first valid pair by scanning left-to-right (as tested)*/

/**
 * Signature
 * - Returns a couple of indices [i, j] where nums[i] + nums[j] === target.
 * - If no solution exists, return null.
 */

export function twoSum(nums: number[], target: number): [number, number] | null {

    //1. create a map
    const map = new Map<number, number>();

    //2. loop through the array once with for each
    for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    //3. compute the needed #
    const needed = target - nums[i];

    //4. check if the map contains what's needed
    const neededIndex = map.get(needed);
    if(neededIndex!== undefined) {
      return [neededIndex, i];
    }

    //5. otherwise store current number
    map.set(currentNum, i);
    }

    //6. if loop finishes with no matches, return null
    return null;

}

