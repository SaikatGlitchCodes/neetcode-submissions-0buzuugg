class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let s1Arr = new Array(26).fill(0);
        for(let i=0; i<s1.length; i++){
            s1Arr[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
        }
        console.log(s1Arr)
        let s2Arr = new Array(26).fill(0);
        let l =0;
        for(let r=0; r<s2.length; r++){
            let count = 0
            if(r - l + 1 > s1.length){
                console.log(l, r)
                s2Arr[s2[l].charCodeAt(0) - 'a'.charCodeAt(0)]--
                l++
            }
            s2Arr[s2[r].charCodeAt(0) - 'a'.charCodeAt(0)]++
            for(let i=0; i<26; i++){
                if(s1Arr[i] == s2Arr[i]) count++
            }
            if(count == 26) return true          
        }
        return false
        
    }
}