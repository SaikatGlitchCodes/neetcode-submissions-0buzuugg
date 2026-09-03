class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let left = [];
        let right = [];
        for(let i=0; i<nums.length; i++){
            left[i] = (nums[i-1] ?? 1) * (left[i-1] ?? 1)
        }
        for(let j=nums.length-1; j>=0; j--){
            right[j] = (nums[j+1] ?? 1) * (right[j+1] ?? 1)
        }
        for(let i=0; i<nums.length; i++){
            right[i] = right[i] * left[i]
        }
        return right
    }
}
