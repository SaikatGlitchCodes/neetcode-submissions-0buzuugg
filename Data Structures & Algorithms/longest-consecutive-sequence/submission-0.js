class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const num_set = new Set(nums);
        let longest = 0;
        for(let num of nums){
            if(!num_set.has(num-1)){
                let length = 1;
                while(num_set.has(num+length)){
                    length++
                }
                longest = Math.max(longest, length);
            }
        }
        return longest;
    }
}
