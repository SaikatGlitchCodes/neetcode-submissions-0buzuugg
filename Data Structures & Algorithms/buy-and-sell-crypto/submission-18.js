class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l= 0;
        let r= 1;
        let max= 0
        while(r < prices.length && l<r){
            if( prices[l] > prices[r] ) l=r
            max = Math.max(max, (prices[r]-prices[l]))
            r++
        }
        return max
    }
}
