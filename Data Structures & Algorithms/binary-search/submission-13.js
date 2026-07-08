class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l=0;
        let r=nums.length;
        while(l<=r){
            let mid = Math.floor((l+r)/2);
            if(target > nums[mid]){
                l = mid
            }else if(target < nums[mid]){
                r = mid
            }
            if(target == nums[mid]) return mid
            if(target == nums[l]) return l
            if(target == nums[r]) return r
            l++
            r--
        }
        return -1
    }
}
