class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {  
        const oP = Expand(false);  
        const eP = Expand(true);
        function Expand(e){
            let evenMax = ""
            for(let i=0; i<s.length; i++){
                let l = i;
                let r = e? i+1:i;
                while(s[l] == s[r]&& l>-1 && r<s.length){
                    if((evenMax.length < (r-l+1)) ){
                        evenMax = s.slice(l,r+1)
                    }
                    l--;
                    r++;
                }
            }
            return evenMax
        }
        return eP.length > oP.length ? eP : oP
    }
}
