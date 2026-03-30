class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const preSum = [];
        const surSum = [];
        for(let i =0; i<nums.length; i++){
            let endInx = nums.length-1-i
            preSum[i] = (preSum[i-1] ?? 1)*( nums[i-1] ?? 1);
            surSum[endInx] = (surSum[endInx+1] ?? 1)*( nums[endInx+1] ?? 1);
        }
        console.log(preSum)
        const res = []
        for(let j=0; j<preSum.length; j++){
            res[j] = preSum[j] * surSum[j]
        }

        return res
    }
}
