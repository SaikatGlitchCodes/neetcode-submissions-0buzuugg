class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const sol = [];

        const freq = Array.from(
            { length: nums.length + 1 },
            () => []
        );

        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        for (const [val, count] of map) {
            freq[count].push(val);
        }
        const flatFre = freq.flat();
        for (let i = flatFre.length-1; i >= 0; i--) {
                        sol.push(flatFre[i])
            if(sol.length==k) return sol

        }
    }
}