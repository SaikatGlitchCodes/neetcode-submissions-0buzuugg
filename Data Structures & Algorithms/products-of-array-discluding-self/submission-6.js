class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const res = new Array(n).fill(1);
        const rres = new Array(n).fill(1);
        const result = []
        for(let i=1; i<n; i++){
            res[i] = res[i-1] * nums[i-1];
        }

        for(let j=n-2; j>=0; j--){
            rres[j] = rres[j+1] * nums[j+1]    
        }
        for(let i=0; i<nums.length; i++){
            result[i] = res[i] * rres[i];
        }
        return result
    }
}
