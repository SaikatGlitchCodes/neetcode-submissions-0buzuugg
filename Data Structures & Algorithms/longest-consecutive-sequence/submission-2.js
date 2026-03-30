class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let maxLen = 0;
        for(let num of nums){
            let curr = num
            if(!set.has(num-1)){
                let len = 1
                while(set.has(curr)){
                    console.log(curr)
                    len++;
                    curr++;
                }
                maxLen = Math.max(len-1, maxLen)
            }
            
        }
        return maxLen
    }
}
