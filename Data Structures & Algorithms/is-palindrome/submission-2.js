class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlphaNumeric = (str) =>{
            return /^[a-z0-9]+$/i.test(str);
        }
        let str = s.split(' ').join('').toLowerCase();
        let left = 0;
        let right = str.length-1;

        console.log(str)

        while(left < right){
            while(!isAlphaNumeric(str[left]) && left < right) left ++
            while(!isAlphaNumeric(str[right]) && left < right) right --

            console.log(str[left], str[right])

            if(str[left] != str[right]) return false
            left++
            right--
        }
        return true
    }
}
