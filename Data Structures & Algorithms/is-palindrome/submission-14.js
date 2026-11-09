class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        
        s= s.toLowerCase()
        let l=0;
        let r=s.length-1;
    while(l<r){
        while(!this.alphaNum(s[l]) && l<r) l++
        while(!this.alphaNum(s[r]) && l<r) r--
        console.log(s[l], s[r])
        if(s[l] !== s[r]) return false
        l++
        r--
    }
        return true
    }
    alphaNum(c) {
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
    }
}
