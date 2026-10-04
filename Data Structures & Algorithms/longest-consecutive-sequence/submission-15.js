class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let result = 0;
        for(let num of nums){
            if(!set.has(num-1)){
                let count = 0
                while(set.has(num++)) count++
                result =  Math.max(result, count)
            }
            
        }
        return result
    }
}
