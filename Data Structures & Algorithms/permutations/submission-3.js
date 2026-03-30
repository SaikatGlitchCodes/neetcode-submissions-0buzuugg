class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {``
        let res = [];
        function recurr(temp){
            console.log('temp', temp)
            if(temp.length === nums.length){
                res.push([...temp]);
                return
            }
            if(temp.length > nums.length) return

            for(let i=0; i<nums.length; i++){
                if(temp.includes(nums[i])) continue
                temp.push(nums[i]);
                recurr(temp)
                temp.pop()
            }
        }
        recurr([])
        return res;
    }
}
