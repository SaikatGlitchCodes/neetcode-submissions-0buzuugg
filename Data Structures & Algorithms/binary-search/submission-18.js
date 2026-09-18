class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length-1;
        while(l<=r){
            const mid = Math.floor(l + (r-l)/2);
            if(target == nums[mid]) return mid;
            else if(target > nums[mid]) l = mid+1
            else r= mid-1
            console.log(l,r, mid)
        }
        return -1
    }
}
