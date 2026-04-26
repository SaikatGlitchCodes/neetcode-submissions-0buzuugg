class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let max = 0;
        for(let s of set){
            if(!set.has(s-1)){
                let count = 0;
                let curr = s
                while(set.has(curr)){
                    count++
                    curr++
                }
                max = Math.max(max, count)
            }
            
        }
        return max
    }
}
