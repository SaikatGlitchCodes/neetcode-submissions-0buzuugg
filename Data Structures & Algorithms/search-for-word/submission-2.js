class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let r = board.length;
        let c = board[0].length;

        for(let i=0; i<r; i++){
            for(let j=0; j<c; j++){
                if(board[i][j]=== word[0]){
                    let temp = board[i][j];
                    board[i][j]='*';
                    if( genfun(i, j, word.slice(1)) ) return true
                    board[i][j] =temp;
                }
            }
        }
        function genfun(i, j, new_word){
            if(new_word.length == 0) return true;
            const dir =[
                [-1,0],[1,0],[0,-1],[0,1]
            ]

            for(let [dx, dy] of dir){
                let di = dx+i;
                let dj = dy+j;
                if(di>=0 && dj>=0 && di < r && dj <c && board[di][dj]!=='*' && board[di][dj]== new_word[0]){
                    let temp = board[di][dj];
                    board[di][dj]='*'
                    if( genfun(di, dj, new_word.slice(1)) ) return true
                    board[di][dj] = temp           
                }
            }
        }
    return false
    }
}
