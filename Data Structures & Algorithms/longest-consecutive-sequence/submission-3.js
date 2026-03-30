class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let maxLen = 0;
        for(let num of nums){
            if(!set.has(num-1)){
                let len = 1
                while(set.has(num)){
                    console.log(num)
                    len++;
                    num++;
                }
                maxLen = Math.max(len-1, maxLen)
            }
            
        }
        return maxLen
    }
}
