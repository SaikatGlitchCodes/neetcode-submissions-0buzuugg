class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let res = [];
        function recurr(temp){
            console.log('temp', temp)
            if(temp.size === nums.length){
                res.push([...temp]);
                return
            }

            for(let i=0; i<nums.length; i++){
                if(temp.has(nums[i])) continue
                temp.add(nums[i]);
                recurr(temp)
                temp.delete(nums[i])
            }
        }
        recurr(new Set())
        return res;
    }
}
