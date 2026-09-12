class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {  
        const oP = oddPalindrome();  
        const eP = evenPanlindrome();
        function oddPalindrome(){
            let evenMax = ""
            for(let i=0; i<s.length; i++){
                let l = i;
                let r = i;
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

        function evenPanlindrome(){
            let Emax = "";
            for(let i=0; i<s.length-1; i++){
                if(s[i] == s[i+1]){
                    let l=i;
                    let r=i+1;

                    while(s[l] == s[r]&& l>-1 && r<s.length){
                        if(Emax.length < (r-l+1)){
                            Emax = s.slice(l, r+1)
                        }
                        l--;
                        r++
                    }
                }
            }
            return Emax
        }
        return eP.length > oP.length ? eP : oP
    }
}
