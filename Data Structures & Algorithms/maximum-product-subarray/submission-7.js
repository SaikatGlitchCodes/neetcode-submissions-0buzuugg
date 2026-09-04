class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let res = nums[0];
        let min = 1;
        let max = 1;
        for(let num of nums){
            let curr = max
            max = Math.max(num, max*num, min*num);
            min = Math.min(num, curr*num, min*num);
            res = Math.max(res, max)
        }
        return res
    }
}
