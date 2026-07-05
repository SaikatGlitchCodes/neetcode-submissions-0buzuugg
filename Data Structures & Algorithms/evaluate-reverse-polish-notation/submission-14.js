class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (let token of tokens) {
            if (isNaN(token)) {
                let a = Number(stack.pop());
                let b = Number(stack.pop());

                switch (token) {
                    case "+":
                        stack.push(b + a);
                        break;
                    case "-":
                        stack.push(b - a);
                        break;
                    case "/":
                        stack.push(Math.trunc(b / a));
                        break;
                    case "*":
                        stack.push(b * a);
                        break;
                }
            } else {
                stack.push(Number(token));
            }
        }

        return stack[0];
    }
}