class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let max = 0;
        for(let num of set){
            if(set.has(num-1)) continue
            let curr = 0;
            let curnum = num
            while(set.has(curnum++)) curr++
            max = Math.max(curr, max)
        }
        return max
    }
}
