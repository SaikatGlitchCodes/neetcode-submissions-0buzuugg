class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target, start) {
        let res = [];
        function recurr(temp, sum, start){
            console.log(temp, sum);
            if(sum == target){
                res.push([...temp]);
                return
            }
            if(sum>target) return
            for(let i=start; i<nums.length; i++){
                temp.push(nums[i])
                recurr(temp, sum+nums[i], i)
                temp.pop()
            }
        }
        recurr([], 0, 0)

        return res;
    }
}
