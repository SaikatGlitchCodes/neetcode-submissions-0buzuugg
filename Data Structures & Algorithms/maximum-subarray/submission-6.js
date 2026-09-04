class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = nums[0];
        let sum = 0;
        let j=0;
      for(const num of nums){
            if(sum < 0){
                sum =0
            }
            sum+=num
            max = Math.max(sum, max)
            j++
        }
        return max
}}
