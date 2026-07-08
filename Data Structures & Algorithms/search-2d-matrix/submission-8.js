class Solution {
    searchMatrix(matrix, target) {
        let size = matrix.length;
        let col = matrix[0].length - 1;
        let t_row = -1;

        for (let i = 0; i < size; i++) {
            if (matrix[i][0] <= target && matrix[i][col] >= target) {
                t_row = i;
                break;
            }
        }

        if (t_row === -1) return false;

        let arr = matrix[t_row];
        let l = 0;
        let r = col;

        while (l <= r) {
            let m = l + Math.floor((r - l) / 2);

            if (target === arr[m]) return true;
            else if (target > arr[m]) l = m + 1;
            else r = m - 1;
        }

        return false;
    }
}