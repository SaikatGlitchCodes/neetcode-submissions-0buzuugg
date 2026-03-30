class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        let result = new Array(temperatures.length).fill(0);
        for(let i =0 ; i< temperatures.length; i++){
            while(temperatures[stack[stack.length-1]] < temperatures[i] && stack.length > 0){
                console.log('result', i ,stack[stack.length-1])
                console.log(stack)
                result[stack[stack.length-1]] = i - stack[stack.length-1]
                stack.pop()
            }
            stack.push(i)
        }
        
        return result
    }
}
