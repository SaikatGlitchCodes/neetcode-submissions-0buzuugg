class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        let r = matrix.length;
        let c = matrix[0].length;
        let rowZero = false;

        for(let i =0; i< r; i++){
            for(let j=0; j<c; j++){
                if(matrix[i][j]==0){
                    matrix[0][j] = 0;
                    if(i>0){
                        matrix[i][0] = 0;
                    }else{
                        rowZero = true
                    }
                }
            }
        }

        for(let i =1; i< r; i++){
            for(let j=1; j<c; j++){
                if(matrix[0][j]==0 || matrix[i][0]==0){
                    matrix[i][j]=0
                }
            }
        }

        if (matrix[0][0] == 0) {
            for (let i = 0; i < r; i++) {
                matrix[i][0] = 0;
            }
        }

        if (rowZero) {
            for (let j = 0; j < c; j++) {
                matrix[0][j] = 0;
            }
        }

        console.log(matrix);
    }
}
