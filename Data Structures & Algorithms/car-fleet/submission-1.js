class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pair = position.map((v,i)=> [v, speed[i]]);
        const stack = [];
        pair.sort((a, b) => (b[0]-a[0]));
        
        for(let t of pair){
            if((stack[stack.length-1] || 0) < ((target-t[0])/t[1] )){
                stack.push((target-t[0])/t[1] )
            }
        }
        return stack.length
    }
}
