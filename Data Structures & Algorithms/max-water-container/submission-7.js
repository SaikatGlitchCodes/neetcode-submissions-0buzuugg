class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l =0;
        let r = heights.length-1;
        let max_area = 0;
        while(l<r){
            let area = (r-l) * Math.min(heights[r], heights[l]);
            max_area = Math.max(max_area, area);
            if(heights[l] < heights[r]) l++
            else r--
        }
        return max_area
    }
}
