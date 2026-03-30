class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateRec(res, n, o, c, temp){
        if(o==n && c==n){
            res.push(temp)
            return
        }
        if(o<n) this.generateRec(res,n, o+1, c, temp+"(")
        if(c<o) this.generateRec(res,n, o, c+1, temp+")")
    }
    generateParenthesis(n) {
        let res = [];
        this.generateRec(res, n, 1, 0, "(");
        return res;
    }
}
