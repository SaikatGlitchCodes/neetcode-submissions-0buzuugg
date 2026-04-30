class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max_profit = 0;
        let min = prices[0]
        
        for(let sell of prices){
            max_profit = Math.max(max_profit, sell-min);
            min = Math.min(min, sell)
        }

        return max_profit
    }
}
