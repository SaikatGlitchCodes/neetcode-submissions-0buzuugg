class Solution {
    maxSlidingWindow(nums, k) {
        const deque = [];
        let head = 0;
        const result = [];

        for (let r = 0; r < nums.length; r++) {

            // Remove indices outside the window
            while (
                head < deque.length &&
                deque[head] < r - k + 1
            ) {
                head++;
            }

            // Remove smaller values
            while (
                deque.length > head &&
                nums[deque[deque.length - 1]] <= nums[r]
            ) {
                deque.pop();
            }

            deque.push(r);

            if (r >= k - 1) {
                result.push(nums[deque[head]]);
            }
        }

        return result;
    }
}