class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const am = new Array(amount+1).fill(amount+1);
        am[0] = 0;

        for(let i = 1; i< am.length; i++){
            for(let j=0; j< coins.length; j++){
                if(i>= coins[j]){
                    am[i] = Math.min(am[i], 1+ am[i- coins[j]]);
                }
            }
        }
        return am[amount] > amount ? -1 : am[amount]
        
    }
}
