class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let max = 0;
        let stack = [];

        heights.push(0);

        for (let i = 0; i < heights.length; i++) {

            while (
                stack.length &&
                heights[stack[stack.length - 1]] > heights[i]
            ) {
                const index = stack.pop();
                const height = heights[index];

                const width = stack.length
                    ? i - stack[stack.length - 1] - 1
                    : i;

                max = Math.max(max, height * width);
            }

            stack.push(i);
        }

        return max;
    }
}