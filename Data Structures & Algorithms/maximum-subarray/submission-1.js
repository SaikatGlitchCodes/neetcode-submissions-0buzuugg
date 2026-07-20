class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let l=0;
        let r=1;
        let sum=0;
        let max = nums[0];
        for(const num of nums){
            if(sum < 0){
                sum =0
            }
            sum+=num;
            max = Math.max(sum, max)
        }
        return max
    }
}
