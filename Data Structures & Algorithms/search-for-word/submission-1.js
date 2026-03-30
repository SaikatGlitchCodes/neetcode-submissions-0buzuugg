class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */

    generateRecurr(i, j, board, temp, word, col, row, new_word) {

        // ✅ Base case — all characters matched
        if (new_word.length === 0) return true;

        const dir = [[0,1],[1,0],[-1,0],[0,-1]];

        for (let [dx, dy] of dir) {
            let di = i + dx;
            let dj = j + dy;

            if (
                di >= 0 && di < row &&
                dj >= 0 && dj < col &&
                board[di][dj] !== '#' &&
                new_word[0] === board[di][dj]
            ) {
                // 🔒 Mark next cell visited
                let cach = board[di][dj];
                board[di][dj] = '#';

                if (
                    this.generateRecurr(
                        di,
                        dj,
                        board,
                        temp + cach,   // ✅ FIXED
                        word,
                        col,
                        row,
                        new_word.slice(1)
                    )
                ) return true;

                // 🔓 Backtrack
                board[di][dj] = cach;
            }
        }

        return false; // ✅ important
    }

    exist(board, word) {
        let col = board[0].length;
        let row = board.length;

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {

                if (board[i][j] === word[0]) {

                    let cach = board[i][j];
                    board[i][j] = '#';

                    if (
                        this.generateRecurr(
                            i,
                            j,
                            board,
                            cach,          // starting temp
                            word,
                            col,
                            row,
                            word.slice(1)
                        )
                    ) return true;

                    board[i][j] = cach;
                }
            }
        }

        return false;
    }
}
