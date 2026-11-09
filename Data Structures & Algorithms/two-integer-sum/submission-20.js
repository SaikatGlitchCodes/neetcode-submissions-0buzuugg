class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let set = {};
        for(let i=0; i<nums.length; i++){
            if(set[target - nums[i]] != undefined) return [i, set[target - nums[i]]];
            set[nums[i]] = i
        }
        return [0,0]
    }
}
