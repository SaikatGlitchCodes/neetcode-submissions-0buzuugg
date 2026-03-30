class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let dir = [[0,1], [0,-1], [1,0], [-1,0]];
        let row = board.length;
        let col = board[0].length;
        for(let i=0; i<row; i++){
            for(let j=0; j<col; j++){
                if(board[i][j] == word[0]){
                    let temp = board[i][j];
                    board[i][j] = '#';
                    if (recurr(i,j, word.slice(1))) return true
                    board[i][j] = temp
                }
            }
        }

        function recurr(i, j, new_word){
            if(new_word.length == 0) return true
            for(let [dx, dy] of dir){
                let dxi = dx+i;
                let dyj = dy+j;
                if(dxi >= 0 && dyj >= 0 && dxi < row && dyj < col && board[dxi][dyj] !=='#' && new_word[0]=== board[dxi][dyj]){
                     let cache = board[dxi][dyj];
                     board[dxi][dyj] = '#';
                     if (recurr(dxi, dyj, new_word.slice(1))) return true;
                     board[dxi][dyj] = cache
                }
            }
        }
        return false
    }
}
