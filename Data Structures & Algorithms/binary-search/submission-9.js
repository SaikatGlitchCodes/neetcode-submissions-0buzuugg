class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length-1;

        while(left <= right){
            if(nums[left] < target) left ++
            if(nums[right] > target) right --
            if(nums[left] == target) return left
            if(nums[right] == target) return right
        }
        return -1
    }
}
