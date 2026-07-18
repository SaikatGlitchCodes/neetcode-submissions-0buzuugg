class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l =0;
        let r =1;
        let max_p = 0;
        while(r<prices.length){
            if(prices[r] > prices[l]){
                max_p = Math.max(max_p, (prices[r]-prices[l]));
            }else l=r
            r++
        }

        return max_p
    }
}
