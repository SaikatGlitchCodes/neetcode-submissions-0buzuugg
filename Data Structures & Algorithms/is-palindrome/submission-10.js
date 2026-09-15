class Solution {
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        const isAlphaNumeric = char =>
            /[a-z0-9]/i.test(char);

        while (l < r) {
            while (l < r && !isAlphaNumeric(s[l])) l++;
            while (l < r && !isAlphaNumeric(s[r])) r--;

            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }

            l++;
            r--;
        }

        return true;
    }
}