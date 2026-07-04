class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let result = 0;

        for(let num of set){
            if(!set.has(num-1)){
             let iterator = 0;
                let curr = num
                while(set.has(curr)) {
                    iterator++
                    curr++
                }
                result = Math.max(result, iterator)
            }
        }
        return result
    }
}
