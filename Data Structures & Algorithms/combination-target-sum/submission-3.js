class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = [];
        this.recurrsion([], result, 0, target, nums, 0)
        return result;
    }

    recurrsion(curr, result, sum, target, nums, start){
        if(sum == target){
            result.push([...curr]);
            return
        }
        if(sum > target){
            return
        }
        for(let i=start; i<nums.length; i++){
            curr.push(nums[i]);
            sum+=nums[i]
            this.recurrsion(curr, result, sum, target, nums, i);
            curr.pop();
            sum-=nums[i]
        }
    }
}
