class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length > s.length) return '';
        const map = new Map();
        for(let char of t){
            map.set(char, (map.get(char) || 0)+1);
        }
        let countReq = t.length;
        let minLength = Infinity;
        let start_i = 0;

        let j=0;
        let i =0;

        while(j<s.length){
            if(map.has(s[j]) && map.get(s[j]) > 0){
                countReq --
            }
            map.set(s[j],( map.get(s[j]) || 0)-1);

            while(countReq == 0){
                let currLen = j-i+1;
                if(currLen < minLength){
                    minLength = currLen;
                    start_i =i
                }
                map.set(s[i], (map.get(s[i])||0)+1);
                if(map.has(s[i]) && map.get(s[i]) > 0){
                    countReq++
                }
                i++
            }
            j++
        }

        return minLength == Infinity ? '' : s.slice(start_i, minLength+start_i)
    }
}
