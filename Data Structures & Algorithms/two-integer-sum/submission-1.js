class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let maps = new Map();
        for(let i=0; i<nums.length; i++){
            let new_target = target - nums[i];
            if(maps.has(new_target)){
                return [maps.get(new_target), i]
            }
            maps.set(nums[i], i)
        }
    }
}
