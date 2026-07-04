class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let arr_left=[]
        let arr_right=[]
        for(let i=0; i<nums.length; i++){
            arr_left[i] =( arr_left[i-1] ?? 1) * (nums[i-1] ?? 1);
            arr_right[nums.length - 1 - i] =
    (arr_right[nums.length - i] ?? 1) * (nums[nums.length - i] ?? 1);
        }
        console.log(arr_left, arr_right)
        return nums.map((v,i)=> arr_left[i]*arr_right[i])
    }
}
