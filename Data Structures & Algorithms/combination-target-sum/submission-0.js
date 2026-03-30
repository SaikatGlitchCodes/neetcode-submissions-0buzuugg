class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    generateRe(nums, target, res, index, sum, temp){
        if(sum == target){
            res.push([...temp]);
            return
        }
        if(sum>target) return
        for(let i =index; i< nums.length; i++){
            temp.push(nums[i]);
            this.generateRe(nums, target, res, i, sum+nums[i], temp);
            temp.pop()
        }
    }
    combinationSum(nums, target) {
        let res = [];
        this.generateRe(nums, target, res, 0, 0, []);
        return res
    }
}
