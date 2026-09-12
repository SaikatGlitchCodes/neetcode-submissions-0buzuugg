class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const map = new Map();
        let max = 0;
        let l=0;
        for(let r=0; r<s.length; r++){
            if(map.has(s[r])){
                l = Math.max(map.get(s[r])+1, l);

            }
                            max = Math.max(max, r-l+1)
            map.set(s[r], r);
        }
        return max
    }
}
