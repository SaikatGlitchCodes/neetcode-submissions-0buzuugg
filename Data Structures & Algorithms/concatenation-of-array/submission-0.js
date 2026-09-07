class Solution {
    getConcatenation(nums) {
        const n = nums.length;
        const result = nums;

        for (let i = n; i < n * 2; i++) {
            result[i] = nums[i - n];
        }

        return result;
    }
}