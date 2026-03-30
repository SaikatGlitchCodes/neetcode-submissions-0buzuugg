class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = 1;
        let maxPrice = 0;
        while(right < prices.length){
            if(prices[left] > prices[right]) left = right
            maxPrice = Math.max(maxPrice, prices[right] - prices[left]);
            right++
        }
        return maxPrice
    }
}
