class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let res = [];
        nums.sort((a,b) => a-b);

        function recurr(temp, start){            
            res.push([...temp]);

            for(let i=start; i<nums.length; i++){
                if(i>start && nums[i] == nums[i-1]) continue;
                temp.push(nums[i]);
                recurr(temp, i+1)
                temp.pop()
            }
        }
        recurr([], 0);
        console.log(res)
        return res
    }
}
