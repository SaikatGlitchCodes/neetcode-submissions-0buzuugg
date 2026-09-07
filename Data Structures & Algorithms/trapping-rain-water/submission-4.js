class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = [];
        let right = [];
        let result = 0;

        for(let i=0; i<height.length; i++){
            left[i] = Math.max(height[i], (left[i-1]||0))
        }
        for(let j=height.length-1; j>=0; j--){
            right[j] = Math.max(height[j], (right[j+1])||0);
        }
        for(let k=0; k<height.length; k++){
            result += Math.abs(Math.min(right[k], left[k])- height[k]);
        }
        console.log(left, right, result);
        return result
    }
}
