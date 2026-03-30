class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const mapBacket = {
            ')':'(',
            ']':'[',
            '}':'{'
        }

        const stack = [];
        for(let i=0; i<s.length; i++){
            if(!mapBacket[s[i]]) stack.push(s[i]);
            if(mapBacket[s[i]]){
                if(mapBacket[s[i]] == stack[stack.length-1]){
                    stack.pop()
                }else return false
            }
        }
        console.log(stack)
        return !stack.length
    }
}
