class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let o=1;
        let c=0;
        let result = []
        let string = "(";
        function createParenthesis(str, op, cl){
            if(op == n && op == cl){
                result.push(str)
                return
            }
            if(op < n){
                createParenthesis(str+'(', op+1, cl)
            }
            if(cl < op){
                createParenthesis(str+')', op, cl+1)
            }

        }
        createParenthesis(string, o, c);
        return result
    }
}
