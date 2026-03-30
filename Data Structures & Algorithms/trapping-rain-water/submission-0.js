class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftMax = [];
        let rightMax = [];
        let left = 0
        let right = 0
        for (let h of height){
            left = Math.max(left, h);
            leftMax.push(left)
        }
        for (let i = height.length-1; i>=0; i--){
            right = Math.max(right, height[i]);
            rightMax[i] = right
        }
        let sum = 0;
        for(let i = 0; i<height.length-1; i++){
            let min = Math.min(rightMax[i], leftMax[i]);
            sum+= Math.abs( min-height[i] )
        }

        return sum
    }
}
