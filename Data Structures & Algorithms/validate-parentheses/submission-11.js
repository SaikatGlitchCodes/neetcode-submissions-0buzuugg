class Solution {
    isValid(s) {
        const map = {
            ')': '(',
            ']': '[',
            '}': '{'
        };

        const stack = [];

        for (let char of s) {
            if (map[char]) {
                if (stack.pop() !== map[char]) {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}