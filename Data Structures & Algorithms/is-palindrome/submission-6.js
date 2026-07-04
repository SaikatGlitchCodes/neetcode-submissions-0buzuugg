class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length-1;

        while(l<r){
            while(!(/[a-zA-Z0-9]/i.test(s[l])) && l<r) l++
            while(!(/[a-zA-Z0-9]/i.test(s[r])) && l<r) r--
            if(s[l].toLowerCase() !== s[r].toLowerCase()) return false
            l++
            r--
        }
        return true
    }
}
