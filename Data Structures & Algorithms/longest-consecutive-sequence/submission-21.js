class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res = 0;
        let obj = {};
        for(let num of nums) obj[num] =( obj[num] || 0 ) + 1;
        for(let num of nums){
           
            if(obj[num-1] == undefined){
                let count = 0;
                let curr = num
                while(obj[curr]){
                    curr++
                    count++
                }
                 res = Math.max(res, count)
            }
           
        }
        return res 
    }
}
