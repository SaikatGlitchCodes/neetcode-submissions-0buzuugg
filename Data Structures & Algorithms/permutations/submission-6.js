class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];
        const used = new Set();
        this.recur(res, nums, [], used);
        return res;
    }
    recur(res, nums, curr, used){
        if( curr.length == nums.length){
            res.push([...curr]);
            return;
        };

        for(let i=0; i< nums.length; i++ ){
            if(used.has(i)) continue;
            used.add(i);
            curr.push(nums[i]);
            this.recur(res, nums, curr, used);
            used.delete(i);
            curr.pop()
        }

    }

}
