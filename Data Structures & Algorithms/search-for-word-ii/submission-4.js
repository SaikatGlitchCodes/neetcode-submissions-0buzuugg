class TreeNode{
    constructor(){
        this.children= new Array(26).fill(null);
        this.word= null;
    }
}

class Solution{
    constructor(){
        this.root = new TreeNode();
    }
    
    addWord(word){
        let curr = this.root;
        for(let char of word){
            let index = char.charCodeAt(0)-97;
            if(!curr.children[index]){
                curr.children[index] = new TreeNode();
            }
            curr = curr.children[index];
        }
        curr.word = word;
    }

    findWords(board, words){
        const res = [];
        const ROW = board.length;
        const COL = board[0].length;
        for(let word of words) this.addWord(word);


        function dfs(r, c, node){
            if(r<0 || c<0 || r>=ROW || c>=COL || board[r][c] == '#') return;
            const char = board[r][c];
            const index = char.charCodeAt(0)-97;
            const child = node.children[index];
            if(!child) return
            if(child.word !== null){
                res.push(child.word);
                child.word = null;
            }
            
            board[r][c] = "#";

            dfs(r + 1, c, child);
            dfs(r - 1, c, child);
            dfs(r, c + 1, child);
            dfs(r, c - 1, child);

            board[r][c] = char;
        }

        for (let r = 0; r < ROW; r++) {
            for (let c = 0; c < COL; c++) {
                dfs(r, c, this.root);
            }
        }
        return res;
    }


}