class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let res = 0;
        let row = grid.length;
        let col = grid[0].length;
        let dir = [[0,1], [0,-1], [1,0], [-1,0]];
        for(let i=0; i<row; i++){
            for(let j=0; j<col; j++){
                if(grid[i][j]=="1"){
                    res+=1
                    propogate(i,j)
                }
            }
        }

        function propogate(i,j){
            if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] !== '1') {
                return;
            }
            grid[i][j] = "0";
            for(let [x,y] of dir){
                let ix = x+i;
                let jy = y+j;
                propogate(ix, jy)
            }
        }

        return res
    }
}
