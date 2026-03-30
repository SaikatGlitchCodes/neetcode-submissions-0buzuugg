class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        if(n ==0) return 1;

        if(n < 0){
            x = 1/x
            n = -n
        }
        let result = 1;
        let currPro = x;
        while(n>0){
            if(n%2==1){
                result*= currPro
                n=n-1
            }
            currPro *= currPro;
            n/=2
        }
        return result
    }
}
