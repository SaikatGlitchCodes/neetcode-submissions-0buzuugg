class Solution {
    /**
     * @param {string} order
     * @param {string} s
     * @return {string}
     */
    customSortString(order, s) {
        const freq = new Array(26).fill(0);
        for(const ch of s) freq[ch.charCodeAt(0)-97]++;
        let result = '';
        for(let ch of order){
            const idx = ch.charCodeAt(0)-97;
            while(freq[idx] > 0){
                result += ch;
                freq[idx]--;
            }
        }
        for(let i=0; i<26; i++){
            while(freq[i]>0){
                result+= String.fromCharCode(i+97);
                freq[i]--;
            }
        }
        return result
    }
}
