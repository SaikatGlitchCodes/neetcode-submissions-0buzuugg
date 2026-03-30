class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        while(b!=0){
            let temp = a ^ b;
            let carry = (a & b) << 1;
            a = temp;
            b = carry;
        }
        return a
    }
}

// 2 -- 0010
// 3 -- 0011
// 5 -- 0101
 