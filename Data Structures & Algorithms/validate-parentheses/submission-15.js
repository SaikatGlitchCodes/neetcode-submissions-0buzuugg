class Solution {
    isValid(s) {
        const map = {
            ')': '(',
            ']': '[',
            '}': '{'
        };
        if(s.length % 2) return false
        const stack = [];
        for(let str of s){
            if(map[str]){
                if(stack.pop() != map[str]) return false
            }else{
                stack.push(str)
            }
        }
        return stack.length ? false : true
    }
}