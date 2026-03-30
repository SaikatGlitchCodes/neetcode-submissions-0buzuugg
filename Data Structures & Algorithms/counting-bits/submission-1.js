class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        console.log(n)
        let result = []
        for(let i =0; i<=n; i++){
            let count = 0;
            let ele = i;
            while(ele!=0){
                count ++;
                ele = ele & (ele-1)
            }
            result.push(count)
        }
        return result;
    }
}
