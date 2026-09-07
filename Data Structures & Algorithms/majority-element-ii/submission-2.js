class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let k = Math.floor(nums.length/3);
        const result = []
        const map = new Map();
        for(let num of nums) {
            map.set(num, (map.get(num)||0)+1);
            if(map.get(num) === k+1) {
                result.push(num)
            }
        };
        return result
    }
}
