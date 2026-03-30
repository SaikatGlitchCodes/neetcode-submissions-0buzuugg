class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let i = 0;
        let map = new Map();
        while(i<nums.length){
            
            if(map.has(nums[i])){
                let pre = map.get(nums[i]);
                if(Math.abs(pre-i)<=k) return true
            }
            map.set(nums[i], i);
            i++;
        }
        return false
    }
}
