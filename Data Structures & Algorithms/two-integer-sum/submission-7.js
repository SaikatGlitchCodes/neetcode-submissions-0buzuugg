class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {};
        for(let i=0; i<nums.length; i++){
            let new_target = target - nums[i];
            if(map[new_target] !== undefined) return [i, map[new_target]]
            map[nums[i]]= i
        }
        return []
    }
}
