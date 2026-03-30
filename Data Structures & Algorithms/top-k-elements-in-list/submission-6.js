class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // 1:1 2:2 3:3
        const count = {};
        const res = [];
        const arr = Array.from({length : nums.length+1 }, ()=>[])
        for(let num of nums){
            count[num] = (count[num] || 0) + 1
        }
        for(let n in count){
            arr[count[n]].push(Number(n));
        }
        for(let i= arr.length-1; i>0; i--){
            for(const n of arr[i]){
                res.push(n);
                if(res.length == k) return res
            }
        }
        return res
    }
}
