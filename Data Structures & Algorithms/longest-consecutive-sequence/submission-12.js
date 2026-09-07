class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let max = 0;
        for(let num of set){
            let curr = 0;
            let curnum = num
            if(set.has(num-1)) continue
            while(set.has(curnum++)) curr++
            max = Math.max(curr, max)
        }
        return max
    }
}
