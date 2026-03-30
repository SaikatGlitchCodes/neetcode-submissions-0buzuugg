class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
   spiralOrder(matrix) {
    let r = matrix.length;
    let c = matrix[0].length;

    let top = 0;
    let bottom = r - 1;
    let left = 0;
    let right = c - 1;

    const res = [];

    function reGen(dir) {

        if (top > bottom || left > right) return;

        if (dir === 'r') {
            for (let i = left; i <= right; i++) {
                res.push(matrix[top][i]);
            }
            top++;
            reGen('d');
        }

        else if (dir === 'd') {
            for (let i = top; i <= bottom; i++) {
                res.push(matrix[i][right]);
            }
            right--;
            reGen('l');
        }

        else if (dir === 'l') {
            for (let i = right; i >= left; i--) {
                res.push(matrix[bottom][i]);
            }
            bottom--;
            reGen('u');
        }

        else if (dir === 'u') {
            for (let i = bottom; i >= top; i--) {
                res.push(matrix[i][left]);
            }
            left++;
            reGen('r');
        }
    }

    reGen('r');
    return res;
}
}
