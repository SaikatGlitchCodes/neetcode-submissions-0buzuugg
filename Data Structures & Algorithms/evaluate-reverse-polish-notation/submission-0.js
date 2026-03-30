class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];

        for(let ele of tokens){
            if(ele == '+'){
                let res =  Number(stack.pop()) + Number(stack.pop());
                stack.push(res)
            }
            if(ele == '*'){
                let res =  Number(stack.pop()) * Number(stack.pop());
                stack.push(res)
            }
            if(ele == '-'){
                let res =  -(Number(stack.pop()) - Number(stack.pop()));
                stack.push(res)
            }
            if(ele == '/'){
                let a = stack.pop();
                let b = stack.pop();
                stack.push(Math.trunc(b/a));
            }
            if(ele != '+' && ele!='*' && ele!='-' && ele!='/'){
                stack.push(ele)
            }
        }
        console.log(stack)
        return stack[0]
    }
}
