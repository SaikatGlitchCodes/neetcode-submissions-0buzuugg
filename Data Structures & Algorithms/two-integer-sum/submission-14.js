class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const visitedMap = new Map();
        for(let i=0;i<nums.length;i++){
            const new_t = target-nums[i];
            if(visitedMap.has(new_t)) return [i, visitedMap.get(new_t)];
            visitedMap.set(nums[i], i)
        }

    }
}
