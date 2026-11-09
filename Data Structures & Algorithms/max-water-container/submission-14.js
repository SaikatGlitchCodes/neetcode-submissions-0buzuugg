class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r= heights.length-1;
        let max = 0;
        while(l<r){
            const height = Math.min(heights[l], heights[r]);
            max = Math.max(max, (r-l)*height);
            if(heights[l] < heights[r]){
                l++
            }else{
                r--
            }
        }
        return max
    }
}
