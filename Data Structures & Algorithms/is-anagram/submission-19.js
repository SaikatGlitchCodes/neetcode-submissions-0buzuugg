class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if( s.length != t.length) return false
        const set= {};
        for(let i=0; i<s.length; i++){
            set[s[i]] = (set[s[i]] || 0) + 1;
            set[t[i]] = (set[t[i]] || 0) - 1;
        }
        
        return Object.values(set).every(v=> v==0)
    }
}
