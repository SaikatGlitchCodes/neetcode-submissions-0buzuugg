class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let set = {};
        for(let i=0; i<nums.length; i++){
            let new_target = target - nums[i];
            if(set[new_target] != undefined) return [i, set[new_target]];
            set[nums[i]] = i
        }
        console.log(set)
        return [0,0]
    }
}
