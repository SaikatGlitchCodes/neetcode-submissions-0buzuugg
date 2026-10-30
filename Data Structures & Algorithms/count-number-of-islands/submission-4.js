class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROW = grid.length;
        const COL = grid[0].length;
        let res = 0;
        for(let r = 0; r< ROW; r++){
            for(let c=0; c< COL; c++){
                if(grid[r][c] == '1'){
                    res++;
                    dfs(r, c)
                }
            }
        }
        function dfs(r,c){
            if(r<0 || c<0 || r>=ROW || c>=COL || grid[r][c] == '0') return
            grid[r][c] = '0';
            dfs(r+1, c);
            dfs(r-1, c);
            dfs(r, c+1);
            dfs(r, c-1);
        }


        return res;
    }
}
