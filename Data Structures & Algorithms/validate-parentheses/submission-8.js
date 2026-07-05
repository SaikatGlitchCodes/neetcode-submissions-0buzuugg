class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = {
            ']':'[',
            '}':'{',
            ')':'('
        };

        for(let str of s){
            if(map[str]){
                if(stack.pop() != map[str]) return false
            }else{
                stack.push(str)
            }
            console.log(stack)
        }
        return stack.length ? false : true
    }
}
