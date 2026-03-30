class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let left = 0, maxLen = 0;

        for (let right = 0; right < s.length; right++) {
            // shrink window until no duplicate
            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }

            set.add(s[right]);
            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
        }
}
