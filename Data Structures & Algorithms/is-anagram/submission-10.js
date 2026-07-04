class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false;
        let hash = new Map();
        for(let i=0; i<s.length; i++){
            hash.set(s[i], (hash.get(s[i]) || 0) +1)
            hash.set(t[i], (hash.get(t[i]) || 0) -1)
        }
        for(const [h, i] of hash){
            if(i != 0) return false
        }
        return true
    }
}
