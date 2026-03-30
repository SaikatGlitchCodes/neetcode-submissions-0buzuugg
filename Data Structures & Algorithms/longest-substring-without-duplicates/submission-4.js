class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let r= 0;
        let set = new Set();
        let maxLen = 0;
        while(r < s.length){
            console.log(set, l, r)
            while(set.has(s[r]) && r < s.length){
                set.delete(s[l])
                l++
            }
            set.add(s[r]);
            maxLen = Math.max(maxLen, r-l+1)
            r++
        }
        return maxLen
    }
}
