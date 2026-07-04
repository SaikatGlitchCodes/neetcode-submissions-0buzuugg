class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const arr = Array.from({ length: nums.length+1}, ()=>[]);
        const result =[]
        const map = new Map()
        for(let num of nums){
            map.set(num, (map.get(num)||0)+1);
        }
        console.log(map)
        for(const [key, value] of map){
            arr[value].push(key)
        }
        for (let i = arr.length - 1; i >= 0; i--) {
            for (let num of arr[i]) {
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }
        return result
    }
}
