class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res = [];
        function recurr(temp, o, c){
            
            if(o < c && o > n && c > n) return
            if(temp.length == n*2){
                res.push(temp);
                return
            }
            if(o < n) recurr(temp+'(', o+1, c);
            if(c < o) recurr(temp+')', o, c+1);
        }
        recurr('(', 1, 0)
        return res;
    }
}
