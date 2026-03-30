class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let r= matrix.length;
        let c= matrix[0].length;

        let left = 0;
        let right = r*c-1;

        while(left <= right){
            let mid = Math.floor((right+left)/2);
            let row = Math.floor(mid/c);
            let col = mid%c;
            let val = matrix[row][col];
            if(val == target) return true
            else if(val < target) {left = mid+1}
            else {right = mid -1}
        }
        return false
    }
}
