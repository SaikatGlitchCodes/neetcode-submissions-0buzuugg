class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const indexs = [0];
        const result = new Array(temperatures.length).fill(0);
        for(let i=1; i<temperatures.length; i++){
            while((temperatures[indexs[indexs.length-1]] < temperatures[i]) && indexs.length){
                result[indexs[indexs.length-1]] = i- indexs[indexs.length-1]
                indexs.pop()
            }
            indexs.push(i)
        }
        return result;
    }
}
