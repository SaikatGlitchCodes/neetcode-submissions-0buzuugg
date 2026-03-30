class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashSet = new Set([]);
        for(let i=0; i < nums.length; i++){
            let new_target = target - nums[i];
            if(hashSet.has(new_target)){
                return [i, nums.indexOf(new_target)]
            }
            hashSet.add(nums[i])
        }
    }
}
