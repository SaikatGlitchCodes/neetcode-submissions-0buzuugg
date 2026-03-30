class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let count = 0;
        for(let s of set){
            if(!set.has(s-1)){
                let curr_count = 0;
                let curr = s
                while(set.has(curr)){
                    curr++
                    curr_count++
                }
                count = Math.max(count, curr_count)
            }
        }
        return count
    }
}
