class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length-1;
        function isChar(char){
            return /[a-zA-Z0-9]/i.test(char)
        }

        while(left < right){
            while(!isChar(s[left]) && left < right) left++;
            while(!isChar(s[right]) && left < right) right--;
            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false
            left++
            right--
        }
        return true
    }
}
