class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0;
        let row = grid.length;
        let col = grid[0].length;
        const directions = [[1,0], [-1,0], [0,1], [0,-1]];

        for(let r =0; r<row; r++){
            for(let c=0; c<col; c++){
                if(grid[r][c] == 1){
                    maxArea = Math.max(maxArea, dfs(r,c))
                }
            }
        }

        function dfs(i, j){
            if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] === 0) return 0;
            grid[i][j] =0;
            let res = 1;
            for (const [dr, dc] of directions) {
                res += dfs(i + dr, j + dc);
            }
            return res
        }
        return maxArea
    }
}
