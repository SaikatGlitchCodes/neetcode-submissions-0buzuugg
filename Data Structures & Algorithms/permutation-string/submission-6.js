class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const s1Freq = new Array(26).fill(0);
        const s2Freq = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            s1Freq[s1.charCodeAt(i) - 97]++;
            s2Freq[s2.charCodeAt(i) - 97]++;
        }

        let l = 0;

        for (let r = s1.length; r < s2.length; r++) {
            if (s1Freq.join('*') === s2Freq.join('*')) {
                return true;
            }

            s2Freq[s2.charCodeAt(r) - 97]++;
            s2Freq[s2.charCodeAt(l) - 97]--;

            l++;
        }

        return s1Freq.join('*') === s2Freq.join('*');
    }
}