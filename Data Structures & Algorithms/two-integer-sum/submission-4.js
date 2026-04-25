class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        for(let i=0; i<nums.length; i++){
            let new_target = target - nums[i];
            if(map.has(new_target)) return [i, map.get(new_target)]
            map.set(nums[i], i)  
        }
        return []
    }
}
