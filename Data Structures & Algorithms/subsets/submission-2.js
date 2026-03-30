class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];
        function recurr(temp, start){
            console.log(res, temp)
            res.push([...temp]);
            for(let i=start; i<nums.length; i++){
                temp.push(nums[i])
                recurr(temp, i+1)
                temp.pop()   
            }
        }
        recurr([], 0)
        return res;
    }
}
