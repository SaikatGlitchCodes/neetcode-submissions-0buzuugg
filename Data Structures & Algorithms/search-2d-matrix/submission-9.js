class Solution {
    searchMatrix(matrix, target) {
        const m = matrix.length;
        if (m === 0) return false;

        const n = matrix[0].length;
        let left = 0;
        let right = m * n - 1;

        while (left <= right) {
            const mid = left + ((right - left) >> 1);
            const row = Math.floor(mid / n);
            const col = mid % n;
            const value = matrix[row][col];

            if (value === target) return true;
            if (value < target) left = mid + 1;
            else right = mid - 1;
        }

        return false;
    }
}