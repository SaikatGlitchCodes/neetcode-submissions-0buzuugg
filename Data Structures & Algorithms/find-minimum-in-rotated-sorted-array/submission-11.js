class Solution {
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);

            if (nums[mid] > nums[right]) {
                // minimum must be to the RIGHT of mid
                left = mid + 1;
            } else {
                // mid could itself be the minimum
                right = mid;
            }
        }

        return nums[left];
    }
}