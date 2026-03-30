class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    generateRecu(res, used, temp, nums){
        if(nums.length == temp.length){
            res.push([...temp]);
            return
        }

        for(let i=0; i< nums.length; i++){
            if(used.has(i)) continue;
            used.add(i);
            temp.push(nums[i]);
            this.generateRecu(res, used, temp, nums);
            used.delete(i);
            temp.pop()
        }

    }
    permute(nums) {
        let res = [];
        let used = new Set();
        this.generateRecu(res, used, [], nums)
        return res
    }

}
