class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        stack[0] = 0
        const res = new Array(temperatures.length).fill(0);
        for(let i = 1; i < temperatures.length; i++){
            while(temperatures[stack[stack.length-1]] < temperatures[i]){
                res[stack[stack.length-1]] = i-stack[stack.length-1];
                stack.pop()
            }
            stack.push(i)
        }
        return res
    }
}
