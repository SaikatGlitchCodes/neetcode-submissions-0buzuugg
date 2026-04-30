class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        //s = "bbb"
        //sliding window
        let max = 0;
        let l=0;
        let r=0;
        let set = new Set()
        while(r<s.length){
            while(set.has(s[r])){
                    set.delete(s[l])
                    l++
            }
            set.add(s[r])
            max = Math.max(max, r-l+1)
            r++
        }
        return max
    }
}
