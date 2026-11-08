class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        if(cost.length == 1) return cost[0];
        if(cost.length == 2) return Math.min(cost[0], cost[1]);
        let first = cost[0];
        let second = cost[1];
        for(let i=2; i < cost.length; i++){
            let current = Math.min(first, second) + cost[i];
            first = second;
            second = current
        }
        return Math.min(first, second)
    }
}
