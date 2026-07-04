class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l=0;
        let r= heights.length-1;
        let max_a = 0;
        while(l<r){
            let area = (r-l)*(Math.min(heights[l],heights[r]));
            max_a = Math.max(area, max_a);
            console.log(max_a)
            if(heights[r] < heights[l]) r--
            else l++
        }
        return max_a
    }
}
