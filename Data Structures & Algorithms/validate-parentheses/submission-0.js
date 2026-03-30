class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let closeBacket = {
            '}':'{',
            ']':'[',
            ')':'('
        }
        for (let char of s){
            console.log(char)
            if(closeBacket[char]){
                console.log('close', closeBacket[char])
                if(stack[stack.length-1] == closeBacket[char]){
                    stack.pop();
                }
                else return false
            }else{
                stack.push(char)
            }
            console.log(stack, 'stack')
        }
        return stack.length == 0
    }
}
