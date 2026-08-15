class Solution {
    searchMatrix(matrix, target) {
        const cols = matrix[0].length;

        let l = 0;
        let r = matrix.length - 1;

        while (l <= r) {
            const first = matrix[l][0];
            const last = matrix[l][cols - 1];

            if (first <= target && target <= last) {

                let x = 0;
                let y = cols - 1;

                while (x <= y) {
                    const m = x + Math.floor((y - x) / 2);

                    if (matrix[l][m] === target) {
                        return true;
                    }

                    if (matrix[l][m] > target) {
                        y = m - 1;
                    } else {
                        x = m + 1;
                    }
                }

                return false;
            }

            l++;
        }

        return false;
    }
}