class Solution {
    isValid(s) {
        const map = new Map([
            ['}', '{'],
            [']', '['],
            [')', '(']
        ]);

        const stack = [];

        for (let char of s) {
            if (map.has(char)) {
                if (stack.pop() !== map.get(char)) {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}