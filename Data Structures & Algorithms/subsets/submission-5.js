class Solution {
    subsets(nums) {
        const result = [];

        function dfs(arr, i) {
            if (i >= nums.length) {
                result.push([...arr]);
                return;
            }

            // Take nums[i]
            arr.push(nums[i]);
            dfs(arr, i + 1);

            // Undo
            arr.pop();

            // Don't take nums[i]
            dfs(arr, i + 1);
        }

        dfs([], 0);

        return result;
    }
}