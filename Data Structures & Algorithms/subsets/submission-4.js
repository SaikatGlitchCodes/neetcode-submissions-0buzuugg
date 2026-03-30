class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = [];

        function recurr(temp, start){
            res.push([...temp]);
            if(temp.length >= nums.length) return
            for(let i=start; i<nums.length; i++){
                temp.push(nums[i])
                recurr(temp, i+1)
                temp.pop()
            }
        }
        recurr([], 0)

        return res
    }
}
