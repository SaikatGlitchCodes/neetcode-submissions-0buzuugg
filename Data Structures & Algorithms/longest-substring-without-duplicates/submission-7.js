class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       let l = 0;
       let maxCount = 0;
       let r = 0;
       let set = new Set();
       while(r< s.length){
        while(set.has(s[r]) && r<s.length){
            set.delete(s[l])
            l++
        }
        set.add(s[r]);
        maxCount = Math.max(maxCount, r-l+1)
        r++
       }

       return maxCount;
    }
}
