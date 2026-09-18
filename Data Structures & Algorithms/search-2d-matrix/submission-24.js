class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let col = matrix[0].length; // 4
        let row = matrix.length; //3
        let l = 0;
        let r = col*row-1; //11

        while(l<=r){
            const mid = Math.floor(l+(r-l)/2);
            const ROW = Math.floor(mid/col);
            const COL = mid%col;
            if(target == matrix[ROW][COL]) return true
            else if(target > matrix[ROW][COL]) l = mid +1;
            else r = mid-1
        }
        return false
    }
}
