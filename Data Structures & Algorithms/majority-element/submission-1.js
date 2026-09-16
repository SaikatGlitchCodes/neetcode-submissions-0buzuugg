class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0;
        let res = nums[0]
        for(let num of nums){
            if(count == 0) res = num;
            count += num == res? 1:-1 
        }
        return res
    }
}
