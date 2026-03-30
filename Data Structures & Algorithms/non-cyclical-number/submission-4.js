class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let set = new Set();


        while(!set.has(n)){
            set.add(n);
            let res = 0;
            while(n>0){
                let digit = n % 10;
                n = Math.floor(n/10);
                res+=digit*digit
            }
            if(res == 1) return true
            n = res;
        }
        
        return false

    }
}
