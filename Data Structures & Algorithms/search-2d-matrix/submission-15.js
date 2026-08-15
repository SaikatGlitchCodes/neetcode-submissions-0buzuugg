class Solution {
    searchMatrix(matrix, target) {
        const cols = matrix[0].length;

        for (let row = 0; row < matrix.length; row++) {
            const first = matrix[row][0];
            const last = matrix[row][cols - 1];

            if (first <= target && target <= last) {
                let x = 0;

                while (x < cols) {
                    if (matrix[row][x] === target) return true;
                    x++;
                }

                return false;
            }
        }
        return false;
    }
}