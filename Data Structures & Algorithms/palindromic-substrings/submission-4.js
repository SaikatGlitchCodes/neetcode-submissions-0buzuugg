class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count =0;
        expand(true);
        expand(false);
        function expand(e){
            for (let i = 0; i < s.length; i++) {
                let l = i;
                let r = e?i+1:i;
                while (
                    l >= 0 &&
                    r < s.length &&
                    s[l] === s[r]
                ){
                    count++
                    l--;
                    r++;
                }
            }
        }
        
        return count
    }
}
                                                                                                                                                