class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let island = 0;
        let r = grid.length;
        let c = grid[0].length;

        function dfs(row, col){
            if(row < 0 || row >= r || col < 0 || col >= c || grid[row][col] == '0'){
                return;
            }

            grid[row][col] = '0';

            const dir = [[-1,0],[1,0],[0,-1],[0,1]];

            for(let d of dir){
                dfs(row + d[0], col + d[1]);
            }
        }

        for(let i=0; i<r; i++){
            for(let j=0; j<c; j++){
                if(grid[i][j] == '1'){
                    island++;
                    dfs(i, j);
                }
            }
        }

        return island;
    }
}