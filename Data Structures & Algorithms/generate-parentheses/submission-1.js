class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];
        function genfun(temp, open, close){
            if(close > open) return
            if(open==n && close ==n){
                res.push(temp)
            }

            if(open < n) genfun(temp+'(', open+1, close);
            if(close < open) genfun(temp+')', open, close+1)

        }
        genfun("(", 1, 0)
        return res
    }
}
